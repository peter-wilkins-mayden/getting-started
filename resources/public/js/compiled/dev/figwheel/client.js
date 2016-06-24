// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__41930 = cljs.core._EQ_;
var expr__41931 = (function (){var or__29679__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e41934){if((e41934 instanceof Error)){
var e = e41934;
return false;
} else {
throw e41934;

}
}})();
if(cljs.core.truth_(or__29679__auto__)){
return or__29679__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__41930.call(null,"true",expr__41931))){
return true;
} else {
if(cljs.core.truth_(pred__41930.call(null,"false",expr__41931))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__41931)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e41936){if((e41936 instanceof Error)){
var e = e41936;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e41936;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__30756__auto__ = [];
var len__30749__auto___41938 = arguments.length;
var i__30750__auto___41939 = (0);
while(true){
if((i__30750__auto___41939 < len__30749__auto___41938)){
args__30756__auto__.push((arguments[i__30750__auto___41939]));

var G__41940 = (i__30750__auto___41939 + (1));
i__30750__auto___41939 = G__41940;
continue;
} else {
}
break;
}

var argseq__30757__auto__ = ((((0) < args__30756__auto__.length))?(new cljs.core.IndexedSeq(args__30756__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__30757__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq41937){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41937));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__41941){
var map__41944 = p__41941;
var map__41944__$1 = ((((!((map__41944 == null)))?((((map__41944.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41944.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41944):map__41944);
var message = cljs.core.get.call(null,map__41944__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__41944__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__29679__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__29679__auto__)){
return or__29679__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__29667__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__29667__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__29667__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__34337__auto___42106 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34337__auto___42106,ch){
return (function (){
var f__34338__auto__ = (function (){var switch__34322__auto__ = ((function (c__34337__auto___42106,ch){
return (function (state_42075){
var state_val_42076 = (state_42075[(1)]);
if((state_val_42076 === (7))){
var inst_42071 = (state_42075[(2)]);
var state_42075__$1 = state_42075;
var statearr_42077_42107 = state_42075__$1;
(statearr_42077_42107[(2)] = inst_42071);

(statearr_42077_42107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42076 === (1))){
var state_42075__$1 = state_42075;
var statearr_42078_42108 = state_42075__$1;
(statearr_42078_42108[(2)] = null);

(statearr_42078_42108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42076 === (4))){
var inst_42028 = (state_42075[(7)]);
var inst_42028__$1 = (state_42075[(2)]);
var state_42075__$1 = (function (){var statearr_42079 = state_42075;
(statearr_42079[(7)] = inst_42028__$1);

return statearr_42079;
})();
if(cljs.core.truth_(inst_42028__$1)){
var statearr_42080_42109 = state_42075__$1;
(statearr_42080_42109[(1)] = (5));

} else {
var statearr_42081_42110 = state_42075__$1;
(statearr_42081_42110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42076 === (15))){
var inst_42035 = (state_42075[(8)]);
var inst_42050 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_42035);
var inst_42051 = cljs.core.first.call(null,inst_42050);
var inst_42052 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_42051);
var inst_42053 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_42052)].join('');
var inst_42054 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_42053);
var state_42075__$1 = state_42075;
var statearr_42082_42111 = state_42075__$1;
(statearr_42082_42111[(2)] = inst_42054);

(statearr_42082_42111[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42076 === (13))){
var inst_42059 = (state_42075[(2)]);
var state_42075__$1 = state_42075;
var statearr_42083_42112 = state_42075__$1;
(statearr_42083_42112[(2)] = inst_42059);

(statearr_42083_42112[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42076 === (6))){
var state_42075__$1 = state_42075;
var statearr_42084_42113 = state_42075__$1;
(statearr_42084_42113[(2)] = null);

(statearr_42084_42113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42076 === (17))){
var inst_42057 = (state_42075[(2)]);
var state_42075__$1 = state_42075;
var statearr_42085_42114 = state_42075__$1;
(statearr_42085_42114[(2)] = inst_42057);

(statearr_42085_42114[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42076 === (3))){
var inst_42073 = (state_42075[(2)]);
var state_42075__$1 = state_42075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42075__$1,inst_42073);
} else {
if((state_val_42076 === (12))){
var inst_42034 = (state_42075[(9)]);
var inst_42048 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_42034,opts);
var state_42075__$1 = state_42075;
if(cljs.core.truth_(inst_42048)){
var statearr_42086_42115 = state_42075__$1;
(statearr_42086_42115[(1)] = (15));

} else {
var statearr_42087_42116 = state_42075__$1;
(statearr_42087_42116[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42076 === (2))){
var state_42075__$1 = state_42075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42075__$1,(4),ch);
} else {
if((state_val_42076 === (11))){
var inst_42035 = (state_42075[(8)]);
var inst_42040 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42041 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_42035);
var inst_42042 = cljs.core.async.timeout.call(null,(1000));
var inst_42043 = [inst_42041,inst_42042];
var inst_42044 = (new cljs.core.PersistentVector(null,2,(5),inst_42040,inst_42043,null));
var state_42075__$1 = state_42075;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42075__$1,(14),inst_42044);
} else {
if((state_val_42076 === (9))){
var inst_42035 = (state_42075[(8)]);
var inst_42061 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_42062 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_42035);
var inst_42063 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42062);
var inst_42064 = [cljs.core.str("Not loading: "),cljs.core.str(inst_42063)].join('');
var inst_42065 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_42064);
var state_42075__$1 = (function (){var statearr_42088 = state_42075;
(statearr_42088[(10)] = inst_42061);

return statearr_42088;
})();
var statearr_42089_42117 = state_42075__$1;
(statearr_42089_42117[(2)] = inst_42065);

(statearr_42089_42117[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42076 === (5))){
var inst_42028 = (state_42075[(7)]);
var inst_42030 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_42031 = (new cljs.core.PersistentArrayMap(null,2,inst_42030,null));
var inst_42032 = (new cljs.core.PersistentHashSet(null,inst_42031,null));
var inst_42033 = figwheel.client.focus_msgs.call(null,inst_42032,inst_42028);
var inst_42034 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_42033);
var inst_42035 = cljs.core.first.call(null,inst_42033);
var inst_42036 = figwheel.client.autoload_QMARK_.call(null);
var state_42075__$1 = (function (){var statearr_42090 = state_42075;
(statearr_42090[(9)] = inst_42034);

(statearr_42090[(8)] = inst_42035);

return statearr_42090;
})();
if(cljs.core.truth_(inst_42036)){
var statearr_42091_42118 = state_42075__$1;
(statearr_42091_42118[(1)] = (8));

} else {
var statearr_42092_42119 = state_42075__$1;
(statearr_42092_42119[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42076 === (14))){
var inst_42046 = (state_42075[(2)]);
var state_42075__$1 = state_42075;
var statearr_42093_42120 = state_42075__$1;
(statearr_42093_42120[(2)] = inst_42046);

(statearr_42093_42120[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42076 === (16))){
var state_42075__$1 = state_42075;
var statearr_42094_42121 = state_42075__$1;
(statearr_42094_42121[(2)] = null);

(statearr_42094_42121[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42076 === (10))){
var inst_42067 = (state_42075[(2)]);
var state_42075__$1 = (function (){var statearr_42095 = state_42075;
(statearr_42095[(11)] = inst_42067);

return statearr_42095;
})();
var statearr_42096_42122 = state_42075__$1;
(statearr_42096_42122[(2)] = null);

(statearr_42096_42122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42076 === (8))){
var inst_42034 = (state_42075[(9)]);
var inst_42038 = figwheel.client.reload_file_state_QMARK_.call(null,inst_42034,opts);
var state_42075__$1 = state_42075;
if(cljs.core.truth_(inst_42038)){
var statearr_42097_42123 = state_42075__$1;
(statearr_42097_42123[(1)] = (11));

} else {
var statearr_42098_42124 = state_42075__$1;
(statearr_42098_42124[(1)] = (12));

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
});})(c__34337__auto___42106,ch))
;
return ((function (switch__34322__auto__,c__34337__auto___42106,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__34323__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__34323__auto____0 = (function (){
var statearr_42102 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42102[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__34323__auto__);

(statearr_42102[(1)] = (1));

return statearr_42102;
});
var figwheel$client$file_reloader_plugin_$_state_machine__34323__auto____1 = (function (state_42075){
while(true){
var ret_value__34324__auto__ = (function (){try{while(true){
var result__34325__auto__ = switch__34322__auto__.call(null,state_42075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34325__auto__;
}
break;
}
}catch (e42103){if((e42103 instanceof Object)){
var ex__34326__auto__ = e42103;
var statearr_42104_42125 = state_42075;
(statearr_42104_42125[(5)] = ex__34326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42126 = state_42075;
state_42075 = G__42126;
continue;
} else {
return ret_value__34324__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__34323__auto__ = function(state_42075){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__34323__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__34323__auto____1.call(this,state_42075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__34323__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__34323__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__34323__auto__;
})()
;})(switch__34322__auto__,c__34337__auto___42106,ch))
})();
var state__34339__auto__ = (function (){var statearr_42105 = f__34338__auto__.call(null);
(statearr_42105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34337__auto___42106);

return statearr_42105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34339__auto__);
});})(c__34337__auto___42106,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__42127_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__42127_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_42134 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_42134){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_42132 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_42133 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_42133;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_42132;
}}catch (e42131){if((e42131 instanceof Error)){
var e = e42131;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_42134], null));
} else {
var e = e42131;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_42134))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__42135){
var map__42142 = p__42135;
var map__42142__$1 = ((((!((map__42142 == null)))?((((map__42142.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42142.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42142):map__42142);
var opts = map__42142__$1;
var build_id = cljs.core.get.call(null,map__42142__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__42142,map__42142__$1,opts,build_id){
return (function (p__42144){
var vec__42145 = p__42144;
var map__42146 = cljs.core.nth.call(null,vec__42145,(0),null);
var map__42146__$1 = ((((!((map__42146 == null)))?((((map__42146.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42146.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42146):map__42146);
var msg = map__42146__$1;
var msg_name = cljs.core.get.call(null,map__42146__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__42145,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__42145,map__42146,map__42146__$1,msg,msg_name,_,map__42142,map__42142__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__42145,map__42146,map__42146__$1,msg,msg_name,_,map__42142,map__42142__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__42142,map__42142__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__42152){
var vec__42153 = p__42152;
var map__42154 = cljs.core.nth.call(null,vec__42153,(0),null);
var map__42154__$1 = ((((!((map__42154 == null)))?((((map__42154.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42154.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42154):map__42154);
var msg = map__42154__$1;
var msg_name = cljs.core.get.call(null,map__42154__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__42153,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__42156){
var map__42166 = p__42156;
var map__42166__$1 = ((((!((map__42166 == null)))?((((map__42166.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42166.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42166):map__42166);
var on_compile_warning = cljs.core.get.call(null,map__42166__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__42166__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__42166,map__42166__$1,on_compile_warning,on_compile_fail){
return (function (p__42168){
var vec__42169 = p__42168;
var map__42170 = cljs.core.nth.call(null,vec__42169,(0),null);
var map__42170__$1 = ((((!((map__42170 == null)))?((((map__42170.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42170.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42170):map__42170);
var msg = map__42170__$1;
var msg_name = cljs.core.get.call(null,map__42170__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__42169,(1));
var pred__42172 = cljs.core._EQ_;
var expr__42173 = msg_name;
if(cljs.core.truth_(pred__42172.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__42173))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__42172.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__42173))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__42166,map__42166__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__34337__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34337__auto__,msg_hist,msg_names,msg){
return (function (){
var f__34338__auto__ = (function (){var switch__34322__auto__ = ((function (c__34337__auto__,msg_hist,msg_names,msg){
return (function (state_42381){
var state_val_42382 = (state_42381[(1)]);
if((state_val_42382 === (7))){
var inst_42309 = (state_42381[(2)]);
var state_42381__$1 = state_42381;
if(cljs.core.truth_(inst_42309)){
var statearr_42383_42429 = state_42381__$1;
(statearr_42383_42429[(1)] = (8));

} else {
var statearr_42384_42430 = state_42381__$1;
(statearr_42384_42430[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (20))){
var inst_42375 = (state_42381[(2)]);
var state_42381__$1 = state_42381;
var statearr_42385_42431 = state_42381__$1;
(statearr_42385_42431[(2)] = inst_42375);

(statearr_42385_42431[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (27))){
var inst_42371 = (state_42381[(2)]);
var state_42381__$1 = state_42381;
var statearr_42386_42432 = state_42381__$1;
(statearr_42386_42432[(2)] = inst_42371);

(statearr_42386_42432[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (1))){
var inst_42302 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_42381__$1 = state_42381;
if(cljs.core.truth_(inst_42302)){
var statearr_42387_42433 = state_42381__$1;
(statearr_42387_42433[(1)] = (2));

} else {
var statearr_42388_42434 = state_42381__$1;
(statearr_42388_42434[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (24))){
var inst_42373 = (state_42381[(2)]);
var state_42381__$1 = state_42381;
var statearr_42389_42435 = state_42381__$1;
(statearr_42389_42435[(2)] = inst_42373);

(statearr_42389_42435[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (4))){
var inst_42379 = (state_42381[(2)]);
var state_42381__$1 = state_42381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42381__$1,inst_42379);
} else {
if((state_val_42382 === (15))){
var inst_42377 = (state_42381[(2)]);
var state_42381__$1 = state_42381;
var statearr_42390_42436 = state_42381__$1;
(statearr_42390_42436[(2)] = inst_42377);

(statearr_42390_42436[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (21))){
var inst_42336 = (state_42381[(2)]);
var state_42381__$1 = state_42381;
var statearr_42391_42437 = state_42381__$1;
(statearr_42391_42437[(2)] = inst_42336);

(statearr_42391_42437[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (31))){
var inst_42360 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_42381__$1 = state_42381;
if(cljs.core.truth_(inst_42360)){
var statearr_42392_42438 = state_42381__$1;
(statearr_42392_42438[(1)] = (34));

} else {
var statearr_42393_42439 = state_42381__$1;
(statearr_42393_42439[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (32))){
var inst_42369 = (state_42381[(2)]);
var state_42381__$1 = state_42381;
var statearr_42394_42440 = state_42381__$1;
(statearr_42394_42440[(2)] = inst_42369);

(statearr_42394_42440[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (33))){
var inst_42358 = (state_42381[(2)]);
var state_42381__$1 = state_42381;
var statearr_42395_42441 = state_42381__$1;
(statearr_42395_42441[(2)] = inst_42358);

(statearr_42395_42441[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (13))){
var inst_42323 = figwheel.client.heads_up.clear.call(null);
var state_42381__$1 = state_42381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42381__$1,(16),inst_42323);
} else {
if((state_val_42382 === (22))){
var inst_42340 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42341 = figwheel.client.heads_up.append_message.call(null,inst_42340);
var state_42381__$1 = state_42381;
var statearr_42396_42442 = state_42381__$1;
(statearr_42396_42442[(2)] = inst_42341);

(statearr_42396_42442[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (36))){
var inst_42367 = (state_42381[(2)]);
var state_42381__$1 = state_42381;
var statearr_42397_42443 = state_42381__$1;
(statearr_42397_42443[(2)] = inst_42367);

(statearr_42397_42443[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (29))){
var inst_42351 = (state_42381[(2)]);
var state_42381__$1 = state_42381;
var statearr_42398_42444 = state_42381__$1;
(statearr_42398_42444[(2)] = inst_42351);

(statearr_42398_42444[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (6))){
var inst_42304 = (state_42381[(7)]);
var state_42381__$1 = state_42381;
var statearr_42399_42445 = state_42381__$1;
(statearr_42399_42445[(2)] = inst_42304);

(statearr_42399_42445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (28))){
var inst_42347 = (state_42381[(2)]);
var inst_42348 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42349 = figwheel.client.heads_up.display_warning.call(null,inst_42348);
var state_42381__$1 = (function (){var statearr_42400 = state_42381;
(statearr_42400[(8)] = inst_42347);

return statearr_42400;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42381__$1,(29),inst_42349);
} else {
if((state_val_42382 === (25))){
var inst_42345 = figwheel.client.heads_up.clear.call(null);
var state_42381__$1 = state_42381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42381__$1,(28),inst_42345);
} else {
if((state_val_42382 === (34))){
var inst_42362 = figwheel.client.heads_up.flash_loaded.call(null);
var state_42381__$1 = state_42381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42381__$1,(37),inst_42362);
} else {
if((state_val_42382 === (17))){
var inst_42329 = (state_42381[(2)]);
var state_42381__$1 = state_42381;
var statearr_42401_42446 = state_42381__$1;
(statearr_42401_42446[(2)] = inst_42329);

(statearr_42401_42446[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (3))){
var inst_42321 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_42381__$1 = state_42381;
if(cljs.core.truth_(inst_42321)){
var statearr_42402_42447 = state_42381__$1;
(statearr_42402_42447[(1)] = (13));

} else {
var statearr_42403_42448 = state_42381__$1;
(statearr_42403_42448[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (12))){
var inst_42317 = (state_42381[(2)]);
var state_42381__$1 = state_42381;
var statearr_42404_42449 = state_42381__$1;
(statearr_42404_42449[(2)] = inst_42317);

(statearr_42404_42449[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (2))){
var inst_42304 = (state_42381[(7)]);
var inst_42304__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_42381__$1 = (function (){var statearr_42405 = state_42381;
(statearr_42405[(7)] = inst_42304__$1);

return statearr_42405;
})();
if(cljs.core.truth_(inst_42304__$1)){
var statearr_42406_42450 = state_42381__$1;
(statearr_42406_42450[(1)] = (5));

} else {
var statearr_42407_42451 = state_42381__$1;
(statearr_42407_42451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (23))){
var inst_42343 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_42381__$1 = state_42381;
if(cljs.core.truth_(inst_42343)){
var statearr_42408_42452 = state_42381__$1;
(statearr_42408_42452[(1)] = (25));

} else {
var statearr_42409_42453 = state_42381__$1;
(statearr_42409_42453[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (35))){
var state_42381__$1 = state_42381;
var statearr_42410_42454 = state_42381__$1;
(statearr_42410_42454[(2)] = null);

(statearr_42410_42454[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (19))){
var inst_42338 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_42381__$1 = state_42381;
if(cljs.core.truth_(inst_42338)){
var statearr_42411_42455 = state_42381__$1;
(statearr_42411_42455[(1)] = (22));

} else {
var statearr_42412_42456 = state_42381__$1;
(statearr_42412_42456[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (11))){
var inst_42313 = (state_42381[(2)]);
var state_42381__$1 = state_42381;
var statearr_42413_42457 = state_42381__$1;
(statearr_42413_42457[(2)] = inst_42313);

(statearr_42413_42457[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (9))){
var inst_42315 = figwheel.client.heads_up.clear.call(null);
var state_42381__$1 = state_42381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42381__$1,(12),inst_42315);
} else {
if((state_val_42382 === (5))){
var inst_42306 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_42381__$1 = state_42381;
var statearr_42414_42458 = state_42381__$1;
(statearr_42414_42458[(2)] = inst_42306);

(statearr_42414_42458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (14))){
var inst_42331 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_42381__$1 = state_42381;
if(cljs.core.truth_(inst_42331)){
var statearr_42415_42459 = state_42381__$1;
(statearr_42415_42459[(1)] = (18));

} else {
var statearr_42416_42460 = state_42381__$1;
(statearr_42416_42460[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (26))){
var inst_42353 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_42381__$1 = state_42381;
if(cljs.core.truth_(inst_42353)){
var statearr_42417_42461 = state_42381__$1;
(statearr_42417_42461[(1)] = (30));

} else {
var statearr_42418_42462 = state_42381__$1;
(statearr_42418_42462[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (16))){
var inst_42325 = (state_42381[(2)]);
var inst_42326 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42327 = figwheel.client.heads_up.display_exception.call(null,inst_42326);
var state_42381__$1 = (function (){var statearr_42419 = state_42381;
(statearr_42419[(9)] = inst_42325);

return statearr_42419;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42381__$1,(17),inst_42327);
} else {
if((state_val_42382 === (30))){
var inst_42355 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42356 = figwheel.client.heads_up.display_warning.call(null,inst_42355);
var state_42381__$1 = state_42381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42381__$1,(33),inst_42356);
} else {
if((state_val_42382 === (10))){
var inst_42319 = (state_42381[(2)]);
var state_42381__$1 = state_42381;
var statearr_42420_42463 = state_42381__$1;
(statearr_42420_42463[(2)] = inst_42319);

(statearr_42420_42463[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (18))){
var inst_42333 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42334 = figwheel.client.heads_up.display_exception.call(null,inst_42333);
var state_42381__$1 = state_42381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42381__$1,(21),inst_42334);
} else {
if((state_val_42382 === (37))){
var inst_42364 = (state_42381[(2)]);
var state_42381__$1 = state_42381;
var statearr_42421_42464 = state_42381__$1;
(statearr_42421_42464[(2)] = inst_42364);

(statearr_42421_42464[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (8))){
var inst_42311 = figwheel.client.heads_up.flash_loaded.call(null);
var state_42381__$1 = state_42381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42381__$1,(11),inst_42311);
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
});})(c__34337__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__34322__auto__,c__34337__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34323__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34323__auto____0 = (function (){
var statearr_42425 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42425[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34323__auto__);

(statearr_42425[(1)] = (1));

return statearr_42425;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34323__auto____1 = (function (state_42381){
while(true){
var ret_value__34324__auto__ = (function (){try{while(true){
var result__34325__auto__ = switch__34322__auto__.call(null,state_42381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34325__auto__;
}
break;
}
}catch (e42426){if((e42426 instanceof Object)){
var ex__34326__auto__ = e42426;
var statearr_42427_42465 = state_42381;
(statearr_42427_42465[(5)] = ex__34326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42466 = state_42381;
state_42381 = G__42466;
continue;
} else {
return ret_value__34324__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34323__auto__ = function(state_42381){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34323__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34323__auto____1.call(this,state_42381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34323__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34323__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34323__auto__;
})()
;})(switch__34322__auto__,c__34337__auto__,msg_hist,msg_names,msg))
})();
var state__34339__auto__ = (function (){var statearr_42428 = f__34338__auto__.call(null);
(statearr_42428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34337__auto__);

return statearr_42428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34339__auto__);
});})(c__34337__auto__,msg_hist,msg_names,msg))
);

return c__34337__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__34337__auto___42529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34337__auto___42529,ch){
return (function (){
var f__34338__auto__ = (function (){var switch__34322__auto__ = ((function (c__34337__auto___42529,ch){
return (function (state_42512){
var state_val_42513 = (state_42512[(1)]);
if((state_val_42513 === (1))){
var state_42512__$1 = state_42512;
var statearr_42514_42530 = state_42512__$1;
(statearr_42514_42530[(2)] = null);

(statearr_42514_42530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42513 === (2))){
var state_42512__$1 = state_42512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42512__$1,(4),ch);
} else {
if((state_val_42513 === (3))){
var inst_42510 = (state_42512[(2)]);
var state_42512__$1 = state_42512;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42512__$1,inst_42510);
} else {
if((state_val_42513 === (4))){
var inst_42500 = (state_42512[(7)]);
var inst_42500__$1 = (state_42512[(2)]);
var state_42512__$1 = (function (){var statearr_42515 = state_42512;
(statearr_42515[(7)] = inst_42500__$1);

return statearr_42515;
})();
if(cljs.core.truth_(inst_42500__$1)){
var statearr_42516_42531 = state_42512__$1;
(statearr_42516_42531[(1)] = (5));

} else {
var statearr_42517_42532 = state_42512__$1;
(statearr_42517_42532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42513 === (5))){
var inst_42500 = (state_42512[(7)]);
var inst_42502 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_42500);
var state_42512__$1 = state_42512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42512__$1,(8),inst_42502);
} else {
if((state_val_42513 === (6))){
var state_42512__$1 = state_42512;
var statearr_42518_42533 = state_42512__$1;
(statearr_42518_42533[(2)] = null);

(statearr_42518_42533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42513 === (7))){
var inst_42508 = (state_42512[(2)]);
var state_42512__$1 = state_42512;
var statearr_42519_42534 = state_42512__$1;
(statearr_42519_42534[(2)] = inst_42508);

(statearr_42519_42534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42513 === (8))){
var inst_42504 = (state_42512[(2)]);
var state_42512__$1 = (function (){var statearr_42520 = state_42512;
(statearr_42520[(8)] = inst_42504);

return statearr_42520;
})();
var statearr_42521_42535 = state_42512__$1;
(statearr_42521_42535[(2)] = null);

(statearr_42521_42535[(1)] = (2));


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
});})(c__34337__auto___42529,ch))
;
return ((function (switch__34322__auto__,c__34337__auto___42529,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__34323__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__34323__auto____0 = (function (){
var statearr_42525 = [null,null,null,null,null,null,null,null,null];
(statearr_42525[(0)] = figwheel$client$heads_up_plugin_$_state_machine__34323__auto__);

(statearr_42525[(1)] = (1));

return statearr_42525;
});
var figwheel$client$heads_up_plugin_$_state_machine__34323__auto____1 = (function (state_42512){
while(true){
var ret_value__34324__auto__ = (function (){try{while(true){
var result__34325__auto__ = switch__34322__auto__.call(null,state_42512);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34325__auto__;
}
break;
}
}catch (e42526){if((e42526 instanceof Object)){
var ex__34326__auto__ = e42526;
var statearr_42527_42536 = state_42512;
(statearr_42527_42536[(5)] = ex__34326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42512);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42537 = state_42512;
state_42512 = G__42537;
continue;
} else {
return ret_value__34324__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__34323__auto__ = function(state_42512){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__34323__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__34323__auto____1.call(this,state_42512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__34323__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__34323__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__34323__auto__;
})()
;})(switch__34322__auto__,c__34337__auto___42529,ch))
})();
var state__34339__auto__ = (function (){var statearr_42528 = f__34338__auto__.call(null);
(statearr_42528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34337__auto___42529);

return statearr_42528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34339__auto__);
});})(c__34337__auto___42529,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__34337__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34337__auto__){
return (function (){
var f__34338__auto__ = (function (){var switch__34322__auto__ = ((function (c__34337__auto__){
return (function (state_42558){
var state_val_42559 = (state_42558[(1)]);
if((state_val_42559 === (1))){
var inst_42553 = cljs.core.async.timeout.call(null,(3000));
var state_42558__$1 = state_42558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42558__$1,(2),inst_42553);
} else {
if((state_val_42559 === (2))){
var inst_42555 = (state_42558[(2)]);
var inst_42556 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_42558__$1 = (function (){var statearr_42560 = state_42558;
(statearr_42560[(7)] = inst_42555);

return statearr_42560;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42558__$1,inst_42556);
} else {
return null;
}
}
});})(c__34337__auto__))
;
return ((function (switch__34322__auto__,c__34337__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__34323__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__34323__auto____0 = (function (){
var statearr_42564 = [null,null,null,null,null,null,null,null];
(statearr_42564[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__34323__auto__);

(statearr_42564[(1)] = (1));

return statearr_42564;
});
var figwheel$client$enforce_project_plugin_$_state_machine__34323__auto____1 = (function (state_42558){
while(true){
var ret_value__34324__auto__ = (function (){try{while(true){
var result__34325__auto__ = switch__34322__auto__.call(null,state_42558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34325__auto__;
}
break;
}
}catch (e42565){if((e42565 instanceof Object)){
var ex__34326__auto__ = e42565;
var statearr_42566_42568 = state_42558;
(statearr_42566_42568[(5)] = ex__34326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42569 = state_42558;
state_42558 = G__42569;
continue;
} else {
return ret_value__34324__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__34323__auto__ = function(state_42558){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__34323__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__34323__auto____1.call(this,state_42558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__34323__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__34323__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__34323__auto__;
})()
;})(switch__34322__auto__,c__34337__auto__))
})();
var state__34339__auto__ = (function (){var statearr_42567 = f__34338__auto__.call(null);
(statearr_42567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34337__auto__);

return statearr_42567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34339__auto__);
});})(c__34337__auto__))
);

return c__34337__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__42570){
var map__42577 = p__42570;
var map__42577__$1 = ((((!((map__42577 == null)))?((((map__42577.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42577.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42577):map__42577);
var ed = map__42577__$1;
var formatted_exception = cljs.core.get.call(null,map__42577__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__42577__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__42577__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__42579_42583 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__42580_42584 = null;
var count__42581_42585 = (0);
var i__42582_42586 = (0);
while(true){
if((i__42582_42586 < count__42581_42585)){
var msg_42587 = cljs.core._nth.call(null,chunk__42580_42584,i__42582_42586);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_42587);

var G__42588 = seq__42579_42583;
var G__42589 = chunk__42580_42584;
var G__42590 = count__42581_42585;
var G__42591 = (i__42582_42586 + (1));
seq__42579_42583 = G__42588;
chunk__42580_42584 = G__42589;
count__42581_42585 = G__42590;
i__42582_42586 = G__42591;
continue;
} else {
var temp__4657__auto___42592 = cljs.core.seq.call(null,seq__42579_42583);
if(temp__4657__auto___42592){
var seq__42579_42593__$1 = temp__4657__auto___42592;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42579_42593__$1)){
var c__30490__auto___42594 = cljs.core.chunk_first.call(null,seq__42579_42593__$1);
var G__42595 = cljs.core.chunk_rest.call(null,seq__42579_42593__$1);
var G__42596 = c__30490__auto___42594;
var G__42597 = cljs.core.count.call(null,c__30490__auto___42594);
var G__42598 = (0);
seq__42579_42583 = G__42595;
chunk__42580_42584 = G__42596;
count__42581_42585 = G__42597;
i__42582_42586 = G__42598;
continue;
} else {
var msg_42599 = cljs.core.first.call(null,seq__42579_42593__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_42599);

var G__42600 = cljs.core.next.call(null,seq__42579_42593__$1);
var G__42601 = null;
var G__42602 = (0);
var G__42603 = (0);
seq__42579_42583 = G__42600;
chunk__42580_42584 = G__42601;
count__42581_42585 = G__42602;
i__42582_42586 = G__42603;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__42604){
var map__42607 = p__42604;
var map__42607__$1 = ((((!((map__42607 == null)))?((((map__42607.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42607.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42607):map__42607);
var w = map__42607__$1;
var message = cljs.core.get.call(null,map__42607__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__29667__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__29667__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__29667__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__42615 = cljs.core.seq.call(null,plugins);
var chunk__42616 = null;
var count__42617 = (0);
var i__42618 = (0);
while(true){
if((i__42618 < count__42617)){
var vec__42619 = cljs.core._nth.call(null,chunk__42616,i__42618);
var k = cljs.core.nth.call(null,vec__42619,(0),null);
var plugin = cljs.core.nth.call(null,vec__42619,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42621 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42615,chunk__42616,count__42617,i__42618,pl_42621,vec__42619,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_42621.call(null,msg_hist);
});})(seq__42615,chunk__42616,count__42617,i__42618,pl_42621,vec__42619,k,plugin))
);
} else {
}

var G__42622 = seq__42615;
var G__42623 = chunk__42616;
var G__42624 = count__42617;
var G__42625 = (i__42618 + (1));
seq__42615 = G__42622;
chunk__42616 = G__42623;
count__42617 = G__42624;
i__42618 = G__42625;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42615);
if(temp__4657__auto__){
var seq__42615__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42615__$1)){
var c__30490__auto__ = cljs.core.chunk_first.call(null,seq__42615__$1);
var G__42626 = cljs.core.chunk_rest.call(null,seq__42615__$1);
var G__42627 = c__30490__auto__;
var G__42628 = cljs.core.count.call(null,c__30490__auto__);
var G__42629 = (0);
seq__42615 = G__42626;
chunk__42616 = G__42627;
count__42617 = G__42628;
i__42618 = G__42629;
continue;
} else {
var vec__42620 = cljs.core.first.call(null,seq__42615__$1);
var k = cljs.core.nth.call(null,vec__42620,(0),null);
var plugin = cljs.core.nth.call(null,vec__42620,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42630 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42615,chunk__42616,count__42617,i__42618,pl_42630,vec__42620,k,plugin,seq__42615__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_42630.call(null,msg_hist);
});})(seq__42615,chunk__42616,count__42617,i__42618,pl_42630,vec__42620,k,plugin,seq__42615__$1,temp__4657__auto__))
);
} else {
}

var G__42631 = cljs.core.next.call(null,seq__42615__$1);
var G__42632 = null;
var G__42633 = (0);
var G__42634 = (0);
seq__42615 = G__42631;
chunk__42616 = G__42632;
count__42617 = G__42633;
i__42618 = G__42634;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args42635 = [];
var len__30749__auto___42638 = arguments.length;
var i__30750__auto___42639 = (0);
while(true){
if((i__30750__auto___42639 < len__30749__auto___42638)){
args42635.push((arguments[i__30750__auto___42639]));

var G__42640 = (i__30750__auto___42639 + (1));
i__30750__auto___42639 = G__42640;
continue;
} else {
}
break;
}

var G__42637 = args42635.length;
switch (G__42637) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42635.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__30756__auto__ = [];
var len__30749__auto___42646 = arguments.length;
var i__30750__auto___42647 = (0);
while(true){
if((i__30750__auto___42647 < len__30749__auto___42646)){
args__30756__auto__.push((arguments[i__30750__auto___42647]));

var G__42648 = (i__30750__auto___42647 + (1));
i__30750__auto___42647 = G__42648;
continue;
} else {
}
break;
}

var argseq__30757__auto__ = ((((0) < args__30756__auto__.length))?(new cljs.core.IndexedSeq(args__30756__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__30757__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__42643){
var map__42644 = p__42643;
var map__42644__$1 = ((((!((map__42644 == null)))?((((map__42644.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42644.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42644):map__42644);
var opts = map__42644__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq42642){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42642));
});

//# sourceMappingURL=client.js.map?rel=1466782848881