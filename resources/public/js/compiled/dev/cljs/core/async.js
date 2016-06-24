// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args36715 = [];
var len__30749__auto___36721 = arguments.length;
var i__30750__auto___36722 = (0);
while(true){
if((i__30750__auto___36722 < len__30749__auto___36721)){
args36715.push((arguments[i__30750__auto___36722]));

var G__36723 = (i__30750__auto___36722 + (1));
i__30750__auto___36722 = G__36723;
continue;
} else {
}
break;
}

var G__36717 = args36715.length;
switch (G__36717) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36715.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async36718 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36718 = (function (f,blockable,meta36719){
this.f = f;
this.blockable = blockable;
this.meta36719 = meta36719;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36720,meta36719__$1){
var self__ = this;
var _36720__$1 = this;
return (new cljs.core.async.t_cljs$core$async36718(self__.f,self__.blockable,meta36719__$1));
});

cljs.core.async.t_cljs$core$async36718.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36720){
var self__ = this;
var _36720__$1 = this;
return self__.meta36719;
});

cljs.core.async.t_cljs$core$async36718.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async36718.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async36718.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async36718.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async36718.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta36719","meta36719",397075684,null)], null);
});

cljs.core.async.t_cljs$core$async36718.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36718.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36718";

cljs.core.async.t_cljs$core$async36718.cljs$lang$ctorPrWriter = (function (this__30285__auto__,writer__30286__auto__,opt__30287__auto__){
return cljs.core._write.call(null,writer__30286__auto__,"cljs.core.async/t_cljs$core$async36718");
});

cljs.core.async.__GT_t_cljs$core$async36718 = (function cljs$core$async$__GT_t_cljs$core$async36718(f__$1,blockable__$1,meta36719){
return (new cljs.core.async.t_cljs$core$async36718(f__$1,blockable__$1,meta36719));
});

}

return (new cljs.core.async.t_cljs$core$async36718(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args36727 = [];
var len__30749__auto___36730 = arguments.length;
var i__30750__auto___36731 = (0);
while(true){
if((i__30750__auto___36731 < len__30749__auto___36730)){
args36727.push((arguments[i__30750__auto___36731]));

var G__36732 = (i__30750__auto___36731 + (1));
i__30750__auto___36731 = G__36732;
continue;
} else {
}
break;
}

var G__36729 = args36727.length;
switch (G__36729) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36727.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args36734 = [];
var len__30749__auto___36737 = arguments.length;
var i__30750__auto___36738 = (0);
while(true){
if((i__30750__auto___36738 < len__30749__auto___36737)){
args36734.push((arguments[i__30750__auto___36738]));

var G__36739 = (i__30750__auto___36738 + (1));
i__30750__auto___36738 = G__36739;
continue;
} else {
}
break;
}

var G__36736 = args36734.length;
switch (G__36736) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36734.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args36741 = [];
var len__30749__auto___36744 = arguments.length;
var i__30750__auto___36745 = (0);
while(true){
if((i__30750__auto___36745 < len__30749__auto___36744)){
args36741.push((arguments[i__30750__auto___36745]));

var G__36746 = (i__30750__auto___36745 + (1));
i__30750__auto___36745 = G__36746;
continue;
} else {
}
break;
}

var G__36743 = args36741.length;
switch (G__36743) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36741.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_36748 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_36748);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_36748,ret){
return (function (){
return fn1.call(null,val_36748);
});})(val_36748,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args36749 = [];
var len__30749__auto___36752 = arguments.length;
var i__30750__auto___36753 = (0);
while(true){
if((i__30750__auto___36753 < len__30749__auto___36752)){
args36749.push((arguments[i__30750__auto___36753]));

var G__36754 = (i__30750__auto___36753 + (1));
i__30750__auto___36753 = G__36754;
continue;
} else {
}
break;
}

var G__36751 = args36749.length;
switch (G__36751) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36749.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__30594__auto___36756 = n;
var x_36757 = (0);
while(true){
if((x_36757 < n__30594__auto___36756)){
(a[x_36757] = (0));

var G__36758 = (x_36757 + (1));
x_36757 = G__36758;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__36759 = (i + (1));
i = G__36759;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async36763 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36763 = (function (alt_flag,flag,meta36764){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta36764 = meta36764;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_36765,meta36764__$1){
var self__ = this;
var _36765__$1 = this;
return (new cljs.core.async.t_cljs$core$async36763(self__.alt_flag,self__.flag,meta36764__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async36763.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_36765){
var self__ = this;
var _36765__$1 = this;
return self__.meta36764;
});})(flag))
;

cljs.core.async.t_cljs$core$async36763.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async36763.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async36763.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async36763.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async36763.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta36764","meta36764",-824342184,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async36763.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36763.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36763";

cljs.core.async.t_cljs$core$async36763.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30285__auto__,writer__30286__auto__,opt__30287__auto__){
return cljs.core._write.call(null,writer__30286__auto__,"cljs.core.async/t_cljs$core$async36763");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async36763 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async36763(alt_flag__$1,flag__$1,meta36764){
return (new cljs.core.async.t_cljs$core$async36763(alt_flag__$1,flag__$1,meta36764));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async36763(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async36769 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36769 = (function (alt_handler,flag,cb,meta36770){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta36770 = meta36770;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36769.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36771,meta36770__$1){
var self__ = this;
var _36771__$1 = this;
return (new cljs.core.async.t_cljs$core$async36769(self__.alt_handler,self__.flag,self__.cb,meta36770__$1));
});

cljs.core.async.t_cljs$core$async36769.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36771){
var self__ = this;
var _36771__$1 = this;
return self__.meta36770;
});

cljs.core.async.t_cljs$core$async36769.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async36769.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async36769.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async36769.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async36769.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta36770","meta36770",736331124,null)], null);
});

cljs.core.async.t_cljs$core$async36769.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36769.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36769";

cljs.core.async.t_cljs$core$async36769.cljs$lang$ctorPrWriter = (function (this__30285__auto__,writer__30286__auto__,opt__30287__auto__){
return cljs.core._write.call(null,writer__30286__auto__,"cljs.core.async/t_cljs$core$async36769");
});

cljs.core.async.__GT_t_cljs$core$async36769 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async36769(alt_handler__$1,flag__$1,cb__$1,meta36770){
return (new cljs.core.async.t_cljs$core$async36769(alt_handler__$1,flag__$1,cb__$1,meta36770));
});

}

