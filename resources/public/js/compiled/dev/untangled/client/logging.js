// Compiled by ClojureScript 1.8.51 {}
goog.provide('untangled.client.logging');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('om.next');
goog.require('goog.log');
goog.require('goog.debug.Logger.Level');
untangled.client.logging.set_level = (function untangled$client$logging$set_level(log_level){

return om.next._STAR_logger_STAR_.setLevel(goog.debug.Logger.Level.getPredefinedLevel((function (){var G__33407 = (((log_level instanceof cljs.core.Keyword))?log_level.fqn:null);
switch (G__33407) {
case "all":
return "ALL";

break;
case "debug":
return "FINE";

break;
case "info":
return "INFO";

break;
case "warn":
return "WARNING";

break;
case "error":
return "SEVERE";

break;
case "none":
return "OFF";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(log_level)].join('')));

}
})()));
});
/**
 * Include a pretty-printed cljs value as a string with the given text message.
 */
untangled.client.logging.value_message = (function untangled$client$logging$value_message(msg,val){
return [cljs.core.str(msg),cljs.core.str(":\n"),cljs.core.str((function (){var sb__30665__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_33411_33413 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_33412_33414 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_33411_33413,_STAR_print_fn_STAR_33412_33414,sb__30665__auto__){
return (function (x__30666__auto__){
return sb__30665__auto__.append(x__30666__auto__);
});})(_STAR_print_newline_STAR_33411_33413,_STAR_print_fn_STAR_33412_33414,sb__30665__auto__))
;

try{cljs.pprint.pprint.call(null,val);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_33412_33414;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_33411_33413;
}
return [cljs.core.str(sb__30665__auto__)].join('');
})())].join('');
});
/**
 * Print a debug message which includes a value.
 *   Returns the value (like identity) so it can be harmlessly nested in expressions.
 */
untangled.client.logging.debug = (function untangled$client$logging$debug(var_args){
var args33415 = [];
var len__30749__auto___33418 = arguments.length;
var i__30750__auto___33419 = (0);
while(true){
if((i__30750__auto___33419 < len__30749__auto___33418)){
args33415.push((arguments[i__30750__auto___33419]));

var G__33420 = (i__30750__auto___33419 + (1));
i__30750__auto___33419 = G__33420;
continue;
} else {
}
break;
}

var G__33417 = args33415.length;
switch (G__33417) {
case 1:
return untangled.client.logging.debug.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.logging.debug.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33415.length)].join('')));

}
});

untangled.client.logging.debug.cljs$core$IFn$_invoke$arity$1 = (function (value){
goog.log.fine(om.next._STAR_logger_STAR_,untangled.client.logging.value_message.call(null,"DEBUG",value));

return value;
});

untangled.client.logging.debug.cljs$core$IFn$_invoke$arity$2 = (function (msg,value){
goog.log.fine(om.next._STAR_logger_STAR_,untangled.client.logging.value_message.call(null,msg,value));

return value;
});

untangled.client.logging.debug.cljs$lang$maxFixedArity = 2;
untangled.client.logging.info = (function untangled$client$logging$info(var_args){
var args__30756__auto__ = [];
var len__30749__auto___33423 = arguments.length;
var i__30750__auto___33424 = (0);
while(true){
if((i__30750__auto___33424 < len__30749__auto___33423)){
args__30756__auto__.push((arguments[i__30750__auto___33424]));

var G__33425 = (i__30750__auto___33424 + (1));
i__30750__auto___33424 = G__33425;
continue;
} else {
}
break;
}

var argseq__30757__auto__ = ((((0) < args__30756__auto__.length))?(new cljs.core.IndexedSeq(args__30756__auto__.slice((0)),(0),null)):null);
return untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(argseq__30757__auto__);
});

untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic = (function (data){
return goog.log.info(om.next._STAR_logger_STAR_,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",data)));
});

untangled.client.logging.info.cljs$lang$maxFixedArity = (0);

untangled.client.logging.info.cljs$lang$applyTo = (function (seq33422){
return untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33422));
});
untangled.client.logging.warn = (function untangled$client$logging$warn(var_args){
var args__30756__auto__ = [];
var len__30749__auto___33427 = arguments.length;
var i__30750__auto___33428 = (0);
while(true){
if((i__30750__auto___33428 < len__30749__auto___33427)){
args__30756__auto__.push((arguments[i__30750__auto___33428]));

var G__33429 = (i__30750__auto___33428 + (1));
i__30750__auto___33428 = G__33429;
continue;
} else {
}
break;
}

var argseq__30757__auto__ = ((((0) < args__30756__auto__.length))?(new cljs.core.IndexedSeq(args__30756__auto__.slice((0)),(0),null)):null);
return untangled.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__30757__auto__);
});

untangled.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic = (function (data){
return goog.log.warning(om.next._STAR_logger_STAR_,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",data)));
});

untangled.client.logging.warn.cljs$lang$maxFixedArity = (0);

untangled.client.logging.warn.cljs$lang$applyTo = (function (seq33426){
return untangled.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33426));
});
untangled.client.logging.error = (function untangled$client$logging$error(var_args){
var args__30756__auto__ = [];
var len__30749__auto___33431 = arguments.length;
var i__30750__auto___33432 = (0);
while(true){
if((i__30750__auto___33432 < len__30749__auto___33431)){
args__30756__auto__.push((arguments[i__30750__auto___33432]));

var G__33433 = (i__30750__auto___33432 + (1));
i__30750__auto___33432 = G__33433;
continue;
} else {
}
break;
}

var argseq__30757__auto__ = ((((0) < args__30756__auto__.length))?(new cljs.core.IndexedSeq(args__30756__auto__.slice((0)),(0),null)):null);
return untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(argseq__30757__auto__);
});

untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic = (function (data){
return goog.log.error(om.next._STAR_logger_STAR_,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",data)));
});

untangled.client.logging.error.cljs$lang$maxFixedArity = (0);

untangled.client.logging.error.cljs$lang$applyTo = (function (seq33430){
return untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33430));
});

//# sourceMappingURL=logging.js.map?rel=1466782835477