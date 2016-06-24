// Compiled by ClojureScript 1.8.51 {}
goog.provide('untangled.client.impl.data_fetch');
goog.require('cljs.core');
goog.require('cljs_uuid_utils.core');
goog.require('clojure.set');
goog.require('untangled.client.logging');
goog.require('untangled.client.impl.om_plumbing');
goog.require('om.next.impl.parser');
goog.require('om.next.protocols');
goog.require('untangled.dom');
goog.require('untangled.client.mutations');
goog.require('om.util');
goog.require('om.next');
goog.require('clojure.walk');






untangled.client.impl.data_fetch.data_state_QMARK_ = (function untangled$client$impl$data_fetch$data_state_QMARK_(state){
return cljs.core.contains_QMARK_.call(null,state,new cljs.core.Keyword("untangled.client.impl.data-fetch","type","untangled.client.impl.data-fetch/type",1691369040));
});
var is_kind_QMARK_ = (function untangled$client$impl$data_fetch$is_kind_QMARK_(state,type){
if(cljs.core.truth_(untangled.client.impl.data_fetch.data_state_QMARK_.call(null,state))){
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword("untangled.client.impl.data-fetch","type","untangled.client.impl.data-fetch/type",1691369040).cljs$core$IFn$_invoke$arity$1(state));
} else {
return false;
}
});
untangled.client.impl.data_fetch.ready_QMARK_ = (function untangled$client$impl$data_fetch$ready_QMARK_(state){
return is_kind_QMARK_.call(null,state,new cljs.core.Keyword(null,"ready","ready",1086465795));
});

untangled.client.impl.data_fetch.loading_QMARK_ = (function untangled$client$impl$data_fetch$loading_QMARK_(state){
return is_kind_QMARK_.call(null,state,new cljs.core.Keyword(null,"loading","loading",-737050189));
});

untangled.client.impl.data_fetch.failed_QMARK_ = (function untangled$client$impl$data_fetch$failed_QMARK_(state){
return is_kind_QMARK_.call(null,state,new cljs.core.Keyword(null,"failed","failed",-1397425762));
});
/**
 * Place load markers in the app state at their data paths so that UI rendering can see them.
 */
untangled.client.impl.data_fetch.place_load_markers = (function untangled$client$impl$data_fetch$place_load_markers(state_atom,items_to_load){
var seq__39571 = cljs.core.seq.call(null,items_to_load);
var chunk__39572 = null;
var count__39573 = (0);
var i__39574 = (0);
while(true){
if((i__39574 < count__39573)){
var item = cljs.core._nth.call(null,chunk__39572,i__39574);
var i_39575 = untangled.client.impl.data_fetch.set_loading_BANG_.call(null,item);
cljs.core.swap_BANG_.call(null,state_atom,((function (seq__39571,chunk__39572,count__39573,i__39574,i_39575,item){
return (function (s){
return cljs.core.update.call(null,cljs.core.assoc_in.call(null,s,untangled.client.impl.data_fetch.data_path.call(null,i_39575),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927),i_39575], null)),new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),untangled.client.impl.data_fetch.data_uuid.call(null,i_39575));
});})(seq__39571,chunk__39572,count__39573,i__39574,i_39575,item))
);

var G__39576 = seq__39571;
var G__39577 = chunk__39572;
var G__39578 = count__39573;
var G__39579 = (i__39574 + (1));
seq__39571 = G__39576;
chunk__39572 = G__39577;
count__39573 = G__39578;
i__39574 = G__39579;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39571);
if(temp__4657__auto__){
var seq__39571__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39571__$1)){
var c__30490__auto__ = cljs.core.chunk_first.call(null,seq__39571__$1);
var G__39580 = cljs.core.chunk_rest.call(null,seq__39571__$1);
var G__39581 = c__30490__auto__;
var G__39582 = cljs.core.count.call(null,c__30490__auto__);
var G__39583 = (0);
seq__39571 = G__39580;
chunk__39572 = G__39581;
count__39573 = G__39582;
i__39574 = G__39583;
continue;
} else {
var item = cljs.core.first.call(null,seq__39571__$1);
var i_39584 = untangled.client.impl.data_fetch.set_loading_BANG_.call(null,item);
cljs.core.swap_BANG_.call(null,state_atom,((function (seq__39571,chunk__39572,count__39573,i__39574,i_39584,item,seq__39571__$1,temp__4657__auto__){
return (function (s){
return cljs.core.update.call(null,cljs.core.assoc_in.call(null,s,untangled.client.impl.data_fetch.data_path.call(null,i_39584),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927),i_39584], null)),new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),untangled.client.impl.data_fetch.data_uuid.call(null,i_39584));
});})(seq__39571,chunk__39572,count__39573,i__39574,i_39584,item,seq__39571__$1,temp__4657__auto__))
);

var G__39585 = cljs.core.next.call(null,seq__39571__$1);
var G__39586 = null;
var G__39587 = (0);
var G__39588 = (0);
seq__39571 = G__39585;
chunk__39572 = G__39586;
count__39573 = G__39587;
i__39574 = G__39588;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Marks all of the items in the ready-to-load state as loading, places the loading markers in the appropriate locations
 *   in the app state, and return maps with the keys:
 * 
 *   `query` : The full query to send to the server.
 *   `on-load` : The function to call to merge a response. Detects missing data and sets failure markers for those.
 *   `on-error` : The function to call to set network/server error(s) in place of loading markers.
 *   `callback-args` : Args to pass back to on-load and on-error. These are separated
 *  so that `rewrite-tempids-in-request-queue` can rewrite tempids for merge and
 *  error callbacks
 * 
 *   response-channel will have the response posted to it when the request is done.
 *   .
 */
