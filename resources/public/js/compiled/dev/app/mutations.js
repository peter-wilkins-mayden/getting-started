// Compiled by ClojureScript 1.8.51 {}
goog.provide('app.mutations');
goog.require('cljs.core');
goog.require('untangled.client.mutations');
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("app","choose-tab","app/choose-tab",-1324531024,null),(function (p__44803,_,p__44804){
var map__44805 = p__44803;
var map__44805__$1 = ((((!((map__44805 == null)))?((((map__44805.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44805.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44805):map__44805);
var state = cljs.core.get.call(null,map__44805__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__44806 = p__44804;
var map__44806__$1 = ((((!((map__44806 == null)))?((((map__44806.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44806.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44806):map__44806);
var tab = cljs.core.get.call(null,map__44806__$1,new cljs.core.Keyword(null,"tab","tab",-559583621));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__44805,map__44805__$1,state,map__44806,map__44806__$1,tab){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tab,(1)], null));
});})(map__44805,map__44805__$1,state,map__44806,map__44806__$1,tab))
], null);
}));

//# sourceMappingURL=mutations.js.map?rel=1466801246064