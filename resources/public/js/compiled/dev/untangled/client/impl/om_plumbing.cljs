(ns untangled.client.impl.om-plumbing
  (:require [om.next :as om]
            [om.next.impl.parser :as op]
            [om.util :as util]
            [untangled.i18n.core :as i18n]
            [untangled.client.mutations :as m]
            [untangled.client.logging :as log]
            [cljs.core.async :as async]
            [clojure.zip :as zip])
  (:require-macros
    [cljs.core.async.macros :refer [go]]))

(defn has-remote-query? [ast] (or (:target ast) (some has-remote-query? (:children ast))))

(defn read-local
  "Read function for the Om parser.

  *** NOTE: This function only runs when it is called without a target -- it is not triggered for remote reads. To
  trigger a remote read, use the `untangled/data-fetch` namespace. ***

  Returns the current locale when reading the :ui/locale keyword. Otherwise pulls data out of the app-state.
  "
  [{:keys [query target state ast]} dkey _]
  (when (not target)
    (case dkey
      (let [top-level-prop (nil? query)
            key (or (:key ast) dkey)
            by-ident? (util/ident? key)
            union? (map? query)
            data (if by-ident? (get-in @state key) (get @state key))]
        {:value
         (cond
           union? (get (om/db->tree [{key query}] @state @state) key)
           top-level-prop data
           :else (om/db->tree query data @state))}))))

(defn write-entry-point [env k params]
  (let [rv (try
             (m/mutate env k params)
             (catch :default e
               (log/error (str "Mutation " k " failed with exception") e)
               nil))
        action (:action rv)]
    (if action
      (assoc rv :action (fn []
                          (try
                            (let [action-result (action env k params)]
                              (try
                                (m/post-mutate env k params)
                                (catch :default e (log/error (str "Post mutate failed on dispatch to " k))))
                              action-result)
                            (catch :default e
                              (log/error (str "Mutation " k " failed with exception") e)
                              (throw e)))))
      rv)))