untangled.client.impl.data_fetch.mark_parallel_loading = (function untangled$client$impl$data_fetch$mark_parallel_loading(reconciler){
var state = om.next.app_state.call(null,reconciler);
var queued_items = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword("om.next","ready-to-load","om.next/ready-to-load",-274898824));
var items_to_load = cljs.core.filter.call(null,new cljs.core.Keyword("untangled.client.impl.data-fetch","parallel","untangled.client.impl.data-fetch/parallel",-1305867292),queued_items);
if(cljs.core.empty_QMARK_.call(null,items_to_load)){
return null;
} else {
untangled.client.impl.data_fetch.place_load_markers.call(null,state,items_to_load);

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),true,new cljs.core.Keyword("om.next","ready-to-load","om.next/ready-to-load",-274898824),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.Keyword("untangled.client.impl.data-fetch","parallel","untangled.client.impl.data-fetch/parallel",-1305867292)),queued_items));

var iter__30459__auto__ = ((function (state,queued_items,items_to_load){
return (function untangled$client$impl$data_fetch$mark_parallel_loading_$_iter__39593(s__39594){
return (new cljs.core.LazySeq(null,((function (state,queued_items,items_to_load){
return (function (){
var s__39594__$1 = s__39594;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__39594__$1);
if(temp__4657__auto__){
var s__39594__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39594__$2)){
var c__30457__auto__ = cljs.core.chunk_first.call(null,s__39594__$2);
var size__30458__auto__ = cljs.core.count.call(null,c__30457__auto__);
var b__39596 = cljs.core.chunk_buffer.call(null,size__30458__auto__);
if((function (){var i__39595 = (0);
while(true){
if((i__39595 < size__30458__auto__)){
var item = cljs.core._nth.call(null,c__30457__auto__,i__39595);
cljs.core.chunk_append.call(null,b__39596,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),untangled.client.impl.data_fetch.full_query.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)),new cljs.core.Keyword(null,"on-load","on-load",1415151594),untangled.client.impl.data_fetch.loaded_callback.call(null,reconciler),new cljs.core.Keyword(null,"on-error","on-error",1728533530),untangled.client.impl.data_fetch.error_callback.call(null,reconciler),new cljs.core.Keyword(null,"callback-args","callback-args",1117743591),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)], null));

var G__39597 = (i__39595 + (1));
i__39595 = G__39597;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39596),untangled$client$impl$data_fetch$mark_parallel_loading_$_iter__39593.call(null,cljs.core.chunk_rest.call(null,s__39594__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39596),null);
}
} else {
var item = cljs.core.first.call(null,s__39594__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),untangled.client.impl.data_fetch.full_query.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)),new cljs.core.Keyword(null,"on-load","on-load",1415151594),untangled.client.impl.data_fetch.loaded_callback.call(null,reconciler),new cljs.core.Keyword(null,"on-error","on-error",1728533530),untangled.client.impl.data_fetch.error_callback.call(null,reconciler),new cljs.core.Keyword(null,"callback-args","callback-args",1117743591),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)], null),untangled$client$impl$data_fetch$mark_parallel_loading_$_iter__39593.call(null,cljs.core.rest.call(null,s__39594__$2)));
}
} else {
return null;
}
break;
}
});})(state,queued_items,items_to_load))
,null,null));
});})(state,queued_items,items_to_load))
;
return iter__30459__auto__.call(null,items_to_load);
}
});
/**
 * Marks all of the items in the ready-to-load state as loading, places the loading markers in the appropriate locations
 *   in the app state, and returns a map with the keys:
 * 
 *   `query` : The full query to send to the server.
 *   `on-load` : The function to call to merge a response. Detects missing data and sets failure markers for those.
 *   `on-error` : The function to call to set network/server error(s) in place of loading markers.
 *   `callback-args` : Args to pass back to on-load and on-error. These are separated
 *  so that `rewrite-tempids-in-request-queue` can rewrite tempids for merge and
 *  error callbacks
 * 
 *   response-channel will have the response posted to it when the request is done.
 *   .
 */
untangled.client.impl.data_fetch.mark_loading = (function untangled$client$impl$data_fetch$mark_loading(reconciler){
var state = om.next.app_state.call(null,reconciler);
var items_to_load = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword("om.next","ready-to-load","om.next/ready-to-load",-274898824));
if(cljs.core.empty_QMARK_.call(null,items_to_load)){
return null;
} else {
untangled.client.impl.data_fetch.place_load_markers.call(null,state,items_to_load);

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),true,new cljs.core.Keyword("om.next","ready-to-load","om.next/ready-to-load",-274898824),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),untangled.client.impl.data_fetch.full_query.call(null,items_to_load),new cljs.core.Keyword(null,"on-load","on-load",1415151594),untangled.client.impl.data_fetch.loaded_callback.call(null,reconciler),new cljs.core.Keyword(null,"on-error","on-error",1728533530),untangled.client.impl.data_fetch.error_callback.call(null,reconciler),new cljs.core.Keyword(null,"callback-args","callback-args",1117743591),items_to_load], null);
}
});
untangled.client.impl.data_fetch.valid_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ready","ready",1086465795),null,new cljs.core.Keyword(null,"loading","loading",-737050189),null,new cljs.core.Keyword(null,"failed","failed",-1397425762),null], null), null);
/**
 * This is just a testing function -- using ready-state as public interface and call the
 *   `set-{type}!` functions to change it as needed.
 */
untangled.client.impl.data_fetch.make_data_state = (function untangled$client$impl$data_fetch$make_data_state(var_args){
var args39598 = [];
var len__30749__auto___39601 = arguments.length;
var i__30750__auto___39602 = (0);
while(true){
if((i__30750__auto___39602 < len__30749__auto___39601)){
args39598.push((arguments[i__30750__auto___39602]));

var G__39603 = (i__30750__auto___39602 + (1));
i__30750__auto___39602 = G__39603;
continue;
} else {
}
break;
}

var G__39600 = args39598.length;
switch (G__39600) {
case 1:
return untangled.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39598.length)].join('')));

}
});

untangled.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$1 = (function (type){
return untangled.client.impl.data_fetch.make_data_state.call(null,type,cljs.core.PersistentArrayMap.EMPTY);
});

