// Compiled by ClojureScript 1.8.51 {}
goog.provide('untangled.client.core');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('goog.Uri');
goog.require('untangled.client.logging');
goog.require('untangled.client.impl.network');
goog.require('untangled.client.impl.om_plumbing');
goog.require('untangled.client.impl.util');
goog.require('om.next.protocols');
goog.require('untangled.client.impl.application');
goog.require('untangled.dom');
goog.require('om.next');
goog.require('untangled.client.impl.built_in_mutations');

/**
 * Entrypoint for creating a new untangled client. Instantiates an Application with default values, unless
 *   overridden by the parameters. If you do not supply a networking object, one will be provided that connects to the
 *   same server the application was served from, at `/api`.
 * 
 *   If you supply a `:request-transform` it must be a function:
 * 
 *   ```
 *  (fn [edn headers] [edn' headers'])
 *   ```
 * 
 *   it can replace the outgoing EDN or headers (returning both as a vector). NOTE: Both of these are clojurescript types.
 *   The edn will be encoded with transit, and the headers will be converted to a js map.
 * 
 *   `:initial-state` is your applications initial state. If it is an atom, it *must* be normalized. Untangled databases
 *   always have normalization turned on (for server data merging). If it is not an atom, it will be auto-normalized.
 * 
 *   `:started-callback` is an optional function that will receive the intiailized untangled application after it is
 *   mounted in the DOM, and is useful for triggering initial loads, routing mutations, etc. The Om reconciler is available
 *   under the `:reconciler` key (and you can access the app state, root node, etc from there.)
 * 
 *   `:network-error-callback` is a function of two arguments, the app state atom and the error, which will be invoked for
 *   every network error (status code >= 400, or no network found), should you choose to use the built-in networking record.
 * 
 *   `:migrate` is optional. It is a (fn [state tid->rid] ... state') that should return a new state where all tempids
 *   (the keys of `tid->rid`) are rewritten to real ids (the values of tid->rid). This defaults to a full recursive
 *   algorithm against all data in the app-state, which is correct but possibly slow).  Note that tempids will have an Om tempid data type.
 *   See Om reconciler documentation for further information.
 * 
 *   There is currently no way to circumvent the encoding of the body into transit. If you want to talk to other endpoints
 *   via alternate protocols you must currently implement that outside of the framework (e.g. global functions/state).
 *   
 */
untangled.client.core.new_untangled_client = (function untangled$client$core$new_untangled_client(var_args){
var args__30756__auto__ = [];
var len__30749__auto___40168 = arguments.length;
var i__30750__auto___40169 = (0);
while(true){
if((i__30750__auto___40169 < len__30749__auto___40168)){
args__30756__auto__.push((arguments[i__30750__auto___40169]));

var G__40170 = (i__30750__auto___40169 + (1));
i__30750__auto___40169 = G__40170;
continue;
} else {
}
break;
}

var argseq__30757__auto__ = ((((0) < args__30756__auto__.length))?(new cljs.core.IndexedSeq(args__30756__auto__.slice((0)),(0),null)):null);
return untangled.client.core.new_untangled_client.cljs$core$IFn$_invoke$arity$variadic(argseq__30757__auto__);
});

untangled.client.core.new_untangled_client.cljs$core$IFn$_invoke$arity$variadic = (function (p__40165){
var map__40166 = p__40165;
var map__40166__$1 = ((((!((map__40166 == null)))?((((map__40166.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40166.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40166):map__40166);
var initial_state = cljs.core.get.call(null,map__40166__$1,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),cljs.core.PersistentArrayMap.EMPTY);
var started_callback = cljs.core.get.call(null,map__40166__$1,new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),cljs.core.constantly.call(null,null));
var networking = cljs.core.get.call(null,map__40166__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var request_transform = cljs.core.get.call(null,map__40166__$1,new cljs.core.Keyword(null,"request-transform","request-transform",170337297));
var network_error_callback = cljs.core.get.call(null,map__40166__$1,new cljs.core.Keyword(null,"network-error-callback","network-error-callback",93849635),cljs.core.constantly.call(null,null));
var migrate = cljs.core.get.call(null,map__40166__$1,new cljs.core.Keyword(null,"migrate","migrate",-207110743),null);
return untangled.client.core.map__GT_Application.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),initial_state,new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),started_callback,new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"migrate","migrate",-207110743),migrate], null),new cljs.core.Keyword(null,"networking","networking",586110628),(function (){var or__29679__auto__ = networking;
if(cljs.core.truth_(or__29679__auto__)){
return or__29679__auto__;
} else {
return untangled.client.impl.network.make_untangled_network.call(null,"/api",new cljs.core.Keyword(null,"request-transform","request-transform",170337297),request_transform,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),network_error_callback);
}
})()], null));
});

untangled.client.core.new_untangled_client.cljs$lang$maxFixedArity = (0);

untangled.client.core.new_untangled_client.cljs$lang$applyTo = (function (seq40164){
return untangled.client.core.new_untangled_client.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40164));
});

/**
 * @interface
 */
untangled.client.core.InitialAppState = function(){};

/**
 * Get the initial state to be used for this component in app state. You are responsible for composing these together.
 */
untangled.client.core.initial_state = (function untangled$client$core$initial_state(clz,params){
if((!((clz == null))) && (!((clz.untangled$client$core$InitialAppState$initial_state$arity$2 == null)))){
return clz.untangled$client$core$InitialAppState$initial_state$arity$2(clz,params);
} else {
var x__30342__auto__ = (((clz == null))?null:clz);
var m__30343__auto__ = (untangled.client.core.initial_state[goog.typeOf(x__30342__auto__)]);
if(!((m__30343__auto__ == null))){
return m__30343__auto__.call(null,clz,params);
} else {
var m__30343__auto____$1 = (untangled.client.core.initial_state["_"]);
if(!((m__30343__auto____$1 == null))){
return m__30343__auto____$1.call(null,clz,params);
} else {
throw cljs.core.missing_protocol.call(null,"InitialAppState.initial-state",clz);
}
}
}
});

