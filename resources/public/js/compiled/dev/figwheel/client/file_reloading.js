// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__29679__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__29679__auto__){
return or__29679__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__29679__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__29679__auto__)){
return or__29679__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__40482_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__40482_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__40487 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__40488 = null;
var count__40489 = (0);
var i__40490 = (0);
while(true){
if((i__40490 < count__40489)){
var n = cljs.core._nth.call(null,chunk__40488,i__40490);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__40491 = seq__40487;
var G__40492 = chunk__40488;
var G__40493 = count__40489;
var G__40494 = (i__40490 + (1));
seq__40487 = G__40491;
chunk__40488 = G__40492;
count__40489 = G__40493;
i__40490 = G__40494;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40487);
if(temp__4657__auto__){
var seq__40487__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40487__$1)){
var c__30490__auto__ = cljs.core.chunk_first.call(null,seq__40487__$1);
var G__40495 = cljs.core.chunk_rest.call(null,seq__40487__$1);
var G__40496 = c__30490__auto__;
var G__40497 = cljs.core.count.call(null,c__30490__auto__);
var G__40498 = (0);
seq__40487 = G__40495;
chunk__40488 = G__40496;
count__40489 = G__40497;
i__40490 = G__40498;
continue;
} else {
var n = cljs.core.first.call(null,seq__40487__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__40499 = cljs.core.next.call(null,seq__40487__$1);
var G__40500 = null;
var G__40501 = (0);
var G__40502 = (0);
seq__40487 = G__40499;
chunk__40488 = G__40500;
count__40489 = G__40501;
i__40490 = G__40502;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__40541_40548 = cljs.core.seq.call(null,deps);
var chunk__40542_40549 = null;
var count__40543_40550 = (0);
var i__40544_40551 = (0);
while(true){
if((i__40544_40551 < count__40543_40550)){
var dep_40552 = cljs.core._nth.call(null,chunk__40542_40549,i__40544_40551);
topo_sort_helper_STAR_.call(null,dep_40552,(depth + (1)),state);

var G__40553 = seq__40541_40548;
var G__40554 = chunk__40542_40549;
var G__40555 = count__40543_40550;
var G__40556 = (i__40544_40551 + (1));
seq__40541_40548 = G__40553;
chunk__40542_40549 = G__40554;
count__40543_40550 = G__40555;
i__40544_40551 = G__40556;
continue;
} else {
var temp__4657__auto___40557 = cljs.core.seq.call(null,seq__40541_40548);
if(temp__4657__auto___40557){
var seq__40541_40558__$1 = temp__4657__auto___40557;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40541_40558__$1)){
var c__30490__auto___40559 = cljs.core.chunk_first.call(null,seq__40541_40558__$1);
var G__40560 = cljs.core.chunk_rest.call(null,seq__40541_40558__$1);
var G__40561 = c__30490__auto___40559;
var G__40562 = cljs.core.count.call(null,c__30490__auto___40559);
var G__40563 = (0);
seq__40541_40548 = G__40560;
chunk__40542_40549 = G__40561;
count__40543_40550 = G__40562;
i__40544_40551 = G__40563;
continue;
} else {
var dep_40564 = cljs.core.first.call(null,seq__40541_40558__$1);
topo_sort_helper_STAR_.call(null,dep_40564,(depth + (1)),state);

var G__40565 = cljs.core.next.call(null,seq__40541_40558__$1);
var G__40566 = null;
var G__40567 = (0);
var G__40568 = (0);
seq__40541_40548 = G__40565;
chunk__40542_40549 = G__40566;
count__40543_40550 = G__40567;
i__40544_40551 = G__40568;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__40545){
var vec__40547 = p__40545;
var x = cljs.core.nth.call(null,vec__40547,(0),null);
var xs = cljs.core.nthnext.call(null,vec__40547,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__40547,x,xs,get_deps__$1){
return (function (p1__40503_SHARP_){
return clojure.set.difference.call(null,p1__40503_SHARP_,x);
});})(vec__40547,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__40581 = cljs.core.seq.call(null,provides);
var chunk__40582 = null;
var count__40583 = (0);
var i__40584 = (0);
while(true){
if((i__40584 < count__40583)){
var prov = cljs.core._nth.call(null,chunk__40582,i__40584);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__40585_40593 = cljs.core.seq.call(null,requires);
var chunk__40586_40594 = null;
var count__40587_40595 = (0);
var i__40588_40596 = (0);
while(true){
if((i__40588_40596 < count__40587_40595)){
var req_40597 = cljs.core._nth.call(null,chunk__40586_40594,i__40588_40596);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40597,prov);

var G__40598 = seq__40585_40593;
var G__40599 = chunk__40586_40594;
var G__40600 = count__40587_40595;
var G__40601 = (i__40588_40596 + (1));
seq__40585_40593 = G__40598;
chunk__40586_40594 = G__40599;
count__40587_40595 = G__40600;
i__40588_40596 = G__40601;
continue;
} else {
var temp__4657__auto___40602 = cljs.core.seq.call(null,seq__40585_40593);
if(temp__4657__auto___40602){
var seq__40585_40603__$1 = temp__4657__auto___40602;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40585_40603__$1)){
var c__30490__auto___40604 = cljs.core.chunk_first.call(null,seq__40585_40603__$1);
var G__40605 = cljs.core.chunk_rest.call(null,seq__40585_40603__$1);
var G__40606 = c__30490__auto___40604;
var G__40607 = cljs.core.count.call(null,c__30490__auto___40604);
var G__40608 = (0);
seq__40585_40593 = G__40605;
chunk__40586_40594 = G__40606;
count__40587_40595 = G__40607;
i__40588_40596 = G__40608;
continue;
} else {
var req_40609 = cljs.core.first.call(null,seq__40585_40603__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40609,prov);

var G__40610 = cljs.core.next.call(null,seq__40585_40603__$1);
var G__40611 = null;
var G__40612 = (0);
var G__40613 = (0);
seq__40585_40593 = G__40610;
chunk__40586_40594 = G__40611;
count__40587_40595 = G__40612;
i__40588_40596 = G__40613;
continue;
}
} else {
}
}
break;
}

var G__40614 = seq__40581;
var G__40615 = chunk__40582;
var G__40616 = count__40583;
var G__40617 = (i__40584 + (1));
seq__40581 = G__40614;
chunk__40582 = G__40615;
count__40583 = G__40616;
i__40584 = G__40617;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40581);
if(temp__4657__auto__){
var seq__40581__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40581__$1)){
var c__30490__auto__ = cljs.core.chunk_first.call(null,seq__40581__$1);
var G__40618 = cljs.core.chunk_rest.call(null,seq__40581__$1);
var G__40619 = c__30490__auto__;
var G__40620 = cljs.core.count.call(null,c__30490__auto__);
var G__40621 = (0);
seq__40581 = G__40618;
chunk__40582 = G__40619;
count__40583 = G__40620;
i__40584 = G__40621;
continue;
} else {
var prov = cljs.core.first.call(null,seq__40581__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__40589_40622 = cljs.core.seq.call(null,requires);
var chunk__40590_40623 = null;
var count__40591_40624 = (0);
var i__40592_40625 = (0);
while(true){
if((i__40592_40625 < count__40591_40624)){
var req_40626 = cljs.core._nth.call(null,chunk__40590_40623,i__40592_40625);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40626,prov);

var G__40627 = seq__40589_40622;
var G__40628 = chunk__40590_40623;
var G__40629 = count__40591_40624;
var G__40630 = (i__40592_40625 + (1));
seq__40589_40622 = G__40627;
chunk__40590_40623 = G__40628;
count__40591_40624 = G__40629;
i__40592_40625 = G__40630;
continue;
} else {
var temp__4657__auto___40631__$1 = cljs.core.seq.call(null,seq__40589_40622);
if(temp__4657__auto___40631__$1){
var seq__40589_40632__$1 = temp__4657__auto___40631__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40589_40632__$1)){
var c__30490__auto___40633 = cljs.core.chunk_first.call(null,seq__40589_40632__$1);
var G__40634 = cljs.core.chunk_rest.call(null,seq__40589_40632__$1);
var G__40635 = c__30490__auto___40633;
var G__40636 = cljs.core.count.call(null,c__30490__auto___40633);
var G__40637 = (0);
seq__40589_40622 = G__40634;
chunk__40590_40623 = G__40635;
count__40591_40624 = G__40636;
i__40592_40625 = G__40637;
continue;
} else {
var req_40638 = cljs.core.first.call(null,seq__40589_40632__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40638,prov);

var G__40639 = cljs.core.next.call(null,seq__40589_40632__$1);
var G__40640 = null;
var G__40641 = (0);
var G__40642 = (0);
seq__40589_40622 = G__40639;
chunk__40590_40623 = G__40640;
count__40591_40624 = G__40641;
i__40592_40625 = G__40642;
continue;
}
} else {
}
}
break;
}

var G__40643 = cljs.core.next.call(null,seq__40581__$1);
var G__40644 = null;
var G__40645 = (0);
var G__40646 = (0);
seq__40581 = G__40643;
chunk__40582 = G__40644;
count__40583 = G__40645;
i__40584 = G__40646;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__40651_40655 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__40652_40656 = null;
var count__40653_40657 = (0);
var i__40654_40658 = (0);
while(true){
if((i__40654_40658 < count__40653_40657)){
var ns_40659 = cljs.core._nth.call(null,chunk__40652_40656,i__40654_40658);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_40659);

var G__40660 = seq__40651_40655;
var G__40661 = chunk__40652_40656;
var G__40662 = count__40653_40657;
var G__40663 = (i__40654_40658 + (1));
seq__40651_40655 = G__40660;
chunk__40652_40656 = G__40661;
count__40653_40657 = G__40662;
i__40654_40658 = G__40663;
continue;
} else {
var temp__4657__auto___40664 = cljs.core.seq.call(null,seq__40651_40655);
if(temp__4657__auto___40664){
var seq__40651_40665__$1 = temp__4657__auto___40664;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40651_40665__$1)){
var c__30490__auto___40666 = cljs.core.chunk_first.call(null,seq__40651_40665__$1);
var G__40667 = cljs.core.chunk_rest.call(null,seq__40651_40665__$1);
var G__40668 = c__30490__auto___40666;
var G__40669 = cljs.core.count.call(null,c__30490__auto___40666);
var G__40670 = (0);
seq__40651_40655 = G__40667;
chunk__40652_40656 = G__40668;
count__40653_40657 = G__40669;
i__40654_40658 = G__40670;
continue;
} else {
var ns_40671 = cljs.core.first.call(null,seq__40651_40665__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_40671);

var G__40672 = cljs.core.next.call(null,seq__40651_40665__$1);
var G__40673 = null;
var G__40674 = (0);
var G__40675 = (0);
seq__40651_40655 = G__40672;
chunk__40652_40656 = G__40673;
count__40653_40657 = G__40674;
i__40654_40658 = G__40675;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__29679__auto__ = goog.require__;
if(cljs.core.truth_(or__29679__auto__)){
return or__29679__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__40676__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__40676 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40677__i = 0, G__40677__a = new Array(arguments.length -  0);
while (G__40677__i < G__40677__a.length) {G__40677__a[G__40677__i] = arguments[G__40677__i + 0]; ++G__40677__i;}
  args = new cljs.core.IndexedSeq(G__40677__a,0);
} 
return G__40676__delegate.call(this,args);};
G__40676.cljs$lang$maxFixedArity = 0;
G__40676.cljs$lang$applyTo = (function (arglist__40678){
var args = cljs.core.seq(arglist__40678);
return G__40676__delegate(args);
});
G__40676.cljs$core$IFn$_invoke$arity$variadic = G__40676__delegate;
return G__40676;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__40680 = cljs.core._EQ_;
var expr__40681 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__40680.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__40681))){
var path_parts = ((function (pred__40680,expr__40681){
return (function (p1__40679_SHARP_){
return clojure.string.split.call(null,p1__40679_SHARP_,/[\/\\]/);
});})(pred__40680,expr__40681))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__40680,expr__40681){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e40683){if((e40683 instanceof Error)){
var e = e40683;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e40683;

}
}})());
});
;})(path_parts,sep,root,pred__40680,expr__40681))
} else {
if(cljs.core.truth_(pred__40680.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__40681))){
return ((function (pred__40680,expr__40681){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__40680,expr__40681){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__40680,expr__40681))
);

return deferred.addErrback(((function (deferred,pred__40680,expr__40681){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__40680,expr__40681))
);
});
;})(pred__40680,expr__40681))
} else {
return ((function (pred__40680,expr__40681){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__40680,expr__40681))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__40684,callback){
var map__40687 = p__40684;
var map__40687__$1 = ((((!((map__40687 == null)))?((((map__40687.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40687.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40687):map__40687);
var file_msg = map__40687__$1;
var request_url = cljs.core.get.call(null,map__40687__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__40687,map__40687__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__40687,map__40687__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__34337__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34337__auto__){
return (function (){
var f__34338__auto__ = (function (){var switch__34322__auto__ = ((function (c__34337__auto__){
return (function (state_40711){
var state_val_40712 = (state_40711[(1)]);
if((state_val_40712 === (7))){
var inst_40707 = (state_40711[(2)]);
var state_40711__$1 = state_40711;
var statearr_40713_40733 = state_40711__$1;
(statearr_40713_40733[(2)] = inst_40707);

(statearr_40713_40733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40712 === (1))){
var state_40711__$1 = state_40711;
var statearr_40714_40734 = state_40711__$1;
(statearr_40714_40734[(2)] = null);

(statearr_40714_40734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40712 === (4))){
var inst_40691 = (state_40711[(7)]);
var inst_40691__$1 = (state_40711[(2)]);
var state_40711__$1 = (function (){var statearr_40715 = state_40711;
(statearr_40715[(7)] = inst_40691__$1);

return statearr_40715;
})();
if(cljs.core.truth_(inst_40691__$1)){
var statearr_40716_40735 = state_40711__$1;
(statearr_40716_40735[(1)] = (5));

} else {
var statearr_40717_40736 = state_40711__$1;
(statearr_40717_40736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40712 === (6))){
var state_40711__$1 = state_40711;
var statearr_40718_40737 = state_40711__$1;
(statearr_40718_40737[(2)] = null);

(statearr_40718_40737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40712 === (3))){
var inst_40709 = (state_40711[(2)]);
var state_40711__$1 = state_40711;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40711__$1,inst_40709);
} else {
if((state_val_40712 === (2))){
var state_40711__$1 = state_40711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40711__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_40712 === (11))){
var inst_40703 = (state_40711[(2)]);
var state_40711__$1 = (function (){var statearr_40719 = state_40711;
(statearr_40719[(8)] = inst_40703);

return statearr_40719;
})();
var statearr_40720_40738 = state_40711__$1;
(statearr_40720_40738[(2)] = null);

(statearr_40720_40738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40712 === (9))){
var inst_40697 = (state_40711[(9)]);
var inst_40695 = (state_40711[(10)]);
var inst_40699 = inst_40697.call(null,inst_40695);
var state_40711__$1 = state_40711;
var statearr_40721_40739 = state_40711__$1;
(statearr_40721_40739[(2)] = inst_40699);

(statearr_40721_40739[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40712 === (5))){
var inst_40691 = (state_40711[(7)]);
var inst_40693 = figwheel.client.file_reloading.blocking_load.call(null,inst_40691);
var state_40711__$1 = state_40711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40711__$1,(8),inst_40693);
} else {
if((state_val_40712 === (10))){
var inst_40695 = (state_40711[(10)]);
var inst_40701 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_40695);
var state_40711__$1 = state_40711;
var statearr_40722_40740 = state_40711__$1;
(statearr_40722_40740[(2)] = inst_40701);

(statearr_40722_40740[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40712 === (8))){
var inst_40697 = (state_40711[(9)]);
var inst_40691 = (state_40711[(7)]);
var inst_40695 = (state_40711[(2)]);
var inst_40696 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_40697__$1 = cljs.core.get.call(null,inst_40696,inst_40691);
var state_40711__$1 = (function (){var statearr_40723 = state_40711;
(statearr_40723[(9)] = inst_40697__$1);

(statearr_40723[(10)] = inst_40695);

return statearr_40723;
})();
if(cljs.core.truth_(inst_40697__$1)){
var statearr_40724_40741 = state_40711__$1;
(statearr_40724_40741[(1)] = (9));

} else {
var statearr_40725_40742 = state_40711__$1;
(statearr_40725_40742[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__34337__auto__))
;
return ((function (switch__34322__auto__,c__34337__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__34323__auto__ = null;
var figwheel$client$file_reloading$state_machine__34323__auto____0 = (function (){
var statearr_40729 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40729[(0)] = figwheel$client$file_reloading$state_machine__34323__auto__);

(statearr_40729[(1)] = (1));

return statearr_40729;
});
var figwheel$client$file_reloading$state_machine__34323__auto____1 = (function (state_40711){
while(true){
var ret_value__34324__auto__ = (function (){try{while(true){
var result__34325__auto__ = switch__34322__auto__.call(null,state_40711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34325__auto__;
}
break;
}
}catch (e40730){if((e40730 instanceof Object)){
var ex__34326__auto__ = e40730;
var statearr_40731_40743 = state_40711;
(statearr_40731_40743[(5)] = ex__34326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40744 = state_40711;
state_40711 = G__40744;
continue;
} else {
return ret_value__34324__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__34323__auto__ = function(state_40711){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__34323__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__34323__auto____1.call(this,state_40711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__34323__auto____0;
figwheel$client$file_reloading$state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__34323__auto____1;
return figwheel$client$file_reloading$state_machine__34323__auto__;
})()
;})(switch__34322__auto__,c__34337__auto__))
})();
var state__34339__auto__ = (function (){var statearr_40732 = f__34338__auto__.call(null);
(statearr_40732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34337__auto__);

return statearr_40732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34339__auto__);
});})(c__34337__auto__))
);

return c__34337__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__40745,callback){
var map__40748 = p__40745;
var map__40748__$1 = ((((!((map__40748 == null)))?((((map__40748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40748):map__40748);
var file_msg = map__40748__$1;
var namespace = cljs.core.get.call(null,map__40748__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__40748,map__40748__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__40748,map__40748__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__40750){
var map__40753 = p__40750;
var map__40753__$1 = ((((!((map__40753 == null)))?((((map__40753.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40753.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40753):map__40753);
var file_msg = map__40753__$1;
var namespace = cljs.core.get.call(null,map__40753__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__29667__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__29667__auto__){
var or__29679__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__29679__auto__)){
return or__29679__auto__;
} else {
var or__29679__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__29679__auto____$1)){
return or__29679__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__29667__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__40755,callback){
var map__40758 = p__40755;
var map__40758__$1 = ((((!((map__40758 == null)))?((((map__40758.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40758.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40758):map__40758);
var file_msg = map__40758__$1;
var request_url = cljs.core.get.call(null,map__40758__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__40758__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__34337__auto___40846 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34337__auto___40846,out){
return (function (){
var f__34338__auto__ = (function (){var switch__34322__auto__ = ((function (c__34337__auto___40846,out){
return (function (state_40828){
var state_val_40829 = (state_40828[(1)]);
if((state_val_40829 === (1))){
var inst_40806 = cljs.core.nth.call(null,files,(0),null);
var inst_40807 = cljs.core.nthnext.call(null,files,(1));
var inst_40808 = files;
var state_40828__$1 = (function (){var statearr_40830 = state_40828;
(statearr_40830[(7)] = inst_40807);

(statearr_40830[(8)] = inst_40808);

(statearr_40830[(9)] = inst_40806);

return statearr_40830;
})();
var statearr_40831_40847 = state_40828__$1;
(statearr_40831_40847[(2)] = null);

(statearr_40831_40847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40829 === (2))){
var inst_40811 = (state_40828[(10)]);
var inst_40808 = (state_40828[(8)]);
var inst_40811__$1 = cljs.core.nth.call(null,inst_40808,(0),null);
var inst_40812 = cljs.core.nthnext.call(null,inst_40808,(1));
var inst_40813 = (inst_40811__$1 == null);
var inst_40814 = cljs.core.not.call(null,inst_40813);
var state_40828__$1 = (function (){var statearr_40832 = state_40828;
(statearr_40832[(10)] = inst_40811__$1);

(statearr_40832[(11)] = inst_40812);

return statearr_40832;
})();
if(inst_40814){
var statearr_40833_40848 = state_40828__$1;
(statearr_40833_40848[(1)] = (4));

} else {
var statearr_40834_40849 = state_40828__$1;
(statearr_40834_40849[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40829 === (3))){
var inst_40826 = (state_40828[(2)]);
var state_40828__$1 = state_40828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40828__$1,inst_40826);
} else {
if((state_val_40829 === (4))){
var inst_40811 = (state_40828[(10)]);
var inst_40816 = figwheel.client.file_reloading.reload_js_file.call(null,inst_40811);
var state_40828__$1 = state_40828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40828__$1,(7),inst_40816);
} else {
if((state_val_40829 === (5))){
var inst_40822 = cljs.core.async.close_BANG_.call(null,out);
var state_40828__$1 = state_40828;
var statearr_40835_40850 = state_40828__$1;
(statearr_40835_40850[(2)] = inst_40822);

(statearr_40835_40850[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40829 === (6))){
var inst_40824 = (state_40828[(2)]);
var state_40828__$1 = state_40828;
var statearr_40836_40851 = state_40828__$1;
(statearr_40836_40851[(2)] = inst_40824);

(statearr_40836_40851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40829 === (7))){
var inst_40812 = (state_40828[(11)]);
var inst_40818 = (state_40828[(2)]);
var inst_40819 = cljs.core.async.put_BANG_.call(null,out,inst_40818);
var inst_40808 = inst_40812;
var state_40828__$1 = (function (){var statearr_40837 = state_40828;
(statearr_40837[(12)] = inst_40819);

(statearr_40837[(8)] = inst_40808);

return statearr_40837;
})();
var statearr_40838_40852 = state_40828__$1;
(statearr_40838_40852[(2)] = null);

(statearr_40838_40852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__34337__auto___40846,out))
;
return ((function (switch__34322__auto__,c__34337__auto___40846,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34323__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34323__auto____0 = (function (){
var statearr_40842 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40842[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34323__auto__);

(statearr_40842[(1)] = (1));

return statearr_40842;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34323__auto____1 = (function (state_40828){
while(true){
var ret_value__34324__auto__ = (function (){try{while(true){
var result__34325__auto__ = switch__34322__auto__.call(null,state_40828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34325__auto__;
}
break;
}
}catch (e40843){if((e40843 instanceof Object)){
var ex__34326__auto__ = e40843;
var statearr_40844_40853 = state_40828;
(statearr_40844_40853[(5)] = ex__34326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40854 = state_40828;
state_40828 = G__40854;
continue;
} else {
return ret_value__34324__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34323__auto__ = function(state_40828){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34323__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34323__auto____1.call(this,state_40828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34323__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34323__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34323__auto__;
})()
;})(switch__34322__auto__,c__34337__auto___40846,out))
})();
var state__34339__auto__ = (function (){var statearr_40845 = f__34338__auto__.call(null);
(statearr_40845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34337__auto___40846);

return statearr_40845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34339__auto__);
});})(c__34337__auto___40846,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__40855,opts){
var map__40859 = p__40855;
var map__40859__$1 = ((((!((map__40859 == null)))?((((map__40859.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40859.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40859):map__40859);
var eval_body__$1 = cljs.core.get.call(null,map__40859__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__40859__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__29667__auto__ = eval_body__$1;
if(cljs.core.truth_(and__29667__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__29667__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e40861){var e = e40861;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__40862_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__40862_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__40867){
var vec__40868 = p__40867;
var k = cljs.core.nth.call(null,vec__40868,(0),null);
var v = cljs.core.nth.call(null,vec__40868,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__40869){
var vec__40870 = p__40869;
var k = cljs.core.nth.call(null,vec__40870,(0),null);
var v = cljs.core.nth.call(null,vec__40870,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__40874,p__40875){
var map__41122 = p__40874;
var map__41122__$1 = ((((!((map__41122 == null)))?((((map__41122.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41122.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41122):map__41122);
var opts = map__41122__$1;
var before_jsload = cljs.core.get.call(null,map__41122__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__41122__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__41122__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__41123 = p__40875;
var map__41123__$1 = ((((!((map__41123 == null)))?((((map__41123.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41123.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41123):map__41123);
var msg = map__41123__$1;
var files = cljs.core.get.call(null,map__41123__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__41123__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__41123__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__34337__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34337__auto__,map__41122,map__41122__$1,opts,before_jsload,on_jsload,reload_dependents,map__41123,map__41123__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__34338__auto__ = (function (){var switch__34322__auto__ = ((function (c__34337__auto__,map__41122,map__41122__$1,opts,before_jsload,on_jsload,reload_dependents,map__41123,map__41123__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_41276){
var state_val_41277 = (state_41276[(1)]);
if((state_val_41277 === (7))){
var inst_41138 = (state_41276[(7)]);
var inst_41139 = (state_41276[(8)]);
var inst_41140 = (state_41276[(9)]);
var inst_41137 = (state_41276[(10)]);
var inst_41145 = cljs.core._nth.call(null,inst_41138,inst_41140);
var inst_41146 = figwheel.client.file_reloading.eval_body.call(null,inst_41145,opts);
var inst_41147 = (inst_41140 + (1));
var tmp41278 = inst_41138;
var tmp41279 = inst_41139;
var tmp41280 = inst_41137;
var inst_41137__$1 = tmp41280;
var inst_41138__$1 = tmp41278;
var inst_41139__$1 = tmp41279;
var inst_41140__$1 = inst_41147;
var state_41276__$1 = (function (){var statearr_41281 = state_41276;
(statearr_41281[(7)] = inst_41138__$1);

(statearr_41281[(8)] = inst_41139__$1);

(statearr_41281[(9)] = inst_41140__$1);

(statearr_41281[(11)] = inst_41146);

(statearr_41281[(10)] = inst_41137__$1);

return statearr_41281;
})();
var statearr_41282_41368 = state_41276__$1;
(statearr_41282_41368[(2)] = null);

(statearr_41282_41368[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (20))){
var inst_41180 = (state_41276[(12)]);
var inst_41188 = figwheel.client.file_reloading.sort_files.call(null,inst_41180);
var state_41276__$1 = state_41276;
var statearr_41283_41369 = state_41276__$1;
(statearr_41283_41369[(2)] = inst_41188);

(statearr_41283_41369[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (27))){
var state_41276__$1 = state_41276;
var statearr_41284_41370 = state_41276__$1;
(statearr_41284_41370[(2)] = null);

(statearr_41284_41370[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (1))){
var inst_41129 = (state_41276[(13)]);
var inst_41126 = before_jsload.call(null,files);
var inst_41127 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_41128 = (function (){return ((function (inst_41129,inst_41126,inst_41127,state_val_41277,c__34337__auto__,map__41122,map__41122__$1,opts,before_jsload,on_jsload,reload_dependents,map__41123,map__41123__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40871_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__40871_SHARP_);
});
;})(inst_41129,inst_41126,inst_41127,state_val_41277,c__34337__auto__,map__41122,map__41122__$1,opts,before_jsload,on_jsload,reload_dependents,map__41123,map__41123__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41129__$1 = cljs.core.filter.call(null,inst_41128,files);
var inst_41130 = cljs.core.not_empty.call(null,inst_41129__$1);
var state_41276__$1 = (function (){var statearr_41285 = state_41276;
(statearr_41285[(13)] = inst_41129__$1);

(statearr_41285[(14)] = inst_41126);

(statearr_41285[(15)] = inst_41127);

return statearr_41285;
})();
if(cljs.core.truth_(inst_41130)){
var statearr_41286_41371 = state_41276__$1;
(statearr_41286_41371[(1)] = (2));

} else {
var statearr_41287_41372 = state_41276__$1;
(statearr_41287_41372[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (24))){
var state_41276__$1 = state_41276;
var statearr_41288_41373 = state_41276__$1;
(statearr_41288_41373[(2)] = null);

(statearr_41288_41373[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (39))){
var inst_41230 = (state_41276[(16)]);
var state_41276__$1 = state_41276;
var statearr_41289_41374 = state_41276__$1;
(statearr_41289_41374[(2)] = inst_41230);

(statearr_41289_41374[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (46))){
var inst_41271 = (state_41276[(2)]);
var state_41276__$1 = state_41276;
var statearr_41290_41375 = state_41276__$1;
(statearr_41290_41375[(2)] = inst_41271);

(statearr_41290_41375[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (4))){
var inst_41174 = (state_41276[(2)]);
var inst_41175 = cljs.core.List.EMPTY;
var inst_41176 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_41175);
var inst_41177 = (function (){return ((function (inst_41174,inst_41175,inst_41176,state_val_41277,c__34337__auto__,map__41122,map__41122__$1,opts,before_jsload,on_jsload,reload_dependents,map__41123,map__41123__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40872_SHARP_){
var and__29667__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__40872_SHARP_);
if(cljs.core.truth_(and__29667__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__40872_SHARP_));
} else {
return and__29667__auto__;
}
});
;})(inst_41174,inst_41175,inst_41176,state_val_41277,c__34337__auto__,map__41122,map__41122__$1,opts,before_jsload,on_jsload,reload_dependents,map__41123,map__41123__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41178 = cljs.core.filter.call(null,inst_41177,files);
var inst_41179 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_41180 = cljs.core.concat.call(null,inst_41178,inst_41179);
var state_41276__$1 = (function (){var statearr_41291 = state_41276;
(statearr_41291[(17)] = inst_41176);

(statearr_41291[(18)] = inst_41174);

(statearr_41291[(12)] = inst_41180);

return statearr_41291;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_41292_41376 = state_41276__$1;
(statearr_41292_41376[(1)] = (16));

} else {
var statearr_41293_41377 = state_41276__$1;
(statearr_41293_41377[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (15))){
var inst_41164 = (state_41276[(2)]);
var state_41276__$1 = state_41276;
var statearr_41294_41378 = state_41276__$1;
(statearr_41294_41378[(2)] = inst_41164);

(statearr_41294_41378[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (21))){
var inst_41190 = (state_41276[(19)]);
var inst_41190__$1 = (state_41276[(2)]);
var inst_41191 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_41190__$1);
var state_41276__$1 = (function (){var statearr_41295 = state_41276;
(statearr_41295[(19)] = inst_41190__$1);

return statearr_41295;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41276__$1,(22),inst_41191);
} else {
if((state_val_41277 === (31))){
var inst_41274 = (state_41276[(2)]);
var state_41276__$1 = state_41276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41276__$1,inst_41274);
} else {
if((state_val_41277 === (32))){
var inst_41230 = (state_41276[(16)]);
var inst_41235 = inst_41230.cljs$lang$protocol_mask$partition0$;
var inst_41236 = (inst_41235 & (64));
var inst_41237 = inst_41230.cljs$core$ISeq$;
var inst_41238 = (inst_41236) || (inst_41237);
var state_41276__$1 = state_41276;
if(cljs.core.truth_(inst_41238)){
var statearr_41296_41379 = state_41276__$1;
(statearr_41296_41379[(1)] = (35));

} else {
var statearr_41297_41380 = state_41276__$1;
(statearr_41297_41380[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (40))){
var inst_41251 = (state_41276[(20)]);
var inst_41250 = (state_41276[(2)]);
var inst_41251__$1 = cljs.core.get.call(null,inst_41250,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_41252 = cljs.core.get.call(null,inst_41250,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_41253 = cljs.core.not_empty.call(null,inst_41251__$1);
var state_41276__$1 = (function (){var statearr_41298 = state_41276;
(statearr_41298[(21)] = inst_41252);

(statearr_41298[(20)] = inst_41251__$1);

return statearr_41298;
})();
if(cljs.core.truth_(inst_41253)){
var statearr_41299_41381 = state_41276__$1;
(statearr_41299_41381[(1)] = (41));

} else {
var statearr_41300_41382 = state_41276__$1;
(statearr_41300_41382[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (33))){
var state_41276__$1 = state_41276;
var statearr_41301_41383 = state_41276__$1;
(statearr_41301_41383[(2)] = false);

(statearr_41301_41383[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (13))){
var inst_41150 = (state_41276[(22)]);
var inst_41154 = cljs.core.chunk_first.call(null,inst_41150);
var inst_41155 = cljs.core.chunk_rest.call(null,inst_41150);
var inst_41156 = cljs.core.count.call(null,inst_41154);
var inst_41137 = inst_41155;
var inst_41138 = inst_41154;
var inst_41139 = inst_41156;
var inst_41140 = (0);
var state_41276__$1 = (function (){var statearr_41302 = state_41276;
(statearr_41302[(7)] = inst_41138);

(statearr_41302[(8)] = inst_41139);

(statearr_41302[(9)] = inst_41140);

(statearr_41302[(10)] = inst_41137);

return statearr_41302;
})();
var statearr_41303_41384 = state_41276__$1;
(statearr_41303_41384[(2)] = null);

(statearr_41303_41384[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (22))){
var inst_41194 = (state_41276[(23)]);
var inst_41190 = (state_41276[(19)]);
var inst_41198 = (state_41276[(24)]);
var inst_41193 = (state_41276[(25)]);
var inst_41193__$1 = (state_41276[(2)]);
var inst_41194__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_41193__$1);
var inst_41195 = (function (){var all_files = inst_41190;
var res_SINGLEQUOTE_ = inst_41193__$1;
var res = inst_41194__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_41194,inst_41190,inst_41198,inst_41193,inst_41193__$1,inst_41194__$1,state_val_41277,c__34337__auto__,map__41122,map__41122__$1,opts,before_jsload,on_jsload,reload_dependents,map__41123,map__41123__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40873_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__40873_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_41194,inst_41190,inst_41198,inst_41193,inst_41193__$1,inst_41194__$1,state_val_41277,c__34337__auto__,map__41122,map__41122__$1,opts,before_jsload,on_jsload,reload_dependents,map__41123,map__41123__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41196 = cljs.core.filter.call(null,inst_41195,inst_41193__$1);
var inst_41197 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_41198__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_41197);
var inst_41199 = cljs.core.not_empty.call(null,inst_41198__$1);
var state_41276__$1 = (function (){var statearr_41304 = state_41276;
(statearr_41304[(23)] = inst_41194__$1);

(statearr_41304[(26)] = inst_41196);

(statearr_41304[(24)] = inst_41198__$1);

(statearr_41304[(25)] = inst_41193__$1);

return statearr_41304;
})();
if(cljs.core.truth_(inst_41199)){
var statearr_41305_41385 = state_41276__$1;
(statearr_41305_41385[(1)] = (23));

} else {
var statearr_41306_41386 = state_41276__$1;
(statearr_41306_41386[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (36))){
var state_41276__$1 = state_41276;
var statearr_41307_41387 = state_41276__$1;
(statearr_41307_41387[(2)] = false);

(statearr_41307_41387[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (41))){
var inst_41251 = (state_41276[(20)]);
var inst_41255 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_41256 = cljs.core.map.call(null,inst_41255,inst_41251);
var inst_41257 = cljs.core.pr_str.call(null,inst_41256);
var inst_41258 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_41257)].join('');
var inst_41259 = figwheel.client.utils.log.call(null,inst_41258);
var state_41276__$1 = state_41276;
var statearr_41308_41388 = state_41276__$1;
(statearr_41308_41388[(2)] = inst_41259);

(statearr_41308_41388[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (43))){
var inst_41252 = (state_41276[(21)]);
var inst_41262 = (state_41276[(2)]);
var inst_41263 = cljs.core.not_empty.call(null,inst_41252);
var state_41276__$1 = (function (){var statearr_41309 = state_41276;
(statearr_41309[(27)] = inst_41262);

return statearr_41309;
})();
if(cljs.core.truth_(inst_41263)){
var statearr_41310_41389 = state_41276__$1;
(statearr_41310_41389[(1)] = (44));

} else {
var statearr_41311_41390 = state_41276__$1;
(statearr_41311_41390[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (29))){
var inst_41194 = (state_41276[(23)]);
var inst_41196 = (state_41276[(26)]);
var inst_41190 = (state_41276[(19)]);
var inst_41198 = (state_41276[(24)]);
var inst_41193 = (state_41276[(25)]);
var inst_41230 = (state_41276[(16)]);
var inst_41226 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_41229 = (function (){var all_files = inst_41190;
var res_SINGLEQUOTE_ = inst_41193;
var res = inst_41194;
var files_not_loaded = inst_41196;
var dependencies_that_loaded = inst_41198;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41194,inst_41196,inst_41190,inst_41198,inst_41193,inst_41230,inst_41226,state_val_41277,c__34337__auto__,map__41122,map__41122__$1,opts,before_jsload,on_jsload,reload_dependents,map__41123,map__41123__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41228){
var map__41312 = p__41228;
var map__41312__$1 = ((((!((map__41312 == null)))?((((map__41312.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41312.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41312):map__41312);
var namespace = cljs.core.get.call(null,map__41312__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41194,inst_41196,inst_41190,inst_41198,inst_41193,inst_41230,inst_41226,state_val_41277,c__34337__auto__,map__41122,map__41122__$1,opts,before_jsload,on_jsload,reload_dependents,map__41123,map__41123__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41230__$1 = cljs.core.group_by.call(null,inst_41229,inst_41196);
var inst_41232 = (inst_41230__$1 == null);
var inst_41233 = cljs.core.not.call(null,inst_41232);
var state_41276__$1 = (function (){var statearr_41314 = state_41276;
(statearr_41314[(16)] = inst_41230__$1);

(statearr_41314[(28)] = inst_41226);

return statearr_41314;
})();
if(inst_41233){
var statearr_41315_41391 = state_41276__$1;
(statearr_41315_41391[(1)] = (32));

} else {
var statearr_41316_41392 = state_41276__$1;
(statearr_41316_41392[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (44))){
var inst_41252 = (state_41276[(21)]);
var inst_41265 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41252);
var inst_41266 = cljs.core.pr_str.call(null,inst_41265);
var inst_41267 = [cljs.core.str("not required: "),cljs.core.str(inst_41266)].join('');
var inst_41268 = figwheel.client.utils.log.call(null,inst_41267);
var state_41276__$1 = state_41276;
var statearr_41317_41393 = state_41276__$1;
(statearr_41317_41393[(2)] = inst_41268);

(statearr_41317_41393[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (6))){
var inst_41171 = (state_41276[(2)]);
var state_41276__$1 = state_41276;
var statearr_41318_41394 = state_41276__$1;
(statearr_41318_41394[(2)] = inst_41171);

(statearr_41318_41394[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (28))){
var inst_41196 = (state_41276[(26)]);
var inst_41223 = (state_41276[(2)]);
var inst_41224 = cljs.core.not_empty.call(null,inst_41196);
var state_41276__$1 = (function (){var statearr_41319 = state_41276;
(statearr_41319[(29)] = inst_41223);

return statearr_41319;
})();
if(cljs.core.truth_(inst_41224)){
var statearr_41320_41395 = state_41276__$1;
(statearr_41320_41395[(1)] = (29));

} else {
var statearr_41321_41396 = state_41276__$1;
(statearr_41321_41396[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (25))){
var inst_41194 = (state_41276[(23)]);
var inst_41210 = (state_41276[(2)]);
var inst_41211 = cljs.core.not_empty.call(null,inst_41194);
var state_41276__$1 = (function (){var statearr_41322 = state_41276;
(statearr_41322[(30)] = inst_41210);

return statearr_41322;
})();
if(cljs.core.truth_(inst_41211)){
var statearr_41323_41397 = state_41276__$1;
(statearr_41323_41397[(1)] = (26));

} else {
var statearr_41324_41398 = state_41276__$1;
(statearr_41324_41398[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (34))){
var inst_41245 = (state_41276[(2)]);
var state_41276__$1 = state_41276;
if(cljs.core.truth_(inst_41245)){
var statearr_41325_41399 = state_41276__$1;
(statearr_41325_41399[(1)] = (38));

} else {
var statearr_41326_41400 = state_41276__$1;
(statearr_41326_41400[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (17))){
var state_41276__$1 = state_41276;
var statearr_41327_41401 = state_41276__$1;
(statearr_41327_41401[(2)] = recompile_dependents);

(statearr_41327_41401[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (3))){
var state_41276__$1 = state_41276;
var statearr_41328_41402 = state_41276__$1;
(statearr_41328_41402[(2)] = null);

(statearr_41328_41402[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (12))){
var inst_41167 = (state_41276[(2)]);
var state_41276__$1 = state_41276;
var statearr_41329_41403 = state_41276__$1;
(statearr_41329_41403[(2)] = inst_41167);

(statearr_41329_41403[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (2))){
var inst_41129 = (state_41276[(13)]);
var inst_41136 = cljs.core.seq.call(null,inst_41129);
var inst_41137 = inst_41136;
var inst_41138 = null;
var inst_41139 = (0);
var inst_41140 = (0);
var state_41276__$1 = (function (){var statearr_41330 = state_41276;
(statearr_41330[(7)] = inst_41138);

(statearr_41330[(8)] = inst_41139);

(statearr_41330[(9)] = inst_41140);

(statearr_41330[(10)] = inst_41137);

return statearr_41330;
})();
var statearr_41331_41404 = state_41276__$1;
(statearr_41331_41404[(2)] = null);

(statearr_41331_41404[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (23))){
var inst_41194 = (state_41276[(23)]);
var inst_41196 = (state_41276[(26)]);
var inst_41190 = (state_41276[(19)]);
var inst_41198 = (state_41276[(24)]);
var inst_41193 = (state_41276[(25)]);
var inst_41201 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_41203 = (function (){var all_files = inst_41190;
var res_SINGLEQUOTE_ = inst_41193;
var res = inst_41194;
var files_not_loaded = inst_41196;
var dependencies_that_loaded = inst_41198;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41194,inst_41196,inst_41190,inst_41198,inst_41193,inst_41201,state_val_41277,c__34337__auto__,map__41122,map__41122__$1,opts,before_jsload,on_jsload,reload_dependents,map__41123,map__41123__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41202){
var map__41332 = p__41202;
var map__41332__$1 = ((((!((map__41332 == null)))?((((map__41332.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41332.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41332):map__41332);
var request_url = cljs.core.get.call(null,map__41332__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41194,inst_41196,inst_41190,inst_41198,inst_41193,inst_41201,state_val_41277,c__34337__auto__,map__41122,map__41122__$1,opts,before_jsload,on_jsload,reload_dependents,map__41123,map__41123__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41204 = cljs.core.reverse.call(null,inst_41198);
var inst_41205 = cljs.core.map.call(null,inst_41203,inst_41204);
var inst_41206 = cljs.core.pr_str.call(null,inst_41205);
var inst_41207 = figwheel.client.utils.log.call(null,inst_41206);
var state_41276__$1 = (function (){var statearr_41334 = state_41276;
(statearr_41334[(31)] = inst_41201);

return statearr_41334;
})();
var statearr_41335_41405 = state_41276__$1;
(statearr_41335_41405[(2)] = inst_41207);

(statearr_41335_41405[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (35))){
var state_41276__$1 = state_41276;
var statearr_41336_41406 = state_41276__$1;
(statearr_41336_41406[(2)] = true);

(statearr_41336_41406[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (19))){
var inst_41180 = (state_41276[(12)]);
var inst_41186 = figwheel.client.file_reloading.expand_files.call(null,inst_41180);
var state_41276__$1 = state_41276;
var statearr_41337_41407 = state_41276__$1;
(statearr_41337_41407[(2)] = inst_41186);

(statearr_41337_41407[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (11))){
var state_41276__$1 = state_41276;
var statearr_41338_41408 = state_41276__$1;
(statearr_41338_41408[(2)] = null);

(statearr_41338_41408[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (9))){
var inst_41169 = (state_41276[(2)]);
var state_41276__$1 = state_41276;
var statearr_41339_41409 = state_41276__$1;
(statearr_41339_41409[(2)] = inst_41169);

(statearr_41339_41409[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (5))){
var inst_41139 = (state_41276[(8)]);
var inst_41140 = (state_41276[(9)]);
var inst_41142 = (inst_41140 < inst_41139);
var inst_41143 = inst_41142;
var state_41276__$1 = state_41276;
if(cljs.core.truth_(inst_41143)){
var statearr_41340_41410 = state_41276__$1;
(statearr_41340_41410[(1)] = (7));

} else {
var statearr_41341_41411 = state_41276__$1;
(statearr_41341_41411[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (14))){
var inst_41150 = (state_41276[(22)]);
var inst_41159 = cljs.core.first.call(null,inst_41150);
var inst_41160 = figwheel.client.file_reloading.eval_body.call(null,inst_41159,opts);
var inst_41161 = cljs.core.next.call(null,inst_41150);
var inst_41137 = inst_41161;
var inst_41138 = null;
var inst_41139 = (0);
var inst_41140 = (0);
var state_41276__$1 = (function (){var statearr_41342 = state_41276;
(statearr_41342[(32)] = inst_41160);

(statearr_41342[(7)] = inst_41138);

(statearr_41342[(8)] = inst_41139);

(statearr_41342[(9)] = inst_41140);

(statearr_41342[(10)] = inst_41137);

return statearr_41342;
})();
var statearr_41343_41412 = state_41276__$1;
(statearr_41343_41412[(2)] = null);

(statearr_41343_41412[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (45))){
var state_41276__$1 = state_41276;
var statearr_41344_41413 = state_41276__$1;
(statearr_41344_41413[(2)] = null);

(statearr_41344_41413[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (26))){
var inst_41194 = (state_41276[(23)]);
var inst_41196 = (state_41276[(26)]);
var inst_41190 = (state_41276[(19)]);
var inst_41198 = (state_41276[(24)]);
var inst_41193 = (state_41276[(25)]);
var inst_41213 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_41215 = (function (){var all_files = inst_41190;
var res_SINGLEQUOTE_ = inst_41193;
var res = inst_41194;
var files_not_loaded = inst_41196;
var dependencies_that_loaded = inst_41198;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41194,inst_41196,inst_41190,inst_41198,inst_41193,inst_41213,state_val_41277,c__34337__auto__,map__41122,map__41122__$1,opts,before_jsload,on_jsload,reload_dependents,map__41123,map__41123__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41214){
var map__41345 = p__41214;
var map__41345__$1 = ((((!((map__41345 == null)))?((((map__41345.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41345.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41345):map__41345);
var namespace = cljs.core.get.call(null,map__41345__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__41345__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41194,inst_41196,inst_41190,inst_41198,inst_41193,inst_41213,state_val_41277,c__34337__auto__,map__41122,map__41122__$1,opts,before_jsload,on_jsload,reload_dependents,map__41123,map__41123__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41216 = cljs.core.map.call(null,inst_41215,inst_41194);
var inst_41217 = cljs.core.pr_str.call(null,inst_41216);
var inst_41218 = figwheel.client.utils.log.call(null,inst_41217);
var inst_41219 = (function (){var all_files = inst_41190;
var res_SINGLEQUOTE_ = inst_41193;
var res = inst_41194;
var files_not_loaded = inst_41196;
var dependencies_that_loaded = inst_41198;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41194,inst_41196,inst_41190,inst_41198,inst_41193,inst_41213,inst_41215,inst_41216,inst_41217,inst_41218,state_val_41277,c__34337__auto__,map__41122,map__41122__$1,opts,before_jsload,on_jsload,reload_dependents,map__41123,map__41123__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41194,inst_41196,inst_41190,inst_41198,inst_41193,inst_41213,inst_41215,inst_41216,inst_41217,inst_41218,state_val_41277,c__34337__auto__,map__41122,map__41122__$1,opts,before_jsload,on_jsload,reload_dependents,map__41123,map__41123__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41220 = setTimeout(inst_41219,(10));
var state_41276__$1 = (function (){var statearr_41347 = state_41276;
(statearr_41347[(33)] = inst_41213);

(statearr_41347[(34)] = inst_41218);

return statearr_41347;
})();
var statearr_41348_41414 = state_41276__$1;
(statearr_41348_41414[(2)] = inst_41220);

(statearr_41348_41414[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (16))){
var state_41276__$1 = state_41276;
var statearr_41349_41415 = state_41276__$1;
(statearr_41349_41415[(2)] = reload_dependents);

(statearr_41349_41415[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (38))){
var inst_41230 = (state_41276[(16)]);
var inst_41247 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41230);
var state_41276__$1 = state_41276;
var statearr_41350_41416 = state_41276__$1;
(statearr_41350_41416[(2)] = inst_41247);

(statearr_41350_41416[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (30))){
var state_41276__$1 = state_41276;
var statearr_41351_41417 = state_41276__$1;
(statearr_41351_41417[(2)] = null);

(statearr_41351_41417[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (10))){
var inst_41150 = (state_41276[(22)]);
var inst_41152 = cljs.core.chunked_seq_QMARK_.call(null,inst_41150);
var state_41276__$1 = state_41276;
if(inst_41152){
var statearr_41352_41418 = state_41276__$1;
(statearr_41352_41418[(1)] = (13));

} else {
var statearr_41353_41419 = state_41276__$1;
(statearr_41353_41419[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (18))){
var inst_41184 = (state_41276[(2)]);
var state_41276__$1 = state_41276;
if(cljs.core.truth_(inst_41184)){
var statearr_41354_41420 = state_41276__$1;
(statearr_41354_41420[(1)] = (19));

} else {
var statearr_41355_41421 = state_41276__$1;
(statearr_41355_41421[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (42))){
var state_41276__$1 = state_41276;
var statearr_41356_41422 = state_41276__$1;
(statearr_41356_41422[(2)] = null);

(statearr_41356_41422[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (37))){
var inst_41242 = (state_41276[(2)]);
var state_41276__$1 = state_41276;
var statearr_41357_41423 = state_41276__$1;
(statearr_41357_41423[(2)] = inst_41242);

(statearr_41357_41423[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (8))){
var inst_41150 = (state_41276[(22)]);
var inst_41137 = (state_41276[(10)]);
var inst_41150__$1 = cljs.core.seq.call(null,inst_41137);
var state_41276__$1 = (function (){var statearr_41358 = state_41276;
(statearr_41358[(22)] = inst_41150__$1);

return statearr_41358;
})();
if(inst_41150__$1){
var statearr_41359_41424 = state_41276__$1;
(statearr_41359_41424[(1)] = (10));

} else {
var statearr_41360_41425 = state_41276__$1;
(statearr_41360_41425[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34337__auto__,map__41122,map__41122__$1,opts,before_jsload,on_jsload,reload_dependents,map__41123,map__41123__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__34322__auto__,c__34337__auto__,map__41122,map__41122__$1,opts,before_jsload,on_jsload,reload_dependents,map__41123,map__41123__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34323__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34323__auto____0 = (function (){
var statearr_41364 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41364[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__34323__auto__);

(statearr_41364[(1)] = (1));

return statearr_41364;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34323__auto____1 = (function (state_41276){
while(true){
var ret_value__34324__auto__ = (function (){try{while(true){
var result__34325__auto__ = switch__34322__auto__.call(null,state_41276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34325__auto__;
}
break;
}
}catch (e41365){if((e41365 instanceof Object)){
var ex__34326__auto__ = e41365;
var statearr_41366_41426 = state_41276;
(statearr_41366_41426[(5)] = ex__34326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41427 = state_41276;
state_41276 = G__41427;
continue;
} else {
return ret_value__34324__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__34323__auto__ = function(state_41276){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34323__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34323__auto____1.call(this,state_41276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34323__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34323__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34323__auto__;
})()
;})(switch__34322__auto__,c__34337__auto__,map__41122,map__41122__$1,opts,before_jsload,on_jsload,reload_dependents,map__41123,map__41123__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__34339__auto__ = (function (){var statearr_41367 = f__34338__auto__.call(null);
(statearr_41367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34337__auto__);

return statearr_41367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34339__auto__);
});})(c__34337__auto__,map__41122,map__41122__$1,opts,before_jsload,on_jsload,reload_dependents,map__41123,map__41123__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__34337__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__41430,link){
var map__41433 = p__41430;
var map__41433__$1 = ((((!((map__41433 == null)))?((((map__41433.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41433.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41433):map__41433);
var file = cljs.core.get.call(null,map__41433__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__41433,map__41433__$1,file){
return (function (p1__41428_SHARP_,p2__41429_SHARP_){
if(cljs.core._EQ_.call(null,p1__41428_SHARP_,p2__41429_SHARP_)){
return p1__41428_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__41433,map__41433__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__41439){
var map__41440 = p__41439;
var map__41440__$1 = ((((!((map__41440 == null)))?((((map__41440.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41440.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41440):map__41440);
var match_length = cljs.core.get.call(null,map__41440__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__41440__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__41435_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__41435_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args41442 = [];
var len__30749__auto___41445 = arguments.length;
var i__30750__auto___41446 = (0);
while(true){
if((i__30750__auto___41446 < len__30749__auto___41445)){
args41442.push((arguments[i__30750__auto___41446]));

var G__41447 = (i__30750__auto___41446 + (1));
i__30750__auto___41446 = G__41447;
continue;
} else {
}
break;
}

var G__41444 = args41442.length;
switch (G__41444) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41442.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__41449_SHARP_,p2__41450_SHARP_){
return cljs.core.assoc.call(null,p1__41449_SHARP_,cljs.core.get.call(null,p2__41450_SHARP_,key),p2__41450_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__41451){
var map__41454 = p__41451;
var map__41454__$1 = ((((!((map__41454 == null)))?((((map__41454.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41454.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41454):map__41454);
var f_data = map__41454__$1;
var file = cljs.core.get.call(null,map__41454__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__41456,files_msg){
var map__41463 = p__41456;
var map__41463__$1 = ((((!((map__41463 == null)))?((((map__41463.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41463.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41463):map__41463);
var opts = map__41463__$1;
var on_cssload = cljs.core.get.call(null,map__41463__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__41465_41469 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__41466_41470 = null;
var count__41467_41471 = (0);
var i__41468_41472 = (0);
while(true){
if((i__41468_41472 < count__41467_41471)){
var f_41473 = cljs.core._nth.call(null,chunk__41466_41470,i__41468_41472);
figwheel.client.file_reloading.reload_css_file.call(null,f_41473);

var G__41474 = seq__41465_41469;
var G__41475 = chunk__41466_41470;
var G__41476 = count__41467_41471;
var G__41477 = (i__41468_41472 + (1));
seq__41465_41469 = G__41474;
chunk__41466_41470 = G__41475;
count__41467_41471 = G__41476;
i__41468_41472 = G__41477;
continue;
} else {
var temp__4657__auto___41478 = cljs.core.seq.call(null,seq__41465_41469);
if(temp__4657__auto___41478){
var seq__41465_41479__$1 = temp__4657__auto___41478;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41465_41479__$1)){
var c__30490__auto___41480 = cljs.core.chunk_first.call(null,seq__41465_41479__$1);
var G__41481 = cljs.core.chunk_rest.call(null,seq__41465_41479__$1);
var G__41482 = c__30490__auto___41480;
var G__41483 = cljs.core.count.call(null,c__30490__auto___41480);
var G__41484 = (0);
seq__41465_41469 = G__41481;
chunk__41466_41470 = G__41482;
count__41467_41471 = G__41483;
i__41468_41472 = G__41484;
continue;
} else {
var f_41485 = cljs.core.first.call(null,seq__41465_41479__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_41485);

var G__41486 = cljs.core.next.call(null,seq__41465_41479__$1);
var G__41487 = null;
var G__41488 = (0);
var G__41489 = (0);
seq__41465_41469 = G__41486;
chunk__41466_41470 = G__41487;
count__41467_41471 = G__41488;
i__41468_41472 = G__41489;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__41463,map__41463__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__41463,map__41463__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1466782847574