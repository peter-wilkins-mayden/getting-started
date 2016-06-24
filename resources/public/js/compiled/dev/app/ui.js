// Compiled by ClojureScript 1.8.51 {}
goog.provide('app.ui');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.next');
goog.require('yahoo.intl_messageformat_with_locales');
goog.require('untangled.client.core');
if(typeof app.ui.Main !== 'undefined'){
} else {
/**
 * @constructor
 */
app.ui.Main = (function app$ui$Main(){
var this__32573__auto__ = this;
React.Component.apply(this__32573__auto__,arguments);

if(!((this__32573__auto__.initLocalState == null))){
this__32573__auto__.state = this__32573__auto__.initLocalState();
} else {
this__32573__auto__.state = {};
}

return this__32573__auto__;
});

app.ui.Main.prototype = goog.object.clone(React.Component.prototype);
}

var x45542_45554 = app.ui.Main.prototype;
x45542_45554.componentWillUpdate = ((function (x45542_45554){
return (function (next_props__32509__auto__,next_state__32510__auto__){
var this__32508__auto__ = this;
if(((!((this__32508__auto__ == null)))?(((false) || (this__32508__auto__.om$next$Ident$))?true:false):false)){
var ident__32512__auto___45555 = om.next.ident.call(null,this__32508__auto__,om.next.props.call(null,this__32508__auto__));
var next_ident__32513__auto___45556 = om.next.ident.call(null,this__32508__auto__,om.next._next_props.call(null,next_props__32509__auto__,this__32508__auto__));
if(cljs.core.not_EQ_.call(null,ident__32512__auto___45555,next_ident__32513__auto___45556)){
var idxr__32514__auto___45557 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__32508__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__32514__auto___45557 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__32514__auto___45557),((function (idxr__32514__auto___45557,ident__32512__auto___45555,next_ident__32513__auto___45556,this__32508__auto__,x45542_45554){
return (function (indexes__32515__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__32515__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__32512__auto___45555], null),cljs.core.disj,this__32508__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__32513__auto___45556], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__32508__auto__);
});})(idxr__32514__auto___45557,ident__32512__auto___45555,next_ident__32513__auto___45556,this__32508__auto__,x45542_45554))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__32508__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__32508__auto__);
});})(x45542_45554))
;

x45542_45554.shouldComponentUpdate = ((function (x45542_45554){
return (function (next_props__32509__auto__,next_state__32510__auto__){
var this__32508__auto__ = this;
var next_children__32511__auto__ = next_props__32509__auto__.children;
var next_props__32509__auto____$1 = goog.object.get(next_props__32509__auto__,"omcljs$value");
var next_props__32509__auto____$2 = (function (){var G__45544 = next_props__32509__auto____$1;
if((next_props__32509__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__45544);
} else {
return G__45544;
}
})();
var or__29679__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__32508__auto__),next_props__32509__auto____$2);
if(or__29679__auto__){
return or__29679__auto__;
} else {
var or__29679__auto____$1 = (function (){var and__29667__auto__ = this__32508__auto__.state;
if(cljs.core.truth_(and__29667__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__32508__auto__.state,"omcljs$state"),goog.object.get(next_state__32510__auto__,"omcljs$state"));
} else {
return and__29667__auto__;
}
})();
if(cljs.core.truth_(or__29679__auto____$1)){
return or__29679__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__32508__auto__.props.children,next_children__32511__auto__);
}
}
});})(x45542_45554))
;

x45542_45554.componentWillUnmount = ((function (x45542_45554){
return (function (){
var this__32508__auto__ = this;
var r__32519__auto__ = om.next.get_reconciler.call(null,this__32508__auto__);
var cfg__32520__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__32519__auto__);
var st__32521__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__32520__auto__);
var indexer__32518__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__32520__auto__);
if(cljs.core.truth_((function (){var and__29667__auto__ = !((st__32521__auto__ == null));
if(and__29667__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__32521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__32508__auto__], null));
} else {
return and__29667__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__32521__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__32508__auto__);
} else {
}

if((indexer__32518__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__32518__auto__,this__32508__auto__);
}
});})(x45542_45554))
;