untangled.client.core.get_initial_state = (function untangled$client$core$get_initial_state(clz,params){
var state = untangled.client.core.initial_state.call(null,clz,params);
var q = om.next.get_query.call(null,clz);
var to_one_QMARK_ = cljs.core.map_QMARK_.call(null,state);
var to_many_QMARK_ = cljs.core.vector_QMARK_.call(null,state);
var union_QMARK_ = cljs.core.map_QMARK_.call(null,q);
var keys_of_interest = ((function (state,q,to_one_QMARK_,to_many_QMARK_,union_QMARK_){
return (function (s){
return clojure.set.difference.call(null,cljs.core.set.call(null,s),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("union","default","union/default",-1894281673),null], null), null));
});})(state,q,to_one_QMARK_,to_many_QMARK_,union_QMARK_))
;
if(union_QMARK_){
if(to_one_QMARK_){
var default_key = cljs.core.get.call(null,state,new cljs.core.Keyword("union","default","union/default",-1894281673));
if(cljs.core.truth_(clojure.set.subset_QMARK_.call(null,keys_of_interest.call(null,state),keys_of_interest.call(null,q)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Initial state for "),cljs.core.str(clz),cljs.core.str(" contains keys that are not in the query")].join('')),cljs.core.str("\n"),cljs.core.str("(set/subset? (keys-of-interest state) (keys-of-interest q))")].join('')));
}

if(cljs.core.truth_(default_key)){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Initial state for "),cljs.core.str(clz),cljs.core.str(" does not indicate which state is the :union/default.")].join('')),cljs.core.str("\n"),cljs.core.str("default-key")].join('')));
}
} else {
if(to_many_QMARK_){
return null;
} else {
return untangled.client.logging.warn.call(null,[cljs.core.str("Union on "),cljs.core.str(clz),cljs.core.str(" has a strange initial state")].join(''));

}
}
} else {
return state;
}
});

/**
 * @interface
 */
untangled.client.core.UntangledApplication = function(){};

/**
 * Start/replace the webapp on the given DOM ID or DOM Node.
 */
untangled.client.core.mount = (function untangled$client$core$mount(this$,root_component,target_dom_id){
if((!((this$ == null))) && (!((this$.untangled$client$core$UntangledApplication$mount$arity$3 == null)))){
return this$.untangled$client$core$UntangledApplication$mount$arity$3(this$,root_component,target_dom_id);
} else {
var x__30342__auto__ = (((this$ == null))?null:this$);
var m__30343__auto__ = (untangled.client.core.mount[goog.typeOf(x__30342__auto__)]);
if(!((m__30343__auto__ == null))){
return m__30343__auto__.call(null,this$,root_component,target_dom_id);
} else {
var m__30343__auto____$1 = (untangled.client.core.mount["_"]);
if(!((m__30343__auto____$1 == null))){
return m__30343__auto____$1.call(null,this$,root_component,target_dom_id);
} else {
throw cljs.core.missing_protocol.call(null,"UntangledApplication.mount",this$);
}
}
}
});

/**
 * Replace the entire app state with the given (pre-normalized) state.
 */
untangled.client.core.reset_state_BANG_ = (function untangled$client$core$reset_state_BANG_(this$,new_state){
if((!((this$ == null))) && (!((this$.untangled$client$core$UntangledApplication$reset_state_BANG_$arity$2 == null)))){
return this$.untangled$client$core$UntangledApplication$reset_state_BANG_$arity$2(this$,new_state);
} else {
var x__30342__auto__ = (((this$ == null))?null:this$);
var m__30343__auto__ = (untangled.client.core.reset_state_BANG_[goog.typeOf(x__30342__auto__)]);
if(!((m__30343__auto__ == null))){
return m__30343__auto__.call(null,this$,new_state);
} else {
var m__30343__auto____$1 = (untangled.client.core.reset_state_BANG_["_"]);
if(!((m__30343__auto____$1 == null))){
return m__30343__auto____$1.call(null,this$,new_state);
} else {
throw cljs.core.missing_protocol.call(null,"UntangledApplication.reset-state!",this$);
}
}
}
});

/**
 * Refresh the UI (force re-render). NOTE: You MUST support :key on your root DOM element with the :ui/react-key value from app state for this to work.
 */
untangled.client.core.refresh = (function untangled$client$core$refresh(this$){
if((!((this$ == null))) && (!((this$.untangled$client$core$UntangledApplication$refresh$arity$1 == null)))){
return this$.untangled$client$core$UntangledApplication$refresh$arity$1(this$);
} else {
var x__30342__auto__ = (((this$ == null))?null:this$);
var m__30343__auto__ = (untangled.client.core.refresh[goog.typeOf(x__30342__auto__)]);
if(!((m__30343__auto__ == null))){
return m__30343__auto__.call(null,this$);
} else {
var m__30343__auto____$1 = (untangled.client.core.refresh["_"]);
if(!((m__30343__auto____$1 == null))){
return m__30343__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"UntangledApplication.refresh",this$);
}
}
}
});

/**
 * Return a serialized version of the current history of the application, suitable for network transfer
 */
untangled.client.core.history = (function untangled$client$core$history(this$){
if((!((this$ == null))) && (!((this$.untangled$client$core$UntangledApplication$history$arity$1 == null)))){
return this$.untangled$client$core$UntangledApplication$history$arity$1(this$);
} else {
var x__30342__auto__ = (((this$ == null))?null:this$);
var m__30343__auto__ = (untangled.client.core.history[goog.typeOf(x__30342__auto__)]);
if(!((m__30343__auto__ == null))){
return m__30343__auto__.call(null,this$);
} else {
var m__30343__auto____$1 = (untangled.client.core.history["_"]);
if(!((m__30343__auto____$1 == null))){
return m__30343__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"UntangledApplication.history",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {untangled.client.core.UntangledApplication}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
untangled.client.core.Application = (function (initial_state,started_callback,networking,queue,response_channel,reconciler,parser,mounted_QMARK_,reconciler_options,__meta,__extmap,__hash){
this.initial_state = initial_state;
this.started_callback = started_callback;
this.networking = networking;
this.queue = queue;
this.response_channel = response_channel;
this.reconciler = reconciler;
this.parser = parser;
this.mounted_QMARK_ = mounted_QMARK_;
this.reconciler_options = reconciler_options;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
untangled.client.core.Application.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30301__auto__,k__30302__auto__){
var self__ = this;
var this__30301__auto____$1 = this;
return cljs.core._lookup.call(null,this__30301__auto____$1,k__30302__auto__,null);
});

untangled.client.core.Application.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30303__auto__,k40172,else__30304__auto__){
var self__ = this;
var this__30303__auto____$1 = this;
var G__40174 = (((k40172 instanceof cljs.core.Keyword))?k40172.fqn:null);
switch (G__40174) {
case "initial-state":
return self__.initial_state;

break;
case "started-callback":
return self__.started_callback;

break;
case "networking":
return self__.networking;

break;
case "queue":
return self__.queue;

break;
case "response-channel":
return self__.response_channel;

break;
case "reconciler":
return self__.reconciler;

break;
case "parser":
return self__.parser;

break;
case "mounted?":
return self__.mounted_QMARK_;

break;
case "reconciler-options":
return self__.reconciler_options;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k40172,else__30304__auto__);

}
});

untangled.client.core.Application.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30315__auto__,writer__30316__auto__,opts__30317__auto__){
var self__ = this;
var this__30315__auto____$1 = this;
var pr_pair__30318__auto__ = ((function (this__30315__auto____$1){
return (function (keyval__30319__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30316__auto__,cljs.core.pr_writer,""," ","",opts__30317__auto__,keyval__30319__auto__);
});})(this__30315__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30316__auto__,pr_pair__30318__auto__,"#untangled.client.core.Application{",", ","}",opts__30317__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),self__.initial_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),self__.started_callback],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"networking","networking",586110628),self__.networking],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"queue","queue",1455835879),self__.queue],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response-channel","response-channel",1395191493),self__.response_channel],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parser","parser",-1543495310),self__.parser],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mounted?","mounted?",712114760),self__.mounted_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035),self__.reconciler_options],null))], null),self__.__extmap));
});

