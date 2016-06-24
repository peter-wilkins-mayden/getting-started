// Compiled by ClojureScript 1.8.51 {}
goog.provide('devtools.core');
goog.require('cljs.core');
goog.require('devtools.prefs');
goog.require('devtools.sanity_hints');
goog.require('devtools.dirac');
goog.require('devtools.custom_formatters');
goog.require('devtools.util');
goog.require('goog.userAgent');
devtools.core.known_features = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"custom-formatters","custom-formatters",-863243779),new cljs.core.Keyword(null,"install-custom-formatters","install-custom-formatters",-1653731327),new cljs.core.Keyword(null,"dirac","dirac",1785994033),new cljs.core.Keyword(null,"install-dirac-support","install-dirac-support",-949928649),new cljs.core.Keyword(null,"sanity-hints","sanity-hints",1201436858),new cljs.core.Keyword(null,"install-sanity-hints","install-sanity-hints",72546145)], null);
devtools.core.missing_feature_warning = (function devtools$core$missing_feature_warning(feature,known_features){
return [cljs.core.str("No such feature '"),cljs.core.str(feature),cljs.core.str("' is currently available in cljs-devtools. "),cljs.core.str("List of supported features:"),cljs.core.str(cljs.core.keys.call(null,known_features))].join('');
});
devtools.core.warn_feature_not_available = (function devtools$core$warn_feature_not_available(feature){
return console.warn([cljs.core.str("Feature '"),cljs.core.str(cljs.core.name.call(null,feature)),cljs.core.str("' cannot be installed. Unsupported browser "),cljs.core.str(goog.userAgent.getUserAgentString()),cljs.core.str(".")].join(''));
});
devtools.core.install_BANG_ = (function devtools$core$install_BANG_(){
devtools.util.display_banner.call(null,"Installing cljs-devtools:",devtools.core.known_features);

if(cljs.core.truth_(devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"install-custom-formatters","install-custom-formatters",-1653731327)))){
if(cljs.core.truth_(devtools.custom_formatters.available_QMARK_.call(null))){
devtools.custom_formatters.install_BANG_.call(null);
} else {
devtools.core.warn_feature_not_available.call(null,new cljs.core.Keyword(null,"custom-formatters","custom-formatters",-863243779));
}
} else {
}

if(cljs.core.truth_(devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"install-sanity-hints","install-sanity-hints",72546145)))){
if(cljs.core.truth_(devtools.sanity_hints.available_QMARK_.call(null))){
devtools.sanity_hints.install_BANG_.call(null);
} else {
devtools.core.warn_feature_not_available.call(null,new cljs.core.Keyword(null,"sanity-hints","sanity-hints",1201436858));
}
} else {
}