untangled.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$2 = (function (type,params){
if(cljs.core.truth_(cljs.core.get.call(null,untangled.client.impl.data_fetch.valid_types,type))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("untangled.client.impl.data-fetch","type","untangled.client.impl.data-fetch/type",1691369040),type,new cljs.core.Keyword("untangled.client.impl.data-fetch","params","untangled.client.impl.data-fetch/params",194531151),params], null);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("INVALID DATA STATE TYPE: "),cljs.core.str(type)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

untangled.client.impl.data_fetch.make_data_state.cljs$lang$maxFixedArity = 2;
/**
 * Get the query for items that are ready to load into the given app state. Can be called any number of times
 *   (side effect free).
 */
untangled.client.impl.data_fetch.get_ready_query = (function untangled$client$impl$data_fetch$get_ready_query(state){
var items_to_load = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword("om.next","ready-to-load","om.next/ready-to-load",-274898824));
if(cljs.core.empty_QMARK_.call(null,items_to_load)){
return null;
} else {
return om.next.impl.parser.expr__GT_ast.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items-to-load","items-to-load",-1811352068),cljs.core.vec.call(null,cljs.core.mapcat.call(null,untangled.client.impl.data_fetch.data_query,items_to_load))], null));
}
});
/**
 * Remove items from a query (AST) that have a key listed in the elision-set
 */