untangled.client.core.Application.prototype.cljs$core$IIterable$ = true;

untangled.client.core.Application.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40171){
var self__ = this;
var G__40171__$1 = this;
return (new cljs.core.RecordIter((0),G__40171__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),new cljs.core.Keyword(null,"networking","networking",586110628),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"response-channel","response-channel",1395191493),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"mounted?","mounted?",712114760),new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

untangled.client.core.Application.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30299__auto__){
var self__ = this;
var this__30299__auto____$1 = this;
return self__.__meta;
});

untangled.client.core.Application.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30295__auto__){
var self__ = this;
var this__30295__auto____$1 = this;
return (new untangled.client.core.Application(self__.initial_state,self__.started_callback,self__.networking,self__.queue,self__.response_channel,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,self__.__hash));
});

untangled.client.core.Application.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30305__auto__){
var self__ = this;
var this__30305__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

untangled.client.core.Application.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30296__auto__){
var self__ = this;
var this__30296__auto____$1 = this;
var h__30114__auto__ = self__.__hash;
if(!((h__30114__auto__ == null))){
return h__30114__auto__;
} else {
var h__30114__auto____$1 = cljs.core.hash_imap.call(null,this__30296__auto____$1);
self__.__hash = h__30114__auto____$1;

return h__30114__auto____$1;
}
});

untangled.client.core.Application.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__30297__auto__,other__30298__auto__){
var self__ = this;
var this__30297__auto____$1 = this;
if(cljs.core.truth_((function (){var and__29667__auto__ = other__30298__auto__;
if(cljs.core.truth_(and__29667__auto__)){
var and__29667__auto____$1 = (this__30297__auto____$1.constructor === other__30298__auto__.constructor);
if(and__29667__auto____$1){
return cljs.core.equiv_map.call(null,this__30297__auto____$1,other__30298__auto__);
} else {
return and__29667__auto____$1;
}
} else {
return and__29667__auto__;
}
})())){
return true;
} else {
return false;
}
});

untangled.client.core.Application.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30310__auto__,k__30311__auto__){
var self__ = this;
var this__30310__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"networking","networking",586110628),null,new cljs.core.Keyword(null,"response-channel","response-channel",1395191493),null,new cljs.core.Keyword(null,"queue","queue",1455835879),null,new cljs.core.Keyword(null,"mounted?","mounted?",712114760),null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),null,new cljs.core.Keyword(null,"parser","parser",-1543495310),null,new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),null,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),null,new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035),null], null), null),k__30311__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30310__auto____$1),self__.__meta),k__30311__auto__);
} else {
return (new untangled.client.core.Application(self__.initial_state,self__.started_callback,self__.networking,self__.queue,self__.response_channel,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30311__auto__)),null));
}
});

untangled.client.core.Application.prototype.untangled$client$core$UntangledApplication$ = true;

untangled.client.core.Application.prototype.untangled$client$core$UntangledApplication$mount$arity$3 = (function (this$,root_component,dom_id_or_node){
var self__ = this;
var this$__$1 = this;
var state = (function (){var or__29679__auto__ = (function (){var and__29667__auto__ = ((!((root_component == null)))?(((false) || (root_component.untangled$client$core$InitialAppState$))?true:false):false);
if(and__29667__auto__){
return untangled.client.core.initial_state.call(null,root_component,null);
} else {
return and__29667__auto__;
}
})();
if(cljs.core.truth_(or__29679__auto__)){
return or__29679__auto__;
} else {
return self__.initial_state;
}
})();
if(cljs.core.truth_(self__.mounted_QMARK_)){
untangled.client.core.refresh.call(null,this$__$1);

return this$__$1;
} else {
if((function (){var and__29667__auto__ = (cljs.core._EQ_.call(null,cljs.core.Atom,cljs.core.type.call(null,self__.initial_state))) || (cljs.core.seq.call(null,self__.initial_state));
if(and__29667__auto__){
if(!((root_component == null))){
if((false) || (root_component.untangled$client$core$InitialAppState$)){
return true;
} else {
return false;
}
} else {
return false;
}
} else {
return and__29667__auto__;
}
})()){
untangled.client.logging.warn.call(null,"You supplied an initial state AND a root component with a constructor. Using InitialAppState!");
} else {
}

var app__$1 = untangled.client.impl.application.initialize.call(null,this$__$1,state,root_component,dom_id_or_node,self__.reconciler_options);
untangled.client.core.merge_alternate_union_elements_BANG_.call(null,app__$1,root_component);

return app__$1;
}
});

untangled.client.core.Application.prototype.untangled$client$core$UntangledApplication$reset_state_BANG_$arity$2 = (function (this$,new_state){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,om.next.app_state.call(null,self__.reconciler),new_state);
});

untangled.client.core.Application.prototype.untangled$client$core$UntangledApplication$history$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var history_steps = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(self__.reconciler)).arr;
var history_map = cljs.core.deref.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(self__.reconciler)).index);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"steps","steps",-128433302),history_steps,new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (history_steps,history_map,this$__$1){
return (function (p__40181){
var vec__40182 = p__40181;
var k = cljs.core.nth.call(null,vec__40182,(0),null);
var v = cljs.core.nth.call(null,vec__40182,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.call(null,v,new cljs.core.Keyword("untangled","meta","untangled/meta",1275048992),cljs.core.meta.call(null,v))], null);
});})(history_steps,history_map,this$__$1))
,history_map))], null);
});

untangled.client.core.Application.prototype.untangled$client$core$UntangledApplication$refresh$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
untangled.client.logging.info.call(null,"RERENDER: NOTE: If your UI doesn't change, make sure you query for :ui/react-key on your Root and embed that as :key in your top-level DOM element");

return untangled.dom.force_render.call(null,self__.reconciler);
});

