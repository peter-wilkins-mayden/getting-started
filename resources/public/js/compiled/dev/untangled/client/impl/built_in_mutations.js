// Compiled by ClojureScript 1.8.51 {}
goog.provide('untangled.client.impl.built_in_mutations');
goog.require('cljs.core');
goog.require('untangled.client.mutations');
goog.require('untangled.client.logging');
goog.require('untangled.client.impl.data_fetch');
goog.require('untangled.dom');
goog.require('untangled.i18n.core');
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled","load","untangled/load",89075339,null),(function (p__40133,_,p__40134){
var map__40135 = p__40133;
var map__40135__$1 = ((((!((map__40135 == null)))?((((map__40135.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40135.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40135):map__40135);
var state = cljs.core.get.call(null,map__40135__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__40136 = p__40134;
var map__40136__$1 = ((((!((map__40136 == null)))?((((map__40136.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40136.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40136):map__40136);
var query = cljs.core.get.call(null,map__40136__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var callback = cljs.core.get.call(null,map__40136__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
var refresh = cljs.core.get.call(null,map__40136__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525));
var parallel = cljs.core.get.call(null,map__40136__$1,new cljs.core.Keyword(null,"parallel","parallel",-1863607128));
var fallback = cljs.core.get.call(null,map__40136__$1,new cljs.core.Keyword(null,"fallback","fallback",761637929));
var params = cljs.core.get.call(null,map__40136__$1,new cljs.core.Keyword(null,"params","params",710516235));
var field = cljs.core.get.call(null,map__40136__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var post_mutation = cljs.core.get.call(null,map__40136__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
var without = cljs.core.get.call(null,map__40136__$1,new cljs.core.Keyword(null,"without","without",1107036688));
var root = cljs.core.get.call(null,map__40136__$1,new cljs.core.Keyword(null,"root","root",-448657453));
var ident = cljs.core.get.call(null,map__40136__$1,new cljs.core.Keyword(null,"ident","ident",-742346));
if(cljs.core.truth_(callback)){
untangled.client.logging.error.call(null,"Callback no longer supported. Use post-mutation instead.");
} else {
}

if(cljs.core.truth_((function (){var and__29667__auto__ = post_mutation;
if(cljs.core.truth_(and__29667__auto__)){
return !((post_mutation instanceof cljs.core.Symbol));
} else {
return and__29667__auto__;
}
})())){
untangled.client.logging.error.call(null,"post-mutation must be a symbol or nil");
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true,new cljs.core.Keyword(null,"action","action",-811238024),((function (map__40135,map__40135__$1,state,map__40136,map__40136__$1,query,callback,refresh,parallel,fallback,params,field,post_mutation,without,root,ident){
return (function (){
return untangled.client.impl.data_fetch.mark_ready.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"root","root",-448657453),root,new cljs.core.Keyword(null,"field","field",-1302436500),field,new cljs.core.Keyword(null,"ident","ident",-742346),ident,new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"without","without",1107036688),without,new cljs.core.Keyword(null,"refresh","refresh",1947415525),refresh,new cljs.core.Keyword(null,"parallel","parallel",-1863607128),parallel,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705),post_mutation,new cljs.core.Keyword(null,"fallback","fallback",761637929),fallback);
});})(map__40135,map__40135__$1,state,map__40136,map__40136__$1,query,callback,refresh,parallel,fallback,params,field,post_mutation,without,root,ident))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("ui","change-locale","ui/change-locale",1814019626,null),(function (p__40140,_,p__40141){
var map__40142 = p__40140;
var map__40142__$1 = ((((!((map__40142 == null)))?((((map__40142.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40142.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40142):map__40142);
var state = cljs.core.get.call(null,map__40142__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__40143 = p__40141;
var map__40143__$1 = ((((!((map__40143 == null)))?((((map__40143.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40143.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40143):map__40143);
var lang = cljs.core.get.call(null,map__40143__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__40142,map__40142__$1,state,map__40143,map__40143__$1,lang){
return (function (){
cljs.core.reset_BANG_.call(null,untangled.i18n.core._STAR_current_locale_STAR_,lang);

return cljs.core.swap_BANG_.call(null,state,((function (map__40142,map__40142__$1,state,map__40143,map__40143__$1,lang){
return (function (p1__40139_SHARP_){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,p1__40139_SHARP_,new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),lang),new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),untangled.dom.unique_key.call(null));
});})(map__40142,map__40142__$1,state,map__40143,map__40143__$1,lang))
);
});})(map__40142,map__40142__$1,state,map__40143,map__40143__$1,lang))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("tx","fallback","tx/fallback",-1892802308,null),(function (env,_,p__40146){
var map__40147 = p__40146;
var map__40147__$1 = ((((!((map__40147 == null)))?((((map__40147.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40147.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40147):map__40147);
var params = map__40147__$1;
var action = cljs.core.get.call(null,map__40147__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var execute = cljs.core.get.call(null,map__40147__$1,new cljs.core.Keyword(null,"execute","execute",-129499188));
if(cljs.core.truth_(execute)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__40147,map__40147__$1,params,action,execute){
return (function (){
var G__40149 = untangled.client.mutations.mutate.call(null,env,action,cljs.core.dissoc.call(null,params,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"execute","execute",-129499188)));
var G__40149__$1 = (((G__40149 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__40149));
if((G__40149__$1 == null)){
return null;
} else {
return cljs.core.apply.call(null,G__40149__$1,cljs.core.PersistentVector.EMPTY);
}
});})(map__40147,map__40147__$1,params,action,execute))
], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true], null);
}
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("ui","set-props","ui/set-props",-1564556899,null),(function (p__40150,_,params){
var map__40151 = p__40150;
var map__40151__$1 = ((((!((map__40151 == null)))?((((map__40151.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40151.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40151):map__40151);
var state = cljs.core.get.call(null,map__40151__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.call(null,map__40151__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
if((ref == null)){
untangled.client.logging.error.call(null,"ui/set-props requires component to have an ident.");
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__40151,map__40151__$1,state,ref){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,ref,((function (map__40151,map__40151__$1,state,ref){
return (function (st){
return cljs.core.merge.call(null,st,params);
});})(map__40151,map__40151__$1,state,ref))
);
});})(map__40151,map__40151__$1,state,ref))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("ui","toggle","ui/toggle",-1362596183,null),(function (p__40153,_,p__40154){
var map__40155 = p__40153;
var map__40155__$1 = ((((!((map__40155 == null)))?((((map__40155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40155):map__40155);
var state = cljs.core.get.call(null,map__40155__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.call(null,map__40155__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var map__40156 = p__40154;
var map__40156__$1 = ((((!((map__40156 == null)))?((((map__40156.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40156.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40156):map__40156);
var field = cljs.core.get.call(null,map__40156__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
if((ref == null)){
untangled.client.logging.error.call(null,"ui/toggle requires component to have an ident.");
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__40155,map__40155__$1,state,ref,map__40156,map__40156__$1,field){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,cljs.core.conj.call(null,ref,field),cljs.core.not);
});})(map__40155,map__40155__$1,state,ref,map__40156,map__40156__$1,field))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__40159,k,_){
var map__40160 = p__40159;
var map__40160__$1 = ((((!((map__40160 == null)))?((((map__40160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40160):map__40160);
var target = cljs.core.get.call(null,map__40160__$1,new cljs.core.Keyword(null,"target","target",253001721));
if((target == null)){
return untangled.client.logging.error.call(null,untangled.client.logging.value_message.call(null,"Unknown app state mutation. Have you required the file with your mutations?",k));
} else {
return null;
}
}));
cljs.core._add_method.call(null,untangled.client.mutations.post_mutate,new cljs.core.Keyword(null,"default","default",-1987822328),(function (env,k,p){
return null;
}));

//# sourceMappingURL=built_in_mutations.js.map?rel=1466782846209