untangled.client.impl.data_fetch.elide_ast_nodes = (function untangled$client$impl$data_fetch$elide_ast_nodes(p__39606,elision_set){
var map__39609 = p__39606;
var map__39609__$1 = ((((!((map__39609 == null)))?((((map__39609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39609):map__39609);
var ast = map__39609__$1;
var key = cljs.core.get.call(null,map__39609__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
if(cljs.core.contains_QMARK_.call(null,elision_set,key)){
return null;
} else {
return cljs.core.update.call(null,ast,new cljs.core.Keyword(null,"children","children",-940561982),((function (map__39609,map__39609__$1,ast,key){
return (function (c){
return cljs.core.vec.call(null,cljs.core.keep.call(null,((function (map__39609,map__39609__$1,ast,key){
return (function (p1__39605_SHARP_){
return untangled$client$impl$data_fetch$elide_ast_nodes.call(null,p1__39605_SHARP_,elision_set);
});})(map__39609,map__39609__$1,ast,key))
,c));
});})(map__39609,map__39609__$1,ast,key))
);
}
});
/**
 * Inject parameters into elements of the top-level query.
 * 
 *   `params` is a map from keyword (on the query in the AST) to parameter maps. So, given the AST for this query:
 * 
 *   ```
 *   [:a :b :c]
 *   ```
 * 
 *   and a `params` of `{:a {:x 1} :c {:y 2}}` you'll get an AST representing:
 * 
 *   ```
 *   [(:a {:x 1}) :b (:c {:y 2})]
 *   ```
 *   
 */
untangled.client.impl.data_fetch.inject_query_params = (function untangled$client$impl$data_fetch$inject_query_params(ast,params){
var top_level_keys = cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast)));
var param_keys = cljs.core.set.call(null,cljs.core.keys.call(null,params));
var unknown_keys = clojure.set.difference.call(null,param_keys,top_level_keys);
if(!(cljs.core.empty_QMARK_.call(null,unknown_keys))){
untangled.client.logging.error.call(null,[cljs.core.str("Error: You attempted to add parameters for "),cljs.core.str(cljs.core.pr_str.call(null,unknown_keys)),cljs.core.str(" to top-level key(s) of "),cljs.core.str(cljs.core.pr_str.call(null,om.next.ast__GT_query.call(null,ast)))].join(''));
} else {
}

return cljs.core.update_in.call(null,ast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),((function (top_level_keys,param_keys,unknown_keys){
return (function (p1__39611_SHARP_){
return cljs.core.map.call(null,((function (top_level_keys,param_keys,unknown_keys){
return (function (c){
var temp__4655__auto__ = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(c));
if(cljs.core.truth_(temp__4655__auto__)){
var new_params = temp__4655__auto__;
return cljs.core.update.call(null,c,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge,new_params);
} else {
return c;
}
});})(top_level_keys,param_keys,unknown_keys))
,p1__39611_SHARP_);
});})(top_level_keys,param_keys,unknown_keys))
);
});
/**
 * Generate a ready-to-load state with all of the necessary details to do
 *   remoting and merging.
 */
untangled.client.impl.data_fetch.ready_state = (function untangled$client$impl$data_fetch$ready_state(var_args){
var args__30756__auto__ = [];
var len__30749__auto___39617 = arguments.length;
var i__30750__auto___39618 = (0);
while(true){
if((i__30750__auto___39618 < len__30749__auto___39617)){
args__30756__auto__.push((arguments[i__30750__auto___39618]));

var G__39619 = (i__30750__auto___39618 + (1));
i__30750__auto___39618 = G__39619;
continue;
} else {
}
break;
}

var argseq__30757__auto__ = ((((0) < args__30756__auto__.length))?(new cljs.core.IndexedSeq(args__30756__auto__.slice((0)),(0),null)):null);
return untangled.client.impl.data_fetch.ready_state.cljs$core$IFn$_invoke$arity$variadic(argseq__30757__auto__);
});

untangled.client.impl.data_fetch.ready_state.cljs$core$IFn$_invoke$arity$variadic = (function (p__39613){
var map__39614 = p__39613;
var map__39614__$1 = ((((!((map__39614 == null)))?((((map__39614.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39614.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39614):map__39614);
var ident = cljs.core.get.call(null,map__39614__$1,new cljs.core.Keyword(null,"ident","ident",-742346));
var field = cljs.core.get.call(null,map__39614__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var params = cljs.core.get.call(null,map__39614__$1,new cljs.core.Keyword(null,"params","params",710516235));
var without = cljs.core.get.call(null,map__39614__$1,new cljs.core.Keyword(null,"without","without",1107036688),cljs.core.PersistentHashSet.EMPTY);
var query = cljs.core.get.call(null,map__39614__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var post_mutation = cljs.core.get.call(null,map__39614__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
var fallback = cljs.core.get.call(null,map__39614__$1,new cljs.core.Keyword(null,"fallback","fallback",761637929));
var parallel = cljs.core.get.call(null,map__39614__$1,new cljs.core.Keyword(null,"parallel","parallel",-1863607128));
var refresh = cljs.core.get.call(null,map__39614__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525),cljs.core.PersistentVector.EMPTY);
if(cljs.core.truth_((function (){var or__29679__auto__ = field;
if(cljs.core.truth_(or__29679__auto__)){
return or__29679__auto__;
} else {
return query;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("You must supply a query or a field/ident pair"),cljs.core.str("\n"),cljs.core.str("(or field query)")].join('')));
}

if(cljs.core.truth_((function (){var or__29679__auto__ = cljs.core.not.call(null,field);
if(or__29679__auto__){
return or__29679__auto__;
} else {
var and__29667__auto__ = field;
if(cljs.core.truth_(and__29667__auto__)){
return om.util.ident_QMARK_.call(null,ident);
} else {
return and__29667__auto__;
}
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Field requires ident"),cljs.core.str("\n"),cljs.core.str("(or (not field) (and field (util/ident? ident)))")].join('')));
}

var old_ast = om.next.query__GT_ast.call(null,query);
var ast = (function (){var G__39616 = old_ast;
var G__39616__$1 = (cljs.core.truth_(cljs.core.not_empty.call(null,without))?untangled.client.impl.data_fetch.elide_ast_nodes.call(null,G__39616,without):G__39616);
if(cljs.core.truth_(params)){
return untangled.client.impl.data_fetch.inject_query_params.call(null,G__39616__$1,params);
} else {
return G__39616__$1;
}
})();
var query_field = cljs.core.first.call(null,query);
var key = (cljs.core.truth_(om.util.join_QMARK_.call(null,query_field))?om.util.join_key.call(null,query_field):query_field);
var query_SINGLEQUOTE_ = om.next.ast__GT_query.call(null,ast);
if((cljs.core.not.call(null,field)) || (cljs.core._EQ_.call(null,field,key))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Component fetch query does not match supplied field."),cljs.core.str("\n"),cljs.core.str("(or (not field) (= field key))")].join('')));
}

return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("untangled.client.impl.data-fetch","post-mutation","untangled.client.impl.data-fetch/post-mutation",1595291971),new cljs.core.Keyword("untangled.client.impl.data-fetch","parallel","untangled.client.impl.data-fetch/parallel",-1305867292),new cljs.core.Keyword("untangled.client.impl.data-fetch","type","untangled.client.impl.data-fetch/type",1691369040),new cljs.core.Keyword("untangled.client.impl.data-fetch","ident","untangled.client.impl.data-fetch/ident",-550298382),new cljs.core.Keyword("untangled.client.impl.data-fetch","fallback","untangled.client.impl.data-fetch/fallback",1294531829),new cljs.core.Keyword("untangled.client.impl.data-fetch","query","untangled.client.impl.data-fetch/query",-1838118122),new cljs.core.Keyword("untangled.client.impl.data-fetch","field","untangled.client.impl.data-fetch/field",-635694536),new cljs.core.Keyword("untangled.client.impl.data-fetch","refresh","untangled.client.impl.data-fetch/refresh",-1831820519),new cljs.core.Keyword("untangled.client.impl.data-fetch","uuid","untangled.client.impl.data-fetch/uuid",1591853213)],[post_mutation,parallel,new cljs.core.Keyword(null,"ready","ready",1086465795),ident,fallback,query_SINGLEQUOTE_,field,refresh,cljs_uuid_utils.core.uuid_string.call(null,cljs_uuid_utils.core.make_random_squuid.call(null))]);
});

untangled.client.impl.data_fetch.ready_state.cljs$lang$maxFixedArity = (0);

untangled.client.impl.data_fetch.ready_state.cljs$lang$applyTo = (function (seq39612){
return untangled.client.impl.data_fetch.ready_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39612));
});
/**
 * Place a ready-to-load marker into the application state. This should be done from
 *   a mutate function that is abstractly loading something. This is intended for internal use.
 * 
 *   See `load-field` for public API.
 */
untangled.client.impl.data_fetch.mark_ready = (function untangled$client$impl$data_fetch$mark_ready(var_args){
var args__30756__auto__ = [];
var len__30749__auto___39624 = arguments.length;
var i__30750__auto___39625 = (0);
while(true){
if((i__30750__auto___39625 < len__30749__auto___39624)){
args__30756__auto__.push((arguments[i__30750__auto___39625]));

var G__39626 = (i__30750__auto___39625 + (1));
i__30750__auto___39625 = G__39626;
continue;
} else {
}
break;
}

var argseq__30757__auto__ = ((((0) < args__30756__auto__.length))?(new cljs.core.IndexedSeq(args__30756__auto__.slice((0)),(0),null)):null);
return untangled.client.impl.data_fetch.mark_ready.cljs$core$IFn$_invoke$arity$variadic(argseq__30757__auto__);
});

untangled.client.impl.data_fetch.mark_ready.cljs$core$IFn$_invoke$arity$variadic = (function (p__39621){
var map__39622 = p__39621;
var map__39622__$1 = ((((!((map__39622 == null)))?((((map__39622.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39622.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39622):map__39622);
var query = cljs.core.get.call(null,map__39622__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var refresh = cljs.core.get.call(null,map__39622__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525),cljs.core.PersistentVector.EMPTY);
var parallel = cljs.core.get.call(null,map__39622__$1,new cljs.core.Keyword(null,"parallel","parallel",-1863607128));
var fallback = cljs.core.get.call(null,map__39622__$1,new cljs.core.Keyword(null,"fallback","fallback",761637929));
var params = cljs.core.get.call(null,map__39622__$1,new cljs.core.Keyword(null,"params","params",710516235));
var field = cljs.core.get.call(null,map__39622__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var state = cljs.core.get.call(null,map__39622__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var post_mutation = cljs.core.get.call(null,map__39622__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
var without = cljs.core.get.call(null,map__39622__$1,new cljs.core.Keyword(null,"without","without",1107036688),cljs.core.PersistentHashSet.EMPTY);
var ident = cljs.core.get.call(null,map__39622__$1,new cljs.core.Keyword(null,"ident","ident",-742346));
return cljs.core.swap_BANG_.call(null,state,cljs.core.update,new cljs.core.Keyword("om.next","ready-to-load","om.next/ready-to-load",-274898824),cljs.core.conj,untangled.client.impl.data_fetch.ready_state.call(null,new cljs.core.Keyword(null,"ident","ident",-742346),ident,new cljs.core.Keyword(null,"field","field",-1302436500),field,new cljs.core.Keyword(null,"parallel","parallel",-1863607128),parallel,new cljs.core.Keyword(null,"refresh","refresh",1947415525),refresh,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"without","without",1107036688),without,new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705),post_mutation,new cljs.core.Keyword(null,"fallback","fallback",761637929),fallback));
});

untangled.client.impl.data_fetch.mark_ready.cljs$lang$maxFixedArity = (0);

untangled.client.impl.data_fetch.mark_ready.cljs$lang$applyTo = (function (seq39620){
return untangled.client.impl.data_fetch.mark_ready.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39620));
});
untangled.client.impl.data_fetch.data_ident = (function untangled$client$impl$data_fetch$data_ident(state){
return new cljs.core.Keyword("untangled.client.impl.data-fetch","ident","untangled.client.impl.data-fetch/ident",-550298382).cljs$core$IFn$_invoke$arity$1(state);
});
untangled.client.impl.data_fetch.data_query = (function untangled$client$impl$data_fetch$data_query(state){
if(cljs.core.truth_(untangled.client.impl.data_fetch.data_ident.call(null,state))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([untangled.client.impl.data_fetch.data_ident.call(null,state),new cljs.core.Keyword("untangled.client.impl.data-fetch","query","untangled.client.impl.data-fetch/query",-1838118122).cljs$core$IFn$_invoke$arity$1(state)], true, false)], null);
} else {
return new cljs.core.Keyword("untangled.client.impl.data-fetch","query","untangled.client.impl.data-fetch/query",-1838118122).cljs$core$IFn$_invoke$arity$1(state);
}
});
untangled.client.impl.data_fetch.data_field = (function untangled$client$impl$data_fetch$data_field(state){
return new cljs.core.Keyword("untangled.client.impl.data-fetch","field","untangled.client.impl.data-fetch/field",-635694536).cljs$core$IFn$_invoke$arity$1(state);
});
untangled.client.impl.data_fetch.data_uuid = (function untangled$client$impl$data_fetch$data_uuid(state){
return new cljs.core.Keyword("untangled.client.impl.data-fetch","uuid","untangled.client.impl.data-fetch/uuid",1591853213).cljs$core$IFn$_invoke$arity$1(state);
});
untangled.client.impl.data_fetch.data_refresh = (function untangled$client$impl$data_fetch$data_refresh(state){
return new cljs.core.Keyword("untangled.client.impl.data-fetch","refresh","untangled.client.impl.data-fetch/refresh",-1831820519).cljs$core$IFn$_invoke$arity$1(state);
});
untangled.client.impl.data_fetch.data_query_key = (function untangled$client$impl$data_fetch$data_query_key(state){
var expr = cljs.core.first.call(null,new cljs.core.Keyword("untangled.client.impl.data-fetch","query","untangled.client.impl.data-fetch/query",-1838118122).cljs$core$IFn$_invoke$arity$1(state));
var key = (((expr instanceof cljs.core.Keyword))?expr:((cljs.core.map_QMARK_.call(null,expr))?cljs.core.ffirst.call(null,expr):null));
return key;
});
untangled.client.impl.data_fetch.data_path = (function untangled$client$impl$data_fetch$data_path(state){
if(((untangled.client.impl.data_fetch.data_ident.call(null,state) == null)) && ((untangled.client.impl.data_fetch.data_field.call(null,state) == null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.impl.data_fetch.data_query_key.call(null,state)], null);
} else {
return cljs.core.conj.call(null,untangled.client.impl.data_fetch.data_ident.call(null,state),untangled.client.impl.data_fetch.data_field.call(null,state));
}
});
untangled.client.impl.data_fetch.data_params = (function untangled$client$impl$data_fetch$data_params(state){
return new cljs.core.Keyword("untangled.client.impl.data-fetch","params","untangled.client.impl.data-fetch/params",194531151).cljs$core$IFn$_invoke$arity$1(state);
});
untangled.client.impl.data_fetch.data_exclusions = (function untangled$client$impl$data_fetch$data_exclusions(state){
return new cljs.core.Keyword("untangled.client.impl.data-fetch","without","untangled.client.impl.data-fetch/without",716864332).cljs$core$IFn$_invoke$arity$1(state);
});
var set_type = (function untangled$client$impl$data_fetch$set_type(state,type,params){
return cljs.core.merge.call(null,state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("untangled.client.impl.data-fetch","type","untangled.client.impl.data-fetch/type",1691369040),type,new cljs.core.Keyword("untangled.client.impl.data-fetch","params","untangled.client.impl.data-fetch/params",194531151),params], null));
});
untangled.client.impl.data_fetch.set_ready_BANG_ = (function untangled$client$impl$data_fetch$set_ready_BANG_(var_args){
var args39627 = [];
var len__30749__auto___39636 = arguments.length;
var i__30750__auto___39637 = (0);
while(true){
if((i__30750__auto___39637 < len__30749__auto___39636)){
args39627.push((arguments[i__30750__auto___39637]));

var G__39638 = (i__30750__auto___39637 + (1));
i__30750__auto___39637 = G__39638;
continue;
} else {
}
break;
}

var G__39629 = args39627.length;
switch (G__39629) {
case 1:
return untangled.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39627.length)].join('')));

}
});

untangled.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (state){
return untangled.client.impl.data_fetch.set_ready_BANG_.call(null,state,null);
});

untangled.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,params){
return set_type.call(null,state,new cljs.core.Keyword(null,"ready","ready",1086465795),params);
});

untangled.client.impl.data_fetch.set_ready_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Sets a marker to loading, ensuring that it has a UUID
 */
untangled.client.impl.data_fetch.set_loading_BANG_ = (function untangled$client$impl$data_fetch$set_loading_BANG_(var_args){
var args39630 = [];
var len__30749__auto___39640 = arguments.length;
var i__30750__auto___39641 = (0);
while(true){
if((i__30750__auto___39641 < len__30749__auto___39640)){
args39630.push((arguments[i__30750__auto___39641]));

var G__39642 = (i__30750__auto___39641 + (1));
i__30750__auto___39641 = G__39642;
continue;
} else {
}
break;
}

var G__39632 = args39630.length;
switch (G__39632) {
case 1:
return untangled.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39630.length)].join('')));

}
});