untangled.client.core.Application.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30308__auto__,k__30309__auto__,G__40171){
var self__ = this;
var this__30308__auto____$1 = this;
var pred__40183 = cljs.core.keyword_identical_QMARK_;
var expr__40184 = k__30309__auto__;
if(cljs.core.truth_(pred__40183.call(null,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),expr__40184))){
return (new untangled.client.core.Application(G__40171,self__.started_callback,self__.networking,self__.queue,self__.response_channel,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__40183.call(null,new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),expr__40184))){
return (new untangled.client.core.Application(self__.initial_state,G__40171,self__.networking,self__.queue,self__.response_channel,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__40183.call(null,new cljs.core.Keyword(null,"networking","networking",586110628),expr__40184))){
return (new untangled.client.core.Application(self__.initial_state,self__.started_callback,G__40171,self__.queue,self__.response_channel,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__40183.call(null,new cljs.core.Keyword(null,"queue","queue",1455835879),expr__40184))){
return (new untangled.client.core.Application(self__.initial_state,self__.started_callback,self__.networking,G__40171,self__.response_channel,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__40183.call(null,new cljs.core.Keyword(null,"response-channel","response-channel",1395191493),expr__40184))){
return (new untangled.client.core.Application(self__.initial_state,self__.started_callback,self__.networking,self__.queue,G__40171,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__40183.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),expr__40184))){
return (new untangled.client.core.Application(self__.initial_state,self__.started_callback,self__.networking,self__.queue,self__.response_channel,G__40171,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__40183.call(null,new cljs.core.Keyword(null,"parser","parser",-1543495310),expr__40184))){
return (new untangled.client.core.Application(self__.initial_state,self__.started_callback,self__.networking,self__.queue,self__.response_channel,self__.reconciler,G__40171,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__40183.call(null,new cljs.core.Keyword(null,"mounted?","mounted?",712114760),expr__40184))){
return (new untangled.client.core.Application(self__.initial_state,self__.started_callback,self__.networking,self__.queue,self__.response_channel,self__.reconciler,self__.parser,G__40171,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__40183.call(null,new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035),expr__40184))){
return (new untangled.client.core.Application(self__.initial_state,self__.started_callback,self__.networking,self__.queue,self__.response_channel,self__.reconciler,self__.parser,self__.mounted_QMARK_,G__40171,self__.__meta,self__.__extmap,null));
} else {
return (new untangled.client.core.Application(self__.initial_state,self__.started_callback,self__.networking,self__.queue,self__.response_channel,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30309__auto__,G__40171),null));
}
}
}
}
}
}
}
}
}
});

untangled.client.core.Application.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30313__auto__){
var self__ = this;
var this__30313__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),self__.initial_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),self__.started_callback],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"networking","networking",586110628),self__.networking],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"queue","queue",1455835879),self__.queue],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response-channel","response-channel",1395191493),self__.response_channel],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parser","parser",-1543495310),self__.parser],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mounted?","mounted?",712114760),self__.mounted_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035),self__.reconciler_options],null))], null),self__.__extmap));
});

untangled.client.core.Application.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30300__auto__,G__40171){
var self__ = this;
var this__30300__auto____$1 = this;
return (new untangled.client.core.Application(self__.initial_state,self__.started_callback,self__.networking,self__.queue,self__.response_channel,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,G__40171,self__.__extmap,self__.__hash));
});

untangled.client.core.Application.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30306__auto__,entry__30307__auto__){
var self__ = this;
var this__30306__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30307__auto__)){
return cljs.core._assoc.call(null,this__30306__auto____$1,cljs.core._nth.call(null,entry__30307__auto__,(0)),cljs.core._nth.call(null,entry__30307__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30306__auto____$1,entry__30307__auto__);
}
});

untangled.client.core.Application.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"initial-state","initial-state",-381085279,null),new cljs.core.Symbol(null,"started-callback","started-callback",-158055424,null),new cljs.core.Symbol(null,"networking","networking",-2068325141,null),new cljs.core.Symbol(null,"queue","queue",-1198599890,null),new cljs.core.Symbol(null,"response-channel","response-channel",-1259244276,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null),new cljs.core.Symbol(null,"parser","parser",97036217,null),new cljs.core.Symbol(null,"mounted?","mounted?",-1942321009,null),new cljs.core.Symbol(null,"reconciler-options","reconciler-options",-1005320734,null)], null);
});

untangled.client.core.Application.cljs$lang$type = true;

untangled.client.core.Application.cljs$lang$ctorPrSeq = (function (this__30335__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"untangled.client.core/Application");
});

untangled.client.core.Application.cljs$lang$ctorPrWriter = (function (this__30335__auto__,writer__30336__auto__){
return cljs.core._write.call(null,writer__30336__auto__,"untangled.client.core/Application");
});

untangled.client.core.__GT_Application = (function untangled$client$core$__GT_Application(initial_state,started_callback,networking,queue,response_channel,reconciler,parser,mounted_QMARK_,reconciler_options){
return (new untangled.client.core.Application(initial_state,started_callback,networking,queue,response_channel,reconciler,parser,mounted_QMARK_,reconciler_options,null,null,null));
});

untangled.client.core.map__GT_Application = (function untangled$client$core$map__GT_Application(G__40173){
return (new untangled.client.core.Application(new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806).cljs$core$IFn$_invoke$arity$1(G__40173),new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951).cljs$core$IFn$_invoke$arity$1(G__40173),new cljs.core.Keyword(null,"networking","networking",586110628).cljs$core$IFn$_invoke$arity$1(G__40173),new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(G__40173),new cljs.core.Keyword(null,"response-channel","response-channel",1395191493).cljs$core$IFn$_invoke$arity$1(G__40173),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__40173),new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(G__40173),new cljs.core.Keyword(null,"mounted?","mounted?",712114760).cljs$core$IFn$_invoke$arity$1(G__40173),new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035).cljs$core$IFn$_invoke$arity$1(G__40173),null,cljs.core.dissoc.call(null,G__40173,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),new cljs.core.Keyword(null,"networking","networking",586110628),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"response-channel","response-channel",1395191493),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"mounted?","mounted?",712114760),new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035)),null));
});

/**
 * A test client that has no networking. Useful for UI testing with a real Untangled app container.
 */
untangled.client.core.new_untangled_test_client = (function untangled$client$core$new_untangled_test_client(var_args){
var args__30756__auto__ = [];
var len__30749__auto___40191 = arguments.length;
var i__30750__auto___40192 = (0);
while(true){
if((i__30750__auto___40192 < len__30749__auto___40191)){
args__30756__auto__.push((arguments[i__30750__auto___40192]));

var G__40193 = (i__30750__auto___40192 + (1));
i__30750__auto___40192 = G__40193;
continue;
} else {
}
break;
}

var argseq__30757__auto__ = ((((0) < args__30756__auto__.length))?(new cljs.core.IndexedSeq(args__30756__auto__.slice((0)),(0),null)):null);
return untangled.client.core.new_untangled_test_client.cljs$core$IFn$_invoke$arity$variadic(argseq__30757__auto__);
});

untangled.client.core.new_untangled_test_client.cljs$core$IFn$_invoke$arity$variadic = (function (p__40188){
var map__40189 = p__40188;
var map__40189__$1 = ((((!((map__40189 == null)))?((((map__40189.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40189.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40189):map__40189);
var initial_state = cljs.core.get.call(null,map__40189__$1,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),cljs.core.PersistentArrayMap.EMPTY);
var started_callback = cljs.core.get.call(null,map__40189__$1,new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),null);
return untangled.client.core.map__GT_Application.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),initial_state,new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),started_callback,new cljs.core.Keyword(null,"networking","networking",586110628),untangled.client.impl.network.mock_network.call(null)], null));
});

