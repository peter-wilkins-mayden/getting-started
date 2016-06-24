// Compiled by ClojureScript 1.8.51 {}
goog.provide('untangled.dom');
goog.require('cljs.core');
goog.require('cljs_uuid_utils.core');
goog.require('untangled.client.logging');
goog.require('om.next.protocols');
goog.require('om.next');
goog.require('clojure.string');
/**
 * Get a unique string-based key. Never returns the same value.
 */
untangled.dom.unique_key = (function untangled$dom$unique_key(){
return cljs_uuid_utils.core.uuid_string.call(null,cljs_uuid_utils.core.make_random_squuid.call(null));
});
/**
 * Re-render components. If only a reconciler is supplied then it forces a full DOM re-render by updating the :ui/react-key
 *   in app state and forcing Om to re-render the entire DOM, which only works properly if you query
 *   for :ui/react-key in your Root render component and add that as the react :key to your top-level element.
 * 
 *   If you supply an additional vector of keywords and idents then it will ask Om to rerender only those components that mention
 *   those things in their queries.
 */
untangled.dom.force_render = (function untangled$dom$force_render(var_args){
var args39537 = [];
var len__30749__auto___39540 = arguments.length;
var i__30750__auto___39541 = (0);
while(true){
if((i__30750__auto___39541 < len__30749__auto___39540)){
args39537.push((arguments[i__30750__auto___39541]));

var G__39542 = (i__30750__auto___39541 + (1));
i__30750__auto___39541 = G__39542;
continue;
} else {
}
break;
}

var G__39539 = args39537.length;
switch (G__39539) {
case 2:
return untangled.dom.force_render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return untangled.dom.force_render.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39537.length)].join('')));

}
});

untangled.dom.force_render.cljs$core$IFn$_invoke$arity$2 = (function (reconciler,keywords){
om.next.protocols.queue_BANG_.call(null,reconciler,keywords);

return om.next.protocols.schedule_render_BANG_.call(null,reconciler);
});

untangled.dom.force_render.cljs$core$IFn$_invoke$arity$1 = (function (reconciler){
var app_state = om.next.app_state.call(null,reconciler);
cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),untangled.dom.unique_key.call(null));

return om.next.force_root_render_BANG_.call(null,reconciler);
});

untangled.dom.force_render.cljs$lang$maxFixedArity = 2;
/**
 * Given a component and a local state key or keys, to be passed to `om/get-state`,
 *   returns a function that takes the `state-value` to test, a `default-class-string`,
 *   and optionaol `:when-true` and `:when-false`. The values `:when-false` and `when-true`
 *   are appended to `default-class-string` after the test against `state-value`.
 * 
 *   Parameters:
 *   `component`: The component to pass to `om/get-state`.
 *   `local-state-key`: The key or keys to pass to `om/get-state`.
 */