x45542_45554.componentDidUpdate = ((function (x45542_45554){
return (function (prev_props__32516__auto__,prev_state__32517__auto__){
var this__32508__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__32508__auto__);
});})(x45542_45554))
;

x45542_45554.isMounted = ((function (x45542_45554){
return (function (){
var this__32508__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__32508__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x45542_45554))
;

x45542_45554.componentWillMount = ((function (x45542_45554){
return (function (){
var this__32508__auto__ = this;
var indexer__32518__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__32508__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__32518__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__32518__auto__,this__32508__auto__);
}
});})(x45542_45554))
;

x45542_45554.render = ((function (x45542_45554){
return (function (){
var this__32507__auto__ = this;
var this$ = this__32507__auto__;
var _STAR_reconciler_STAR_45545 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_45546 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_45547 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_45548 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_45549 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__32507__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__32507__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__32507__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__32507__auto__);

om.next._STAR_parent_STAR_ = this__32507__auto__;

try{var map__45550 = om.next.props.call(null,this$);
var map__45550__$1 = ((((!((map__45550 == null)))?((((map__45550.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45550.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45550):map__45550);
var extra = cljs.core.get.call(null,map__45550__$1,new cljs.core.Keyword(null,"extra","extra",1612569067));
return React.DOM.p(null,om.util.force_children.call(null,"MAIN: "),om.util.force_children.call(null,extra));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_45549;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_45548;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_45547;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_45546;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_45545;
}});})(x45542_45554))
;


app.ui.Main.prototype.constructor = app.ui.Main;

app.ui.Main.prototype.constructor.displayName = "app.ui/Main";

app.ui.Main.prototype.om$isComponent = true;

var x45552_45558 = app.ui.Main;
x45552_45558.untangled$client$core$InitialAppState$ = true;

x45552_45558.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x45552_45558){
return (function (clz,params){
var clz__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"main-tab","main-tab",480898077),new cljs.core.Keyword(null,"extra","extra",1612569067),"MAIN STUFF"], null);
});})(x45552_45558))
;

x45552_45558.om$next$IQuery$ = true;

x45552_45558.om$next$IQuery$query$arity$1 = ((function (x45552_45558){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"extra","extra",1612569067)], null);
});})(x45552_45558))
;


var x45553_45559 = app.ui.Main.prototype;
x45553_45559.untangled$client$core$InitialAppState$ = true;

x45553_45559.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x45553_45559){
return (function (clz,params){
var clz__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"main-tab","main-tab",480898077),new cljs.core.Keyword(null,"extra","extra",1612569067),"MAIN STUFF"], null);
});})(x45553_45559))
;

x45553_45559.om$next$IQuery$ = true;

x45553_45559.om$next$IQuery$query$arity$1 = ((function (x45553_45559){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"extra","extra",1612569067)], null);
});})(x45553_45559))
;


app.ui.Main.cljs$lang$type = true;

app.ui.Main.cljs$lang$ctorStr = "app.ui/Main";