untangled.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (state){
return untangled.client.impl.data_fetch.set_loading_BANG_.call(null,state,null);
});

untangled.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,params){
var rv = set_type.call(null,state,new cljs.core.Keyword(null,"loading","loading",-737050189),params);
return cljs.core.with_meta.call(null,rv,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),rv], null));
});

untangled.client.impl.data_fetch.set_loading_BANG_.cljs$lang$maxFixedArity = 2;

untangled.client.impl.data_fetch.set_failed_BANG_ = (function untangled$client$impl$data_fetch$set_failed_BANG_(var_args){
var args39633 = [];
var len__30749__auto___39644 = arguments.length;
var i__30750__auto___39645 = (0);
while(true){
if((i__30750__auto___39645 < len__30749__auto___39644)){
args39633.push((arguments[i__30750__auto___39645]));

var G__39646 = (i__30750__auto___39645 + (1));
i__30750__auto___39645 = G__39646;
continue;
} else {
}
break;
}

var G__39635 = args39633.length;
switch (G__39635) {
case 1:
return untangled.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39633.length)].join('')));

}
});

untangled.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (state){
return untangled.client.impl.data_fetch.set_failed_BANG_.call(null,state,null);
});

untangled.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,params){
return set_type.call(null,state,new cljs.core.Keyword(null,"failed","failed",-1397425762),params);
});