if(cljs.core.truth_(devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"install-dirac-support","install-dirac-support",-949928649)))){
if(cljs.core.truth_(devtools.dirac.available_QMARK_.call(null))){
return devtools.dirac.install_BANG_.call(null);
} else {
return devtools.core.warn_feature_not_available.call(null,new cljs.core.Keyword(null,"dirac","dirac",1785994033));
}
} else {
return null;
}
});
devtools.core.uninstall_BANG_ = (function devtools$core$uninstall_BANG_(){
devtools.custom_formatters.uninstall_BANG_.call(null);

devtools.sanity_hints.uninstall_BANG_.call(null);

return devtools.dirac.uninstall_BANG_.call(null);
});
devtools.core.set_prefs_BANG_ = (function devtools$core$set_prefs_BANG_(new_prefs){
return devtools.prefs.set_prefs_BANG_.call(null,new_prefs);
});
devtools.core.get_prefs = (function devtools$core$get_prefs(){
return devtools.prefs.get_prefs.call(null);
});
devtools.core.set_pref_BANG_ = (function devtools$core$set_pref_BANG_(pref,val){
return devtools.prefs.set_pref_BANG_.call(null,pref,val);
});
devtools.core.set_single_feature_BANG_ = (function devtools$core$set_single_feature_BANG_(feature,val){
var temp__4655__auto__ = feature.call(null,devtools.core.known_features);
if(cljs.core.truth_(temp__4655__auto__)){
var feature_installation_key = temp__4655__auto__;
return devtools.core.set_pref_BANG_.call(null,feature_installation_key,val);
} else {
return console.warn(devtools.core.missing_feature_warning.call(null,feature,devtools.core.known_features));
}
});
devtools.core.enable_single_feature_BANG_ = (function devtools$core$enable_single_feature_BANG_(feature){
return devtools.core.set_single_feature_BANG_.call(null,feature,true);
});
devtools.core.disable_single_feature_BANG_ = (function devtools$core$disable_single_feature_BANG_(feature){
return devtools.core.set_single_feature_BANG_.call(null,feature,false);
});
devtools.core.enable_feature_BANG_ = (function devtools$core$enable_feature_BANG_(var_args){
var args__30756__auto__ = [];
var len__30749__auto___42774 = arguments.length;
var i__30750__auto___42775 = (0);
while(true){
if((i__30750__auto___42775 < len__30749__auto___42774)){
args__30756__auto__.push((arguments[i__30750__auto___42775]));

var G__42776 = (i__30750__auto___42775 + (1));
i__30750__auto___42775 = G__42776;
continue;
} else {
}
break;
}

var argseq__30757__auto__ = ((((0) < args__30756__auto__.length))?(new cljs.core.IndexedSeq(args__30756__auto__.slice((0)),(0),null)):null);
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__30757__auto__);
});

devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (features){
var seq__42770 = cljs.core.seq.call(null,features);
var chunk__42771 = null;
var count__42772 = (0);
var i__42773 = (0);
while(true){
if((i__42773 < count__42772)){
var feature = cljs.core._nth.call(null,chunk__42771,i__42773);
devtools.core.enable_single_feature_BANG_.call(null,feature);

var G__42777 = seq__42770;
var G__42778 = chunk__42771;
var G__42779 = count__42772;
var G__42780 = (i__42773 + (1));
seq__42770 = G__42777;
chunk__42771 = G__42778;
count__42772 = G__42779;
i__42773 = G__42780;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42770);
if(temp__4657__auto__){
var seq__42770__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42770__$1)){
var c__30490__auto__ = cljs.core.chunk_first.call(null,seq__42770__$1);
var G__42781 = cljs.core.chunk_rest.call(null,seq__42770__$1);
var G__42782 = c__30490__auto__;
var G__42783 = cljs.core.count.call(null,c__30490__auto__);
var G__42784 = (0);
seq__42770 = G__42781;
chunk__42771 = G__42782;
count__42772 = G__42783;
i__42773 = G__42784;
continue;
} else {
var feature = cljs.core.first.call(null,seq__42770__$1);
devtools.core.enable_single_feature_BANG_.call(null,feature);

var G__42785 = cljs.core.next.call(null,seq__42770__$1);
var G__42786 = null;
var G__42787 = (0);
var G__42788 = (0);
seq__42770 = G__42785;
chunk__42771 = G__42786;
count__42772 = G__42787;
i__42773 = G__42788;
continue;
}
} else {
return null;
}
}
break;
}
});

devtools.core.enable_feature_BANG_.cljs$lang$maxFixedArity = (0);

devtools.core.enable_feature_BANG_.cljs$lang$applyTo = (function (seq42769){
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42769));
});
devtools.core.disable_feature_BANG_ = (function devtools$core$disable_feature_BANG_(var_args){
var args__30756__auto__ = [];
var len__30749__auto___42794 = arguments.length;
var i__30750__auto___42795 = (0);
while(true){
if((i__30750__auto___42795 < len__30749__auto___42794)){
args__30756__auto__.push((arguments[i__30750__auto___42795]));

var G__42796 = (i__30750__auto___42795 + (1));
i__30750__auto___42795 = G__42796;
continue;
} else {
}
break;
}

var argseq__30757__auto__ = ((((0) < args__30756__auto__.length))?(new cljs.core.IndexedSeq(args__30756__auto__.slice((0)),(0),null)):null);
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__30757__auto__);
});

devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (features){
var seq__42790 = cljs.core.seq.call(null,features);
var chunk__42791 = null;
var count__42792 = (0);
var i__42793 = (0);
while(true){
if((i__42793 < count__42792)){
var feature = cljs.core._nth.call(null,chunk__42791,i__42793);
devtools.core.disable_single_feature_BANG_.call(null,feature);

var G__42797 = seq__42790;
var G__42798 = chunk__42791;
var G__42799 = count__42792;
var G__42800 = (i__42793 + (1));
seq__42790 = G__42797;
chunk__42791 = G__42798;
count__42792 = G__42799;
i__42793 = G__42800;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42790);
if(temp__4657__auto__){
var seq__42790__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42790__$1)){
var c__30490__auto__ = cljs.core.chunk_first.call(null,seq__42790__$1);
var G__42801 = cljs.core.chunk_rest.call(null,seq__42790__$1);
var G__42802 = c__30490__auto__;
var G__42803 = cljs.core.count.call(null,c__30490__auto__);
var G__42804 = (0);
seq__42790 = G__42801;
chunk__42791 = G__42802;
count__42792 = G__42803;
i__42793 = G__42804;
continue;
} else {
var feature = cljs.core.first.call(null,seq__42790__$1);
devtools.core.disable_single_feature_BANG_.call(null,feature);

var G__42805 = cljs.core.next.call(null,seq__42790__$1);
var G__42806 = null;
var G__42807 = (0);
var G__42808 = (0);
seq__42790 = G__42805;
chunk__42791 = G__42806;
count__42792 = G__42807;
i__42793 = G__42808;
continue;
}
} else {
return null;
}
}
break;
}
});

devtools.core.disable_feature_BANG_.cljs$lang$maxFixedArity = (0);

devtools.core.disable_feature_BANG_.cljs$lang$applyTo = (function (seq42789){
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42789));
});
devtools.core.single_feature_available_QMARK_ = (function devtools$core$single_feature_available_QMARK_(feature){
var G__42810 = (((feature instanceof cljs.core.Keyword))?feature.fqn:null);
switch (G__42810) {
case "custom-formatters":
return devtools.custom_formatters.available_QMARK_.call(null);

break;
case "dirac":
return devtools.dirac.available_QMARK_.call(null);

break;
case "sanity-hints":
return devtools.sanity_hints.available_QMARK_.call(null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(feature)].join('')));

}
});
devtools.core.feature_available_QMARK_ = (function devtools$core$feature_available_QMARK_(var_args){
var args__30756__auto__ = [];
var len__30749__auto___42813 = arguments.length;
var i__30750__auto___42814 = (0);
while(true){
if((i__30750__auto___42814 < len__30749__auto___42813)){
args__30756__auto__.push((arguments[i__30750__auto___42814]));

var G__42815 = (i__30750__auto___42814 + (1));
i__30750__auto___42814 = G__42815;
continue;
} else {
}
break;
}

var argseq__30757__auto__ = ((((0) < args__30756__auto__.length))?(new cljs.core.IndexedSeq(args__30756__auto__.slice((0)),(0),null)):null);
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__30757__auto__);
});

devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (features){
return cljs.core.every_QMARK_.call(null,devtools.core.single_feature_available_QMARK_,features);
});

devtools.core.feature_available_QMARK_.cljs$lang$maxFixedArity = (0);

devtools.core.feature_available_QMARK_.cljs$lang$applyTo = (function (seq42812){
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42812));
});
devtools.core.enable_BANG_ = (function devtools$core$enable_BANG_(){
return console.warn([cljs.core.str("devtools.core/enable! was deprecated "),cljs.core.str("and has no effect in current version of cljs-devtools "),cljs.core.str("=> remove the call")].join(''));
});
devtools.core.disable_BANG_ = (function devtools$core$disable_BANG_(){
return console.warn([cljs.core.str("devtools.core/disable! was deprecated "),cljs.core.str("and has no effect in current version of cljs-devtools "),cljs.core.str("=> remove the call")].join(''));
});

//# sourceMappingURL=core.js.map?rel=1466782849630