app.ui.Main.cljs$lang$ctorPrWriter = (function (this__32575__auto__,writer__32576__auto__,opt__32577__auto__){
return cljs.core._write.call(null,writer__32576__auto__,"app.ui/Main");
});
app.ui.ui_main = om.next.factory.call(null,app.ui.Main,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
if(typeof app.ui.Settings !== 'undefined'){
} else {
/**
 * @constructor
 */
app.ui.Settings = (function app$ui$Settings(){
var this__32573__auto__ = this;
React.Component.apply(this__32573__auto__,arguments);

if(!((this__32573__auto__.initLocalState == null))){
this__32573__auto__.state = this__32573__auto__.initLocalState();
} else {
this__32573__auto__.state = {};
}

return this__32573__auto__;
});

app.ui.Settings.prototype = goog.object.clone(React.Component.prototype);
}

var x45564_45576 = app.ui.Settings.prototype;
x45564_45576.componentWillUpdate = ((function (x45564_45576){
return (function (next_props__32509__auto__,next_state__32510__auto__){
var this__32508__auto__ = this;
if(((!((this__32508__auto__ == null)))?(((false) || (this__32508__auto__.om$next$Ident$))?true:false):false)){
var ident__32512__auto___45577 = om.next.ident.call(null,this__32508__auto__,om.next.props.call(null,this__32508__auto__));
var next_ident__32513__auto___45578 = om.next.ident.call(null,this__32508__auto__,om.next._next_props.call(null,next_props__32509__auto__,this__32508__auto__));
if(cljs.core.not_EQ_.call(null,ident__32512__auto___45577,next_ident__32513__auto___45578)){
var idxr__32514__auto___45579 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__32508__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__32514__auto___45579 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__32514__auto___45579),((function (idxr__32514__auto___45579,ident__32512__auto___45577,next_ident__32513__auto___45578,this__32508__auto__,x45564_45576){
return (function (indexes__32515__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__32515__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__32512__auto___45577], null),cljs.core.disj,this__32508__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__32513__auto___45578], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__32508__auto__);
});})(idxr__32514__auto___45579,ident__32512__auto___45577,next_ident__32513__auto___45578,this__32508__auto__,x45564_45576))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__32508__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__32508__auto__);
});})(x45564_45576))
;

x45564_45576.shouldComponentUpdate = ((function (x45564_45576){
return (function (next_props__32509__auto__,next_state__32510__auto__){
var this__32508__auto__ = this;
var next_children__32511__auto__ = next_props__32509__auto__.children;
var next_props__32509__auto____$1 = goog.object.get(next_props__32509__auto__,"omcljs$value");
var next_props__32509__auto____$2 = (function (){var G__45566 = next_props__32509__auto____$1;
if((next_props__32509__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__45566);
} else {
return G__45566;
}
})();
var or__29679__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__32508__auto__),next_props__32509__auto____$2);
if(or__29679__auto__){
return or__29679__auto__;
} else {
var or__29679__auto____$1 = (function (){var and__29667__auto__ = this__32508__auto__.state;
if(cljs.core.truth_(and__29667__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__32508__auto__.state,"omcljs$state"),goog.object.get(next_state__32510__auto__,"omcljs$state"));
} else {
return and__29667__auto__;
}
})();
if(cljs.core.truth_(or__29679__auto____$1)){
return or__29679__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__32508__auto__.props.children,next_children__32511__auto__);
}
}
});})(x45564_45576))
;

x45564_45576.componentWillUnmount = ((function (x45564_45576){
return (function (){
var this__32508__auto__ = this;
var r__32519__auto__ = om.next.get_reconciler.call(null,this__32508__auto__);
var cfg__32520__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__32519__auto__);
var st__32521__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__32520__auto__);
var indexer__32518__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__32520__auto__);
if(cljs.core.truth_((function (){var and__29667__auto__ = !((st__32521__auto__ == null));
if(and__29667__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__32521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__32508__auto__], null));
} else {
return and__29667__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__32521__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__32508__auto__);
} else {
}

if((indexer__32518__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__32518__auto__,this__32508__auto__);
}
});})(x45564_45576))
;

x45564_45576.componentDidUpdate = ((function (x45564_45576){
return (function (prev_props__32516__auto__,prev_state__32517__auto__){
var this__32508__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__32508__auto__);
});})(x45564_45576))
;