untangled.client.core.new_untangled_test_client.cljs$lang$maxFixedArity = (0);

untangled.client.core.new_untangled_test_client.cljs$lang$applyTo = (function (seq40187){
return untangled.client.core.new_untangled_test_client.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40187));
});
/**
 * Get the current window location from the browser
 */
untangled.client.core.get_url = (function untangled$client$core$get_url(){
return window.location.href;
});
/**
 * Get the current URI parameters from the browser url or one you supply
 */
untangled.client.core.uri_params = (function untangled$client$core$uri_params(var_args){
var args40194 = [];
var len__30749__auto___40201 = arguments.length;
var i__30750__auto___40202 = (0);
while(true){
if((i__30750__auto___40202 < len__30749__auto___40201)){
args40194.push((arguments[i__30750__auto___40202]));

var G__40203 = (i__30750__auto___40202 + (1));
i__30750__auto___40202 = G__40203;
continue;
} else {
}
break;
}

var G__40196 = args40194.length;
switch (G__40196) {
case 0:
return untangled.client.core.uri_params.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return untangled.client.core.uri_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40194.length)].join('')));

}
});

untangled.client.core.uri_params.cljs$core$IFn$_invoke$arity$0 = (function (){
return untangled.client.core.uri_params.call(null,untangled.client.core.get_url.call(null));
});

untangled.client.core.uri_params.cljs$core$IFn$_invoke$arity$1 = (function (url){
var query_data = (new goog.Uri(url)).getQueryData();
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__30459__auto__ = ((function (query_data){
return (function untangled$client$core$iter__40197(s__40198){
return (new cljs.core.LazySeq(null,((function (query_data){
return (function (){
var s__40198__$1 = s__40198;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__40198__$1);
if(temp__4657__auto__){
var s__40198__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40198__$2)){
var c__30457__auto__ = cljs.core.chunk_first.call(null,s__40198__$2);
var size__30458__auto__ = cljs.core.count.call(null,c__30457__auto__);
var b__40200 = cljs.core.chunk_buffer.call(null,size__30458__auto__);
if((function (){var i__40199 = (0);
while(true){
if((i__40199 < size__30458__auto__)){
var k = cljs.core._nth.call(null,c__30457__auto__,i__40199);
cljs.core.chunk_append.call(null,b__40200,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,query_data.get(k)], null));

var G__40205 = (i__40199 + (1));
i__40199 = G__40205;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40200),untangled$client$core$iter__40197.call(null,cljs.core.chunk_rest.call(null,s__40198__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40200),null);
}
} else {
var k = cljs.core.first.call(null,s__40198__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,query_data.get(k)], null),untangled$client$core$iter__40197.call(null,cljs.core.rest.call(null,s__40198__$2)));
}
} else {
return null;
}
break;
}
});})(query_data))
,null,null));
});})(query_data))
;
return iter__30459__auto__.call(null,query_data.getKeys());
})());
});

untangled.client.core.uri_params.cljs$lang$maxFixedArity = 1;
/**
 * Get the value of the named parameter from the browser URL (or an explicit one)
 */
untangled.client.core.get_url_param = (function untangled$client$core$get_url_param(var_args){
var args40206 = [];
var len__30749__auto___40209 = arguments.length;
var i__30750__auto___40210 = (0);
while(true){
if((i__30750__auto___40210 < len__30749__auto___40209)){
args40206.push((arguments[i__30750__auto___40210]));

var G__40211 = (i__30750__auto___40210 + (1));
i__30750__auto___40210 = G__40211;
continue;
} else {
}
break;
}

var G__40208 = args40206.length;
switch (G__40208) {
case 1:
return untangled.client.core.get_url_param.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.core.get_url_param.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40206.length)].join('')));

}
});

untangled.client.core.get_url_param.cljs$core$IFn$_invoke$arity$1 = (function (param_name){
return untangled.client.core.get_url_param.call(null,untangled.client.core.get_url.call(null),param_name);
});

untangled.client.core.get_url_param.cljs$core$IFn$_invoke$arity$2 = (function (url,param_name){
return cljs.core.get.call(null,untangled.client.core.uri_params.call(null,url),param_name);
});

untangled.client.core.get_url_param.cljs$lang$maxFixedArity = 2;
/**
 * Calculates the query that can be used to pull (or merge) a component with an ident
 *   to/from a normalized app database. Requires a tree of data that represents the instance of
 *   the component in question (e.g. ident will work on it)
 */
untangled.client.core.component_merge_query = (function untangled$client$core$component_merge_query(component,object_data){
var ident = om.next.ident.call(null,component,object_data);
var object_query = om.next.get_query.call(null,component);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([ident,object_query], true, false)], null);
});
/**
 * Does the steps necessary to honor the data merge technique defined by Untangled with respect
 *   to data overwrites in the app database.
 */
untangled.client.core.preprocess_merge = (function untangled$client$core$preprocess_merge(state_atom,component,object_data){
var ident = om.next.ident.call(null,component,object_data);
var object_query = om.next.get_query.call(null,component);
var base_query = untangled.client.core.component_merge_query.call(null,component,object_data);
var merge_query = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("untangled","merge","untangled/merge",-1701523677),base_query], null)], null);
var existing_data = cljs.core.get.call(null,om.next.db__GT_tree.call(null,base_query,cljs.core.deref.call(null,state_atom),cljs.core.deref.call(null,state_atom)),ident,cljs.core.PersistentArrayMap.EMPTY);
var marked_data = untangled.client.impl.om_plumbing.mark_missing.call(null,object_data,object_query);
var merge_data = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("untangled","merge","untangled/merge",-1701523677),cljs.core.PersistentArrayMap.fromArray([ident,untangled.client.impl.util.deep_merge.call(null,existing_data,marked_data)], true, false)], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"merge-query","merge-query",610171663),merge_query,new cljs.core.Keyword(null,"merge-data","merge-data",1760143734),merge_data], null);
});
/**
 * Integrate an ident into any number of places in the app state. This function is safe to use within mutation
 *   implementations as a general helper function.
 * 
 *   The named parameters can be specified any number of times. They are:
 * 
 *   - append:  A vector (path) to a list in your app state where this new object's ident should be appended. Will not append
 *   the ident if that ident is already in the list.
 *   - prepend: A vector (path) to a list in your app state where this new object's ident should be prepended. Will not append
 *   the ident if that ident is already in the list.
 *   - replace: A vector (path) to a specific locaation in app-state where this object's ident should be placed. Can target a to-one or to-many.
 * If the target is a vector element then that element must already exist in the vector.
 *   
 */