untangled.client.impl.data_fetch.set_failed_BANG_.cljs$lang$maxFixedArity = 2;
/**
 * Compose together a sequence of states into a single query.
 */
untangled.client.impl.data_fetch.full_query = (function untangled$client$impl$data_fetch$full_query(items){
return cljs.core.vec.call(null,cljs.core.mapcat.call(null,(function (item){
return untangled.client.impl.data_fetch.data_query.call(null,item);
}),items));
});
untangled.client.impl.data_fetch.set_global_loading = (function untangled$client$impl$data_fetch$set_global_loading(reconciler){

var state_atom = om.next.app_state.call(null,reconciler);
var loading_QMARK_ = cljs.core.boolean$.call(null,cljs.core.seq.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,state_atom),new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825))));
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),loading_QMARK_);
});
untangled.client.impl.data_fetch.loaded_callback = (function untangled$client$impl$data_fetch$loaded_callback(reconciler){
return (function (response,items){
var query = untangled.client.impl.data_fetch.full_query.call(null,items);
var loading_items = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,untangled.client.impl.data_fetch.set_loading_BANG_,items));
var refresh_set = cljs.core.into.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),null], null), null),cljs.core.mapcat.call(null,untangled.client.impl.data_fetch.data_refresh,items));
var to_refresh = cljs.core.vec.call(null,refresh_set);
var marked_response = untangled.client.impl.om_plumbing.mark_missing.call(null,response,query);
var app_state = om.next.app_state.call(null,reconciler);
var ran_mutations = cljs.core.atom.call(null,false);
var remove_markers = ((function (query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations){
return (function (){
var seq__39658 = cljs.core.seq.call(null,loading_items);
var chunk__39659 = null;
var count__39660 = (0);
var i__39661 = (0);
while(true){
if((i__39661 < count__39660)){
var item = cljs.core._nth.call(null,chunk__39659,i__39661);
cljs.core.swap_BANG_.call(null,app_state,((function (seq__39658,chunk__39659,count__39660,i__39661,item,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations){
return (function (s){
return cljs.core.assoc_in.call(null,cljs.core.update.call(null,s,new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.disj,untangled.client.impl.data_fetch.data_uuid.call(null,item)),untangled.client.impl.data_fetch.data_path.call(null,item),null);
});})(seq__39658,chunk__39659,count__39660,i__39661,item,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations))
);

var G__39668 = seq__39658;
var G__39669 = chunk__39659;
var G__39670 = count__39660;
var G__39671 = (i__39661 + (1));
seq__39658 = G__39668;
chunk__39659 = G__39669;
count__39660 = G__39670;
i__39661 = G__39671;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39658);
if(temp__4657__auto__){
var seq__39658__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39658__$1)){
var c__30490__auto__ = cljs.core.chunk_first.call(null,seq__39658__$1);
var G__39672 = cljs.core.chunk_rest.call(null,seq__39658__$1);
var G__39673 = c__30490__auto__;
var G__39674 = cljs.core.count.call(null,c__30490__auto__);
var G__39675 = (0);
seq__39658 = G__39672;
chunk__39659 = G__39673;
count__39660 = G__39674;
i__39661 = G__39675;
continue;
} else {
var item = cljs.core.first.call(null,seq__39658__$1);
cljs.core.swap_BANG_.call(null,app_state,((function (seq__39658,chunk__39659,count__39660,i__39661,item,seq__39658__$1,temp__4657__auto__,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations){
return (function (s){
return cljs.core.assoc_in.call(null,cljs.core.update.call(null,s,new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.disj,untangled.client.impl.data_fetch.data_uuid.call(null,item)),untangled.client.impl.data_fetch.data_path.call(null,item),null);
});})(seq__39658,chunk__39659,count__39660,i__39661,item,seq__39658__$1,temp__4657__auto__,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations))
);

var G__39676 = cljs.core.next.call(null,seq__39658__$1);
var G__39677 = null;
var G__39678 = (0);
var G__39679 = (0);
seq__39658 = G__39676;
chunk__39659 = G__39677;
count__39660 = G__39678;
i__39661 = G__39679;
continue;
}
} else {
return null;
}
}
break;
}
});})(query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations))
;
var run_post_mutations = ((function (query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations,remove_markers){
return (function (){
var seq__39662 = cljs.core.seq.call(null,loading_items);
var chunk__39663 = null;
var count__39664 = (0);
var i__39665 = (0);
while(true){
if((i__39665 < count__39664)){
var item = cljs.core._nth.call(null,chunk__39663,i__39665);
var temp__4657__auto___39680 = new cljs.core.Keyword("untangled.client.impl.data-fetch","post-mutation","untangled.client.impl.data-fetch/post-mutation",1595291971).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__4657__auto___39680)){
var mutation_symbol_39681 = temp__4657__auto___39680;
cljs.core.reset_BANG_.call(null,ran_mutations,true);

var G__39666_39682 = untangled.client.mutations.mutate.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),om.next.app_state.call(null,reconciler)], null),mutation_symbol_39681,cljs.core.PersistentArrayMap.EMPTY);
var G__39666_39683__$1 = (((G__39666_39682 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__39666_39682));
if((G__39666_39683__$1 == null)){
} else {
cljs.core.apply.call(null,G__39666_39683__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__39684 = seq__39662;
var G__39685 = chunk__39663;
var G__39686 = count__39664;
var G__39687 = (i__39665 + (1));
seq__39662 = G__39684;
chunk__39663 = G__39685;
count__39664 = G__39686;
i__39665 = G__39687;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39662);
if(temp__4657__auto__){
var seq__39662__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39662__$1)){
var c__30490__auto__ = cljs.core.chunk_first.call(null,seq__39662__$1);
var G__39688 = cljs.core.chunk_rest.call(null,seq__39662__$1);
var G__39689 = c__30490__auto__;
var G__39690 = cljs.core.count.call(null,c__30490__auto__);
var G__39691 = (0);
seq__39662 = G__39688;
chunk__39663 = G__39689;
count__39664 = G__39690;
i__39665 = G__39691;
continue;
} else {
var item = cljs.core.first.call(null,seq__39662__$1);
var temp__4657__auto___39692__$1 = new cljs.core.Keyword("untangled.client.impl.data-fetch","post-mutation","untangled.client.impl.data-fetch/post-mutation",1595291971).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__4657__auto___39692__$1)){
var mutation_symbol_39693 = temp__4657__auto___39692__$1;
cljs.core.reset_BANG_.call(null,ran_mutations,true);

var G__39667_39694 = untangled.client.mutations.mutate.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),om.next.app_state.call(null,reconciler)], null),mutation_symbol_39693,cljs.core.PersistentArrayMap.EMPTY);
var G__39667_39695__$1 = (((G__39667_39694 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__39667_39694));
if((G__39667_39695__$1 == null)){
} else {
cljs.core.apply.call(null,G__39667_39695__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__39696 = cljs.core.next.call(null,seq__39662__$1);
var G__39697 = null;
var G__39698 = (0);
var G__39699 = (0);
seq__39662 = G__39696;
chunk__39663 = G__39697;
count__39664 = G__39698;
i__39665 = G__39699;
continue;
}
} else {
return null;
}
}
break;
}
});})(query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations,remove_markers))
;
remove_markers.call(null);