x45564_45576.isMounted = ((function (x45564_45576){
return (function (){
var this__32508__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__32508__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x45564_45576))
;

x45564_45576.componentWillMount = ((function (x45564_45576){
return (function (){
var this__32508__auto__ = this;
var indexer__32518__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__32508__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__32518__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__32518__auto__,this__32508__auto__);
}
});})(x45564_45576))
;

x45564_45576.render = ((function (x45564_45576){
return (function (){
var this__32507__auto__ = this;
var this$ = this__32507__auto__;
var _STAR_reconciler_STAR_45567 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_45568 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_45569 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_45570 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_45571 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__32507__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__32507__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__32507__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__32507__auto__);

om.next._STAR_parent_STAR_ = this__32507__auto__;

try{var map__45572 = om.next.props.call(null,this$);
var map__45572__$1 = ((((!((map__45572 == null)))?((((map__45572.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45572.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45572):map__45572);
var args = cljs.core.get.call(null,map__45572__$1,new cljs.core.Keyword(null,"args","args",1315556576));
return React.DOM.p(null,om.util.force_children.call(null,"Settings: "),om.util.force_children.call(null,cljs.core.pr_str.call(null,args)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_45571;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_45570;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_45569;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_45568;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_45567;
}});})(x45564_45576))
;


app.ui.Settings.prototype.constructor = app.ui.Settings;

app.ui.Settings.prototype.constructor.displayName = "app.ui/Settings";

app.ui.Settings.prototype.om$isComponent = true;

var x45574_45580 = app.ui.Settings;
x45574_45580.untangled$client$core$InitialAppState$ = true;

x45574_45580.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x45574_45580){
return (function (clz,params){
var clz__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"settings-tab","settings-tab",577464811),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)], null);
});})(x45574_45580))
;

x45574_45580.om$next$IQuery$ = true;

x45574_45580.om$next$IQuery$query$arity$1 = ((function (x45574_45580){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"args","args",1315556576)], null);
});})(x45574_45580))
;


var x45575_45581 = app.ui.Settings.prototype;
x45575_45581.untangled$client$core$InitialAppState$ = true;

x45575_45581.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x45575_45581){
return (function (clz,params){
var clz__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"settings-tab","settings-tab",577464811),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)], null);
});})(x45575_45581))
;

x45575_45581.om$next$IQuery$ = true;

x45575_45581.om$next$IQuery$query$arity$1 = ((function (x45575_45581){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"args","args",1315556576)], null);
});})(x45575_45581))
;


app.ui.Settings.cljs$lang$type = true;

app.ui.Settings.cljs$lang$ctorStr = "app.ui/Settings";

app.ui.Settings.cljs$lang$ctorPrWriter = (function (this__32575__auto__,writer__32576__auto__,opt__32577__auto__){
return cljs.core._write.call(null,writer__32576__auto__,"app.ui/Settings");
});
app.ui.ui_settings = om.next.factory.call(null,app.ui.Settings,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
/**
 * @constructor
 */
app.ui.Switcher = (function app$ui$Switcher(){
var this__32573__auto__ = this;
React.Component.apply(this__32573__auto__,arguments);

if(!((this__32573__auto__.initLocalState == null))){
this__32573__auto__.state = this__32573__auto__.initLocalState();
} else {
this__32573__auto__.state = {};
}

return this__32573__auto__;
});

app.ui.Switcher.prototype = goog.object.clone(React.Component.prototype);

var x45586_45605 = app.ui.Switcher.prototype;
x45586_45605.componentWillUpdate = ((function (x45586_45605){
return (function (next_props__32509__auto__,next_state__32510__auto__){
var this__32508__auto__ = this;
if(((!((this__32508__auto__ == null)))?(((false) || (this__32508__auto__.om$next$Ident$))?true:false):false)){
var ident__32512__auto___45606 = om.next.ident.call(null,this__32508__auto__,om.next.props.call(null,this__32508__auto__));
var next_ident__32513__auto___45607 = om.next.ident.call(null,this__32508__auto__,om.next._next_props.call(null,next_props__32509__auto__,this__32508__auto__));
if(cljs.core.not_EQ_.call(null,ident__32512__auto___45606,next_ident__32513__auto___45607)){
var idxr__32514__auto___45608 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__32508__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__32514__auto___45608 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__32514__auto___45608),((function (idxr__32514__auto___45608,ident__32512__auto___45606,next_ident__32513__auto___45607,this__32508__auto__,x45586_45605){
return (function (indexes__32515__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__32515__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__32512__auto___45606], null),cljs.core.disj,this__32508__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__32513__auto___45607], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__32508__auto__);
});})(idxr__32514__auto___45608,ident__32512__auto___45606,next_ident__32513__auto___45607,this__32508__auto__,x45586_45605))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__32508__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__32508__auto__);
});})(x45586_45605))
;