untangled.client.core.integrate_ident_BANG_ = (function untangled$client$core$integrate_ident_BANG_(var_args){
var args__30756__auto__ = [];
var len__30749__auto___40226 = arguments.length;
var i__30750__auto___40227 = (0);
while(true){
if((i__30750__auto___40227 < len__30749__auto___40226)){
args__30756__auto__.push((arguments[i__30750__auto___40227]));

var G__40228 = (i__30750__auto___40227 + (1));
i__30750__auto___40227 = G__40228;
continue;
} else {
}
break;
}

var argseq__30757__auto__ = ((((2) < args__30756__auto__.length))?(new cljs.core.IndexedSeq(args__30756__auto__.slice((2)),(0),null)):null);
return untangled.client.core.integrate_ident_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30757__auto__);
});

untangled.client.core.integrate_ident_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,ident,named_parameters){
var already_has_ident_at_path_QMARK_ = (function (data_path){
return cljs.core.boolean$.call(null,cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__40213_SHARP_){
return cljs.core._EQ_.call(null,p1__40213_SHARP_,ident);
}),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),data_path))));
});
var actions = cljs.core.partition.call(null,(2),named_parameters);
var seq__40218 = cljs.core.seq.call(null,actions);
var chunk__40219 = null;
var count__40220 = (0);
var i__40221 = (0);
while(true){
if((i__40221 < count__40220)){
var vec__40222 = cljs.core._nth.call(null,chunk__40219,i__40221);
var command = cljs.core.nth.call(null,vec__40222,(0),null);
var data_path = cljs.core.nth.call(null,vec__40222,(1),null);
var G__40223_40229 = (((command instanceof cljs.core.Keyword))?command.fqn:null);
switch (G__40223_40229) {
case "prepend":
if(cljs.core.truth_(already_has_ident_at_path_QMARK_.call(null,data_path))){
} else {
if(cljs.core.vector_QMARK_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),data_path))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Path "),cljs.core.str(data_path),cljs.core.str(" for prepend must target an app-state vector.")].join('')),cljs.core.str("\n"),cljs.core.str("(vector? (get-in (clojure.core/deref state) data-path))")].join('')));
}

cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,data_path,((function (seq__40218,chunk__40219,count__40220,i__40221,G__40223_40229,vec__40222,command,data_path,already_has_ident_at_path_QMARK_,actions){
return (function (p1__40214_SHARP_){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ident], null),p1__40214_SHARP_);
});})(seq__40218,chunk__40219,count__40220,i__40221,G__40223_40229,vec__40222,command,data_path,already_has_ident_at_path_QMARK_,actions))
);
}

break;
case "append":
if(cljs.core.truth_(already_has_ident_at_path_QMARK_.call(null,data_path))){
} else {
if(cljs.core.vector_QMARK_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),data_path))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Path "),cljs.core.str(data_path),cljs.core.str(" for append must target an app-state vector.")].join('')),cljs.core.str("\n"),cljs.core.str("(vector? (get-in (clojure.core/deref state) data-path))")].join('')));
}

cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,data_path,cljs.core.conj,ident);
}

break;
case "replace":
var path_to_vector_40231 = cljs.core.butlast.call(null,data_path);
var to_many_QMARK__40232 = (cljs.core.seq.call(null,path_to_vector_40231)) && (cljs.core.vector_QMARK_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path_to_vector_40231)));
var index_40233 = cljs.core.last.call(null,data_path);
var vector_40234 = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path_to_vector_40231);
if(cljs.core.vector_QMARK_.call(null,data_path)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Replacement path must be a vector. You passed: "),cljs.core.str(data_path)].join('')),cljs.core.str("\n"),cljs.core.str("(vector? data-path)")].join('')));
}

if(to_many_QMARK__40232){
if(cljs.core.vector_QMARK_.call(null,vector_40234)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Path for replacement must be a vector"),cljs.core.str("\n"),cljs.core.str("(vector? vector)")].join('')));
}

if(typeof index_40233 === 'number'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Path for replacement must end in a vector index"),cljs.core.str("\n"),cljs.core.str("(number? index)")].join('')));
}

if(cljs.core.contains_QMARK_.call(null,vector_40234,index_40233)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Target vector for replacement does not have an item at index "),cljs.core.str(index_40233)].join('')),cljs.core.str("\n"),cljs.core.str("(contains? vector index)")].join('')));
}
} else {
}

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,data_path,ident);

break;
default:
throw cljs.core.ex_info.call(null,"Unknown post-op to merge-state!: ",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),command,new cljs.core.Keyword(null,"arg","arg",-1747261837),data_path], null));

}

var G__40235 = seq__40218;
var G__40236 = chunk__40219;
var G__40237 = count__40220;
var G__40238 = (i__40221 + (1));
seq__40218 = G__40235;
chunk__40219 = G__40236;
count__40220 = G__40237;
i__40221 = G__40238;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40218);
if(temp__4657__auto__){
var seq__40218__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40218__$1)){
var c__30490__auto__ = cljs.core.chunk_first.call(null,seq__40218__$1);
var G__40239 = cljs.core.chunk_rest.call(null,seq__40218__$1);
var G__40240 = c__30490__auto__;
var G__40241 = cljs.core.count.call(null,c__30490__auto__);
var G__40242 = (0);
seq__40218 = G__40239;
chunk__40219 = G__40240;
count__40220 = G__40241;
i__40221 = G__40242;
continue;
} else {
var vec__40224 = cljs.core.first.call(null,seq__40218__$1);
var command = cljs.core.nth.call(null,vec__40224,(0),null);
var data_path = cljs.core.nth.call(null,vec__40224,(1),null);
var G__40225_40243 = (((command instanceof cljs.core.Keyword))?command.fqn:null);
switch (G__40225_40243) {
case "prepend":
if(cljs.core.truth_(already_has_ident_at_path_QMARK_.call(null,data_path))){
} else {
if(cljs.core.vector_QMARK_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),data_path))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Path "),cljs.core.str(data_path),cljs.core.str(" for prepend must target an app-state vector.")].join('')),cljs.core.str("\n"),cljs.core.str("(vector? (get-in (clojure.core/deref state) data-path))")].join('')));
}

cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,data_path,((function (seq__40218,chunk__40219,count__40220,i__40221,G__40225_40243,vec__40224,command,data_path,seq__40218__$1,temp__4657__auto__,already_has_ident_at_path_QMARK_,actions){
return (function (p1__40214_SHARP_){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ident], null),p1__40214_SHARP_);
});})(seq__40218,chunk__40219,count__40220,i__40221,G__40225_40243,vec__40224,command,data_path,seq__40218__$1,temp__4657__auto__,already_has_ident_at_path_QMARK_,actions))
);
}

break;
case "append":
if(cljs.core.truth_(already_has_ident_at_path_QMARK_.call(null,data_path))){
} else {
if(cljs.core.vector_QMARK_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),data_path))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Path "),cljs.core.str(data_path),cljs.core.str(" for append must target an app-state vector.")].join('')),cljs.core.str("\n"),cljs.core.str("(vector? (get-in (clojure.core/deref state) data-path))")].join('')));
}

cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,data_path,cljs.core.conj,ident);
}

