// Compiled by ClojureScript 1.8.51 {}
goog.provide('untangled.client.mutations');
goog.require('cljs.core');
goog.require('om.next');
if(typeof untangled.client.mutations.mutate !== 'undefined'){
} else {
untangled.client.mutations.mutate = (function (){var method_table__30604__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__30605__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__30606__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__30607__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__30608__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"untangled.client.mutations","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__30608__auto__,method_table__30604__auto__,prefer_table__30605__auto__,method_cache__30606__auto__,cached_hierarchy__30607__auto__));
})();
}
if(typeof untangled.client.mutations.post_mutate !== 'undefined'){
} else {
untangled.client.mutations.post_mutate = (function (){var method_table__30604__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__30605__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__30606__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__30607__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__30608__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"untangled.client.mutations","post-mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__30608__auto__,method_table__30604__auto__,prefer_table__30605__auto__,method_cache__30606__auto__,cached_hierarchy__30607__auto__));
})();
}
/**
 * Toggle the given boolean `field` on the specified component.
 */
untangled.client.mutations.toggle_BANG_ = (function untangled$client$mutations$toggle_BANG_(comp,field){
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__30513__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("ui","toggle","ui/toggle",-1362596183,null)),(function (){var x__30513__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"field","field",-1302436500)),(function (){var x__30513__auto__ = field;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__30513__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__30513__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__30513__auto__);
})())))));
});
/**
 * Set a raw value on the given `field` of a `component`.
 */
untangled.client.mutations.set_value_BANG_ = (function untangled$client$mutations$set_value_BANG_(component,field,value){
return om.next.transact_BANG_.call(null,component,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__30513__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("ui","set-props","ui/set-props",-1564556899,null)),(function (){var x__30513__auto__ = cljs.core.PersistentArrayMap.fromArray([field,value], true, false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__30513__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__30513__auto__);
})())))));
});
/**
 * Helper for set-integer!, use that instead.
 */
untangled.client.mutations.ensure_integer = (function untangled$client$mutations$ensure_integer(v){
var rv = parseInt(v);
if(cljs.core.truth_(isNaN(v))){
return (0);
} else {
return rv;
}
});
/**
 * Set the given integer on the given `field` of a `component`. Allows same parameters as `set-string!`
 */
untangled.client.mutations.set_integer_BANG_ = (function untangled$client$mutations$set_integer_BANG_(var_args){
var args__30756__auto__ = [];
var len__30749__auto___36532 = arguments.length;
var i__30750__auto___36533 = (0);
while(true){
if((i__30750__auto___36533 < len__30749__auto___36532)){
args__30756__auto__.push((arguments[i__30750__auto___36533]));

var G__36534 = (i__30750__auto___36533 + (1));
i__30750__auto___36533 = G__36534;
continue;
} else {
}
break;
}

var argseq__30757__auto__ = ((((2) < args__30756__auto__.length))?(new cljs.core.IndexedSeq(args__30756__auto__.slice((2)),(0),null)):null);
return untangled.client.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30757__auto__);
});

untangled.client.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__36529){
var map__36530 = p__36529;
var map__36530__$1 = ((((!((map__36530 == null)))?((((map__36530.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36530.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36530):map__36530);
var event = cljs.core.get.call(null,map__36530__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.call(null,map__36530__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__29667__auto__ = (function (){var or__29679__auto__ = event;
if(cljs.core.truth_(or__29679__auto__)){
return or__29679__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__29667__auto__)){
return cljs.core.not.call(null,(function (){var and__29667__auto____$1 = event;
if(cljs.core.truth_(and__29667__auto____$1)){
return value;
} else {
return and__29667__auto____$1;
}
})());
} else {
return and__29667__auto__;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Supply either :event or :value"),cljs.core.str("\n"),cljs.core.str("(and (or event value) (not (and event value)))")].join('')));
}

var value__$1 = untangled.client.mutations.ensure_integer.call(null,(cljs.core.truth_(event)?event.target.value:value));
return untangled.client.mutations.set_value_BANG_.call(null,component,field,value__$1);
});

untangled.client.mutations.set_integer_BANG_.cljs$lang$maxFixedArity = (2);

untangled.client.mutations.set_integer_BANG_.cljs$lang$applyTo = (function (seq36526){
var G__36527 = cljs.core.first.call(null,seq36526);
var seq36526__$1 = cljs.core.next.call(null,seq36526);
var G__36528 = cljs.core.first.call(null,seq36526__$1);
var seq36526__$2 = cljs.core.next.call(null,seq36526__$1);
return untangled.client.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36527,G__36528,seq36526__$2);
});
/**
 * Set a string on the given `field` of a `component`. The string can be literal via named parameter `:value` or
 *   can be auto-extracted from a UI event using the named parameter `:event`
 * 
 *   Examples
 * 
 *   ```
 *   (set-string! this :ui/name :value "Hello") ; set from literal (or var)
 *   (set-string! this :ui/name :event evt) ; extract from UI event target value
 *   ```
 *   
 */
untangled.client.mutations.set_string_BANG_ = (function untangled$client$mutations$set_string_BANG_(var_args){
var args__30756__auto__ = [];
var len__30749__auto___36541 = arguments.length;
var i__30750__auto___36542 = (0);
while(true){
if((i__30750__auto___36542 < len__30749__auto___36541)){
args__30756__auto__.push((arguments[i__30750__auto___36542]));

var G__36543 = (i__30750__auto___36542 + (1));
i__30750__auto___36542 = G__36543;
continue;
} else {
}
break;
}

var argseq__30757__auto__ = ((((2) < args__30756__auto__.length))?(new cljs.core.IndexedSeq(args__30756__auto__.slice((2)),(0),null)):null);
return untangled.client.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30757__auto__);
});

untangled.client.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__36538){
var map__36539 = p__36538;
var map__36539__$1 = ((((!((map__36539 == null)))?((((map__36539.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36539.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36539):map__36539);
var event = cljs.core.get.call(null,map__36539__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.call(null,map__36539__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__29667__auto__ = (function (){var or__29679__auto__ = event;
if(cljs.core.truth_(or__29679__auto__)){
return or__29679__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__29667__auto__)){
return cljs.core.not.call(null,(function (){var and__29667__auto____$1 = event;
if(cljs.core.truth_(and__29667__auto____$1)){
return value;
} else {
return and__29667__auto____$1;
}
})());
} else {
return and__29667__auto__;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Supply either :event or :value"),cljs.core.str("\n"),cljs.core.str("(and (or event value) (not (and event value)))")].join('')));
}

var value__$1 = (cljs.core.truth_(event)?event.target.value:value);
return untangled.client.mutations.set_value_BANG_.call(null,component,field,value__$1);
});

untangled.client.mutations.set_string_BANG_.cljs$lang$maxFixedArity = (2);

untangled.client.mutations.set_string_BANG_.cljs$lang$applyTo = (function (seq36535){
var G__36536 = cljs.core.first.call(null,seq36535);
var seq36535__$1 = cljs.core.next.call(null,seq36535);
var G__36537 = cljs.core.first.call(null,seq36535__$1);
var seq36535__$2 = cljs.core.next.call(null,seq36535__$1);
return untangled.client.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36536,G__36537,seq36535__$2);
});

//# sourceMappingURL=mutations.js.map?rel=1466782840863