x45586_45605.shouldComponentUpdate = ((function (x45586_45605){
return (function (next_props__32509__auto__,next_state__32510__auto__){
var this__32508__auto__ = this;
var next_children__32511__auto__ = next_props__32509__auto__.children;
var next_props__32509__auto____$1 = goog.object.get(next_props__32509__auto__,"omcljs$value");
var next_props__32509__auto____$2 = (function (){var G__45588 = next_props__32509__auto____$1;
if((next_props__32509__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__45588);
} else {
return G__45588;
}
})();
var or__29679__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__32508__auto__),next_props__32509__auto____$2);
if(or__29679__auto__){
return or__29679__auto__;
} else {
var or__29679__auto____$1 = (function (){var and__29667__auto__ = this__32508__auto__.state;
if(cljs.core.truth_(and__29667__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__32508__auto__.state,"omcljs$state"),goog.object.get(next_state__32510__auto__,"omcljs$state"));
} else {
return and__29667__auto__;
}
})();
if(cljs.core.truth_(or__29679__auto____$1)){
return or__29679__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__32508__auto__.props.children,next_children__32511__auto__);
}
}
});})(x45586_45605))
;

x45586_45605.componentWillUnmount = ((function (x45586_45605){
return (function (){
var this__32508__auto__ = this;
var r__32519__auto__ = om.next.get_reconciler.call(null,this__32508__auto__);
var cfg__32520__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__32519__auto__);
var st__32521__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__32520__auto__);
var indexer__32518__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__32520__auto__);
if(cljs.core.truth_((function (){var and__29667__auto__ = !((st__32521__auto__ == null));
if(and__29667__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__32521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__32508__auto__], null));
} else {
return and__29667__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__32521__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__32508__auto__);
} else {
}

if((indexer__32518__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__32518__auto__,this__32508__auto__);
}
});})(x45586_45605))
;

x45586_45605.componentDidUpdate = ((function (x45586_45605){
return (function (prev_props__32516__auto__,prev_state__32517__auto__){
var this__32508__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__32508__auto__);
});})(x45586_45605))
;

x45586_45605.isMounted = ((function (x45586_45605){
return (function (){
var this__32508__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__32508__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x45586_45605))
;

x45586_45605.componentWillMount = ((function (x45586_45605){
return (function (){
var this__32508__auto__ = this;
var indexer__32518__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__32508__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__32518__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__32518__auto__,this__32508__auto__);
}
});})(x45586_45605))
;

x45586_45605.render = ((function (x45586_45605){
return (function (){
var this__32507__auto__ = this;
var this$ = this__32507__auto__;
var _STAR_reconciler_STAR_45589 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_45590 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_45591 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_45592 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_45593 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__32507__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__32507__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__32507__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__32507__auto__);

om.next._STAR_parent_STAR_ = this__32507__auto__;

try{var map__45594 = om.next.props.call(null,this$);
var map__45594__$1 = ((((!((map__45594 == null)))?((((map__45594.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45594.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45594):map__45594);
var props = map__45594__$1;
var type = cljs.core.get.call(null,map__45594__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__45596 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__45596) {
case "main-tab":
return app.ui.ui_main.call(null,props);

break;
case "settings-tab":
return app.ui.ui_settings.call(null,props);

break;
default:
return React.DOM.p(null,om.util.force_children.call(null,"NO TAB"));

}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_45593;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_45592;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_45591;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_45590;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_45589;
}});})(x45586_45605))
;


app.ui.Switcher.prototype.constructor = app.ui.Switcher;

app.ui.Switcher.prototype.constructor.displayName = "app.ui/Switcher";

app.ui.Switcher.prototype.om$isComponent = true;

var x45597_45610 = app.ui.Switcher;
x45597_45610.untangled$client$core$InitialAppState$ = true;

x45597_45610.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x45597_45610){
return (function (clz,params){
var clz__$1 = this;
return untangled.client.core.initial_state.call(null,app.ui.Main,cljs.core.PersistentArrayMap.EMPTY);
});})(x45597_45610))
;

x45597_45610.om$next$IQuery$ = true;

x45597_45610.om$next$IQuery$query$arity$1 = ((function (x45597_45610){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"main-tab","main-tab",480898077),om.next.get_query.call(null,app.ui.Main),new cljs.core.Keyword(null,"settings-tab","settings-tab",577464811),om.next.get_query.call(null,app.ui.Settings)], null)], null);
});})(x45597_45610))
;