break;
case "replace":
var path_to_vector_40245 = cljs.core.butlast.call(null,data_path);
var to_many_QMARK__40246 = (cljs.core.seq.call(null,path_to_vector_40245)) && (cljs.core.vector_QMARK_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path_to_vector_40245)));
var index_40247 = cljs.core.last.call(null,data_path);
var vector_40248 = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path_to_vector_40245);
if(cljs.core.vector_QMARK_.call(null,data_path)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Replacement path must be a vector. You passed: "),cljs.core.str(data_path)].join('')),cljs.core.str("\n"),cljs.core.str("(vector? data-path)")].join('')));
}

if(to_many_QMARK__40246){
if(cljs.core.vector_QMARK_.call(null,vector_40248)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Path for replacement must be a vector"),cljs.core.str("\n"),cljs.core.str("(vector? vector)")].join('')));
}

if(typeof index_40247 === 'number'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Path for replacement must end in a vector index"),cljs.core.str("\n"),cljs.core.str("(number? index)")].join('')));
}

if(cljs.core.contains_QMARK_.call(null,vector_40248,index_40247)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Target vector for replacement does not have an item at index "),cljs.core.str(index_40247)].join('')),cljs.core.str("\n"),cljs.core.str("(contains? vector index)")].join('')));
}
} else {
}

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,data_path,ident);

break;
default:
throw cljs.core.ex_info.call(null,"Unknown post-op to merge-state!: ",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),command,new cljs.core.Keyword(null,"arg","arg",-1747261837),data_path], null));

}

var G__40249 = cljs.core.next.call(null,seq__40218__$1);
var G__40250 = null;
var G__40251 = (0);
var G__40252 = (0);
seq__40218 = G__40249;
chunk__40219 = G__40250;
count__40220 = G__40251;
i__40221 = G__40252;
continue;
}
} else {
return null;
}
}
break;
}
});

untangled.client.core.integrate_ident_BANG_.cljs$lang$maxFixedArity = (2);

untangled.client.core.integrate_ident_BANG_.cljs$lang$applyTo = (function (seq40215){
var G__40216 = cljs.core.first.call(null,seq40215);
var seq40215__$1 = cljs.core.next.call(null,seq40215);
var G__40217 = cljs.core.first.call(null,seq40215__$1);
var seq40215__$2 = cljs.core.next.call(null,seq40215__$1);
return untangled.client.core.integrate_ident_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40216,G__40217,seq40215__$2);
});
/**
 * Normalize and merge a (sub)tree of application state into the application using a known UI component's query and ident.
 * 
 *   This utility function obtains the ident of the incoming object-data using the UI component's ident function. Once obtained,
 *   it uses the component's query and ident to normalize the data and place the resulting objects in the correct tables.
 *   It is also quite common to want those new objects to be linked into lists in other spot in app state, so this function
 *   supports optional named parameters for doing this. These named parameters can be repeated as many times as you like in order
 *   to place the ident of the new object into other data structures of app state.
 * 
 *   This function honors the data merge story for Untangled: attributes that are queried for but do not appear in the
 *   data will be removed from the application. This function also uses the initial state for the component as a base
 *   for merge if there was no state for the object already in the database.
 * 
 *   This function will also trigger re-renders of components that directly render object merged, as well as any components
 *   into which you integrate that data via the named-parameters.
 * 
 *   This function is primarily meant to be used from things like server push and setTimeout/setInterval, where you're outside
 *   of the normal mutation story. Do not use this function within abstract mutations.
 * 
 *   - app-or-reconciler: The Untangled application or Om reconciler
 *   - component: The class of the component that corresponsds to the data. Must have an ident.
 *   - object-data: A map (tree) of data to merge. Will be normalized for you.
 *   - named-parameter: Post-processing ident integration steps. see integrate-ident!
 * 
 *   Any keywords that appear in ident integration steps will be added to the re-render queue.
 *   
 */
untangled.client.core.merge_state_BANG_ = (function untangled$client$core$merge_state_BANG_(var_args){
var args__30756__auto__ = [];
var len__30749__auto___40260 = arguments.length;
var i__30750__auto___40261 = (0);
while(true){
if((i__30750__auto___40261 < len__30749__auto___40260)){
args__30756__auto__.push((arguments[i__30750__auto___40261]));

var G__40262 = (i__30750__auto___40261 + (1));
i__30750__auto___40261 = G__40262;
continue;
} else {
}
break;
}

var argseq__30757__auto__ = ((((3) < args__30756__auto__.length))?(new cljs.core.IndexedSeq(args__30756__auto__.slice((3)),(0),null)):null);
return untangled.client.core.merge_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30757__auto__);
});