(defn resolve-tempids [state tid->rid]
  "Replaces all om-tempids in app-state with the ids returned by the server."
  (if (empty? tid->rid)
    state
    (clojure.walk/prewalk #(if (-> % type (= om.tempid/TempId)) (get tid->rid % %) %) state)))

(defn rewrite-tempids-in-request-queue
  "Rewrite any pending requests in the request queue to account for the fact that a response might have
  changed ids that are expressed in the mutations of that queue. tempid-map MUST be a map from om
  tempid to real ids, not idents."
  [queue tempid-map]
  (loop [entry (async/poll! queue) entries []]
    (cond
      entry (recur (async/poll! queue) (conj entries (resolve-tempids entry tempid-map)))
      (seq entries) (doseq [e entries] (assert (async/offer! queue e) "Queue should not block.")))))

(defn remove-loads-and-fallbacks
  "Removes all untangled/load and tx/fallback mutations from the query"
  [query]
  (let [symbols-to-filter #{'untangled/load 'tx/fallback}
        ast (om/query->ast query)
        children (:children ast)
        new-children (filter (fn [child] (not (contains? symbols-to-filter (:dispatch-key child)))) children)
        new-ast (assoc ast :children new-children)]
    (om/ast->query new-ast)))

(defn fallback-query [query resp]
  "Filters out everything from the query that is not a fallback mutation.
  Returns nil if the resulting expression is empty."
  (let [symbols-to-find #{'tx/fallback}
        ast (om/query->ast query)
        children (:children ast)
        new-children (->> children
                          (filter (fn [child] (contains? symbols-to-find (:dispatch-key child))))
                          (map (fn [ast] (update ast :params assoc :execute true :error resp))))
        new-ast (assoc ast :children new-children)
        fallback-query (om/ast->query new-ast)]
    (when (not-empty fallback-query)
      fallback-query)))

(defn- is-ui-query-fragment? [kw]
  (when (keyword? kw) (some->> kw namespace (re-find #"^ui(?:\.|$)"))))

(defn strip-ui
  "Returns a new query with fragments beginning with `ui` removed."
  [query]
  (let [ast (om/query->ast query)
        drop-ui-children (fn drop-ui-children [ast-node]
                           (assoc ast-node :children
                                           (reduce (fn [acc n]
                                                     (if (is-ui-query-fragment? (:dispatch-key n))
                                                       acc
                                                       (conj acc (drop-ui-children n))
                                                       )
                                                     ) [] (:children ast-node))))]
    (om/ast->query (drop-ui-children ast))))

(def nf ::not-found)

(defn walk [inner outer form]
  (cond
    (map? form) (outer (into (empty form) (map #(inner (with-meta % {:map-entry? true})) form)))
    (list? form) (outer (apply list (map inner form)))
    (seq? form) (outer (doall (map inner form)))
    (record? form) (outer (reduce (fn [r x] (conj r (inner x))) form form))
    (coll? form) (outer (into (empty form) (map inner form)))
    :else (outer form)))

(defn prewalk [f form]
  (walk (partial prewalk f) identity (f form)))

(defn postwalk [f form]
  (walk (partial postwalk f) f form))

(defn recursive? [qf]
  (or                                                       ;(number? qf)
    (= '... qf)))
(defn add-meta-to-recursive-queries [q]
  (let [a (atom q)]
    (->> q
         (prewalk
           #(cond
             (and (vector? %)
                  (-> % meta :map-entry? false?))
             (do (reset! a %) %)

             (number? %) (with-meta '... {:... @a :depth %})

             (recursive? %) (with-meta % {:... @a})
             :else %))
         (postwalk
           #(cond
             (and (vector? %)
                  (not (some-> % meta :map-entry?))
                  (= (count %) 2)
                  (some-> % second meta :depth number?))
             [(first %) (-> % second meta :depth)]

             :else %)))))

(defn as-leaf
  "Returns data with meta-data marking it as a leaf in the result."
  [data]
  (if (coll? data)
    (with-meta data {:untangled/leaf true})
    data))

(defn leaf?
  "Returns true iff the given data is marked as a leaf in the result (according to the query). Requires pre-marking."
  [data]
  (or
    (not (coll? data))
    (empty? data)
    (and (coll? data)
         (-> data meta :untangled/leaf boolean))))

(defn mark-missing
  "Walk the query and response, marking anything that was asked for in the query but is not in the response a missing. The
  merge process (see application.cljs definition of merge for the reconciler) looks for these markers and overwrites existing data when they appear.
  Returns the result with missing markers in place."
  [result query]
  (letfn [(paramterized? [q]
            (and (list? q)
                 (or (symbol? (first q))
                     (= 2 (count q)))))
          (ok*not-found [res k]
            (cond
              (contains? res k) res
              (recursive? k) res
              :else (assoc (if (map? res) res {})
                      k nf)))
          (union->query [u] (->> u vals flatten set))
          (union? [q]
            (let [expr (cond-> q (seq? q) first)]
              (and (map? expr)
                   (< 1 (count (seq expr))))))
          (step [res q]
            (let [q (if (paramterized? q) (first q) q)
                  [query-key ?sub-query] (cond
                                           (util/join? q)
                                           [(util/join-key q) (util/join-value q)]
                                           :else [q nil])
                  result-or-not-found (ok*not-found res query-key)
                  result-or-not-found (if (and (keyword? q) (map? result-or-not-found)) (update result-or-not-found q as-leaf) result-or-not-found)
                  sub-result (get result-or-not-found query-key)]
              (cond
                ;; singleton union result
                (and (union? ?sub-query) (map? sub-result))
                (assoc result-or-not-found query-key
                                           (mark-missing sub-result
                                                         (union->query (get q query-key))))

                ;; list union result
                (union? ?sub-query)
                (as-> sub-result <>
                      (mapv #(mark-missing % (union->query (get q query-key))) <>)
                      (assoc result-or-not-found query-key <>))

                ;; ui.*/ fragment's are ignored
                (is-ui-query-fragment? q) (as-leaf res)

                ;; recur
                (and ?sub-query
                     (not= nf sub-result)
                     (not (recursive? ?sub-query)))
                (as-> sub-result <>
                      (if (vector? <>)
                        (mapv #(mark-missing % ?sub-query) <>)
                        (mark-missing <> ?sub-query))
                      (assoc result-or-not-found query-key <>))

                ;; recursive?
                (recursive? ?sub-query)
                (if-let [res- (get res query-key)]
                  (as-> res- <>
                        (if (vector? <>)
                          (mapv #(mark-missing % ?sub-query) <>)
                          (mark-missing <> ?sub-query))
                        (assoc res query-key <>))
                  result-or-not-found)

                ;; nf so next step
                :else result-or-not-found)))]
    (reduce step result
            (if (recursive? query)
              (-> query meta :... add-meta-to-recursive-queries)
              (add-meta-to-recursive-queries query)))))

(defn sweep-missing [result]
  (letfn [(clean [[k v]] (when-not (= v nf) [k v]))]
    (clojure.walk/prewalk
      #(if (map? %)
        (into {} (map clean %)) %)
      result)))