om.next.merge_BANG_.call(null,reconciler,marked_response,query);

run_post_mutations.call(null);

untangled.client.impl.data_fetch.set_global_loading.call(null,reconciler);

if(cljs.core.contains_QMARK_.call(null,refresh_set,new cljs.core.Keyword("untangled","force-root","untangled/force-root",513707319))){
return untangled.dom.force_render.call(null,reconciler);
} else {
return untangled.dom.force_render.call(null,reconciler,to_refresh);
}
});
});
untangled.client.impl.data_fetch.error_callback = (function untangled$client$impl$data_fetch$error_callback(reconciler){
return (function (error,items){
var loading_items = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,untangled.client.impl.data_fetch.set_loading_BANG_,items));
var app_state = om.next.app_state.call(null,reconciler);
var refresh_set = cljs.core.into.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),null], null), null),cljs.core.mapcat.call(null,untangled.client.impl.data_fetch.data_refresh,items));
var to_refresh = cljs.core.vec.call(null,refresh_set);
var ran_fallbacks = cljs.core.atom.call(null,false);
var mark_errors = ((function (loading_items,app_state,refresh_set,to_refresh,ran_fallbacks){
return (function (){
cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword("untangled","server-error","untangled/server-error",1542377811),error);

var seq__39710 = cljs.core.seq.call(null,loading_items);
var chunk__39711 = null;
var count__39712 = (0);
var i__39713 = (0);
while(true){
if((i__39713 < count__39712)){
var item = cljs.core._nth.call(null,chunk__39711,i__39713);
cljs.core.swap_BANG_.call(null,app_state,((function (seq__39710,chunk__39711,count__39712,i__39713,item,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks){
return (function (s){
return cljs.core.update_in.call(null,cljs.core.update.call(null,s,new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.disj,untangled.client.impl.data_fetch.data_uuid.call(null,item)),untangled.client.impl.data_fetch.data_path.call(null,item),untangled.client.impl.data_fetch.set_failed_BANG_,error);
});})(seq__39710,chunk__39711,count__39712,i__39713,item,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks))
);

var G__39720 = seq__39710;
var G__39721 = chunk__39711;
var G__39722 = count__39712;
var G__39723 = (i__39713 + (1));
seq__39710 = G__39720;
chunk__39711 = G__39721;
count__39712 = G__39722;
i__39713 = G__39723;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39710);
if(temp__4657__auto__){
var seq__39710__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39710__$1)){
var c__30490__auto__ = cljs.core.chunk_first.call(null,seq__39710__$1);
var G__39724 = cljs.core.chunk_rest.call(null,seq__39710__$1);
var G__39725 = c__30490__auto__;
var G__39726 = cljs.core.count.call(null,c__30490__auto__);
var G__39727 = (0);
seq__39710 = G__39724;
chunk__39711 = G__39725;
count__39712 = G__39726;
i__39713 = G__39727;
continue;
} else {
var item = cljs.core.first.call(null,seq__39710__$1);
cljs.core.swap_BANG_.call(null,app_state,((function (seq__39710,chunk__39711,count__39712,i__39713,item,seq__39710__$1,temp__4657__auto__,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks){
return (function (s){
return cljs.core.update_in.call(null,cljs.core.update.call(null,s,new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.disj,untangled.client.impl.data_fetch.data_uuid.call(null,item)),untangled.client.impl.data_fetch.data_path.call(null,item),untangled.client.impl.data_fetch.set_failed_BANG_,error);
});})(seq__39710,chunk__39711,count__39712,i__39713,item,seq__39710__$1,temp__4657__auto__,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks))
);

var G__39728 = cljs.core.next.call(null,seq__39710__$1);
var G__39729 = null;
var G__39730 = (0);
var G__39731 = (0);
seq__39710 = G__39728;
chunk__39711 = G__39729;
count__39712 = G__39730;
i__39713 = G__39731;
continue;
}
} else {
return null;
}
}
break;
}
});})(loading_items,app_state,refresh_set,to_refresh,ran_fallbacks))
;
var run_fallbacks = ((function (loading_items,app_state,refresh_set,to_refresh,ran_fallbacks,mark_errors){
return (function (){
var seq__39714 = cljs.core.seq.call(null,loading_items);
var chunk__39715 = null;
var count__39716 = (0);
var i__39717 = (0);
while(true){
if((i__39717 < count__39716)){
var item = cljs.core._nth.call(null,chunk__39715,i__39717);
var temp__4657__auto___39732 = new cljs.core.Keyword("untangled.client.impl.data-fetch","fallback","untangled.client.impl.data-fetch/fallback",1294531829).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__4657__auto___39732)){
var fallback_symbol_39733 = temp__4657__auto___39732;
cljs.core.reset_BANG_.call(null,ran_fallbacks,true);

var G__39718_39734 = untangled.client.mutations.mutate.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),app_state], null),fallback_symbol_39733,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null));
var G__39718_39735__$1 = (((G__39718_39734 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__39718_39734));
if((G__39718_39735__$1 == null)){
} else {
cljs.core.apply.call(null,G__39718_39735__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__39736 = seq__39714;
var G__39737 = chunk__39715;
var G__39738 = count__39716;
var G__39739 = (i__39717 + (1));
seq__39714 = G__39736;
chunk__39715 = G__39737;
count__39716 = G__39738;
i__39717 = G__39739;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39714);
if(temp__4657__auto__){
var seq__39714__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39714__$1)){
var c__30490__auto__ = cljs.core.chunk_first.call(null,seq__39714__$1);
var G__39740 = cljs.core.chunk_rest.call(null,seq__39714__$1);
var G__39741 = c__30490__auto__;
var G__39742 = cljs.core.count.call(null,c__30490__auto__);
var G__39743 = (0);
seq__39714 = G__39740;
chunk__39715 = G__39741;
count__39716 = G__39742;
i__39717 = G__39743;
continue;
} else {
var item = cljs.core.first.call(null,seq__39714__$1);
var temp__4657__auto___39744__$1 = new cljs.core.Keyword("untangled.client.impl.data-fetch","fallback","untangled.client.impl.data-fetch/fallback",1294531829).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__4657__auto___39744__$1)){
var fallback_symbol_39745 = temp__4657__auto___39744__$1;
cljs.core.reset_BANG_.call(null,ran_fallbacks,true);

var G__39719_39746 = untangled.client.mutations.mutate.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),app_state], null),fallback_symbol_39745,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null));
var G__39719_39747__$1 = (((G__39719_39746 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__39719_39746));
if((G__39719_39747__$1 == null)){
} else {
cljs.core.apply.call(null,G__39719_39747__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__39748 = cljs.core.next.call(null,seq__39714__$1);
var G__39749 = null;
var G__39750 = (0);
var G__39751 = (0);
seq__39714 = G__39748;
chunk__39715 = G__39749;
count__39716 = G__39750;
i__39717 = G__39751;
continue;
}
} else {
return null;
}
}
break;
}
});})(loading_items,app_state,refresh_set,to_refresh,ran_fallbacks,mark_errors))
;
mark_errors.call(null);

om.next.merge_BANG_.call(null,reconciler,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),untangled.dom.unique_key.call(null)], null));

run_fallbacks.call(null);

untangled.client.impl.data_fetch.set_global_loading.call(null,reconciler);

if(cljs.core.contains_QMARK_.call(null,refresh_set,new cljs.core.Keyword("untangled","force-root","untangled/force-root",513707319))){
return untangled.dom.force_render.call(null,reconciler);
} else {
return untangled.dom.force_render.call(null,reconciler,to_refresh);
}
});
});

//# sourceMappingURL=data_fetch.js.map?rel=1466782845577