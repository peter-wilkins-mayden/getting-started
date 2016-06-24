(ns app.ui
  (:require [om.dom :as dom]
            [om.next :as om :refer-macros [defui]]
            yahoo.intl-messageformat-with-locales
            [untangled.client.core :as uc]))



(defui ^:once Root
  static uc/InitialAppState
  (initial-state [clz params] {:ui/react-key "start"})
  static om/IQuery
  (query [this] [:ui/react-key])
  Object
  (render [this]
    (let [{:keys [ui/react-key list]} (om/props this)]
      (dom/div #js {:key react-key}
        (dom/h4 nil "Header")
        ))))