x45597_45610.om$next$Ident$ = true;

x45597_45610.om$next$Ident$ident$arity$2 = ((function (x45597_45610){
return (function (this$,p__45598){
var map__45599 = p__45598;
var map__45599__$1 = ((((!((map__45599 == null)))?((((map__45599.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45599.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45599):map__45599);
var type = cljs.core.get.call(null,map__45599__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var id = cljs.core.get.call(null,map__45599__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var this$__$1 = this;
console.log(new cljs.core.Keyword(null,"t","t",-1397832519),type,new cljs.core.Keyword(null,"i","i",-1386841315),id);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,id], null);
});})(x45597_45610))
;


var x45601_45611 = app.ui.Switcher.prototype;
x45601_45611.untangled$client$core$InitialAppState$ = true;

x45601_45611.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x45601_45611){
return (function (clz,params){
var clz__$1 = this;
return untangled.client.core.initial_state.call(null,app.ui.Main,cljs.core.PersistentArrayMap.EMPTY);
});})(x45601_45611))
;

x45601_45611.om$next$IQuery$ = true;

x45601_45611.om$next$IQuery$query$arity$1 = ((function (x45601_45611){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"main-tab","main-tab",480898077),om.next.get_query.call(null,app.ui.Main),new cljs.core.Keyword(null,"settings-tab","settings-tab",577464811),om.next.get_query.call(null,app.ui.Settings)], null)], null);
});})(x45601_45611))
;

x45601_45611.om$next$Ident$ = true;