untangled.dom.append_class = (function untangled$dom$append_class(component,local_state_key){
return (function() { 
var G__39550__delegate = function (state_key,default_class_string,p__39547){
var map__39548 = p__39547;
var map__39548__$1 = ((((!((map__39548 == null)))?((((map__39548.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39548.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39548):map__39548);
var when_true = cljs.core.get.call(null,map__39548__$1,new cljs.core.Keyword(null,"when-true","when-true",-657079170),"active");
var when_false = cljs.core.get.call(null,map__39548__$1,new cljs.core.Keyword(null,"when-false","when-false",815014297),"");
var append_string = ((cljs.core._EQ_.call(null,state_key,om.next.get_state.call(null,component,local_state_key)))?when_true:when_false);
return [cljs.core.str(default_class_string),cljs.core.str(" "),cljs.core.str(append_string)].join('');
};
var G__39550 = function (state_key,default_class_string,var_args){
var p__39547 = null;
if (arguments.length > 2) {
var G__39551__i = 0, G__39551__a = new Array(arguments.length -  2);
while (G__39551__i < G__39551__a.length) {G__39551__a[G__39551__i] = arguments[G__39551__i + 2]; ++G__39551__i;}
  p__39547 = new cljs.core.IndexedSeq(G__39551__a,0);
} 
return G__39550__delegate.call(this,state_key,default_class_string,p__39547);};
G__39550.cljs$lang$maxFixedArity = 2;
G__39550.cljs$lang$applyTo = (function (arglist__39552){
var state_key = cljs.core.first(arglist__39552);
arglist__39552 = cljs.core.next(arglist__39552);
var default_class_string = cljs.core.first(arglist__39552);
var p__39547 = cljs.core.rest(arglist__39552);
return G__39550__delegate(state_key,default_class_string,p__39547);
});
G__39550.cljs$core$IFn$_invoke$arity$variadic = G__39550__delegate;
return G__39550;
})()
;
});
/**
 * Adds the 'visible' class and removes the 'hidden' class to the pre-supplied class string based on the truthiness
 *   of the value in data at key.
 * 
 *   Parameters:
 *   `data`: A map containing the component's state.
 *   `key`: A key within `data`.
 *   `always-classes`: A string that has the CSS classes to always return in the returned string.
 * 
 *   Optional named parameters:
 * 
 *   `:when-true v` : This string to add when the key's value is true. Defaults to "active".
 *   `:when-false v` : The string to add when the key's value is false. Defaults to "".
 *   
 */
untangled.dom.toggle_class = (function untangled$dom$toggle_class(var_args){
var args__30756__auto__ = [];
var len__30749__auto___39560 = arguments.length;
var i__30750__auto___39561 = (0);
while(true){
if((i__30750__auto___39561 < len__30749__auto___39560)){
args__30756__auto__.push((arguments[i__30750__auto___39561]));

var G__39562 = (i__30750__auto___39561 + (1));
i__30750__auto___39561 = G__39562;
continue;
} else {
}
break;
}

var argseq__30757__auto__ = ((((3) < args__30756__auto__.length))?(new cljs.core.IndexedSeq(args__30756__auto__.slice((3)),(0),null)):null);
return untangled.dom.toggle_class.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30757__auto__);
});

untangled.dom.toggle_class.cljs$core$IFn$_invoke$arity$variadic = (function (data,key,always_classes,p__39557){
var map__39558 = p__39557;
var map__39558__$1 = ((((!((map__39558 == null)))?((((map__39558.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39558.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39558):map__39558);
var when_true = cljs.core.get.call(null,map__39558__$1,new cljs.core.Keyword(null,"when-true","when-true",-657079170),"active");
var when_false = cljs.core.get.call(null,map__39558__$1,new cljs.core.Keyword(null,"when-false","when-false",815014297),"");
if(cljs.core.truth_(cljs.core.get.call(null,data,key))){
return clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [always_classes,when_true], null));
} else {
return clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [always_classes,when_false], null));
}
});

untangled.dom.toggle_class.cljs$lang$maxFixedArity = (3);

untangled.dom.toggle_class.cljs$lang$applyTo = (function (seq39553){
var G__39554 = cljs.core.first.call(null,seq39553);
var seq39553__$1 = cljs.core.next.call(null,seq39553);
var G__39555 = cljs.core.first.call(null,seq39553__$1);
var seq39553__$2 = cljs.core.next.call(null,seq39553__$1);
var G__39556 = cljs.core.first.call(null,seq39553__$2);
var seq39553__$3 = cljs.core.next.call(null,seq39553__$2);
return untangled.dom.toggle_class.cljs$core$IFn$_invoke$arity$variadic(G__39554,G__39555,G__39556,seq39553__$3);
});
/**
 * Returns the text value from an input change event.
 */
untangled.dom.text_value = (function untangled$dom$text_value(evt){
try{return evt.target.value;
}catch (e39564){if((e39564 instanceof Object)){
var e = e39564;
return untangled.client.logging.warn.call(null,"Event had no target when trying to pull text");
} else {
throw e39564;

}
}});

//# sourceMappingURL=dom.js.map?rel=1466782845225