return (new cljs.core.async.t_cljs$core$async36769(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36772_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36772_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36773_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36773_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__29679__auto__ = wport;
if(cljs.core.truth_(or__29679__auto__)){
return or__29679__auto__;
} else {
return port;
}
})()], null));
} else {
var G__36774 = (i + (1));
i = G__36774;
continue;
}
} else {
return null;
}
break;
}
})();
var or__29679__auto__ = ret;
if(cljs.core.truth_(or__29679__auto__)){
return or__29679__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__29667__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__29667__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__29667__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__30756__auto__ = [];
var len__30749__auto___36780 = arguments.length;
var i__30750__auto___36781 = (0);
while(true){
if((i__30750__auto___36781 < len__30749__auto___36780)){
args__30756__auto__.push((arguments[i__30750__auto___36781]));

var G__36782 = (i__30750__auto___36781 + (1));
i__30750__auto___36781 = G__36782;
continue;
} else {
}
break;
}

var argseq__30757__auto__ = ((((1) < args__30756__auto__.length))?(new cljs.core.IndexedSeq(args__30756__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30757__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__36777){
var map__36778 = p__36777;
var map__36778__$1 = ((((!((map__36778 == null)))?((((map__36778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36778):map__36778);
var opts = map__36778__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq36775){
var G__36776 = cljs.core.first.call(null,seq36775);
var seq36775__$1 = cljs.core.next.call(null,seq36775);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36776,seq36775__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args36783 = [];
var len__30749__auto___36833 = arguments.length;
var i__30750__auto___36834 = (0);
while(true){
if((i__30750__auto___36834 < len__30749__auto___36833)){
args36783.push((arguments[i__30750__auto___36834]));

var G__36835 = (i__30750__auto___36834 + (1));
i__30750__auto___36834 = G__36835;
continue;
} else {
}
break;
}

var G__36785 = args36783.length;
switch (G__36785) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36783.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__34337__auto___36837 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34337__auto___36837){
return (function (){
var f__34338__auto__ = (function (){var switch__34322__auto__ = ((function (c__34337__auto___36837){
return (function (state_36809){
var state_val_36810 = (state_36809[(1)]);
if((state_val_36810 === (7))){
var inst_36805 = (state_36809[(2)]);
var state_36809__$1 = state_36809;
var statearr_36811_36838 = state_36809__$1;
(statearr_36811_36838[(2)] = inst_36805);

(statearr_36811_36838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36810 === (1))){
var state_36809__$1 = state_36809;
var statearr_36812_36839 = state_36809__$1;
(statearr_36812_36839[(2)] = null);

(statearr_36812_36839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36810 === (4))){
var inst_36788 = (state_36809[(7)]);
var inst_36788__$1 = (state_36809[(2)]);
var inst_36789 = (inst_36788__$1 == null);
var state_36809__$1 = (function (){var statearr_36813 = state_36809;
(statearr_36813[(7)] = inst_36788__$1);

return statearr_36813;
})();
if(cljs.core.truth_(inst_36789)){
var statearr_36814_36840 = state_36809__$1;
(statearr_36814_36840[(1)] = (5));

} else {
var statearr_36815_36841 = state_36809__$1;
(statearr_36815_36841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36810 === (13))){
var state_36809__$1 = state_36809;
var statearr_36816_36842 = state_36809__$1;
(statearr_36816_36842[(2)] = null);

(statearr_36816_36842[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36810 === (6))){
var inst_36788 = (state_36809[(7)]);
var state_36809__$1 = state_36809;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36809__$1,(11),to,inst_36788);
} else {
if((state_val_36810 === (3))){
var inst_36807 = (state_36809[(2)]);
var state_36809__$1 = state_36809;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36809__$1,inst_36807);
} else {
if((state_val_36810 === (12))){
var state_36809__$1 = state_36809;
var statearr_36817_36843 = state_36809__$1;
(statearr_36817_36843[(2)] = null);

(statearr_36817_36843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36810 === (2))){
var state_36809__$1 = state_36809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36809__$1,(4),from);
} else {
if((state_val_36810 === (11))){
var inst_36798 = (state_36809[(2)]);
var state_36809__$1 = state_36809;
if(cljs.core.truth_(inst_36798)){
var statearr_36818_36844 = state_36809__$1;
(statearr_36818_36844[(1)] = (12));

} else {
var statearr_36819_36845 = state_36809__$1;
(statearr_36819_36845[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36810 === (9))){
var state_36809__$1 = state_36809;
var statearr_36820_36846 = state_36809__$1;
(statearr_36820_36846[(2)] = null);

(statearr_36820_36846[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36810 === (5))){
var state_36809__$1 = state_36809;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36821_36847 = state_36809__$1;
(statearr_36821_36847[(1)] = (8));

} else {
var statearr_36822_36848 = state_36809__$1;
(statearr_36822_36848[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36810 === (14))){
var inst_36803 = (state_36809[(2)]);
var state_36809__$1 = state_36809;
var statearr_36823_36849 = state_36809__$1;
(statearr_36823_36849[(2)] = inst_36803);

(statearr_36823_36849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36810 === (10))){
var inst_36795 = (state_36809[(2)]);
var state_36809__$1 = state_36809;
var statearr_36824_36850 = state_36809__$1;
(statearr_36824_36850[(2)] = inst_36795);

(statearr_36824_36850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36810 === (8))){
var inst_36792 = cljs.core.async.close_BANG_.call(null,to);
var state_36809__$1 = state_36809;
var statearr_36825_36851 = state_36809__$1;
(statearr_36825_36851[(2)] = inst_36792);

(statearr_36825_36851[(1)] = (10));


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
});})(c__34337__auto___36837))
;
return ((function (switch__34322__auto__,c__34337__auto___36837){
return (function() {
var cljs$core$async$state_machine__34323__auto__ = null;
var cljs$core$async$state_machine__34323__auto____0 = (function (){
var statearr_36829 = [null,null,null,null,null,null,null,null];
(statearr_36829[(0)] = cljs$core$async$state_machine__34323__auto__);

(statearr_36829[(1)] = (1));

return statearr_36829;
});
var cljs$core$async$state_machine__34323__auto____1 = (function (state_36809){
while(true){
var ret_value__34324__auto__ = (function (){try{while(true){
var result__34325__auto__ = switch__34322__auto__.call(null,state_36809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34325__auto__;
}
break;
}
}catch (e36830){if((e36830 instanceof Object)){
var ex__34326__auto__ = e36830;
var statearr_36831_36852 = state_36809;
(statearr_36831_36852[(5)] = ex__34326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36853 = state_36809;
state_36809 = G__36853;
continue;
} else {
return ret_value__34324__auto__;
}
break;
}
});
cljs$core$async$state_machine__34323__auto__ = function(state_36809){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34323__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34323__auto____1.call(this,state_36809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34323__auto____0;
cljs$core$async$state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34323__auto____1;
return cljs$core$async$state_machine__34323__auto__;
})()
;})(switch__34322__auto__,c__34337__auto___36837))
})();
var state__34339__auto__ = (function (){var statearr_36832 = f__34338__auto__.call(null);
(statearr_36832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34337__auto___36837);

return statearr_36832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34339__auto__);
});})(c__34337__auto___36837))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__37037){
var vec__37038 = p__37037;
var v = cljs.core.nth.call(null,vec__37038,(0),null);
var p = cljs.core.nth.call(null,vec__37038,(1),null);
var job = vec__37038;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__34337__auto___37220 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34337__auto___37220,res,vec__37038,v,p,job,jobs,results){
return (function (){
var f__34338__auto__ = (function (){var switch__34322__auto__ = ((function (c__34337__auto___37220,res,vec__37038,v,p,job,jobs,results){
return (function (state_37043){
var state_val_37044 = (state_37043[(1)]);
if((state_val_37044 === (1))){
var state_37043__$1 = state_37043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37043__$1,(2),res,v);
} else {
if((state_val_37044 === (2))){
var inst_37040 = (state_37043[(2)]);
var inst_37041 = cljs.core.async.close_BANG_.call(null,res);
var state_37043__$1 = (function (){var statearr_37045 = state_37043;
(statearr_37045[(7)] = inst_37040);

return statearr_37045;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37043__$1,inst_37041);
} else {
return null;
}
}
});})(c__34337__auto___37220,res,vec__37038,v,p,job,jobs,results))
;
return ((function (switch__34322__auto__,c__34337__auto___37220,res,vec__37038,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34323__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34323__auto____0 = (function (){
var statearr_37049 = [null,null,null,null,null,null,null,null];
(statearr_37049[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34323__auto__);

(statearr_37049[(1)] = (1));

return statearr_37049;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34323__auto____1 = (function (state_37043){
while(true){
var ret_value__34324__auto__ = (function (){try{while(true){
var result__34325__auto__ = switch__34322__auto__.call(null,state_37043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34325__auto__;
}
break;
}
}catch (e37050){if((e37050 instanceof Object)){
var ex__34326__auto__ = e37050;
var statearr_37051_37221 = state_37043;
(statearr_37051_37221[(5)] = ex__34326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37222 = state_37043;
state_37043 = G__37222;
continue;
} else {
return ret_value__34324__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34323__auto__ = function(state_37043){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34323__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34323__auto____1.call(this,state_37043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34323__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34323__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34323__auto__;
})()
;})(switch__34322__auto__,c__34337__auto___37220,res,vec__37038,v,p,job,jobs,results))
})();
var state__34339__auto__ = (function (){var statearr_37052 = f__34338__auto__.call(null);
(statearr_37052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34337__auto___37220);

return statearr_37052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34339__auto__);
});})(c__34337__auto___37220,res,vec__37038,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__37053){
var vec__37054 = p__37053;
var v = cljs.core.nth.call(null,vec__37054,(0),null);
var p = cljs.core.nth.call(null,vec__37054,(1),null);
var job = vec__37054;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__30594__auto___37223 = n;
var __37224 = (0);
while(true){
if((__37224 < n__30594__auto___37223)){
var G__37055_37225 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__37055_37225) {
case "compute":
var c__34337__auto___37227 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37224,c__34337__auto___37227,G__37055_37225,n__30594__auto___37223,jobs,results,process,async){
return (function (){
var f__34338__auto__ = (function (){var switch__34322__auto__ = ((function (__37224,c__34337__auto___37227,G__37055_37225,n__30594__auto___37223,jobs,results,process,async){
return (function (state_37068){
var state_val_37069 = (state_37068[(1)]);
if((state_val_37069 === (1))){
var state_37068__$1 = state_37068;
var statearr_37070_37228 = state_37068__$1;
(statearr_37070_37228[(2)] = null);

(statearr_37070_37228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37069 === (2))){
var state_37068__$1 = state_37068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37068__$1,(4),jobs);
} else {
if((state_val_37069 === (3))){
var inst_37066 = (state_37068[(2)]);
var state_37068__$1 = state_37068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37068__$1,inst_37066);
} else {
if((state_val_37069 === (4))){
var inst_37058 = (state_37068[(2)]);
var inst_37059 = process.call(null,inst_37058);
var state_37068__$1 = state_37068;
if(cljs.core.truth_(inst_37059)){
var statearr_37071_37229 = state_37068__$1;
(statearr_37071_37229[(1)] = (5));

} else {
var statearr_37072_37230 = state_37068__$1;
(statearr_37072_37230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37069 === (5))){
var state_37068__$1 = state_37068;
var statearr_37073_37231 = state_37068__$1;
(statearr_37073_37231[(2)] = null);

(statearr_37073_37231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37069 === (6))){
var state_37068__$1 = state_37068;
var statearr_37074_37232 = state_37068__$1;
(statearr_37074_37232[(2)] = null);

(statearr_37074_37232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37069 === (7))){
var inst_37064 = (state_37068[(2)]);
var state_37068__$1 = state_37068;
var statearr_37075_37233 = state_37068__$1;
(statearr_37075_37233[(2)] = inst_37064);

(statearr_37075_37233[(1)] = (3));


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
});})(__37224,c__34337__auto___37227,G__37055_37225,n__30594__auto___37223,jobs,results,process,async))
;
return ((function (__37224,switch__34322__auto__,c__34337__auto___37227,G__37055_37225,n__30594__auto___37223,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34323__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34323__auto____0 = (function (){
var statearr_37079 = [null,null,null,null,null,null,null];
(statearr_37079[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34323__auto__);

(statearr_37079[(1)] = (1));

return statearr_37079;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34323__auto____1 = (function (state_37068){
while(true){
var ret_value__34324__auto__ = (function (){try{while(true){
var result__34325__auto__ = switch__34322__auto__.call(null,state_37068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34325__auto__;
}
break;
}
}catch (e37080){if((e37080 instanceof Object)){
var ex__34326__auto__ = e37080;
var statearr_37081_37234 = state_37068;
(statearr_37081_37234[(5)] = ex__34326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37235 = state_37068;
state_37068 = G__37235;
continue;
} else {
return ret_value__34324__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34323__auto__ = function(state_37068){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34323__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34323__auto____1.call(this,state_37068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34323__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34323__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34323__auto__;
})()
;})(__37224,switch__34322__auto__,c__34337__auto___37227,G__37055_37225,n__30594__auto___37223,jobs,results,process,async))
})();
var state__34339__auto__ = (function (){var statearr_37082 = f__34338__auto__.call(null);
(statearr_37082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34337__auto___37227);

return statearr_37082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34339__auto__);
});})(__37224,c__34337__auto___37227,G__37055_37225,n__30594__auto___37223,jobs,results,process,async))
);


break;
case "async":
var c__34337__auto___37236 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37224,c__34337__auto___37236,G__37055_37225,n__30594__auto___37223,jobs,results,process,async){
return (function (){
var f__34338__auto__ = (function (){var switch__34322__auto__ = ((function (__37224,c__34337__auto___37236,G__37055_37225,n__30594__auto___37223,jobs,results,process,async){
return (function (state_37095){
var state_val_37096 = (state_37095[(1)]);
if((state_val_37096 === (1))){
var state_37095__$1 = state_37095;
var statearr_37097_37237 = state_37095__$1;
(statearr_37097_37237[(2)] = null);

(statearr_37097_37237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37096 === (2))){
var state_37095__$1 = state_37095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37095__$1,(4),jobs);
} else {
if((state_val_37096 === (3))){
var inst_37093 = (state_37095[(2)]);
var state_37095__$1 = state_37095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37095__$1,inst_37093);
} else {
if((state_val_37096 === (4))){
var inst_37085 = (state_37095[(2)]);
var inst_37086 = async.call(null,inst_37085);
var state_37095__$1 = state_37095;
if(cljs.core.truth_(inst_37086)){
var statearr_37098_37238 = state_37095__$1;
(statearr_37098_37238[(1)] = (5));

} else {
var statearr_37099_37239 = state_37095__$1;
(statearr_37099_37239[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37096 === (5))){
var state_37095__$1 = state_37095;
var statearr_37100_37240 = state_37095__$1;
(statearr_37100_37240[(2)] = null);

(statearr_37100_37240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37096 === (6))){
var state_37095__$1 = state_37095;
var statearr_37101_37241 = state_37095__$1;
(statearr_37101_37241[(2)] = null);

(statearr_37101_37241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37096 === (7))){
var inst_37091 = (state_37095[(2)]);
var state_37095__$1 = state_37095;
var statearr_37102_37242 = state_37095__$1;
(statearr_37102_37242[(2)] = inst_37091);

(statearr_37102_37242[(1)] = (3));


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
});})(__37224,c__34337__auto___37236,G__37055_37225,n__30594__auto___37223,jobs,results,process,async))
;
return ((function (__37224,switch__34322__auto__,c__34337__auto___37236,G__37055_37225,n__30594__auto___37223,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34323__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34323__auto____0 = (function (){
var statearr_37106 = [null,null,null,null,null,null,null];
(statearr_37106[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34323__auto__);

(statearr_37106[(1)] = (1));

return statearr_37106;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34323__auto____1 = (function (state_37095){
while(true){
var ret_value__34324__auto__ = (function (){try{while(true){
var result__34325__auto__ = switch__34322__auto__.call(null,state_37095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34325__auto__;
}
break;
}
}catch (e37107){if((e37107 instanceof Object)){
var ex__34326__auto__ = e37107;
var statearr_37108_37243 = state_37095;
(statearr_37108_37243[(5)] = ex__34326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37244 = state_37095;
state_37095 = G__37244;
continue;
} else {
return ret_value__34324__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34323__auto__ = function(state_37095){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34323__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34323__auto____1.call(this,state_37095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34323__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34323__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34323__auto__;
})()
;})(__37224,switch__34322__auto__,c__34337__auto___37236,G__37055_37225,n__30594__auto___37223,jobs,results,process,async))
})();
var state__34339__auto__ = (function (){var statearr_37109 = f__34338__auto__.call(null);
(statearr_37109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34337__auto___37236);

return statearr_37109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34339__auto__);
});})(__37224,c__34337__auto___37236,G__37055_37225,n__30594__auto___37223,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__37245 = (__37224 + (1));
__37224 = G__37245;
continue;
} else {
}
break;
}

var c__34337__auto___37246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34337__auto___37246,jobs,results,process,async){
return (function (){
var f__34338__auto__ = (function (){var switch__34322__auto__ = ((function (c__34337__auto___37246,jobs,results,process,async){
return (function (state_37131){
var state_val_37132 = (state_37131[(1)]);
if((state_val_37132 === (1))){
var state_37131__$1 = state_37131;
var statearr_37133_37247 = state_37131__$1;
(statearr_37133_37247[(2)] = null);

(statearr_37133_37247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37132 === (2))){
var state_37131__$1 = state_37131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37131__$1,(4),from);
} else {
if((state_val_37132 === (3))){
var inst_37129 = (state_37131[(2)]);
var state_37131__$1 = state_37131;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37131__$1,inst_37129);
} else {
if((state_val_37132 === (4))){
var inst_37112 = (state_37131[(7)]);
var inst_37112__$1 = (state_37131[(2)]);
var inst_37113 = (inst_37112__$1 == null);
var state_37131__$1 = (function (){var statearr_37134 = state_37131;
(statearr_37134[(7)] = inst_37112__$1);

return statearr_37134;
})();
if(cljs.core.truth_(inst_37113)){
var statearr_37135_37248 = state_37131__$1;
(statearr_37135_37248[(1)] = (5));

} else {
var statearr_37136_37249 = state_37131__$1;
(statearr_37136_37249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37132 === (5))){
var inst_37115 = cljs.core.async.close_BANG_.call(null,jobs);
var state_37131__$1 = state_37131;
var statearr_37137_37250 = state_37131__$1;
(statearr_37137_37250[(2)] = inst_37115);

(statearr_37137_37250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37132 === (6))){
var inst_37112 = (state_37131[(7)]);
var inst_37117 = (state_37131[(8)]);
var inst_37117__$1 = cljs.core.async.chan.call(null,(1));
var inst_37118 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37119 = [inst_37112,inst_37117__$1];
var inst_37120 = (new cljs.core.PersistentVector(null,2,(5),inst_37118,inst_37119,null));
var state_37131__$1 = (function (){var statearr_37138 = state_37131;
(statearr_37138[(8)] = inst_37117__$1);

return statearr_37138;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37131__$1,(8),jobs,inst_37120);
} else {
if((state_val_37132 === (7))){
var inst_37127 = (state_37131[(2)]);
var state_37131__$1 = state_37131;
var statearr_37139_37251 = state_37131__$1;
(statearr_37139_37251[(2)] = inst_37127);

(statearr_37139_37251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37132 === (8))){
var inst_37117 = (state_37131[(8)]);
var inst_37122 = (state_37131[(2)]);
var state_37131__$1 = (function (){var statearr_37140 = state_37131;
(statearr_37140[(9)] = inst_37122);

return statearr_37140;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37131__$1,(9),results,inst_37117);
} else {
if((state_val_37132 === (9))){
var inst_37124 = (state_37131[(2)]);
var state_37131__$1 = (function (){var statearr_37141 = state_37131;
(statearr_37141[(10)] = inst_37124);

return statearr_37141;
})();
var statearr_37142_37252 = state_37131__$1;
(statearr_37142_37252[(2)] = null);

(statearr_37142_37252[(1)] = (2));


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
});})(c__34337__auto___37246,jobs,results,process,async))
;
return ((function (switch__34322__auto__,c__34337__auto___37246,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34323__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34323__auto____0 = (function (){
var statearr_37146 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37146[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34323__auto__);

(statearr_37146[(1)] = (1));

return statearr_37146;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34323__auto____1 = (function (state_37131){
while(true){
var ret_value__34324__auto__ = (function (){try{while(true){
var result__34325__auto__ = switch__34322__auto__.call(null,state_37131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34325__auto__;
}
break;
}
}catch (e37147){if((e37147 instanceof Object)){
var ex__34326__auto__ = e37147;
var statearr_37148_37253 = state_37131;
(statearr_37148_37253[(5)] = ex__34326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37254 = state_37131;
state_37131 = G__37254;
continue;
} else {
return ret_value__34324__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34323__auto__ = function(state_37131){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34323__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34323__auto____1.call(this,state_37131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34323__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34323__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34323__auto__;
})()
;})(switch__34322__auto__,c__34337__auto___37246,jobs,results,process,async))
})();
var state__34339__auto__ = (function (){var statearr_37149 = f__34338__auto__.call(null);
(statearr_37149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34337__auto___37246);

return statearr_37149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34339__auto__);
});})(c__34337__auto___37246,jobs,results,process,async))
);


var c__34337__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34337__auto__,jobs,results,process,async){
return (function (){
var f__34338__auto__ = (function (){var switch__34322__auto__ = ((function (c__34337__auto__,jobs,results,process,async){
return (function (state_37187){
var state_val_37188 = (state_37187[(1)]);
if((state_val_37188 === (7))){
var inst_37183 = (state_37187[(2)]);
var state_37187__$1 = state_37187;
var statearr_37189_37255 = state_37187__$1;
(statearr_37189_37255[(2)] = inst_37183);

(statearr_37189_37255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37188 === (20))){
var state_37187__$1 = state_37187;
var statearr_37190_37256 = state_37187__$1;
(statearr_37190_37256[(2)] = null);

(statearr_37190_37256[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37188 === (1))){
var state_37187__$1 = state_37187;
var statearr_37191_37257 = state_37187__$1;
(statearr_37191_37257[(2)] = null);

(statearr_37191_37257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37188 === (4))){
var inst_37152 = (state_37187[(7)]);
var inst_37152__$1 = (state_37187[(2)]);
var inst_37153 = (inst_37152__$1 == null);
var state_37187__$1 = (function (){var statearr_37192 = state_37187;
(statearr_37192[(7)] = inst_37152__$1);

return statearr_37192;
})();
if(cljs.core.truth_(inst_37153)){
var statearr_37193_37258 = state_37187__$1;
(statearr_37193_37258[(1)] = (5));

} else {
var statearr_37194_37259 = state_37187__$1;
(statearr_37194_37259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37188 === (15))){
var inst_37165 = (state_37187[(8)]);
var state_37187__$1 = state_37187;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37187__$1,(18),to,inst_37165);
} else {
if((state_val_37188 === (21))){
var inst_37178 = (state_37187[(2)]);
var state_37187__$1 = state_37187;
var statearr_37195_37260 = state_37187__$1;
(statearr_37195_37260[(2)] = inst_37178);

(statearr_37195_37260[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37188 === (13))){
var inst_37180 = (state_37187[(2)]);
var state_37187__$1 = (function (){var statearr_37196 = state_37187;
(statearr_37196[(9)] = inst_37180);

return statearr_37196;
})();
var statearr_37197_37261 = state_37187__$1;
(statearr_37197_37261[(2)] = null);

(statearr_37197_37261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37188 === (6))){
var inst_37152 = (state_37187[(7)]);
var state_37187__$1 = state_37187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37187__$1,(11),inst_37152);
} else {
if((state_val_37188 === (17))){
var inst_37173 = (state_37187[(2)]);
var state_37187__$1 = state_37187;
if(cljs.core.truth_(inst_37173)){
var statearr_37198_37262 = state_37187__$1;
(statearr_37198_37262[(1)] = (19));

} else {
var statearr_37199_37263 = state_37187__$1;
(statearr_37199_37263[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37188 === (3))){
var inst_37185 = (state_37187[(2)]);
var state_37187__$1 = state_37187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37187__$1,inst_37185);
} else {
if((state_val_37188 === (12))){
var inst_37162 = (state_37187[(10)]);
var state_37187__$1 = state_37187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37187__$1,(14),inst_37162);
} else {
if((state_val_37188 === (2))){
var state_37187__$1 = state_37187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37187__$1,(4),results);
} else {
if((state_val_37188 === (19))){
var state_37187__$1 = state_37187;
var statearr_37200_37264 = state_37187__$1;
(statearr_37200_37264[(2)] = null);

(statearr_37200_37264[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37188 === (11))){
var inst_37162 = (state_37187[(2)]);
var state_37187__$1 = (function (){var statearr_37201 = state_37187;
(statearr_37201[(10)] = inst_37162);

return statearr_37201;
})();
var statearr_37202_37265 = state_37187__$1;
(statearr_37202_37265[(2)] = null);

(statearr_37202_37265[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37188 === (9))){
var state_37187__$1 = state_37187;
var statearr_37203_37266 = state_37187__$1;
(statearr_37203_37266[(2)] = null);

(statearr_37203_37266[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37188 === (5))){
var state_37187__$1 = state_37187;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37204_37267 = state_37187__$1;
(statearr_37204_37267[(1)] = (8));

} else {
var statearr_37205_37268 = state_37187__$1;
(statearr_37205_37268[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37188 === (14))){
var inst_37165 = (state_37187[(8)]);
var inst_37167 = (state_37187[(11)]);
var inst_37165__$1 = (state_37187[(2)]);
var inst_37166 = (inst_37165__$1 == null);
var inst_37167__$1 = cljs.core.not.call(null,inst_37166);
var state_37187__$1 = (function (){var statearr_37206 = state_37187;
(statearr_37206[(8)] = inst_37165__$1);

(statearr_37206[(11)] = inst_37167__$1);

return statearr_37206;
})();
if(inst_37167__$1){
var statearr_37207_37269 = state_37187__$1;
(statearr_37207_37269[(1)] = (15));

} else {
var statearr_37208_37270 = state_37187__$1;
(statearr_37208_37270[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37188 === (16))){
var inst_37167 = (state_37187[(11)]);
var state_37187__$1 = state_37187;
var statearr_37209_37271 = state_37187__$1;
(statearr_37209_37271[(2)] = inst_37167);

(statearr_37209_37271[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37188 === (10))){
var inst_37159 = (state_37187[(2)]);
var state_37187__$1 = state_37187;
var statearr_37210_37272 = state_37187__$1;
(statearr_37210_37272[(2)] = inst_37159);

(statearr_37210_37272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37188 === (18))){
var inst_37170 = (state_37187[(2)]);
var state_37187__$1 = state_37187;
var statearr_37211_37273 = state_37187__$1;
(statearr_37211_37273[(2)] = inst_37170);

(statearr_37211_37273[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37188 === (8))){
var inst_37156 = cljs.core.async.close_BANG_.call(null,to);
var state_37187__$1 = state_37187;
var statearr_37212_37274 = state_37187__$1;
(statearr_37212_37274[(2)] = inst_37156);

(statearr_37212_37274[(1)] = (10));


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
});})(c__34337__auto__,jobs,results,process,async))
;
return ((function (switch__34322__auto__,c__34337__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34323__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34323__auto____0 = (function (){
var statearr_37216 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37216[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34323__auto__);

(statearr_37216[(1)] = (1));

return statearr_37216;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34323__auto____1 = (function (state_37187){
while(true){
var ret_value__34324__auto__ = (function (){try{while(true){
var result__34325__auto__ = switch__34322__auto__.call(null,state_37187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34325__auto__;
}
break;
}
}catch (e37217){if((e37217 instanceof Object)){
var ex__34326__auto__ = e37217;
var statearr_37218_37275 = state_37187;
(statearr_37218_37275[(5)] = ex__34326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37276 = state_37187;
state_37187 = G__37276;
continue;
} else {
return ret_value__34324__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34323__auto__ = function(state_37187){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34323__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34323__auto____1.call(this,state_37187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34323__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34323__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34323__auto__;
})()
;})(switch__34322__auto__,c__34337__auto__,jobs,results,process,async))
})();
var state__34339__auto__ = (function (){var statearr_37219 = f__34338__auto__.call(null);
(statearr_37219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34337__auto__);

return statearr_37219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34339__auto__);
});})(c__34337__auto__,jobs,results,process,async))
);

return c__34337__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args37277 = [];
var len__30749__auto___37280 = arguments.length;
var i__30750__auto___37281 = (0);
while(true){
if((i__30750__auto___37281 < len__30749__auto___37280)){
args37277.push((arguments[i__30750__auto___37281]));

var G__37282 = (i__30750__auto___37281 + (1));
i__30750__auto___37281 = G__37282;
continue;
} else {
}
break;
}

var G__37279 = args37277.length;
switch (G__37279) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37277.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args37284 = [];
var len__30749__auto___37287 = arguments.length;
var i__30750__auto___37288 = (0);
while(true){
if((i__30750__auto___37288 < len__30749__auto___37287)){
args37284.push((arguments[i__30750__auto___37288]));

var G__37289 = (i__30750__auto___37288 + (1));
i__30750__auto___37288 = G__37289;
continue;
} else {
}
break;
}

var G__37286 = args37284.length;
switch (G__37286) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37284.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args37291 = [];
var len__30749__auto___37344 = arguments.length;
var i__30750__auto___37345 = (0);
while(true){
if((i__30750__auto___37345 < len__30749__auto___37344)){
args37291.push((arguments[i__30750__auto___37345]));

var G__37346 = (i__30750__auto___37345 + (1));
i__30750__auto___37345 = G__37346;
continue;
} else {
}
break;
}

var G__37293 = args37291.length;
switch (G__37293) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37291.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__34337__auto___37348 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34337__auto___37348,tc,fc){
return (function (){
var f__34338__auto__ = (function (){var switch__34322__auto__ = ((function (c__34337__auto___37348,tc,fc){
return (function (state_37319){
var state_val_37320 = (state_37319[(1)]);
if((state_val_37320 === (7))){
var inst_37315 = (state_37319[(2)]);
var state_37319__$1 = state_37319;
var statearr_37321_37349 = state_37319__$1;
(statearr_37321_37349[(2)] = inst_37315);

(statearr_37321_37349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37320 === (1))){
var state_37319__$1 = state_37319;
var statearr_37322_37350 = state_37319__$1;
(statearr_37322_37350[(2)] = null);

(statearr_37322_37350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37320 === (4))){
var inst_37296 = (state_37319[(7)]);
var inst_37296__$1 = (state_37319[(2)]);
var inst_37297 = (inst_37296__$1 == null);
var state_37319__$1 = (function (){var statearr_37323 = state_37319;
(statearr_37323[(7)] = inst_37296__$1);

return statearr_37323;
})();
if(cljs.core.truth_(inst_37297)){
var statearr_37324_37351 = state_37319__$1;
(statearr_37324_37351[(1)] = (5));

} else {
var statearr_37325_37352 = state_37319__$1;
(statearr_37325_37352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37320 === (13))){
var state_37319__$1 = state_37319;
var statearr_37326_37353 = state_37319__$1;
(statearr_37326_37353[(2)] = null);

(statearr_37326_37353[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37320 === (6))){
var inst_37296 = (state_37319[(7)]);
var inst_37302 = p.call(null,inst_37296);
var state_37319__$1 = state_37319;
if(cljs.core.truth_(inst_37302)){
var statearr_37327_37354 = state_37319__$1;
(statearr_37327_37354[(1)] = (9));

} else {
var statearr_37328_37355 = state_37319__$1;
(statearr_37328_37355[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37320 === (3))){
var inst_37317 = (state_37319[(2)]);
var state_37319__$1 = state_37319;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37319__$1,inst_37317);
} else {
if((state_val_37320 === (12))){
var state_37319__$1 = state_37319;
var statearr_37329_37356 = state_37319__$1;
(statearr_37329_37356[(2)] = null);

(statearr_37329_37356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37320 === (2))){
var state_37319__$1 = state_37319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37319__$1,(4),ch);
} else {
if((state_val_37320 === (11))){
var inst_37296 = (state_37319[(7)]);
var inst_37306 = (state_37319[(2)]);
var state_37319__$1 = state_37319;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37319__$1,(8),inst_37306,inst_37296);
} else {
if((state_val_37320 === (9))){
var state_37319__$1 = state_37319;
var statearr_37330_37357 = state_37319__$1;
(statearr_37330_37357[(2)] = tc);

(statearr_37330_37357[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37320 === (5))){
var inst_37299 = cljs.core.async.close_BANG_.call(null,tc);
var inst_37300 = cljs.core.async.close_BANG_.call(null,fc);
var state_37319__$1 = (function (){var statearr_37331 = state_37319;
(statearr_37331[(8)] = inst_37299);

return statearr_37331;
})();
var statearr_37332_37358 = state_37319__$1;
(statearr_37332_37358[(2)] = inst_37300);

(statearr_37332_37358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37320 === (14))){
var inst_37313 = (state_37319[(2)]);
var state_37319__$1 = state_37319;
var statearr_37333_37359 = state_37319__$1;
(statearr_37333_37359[(2)] = inst_37313);

(statearr_37333_37359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37320 === (10))){
var state_37319__$1 = state_37319;
var statearr_37334_37360 = state_37319__$1;
(statearr_37334_37360[(2)] = fc);

(statearr_37334_37360[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37320 === (8))){
var inst_37308 = (state_37319[(2)]);
var state_37319__$1 = state_37319;
if(cljs.core.truth_(inst_37308)){
var statearr_37335_37361 = state_37319__$1;
(statearr_37335_37361[(1)] = (12));

} else {
var statearr_37336_37362 = state_37319__$1;
(statearr_37336_37362[(1)] = (13));

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
});})(c__34337__auto___37348,tc,fc))
;
return ((function (switch__34322__auto__,c__34337__auto___37348,tc,fc){
return (function() {
var cljs$core$async$state_machine__34323__auto__ = null;
var cljs$core$async$state_machine__34323__auto____0 = (function (){
var statearr_37340 = [null,null,null,null,null,null,null,null,null];
(statearr_37340[(0)] = cljs$core$async$state_machine__34323__auto__);

(statearr_37340[(1)] = (1));

return statearr_37340;
});
var cljs$core$async$state_machine__34323__auto____1 = (function (state_37319){
while(true){
var ret_value__34324__auto__ = (function (){try{while(true){
var result__34325__auto__ = switch__34322__auto__.call(null,state_37319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34325__auto__;
}
break;
}
}catch (e37341){if((e37341 instanceof Object)){
var ex__34326__auto__ = e37341;
var statearr_37342_37363 = state_37319;
(statearr_37342_37363[(5)] = ex__34326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37364 = state_37319;
state_37319 = G__37364;
continue;
} else {
return ret_value__34324__auto__;
}
break;
}
});
cljs$core$async$state_machine__34323__auto__ = function(state_37319){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34323__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34323__auto____1.call(this,state_37319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34323__auto____0;
cljs$core$async$state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34323__auto____1;
return cljs$core$async$state_machine__34323__auto__;
})()
;})(switch__34322__auto__,c__34337__auto___37348,tc,fc))
})();
var state__34339__auto__ = (function (){var statearr_37343 = f__34338__auto__.call(null);
(statearr_37343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34337__auto___37348);

return statearr_37343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34339__auto__);
});})(c__34337__auto___37348,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__34337__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34337__auto__){
return (function (){
var f__34338__auto__ = (function (){var switch__34322__auto__ = ((function (c__34337__auto__){
return (function (state_37428){
var state_val_37429 = (state_37428[(1)]);
if((state_val_37429 === (7))){
var inst_37424 = (state_37428[(2)]);
var state_37428__$1 = state_37428;
var statearr_37430_37451 = state_37428__$1;
(statearr_37430_37451[(2)] = inst_37424);

(statearr_37430_37451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (1))){
var inst_37408 = init;
var state_37428__$1 = (function (){var statearr_37431 = state_37428;
(statearr_37431[(7)] = inst_37408);

return statearr_37431;
})();
var statearr_37432_37452 = state_37428__$1;
(statearr_37432_37452[(2)] = null);

(statearr_37432_37452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (4))){
var inst_37411 = (state_37428[(8)]);
var inst_37411__$1 = (state_37428[(2)]);
var inst_37412 = (inst_37411__$1 == null);
var state_37428__$1 = (function (){var statearr_37433 = state_37428;
(statearr_37433[(8)] = inst_37411__$1);

return statearr_37433;
})();
if(cljs.core.truth_(inst_37412)){
var statearr_37434_37453 = state_37428__$1;
(statearr_37434_37453[(1)] = (5));

} else {
var statearr_37435_37454 = state_37428__$1;
(statearr_37435_37454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (6))){
var inst_37408 = (state_37428[(7)]);
var inst_37415 = (state_37428[(9)]);
var inst_37411 = (state_37428[(8)]);
var inst_37415__$1 = f.call(null,inst_37408,inst_37411);
var inst_37416 = cljs.core.reduced_QMARK_.call(null,inst_37415__$1);
var state_37428__$1 = (function (){var statearr_37436 = state_37428;
(statearr_37436[(9)] = inst_37415__$1);

return statearr_37436;
})();
if(inst_37416){
var statearr_37437_37455 = state_37428__$1;
(statearr_37437_37455[(1)] = (8));

} else {
var statearr_37438_37456 = state_37428__$1;
(statearr_37438_37456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (3))){
var inst_37426 = (state_37428[(2)]);
var state_37428__$1 = state_37428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37428__$1,inst_37426);
} else {
if((state_val_37429 === (2))){
var state_37428__$1 = state_37428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37428__$1,(4),ch);
} else {
if((state_val_37429 === (9))){
var inst_37415 = (state_37428[(9)]);
var inst_37408 = inst_37415;
var state_37428__$1 = (function (){var statearr_37439 = state_37428;
(statearr_37439[(7)] = inst_37408);

return statearr_37439;
})();
var statearr_37440_37457 = state_37428__$1;
(statearr_37440_37457[(2)] = null);

(statearr_37440_37457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (5))){
var inst_37408 = (state_37428[(7)]);
var state_37428__$1 = state_37428;
var statearr_37441_37458 = state_37428__$1;
(statearr_37441_37458[(2)] = inst_37408);

(statearr_37441_37458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (10))){
var inst_37422 = (state_37428[(2)]);
var state_37428__$1 = state_37428;
var statearr_37442_37459 = state_37428__$1;
(statearr_37442_37459[(2)] = inst_37422);

(statearr_37442_37459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37429 === (8))){
var inst_37415 = (state_37428[(9)]);
var inst_37418 = cljs.core.deref.call(null,inst_37415);
var state_37428__$1 = state_37428;
var statearr_37443_37460 = state_37428__$1;
(statearr_37443_37460[(2)] = inst_37418);

(statearr_37443_37460[(1)] = (10));


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
});})(c__34337__auto__))
;
return ((function (switch__34322__auto__,c__34337__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__34323__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34323__auto____0 = (function (){
var statearr_37447 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37447[(0)] = cljs$core$async$reduce_$_state_machine__34323__auto__);

(statearr_37447[(1)] = (1));

return statearr_37447;
});
var cljs$core$async$reduce_$_state_machine__34323__auto____1 = (function (state_37428){
while(true){
var ret_value__34324__auto__ = (function (){try{while(true){
var result__34325__auto__ = switch__34322__auto__.call(null,state_37428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34325__auto__;
}
break;
}
}catch (e37448){if((e37448 instanceof Object)){
var ex__34326__auto__ = e37448;
var statearr_37449_37461 = state_37428;
(statearr_37449_37461[(5)] = ex__34326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37462 = state_37428;
state_37428 = G__37462;
continue;
} else {
return ret_value__34324__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34323__auto__ = function(state_37428){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34323__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34323__auto____1.call(this,state_37428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34323__auto____0;
cljs$core$async$reduce_$_state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34323__auto____1;
return cljs$core$async$reduce_$_state_machine__34323__auto__;
})()
;})(switch__34322__auto__,c__34337__auto__))
})();
var state__34339__auto__ = (function (){var statearr_37450 = f__34338__auto__.call(null);
(statearr_37450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34337__auto__);

return statearr_37450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34339__auto__);
});})(c__34337__auto__))
);

return c__34337__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args37463 = [];
var len__30749__auto___37515 = arguments.length;
var i__30750__auto___37516 = (0);
while(true){
if((i__30750__auto___37516 < len__30749__auto___37515)){
args37463.push((arguments[i__30750__auto___37516]));

var G__37517 = (i__30750__auto___37516 + (1));
i__30750__auto___37516 = G__37517;
continue;
} else {
}
break;
}

var G__37465 = args37463.length;
switch (G__37465) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37463.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__34337__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34337__auto__){
return (function (){
var f__34338__auto__ = (function (){var switch__34322__auto__ = ((function (c__34337__auto__){
return (function (state_37490){
var state_val_37491 = (state_37490[(1)]);
if((state_val_37491 === (7))){
var inst_37472 = (state_37490[(2)]);
var state_37490__$1 = state_37490;
var statearr_37492_37519 = state_37490__$1;
(statearr_37492_37519[(2)] = inst_37472);

(statearr_37492_37519[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37491 === (1))){
var inst_37466 = cljs.core.seq.call(null,coll);
var inst_37467 = inst_37466;
var state_37490__$1 = (function (){var statearr_37493 = state_37490;
(statearr_37493[(7)] = inst_37467);

return statearr_37493;
})();
var statearr_37494_37520 = state_37490__$1;
(statearr_37494_37520[(2)] = null);

(statearr_37494_37520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37491 === (4))){
var inst_37467 = (state_37490[(7)]);
var inst_37470 = cljs.core.first.call(null,inst_37467);
var state_37490__$1 = state_37490;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37490__$1,(7),ch,inst_37470);
} else {
if((state_val_37491 === (13))){
var inst_37484 = (state_37490[(2)]);
var state_37490__$1 = state_37490;
var statearr_37495_37521 = state_37490__$1;
(statearr_37495_37521[(2)] = inst_37484);

(statearr_37495_37521[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37491 === (6))){
var inst_37475 = (state_37490[(2)]);
var state_37490__$1 = state_37490;
if(cljs.core.truth_(inst_37475)){
var statearr_37496_37522 = state_37490__$1;
(statearr_37496_37522[(1)] = (8));

} else {
var statearr_37497_37523 = state_37490__$1;
(statearr_37497_37523[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37491 === (3))){
var inst_37488 = (state_37490[(2)]);
var state_37490__$1 = state_37490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37490__$1,inst_37488);
} else {
if((state_val_37491 === (12))){
var state_37490__$1 = state_37490;
var statearr_37498_37524 = state_37490__$1;
(statearr_37498_37524[(2)] = null);

(statearr_37498_37524[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37491 === (2))){
var inst_37467 = (state_37490[(7)]);
var state_37490__$1 = state_37490;
if(cljs.core.truth_(inst_37467)){
var statearr_37499_37525 = state_37490__$1;
(statearr_37499_37525[(1)] = (4));

} else {
var statearr_37500_37526 = state_37490__$1;
(statearr_37500_37526[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37491 === (11))){
var inst_37481 = cljs.core.async.close_BANG_.call(null,ch);
var state_37490__$1 = state_37490;
var statearr_37501_37527 = state_37490__$1;
(statearr_37501_37527[(2)] = inst_37481);

(statearr_37501_37527[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37491 === (9))){
var state_37490__$1 = state_37490;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37502_37528 = state_37490__$1;
(statearr_37502_37528[(1)] = (11));

} else {
var statearr_37503_37529 = state_37490__$1;
(statearr_37503_37529[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37491 === (5))){
var inst_37467 = (state_37490[(7)]);
var state_37490__$1 = state_37490;
var statearr_37504_37530 = state_37490__$1;
(statearr_37504_37530[(2)] = inst_37467);

(statearr_37504_37530[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37491 === (10))){
var inst_37486 = (state_37490[(2)]);
var state_37490__$1 = state_37490;
var statearr_37505_37531 = state_37490__$1;
(statearr_37505_37531[(2)] = inst_37486);

(statearr_37505_37531[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37491 === (8))){
var inst_37467 = (state_37490[(7)]);
var inst_37477 = cljs.core.next.call(null,inst_37467);
var inst_37467__$1 = inst_37477;
var state_37490__$1 = (function (){var statearr_37506 = state_37490;
(statearr_37506[(7)] = inst_37467__$1);

return statearr_37506;
})();
var statearr_37507_37532 = state_37490__$1;
(statearr_37507_37532[(2)] = null);

(statearr_37507_37532[(1)] = (2));


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
});})(c__34337__auto__))
;
return ((function (switch__34322__auto__,c__34337__auto__){
return (function() {
var cljs$core$async$state_machine__34323__auto__ = null;
var cljs$core$async$state_machine__34323__auto____0 = (function (){
var statearr_37511 = [null,null,null,null,null,null,null,null];
(statearr_37511[(0)] = cljs$core$async$state_machine__34323__auto__);

(statearr_37511[(1)] = (1));

return statearr_37511;
});
var cljs$core$async$state_machine__34323__auto____1 = (function (state_37490){
while(true){
var ret_value__34324__auto__ = (function (){try{while(true){
var result__34325__auto__ = switch__34322__auto__.call(null,state_37490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34325__auto__;
}
break;
}
}catch (e37512){if((e37512 instanceof Object)){
var ex__34326__auto__ = e37512;
var statearr_37513_37533 = state_37490;
(statearr_37513_37533[(5)] = ex__34326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37534 = state_37490;
state_37490 = G__37534;
continue;
} else {
return ret_value__34324__auto__;
}
break;
}
});
cljs$core$async$state_machine__34323__auto__ = function(state_37490){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34323__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34323__auto____1.call(this,state_37490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34323__auto____0;
cljs$core$async$state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34323__auto____1;
return cljs$core$async$state_machine__34323__auto__;
})()
;})(switch__34322__auto__,c__34337__auto__))
})();
var state__34339__auto__ = (function (){var statearr_37514 = f__34338__auto__.call(null);
(statearr_37514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34337__auto__);

return statearr_37514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34339__auto__);
});})(c__34337__auto__))
);

return c__34337__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__30342__auto__ = (((_ == null))?null:_);
var m__30343__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__30342__auto__)]);
if(!((m__30343__auto__ == null))){
return m__30343__auto__.call(null,_);
} else {
var m__30343__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__30343__auto____$1 == null))){
return m__30343__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__30342__auto__ = (((m == null))?null:m);
var m__30343__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__30342__auto__)]);
if(!((m__30343__auto__ == null))){
return m__30343__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__30343__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__30343__auto____$1 == null))){
return m__30343__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__30342__auto__ = (((m == null))?null:m);
var m__30343__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__30342__auto__)]);
if(!((m__30343__auto__ == null))){
return m__30343__auto__.call(null,m,ch);
} else {
var m__30343__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__30343__auto____$1 == null))){
return m__30343__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__30342__auto__ = (((m == null))?null:m);
var m__30343__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__30342__auto__)]);
if(!((m__30343__auto__ == null))){
return m__30343__auto__.call(null,m);
} else {
var m__30343__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__30343__auto____$1 == null))){
return m__30343__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async37756 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37756 = (function (mult,ch,cs,meta37757){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta37757 = meta37757;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_37758,meta37757__$1){
var self__ = this;
var _37758__$1 = this;
return (new cljs.core.async.t_cljs$core$async37756(self__.mult,self__.ch,self__.cs,meta37757__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async37756.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_37758){
var self__ = this;
var _37758__$1 = this;
return self__.meta37757;
});})(cs))
;

cljs.core.async.t_cljs$core$async37756.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async37756.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async37756.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async37756.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37756.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37756.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37756.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta37757","meta37757",1506938125,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async37756.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37756.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37756";

cljs.core.async.t_cljs$core$async37756.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30285__auto__,writer__30286__auto__,opt__30287__auto__){
return cljs.core._write.call(null,writer__30286__auto__,"cljs.core.async/t_cljs$core$async37756");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async37756 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async37756(mult__$1,ch__$1,cs__$1,meta37757){
return (new cljs.core.async.t_cljs$core$async37756(mult__$1,ch__$1,cs__$1,meta37757));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async37756(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__34337__auto___37977 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34337__auto___37977,cs,m,dchan,dctr,done){
return (function (){
var f__34338__auto__ = (function (){var switch__34322__auto__ = ((function (c__34337__auto___37977,cs,m,dchan,dctr,done){
return (function (state_37889){
var state_val_37890 = (state_37889[(1)]);
if((state_val_37890 === (7))){
var inst_37885 = (state_37889[(2)]);
var state_37889__$1 = state_37889;
var statearr_37891_37978 = state_37889__$1;
(statearr_37891_37978[(2)] = inst_37885);

(statearr_37891_37978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (20))){
var inst_37790 = (state_37889[(7)]);
var inst_37800 = cljs.core.first.call(null,inst_37790);
var inst_37801 = cljs.core.nth.call(null,inst_37800,(0),null);
var inst_37802 = cljs.core.nth.call(null,inst_37800,(1),null);
var state_37889__$1 = (function (){var statearr_37892 = state_37889;
(statearr_37892[(8)] = inst_37801);

return statearr_37892;
})();
if(cljs.core.truth_(inst_37802)){
var statearr_37893_37979 = state_37889__$1;
(statearr_37893_37979[(1)] = (22));

} else {
var statearr_37894_37980 = state_37889__$1;
(statearr_37894_37980[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (27))){
var inst_37830 = (state_37889[(9)]);
var inst_37837 = (state_37889[(10)]);
var inst_37761 = (state_37889[(11)]);
var inst_37832 = (state_37889[(12)]);
var inst_37837__$1 = cljs.core._nth.call(null,inst_37830,inst_37832);
var inst_37838 = cljs.core.async.put_BANG_.call(null,inst_37837__$1,inst_37761,done);
var state_37889__$1 = (function (){var statearr_37895 = state_37889;
(statearr_37895[(10)] = inst_37837__$1);

return statearr_37895;
})();
if(cljs.core.truth_(inst_37838)){
var statearr_37896_37981 = state_37889__$1;
(statearr_37896_37981[(1)] = (30));

} else {
var statearr_37897_37982 = state_37889__$1;
(statearr_37897_37982[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (1))){
var state_37889__$1 = state_37889;
var statearr_37898_37983 = state_37889__$1;
(statearr_37898_37983[(2)] = null);

(statearr_37898_37983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (24))){
var inst_37790 = (state_37889[(7)]);
var inst_37807 = (state_37889[(2)]);
var inst_37808 = cljs.core.next.call(null,inst_37790);
var inst_37770 = inst_37808;
var inst_37771 = null;
var inst_37772 = (0);
var inst_37773 = (0);
var state_37889__$1 = (function (){var statearr_37899 = state_37889;
(statearr_37899[(13)] = inst_37773);

(statearr_37899[(14)] = inst_37772);

(statearr_37899[(15)] = inst_37807);

(statearr_37899[(16)] = inst_37770);

(statearr_37899[(17)] = inst_37771);

return statearr_37899;
})();
var statearr_37900_37984 = state_37889__$1;
(statearr_37900_37984[(2)] = null);

(statearr_37900_37984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (39))){
var state_37889__$1 = state_37889;
var statearr_37904_37985 = state_37889__$1;
(statearr_37904_37985[(2)] = null);

(statearr_37904_37985[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (4))){
var inst_37761 = (state_37889[(11)]);
var inst_37761__$1 = (state_37889[(2)]);
var inst_37762 = (inst_37761__$1 == null);
var state_37889__$1 = (function (){var statearr_37905 = state_37889;
(statearr_37905[(11)] = inst_37761__$1);

return statearr_37905;
})();
if(cljs.core.truth_(inst_37762)){
var statearr_37906_37986 = state_37889__$1;
(statearr_37906_37986[(1)] = (5));

} else {
var statearr_37907_37987 = state_37889__$1;
(statearr_37907_37987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (15))){
var inst_37773 = (state_37889[(13)]);
var inst_37772 = (state_37889[(14)]);
var inst_37770 = (state_37889[(16)]);
var inst_37771 = (state_37889[(17)]);
var inst_37786 = (state_37889[(2)]);
var inst_37787 = (inst_37773 + (1));
var tmp37901 = inst_37772;
var tmp37902 = inst_37770;
var tmp37903 = inst_37771;
var inst_37770__$1 = tmp37902;
var inst_37771__$1 = tmp37903;
var inst_37772__$1 = tmp37901;
var inst_37773__$1 = inst_37787;
var state_37889__$1 = (function (){var statearr_37908 = state_37889;
(statearr_37908[(13)] = inst_37773__$1);

(statearr_37908[(18)] = inst_37786);

(statearr_37908[(14)] = inst_37772__$1);

(statearr_37908[(16)] = inst_37770__$1);

(statearr_37908[(17)] = inst_37771__$1);

return statearr_37908;
})();
var statearr_37909_37988 = state_37889__$1;
(statearr_37909_37988[(2)] = null);

(statearr_37909_37988[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (21))){
var inst_37811 = (state_37889[(2)]);
var state_37889__$1 = state_37889;
var statearr_37913_37989 = state_37889__$1;
(statearr_37913_37989[(2)] = inst_37811);

(statearr_37913_37989[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (31))){
var inst_37837 = (state_37889[(10)]);
var inst_37841 = done.call(null,null);
var inst_37842 = cljs.core.async.untap_STAR_.call(null,m,inst_37837);
var state_37889__$1 = (function (){var statearr_37914 = state_37889;
(statearr_37914[(19)] = inst_37841);

return statearr_37914;
})();
var statearr_37915_37990 = state_37889__$1;
(statearr_37915_37990[(2)] = inst_37842);

(statearr_37915_37990[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (32))){
var inst_37830 = (state_37889[(9)]);
var inst_37831 = (state_37889[(20)]);
var inst_37829 = (state_37889[(21)]);
var inst_37832 = (state_37889[(12)]);
var inst_37844 = (state_37889[(2)]);
var inst_37845 = (inst_37832 + (1));
var tmp37910 = inst_37830;
var tmp37911 = inst_37831;
var tmp37912 = inst_37829;
var inst_37829__$1 = tmp37912;
var inst_37830__$1 = tmp37910;
var inst_37831__$1 = tmp37911;
var inst_37832__$1 = inst_37845;
var state_37889__$1 = (function (){var statearr_37916 = state_37889;
(statearr_37916[(22)] = inst_37844);

(statearr_37916[(9)] = inst_37830__$1);

(statearr_37916[(20)] = inst_37831__$1);

(statearr_37916[(21)] = inst_37829__$1);

(statearr_37916[(12)] = inst_37832__$1);

return statearr_37916;
})();
var statearr_37917_37991 = state_37889__$1;
(statearr_37917_37991[(2)] = null);

(statearr_37917_37991[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (40))){
var inst_37857 = (state_37889[(23)]);
var inst_37861 = done.call(null,null);
var inst_37862 = cljs.core.async.untap_STAR_.call(null,m,inst_37857);
var state_37889__$1 = (function (){var statearr_37918 = state_37889;
(statearr_37918[(24)] = inst_37861);

return statearr_37918;
})();
var statearr_37919_37992 = state_37889__$1;
(statearr_37919_37992[(2)] = inst_37862);

(statearr_37919_37992[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (33))){
var inst_37848 = (state_37889[(25)]);
var inst_37850 = cljs.core.chunked_seq_QMARK_.call(null,inst_37848);
var state_37889__$1 = state_37889;
if(inst_37850){
var statearr_37920_37993 = state_37889__$1;
(statearr_37920_37993[(1)] = (36));

} else {
var statearr_37921_37994 = state_37889__$1;
(statearr_37921_37994[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (13))){
var inst_37780 = (state_37889[(26)]);
var inst_37783 = cljs.core.async.close_BANG_.call(null,inst_37780);
var state_37889__$1 = state_37889;
var statearr_37922_37995 = state_37889__$1;
(statearr_37922_37995[(2)] = inst_37783);

(statearr_37922_37995[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (22))){
var inst_37801 = (state_37889[(8)]);
var inst_37804 = cljs.core.async.close_BANG_.call(null,inst_37801);
var state_37889__$1 = state_37889;
var statearr_37923_37996 = state_37889__$1;
(statearr_37923_37996[(2)] = inst_37804);

(statearr_37923_37996[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (36))){
var inst_37848 = (state_37889[(25)]);
var inst_37852 = cljs.core.chunk_first.call(null,inst_37848);
var inst_37853 = cljs.core.chunk_rest.call(null,inst_37848);
var inst_37854 = cljs.core.count.call(null,inst_37852);
var inst_37829 = inst_37853;
var inst_37830 = inst_37852;
var inst_37831 = inst_37854;
var inst_37832 = (0);
var state_37889__$1 = (function (){var statearr_37924 = state_37889;
(statearr_37924[(9)] = inst_37830);

(statearr_37924[(20)] = inst_37831);

(statearr_37924[(21)] = inst_37829);

(statearr_37924[(12)] = inst_37832);

return statearr_37924;
})();
var statearr_37925_37997 = state_37889__$1;
(statearr_37925_37997[(2)] = null);

(statearr_37925_37997[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (41))){
var inst_37848 = (state_37889[(25)]);
var inst_37864 = (state_37889[(2)]);
var inst_37865 = cljs.core.next.call(null,inst_37848);
var inst_37829 = inst_37865;
var inst_37830 = null;
var inst_37831 = (0);
var inst_37832 = (0);
var state_37889__$1 = (function (){var statearr_37926 = state_37889;
(statearr_37926[(9)] = inst_37830);

(statearr_37926[(20)] = inst_37831);

(statearr_37926[(21)] = inst_37829);

(statearr_37926[(27)] = inst_37864);

(statearr_37926[(12)] = inst_37832);

return statearr_37926;
})();
var statearr_37927_37998 = state_37889__$1;
(statearr_37927_37998[(2)] = null);

(statearr_37927_37998[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (43))){
var state_37889__$1 = state_37889;
var statearr_37928_37999 = state_37889__$1;
(statearr_37928_37999[(2)] = null);

(statearr_37928_37999[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (29))){
var inst_37873 = (state_37889[(2)]);
var state_37889__$1 = state_37889;
var statearr_37929_38000 = state_37889__$1;
(statearr_37929_38000[(2)] = inst_37873);

(statearr_37929_38000[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (44))){
var inst_37882 = (state_37889[(2)]);
var state_37889__$1 = (function (){var statearr_37930 = state_37889;
(statearr_37930[(28)] = inst_37882);

return statearr_37930;
})();
var statearr_37931_38001 = state_37889__$1;
(statearr_37931_38001[(2)] = null);

(statearr_37931_38001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (6))){
var inst_37821 = (state_37889[(29)]);
var inst_37820 = cljs.core.deref.call(null,cs);
var inst_37821__$1 = cljs.core.keys.call(null,inst_37820);
var inst_37822 = cljs.core.count.call(null,inst_37821__$1);
var inst_37823 = cljs.core.reset_BANG_.call(null,dctr,inst_37822);
var inst_37828 = cljs.core.seq.call(null,inst_37821__$1);
var inst_37829 = inst_37828;
var inst_37830 = null;
var inst_37831 = (0);
var inst_37832 = (0);
var state_37889__$1 = (function (){var statearr_37932 = state_37889;
(statearr_37932[(9)] = inst_37830);

(statearr_37932[(20)] = inst_37831);

(statearr_37932[(21)] = inst_37829);

(statearr_37932[(30)] = inst_37823);

(statearr_37932[(12)] = inst_37832);

(statearr_37932[(29)] = inst_37821__$1);

return statearr_37932;
})();
var statearr_37933_38002 = state_37889__$1;
(statearr_37933_38002[(2)] = null);

(statearr_37933_38002[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (28))){
var inst_37848 = (state_37889[(25)]);
var inst_37829 = (state_37889[(21)]);
var inst_37848__$1 = cljs.core.seq.call(null,inst_37829);
var state_37889__$1 = (function (){var statearr_37934 = state_37889;
(statearr_37934[(25)] = inst_37848__$1);

return statearr_37934;
})();
if(inst_37848__$1){
var statearr_37935_38003 = state_37889__$1;
(statearr_37935_38003[(1)] = (33));

} else {
var statearr_37936_38004 = state_37889__$1;
(statearr_37936_38004[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (25))){
var inst_37831 = (state_37889[(20)]);
var inst_37832 = (state_37889[(12)]);
var inst_37834 = (inst_37832 < inst_37831);
var inst_37835 = inst_37834;
var state_37889__$1 = state_37889;
if(cljs.core.truth_(inst_37835)){
var statearr_37937_38005 = state_37889__$1;
(statearr_37937_38005[(1)] = (27));

} else {
var statearr_37938_38006 = state_37889__$1;
(statearr_37938_38006[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (34))){
var state_37889__$1 = state_37889;
var statearr_37939_38007 = state_37889__$1;
(statearr_37939_38007[(2)] = null);

(statearr_37939_38007[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (17))){
var state_37889__$1 = state_37889;
var statearr_37940_38008 = state_37889__$1;
(statearr_37940_38008[(2)] = null);

(statearr_37940_38008[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (3))){
var inst_37887 = (state_37889[(2)]);
var state_37889__$1 = state_37889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37889__$1,inst_37887);
} else {
if((state_val_37890 === (12))){
var inst_37816 = (state_37889[(2)]);
var state_37889__$1 = state_37889;
var statearr_37941_38009 = state_37889__$1;
(statearr_37941_38009[(2)] = inst_37816);

(statearr_37941_38009[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (2))){
var state_37889__$1 = state_37889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37889__$1,(4),ch);
} else {
if((state_val_37890 === (23))){
var state_37889__$1 = state_37889;
var statearr_37942_38010 = state_37889__$1;
(statearr_37942_38010[(2)] = null);

(statearr_37942_38010[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (35))){
var inst_37871 = (state_37889[(2)]);
var state_37889__$1 = state_37889;
var statearr_37943_38011 = state_37889__$1;
(statearr_37943_38011[(2)] = inst_37871);

(statearr_37943_38011[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (19))){
var inst_37790 = (state_37889[(7)]);
var inst_37794 = cljs.core.chunk_first.call(null,inst_37790);
var inst_37795 = cljs.core.chunk_rest.call(null,inst_37790);
var inst_37796 = cljs.core.count.call(null,inst_37794);
var inst_37770 = inst_37795;
var inst_37771 = inst_37794;
var inst_37772 = inst_37796;
var inst_37773 = (0);
var state_37889__$1 = (function (){var statearr_37944 = state_37889;
(statearr_37944[(13)] = inst_37773);

(statearr_37944[(14)] = inst_37772);

(statearr_37944[(16)] = inst_37770);

(statearr_37944[(17)] = inst_37771);

return statearr_37944;
})();
var statearr_37945_38012 = state_37889__$1;
(statearr_37945_38012[(2)] = null);

(statearr_37945_38012[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (11))){
var inst_37790 = (state_37889[(7)]);
var inst_37770 = (state_37889[(16)]);
var inst_37790__$1 = cljs.core.seq.call(null,inst_37770);
var state_37889__$1 = (function (){var statearr_37946 = state_37889;
(statearr_37946[(7)] = inst_37790__$1);

return statearr_37946;
})();
if(inst_37790__$1){
var statearr_37947_38013 = state_37889__$1;
(statearr_37947_38013[(1)] = (16));

} else {
var statearr_37948_38014 = state_37889__$1;
(statearr_37948_38014[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (9))){
var inst_37818 = (state_37889[(2)]);
var state_37889__$1 = state_37889;
var statearr_37949_38015 = state_37889__$1;
(statearr_37949_38015[(2)] = inst_37818);

(statearr_37949_38015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (5))){
var inst_37768 = cljs.core.deref.call(null,cs);
var inst_37769 = cljs.core.seq.call(null,inst_37768);
var inst_37770 = inst_37769;
var inst_37771 = null;
var inst_37772 = (0);
var inst_37773 = (0);
var state_37889__$1 = (function (){var statearr_37950 = state_37889;
(statearr_37950[(13)] = inst_37773);

(statearr_37950[(14)] = inst_37772);

(statearr_37950[(16)] = inst_37770);

(statearr_37950[(17)] = inst_37771);

return statearr_37950;
})();
var statearr_37951_38016 = state_37889__$1;
(statearr_37951_38016[(2)] = null);

(statearr_37951_38016[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (14))){
var state_37889__$1 = state_37889;
var statearr_37952_38017 = state_37889__$1;
(statearr_37952_38017[(2)] = null);

(statearr_37952_38017[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (45))){
var inst_37879 = (state_37889[(2)]);
var state_37889__$1 = state_37889;
var statearr_37953_38018 = state_37889__$1;
(statearr_37953_38018[(2)] = inst_37879);

(statearr_37953_38018[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (26))){
var inst_37821 = (state_37889[(29)]);
var inst_37875 = (state_37889[(2)]);
var inst_37876 = cljs.core.seq.call(null,inst_37821);
var state_37889__$1 = (function (){var statearr_37954 = state_37889;
(statearr_37954[(31)] = inst_37875);

return statearr_37954;
})();
if(inst_37876){
var statearr_37955_38019 = state_37889__$1;
(statearr_37955_38019[(1)] = (42));

} else {
var statearr_37956_38020 = state_37889__$1;
(statearr_37956_38020[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (16))){
var inst_37790 = (state_37889[(7)]);
var inst_37792 = cljs.core.chunked_seq_QMARK_.call(null,inst_37790);
var state_37889__$1 = state_37889;
if(inst_37792){
var statearr_37957_38021 = state_37889__$1;
(statearr_37957_38021[(1)] = (19));

} else {
var statearr_37958_38022 = state_37889__$1;
(statearr_37958_38022[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (38))){
var inst_37868 = (state_37889[(2)]);
var state_37889__$1 = state_37889;
var statearr_37959_38023 = state_37889__$1;
(statearr_37959_38023[(2)] = inst_37868);

(statearr_37959_38023[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (30))){
var state_37889__$1 = state_37889;
var statearr_37960_38024 = state_37889__$1;
(statearr_37960_38024[(2)] = null);

(statearr_37960_38024[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (10))){
var inst_37773 = (state_37889[(13)]);
var inst_37771 = (state_37889[(17)]);
var inst_37779 = cljs.core._nth.call(null,inst_37771,inst_37773);
var inst_37780 = cljs.core.nth.call(null,inst_37779,(0),null);
var inst_37781 = cljs.core.nth.call(null,inst_37779,(1),null);
var state_37889__$1 = (function (){var statearr_37961 = state_37889;
(statearr_37961[(26)] = inst_37780);

return statearr_37961;
})();
if(cljs.core.truth_(inst_37781)){
var statearr_37962_38025 = state_37889__$1;
(statearr_37962_38025[(1)] = (13));

} else {
var statearr_37963_38026 = state_37889__$1;
(statearr_37963_38026[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (18))){
var inst_37814 = (state_37889[(2)]);
var state_37889__$1 = state_37889;
var statearr_37964_38027 = state_37889__$1;
(statearr_37964_38027[(2)] = inst_37814);

(statearr_37964_38027[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (42))){
var state_37889__$1 = state_37889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37889__$1,(45),dchan);
} else {
if((state_val_37890 === (37))){
var inst_37857 = (state_37889[(23)]);
var inst_37848 = (state_37889[(25)]);
var inst_37761 = (state_37889[(11)]);
var inst_37857__$1 = cljs.core.first.call(null,inst_37848);
var inst_37858 = cljs.core.async.put_BANG_.call(null,inst_37857__$1,inst_37761,done);
var state_37889__$1 = (function (){var statearr_37965 = state_37889;
(statearr_37965[(23)] = inst_37857__$1);

return statearr_37965;
})();
if(cljs.core.truth_(inst_37858)){
var statearr_37966_38028 = state_37889__$1;
(statearr_37966_38028[(1)] = (39));

} else {
var statearr_37967_38029 = state_37889__$1;
(statearr_37967_38029[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (8))){
var inst_37773 = (state_37889[(13)]);
var inst_37772 = (state_37889[(14)]);
var inst_37775 = (inst_37773 < inst_37772);
var inst_37776 = inst_37775;
var state_37889__$1 = state_37889;
if(cljs.core.truth_(inst_37776)){
var statearr_37968_38030 = state_37889__$1;
(statearr_37968_38030[(1)] = (10));

} else {
var statearr_37969_38031 = state_37889__$1;
(statearr_37969_38031[(1)] = (11));

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
});})(c__34337__auto___37977,cs,m,dchan,dctr,done))
;
return ((function (switch__34322__auto__,c__34337__auto___37977,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__34323__auto__ = null;
var cljs$core$async$mult_$_state_machine__34323__auto____0 = (function (){
var statearr_37973 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37973[(0)] = cljs$core$async$mult_$_state_machine__34323__auto__);

(statearr_37973[(1)] = (1));

return statearr_37973;
});
var cljs$core$async$mult_$_state_machine__34323__auto____1 = (function (state_37889){
while(true){
var ret_value__34324__auto__ = (function (){try{while(true){
var result__34325__auto__ = switch__34322__auto__.call(null,state_37889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34325__auto__;
}
break;
}
}catch (e37974){if((e37974 instanceof Object)){
var ex__34326__auto__ = e37974;
var statearr_37975_38032 = state_37889;
(statearr_37975_38032[(5)] = ex__34326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38033 = state_37889;
state_37889 = G__38033;
continue;
} else {
return ret_value__34324__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34323__auto__ = function(state_37889){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34323__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34323__auto____1.call(this,state_37889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34323__auto____0;
cljs$core$async$mult_$_state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34323__auto____1;
return cljs$core$async$mult_$_state_machine__34323__auto__;
})()
;})(switch__34322__auto__,c__34337__auto___37977,cs,m,dchan,dctr,done))
})();
var state__34339__auto__ = (function (){var statearr_37976 = f__34338__auto__.call(null);
(statearr_37976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34337__auto___37977);

return statearr_37976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34339__auto__);
});})(c__34337__auto___37977,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args38034 = [];
var len__30749__auto___38037 = arguments.length;
var i__30750__auto___38038 = (0);
while(true){
if((i__30750__auto___38038 < len__30749__auto___38037)){
args38034.push((arguments[i__30750__auto___38038]));

var G__38039 = (i__30750__auto___38038 + (1));
i__30750__auto___38038 = G__38039;
continue;
} else {
}
break;
}

var G__38036 = args38034.length;
switch (G__38036) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38034.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__30342__auto__ = (((m == null))?null:m);
var m__30343__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__30342__auto__)]);
if(!((m__30343__auto__ == null))){
return m__30343__auto__.call(null,m,ch);
} else {
var m__30343__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__30343__auto____$1 == null))){
return m__30343__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__30342__auto__ = (((m == null))?null:m);
var m__30343__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__30342__auto__)]);
if(!((m__30343__auto__ == null))){
return m__30343__auto__.call(null,m,ch);
} else {
var m__30343__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__30343__auto____$1 == null))){
return m__30343__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__30342__auto__ = (((m == null))?null:m);
var m__30343__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__30342__auto__)]);
if(!((m__30343__auto__ == null))){
return m__30343__auto__.call(null,m);
} else {
var m__30343__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__30343__auto____$1 == null))){
return m__30343__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__30342__auto__ = (((m == null))?null:m);
var m__30343__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__30342__auto__)]);
if(!((m__30343__auto__ == null))){
return m__30343__auto__.call(null,m,state_map);
} else {
var m__30343__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__30343__auto____$1 == null))){
return m__30343__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__30342__auto__ = (((m == null))?null:m);
var m__30343__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__30342__auto__)]);
if(!((m__30343__auto__ == null))){
return m__30343__auto__.call(null,m,mode);
} else {
var m__30343__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__30343__auto____$1 == null))){
return m__30343__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__30756__auto__ = [];
var len__30749__auto___38051 = arguments.length;
var i__30750__auto___38052 = (0);
while(true){
if((i__30750__auto___38052 < len__30749__auto___38051)){
args__30756__auto__.push((arguments[i__30750__auto___38052]));

var G__38053 = (i__30750__auto___38052 + (1));
i__30750__auto___38052 = G__38053;
continue;
} else {
}
break;
}

var argseq__30757__auto__ = ((((3) < args__30756__auto__.length))?(new cljs.core.IndexedSeq(args__30756__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30757__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__38045){
var map__38046 = p__38045;
var map__38046__$1 = ((((!((map__38046 == null)))?((((map__38046.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38046.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38046):map__38046);
var opts = map__38046__$1;
var statearr_38048_38054 = state;
(statearr_38048_38054[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__38046,map__38046__$1,opts){
return (function (val){
var statearr_38049_38055 = state;
(statearr_38049_38055[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__38046,map__38046__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_38050_38056 = state;
(statearr_38050_38056[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq38041){
var G__38042 = cljs.core.first.call(null,seq38041);
var seq38041__$1 = cljs.core.next.call(null,seq38041);
var G__38043 = cljs.core.first.call(null,seq38041__$1);
var seq38041__$2 = cljs.core.next.call(null,seq38041__$1);
var G__38044 = cljs.core.first.call(null,seq38041__$2);
var seq38041__$3 = cljs.core.next.call(null,seq38041__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38042,G__38043,G__38044,seq38041__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async38220 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38220 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38221){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta38221 = meta38221;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38220.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38222,meta38221__$1){
var self__ = this;
var _38222__$1 = this;
return (new cljs.core.async.t_cljs$core$async38220(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta38221__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38220.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38222){
var self__ = this;
var _38222__$1 = this;
return self__.meta38221;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38220.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async38220.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38220.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async38220.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38220.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38220.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38220.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38220.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38220.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta38221","meta38221",-1928366676,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38220.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38220.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38220";

cljs.core.async.t_cljs$core$async38220.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30285__auto__,writer__30286__auto__,opt__30287__auto__){
return cljs.core._write.call(null,writer__30286__auto__,"cljs.core.async/t_cljs$core$async38220");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async38220 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async38220(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38221){
return (new cljs.core.async.t_cljs$core$async38220(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38221));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async38220(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34337__auto___38383 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34337__auto___38383,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__34338__auto__ = (function (){var switch__34322__auto__ = ((function (c__34337__auto___38383,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_38320){
var state_val_38321 = (state_38320[(1)]);
if((state_val_38321 === (7))){
var inst_38238 = (state_38320[(2)]);
var state_38320__$1 = state_38320;
var statearr_38322_38384 = state_38320__$1;
(statearr_38322_38384[(2)] = inst_38238);

(statearr_38322_38384[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38321 === (20))){
var inst_38250 = (state_38320[(7)]);
var state_38320__$1 = state_38320;
var statearr_38323_38385 = state_38320__$1;
(statearr_38323_38385[(2)] = inst_38250);

(statearr_38323_38385[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38321 === (27))){
var state_38320__$1 = state_38320;
var statearr_38324_38386 = state_38320__$1;
(statearr_38324_38386[(2)] = null);

(statearr_38324_38386[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38321 === (1))){
var inst_38226 = (state_38320[(8)]);
var inst_38226__$1 = calc_state.call(null);
var inst_38228 = (inst_38226__$1 == null);
var inst_38229 = cljs.core.not.call(null,inst_38228);
var state_38320__$1 = (function (){var statearr_38325 = state_38320;
(statearr_38325[(8)] = inst_38226__$1);

return statearr_38325;
})();
if(inst_38229){
var statearr_38326_38387 = state_38320__$1;
(statearr_38326_38387[(1)] = (2));

} else {
var statearr_38327_38388 = state_38320__$1;
(statearr_38327_38388[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38321 === (24))){
var inst_38280 = (state_38320[(9)]);
var inst_38273 = (state_38320[(10)]);
var inst_38294 = (state_38320[(11)]);
var inst_38294__$1 = inst_38273.call(null,inst_38280);
var state_38320__$1 = (function (){var statearr_38328 = state_38320;
(statearr_38328[(11)] = inst_38294__$1);

return statearr_38328;
})();
if(cljs.core.truth_(inst_38294__$1)){
var statearr_38329_38389 = state_38320__$1;
(statearr_38329_38389[(1)] = (29));

} else {
var statearr_38330_38390 = state_38320__$1;
(statearr_38330_38390[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38321 === (4))){
var inst_38241 = (state_38320[(2)]);
var state_38320__$1 = state_38320;
if(cljs.core.truth_(inst_38241)){
var statearr_38331_38391 = state_38320__$1;
(statearr_38331_38391[(1)] = (8));

} else {
var statearr_38332_38392 = state_38320__$1;
(statearr_38332_38392[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38321 === (15))){
var inst_38267 = (state_38320[(2)]);
var state_38320__$1 = state_38320;
if(cljs.core.truth_(inst_38267)){
var statearr_38333_38393 = state_38320__$1;
(statearr_38333_38393[(1)] = (19));

} else {
var statearr_38334_38394 = state_38320__$1;
(statearr_38334_38394[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38321 === (21))){
var inst_38272 = (state_38320[(12)]);
var inst_38272__$1 = (state_38320[(2)]);
var inst_38273 = cljs.core.get.call(null,inst_38272__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38274 = cljs.core.get.call(null,inst_38272__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38275 = cljs.core.get.call(null,inst_38272__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_38320__$1 = (function (){var statearr_38335 = state_38320;
(statearr_38335[(13)] = inst_38274);

(statearr_38335[(10)] = inst_38273);

(statearr_38335[(12)] = inst_38272__$1);

return statearr_38335;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_38320__$1,(22),inst_38275);
} else {
if((state_val_38321 === (31))){
var inst_38302 = (state_38320[(2)]);
var state_38320__$1 = state_38320;
if(cljs.core.truth_(inst_38302)){
var statearr_38336_38395 = state_38320__$1;
(statearr_38336_38395[(1)] = (32));

} else {
var statearr_38337_38396 = state_38320__$1;
(statearr_38337_38396[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38321 === (32))){
var inst_38279 = (state_38320[(14)]);
var state_38320__$1 = state_38320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38320__$1,(35),out,inst_38279);
} else {
if((state_val_38321 === (33))){
var inst_38272 = (state_38320[(12)]);
var inst_38250 = inst_38272;
var state_38320__$1 = (function (){var statearr_38338 = state_38320;
(statearr_38338[(7)] = inst_38250);

return statearr_38338;
})();
var statearr_38339_38397 = state_38320__$1;
(statearr_38339_38397[(2)] = null);

(statearr_38339_38397[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38321 === (13))){
var inst_38250 = (state_38320[(7)]);
var inst_38257 = inst_38250.cljs$lang$protocol_mask$partition0$;
var inst_38258 = (inst_38257 & (64));
var inst_38259 = inst_38250.cljs$core$ISeq$;
var inst_38260 = (inst_38258) || (inst_38259);
var state_38320__$1 = state_38320;
if(cljs.core.truth_(inst_38260)){
var statearr_38340_38398 = state_38320__$1;
(statearr_38340_38398[(1)] = (16));

} else {
var statearr_38341_38399 = state_38320__$1;
(statearr_38341_38399[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38321 === (22))){
var inst_38280 = (state_38320[(9)]);
var inst_38279 = (state_38320[(14)]);
var inst_38278 = (state_38320[(2)]);
var inst_38279__$1 = cljs.core.nth.call(null,inst_38278,(0),null);
var inst_38280__$1 = cljs.core.nth.call(null,inst_38278,(1),null);
var inst_38281 = (inst_38279__$1 == null);
var inst_38282 = cljs.core._EQ_.call(null,inst_38280__$1,change);
var inst_38283 = (inst_38281) || (inst_38282);
var state_38320__$1 = (function (){var statearr_38342 = state_38320;
(statearr_38342[(9)] = inst_38280__$1);

(statearr_38342[(14)] = inst_38279__$1);

return statearr_38342;
})();
if(cljs.core.truth_(inst_38283)){
var statearr_38343_38400 = state_38320__$1;
(statearr_38343_38400[(1)] = (23));

} else {
var statearr_38344_38401 = state_38320__$1;
(statearr_38344_38401[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38321 === (36))){
var inst_38272 = (state_38320[(12)]);
var inst_38250 = inst_38272;
var state_38320__$1 = (function (){var statearr_38345 = state_38320;
(statearr_38345[(7)] = inst_38250);

return statearr_38345;
})();
var statearr_38346_38402 = state_38320__$1;
(statearr_38346_38402[(2)] = null);

(statearr_38346_38402[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38321 === (29))){
var inst_38294 = (state_38320[(11)]);
var state_38320__$1 = state_38320;
var statearr_38347_38403 = state_38320__$1;
(statearr_38347_38403[(2)] = inst_38294);

(statearr_38347_38403[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38321 === (6))){
var state_38320__$1 = state_38320;
var statearr_38348_38404 = state_38320__$1;
(statearr_38348_38404[(2)] = false);

(statearr_38348_38404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38321 === (28))){
var inst_38290 = (state_38320[(2)]);
var inst_38291 = calc_state.call(null);
var inst_38250 = inst_38291;
var state_38320__$1 = (function (){var statearr_38349 = state_38320;
(statearr_38349[(7)] = inst_38250);

(statearr_38349[(15)] = inst_38290);

return statearr_38349;
})();
var statearr_38350_38405 = state_38320__$1;
(statearr_38350_38405[(2)] = null);

(statearr_38350_38405[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38321 === (25))){
var inst_38316 = (state_38320[(2)]);
var state_38320__$1 = state_38320;
var statearr_38351_38406 = state_38320__$1;
(statearr_38351_38406[(2)] = inst_38316);

(statearr_38351_38406[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38321 === (34))){
var inst_38314 = (state_38320[(2)]);
var state_38320__$1 = state_38320;
var statearr_38352_38407 = state_38320__$1;
(statearr_38352_38407[(2)] = inst_38314);

(statearr_38352_38407[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38321 === (17))){
var state_38320__$1 = state_38320;
var statearr_38353_38408 = state_38320__$1;
(statearr_38353_38408[(2)] = false);

(statearr_38353_38408[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38321 === (3))){
var state_38320__$1 = state_38320;
var statearr_38354_38409 = state_38320__$1;
(statearr_38354_38409[(2)] = false);

(statearr_38354_38409[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38321 === (12))){
var inst_38318 = (state_38320[(2)]);
var state_38320__$1 = state_38320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38320__$1,inst_38318);
} else {
if((state_val_38321 === (2))){
var inst_38226 = (state_38320[(8)]);
var inst_38231 = inst_38226.cljs$lang$protocol_mask$partition0$;
var inst_38232 = (inst_38231 & (64));
var inst_38233 = inst_38226.cljs$core$ISeq$;
var inst_38234 = (inst_38232) || (inst_38233);
var state_38320__$1 = state_38320;
if(cljs.core.truth_(inst_38234)){
var statearr_38355_38410 = state_38320__$1;
(statearr_38355_38410[(1)] = (5));

} else {
var statearr_38356_38411 = state_38320__$1;
(statearr_38356_38411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38321 === (23))){
var inst_38279 = (state_38320[(14)]);
var inst_38285 = (inst_38279 == null);
var state_38320__$1 = state_38320;
if(cljs.core.truth_(inst_38285)){
var statearr_38357_38412 = state_38320__$1;
(statearr_38357_38412[(1)] = (26));

} else {
var statearr_38358_38413 = state_38320__$1;
(statearr_38358_38413[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38321 === (35))){
var inst_38305 = (state_38320[(2)]);
var state_38320__$1 = state_38320;
if(cljs.core.truth_(inst_38305)){
var statearr_38359_38414 = state_38320__$1;
(statearr_38359_38414[(1)] = (36));

} else {
var statearr_38360_38415 = state_38320__$1;
(statearr_38360_38415[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38321 === (19))){
var inst_38250 = (state_38320[(7)]);
var inst_38269 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38250);
var state_38320__$1 = state_38320;
var statearr_38361_38416 = state_38320__$1;
(statearr_38361_38416[(2)] = inst_38269);

(statearr_38361_38416[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38321 === (11))){
var inst_38250 = (state_38320[(7)]);
var inst_38254 = (inst_38250 == null);
var inst_38255 = cljs.core.not.call(null,inst_38254);
var state_38320__$1 = state_38320;
if(inst_38255){
var statearr_38362_38417 = state_38320__$1;
(statearr_38362_38417[(1)] = (13));

} else {
var statearr_38363_38418 = state_38320__$1;
(statearr_38363_38418[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38321 === (9))){
var inst_38226 = (state_38320[(8)]);
var state_38320__$1 = state_38320;
var statearr_38364_38419 = state_38320__$1;
(statearr_38364_38419[(2)] = inst_38226);

(statearr_38364_38419[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38321 === (5))){
var state_38320__$1 = state_38320;
var statearr_38365_38420 = state_38320__$1;
(statearr_38365_38420[(2)] = true);

(statearr_38365_38420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38321 === (14))){
var state_38320__$1 = state_38320;
var statearr_38366_38421 = state_38320__$1;
(statearr_38366_38421[(2)] = false);

(statearr_38366_38421[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38321 === (26))){
var inst_38280 = (state_38320[(9)]);
var inst_38287 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_38280);
var state_38320__$1 = state_38320;
var statearr_38367_38422 = state_38320__$1;
(statearr_38367_38422[(2)] = inst_38287);

(statearr_38367_38422[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38321 === (16))){
var state_38320__$1 = state_38320;
var statearr_38368_38423 = state_38320__$1;
(statearr_38368_38423[(2)] = true);

(statearr_38368_38423[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38321 === (38))){
var inst_38310 = (state_38320[(2)]);
var state_38320__$1 = state_38320;
var statearr_38369_38424 = state_38320__$1;
(statearr_38369_38424[(2)] = inst_38310);

(statearr_38369_38424[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38321 === (30))){
var inst_38274 = (state_38320[(13)]);
var inst_38280 = (state_38320[(9)]);
var inst_38273 = (state_38320[(10)]);
var inst_38297 = cljs.core.empty_QMARK_.call(null,inst_38273);
var inst_38298 = inst_38274.call(null,inst_38280);
var inst_38299 = cljs.core.not.call(null,inst_38298);
var inst_38300 = (inst_38297) && (inst_38299);
var state_38320__$1 = state_38320;
var statearr_38370_38425 = state_38320__$1;
(statearr_38370_38425[(2)] = inst_38300);

(statearr_38370_38425[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38321 === (10))){
var inst_38226 = (state_38320[(8)]);
var inst_38246 = (state_38320[(2)]);
var inst_38247 = cljs.core.get.call(null,inst_38246,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38248 = cljs.core.get.call(null,inst_38246,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38249 = cljs.core.get.call(null,inst_38246,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38250 = inst_38226;
var state_38320__$1 = (function (){var statearr_38371 = state_38320;
(statearr_38371[(16)] = inst_38247);

(statearr_38371[(17)] = inst_38248);

(statearr_38371[(7)] = inst_38250);

(statearr_38371[(18)] = inst_38249);

return statearr_38371;
})();
var statearr_38372_38426 = state_38320__$1;
(statearr_38372_38426[(2)] = null);

(statearr_38372_38426[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38321 === (18))){
var inst_38264 = (state_38320[(2)]);
var state_38320__$1 = state_38320;
var statearr_38373_38427 = state_38320__$1;
(statearr_38373_38427[(2)] = inst_38264);

(statearr_38373_38427[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38321 === (37))){
var state_38320__$1 = state_38320;
var statearr_38374_38428 = state_38320__$1;
(statearr_38374_38428[(2)] = null);

(statearr_38374_38428[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38321 === (8))){
var inst_38226 = (state_38320[(8)]);
var inst_38243 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38226);
var state_38320__$1 = state_38320;
var statearr_38375_38429 = state_38320__$1;
(statearr_38375_38429[(2)] = inst_38243);

(statearr_38375_38429[(1)] = (10));


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
});})(c__34337__auto___38383,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__34322__auto__,c__34337__auto___38383,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__34323__auto__ = null;
var cljs$core$async$mix_$_state_machine__34323__auto____0 = (function (){
var statearr_38379 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38379[(0)] = cljs$core$async$mix_$_state_machine__34323__auto__);

(statearr_38379[(1)] = (1));

return statearr_38379;
});
var cljs$core$async$mix_$_state_machine__34323__auto____1 = (function (state_38320){
while(true){
var ret_value__34324__auto__ = (function (){try{while(true){
var result__34325__auto__ = switch__34322__auto__.call(null,state_38320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34325__auto__;
}
break;
}
}catch (e38380){if((e38380 instanceof Object)){
var ex__34326__auto__ = e38380;
var statearr_38381_38430 = state_38320;
(statearr_38381_38430[(5)] = ex__34326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38431 = state_38320;
state_38320 = G__38431;
continue;
} else {
return ret_value__34324__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34323__auto__ = function(state_38320){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34323__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34323__auto____1.call(this,state_38320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34323__auto____0;
cljs$core$async$mix_$_state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34323__auto____1;
return cljs$core$async$mix_$_state_machine__34323__auto__;
})()
;})(switch__34322__auto__,c__34337__auto___38383,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__34339__auto__ = (function (){var statearr_38382 = f__34338__auto__.call(null);
(statearr_38382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34337__auto___38383);

return statearr_38382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34339__auto__);
});})(c__34337__auto___38383,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__30342__auto__ = (((p == null))?null:p);
var m__30343__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__30342__auto__)]);
if(!((m__30343__auto__ == null))){
return m__30343__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__30343__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__30343__auto____$1 == null))){
return m__30343__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__30342__auto__ = (((p == null))?null:p);
var m__30343__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__30342__auto__)]);
if(!((m__30343__auto__ == null))){
return m__30343__auto__.call(null,p,v,ch);
} else {
var m__30343__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__30343__auto____$1 == null))){
return m__30343__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args38432 = [];
var len__30749__auto___38435 = arguments.length;
var i__30750__auto___38436 = (0);
while(true){
if((i__30750__auto___38436 < len__30749__auto___38435)){
args38432.push((arguments[i__30750__auto___38436]));

var G__38437 = (i__30750__auto___38436 + (1));
i__30750__auto___38436 = G__38437;
continue;
} else {
}
break;
}

var G__38434 = args38432.length;
switch (G__38434) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38432.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__30342__auto__ = (((p == null))?null:p);
var m__30343__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30342__auto__)]);
if(!((m__30343__auto__ == null))){
return m__30343__auto__.call(null,p);
} else {
var m__30343__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30343__auto____$1 == null))){
return m__30343__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__30342__auto__ = (((p == null))?null:p);
var m__30343__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30342__auto__)]);
if(!((m__30343__auto__ == null))){
return m__30343__auto__.call(null,p,v);
} else {
var m__30343__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30343__auto____$1 == null))){
return m__30343__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args38440 = [];
var len__30749__auto___38565 = arguments.length;
var i__30750__auto___38566 = (0);
while(true){
if((i__30750__auto___38566 < len__30749__auto___38565)){
args38440.push((arguments[i__30750__auto___38566]));

var G__38567 = (i__30750__auto___38566 + (1));
i__30750__auto___38566 = G__38567;
continue;
} else {
}
break;
}

var G__38442 = args38440.length;
switch (G__38442) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38440.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__29679__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__29679__auto__)){
return or__29679__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__29679__auto__,mults){
return (function (p1__38439_SHARP_){
if(cljs.core.truth_(p1__38439_SHARP_.call(null,topic))){
return p1__38439_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__38439_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__29679__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async38443 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38443 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta38444){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta38444 = meta38444;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_38445,meta38444__$1){
var self__ = this;
var _38445__$1 = this;
return (new cljs.core.async.t_cljs$core$async38443(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta38444__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38443.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_38445){
var self__ = this;
var _38445__$1 = this;
return self__.meta38444;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38443.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async38443.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38443.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async38443.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38443.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38443.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38443.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38443.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta38444","meta38444",-715284945,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38443.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38443.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38443";

cljs.core.async.t_cljs$core$async38443.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30285__auto__,writer__30286__auto__,opt__30287__auto__){
return cljs.core._write.call(null,writer__30286__auto__,"cljs.core.async/t_cljs$core$async38443");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async38443 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async38443(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38444){
return (new cljs.core.async.t_cljs$core$async38443(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38444));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async38443(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34337__auto___38569 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34337__auto___38569,mults,ensure_mult,p){
return (function (){
var f__34338__auto__ = (function (){var switch__34322__auto__ = ((function (c__34337__auto___38569,mults,ensure_mult,p){
return (function (state_38517){
var state_val_38518 = (state_38517[(1)]);
if((state_val_38518 === (7))){
var inst_38513 = (state_38517[(2)]);
var state_38517__$1 = state_38517;
var statearr_38519_38570 = state_38517__$1;
(statearr_38519_38570[(2)] = inst_38513);

(statearr_38519_38570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38518 === (20))){
var state_38517__$1 = state_38517;
var statearr_38520_38571 = state_38517__$1;
(statearr_38520_38571[(2)] = null);

(statearr_38520_38571[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38518 === (1))){
var state_38517__$1 = state_38517;
var statearr_38521_38572 = state_38517__$1;
(statearr_38521_38572[(2)] = null);

(statearr_38521_38572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38518 === (24))){
var inst_38496 = (state_38517[(7)]);
var inst_38505 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_38496);
var state_38517__$1 = state_38517;
var statearr_38522_38573 = state_38517__$1;
(statearr_38522_38573[(2)] = inst_38505);

(statearr_38522_38573[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38518 === (4))){
var inst_38448 = (state_38517[(8)]);
var inst_38448__$1 = (state_38517[(2)]);
var inst_38449 = (inst_38448__$1 == null);
var state_38517__$1 = (function (){var statearr_38523 = state_38517;
(statearr_38523[(8)] = inst_38448__$1);

return statearr_38523;
})();
if(cljs.core.truth_(inst_38449)){
var statearr_38524_38574 = state_38517__$1;
(statearr_38524_38574[(1)] = (5));

} else {
var statearr_38525_38575 = state_38517__$1;
(statearr_38525_38575[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38518 === (15))){
var inst_38490 = (state_38517[(2)]);
var state_38517__$1 = state_38517;
var statearr_38526_38576 = state_38517__$1;
(statearr_38526_38576[(2)] = inst_38490);

(statearr_38526_38576[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38518 === (21))){
var inst_38510 = (state_38517[(2)]);
var state_38517__$1 = (function (){var statearr_38527 = state_38517;
(statearr_38527[(9)] = inst_38510);

return statearr_38527;
})();
var statearr_38528_38577 = state_38517__$1;
(statearr_38528_38577[(2)] = null);

(statearr_38528_38577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38518 === (13))){
var inst_38472 = (state_38517[(10)]);
var inst_38474 = cljs.core.chunked_seq_QMARK_.call(null,inst_38472);
var state_38517__$1 = state_38517;
if(inst_38474){
var statearr_38529_38578 = state_38517__$1;
(statearr_38529_38578[(1)] = (16));

} else {
var statearr_38530_38579 = state_38517__$1;
(statearr_38530_38579[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38518 === (22))){
var inst_38502 = (state_38517[(2)]);
var state_38517__$1 = state_38517;
if(cljs.core.truth_(inst_38502)){
var statearr_38531_38580 = state_38517__$1;
(statearr_38531_38580[(1)] = (23));

} else {
var statearr_38532_38581 = state_38517__$1;
(statearr_38532_38581[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38518 === (6))){
var inst_38498 = (state_38517[(11)]);
var inst_38496 = (state_38517[(7)]);
var inst_38448 = (state_38517[(8)]);
var inst_38496__$1 = topic_fn.call(null,inst_38448);
var inst_38497 = cljs.core.deref.call(null,mults);
var inst_38498__$1 = cljs.core.get.call(null,inst_38497,inst_38496__$1);
var state_38517__$1 = (function (){var statearr_38533 = state_38517;
(statearr_38533[(11)] = inst_38498__$1);

(statearr_38533[(7)] = inst_38496__$1);

return statearr_38533;
})();
if(cljs.core.truth_(inst_38498__$1)){
var statearr_38534_38582 = state_38517__$1;
(statearr_38534_38582[(1)] = (19));

} else {
var statearr_38535_38583 = state_38517__$1;
(statearr_38535_38583[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38518 === (25))){
var inst_38507 = (state_38517[(2)]);
var state_38517__$1 = state_38517;
var statearr_38536_38584 = state_38517__$1;
(statearr_38536_38584[(2)] = inst_38507);

(statearr_38536_38584[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38518 === (17))){
var inst_38472 = (state_38517[(10)]);
var inst_38481 = cljs.core.first.call(null,inst_38472);
var inst_38482 = cljs.core.async.muxch_STAR_.call(null,inst_38481);
var inst_38483 = cljs.core.async.close_BANG_.call(null,inst_38482);
var inst_38484 = cljs.core.next.call(null,inst_38472);
var inst_38458 = inst_38484;
var inst_38459 = null;
var inst_38460 = (0);
var inst_38461 = (0);
var state_38517__$1 = (function (){var statearr_38537 = state_38517;
(statearr_38537[(12)] = inst_38483);

(statearr_38537[(13)] = inst_38459);

(statearr_38537[(14)] = inst_38458);

(statearr_38537[(15)] = inst_38460);

(statearr_38537[(16)] = inst_38461);

return statearr_38537;
})();
var statearr_38538_38585 = state_38517__$1;
(statearr_38538_38585[(2)] = null);

(statearr_38538_38585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38518 === (3))){
var inst_38515 = (state_38517[(2)]);
var state_38517__$1 = state_38517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38517__$1,inst_38515);
} else {
if((state_val_38518 === (12))){
var inst_38492 = (state_38517[(2)]);
var state_38517__$1 = state_38517;
var statearr_38539_38586 = state_38517__$1;
(statearr_38539_38586[(2)] = inst_38492);

(statearr_38539_38586[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38518 === (2))){
var state_38517__$1 = state_38517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38517__$1,(4),ch);
} else {
if((state_val_38518 === (23))){
var state_38517__$1 = state_38517;
var statearr_38540_38587 = state_38517__$1;
(statearr_38540_38587[(2)] = null);

(statearr_38540_38587[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38518 === (19))){
var inst_38498 = (state_38517[(11)]);
var inst_38448 = (state_38517[(8)]);
var inst_38500 = cljs.core.async.muxch_STAR_.call(null,inst_38498);
var state_38517__$1 = state_38517;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38517__$1,(22),inst_38500,inst_38448);
} else {
if((state_val_38518 === (11))){
var inst_38458 = (state_38517[(14)]);
var inst_38472 = (state_38517[(10)]);
var inst_38472__$1 = cljs.core.seq.call(null,inst_38458);
var state_38517__$1 = (function (){var statearr_38541 = state_38517;
(statearr_38541[(10)] = inst_38472__$1);

return statearr_38541;
})();
if(inst_38472__$1){
var statearr_38542_38588 = state_38517__$1;
(statearr_38542_38588[(1)] = (13));

} else {
var statearr_38543_38589 = state_38517__$1;
(statearr_38543_38589[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38518 === (9))){
var inst_38494 = (state_38517[(2)]);
var state_38517__$1 = state_38517;
var statearr_38544_38590 = state_38517__$1;
(statearr_38544_38590[(2)] = inst_38494);

(statearr_38544_38590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38518 === (5))){
var inst_38455 = cljs.core.deref.call(null,mults);
var inst_38456 = cljs.core.vals.call(null,inst_38455);
var inst_38457 = cljs.core.seq.call(null,inst_38456);
var inst_38458 = inst_38457;
var inst_38459 = null;
var inst_38460 = (0);
var inst_38461 = (0);
var state_38517__$1 = (function (){var statearr_38545 = state_38517;
(statearr_38545[(13)] = inst_38459);

(statearr_38545[(14)] = inst_38458);

(statearr_38545[(15)] = inst_38460);

(statearr_38545[(16)] = inst_38461);

return statearr_38545;
})();
var statearr_38546_38591 = state_38517__$1;
(statearr_38546_38591[(2)] = null);

(statearr_38546_38591[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38518 === (14))){
var state_38517__$1 = state_38517;
var statearr_38550_38592 = state_38517__$1;
(statearr_38550_38592[(2)] = null);

(statearr_38550_38592[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38518 === (16))){
var inst_38472 = (state_38517[(10)]);
var inst_38476 = cljs.core.chunk_first.call(null,inst_38472);
var inst_38477 = cljs.core.chunk_rest.call(null,inst_38472);
var inst_38478 = cljs.core.count.call(null,inst_38476);
var inst_38458 = inst_38477;
var inst_38459 = inst_38476;
var inst_38460 = inst_38478;
var inst_38461 = (0);
var state_38517__$1 = (function (){var statearr_38551 = state_38517;
(statearr_38551[(13)] = inst_38459);

(statearr_38551[(14)] = inst_38458);

(statearr_38551[(15)] = inst_38460);

(statearr_38551[(16)] = inst_38461);

return statearr_38551;
})();
var statearr_38552_38593 = state_38517__$1;
(statearr_38552_38593[(2)] = null);

(statearr_38552_38593[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38518 === (10))){
var inst_38459 = (state_38517[(13)]);
var inst_38458 = (state_38517[(14)]);
var inst_38460 = (state_38517[(15)]);
var inst_38461 = (state_38517[(16)]);
var inst_38466 = cljs.core._nth.call(null,inst_38459,inst_38461);
var inst_38467 = cljs.core.async.muxch_STAR_.call(null,inst_38466);
var inst_38468 = cljs.core.async.close_BANG_.call(null,inst_38467);
var inst_38469 = (inst_38461 + (1));
var tmp38547 = inst_38459;
var tmp38548 = inst_38458;
var tmp38549 = inst_38460;
var inst_38458__$1 = tmp38548;
var inst_38459__$1 = tmp38547;
var inst_38460__$1 = tmp38549;
var inst_38461__$1 = inst_38469;
var state_38517__$1 = (function (){var statearr_38553 = state_38517;
(statearr_38553[(17)] = inst_38468);

(statearr_38553[(13)] = inst_38459__$1);

(statearr_38553[(14)] = inst_38458__$1);

(statearr_38553[(15)] = inst_38460__$1);

(statearr_38553[(16)] = inst_38461__$1);

return statearr_38553;
})();
var statearr_38554_38594 = state_38517__$1;
(statearr_38554_38594[(2)] = null);

(statearr_38554_38594[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38518 === (18))){
var inst_38487 = (state_38517[(2)]);
var state_38517__$1 = state_38517;
var statearr_38555_38595 = state_38517__$1;
(statearr_38555_38595[(2)] = inst_38487);

(statearr_38555_38595[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38518 === (8))){
var inst_38460 = (state_38517[(15)]);
var inst_38461 = (state_38517[(16)]);
var inst_38463 = (inst_38461 < inst_38460);
var inst_38464 = inst_38463;
var state_38517__$1 = state_38517;
if(cljs.core.truth_(inst_38464)){
var statearr_38556_38596 = state_38517__$1;
(statearr_38556_38596[(1)] = (10));

} else {
var statearr_38557_38597 = state_38517__$1;
(statearr_38557_38597[(1)] = (11));

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
});})(c__34337__auto___38569,mults,ensure_mult,p))
;
return ((function (switch__34322__auto__,c__34337__auto___38569,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__34323__auto__ = null;
var cljs$core$async$state_machine__34323__auto____0 = (function (){
var statearr_38561 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38561[(0)] = cljs$core$async$state_machine__34323__auto__);

(statearr_38561[(1)] = (1));

return statearr_38561;
});
var cljs$core$async$state_machine__34323__auto____1 = (function (state_38517){
while(true){
var ret_value__34324__auto__ = (function (){try{while(true){
var result__34325__auto__ = switch__34322__auto__.call(null,state_38517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34325__auto__;
}
break;
}
}catch (e38562){if((e38562 instanceof Object)){
var ex__34326__auto__ = e38562;
var statearr_38563_38598 = state_38517;
(statearr_38563_38598[(5)] = ex__34326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38599 = state_38517;
state_38517 = G__38599;
continue;
} else {
return ret_value__34324__auto__;
}
break;
}
});
cljs$core$async$state_machine__34323__auto__ = function(state_38517){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34323__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34323__auto____1.call(this,state_38517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34323__auto____0;
cljs$core$async$state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34323__auto____1;
return cljs$core$async$state_machine__34323__auto__;
})()
;})(switch__34322__auto__,c__34337__auto___38569,mults,ensure_mult,p))
})();
var state__34339__auto__ = (function (){var statearr_38564 = f__34338__auto__.call(null);
(statearr_38564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34337__auto___38569);

return statearr_38564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34339__auto__);
});})(c__34337__auto___38569,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args38600 = [];
var len__30749__auto___38603 = arguments.length;
var i__30750__auto___38604 = (0);
while(true){
if((i__30750__auto___38604 < len__30749__auto___38603)){
args38600.push((arguments[i__30750__auto___38604]));

var G__38605 = (i__30750__auto___38604 + (1));
i__30750__auto___38604 = G__38605;
continue;
} else {
}
break;
}

var G__38602 = args38600.length;
switch (G__38602) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38600.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args38607 = [];
var len__30749__auto___38610 = arguments.length;
var i__30750__auto___38611 = (0);
while(true){
if((i__30750__auto___38611 < len__30749__auto___38610)){
args38607.push((arguments[i__30750__auto___38611]));

var G__38612 = (i__30750__auto___38611 + (1));
i__30750__auto___38611 = G__38612;
continue;
} else {
}
break;
}

var G__38609 = args38607.length;
switch (G__38609) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38607.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args38614 = [];
var len__30749__auto___38685 = arguments.length;
var i__30750__auto___38686 = (0);
while(true){
if((i__30750__auto___38686 < len__30749__auto___38685)){
args38614.push((arguments[i__30750__auto___38686]));

var G__38687 = (i__30750__auto___38686 + (1));
i__30750__auto___38686 = G__38687;
continue;
} else {
}
break;
}

var G__38616 = args38614.length;
switch (G__38616) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38614.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__34337__auto___38689 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34337__auto___38689,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__34338__auto__ = (function (){var switch__34322__auto__ = ((function (c__34337__auto___38689,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_38655){
var state_val_38656 = (state_38655[(1)]);
if((state_val_38656 === (7))){
var state_38655__$1 = state_38655;
var statearr_38657_38690 = state_38655__$1;
(statearr_38657_38690[(2)] = null);

(statearr_38657_38690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38656 === (1))){
var state_38655__$1 = state_38655;
var statearr_38658_38691 = state_38655__$1;
(statearr_38658_38691[(2)] = null);

(statearr_38658_38691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38656 === (4))){
var inst_38619 = (state_38655[(7)]);
var inst_38621 = (inst_38619 < cnt);
var state_38655__$1 = state_38655;
if(cljs.core.truth_(inst_38621)){
var statearr_38659_38692 = state_38655__$1;
(statearr_38659_38692[(1)] = (6));

} else {
var statearr_38660_38693 = state_38655__$1;
(statearr_38660_38693[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38656 === (15))){
var inst_38651 = (state_38655[(2)]);
var state_38655__$1 = state_38655;
var statearr_38661_38694 = state_38655__$1;
(statearr_38661_38694[(2)] = inst_38651);

(statearr_38661_38694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38656 === (13))){
var inst_38644 = cljs.core.async.close_BANG_.call(null,out);
var state_38655__$1 = state_38655;
var statearr_38662_38695 = state_38655__$1;
(statearr_38662_38695[(2)] = inst_38644);

(statearr_38662_38695[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38656 === (6))){
var state_38655__$1 = state_38655;
var statearr_38663_38696 = state_38655__$1;
(statearr_38663_38696[(2)] = null);

(statearr_38663_38696[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38656 === (3))){
var inst_38653 = (state_38655[(2)]);
var state_38655__$1 = state_38655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38655__$1,inst_38653);
} else {
if((state_val_38656 === (12))){
var inst_38641 = (state_38655[(8)]);
var inst_38641__$1 = (state_38655[(2)]);
var inst_38642 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_38641__$1);
var state_38655__$1 = (function (){var statearr_38664 = state_38655;
(statearr_38664[(8)] = inst_38641__$1);

return statearr_38664;
})();
if(cljs.core.truth_(inst_38642)){
var statearr_38665_38697 = state_38655__$1;
(statearr_38665_38697[(1)] = (13));

} else {
var statearr_38666_38698 = state_38655__$1;
(statearr_38666_38698[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38656 === (2))){
var inst_38618 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_38619 = (0);
var state_38655__$1 = (function (){var statearr_38667 = state_38655;
(statearr_38667[(9)] = inst_38618);

(statearr_38667[(7)] = inst_38619);

return statearr_38667;
})();
var statearr_38668_38699 = state_38655__$1;
(statearr_38668_38699[(2)] = null);

(statearr_38668_38699[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38656 === (11))){
var inst_38619 = (state_38655[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38655,(10),Object,null,(9));
var inst_38628 = chs__$1.call(null,inst_38619);
var inst_38629 = done.call(null,inst_38619);
var inst_38630 = cljs.core.async.take_BANG_.call(null,inst_38628,inst_38629);
var state_38655__$1 = state_38655;
var statearr_38669_38700 = state_38655__$1;
(statearr_38669_38700[(2)] = inst_38630);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38655__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38656 === (9))){
var inst_38619 = (state_38655[(7)]);
var inst_38632 = (state_38655[(2)]);
var inst_38633 = (inst_38619 + (1));
var inst_38619__$1 = inst_38633;
var state_38655__$1 = (function (){var statearr_38670 = state_38655;
(statearr_38670[(10)] = inst_38632);

(statearr_38670[(7)] = inst_38619__$1);

return statearr_38670;
})();
var statearr_38671_38701 = state_38655__$1;
(statearr_38671_38701[(2)] = null);

(statearr_38671_38701[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38656 === (5))){
var inst_38639 = (state_38655[(2)]);
var state_38655__$1 = (function (){var statearr_38672 = state_38655;
(statearr_38672[(11)] = inst_38639);

return statearr_38672;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38655__$1,(12),dchan);
} else {
if((state_val_38656 === (14))){
var inst_38641 = (state_38655[(8)]);
var inst_38646 = cljs.core.apply.call(null,f,inst_38641);
var state_38655__$1 = state_38655;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38655__$1,(16),out,inst_38646);
} else {
if((state_val_38656 === (16))){
var inst_38648 = (state_38655[(2)]);
var state_38655__$1 = (function (){var statearr_38673 = state_38655;
(statearr_38673[(12)] = inst_38648);

return statearr_38673;
})();
var statearr_38674_38702 = state_38655__$1;
(statearr_38674_38702[(2)] = null);

(statearr_38674_38702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38656 === (10))){
var inst_38623 = (state_38655[(2)]);
var inst_38624 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_38655__$1 = (function (){var statearr_38675 = state_38655;
(statearr_38675[(13)] = inst_38623);

return statearr_38675;
})();
var statearr_38676_38703 = state_38655__$1;
(statearr_38676_38703[(2)] = inst_38624);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38655__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38656 === (8))){
var inst_38637 = (state_38655[(2)]);
var state_38655__$1 = state_38655;
var statearr_38677_38704 = state_38655__$1;
(statearr_38677_38704[(2)] = inst_38637);

(statearr_38677_38704[(1)] = (5));


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
});})(c__34337__auto___38689,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__34322__auto__,c__34337__auto___38689,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__34323__auto__ = null;
var cljs$core$async$state_machine__34323__auto____0 = (function (){
var statearr_38681 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38681[(0)] = cljs$core$async$state_machine__34323__auto__);

(statearr_38681[(1)] = (1));

return statearr_38681;
});
var cljs$core$async$state_machine__34323__auto____1 = (function (state_38655){
while(true){
var ret_value__34324__auto__ = (function (){try{while(true){
var result__34325__auto__ = switch__34322__auto__.call(null,state_38655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34325__auto__;
}
break;
}
}catch (e38682){if((e38682 instanceof Object)){
var ex__34326__auto__ = e38682;
var statearr_38683_38705 = state_38655;
(statearr_38683_38705[(5)] = ex__34326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38706 = state_38655;
state_38655 = G__38706;
continue;
} else {
return ret_value__34324__auto__;
}
break;
}
});
cljs$core$async$state_machine__34323__auto__ = function(state_38655){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34323__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34323__auto____1.call(this,state_38655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34323__auto____0;
cljs$core$async$state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34323__auto____1;
return cljs$core$async$state_machine__34323__auto__;
})()
;})(switch__34322__auto__,c__34337__auto___38689,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__34339__auto__ = (function (){var statearr_38684 = f__34338__auto__.call(null);
(statearr_38684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34337__auto___38689);

return statearr_38684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34339__auto__);
});})(c__34337__auto___38689,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args38708 = [];
var len__30749__auto___38764 = arguments.length;
var i__30750__auto___38765 = (0);
while(true){
if((i__30750__auto___38765 < len__30749__auto___38764)){
args38708.push((arguments[i__30750__auto___38765]));

var G__38766 = (i__30750__auto___38765 + (1));
i__30750__auto___38765 = G__38766;
continue;
} else {
}
break;
}

var G__38710 = args38708.length;
switch (G__38710) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38708.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34337__auto___38768 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34337__auto___38768,out){
return (function (){
var f__34338__auto__ = (function (){var switch__34322__auto__ = ((function (c__34337__auto___38768,out){
return (function (state_38740){
var state_val_38741 = (state_38740[(1)]);
if((state_val_38741 === (7))){
var inst_38719 = (state_38740[(7)]);
var inst_38720 = (state_38740[(8)]);
var inst_38719__$1 = (state_38740[(2)]);
var inst_38720__$1 = cljs.core.nth.call(null,inst_38719__$1,(0),null);
var inst_38721 = cljs.core.nth.call(null,inst_38719__$1,(1),null);
var inst_38722 = (inst_38720__$1 == null);
var state_38740__$1 = (function (){var statearr_38742 = state_38740;
(statearr_38742[(9)] = inst_38721);

(statearr_38742[(7)] = inst_38719__$1);

(statearr_38742[(8)] = inst_38720__$1);

return statearr_38742;
})();
if(cljs.core.truth_(inst_38722)){
var statearr_38743_38769 = state_38740__$1;
(statearr_38743_38769[(1)] = (8));

} else {
var statearr_38744_38770 = state_38740__$1;
(statearr_38744_38770[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38741 === (1))){
var inst_38711 = cljs.core.vec.call(null,chs);
var inst_38712 = inst_38711;
var state_38740__$1 = (function (){var statearr_38745 = state_38740;
(statearr_38745[(10)] = inst_38712);

return statearr_38745;
})();
var statearr_38746_38771 = state_38740__$1;
(statearr_38746_38771[(2)] = null);

(statearr_38746_38771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38741 === (4))){
var inst_38712 = (state_38740[(10)]);
var state_38740__$1 = state_38740;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38740__$1,(7),inst_38712);
} else {
if((state_val_38741 === (6))){
var inst_38736 = (state_38740[(2)]);
var state_38740__$1 = state_38740;
var statearr_38747_38772 = state_38740__$1;
(statearr_38747_38772[(2)] = inst_38736);

(statearr_38747_38772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38741 === (3))){
var inst_38738 = (state_38740[(2)]);
var state_38740__$1 = state_38740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38740__$1,inst_38738);
} else {
if((state_val_38741 === (2))){
var inst_38712 = (state_38740[(10)]);
var inst_38714 = cljs.core.count.call(null,inst_38712);
var inst_38715 = (inst_38714 > (0));
var state_38740__$1 = state_38740;
if(cljs.core.truth_(inst_38715)){
var statearr_38749_38773 = state_38740__$1;
(statearr_38749_38773[(1)] = (4));

} else {
var statearr_38750_38774 = state_38740__$1;
(statearr_38750_38774[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38741 === (11))){
var inst_38712 = (state_38740[(10)]);
var inst_38729 = (state_38740[(2)]);
var tmp38748 = inst_38712;
var inst_38712__$1 = tmp38748;
var state_38740__$1 = (function (){var statearr_38751 = state_38740;
(statearr_38751[(10)] = inst_38712__$1);

(statearr_38751[(11)] = inst_38729);

return statearr_38751;
})();
var statearr_38752_38775 = state_38740__$1;
(statearr_38752_38775[(2)] = null);

(statearr_38752_38775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38741 === (9))){
var inst_38720 = (state_38740[(8)]);
var state_38740__$1 = state_38740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38740__$1,(11),out,inst_38720);
} else {
if((state_val_38741 === (5))){
var inst_38734 = cljs.core.async.close_BANG_.call(null,out);
var state_38740__$1 = state_38740;
var statearr_38753_38776 = state_38740__$1;
(statearr_38753_38776[(2)] = inst_38734);

(statearr_38753_38776[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38741 === (10))){
var inst_38732 = (state_38740[(2)]);
var state_38740__$1 = state_38740;
var statearr_38754_38777 = state_38740__$1;
(statearr_38754_38777[(2)] = inst_38732);

(statearr_38754_38777[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38741 === (8))){
var inst_38721 = (state_38740[(9)]);
var inst_38719 = (state_38740[(7)]);
var inst_38712 = (state_38740[(10)]);
var inst_38720 = (state_38740[(8)]);
var inst_38724 = (function (){var cs = inst_38712;
var vec__38717 = inst_38719;
var v = inst_38720;
var c = inst_38721;
return ((function (cs,vec__38717,v,c,inst_38721,inst_38719,inst_38712,inst_38720,state_val_38741,c__34337__auto___38768,out){
return (function (p1__38707_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__38707_SHARP_);
});
;})(cs,vec__38717,v,c,inst_38721,inst_38719,inst_38712,inst_38720,state_val_38741,c__34337__auto___38768,out))
})();
var inst_38725 = cljs.core.filterv.call(null,inst_38724,inst_38712);
var inst_38712__$1 = inst_38725;
var state_38740__$1 = (function (){var statearr_38755 = state_38740;
(statearr_38755[(10)] = inst_38712__$1);

return statearr_38755;
})();
var statearr_38756_38778 = state_38740__$1;
(statearr_38756_38778[(2)] = null);

(statearr_38756_38778[(1)] = (2));


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
});})(c__34337__auto___38768,out))
;
return ((function (switch__34322__auto__,c__34337__auto___38768,out){
return (function() {
var cljs$core$async$state_machine__34323__auto__ = null;
var cljs$core$async$state_machine__34323__auto____0 = (function (){
var statearr_38760 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38760[(0)] = cljs$core$async$state_machine__34323__auto__);

(statearr_38760[(1)] = (1));

return statearr_38760;
});
var cljs$core$async$state_machine__34323__auto____1 = (function (state_38740){
while(true){
var ret_value__34324__auto__ = (function (){try{while(true){
var result__34325__auto__ = switch__34322__auto__.call(null,state_38740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34325__auto__;
}
break;
}
}catch (e38761){if((e38761 instanceof Object)){
var ex__34326__auto__ = e38761;
var statearr_38762_38779 = state_38740;
(statearr_38762_38779[(5)] = ex__34326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38780 = state_38740;
state_38740 = G__38780;
continue;
} else {
return ret_value__34324__auto__;
}
break;
}
});
cljs$core$async$state_machine__34323__auto__ = function(state_38740){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34323__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34323__auto____1.call(this,state_38740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34323__auto____0;
cljs$core$async$state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34323__auto____1;
return cljs$core$async$state_machine__34323__auto__;
})()
;})(switch__34322__auto__,c__34337__auto___38768,out))
})();
var state__34339__auto__ = (function (){var statearr_38763 = f__34338__auto__.call(null);
(statearr_38763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34337__auto___38768);

return statearr_38763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34339__auto__);
});})(c__34337__auto___38768,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args38781 = [];
var len__30749__auto___38830 = arguments.length;
var i__30750__auto___38831 = (0);
while(true){
if((i__30750__auto___38831 < len__30749__auto___38830)){
args38781.push((arguments[i__30750__auto___38831]));

var G__38832 = (i__30750__auto___38831 + (1));
i__30750__auto___38831 = G__38832;
continue;
} else {
}
break;
}

var G__38783 = args38781.length;
switch (G__38783) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38781.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34337__auto___38834 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34337__auto___38834,out){
return (function (){
var f__34338__auto__ = (function (){var switch__34322__auto__ = ((function (c__34337__auto___38834,out){
return (function (state_38807){
var state_val_38808 = (state_38807[(1)]);
if((state_val_38808 === (7))){
var inst_38789 = (state_38807[(7)]);
var inst_38789__$1 = (state_38807[(2)]);
var inst_38790 = (inst_38789__$1 == null);
var inst_38791 = cljs.core.not.call(null,inst_38790);
var state_38807__$1 = (function (){var statearr_38809 = state_38807;
(statearr_38809[(7)] = inst_38789__$1);

return statearr_38809;
})();
if(inst_38791){
var statearr_38810_38835 = state_38807__$1;
(statearr_38810_38835[(1)] = (8));

} else {
var statearr_38811_38836 = state_38807__$1;
(statearr_38811_38836[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38808 === (1))){
var inst_38784 = (0);
var state_38807__$1 = (function (){var statearr_38812 = state_38807;
(statearr_38812[(8)] = inst_38784);

return statearr_38812;
})();
var statearr_38813_38837 = state_38807__$1;
(statearr_38813_38837[(2)] = null);

(statearr_38813_38837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38808 === (4))){
var state_38807__$1 = state_38807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38807__$1,(7),ch);
} else {
if((state_val_38808 === (6))){
var inst_38802 = (state_38807[(2)]);
var state_38807__$1 = state_38807;
var statearr_38814_38838 = state_38807__$1;
(statearr_38814_38838[(2)] = inst_38802);

(statearr_38814_38838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38808 === (3))){
var inst_38804 = (state_38807[(2)]);
var inst_38805 = cljs.core.async.close_BANG_.call(null,out);
var state_38807__$1 = (function (){var statearr_38815 = state_38807;
(statearr_38815[(9)] = inst_38804);

return statearr_38815;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38807__$1,inst_38805);
} else {
if((state_val_38808 === (2))){
var inst_38784 = (state_38807[(8)]);
var inst_38786 = (inst_38784 < n);
var state_38807__$1 = state_38807;
if(cljs.core.truth_(inst_38786)){
var statearr_38816_38839 = state_38807__$1;
(statearr_38816_38839[(1)] = (4));

} else {
var statearr_38817_38840 = state_38807__$1;
(statearr_38817_38840[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38808 === (11))){
var inst_38784 = (state_38807[(8)]);
var inst_38794 = (state_38807[(2)]);
var inst_38795 = (inst_38784 + (1));
var inst_38784__$1 = inst_38795;
var state_38807__$1 = (function (){var statearr_38818 = state_38807;
(statearr_38818[(8)] = inst_38784__$1);

(statearr_38818[(10)] = inst_38794);

return statearr_38818;
})();
var statearr_38819_38841 = state_38807__$1;
(statearr_38819_38841[(2)] = null);

(statearr_38819_38841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38808 === (9))){
var state_38807__$1 = state_38807;
var statearr_38820_38842 = state_38807__$1;
(statearr_38820_38842[(2)] = null);

(statearr_38820_38842[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38808 === (5))){
var state_38807__$1 = state_38807;
var statearr_38821_38843 = state_38807__$1;
(statearr_38821_38843[(2)] = null);

(statearr_38821_38843[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38808 === (10))){
var inst_38799 = (state_38807[(2)]);
var state_38807__$1 = state_38807;
var statearr_38822_38844 = state_38807__$1;
(statearr_38822_38844[(2)] = inst_38799);

(statearr_38822_38844[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38808 === (8))){
var inst_38789 = (state_38807[(7)]);
var state_38807__$1 = state_38807;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38807__$1,(11),out,inst_38789);
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
});})(c__34337__auto___38834,out))
;
return ((function (switch__34322__auto__,c__34337__auto___38834,out){
return (function() {
var cljs$core$async$state_machine__34323__auto__ = null;
var cljs$core$async$state_machine__34323__auto____0 = (function (){
var statearr_38826 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38826[(0)] = cljs$core$async$state_machine__34323__auto__);

(statearr_38826[(1)] = (1));

return statearr_38826;
});
var cljs$core$async$state_machine__34323__auto____1 = (function (state_38807){
while(true){
var ret_value__34324__auto__ = (function (){try{while(true){
var result__34325__auto__ = switch__34322__auto__.call(null,state_38807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34325__auto__;
}
break;
}
}catch (e38827){if((e38827 instanceof Object)){
var ex__34326__auto__ = e38827;
var statearr_38828_38845 = state_38807;
(statearr_38828_38845[(5)] = ex__34326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38846 = state_38807;
state_38807 = G__38846;
continue;
} else {
return ret_value__34324__auto__;
}
break;
}
});
cljs$core$async$state_machine__34323__auto__ = function(state_38807){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34323__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34323__auto____1.call(this,state_38807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34323__auto____0;
cljs$core$async$state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34323__auto____1;
return cljs$core$async$state_machine__34323__auto__;
})()
;})(switch__34322__auto__,c__34337__auto___38834,out))
})();
var state__34339__auto__ = (function (){var statearr_38829 = f__34338__auto__.call(null);
(statearr_38829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34337__auto___38834);

return statearr_38829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34339__auto__);
});})(c__34337__auto___38834,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async38854 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38854 = (function (map_LT_,f,ch,meta38855){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta38855 = meta38855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38856,meta38855__$1){
var self__ = this;
var _38856__$1 = this;
return (new cljs.core.async.t_cljs$core$async38854(self__.map_LT_,self__.f,self__.ch,meta38855__$1));
});

cljs.core.async.t_cljs$core$async38854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38856){
var self__ = this;
var _38856__$1 = this;
return self__.meta38855;
});

cljs.core.async.t_cljs$core$async38854.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async38854.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38854.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38854.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async38854.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async38857 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38857 = (function (map_LT_,f,ch,meta38855,_,fn1,meta38858){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta38855 = meta38855;
this._ = _;
this.fn1 = fn1;
this.meta38858 = meta38858;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_38859,meta38858__$1){
var self__ = this;
var _38859__$1 = this;
return (new cljs.core.async.t_cljs$core$async38857(self__.map_LT_,self__.f,self__.ch,self__.meta38855,self__._,self__.fn1,meta38858__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async38857.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_38859){
var self__ = this;
var _38859__$1 = this;
return self__.meta38858;
});})(___$1))
;

cljs.core.async.t_cljs$core$async38857.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async38857.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async38857.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async38857.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__38847_SHARP_){
return f1.call(null,(((p1__38847_SHARP_ == null))?null:self__.f.call(null,p1__38847_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async38857.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38855","meta38855",1902869838,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async38854","cljs.core.async/t_cljs$core$async38854",1620756421,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38858","meta38858",2082795371,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async38857.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38857.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38857";

cljs.core.async.t_cljs$core$async38857.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30285__auto__,writer__30286__auto__,opt__30287__auto__){
return cljs.core._write.call(null,writer__30286__auto__,"cljs.core.async/t_cljs$core$async38857");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async38857 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38857(map_LT___$1,f__$1,ch__$1,meta38855__$1,___$2,fn1__$1,meta38858){
return (new cljs.core.async.t_cljs$core$async38857(map_LT___$1,f__$1,ch__$1,meta38855__$1,___$2,fn1__$1,meta38858));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async38857(self__.map_LT_,self__.f,self__.ch,self__.meta38855,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__29667__auto__ = ret;
if(cljs.core.truth_(and__29667__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__29667__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async38854.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async38854.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async38854.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38855","meta38855",1902869838,null)], null);
});

cljs.core.async.t_cljs$core$async38854.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38854.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38854";

cljs.core.async.t_cljs$core$async38854.cljs$lang$ctorPrWriter = (function (this__30285__auto__,writer__30286__auto__,opt__30287__auto__){
return cljs.core._write.call(null,writer__30286__auto__,"cljs.core.async/t_cljs$core$async38854");
});

cljs.core.async.__GT_t_cljs$core$async38854 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38854(map_LT___$1,f__$1,ch__$1,meta38855){
return (new cljs.core.async.t_cljs$core$async38854(map_LT___$1,f__$1,ch__$1,meta38855));
});

}

return (new cljs.core.async.t_cljs$core$async38854(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async38863 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38863 = (function (map_GT_,f,ch,meta38864){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta38864 = meta38864;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38865,meta38864__$1){
var self__ = this;
var _38865__$1 = this;
return (new cljs.core.async.t_cljs$core$async38863(self__.map_GT_,self__.f,self__.ch,meta38864__$1));
});

cljs.core.async.t_cljs$core$async38863.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38865){
var self__ = this;
var _38865__$1 = this;
return self__.meta38864;
});

cljs.core.async.t_cljs$core$async38863.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async38863.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38863.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async38863.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async38863.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async38863.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async38863.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38864","meta38864",-1087005015,null)], null);
});

cljs.core.async.t_cljs$core$async38863.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38863.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38863";

cljs.core.async.t_cljs$core$async38863.cljs$lang$ctorPrWriter = (function (this__30285__auto__,writer__30286__auto__,opt__30287__auto__){
return cljs.core._write.call(null,writer__30286__auto__,"cljs.core.async/t_cljs$core$async38863");
});

cljs.core.async.__GT_t_cljs$core$async38863 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async38863(map_GT___$1,f__$1,ch__$1,meta38864){
return (new cljs.core.async.t_cljs$core$async38863(map_GT___$1,f__$1,ch__$1,meta38864));
});

}

return (new cljs.core.async.t_cljs$core$async38863(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async38869 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38869 = (function (filter_GT_,p,ch,meta38870){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta38870 = meta38870;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38871,meta38870__$1){
var self__ = this;
var _38871__$1 = this;
return (new cljs.core.async.t_cljs$core$async38869(self__.filter_GT_,self__.p,self__.ch,meta38870__$1));
});

cljs.core.async.t_cljs$core$async38869.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38871){
var self__ = this;
var _38871__$1 = this;
return self__.meta38870;
});

cljs.core.async.t_cljs$core$async38869.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async38869.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38869.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38869.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async38869.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async38869.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async38869.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async38869.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38870","meta38870",-699231055,null)], null);
});

cljs.core.async.t_cljs$core$async38869.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38869.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38869";

cljs.core.async.t_cljs$core$async38869.cljs$lang$ctorPrWriter = (function (this__30285__auto__,writer__30286__auto__,opt__30287__auto__){
return cljs.core._write.call(null,writer__30286__auto__,"cljs.core.async/t_cljs$core$async38869");
});

cljs.core.async.__GT_t_cljs$core$async38869 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async38869(filter_GT___$1,p__$1,ch__$1,meta38870){
return (new cljs.core.async.t_cljs$core$async38869(filter_GT___$1,p__$1,ch__$1,meta38870));
});

}

return (new cljs.core.async.t_cljs$core$async38869(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args38872 = [];
var len__30749__auto___38916 = arguments.length;
var i__30750__auto___38917 = (0);
while(true){
if((i__30750__auto___38917 < len__30749__auto___38916)){
args38872.push((arguments[i__30750__auto___38917]));

var G__38918 = (i__30750__auto___38917 + (1));
i__30750__auto___38917 = G__38918;
continue;
} else {
}
break;
}

var G__38874 = args38872.length;
switch (G__38874) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38872.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34337__auto___38920 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34337__auto___38920,out){
return (function (){
var f__34338__auto__ = (function (){var switch__34322__auto__ = ((function (c__34337__auto___38920,out){
return (function (state_38895){
var state_val_38896 = (state_38895[(1)]);
if((state_val_38896 === (7))){
var inst_38891 = (state_38895[(2)]);
var state_38895__$1 = state_38895;
var statearr_38897_38921 = state_38895__$1;
(statearr_38897_38921[(2)] = inst_38891);

(statearr_38897_38921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38896 === (1))){
var state_38895__$1 = state_38895;
var statearr_38898_38922 = state_38895__$1;
(statearr_38898_38922[(2)] = null);

(statearr_38898_38922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38896 === (4))){
var inst_38877 = (state_38895[(7)]);
var inst_38877__$1 = (state_38895[(2)]);
var inst_38878 = (inst_38877__$1 == null);
var state_38895__$1 = (function (){var statearr_38899 = state_38895;
(statearr_38899[(7)] = inst_38877__$1);

return statearr_38899;
})();
if(cljs.core.truth_(inst_38878)){
var statearr_38900_38923 = state_38895__$1;
(statearr_38900_38923[(1)] = (5));

} else {
var statearr_38901_38924 = state_38895__$1;
(statearr_38901_38924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38896 === (6))){
var inst_38877 = (state_38895[(7)]);
var inst_38882 = p.call(null,inst_38877);
var state_38895__$1 = state_38895;
if(cljs.core.truth_(inst_38882)){
var statearr_38902_38925 = state_38895__$1;
(statearr_38902_38925[(1)] = (8));

} else {
var statearr_38903_38926 = state_38895__$1;
(statearr_38903_38926[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38896 === (3))){
var inst_38893 = (state_38895[(2)]);
var state_38895__$1 = state_38895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38895__$1,inst_38893);
} else {
if((state_val_38896 === (2))){
var state_38895__$1 = state_38895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38895__$1,(4),ch);
} else {
if((state_val_38896 === (11))){
var inst_38885 = (state_38895[(2)]);
var state_38895__$1 = state_38895;
var statearr_38904_38927 = state_38895__$1;
(statearr_38904_38927[(2)] = inst_38885);

(statearr_38904_38927[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38896 === (9))){
var state_38895__$1 = state_38895;
var statearr_38905_38928 = state_38895__$1;
(statearr_38905_38928[(2)] = null);

(statearr_38905_38928[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38896 === (5))){
var inst_38880 = cljs.core.async.close_BANG_.call(null,out);
var state_38895__$1 = state_38895;
var statearr_38906_38929 = state_38895__$1;
(statearr_38906_38929[(2)] = inst_38880);

(statearr_38906_38929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38896 === (10))){
var inst_38888 = (state_38895[(2)]);
var state_38895__$1 = (function (){var statearr_38907 = state_38895;
(statearr_38907[(8)] = inst_38888);

return statearr_38907;
})();
var statearr_38908_38930 = state_38895__$1;
(statearr_38908_38930[(2)] = null);

(statearr_38908_38930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38896 === (8))){
var inst_38877 = (state_38895[(7)]);
var state_38895__$1 = state_38895;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38895__$1,(11),out,inst_38877);
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
});})(c__34337__auto___38920,out))
;
return ((function (switch__34322__auto__,c__34337__auto___38920,out){
return (function() {
var cljs$core$async$state_machine__34323__auto__ = null;
var cljs$core$async$state_machine__34323__auto____0 = (function (){
var statearr_38912 = [null,null,null,null,null,null,null,null,null];
(statearr_38912[(0)] = cljs$core$async$state_machine__34323__auto__);

(statearr_38912[(1)] = (1));

return statearr_38912;
});
var cljs$core$async$state_machine__34323__auto____1 = (function (state_38895){
while(true){
var ret_value__34324__auto__ = (function (){try{while(true){
var result__34325__auto__ = switch__34322__auto__.call(null,state_38895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34325__auto__;
}
break;
}
}catch (e38913){if((e38913 instanceof Object)){
var ex__34326__auto__ = e38913;
var statearr_38914_38931 = state_38895;
(statearr_38914_38931[(5)] = ex__34326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38932 = state_38895;
state_38895 = G__38932;
continue;
} else {
return ret_value__34324__auto__;
}
break;
}
});
cljs$core$async$state_machine__34323__auto__ = function(state_38895){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34323__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34323__auto____1.call(this,state_38895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34323__auto____0;
cljs$core$async$state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34323__auto____1;
return cljs$core$async$state_machine__34323__auto__;
})()
;})(switch__34322__auto__,c__34337__auto___38920,out))
})();
var state__34339__auto__ = (function (){var statearr_38915 = f__34338__auto__.call(null);
(statearr_38915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34337__auto___38920);

return statearr_38915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34339__auto__);
});})(c__34337__auto___38920,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args38933 = [];
var len__30749__auto___38936 = arguments.length;
var i__30750__auto___38937 = (0);
while(true){
if((i__30750__auto___38937 < len__30749__auto___38936)){
args38933.push((arguments[i__30750__auto___38937]));

var G__38938 = (i__30750__auto___38937 + (1));
i__30750__auto___38937 = G__38938;
continue;
} else {
}
break;
}

var G__38935 = args38933.length;
switch (G__38935) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38933.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__34337__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34337__auto__){
return (function (){
var f__34338__auto__ = (function (){var switch__34322__auto__ = ((function (c__34337__auto__){
return (function (state_39105){
var state_val_39106 = (state_39105[(1)]);
if((state_val_39106 === (7))){
var inst_39101 = (state_39105[(2)]);
var state_39105__$1 = state_39105;
var statearr_39107_39148 = state_39105__$1;
(statearr_39107_39148[(2)] = inst_39101);

(statearr_39107_39148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39106 === (20))){
var inst_39071 = (state_39105[(7)]);
var inst_39082 = (state_39105[(2)]);
var inst_39083 = cljs.core.next.call(null,inst_39071);
var inst_39057 = inst_39083;
var inst_39058 = null;
var inst_39059 = (0);
var inst_39060 = (0);
var state_39105__$1 = (function (){var statearr_39108 = state_39105;
(statearr_39108[(8)] = inst_39058);

(statearr_39108[(9)] = inst_39059);

(statearr_39108[(10)] = inst_39082);

(statearr_39108[(11)] = inst_39057);

(statearr_39108[(12)] = inst_39060);

return statearr_39108;
})();
var statearr_39109_39149 = state_39105__$1;
(statearr_39109_39149[(2)] = null);

(statearr_39109_39149[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39106 === (1))){
var state_39105__$1 = state_39105;
var statearr_39110_39150 = state_39105__$1;
(statearr_39110_39150[(2)] = null);

(statearr_39110_39150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39106 === (4))){
var inst_39046 = (state_39105[(13)]);
var inst_39046__$1 = (state_39105[(2)]);
var inst_39047 = (inst_39046__$1 == null);
var state_39105__$1 = (function (){var statearr_39111 = state_39105;
(statearr_39111[(13)] = inst_39046__$1);

return statearr_39111;
})();
if(cljs.core.truth_(inst_39047)){
var statearr_39112_39151 = state_39105__$1;
(statearr_39112_39151[(1)] = (5));

} else {
var statearr_39113_39152 = state_39105__$1;
(statearr_39113_39152[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39106 === (15))){
var state_39105__$1 = state_39105;
var statearr_39117_39153 = state_39105__$1;
(statearr_39117_39153[(2)] = null);

(statearr_39117_39153[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39106 === (21))){
var state_39105__$1 = state_39105;
var statearr_39118_39154 = state_39105__$1;
(statearr_39118_39154[(2)] = null);

(statearr_39118_39154[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39106 === (13))){
var inst_39058 = (state_39105[(8)]);
var inst_39059 = (state_39105[(9)]);
var inst_39057 = (state_39105[(11)]);
var inst_39060 = (state_39105[(12)]);
var inst_39067 = (state_39105[(2)]);
var inst_39068 = (inst_39060 + (1));
var tmp39114 = inst_39058;
var tmp39115 = inst_39059;
var tmp39116 = inst_39057;
var inst_39057__$1 = tmp39116;
var inst_39058__$1 = tmp39114;
var inst_39059__$1 = tmp39115;
var inst_39060__$1 = inst_39068;
var state_39105__$1 = (function (){var statearr_39119 = state_39105;
(statearr_39119[(8)] = inst_39058__$1);

(statearr_39119[(9)] = inst_39059__$1);

(statearr_39119[(14)] = inst_39067);

(statearr_39119[(11)] = inst_39057__$1);

(statearr_39119[(12)] = inst_39060__$1);

return statearr_39119;
})();
var statearr_39120_39155 = state_39105__$1;
(statearr_39120_39155[(2)] = null);

(statearr_39120_39155[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39106 === (22))){
var state_39105__$1 = state_39105;
var statearr_39121_39156 = state_39105__$1;
(statearr_39121_39156[(2)] = null);

(statearr_39121_39156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39106 === (6))){
var inst_39046 = (state_39105[(13)]);
var inst_39055 = f.call(null,inst_39046);
var inst_39056 = cljs.core.seq.call(null,inst_39055);
var inst_39057 = inst_39056;
var inst_39058 = null;
var inst_39059 = (0);
var inst_39060 = (0);
var state_39105__$1 = (function (){var statearr_39122 = state_39105;
(statearr_39122[(8)] = inst_39058);

(statearr_39122[(9)] = inst_39059);

(statearr_39122[(11)] = inst_39057);

(statearr_39122[(12)] = inst_39060);

return statearr_39122;
})();
var statearr_39123_39157 = state_39105__$1;
(statearr_39123_39157[(2)] = null);

(statearr_39123_39157[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39106 === (17))){
var inst_39071 = (state_39105[(7)]);
var inst_39075 = cljs.core.chunk_first.call(null,inst_39071);
var inst_39076 = cljs.core.chunk_rest.call(null,inst_39071);
var inst_39077 = cljs.core.count.call(null,inst_39075);
var inst_39057 = inst_39076;
var inst_39058 = inst_39075;
var inst_39059 = inst_39077;
var inst_39060 = (0);
var state_39105__$1 = (function (){var statearr_39124 = state_39105;
(statearr_39124[(8)] = inst_39058);

(statearr_39124[(9)] = inst_39059);

(statearr_39124[(11)] = inst_39057);

(statearr_39124[(12)] = inst_39060);

return statearr_39124;
})();
var statearr_39125_39158 = state_39105__$1;
(statearr_39125_39158[(2)] = null);

(statearr_39125_39158[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39106 === (3))){
var inst_39103 = (state_39105[(2)]);
var state_39105__$1 = state_39105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39105__$1,inst_39103);
} else {
if((state_val_39106 === (12))){
var inst_39091 = (state_39105[(2)]);
var state_39105__$1 = state_39105;
var statearr_39126_39159 = state_39105__$1;
(statearr_39126_39159[(2)] = inst_39091);

(statearr_39126_39159[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39106 === (2))){
var state_39105__$1 = state_39105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39105__$1,(4),in$);
} else {
if((state_val_39106 === (23))){
var inst_39099 = (state_39105[(2)]);
var state_39105__$1 = state_39105;
var statearr_39127_39160 = state_39105__$1;
(statearr_39127_39160[(2)] = inst_39099);

(statearr_39127_39160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39106 === (19))){
var inst_39086 = (state_39105[(2)]);
var state_39105__$1 = state_39105;
var statearr_39128_39161 = state_39105__$1;
(statearr_39128_39161[(2)] = inst_39086);

(statearr_39128_39161[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39106 === (11))){
var inst_39071 = (state_39105[(7)]);
var inst_39057 = (state_39105[(11)]);
var inst_39071__$1 = cljs.core.seq.call(null,inst_39057);
var state_39105__$1 = (function (){var statearr_39129 = state_39105;
(statearr_39129[(7)] = inst_39071__$1);

return statearr_39129;
})();
if(inst_39071__$1){
var statearr_39130_39162 = state_39105__$1;
(statearr_39130_39162[(1)] = (14));

} else {
var statearr_39131_39163 = state_39105__$1;
(statearr_39131_39163[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39106 === (9))){
var inst_39093 = (state_39105[(2)]);
var inst_39094 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_39105__$1 = (function (){var statearr_39132 = state_39105;
(statearr_39132[(15)] = inst_39093);

return statearr_39132;
})();
if(cljs.core.truth_(inst_39094)){
var statearr_39133_39164 = state_39105__$1;
(statearr_39133_39164[(1)] = (21));

} else {
var statearr_39134_39165 = state_39105__$1;
(statearr_39134_39165[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39106 === (5))){
var inst_39049 = cljs.core.async.close_BANG_.call(null,out);
var state_39105__$1 = state_39105;
var statearr_39135_39166 = state_39105__$1;
(statearr_39135_39166[(2)] = inst_39049);

(statearr_39135_39166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39106 === (14))){
var inst_39071 = (state_39105[(7)]);
var inst_39073 = cljs.core.chunked_seq_QMARK_.call(null,inst_39071);
var state_39105__$1 = state_39105;
if(inst_39073){
var statearr_39136_39167 = state_39105__$1;
(statearr_39136_39167[(1)] = (17));

} else {
var statearr_39137_39168 = state_39105__$1;
(statearr_39137_39168[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39106 === (16))){
var inst_39089 = (state_39105[(2)]);
var state_39105__$1 = state_39105;
var statearr_39138_39169 = state_39105__$1;
(statearr_39138_39169[(2)] = inst_39089);

(statearr_39138_39169[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39106 === (10))){
var inst_39058 = (state_39105[(8)]);
var inst_39060 = (state_39105[(12)]);
var inst_39065 = cljs.core._nth.call(null,inst_39058,inst_39060);
var state_39105__$1 = state_39105;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39105__$1,(13),out,inst_39065);
} else {
if((state_val_39106 === (18))){
var inst_39071 = (state_39105[(7)]);
var inst_39080 = cljs.core.first.call(null,inst_39071);
var state_39105__$1 = state_39105;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39105__$1,(20),out,inst_39080);
} else {
if((state_val_39106 === (8))){
var inst_39059 = (state_39105[(9)]);
var inst_39060 = (state_39105[(12)]);
var inst_39062 = (inst_39060 < inst_39059);
var inst_39063 = inst_39062;
var state_39105__$1 = state_39105;
if(cljs.core.truth_(inst_39063)){
var statearr_39139_39170 = state_39105__$1;
(statearr_39139_39170[(1)] = (10));

} else {
var statearr_39140_39171 = state_39105__$1;
(statearr_39140_39171[(1)] = (11));

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
});})(c__34337__auto__))
;
return ((function (switch__34322__auto__,c__34337__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34323__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34323__auto____0 = (function (){
var statearr_39144 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39144[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34323__auto__);

(statearr_39144[(1)] = (1));

return statearr_39144;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34323__auto____1 = (function (state_39105){
while(true){
var ret_value__34324__auto__ = (function (){try{while(true){
var result__34325__auto__ = switch__34322__auto__.call(null,state_39105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34325__auto__;
}
break;
}
}catch (e39145){if((e39145 instanceof Object)){
var ex__34326__auto__ = e39145;
var statearr_39146_39172 = state_39105;
(statearr_39146_39172[(5)] = ex__34326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39145;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39173 = state_39105;
state_39105 = G__39173;
continue;
} else {
return ret_value__34324__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34323__auto__ = function(state_39105){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34323__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34323__auto____1.call(this,state_39105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34323__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34323__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34323__auto__;
})()
;})(switch__34322__auto__,c__34337__auto__))
})();
var state__34339__auto__ = (function (){var statearr_39147 = f__34338__auto__.call(null);
(statearr_39147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34337__auto__);

return statearr_39147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34339__auto__);
});})(c__34337__auto__))
);

return c__34337__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args39174 = [];
var len__30749__auto___39177 = arguments.length;
var i__30750__auto___39178 = (0);
while(true){
if((i__30750__auto___39178 < len__30749__auto___39177)){
args39174.push((arguments[i__30750__auto___39178]));

var G__39179 = (i__30750__auto___39178 + (1));
i__30750__auto___39178 = G__39179;
continue;
} else {
}
break;
}

var G__39176 = args39174.length;
switch (G__39176) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39174.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args39181 = [];
var len__30749__auto___39184 = arguments.length;
var i__30750__auto___39185 = (0);
while(true){
if((i__30750__auto___39185 < len__30749__auto___39184)){
args39181.push((arguments[i__30750__auto___39185]));

var G__39186 = (i__30750__auto___39185 + (1));
i__30750__auto___39185 = G__39186;
continue;
} else {
}
break;
}

var G__39183 = args39181.length;
switch (G__39183) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39181.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args39188 = [];
var len__30749__auto___39239 = arguments.length;
var i__30750__auto___39240 = (0);
while(true){
if((i__30750__auto___39240 < len__30749__auto___39239)){
args39188.push((arguments[i__30750__auto___39240]));

var G__39241 = (i__30750__auto___39240 + (1));
i__30750__auto___39240 = G__39241;
continue;
} else {
}
break;
}

var G__39190 = args39188.length;
switch (G__39190) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39188.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34337__auto___39243 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34337__auto___39243,out){
return (function (){
var f__34338__auto__ = (function (){var switch__34322__auto__ = ((function (c__34337__auto___39243,out){
return (function (state_39214){
var state_val_39215 = (state_39214[(1)]);
if((state_val_39215 === (7))){
var inst_39209 = (state_39214[(2)]);
var state_39214__$1 = state_39214;
var statearr_39216_39244 = state_39214__$1;
(statearr_39216_39244[(2)] = inst_39209);

(statearr_39216_39244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39215 === (1))){
var inst_39191 = null;
var state_39214__$1 = (function (){var statearr_39217 = state_39214;
(statearr_39217[(7)] = inst_39191);

return statearr_39217;
})();
var statearr_39218_39245 = state_39214__$1;
(statearr_39218_39245[(2)] = null);

(statearr_39218_39245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39215 === (4))){
var inst_39194 = (state_39214[(8)]);
var inst_39194__$1 = (state_39214[(2)]);
var inst_39195 = (inst_39194__$1 == null);
var inst_39196 = cljs.core.not.call(null,inst_39195);
var state_39214__$1 = (function (){var statearr_39219 = state_39214;
(statearr_39219[(8)] = inst_39194__$1);

return statearr_39219;
})();
if(inst_39196){
var statearr_39220_39246 = state_39214__$1;
(statearr_39220_39246[(1)] = (5));

} else {
var statearr_39221_39247 = state_39214__$1;
(statearr_39221_39247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39215 === (6))){
var state_39214__$1 = state_39214;
var statearr_39222_39248 = state_39214__$1;
(statearr_39222_39248[(2)] = null);

(statearr_39222_39248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39215 === (3))){
var inst_39211 = (state_39214[(2)]);
var inst_39212 = cljs.core.async.close_BANG_.call(null,out);
var state_39214__$1 = (function (){var statearr_39223 = state_39214;
(statearr_39223[(9)] = inst_39211);

return statearr_39223;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39214__$1,inst_39212);
} else {
if((state_val_39215 === (2))){
var state_39214__$1 = state_39214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39214__$1,(4),ch);
} else {
if((state_val_39215 === (11))){
var inst_39194 = (state_39214[(8)]);
var inst_39203 = (state_39214[(2)]);
var inst_39191 = inst_39194;
var state_39214__$1 = (function (){var statearr_39224 = state_39214;
(statearr_39224[(10)] = inst_39203);

(statearr_39224[(7)] = inst_39191);

return statearr_39224;
})();
var statearr_39225_39249 = state_39214__$1;
(statearr_39225_39249[(2)] = null);

(statearr_39225_39249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39215 === (9))){
var inst_39194 = (state_39214[(8)]);
var state_39214__$1 = state_39214;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39214__$1,(11),out,inst_39194);
} else {
if((state_val_39215 === (5))){
var inst_39194 = (state_39214[(8)]);
var inst_39191 = (state_39214[(7)]);
var inst_39198 = cljs.core._EQ_.call(null,inst_39194,inst_39191);
var state_39214__$1 = state_39214;
if(inst_39198){
var statearr_39227_39250 = state_39214__$1;
(statearr_39227_39250[(1)] = (8));

} else {
var statearr_39228_39251 = state_39214__$1;
(statearr_39228_39251[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39215 === (10))){
var inst_39206 = (state_39214[(2)]);
var state_39214__$1 = state_39214;
var statearr_39229_39252 = state_39214__$1;
(statearr_39229_39252[(2)] = inst_39206);

(statearr_39229_39252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39215 === (8))){
var inst_39191 = (state_39214[(7)]);
var tmp39226 = inst_39191;
var inst_39191__$1 = tmp39226;
var state_39214__$1 = (function (){var statearr_39230 = state_39214;
(statearr_39230[(7)] = inst_39191__$1);

return statearr_39230;
})();
var statearr_39231_39253 = state_39214__$1;
(statearr_39231_39253[(2)] = null);

(statearr_39231_39253[(1)] = (2));


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
});})(c__34337__auto___39243,out))
;
return ((function (switch__34322__auto__,c__34337__auto___39243,out){
return (function() {
var cljs$core$async$state_machine__34323__auto__ = null;
var cljs$core$async$state_machine__34323__auto____0 = (function (){
var statearr_39235 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39235[(0)] = cljs$core$async$state_machine__34323__auto__);

(statearr_39235[(1)] = (1));

return statearr_39235;
});
var cljs$core$async$state_machine__34323__auto____1 = (function (state_39214){
while(true){
var ret_value__34324__auto__ = (function (){try{while(true){
var result__34325__auto__ = switch__34322__auto__.call(null,state_39214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34325__auto__;
}
break;
}
}catch (e39236){if((e39236 instanceof Object)){
var ex__34326__auto__ = e39236;
var statearr_39237_39254 = state_39214;
(statearr_39237_39254[(5)] = ex__34326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39255 = state_39214;
state_39214 = G__39255;
continue;
} else {
return ret_value__34324__auto__;
}
break;
}
});
cljs$core$async$state_machine__34323__auto__ = function(state_39214){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34323__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34323__auto____1.call(this,state_39214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34323__auto____0;
cljs$core$async$state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34323__auto____1;
return cljs$core$async$state_machine__34323__auto__;
})()
;})(switch__34322__auto__,c__34337__auto___39243,out))
})();
var state__34339__auto__ = (function (){var statearr_39238 = f__34338__auto__.call(null);
(statearr_39238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34337__auto___39243);

return statearr_39238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34339__auto__);
});})(c__34337__auto___39243,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args39256 = [];
var len__30749__auto___39326 = arguments.length;
var i__30750__auto___39327 = (0);
while(true){
if((i__30750__auto___39327 < len__30749__auto___39326)){
args39256.push((arguments[i__30750__auto___39327]));

var G__39328 = (i__30750__auto___39327 + (1));
i__30750__auto___39327 = G__39328;
continue;
} else {
}
break;
}

var G__39258 = args39256.length;
switch (G__39258) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39256.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34337__auto___39330 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34337__auto___39330,out){
return (function (){
var f__34338__auto__ = (function (){var switch__34322__auto__ = ((function (c__34337__auto___39330,out){
return (function (state_39296){
var state_val_39297 = (state_39296[(1)]);
if((state_val_39297 === (7))){
var inst_39292 = (state_39296[(2)]);
var state_39296__$1 = state_39296;
var statearr_39298_39331 = state_39296__$1;
(statearr_39298_39331[(2)] = inst_39292);

(statearr_39298_39331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39297 === (1))){
var inst_39259 = (new Array(n));
var inst_39260 = inst_39259;
var inst_39261 = (0);
var state_39296__$1 = (function (){var statearr_39299 = state_39296;
(statearr_39299[(7)] = inst_39260);

(statearr_39299[(8)] = inst_39261);

return statearr_39299;
})();
var statearr_39300_39332 = state_39296__$1;
(statearr_39300_39332[(2)] = null);

(statearr_39300_39332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39297 === (4))){
var inst_39264 = (state_39296[(9)]);
var inst_39264__$1 = (state_39296[(2)]);
var inst_39265 = (inst_39264__$1 == null);
var inst_39266 = cljs.core.not.call(null,inst_39265);
var state_39296__$1 = (function (){var statearr_39301 = state_39296;
(statearr_39301[(9)] = inst_39264__$1);

return statearr_39301;
})();
if(inst_39266){
var statearr_39302_39333 = state_39296__$1;
(statearr_39302_39333[(1)] = (5));

} else {
var statearr_39303_39334 = state_39296__$1;
(statearr_39303_39334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39297 === (15))){
var inst_39286 = (state_39296[(2)]);
var state_39296__$1 = state_39296;
var statearr_39304_39335 = state_39296__$1;
(statearr_39304_39335[(2)] = inst_39286);

(statearr_39304_39335[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39297 === (13))){
var state_39296__$1 = state_39296;
var statearr_39305_39336 = state_39296__$1;
(statearr_39305_39336[(2)] = null);

(statearr_39305_39336[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39297 === (6))){
var inst_39261 = (state_39296[(8)]);
var inst_39282 = (inst_39261 > (0));
var state_39296__$1 = state_39296;
if(cljs.core.truth_(inst_39282)){
var statearr_39306_39337 = state_39296__$1;
(statearr_39306_39337[(1)] = (12));

} else {
var statearr_39307_39338 = state_39296__$1;
(statearr_39307_39338[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39297 === (3))){
var inst_39294 = (state_39296[(2)]);
var state_39296__$1 = state_39296;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39296__$1,inst_39294);
} else {
if((state_val_39297 === (12))){
var inst_39260 = (state_39296[(7)]);
var inst_39284 = cljs.core.vec.call(null,inst_39260);
var state_39296__$1 = state_39296;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39296__$1,(15),out,inst_39284);
} else {
if((state_val_39297 === (2))){
var state_39296__$1 = state_39296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39296__$1,(4),ch);
} else {
if((state_val_39297 === (11))){
var inst_39276 = (state_39296[(2)]);
var inst_39277 = (new Array(n));
var inst_39260 = inst_39277;
var inst_39261 = (0);
var state_39296__$1 = (function (){var statearr_39308 = state_39296;
(statearr_39308[(7)] = inst_39260);

(statearr_39308[(10)] = inst_39276);

(statearr_39308[(8)] = inst_39261);

return statearr_39308;
})();
var statearr_39309_39339 = state_39296__$1;
(statearr_39309_39339[(2)] = null);

(statearr_39309_39339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39297 === (9))){
var inst_39260 = (state_39296[(7)]);
var inst_39274 = cljs.core.vec.call(null,inst_39260);
var state_39296__$1 = state_39296;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39296__$1,(11),out,inst_39274);
} else {
if((state_val_39297 === (5))){
var inst_39260 = (state_39296[(7)]);
var inst_39264 = (state_39296[(9)]);
var inst_39261 = (state_39296[(8)]);
var inst_39269 = (state_39296[(11)]);
var inst_39268 = (inst_39260[inst_39261] = inst_39264);
var inst_39269__$1 = (inst_39261 + (1));
var inst_39270 = (inst_39269__$1 < n);
var state_39296__$1 = (function (){var statearr_39310 = state_39296;
(statearr_39310[(12)] = inst_39268);

(statearr_39310[(11)] = inst_39269__$1);

return statearr_39310;
})();
if(cljs.core.truth_(inst_39270)){
var statearr_39311_39340 = state_39296__$1;
(statearr_39311_39340[(1)] = (8));

} else {
var statearr_39312_39341 = state_39296__$1;
(statearr_39312_39341[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39297 === (14))){
var inst_39289 = (state_39296[(2)]);
var inst_39290 = cljs.core.async.close_BANG_.call(null,out);
var state_39296__$1 = (function (){var statearr_39314 = state_39296;
(statearr_39314[(13)] = inst_39289);

return statearr_39314;
})();
var statearr_39315_39342 = state_39296__$1;
(statearr_39315_39342[(2)] = inst_39290);

(statearr_39315_39342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39297 === (10))){
var inst_39280 = (state_39296[(2)]);
var state_39296__$1 = state_39296;
var statearr_39316_39343 = state_39296__$1;
(statearr_39316_39343[(2)] = inst_39280);

(statearr_39316_39343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39297 === (8))){
var inst_39260 = (state_39296[(7)]);
var inst_39269 = (state_39296[(11)]);
var tmp39313 = inst_39260;
var inst_39260__$1 = tmp39313;
var inst_39261 = inst_39269;
var state_39296__$1 = (function (){var statearr_39317 = state_39296;
(statearr_39317[(7)] = inst_39260__$1);

(statearr_39317[(8)] = inst_39261);

return statearr_39317;
})();
var statearr_39318_39344 = state_39296__$1;
(statearr_39318_39344[(2)] = null);

(statearr_39318_39344[(1)] = (2));


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
});})(c__34337__auto___39330,out))
;
return ((function (switch__34322__auto__,c__34337__auto___39330,out){
return (function() {
var cljs$core$async$state_machine__34323__auto__ = null;
var cljs$core$async$state_machine__34323__auto____0 = (function (){
var statearr_39322 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39322[(0)] = cljs$core$async$state_machine__34323__auto__);

(statearr_39322[(1)] = (1));

return statearr_39322;
});
var cljs$core$async$state_machine__34323__auto____1 = (function (state_39296){
while(true){
var ret_value__34324__auto__ = (function (){try{while(true){
var result__34325__auto__ = switch__34322__auto__.call(null,state_39296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34325__auto__;
}
break;
}
}catch (e39323){if((e39323 instanceof Object)){
var ex__34326__auto__ = e39323;
var statearr_39324_39345 = state_39296;
(statearr_39324_39345[(5)] = ex__34326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39346 = state_39296;
state_39296 = G__39346;
continue;
} else {
return ret_value__34324__auto__;
}
break;
}
});
cljs$core$async$state_machine__34323__auto__ = function(state_39296){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34323__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34323__auto____1.call(this,state_39296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34323__auto____0;
cljs$core$async$state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34323__auto____1;
return cljs$core$async$state_machine__34323__auto__;
})()
;})(switch__34322__auto__,c__34337__auto___39330,out))
})();
var state__34339__auto__ = (function (){var statearr_39325 = f__34338__auto__.call(null);
(statearr_39325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34337__auto___39330);

return statearr_39325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34339__auto__);
});})(c__34337__auto___39330,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args39347 = [];
var len__30749__auto___39421 = arguments.length;
var i__30750__auto___39422 = (0);
while(true){
if((i__30750__auto___39422 < len__30749__auto___39421)){
args39347.push((arguments[i__30750__auto___39422]));

var G__39423 = (i__30750__auto___39422 + (1));
i__30750__auto___39422 = G__39423;
continue;
} else {
}
break;
}

var G__39349 = args39347.length;
switch (G__39349) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39347.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34337__auto___39425 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34337__auto___39425,out){
return (function (){
var f__34338__auto__ = (function (){var switch__34322__auto__ = ((function (c__34337__auto___39425,out){
return (function (state_39391){
var state_val_39392 = (state_39391[(1)]);
if((state_val_39392 === (7))){
var inst_39387 = (state_39391[(2)]);
var state_39391__$1 = state_39391;
var statearr_39393_39426 = state_39391__$1;
(statearr_39393_39426[(2)] = inst_39387);

(statearr_39393_39426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39392 === (1))){
var inst_39350 = [];
var inst_39351 = inst_39350;
var inst_39352 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_39391__$1 = (function (){var statearr_39394 = state_39391;
(statearr_39394[(7)] = inst_39352);

(statearr_39394[(8)] = inst_39351);

return statearr_39394;
})();
var statearr_39395_39427 = state_39391__$1;
(statearr_39395_39427[(2)] = null);

(statearr_39395_39427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39392 === (4))){
var inst_39355 = (state_39391[(9)]);
var inst_39355__$1 = (state_39391[(2)]);
var inst_39356 = (inst_39355__$1 == null);
var inst_39357 = cljs.core.not.call(null,inst_39356);
var state_39391__$1 = (function (){var statearr_39396 = state_39391;
(statearr_39396[(9)] = inst_39355__$1);

return statearr_39396;
})();
if(inst_39357){
var statearr_39397_39428 = state_39391__$1;
(statearr_39397_39428[(1)] = (5));

} else {
var statearr_39398_39429 = state_39391__$1;
(statearr_39398_39429[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39392 === (15))){
var inst_39381 = (state_39391[(2)]);
var state_39391__$1 = state_39391;
var statearr_39399_39430 = state_39391__$1;
(statearr_39399_39430[(2)] = inst_39381);

(statearr_39399_39430[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39392 === (13))){
var state_39391__$1 = state_39391;
var statearr_39400_39431 = state_39391__$1;
(statearr_39400_39431[(2)] = null);

(statearr_39400_39431[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39392 === (6))){
var inst_39351 = (state_39391[(8)]);
var inst_39376 = inst_39351.length;
var inst_39377 = (inst_39376 > (0));
var state_39391__$1 = state_39391;
if(cljs.core.truth_(inst_39377)){
var statearr_39401_39432 = state_39391__$1;
(statearr_39401_39432[(1)] = (12));

} else {
var statearr_39402_39433 = state_39391__$1;
(statearr_39402_39433[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39392 === (3))){
var inst_39389 = (state_39391[(2)]);
var state_39391__$1 = state_39391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39391__$1,inst_39389);
} else {
if((state_val_39392 === (12))){
var inst_39351 = (state_39391[(8)]);
var inst_39379 = cljs.core.vec.call(null,inst_39351);
var state_39391__$1 = state_39391;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39391__$1,(15),out,inst_39379);
} else {
if((state_val_39392 === (2))){
var state_39391__$1 = state_39391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39391__$1,(4),ch);
} else {
if((state_val_39392 === (11))){
var inst_39359 = (state_39391[(10)]);
var inst_39355 = (state_39391[(9)]);
var inst_39369 = (state_39391[(2)]);
var inst_39370 = [];
var inst_39371 = inst_39370.push(inst_39355);
var inst_39351 = inst_39370;
var inst_39352 = inst_39359;
var state_39391__$1 = (function (){var statearr_39403 = state_39391;
(statearr_39403[(7)] = inst_39352);

(statearr_39403[(11)] = inst_39369);

(statearr_39403[(12)] = inst_39371);

(statearr_39403[(8)] = inst_39351);

return statearr_39403;
})();
var statearr_39404_39434 = state_39391__$1;
(statearr_39404_39434[(2)] = null);

(statearr_39404_39434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39392 === (9))){
var inst_39351 = (state_39391[(8)]);
var inst_39367 = cljs.core.vec.call(null,inst_39351);
var state_39391__$1 = state_39391;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39391__$1,(11),out,inst_39367);
} else {
if((state_val_39392 === (5))){
var inst_39352 = (state_39391[(7)]);
var inst_39359 = (state_39391[(10)]);
var inst_39355 = (state_39391[(9)]);
var inst_39359__$1 = f.call(null,inst_39355);
var inst_39360 = cljs.core._EQ_.call(null,inst_39359__$1,inst_39352);
var inst_39361 = cljs.core.keyword_identical_QMARK_.call(null,inst_39352,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_39362 = (inst_39360) || (inst_39361);
var state_39391__$1 = (function (){var statearr_39405 = state_39391;
(statearr_39405[(10)] = inst_39359__$1);

return statearr_39405;
})();
if(cljs.core.truth_(inst_39362)){
var statearr_39406_39435 = state_39391__$1;
(statearr_39406_39435[(1)] = (8));

} else {
var statearr_39407_39436 = state_39391__$1;
(statearr_39407_39436[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39392 === (14))){
var inst_39384 = (state_39391[(2)]);
var inst_39385 = cljs.core.async.close_BANG_.call(null,out);
var state_39391__$1 = (function (){var statearr_39409 = state_39391;
(statearr_39409[(13)] = inst_39384);

return statearr_39409;
})();
var statearr_39410_39437 = state_39391__$1;
(statearr_39410_39437[(2)] = inst_39385);

(statearr_39410_39437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39392 === (10))){
var inst_39374 = (state_39391[(2)]);
var state_39391__$1 = state_39391;
var statearr_39411_39438 = state_39391__$1;
(statearr_39411_39438[(2)] = inst_39374);

(statearr_39411_39438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39392 === (8))){
var inst_39359 = (state_39391[(10)]);
var inst_39355 = (state_39391[(9)]);
var inst_39351 = (state_39391[(8)]);
var inst_39364 = inst_39351.push(inst_39355);
var tmp39408 = inst_39351;
var inst_39351__$1 = tmp39408;
var inst_39352 = inst_39359;
var state_39391__$1 = (function (){var statearr_39412 = state_39391;
(statearr_39412[(7)] = inst_39352);

(statearr_39412[(14)] = inst_39364);

(statearr_39412[(8)] = inst_39351__$1);

return statearr_39412;
})();
var statearr_39413_39439 = state_39391__$1;
(statearr_39413_39439[(2)] = null);

(statearr_39413_39439[(1)] = (2));


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
});})(c__34337__auto___39425,out))
;
return ((function (switch__34322__auto__,c__34337__auto___39425,out){
return (function() {
var cljs$core$async$state_machine__34323__auto__ = null;
var cljs$core$async$state_machine__34323__auto____0 = (function (){
var statearr_39417 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39417[(0)] = cljs$core$async$state_machine__34323__auto__);

(statearr_39417[(1)] = (1));

return statearr_39417;
});
var cljs$core$async$state_machine__34323__auto____1 = (function (state_39391){
while(true){
var ret_value__34324__auto__ = (function (){try{while(true){
var result__34325__auto__ = switch__34322__auto__.call(null,state_39391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34325__auto__;
}
break;
}
}catch (e39418){if((e39418 instanceof Object)){
var ex__34326__auto__ = e39418;
var statearr_39419_39440 = state_39391;
(statearr_39419_39440[(5)] = ex__34326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39441 = state_39391;
state_39391 = G__39441;
continue;
} else {
return ret_value__34324__auto__;
}
break;
}
});
cljs$core$async$state_machine__34323__auto__ = function(state_39391){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34323__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34323__auto____1.call(this,state_39391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34323__auto____0;
cljs$core$async$state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34323__auto____1;
return cljs$core$async$state_machine__34323__auto__;
})()
;})(switch__34322__auto__,c__34337__auto___39425,out))
})();
var state__34339__auto__ = (function (){var statearr_39420 = f__34338__auto__.call(null);
(statearr_39420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34337__auto___39425);

return statearr_39420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34339__auto__);
});})(c__34337__auto___39425,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1466782844627