x45601_45611.om$next$Ident$ident$arity$2 = ((function (x45601_45611){
return (function (this$,p__45602){
var map__45603 = p__45602;
var map__45603__$1 = ((((!((map__45603 == null)))?((((map__45603.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45603.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45603):map__45603);
var type = cljs.core.get.call(null,map__45603__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var id = cljs.core.get.call(null,map__45603__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var this$__$1 = this;
console.log(new cljs.core.Keyword(null,"t","t",-1397832519),type,new cljs.core.Keyword(null,"i","i",-1386841315),id);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,id], null);
});})(x45601_45611))
;


app.ui.Switcher.cljs$lang$type = true;

app.ui.Switcher.cljs$lang$ctorStr = "app.ui/Switcher";

app.ui.Switcher.cljs$lang$ctorPrWriter = (function (this__32575__auto__,writer__32576__auto__,opt__32577__auto__){
return cljs.core._write.call(null,writer__32576__auto__,"app.ui/Switcher");
});
app.ui.ui_switcher = om.next.factory.call(null,app.ui.Switcher);
if(typeof app.ui.Root !== 'undefined'){
} else {
/**
 * @constructor
 */
app.ui.Root = (function app$ui$Root(){
var this__32573__auto__ = this;
React.Component.apply(this__32573__auto__,arguments);

if(!((this__32573__auto__.initLocalState == null))){
this__32573__auto__.state = this__32573__auto__.initLocalState();
} else {
this__32573__auto__.state = {};
}

return this__32573__auto__;
});

app.ui.Root.prototype = goog.object.clone(React.Component.prototype);
}

var x45616_45628 = app.ui.Root.prototype;
x45616_45628.componentWillUpdate = ((function (x45616_45628){
return (function (next_props__32509__auto__,next_state__32510__auto__){
var this__32508__auto__ = this;
if(((!((this__32508__auto__ == null)))?(((false) || (this__32508__auto__.om$next$Ident$))?true:false):false)){
var ident__32512__auto___45629 = om.next.ident.call(null,this__32508__auto__,om.next.props.call(null,this__32508__auto__));
var next_ident__32513__auto___45630 = om.next.ident.call(null,this__32508__auto__,om.next._next_props.call(null,next_props__32509__auto__,this__32508__auto__));
if(cljs.core.not_EQ_.call(null,ident__32512__auto___45629,next_ident__32513__auto___45630)){
var idxr__32514__auto___45631 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__32508__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__32514__auto___45631 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__32514__auto___45631),((function (idxr__32514__auto___45631,ident__32512__auto___45629,next_ident__32513__auto___45630,this__32508__auto__,x45616_45628){
return (function (indexes__32515__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__32515__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__32512__auto___45629], null),cljs.core.disj,this__32508__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__32513__auto___45630], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__32508__auto__);
});})(idxr__32514__auto___45631,ident__32512__auto___45629,next_ident__32513__auto___45630,this__32508__auto__,x45616_45628))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__32508__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__32508__auto__);
});})(x45616_45628))
;

x45616_45628.shouldComponentUpdate = ((function (x45616_45628){
return (function (next_props__32509__auto__,next_state__32510__auto__){
var this__32508__auto__ = this;
var next_children__32511__auto__ = next_props__32509__auto__.children;
var next_props__32509__auto____$1 = goog.object.get(next_props__32509__auto__,"omcljs$value");
var next_props__32509__auto____$2 = (function (){var G__45618 = next_props__32509__auto____$1;
if((next_props__32509__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__45618);
} else {
return G__45618;
}
})();
var or__29679__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__32508__auto__),next_props__32509__auto____$2);
if(or__29679__auto__){
return or__29679__auto__;
} else {
var or__29679__auto____$1 = (function (){var and__29667__auto__ = this__32508__auto__.state;
if(cljs.core.truth_(and__29667__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__32508__auto__.state,"omcljs$state"),goog.object.get(next_state__32510__auto__,"omcljs$state"));
} else {
return and__29667__auto__;
}
})();
if(cljs.core.truth_(or__29679__auto____$1)){
return or__29679__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__32508__auto__.props.children,next_children__32511__auto__);
}
}
});})(x45616_45628))
;

x45616_45628.componentWillUnmount = ((function (x45616_45628){
return (function (){
var this__32508__auto__ = this;
var r__32519__auto__ = om.next.get_reconciler.call(null,this__32508__auto__);
var cfg__32520__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__32519__auto__);
var st__32521__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__32520__auto__);
var indexer__32518__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__32520__auto__);
if(cljs.core.truth_((function (){var and__29667__auto__ = !((st__32521__auto__ == null));
if(and__29667__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__32521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__32508__auto__], null));
} else {
return and__29667__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__32521__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__32508__auto__);
} else {
}

if((indexer__32518__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__32518__auto__,this__32508__auto__);
}
});})(x45616_45628))
;

x45616_45628.componentDidUpdate = ((function (x45616_45628){
return (function (prev_props__32516__auto__,prev_state__32517__auto__){
var this__32508__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__32508__auto__);
});})(x45616_45628))
;

