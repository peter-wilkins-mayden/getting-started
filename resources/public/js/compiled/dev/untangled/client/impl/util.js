// Compiled by ClojureScript 1.8.51 {}
goog.provide('untangled.client.impl.util');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('om.next');
untangled.client.impl.util.deep_merge = (function untangled$client$impl$util$deep_merge(var_args){
var args__30756__auto__ = [];
var len__30749__auto___36549 = arguments.length;
var i__30750__auto___36550 = (0);
while(true){
if((i__30750__auto___36550 < len__30749__auto___36549)){
args__30756__auto__.push((arguments[i__30750__auto___36550]));

var G__36551 = (i__30750__auto___36550 + (1));
i__30750__auto___36550 = G__36551;
continue;
} else {
}
break;
}

var argseq__30757__auto__ = ((((0) < args__30756__auto__.length))?(new cljs.core.IndexedSeq(args__30756__auto__.slice((0)),(0),null)):null);
return untangled.client.impl.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__30757__auto__);
});

untangled.client.impl.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (xs){

if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,xs)){
return cljs.core.apply.call(null,cljs.core.merge_with,untangled.client.impl.util.deep_merge,xs);
} else {
return cljs.core.last.call(null,xs);
}
});

untangled.client.impl.util.deep_merge.cljs$lang$maxFixedArity = (0);

untangled.client.impl.util.deep_merge.cljs$lang$applyTo = (function (seq36548){
return untangled.client.impl.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36548));
});
/**
 * Helper for logging the app-state. Pass in an untangled application atom and either top-level keys, data-paths
 *   (like get-in), or both.
 */
untangled.client.impl.util.log_app_state = (function untangled$client$impl$util$log_app_state(var_args){
var args__30756__auto__ = [];
var len__30749__auto___36558 = arguments.length;
var i__30750__auto___36559 = (0);
while(true){
if((i__30750__auto___36559 < len__30749__auto___36558)){
args__30756__auto__.push((arguments[i__30750__auto___36559]));

var G__36560 = (i__30750__auto___36559 + (1));
i__30750__auto___36559 = G__36560;
continue;
} else {
}
break;
}

var argseq__30757__auto__ = ((((1) < args__30756__auto__.length))?(new cljs.core.IndexedSeq(args__30756__auto__.slice((1)),(0),null)):null);
return untangled.client.impl.util.log_app_state.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30757__auto__);
});

untangled.client.impl.util.log_app_state.cljs$core$IFn$_invoke$arity$variadic = (function (app_atom,keys_and_paths){
try{var app_state = om.next.app_state.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_atom)));
return cljs.pprint.pprint.call(null,(function (){var make_path = ((function (app_state){
return (function untangled$client$impl$util$make_path(location){
if(cljs.core.sequential_QMARK_.call(null,location)){
return location;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [location], null);
}
});})(app_state))
;
var process_location = ((function (app_state){
return (function untangled$client$impl$util$process_location(acc,location){
var path = make_path.call(null,location);
return cljs.core.assoc_in.call(null,acc,path,cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),path));
});})(app_state))
;
var pred__36555 = cljs.core._EQ_;
var expr__36556 = cljs.core.count.call(null,keys_and_paths);
if(cljs.core.truth_(pred__36555.call(null,(0),expr__36556))){
return cljs.core.deref.call(null,app_state);
} else {
if(cljs.core.truth_(pred__36555.call(null,(1),expr__36556))){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),make_path.call(null,cljs.core.first.call(null,keys_and_paths)));
} else {
return cljs.core.reduce.call(null,process_location,cljs.core.PersistentArrayMap.EMPTY,keys_and_paths);
}
}
})());
}catch (e36554){if((e36554 instanceof Error)){
var e = e36554;
throw cljs.core.ex_info.call(null,"untangled.client.impl.util/log-app-state expects an atom with an untangled client",cljs.core.PersistentArrayMap.EMPTY);
} else {
throw e36554;

}
}});

untangled.client.impl.util.log_app_state.cljs$lang$maxFixedArity = (1);

untangled.client.impl.util.log_app_state.cljs$lang$applyTo = (function (seq36552){
var G__36553 = cljs.core.first.call(null,seq36552);
var seq36552__$1 = cljs.core.next.call(null,seq36552);
return untangled.client.impl.util.log_app_state.cljs$core$IFn$_invoke$arity$variadic(G__36553,seq36552__$1);
});

//# sourceMappingURL=util.js.map?rel=1466782840921