untangled.client.core.merge_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (app_or_reconciler,component,object_data,named_parameters){
if(((!((component == null)))?(((false) || (component.om$next$Ident$))?true:false):false)){
} else {
untangled.client.logging.warn.call(null,"merge-state!: component must implement Ident");
}

var ident = om.next.ident.call(null,component,object_data);
var reconciler = ((cljs.core._EQ_.call(null,untangled.client.core.Application,cljs.core.type.call(null,app_or_reconciler)))?new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app_or_reconciler):app_or_reconciler);
var state = om.next.app_state.call(null,reconciler);
var data_path_keys = cljs.core.vec.call(null,cljs.core.set.call(null,cljs.core.filter.call(null,cljs.core.keyword_QMARK_,cljs.core.flatten.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.partition.call(null,(2),named_parameters))))));
var map__40258 = untangled.client.core.preprocess_merge.call(null,state,component,object_data);
var map__40258__$1 = ((((!((map__40258 == null)))?((((map__40258.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40258.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40258):map__40258);
var merge_data = cljs.core.get.call(null,map__40258__$1,new cljs.core.Keyword(null,"merge-data","merge-data",1760143734));
var merge_query = cljs.core.get.call(null,map__40258__$1,new cljs.core.Keyword(null,"merge-query","merge-query",610171663));
om.next.merge_BANG_.call(null,reconciler,merge_data,merge_query);

cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,new cljs.core.Keyword("untangled","merge","untangled/merge",-1701523677));

cljs.core.apply.call(null,untangled.client.core.integrate_ident_BANG_,state,ident,named_parameters);

om.next.protocols.queue_BANG_.call(null,reconciler,data_path_keys);

return cljs.core.deref.call(null,state);
});

untangled.client.core.merge_state_BANG_.cljs$lang$maxFixedArity = (3);

untangled.client.core.merge_state_BANG_.cljs$lang$applyTo = (function (seq40253){
var G__40254 = cljs.core.first.call(null,seq40253);
var seq40253__$1 = cljs.core.next.call(null,seq40253);
var G__40255 = cljs.core.first.call(null,seq40253__$1);
var seq40253__$2 = cljs.core.next.call(null,seq40253__$1);
var G__40256 = cljs.core.first.call(null,seq40253__$2);
var seq40253__$3 = cljs.core.next.call(null,seq40253__$2);
return untangled.client.core.merge_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40254,G__40255,G__40256,seq40253__$3);
});
untangled.client.core.merge_alternate_union_elements_BANG_ = (function untangled$client$core$merge_alternate_union_elements_BANG_(app__$1,root_component){
var walk_ast = (function() {
var untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast = null;
var untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast__2 = (function (ast,visitor){
return untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast.call(null,ast,visitor,null);
});
var untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast__3 = (function (ast,visitor,last_join_component){
visitor.call(null,ast,last_join_component);

if(cljs.core.truth_(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast))){
var join_component = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast)))?new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(ast):last_join_component);
var seq__40366 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
var chunk__40367 = null;
var count__40368 = (0);
var i__40369 = (0);
while(true){
if((i__40369 < count__40368)){
var c = cljs.core._nth.call(null,chunk__40367,i__40369);
untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast.call(null,c,visitor,join_component);

var G__40395 = seq__40366;
var G__40396 = chunk__40367;
var G__40397 = count__40368;
var G__40398 = (i__40369 + (1));
seq__40366 = G__40395;
chunk__40367 = G__40396;
count__40368 = G__40397;
i__40369 = G__40398;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40366);
if(temp__4657__auto__){
var seq__40366__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40366__$1)){
var c__30490__auto__ = cljs.core.chunk_first.call(null,seq__40366__$1);
var G__40399 = cljs.core.chunk_rest.call(null,seq__40366__$1);
var G__40400 = c__30490__auto__;
var G__40401 = cljs.core.count.call(null,c__30490__auto__);
var G__40402 = (0);
seq__40366 = G__40399;
chunk__40367 = G__40400;
count__40368 = G__40401;
i__40369 = G__40402;
continue;
} else {
var c = cljs.core.first.call(null,seq__40366__$1);
untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast.call(null,c,visitor,join_component);

var G__40403 = cljs.core.next.call(null,seq__40366__$1);
var G__40404 = null;
var G__40405 = (0);
var G__40406 = (0);
seq__40366 = G__40403;
chunk__40367 = G__40404;
count__40368 = G__40405;
i__40369 = G__40406;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast = function(ast,visitor,last_join_component){
switch(arguments.length){
case 2:
return untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast__2.call(this,ast,visitor);
case 3:
return untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast__3.call(this,ast,visitor,last_join_component);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast.cljs$core$IFn$_invoke$arity$2 = untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast__2;
untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast.cljs$core$IFn$_invoke$arity$3 = untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast__3;
return untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast;
})()
;
var merge_union = (function untangled$client$core$merge_alternate_union_elements_BANG__$_merge_union(p__40370,last_join_component){
var map__40383 = p__40370;
var map__40383__$1 = ((((!((map__40383 == null)))?((((map__40383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40383):map__40383);
var n = map__40383__$1;
var type = cljs.core.get.call(null,map__40383__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var component = cljs.core.get.call(null,map__40383__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var query = cljs.core.get.call(null,map__40383__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var children = cljs.core.get.call(null,map__40383__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"union","union",2142937499),type)){
var default_branch = (function (){var and__29667__auto__ = last_join_component;
if(cljs.core.truth_(and__29667__auto__)){
var and__29667__auto____$1 = ((!((last_join_component == null)))?(((false) || (last_join_component.untangled$client$core$InitialAppState$))?true:false):false);
if(and__29667__auto____$1){
return untangled.client.core.initial_state.call(null,last_join_component,null);
} else {
return and__29667__auto____$1;
}
} else {
return and__29667__auto__;
}
})();
var to_many_QMARK_ = cljs.core.vector_QMARK_.call(null,default_branch);
var seq__40387 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"component","component",1555936782),cljs.core.meta),cljs.core.vals.call(null,query)));
var chunk__40388 = null;
var count__40389 = (0);
var i__40390 = (0);
while(true){
if((i__40390 < count__40389)){
var element = cljs.core._nth.call(null,chunk__40388,i__40390);
var state_40407 = (function (){var and__29667__auto__ = ((!((element == null)))?(((false) || (element.untangled$client$core$InitialAppState$))?true:false):false);
if(and__29667__auto__){
return untangled.client.core.initial_state.call(null,element,null);
} else {
return and__29667__auto__;
}
})();
if(cljs.core.truth_((function (){var and__29667__auto__ = state_40407;
if(cljs.core.truth_(and__29667__auto__)){
return cljs.core.not.call(null,default_branch);
} else {
return and__29667__auto__;
}
})())){
untangled.client.logging.warn.call(null,"Subelements of union with query ",query," have initial state, but the union component itself has no initial app state. Your app state may not have been initialized correctly.");
} else {
if(!(to_many_QMARK_)){
untangled.client.core.merge_state_BANG_.call(null,app__$1,last_join_component,state_40407);
} else {
}
}

var G__40408 = seq__40387;
var G__40409 = chunk__40388;
var G__40410 = count__40389;
var G__40411 = (i__40390 + (1));
seq__40387 = G__40408;
chunk__40388 = G__40409;
count__40389 = G__40410;
i__40390 = G__40411;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40387);
if(temp__4657__auto__){
var seq__40387__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40387__$1)){
var c__30490__auto__ = cljs.core.chunk_first.call(null,seq__40387__$1);
var G__40412 = cljs.core.chunk_rest.call(null,seq__40387__$1);
var G__40413 = c__30490__auto__;
var G__40414 = cljs.core.count.call(null,c__30490__auto__);
var G__40415 = (0);
seq__40387 = G__40412;
chunk__40388 = G__40413;
count__40389 = G__40414;
i__40390 = G__40415;
continue;
} else {
var element = cljs.core.first.call(null,seq__40387__$1);
var state_40416 = (function (){var and__29667__auto__ = ((!((element == null)))?(((false) || (element.untangled$client$core$InitialAppState$))?true:false):false);
if(and__29667__auto__){
return untangled.client.core.initial_state.call(null,element,null);
} else {
return and__29667__auto__;
}
})();
if(cljs.core.truth_((function (){var and__29667__auto__ = state_40416;
if(cljs.core.truth_(and__29667__auto__)){
return cljs.core.not.call(null,default_branch);
} else {
return and__29667__auto__;
}
})())){
untangled.client.logging.warn.call(null,"Subelements of union with query ",query," have initial state, but the union component itself has no initial app state. Your app state may not have been initialized correctly.");
} else {
if(!(to_many_QMARK_)){
untangled.client.core.merge_state_BANG_.call(null,app__$1,last_join_component,state_40416);
} else {
}
}

var G__40417 = cljs.core.next.call(null,seq__40387__$1);
var G__40418 = null;
var G__40419 = (0);
var G__40420 = (0);
seq__40387 = G__40417;
chunk__40388 = G__40418;
count__40389 = G__40419;
i__40390 = G__40420;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
return walk_ast.call(null,om.next.query__GT_ast.call(null,om.next.get_query.call(null,root_component)),merge_union);
});

//# sourceMappingURL=core.js.map?rel=1466782846682