x45616_45628.isMounted = ((function (x45616_45628){
return (function (){
var this__32508__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__32508__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x45616_45628))
;

x45616_45628.componentWillMount = ((function (x45616_45628){
return (function (){
var this__32508__auto__ = this;
var indexer__32518__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__32508__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__32518__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__32518__auto__,this__32508__auto__);
}
});})(x45616_45628))
;

x45616_45628.render = ((function (x45616_45628){
return (function (){
var this__32507__auto__ = this;
var this$ = this__32507__auto__;
var _STAR_reconciler_STAR_45619 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_45620 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_45621 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_45622 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_45623 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__32507__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__32507__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__32507__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__32507__auto__);

om.next._STAR_parent_STAR_ = this__32507__auto__;

try{var map__45624 = om.next.props.call(null,this$);
var map__45624__$1 = ((((!((map__45624 == null)))?((((map__45624.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45624.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45624):map__45624);
var react_key = cljs.core.get.call(null,map__45624__$1,new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664));
var tabs = cljs.core.get.call(null,map__45624__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
return React.DOM.div({"key": react_key},om.util.force_children.call(null,React.DOM.h4(null,om.util.force_children.call(null,"Header"))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__45624,map__45624__$1,react_key,tabs,_STAR_reconciler_STAR_45619,_STAR_depth_STAR_45620,_STAR_shared_STAR_45621,_STAR_instrument_STAR_45622,_STAR_parent_STAR_45623,this$,this__32507__auto__,x45616_45628){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("app","choose-tab","app/choose-tab",-1324531024,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"main-tab","main-tab",480898077)], null))], null));
});})(map__45624,map__45624__$1,react_key,tabs,_STAR_reconciler_STAR_45619,_STAR_depth_STAR_45620,_STAR_shared_STAR_45621,_STAR_instrument_STAR_45622,_STAR_parent_STAR_45623,this$,this__32507__auto__,x45616_45628))
},om.util.force_children.call(null,"Main"))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__45624,map__45624__$1,react_key,tabs,_STAR_reconciler_STAR_45619,_STAR_depth_STAR_45620,_STAR_shared_STAR_45621,_STAR_instrument_STAR_45622,_STAR_parent_STAR_45623,this$,this__32507__auto__,x45616_45628){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("app","choose-tab","app/choose-tab",-1324531024,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"settings-tab","settings-tab",577464811)], null))], null));
});})(map__45624,map__45624__$1,react_key,tabs,_STAR_reconciler_STAR_45619,_STAR_depth_STAR_45620,_STAR_shared_STAR_45621,_STAR_instrument_STAR_45622,_STAR_parent_STAR_45623,this$,this__32507__auto__,x45616_45628))
},om.util.force_children.call(null,"Settings"))),om.util.force_children.call(null,app.ui.ui_switcher.call(null,tabs)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_45623;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_45622;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_45621;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_45620;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_45619;
}});})(x45616_45628))
;


app.ui.Root.prototype.constructor = app.ui.Root;

app.ui.Root.prototype.constructor.displayName = "app.ui/Root";

app.ui.Root.prototype.om$isComponent = true;

var x45626_45632 = app.ui.Root;
x45626_45632.untangled$client$core$InitialAppState$ = true;

x45626_45632.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x45626_45632){
return (function (clz,params){
var clz__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),"start",new cljs.core.Keyword(null,"tabs","tabs",-779855354),untangled.client.core.initial_state.call(null,app.ui.Switcher,cljs.core.PersistentArrayMap.EMPTY)], null);
});})(x45626_45632))
;

x45626_45632.om$next$IQuery$ = true;

x45626_45632.om$next$IQuery$query$arity$1 = ((function (x45626_45632){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),om.next.get_query.call(null,app.ui.Switcher)], null)], null);
});})(x45626_45632))
;


var x45627_45633 = app.ui.Root.prototype;
x45627_45633.untangled$client$core$InitialAppState$ = true;

x45627_45633.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x45627_45633){
return (function (clz,params){
var clz__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),"start",new cljs.core.Keyword(null,"tabs","tabs",-779855354),untangled.client.core.initial_state.call(null,app.ui.Switcher,cljs.core.PersistentArrayMap.EMPTY)], null);
});})(x45627_45633))
;

x45627_45633.om$next$IQuery$ = true;

x45627_45633.om$next$IQuery$query$arity$1 = ((function (x45627_45633){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),om.next.get_query.call(null,app.ui.Switcher)], null)], null);
});})(x45627_45633))
;


app.ui.Root.cljs$lang$type = true;

app.ui.Root.cljs$lang$ctorStr = "app.ui/Root";

app.ui.Root.cljs$lang$ctorPrWriter = (function (this__32575__auto__,writer__32576__auto__,opt__32577__auto__){
return cljs.core._write.call(null,writer__32576__auto__,"app.ui/Root");
});

//# sourceMappingURL=ui.js.map?rel=1466803357137