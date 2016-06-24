// Compiled by ClojureScript 1.8.51 {}
goog.provide('untangled.client.impl.network');
goog.require('cljs.core');
goog.require('om.transit');
goog.require('untangled.client.logging');
goog.require('cognitect.transit');
goog.require('goog.net.EventType');
goog.require('goog.events');
goog.require('goog.net.XhrIo');
untangled.client.impl.network.make_xhrio = (function untangled$client$impl$network$make_xhrio(){
return (new goog.net.XhrIo());
});

/**
 * @interface
 */
untangled.client.impl.network.UntangledNetwork = function(){};

/**
 * Send method, transmits EDN to the server and gets an EDN response. Calls result-callback with that response,
 *      or a map with key `:error` on errors. optional options may include `:headers`, but you may NOT override content
 *      type. The method CANNOT be used for parallel network requests.
 */
untangled.client.impl.network.send = (function untangled$client$impl$network$send(this$,edn,ok_callback,error_callback){
if((!((this$ == null))) && (!((this$.untangled$client$impl$network$UntangledNetwork$send$arity$4 == null)))){
return this$.untangled$client$impl$network$UntangledNetwork$send$arity$4(this$,edn,ok_callback,error_callback);
} else {
var x__30342__auto__ = (((this$ == null))?null:this$);
var m__30343__auto__ = (untangled.client.impl.network.send[goog.typeOf(x__30342__auto__)]);
if(!((m__30343__auto__ == null))){
return m__30343__auto__.call(null,this$,edn,ok_callback,error_callback);
} else {
var m__30343__auto____$1 = (untangled.client.impl.network.send["_"]);
if(!((m__30343__auto____$1 == null))){
return m__30343__auto____$1.call(null,this$,edn,ok_callback,error_callback);
} else {
throw cljs.core.missing_protocol.call(null,"UntangledNetwork.send",this$);
}
}
}
});

/**
 * Starts the network, passing in the app for any components that may need it.
 */
untangled.client.impl.network.start = (function untangled$client$impl$network$start(this$,complete_app){
if((!((this$ == null))) && (!((this$.untangled$client$impl$network$UntangledNetwork$start$arity$2 == null)))){
return this$.untangled$client$impl$network$UntangledNetwork$start$arity$2(this$,complete_app);
} else {
var x__30342__auto__ = (((this$ == null))?null:this$);
var m__30343__auto__ = (untangled.client.impl.network.start[goog.typeOf(x__30342__auto__)]);
if(!((m__30343__auto__ == null))){
return m__30343__auto__.call(null,this$,complete_app);
} else {
var m__30343__auto____$1 = (untangled.client.impl.network.start["_"]);
if(!((m__30343__auto____$1 == null))){
return m__30343__auto____$1.call(null,this$,complete_app);
} else {
throw cljs.core.missing_protocol.call(null,"UntangledNetwork.start",this$);
}
}
}
});


/**
 * @interface
 */
untangled.client.impl.network.IXhrIOCallbacks = function(){};

/**
 * Called by XhrIo on OK
 */
untangled.client.impl.network.response_ok = (function untangled$client$impl$network$response_ok(this$,xhrio,ok_cb){
if((!((this$ == null))) && (!((this$.untangled$client$impl$network$IXhrIOCallbacks$response_ok$arity$3 == null)))){
return this$.untangled$client$impl$network$IXhrIOCallbacks$response_ok$arity$3(this$,xhrio,ok_cb);
} else {
var x__30342__auto__ = (((this$ == null))?null:this$);
var m__30343__auto__ = (untangled.client.impl.network.response_ok[goog.typeOf(x__30342__auto__)]);
if(!((m__30343__auto__ == null))){
return m__30343__auto__.call(null,this$,xhrio,ok_cb);
} else {
var m__30343__auto____$1 = (untangled.client.impl.network.response_ok["_"]);
if(!((m__30343__auto____$1 == null))){
return m__30343__auto____$1.call(null,this$,xhrio,ok_cb);
} else {
throw cljs.core.missing_protocol.call(null,"IXhrIOCallbacks.response-ok",this$);
}
}
}
});

/**
 * Called by XhrIo on ERROR
 */
untangled.client.impl.network.response_error = (function untangled$client$impl$network$response_error(this$,xhrio,err_cb){
if((!((this$ == null))) && (!((this$.untangled$client$impl$network$IXhrIOCallbacks$response_error$arity$3 == null)))){
return this$.untangled$client$impl$network$IXhrIOCallbacks$response_error$arity$3(this$,xhrio,err_cb);
} else {
var x__30342__auto__ = (((this$ == null))?null:this$);
var m__30343__auto__ = (untangled.client.impl.network.response_error[goog.typeOf(x__30342__auto__)]);
if(!((m__30343__auto__ == null))){
return m__30343__auto__.call(null,this$,xhrio,err_cb);
} else {
var m__30343__auto____$1 = (untangled.client.impl.network.response_error["_"]);
if(!((m__30343__auto____$1 == null))){
return m__30343__auto____$1.call(null,this$,xhrio,err_cb);
} else {
throw cljs.core.missing_protocol.call(null,"IXhrIOCallbacks.response-error",this$);
}
}
}
});

untangled.client.impl.network.parse_response = (function untangled$client$impl$network$parse_response(xhr_io){
return cognitect.transit.read.call(null,om.transit.reader.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.PersistentArrayMap(null, 2, ["f",(function (v){
return parseFloat(v);
}),"u",cljs.core.uuid], null)], null)),xhr_io.getResponseText());
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {untangled.client.impl.network.IXhrIOCallbacks}
 * @implements {cljs.core.ICounted}
 * @implements {untangled.client.impl.network.UntangledNetwork}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
untangled.client.impl.network.Network = (function (url,request_transform,global_error_callback,complete_app,__meta,__extmap,__hash){
this.url = url;
this.request_transform = request_transform;
this.global_error_callback = global_error_callback;
this.complete_app = complete_app;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
untangled.client.impl.network.Network.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30301__auto__,k__30302__auto__){
var self__ = this;
var this__30301__auto____$1 = this;
return cljs.core._lookup.call(null,this__30301__auto____$1,k__30302__auto__,null);
});

untangled.client.impl.network.Network.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30303__auto__,k34383,else__30304__auto__){
var self__ = this;
var this__30303__auto____$1 = this;
var G__34385 = (((k34383 instanceof cljs.core.Keyword))?k34383.fqn:null);
switch (G__34385) {
case "url":
return self__.url;

break;
case "request-transform":
return self__.request_transform;

break;
case "global-error-callback":
return self__.global_error_callback;

break;
case "complete-app":
return self__.complete_app;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34383,else__30304__auto__);

}
});

untangled.client.impl.network.Network.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30315__auto__,writer__30316__auto__,opts__30317__auto__){
var self__ = this;
var this__30315__auto____$1 = this;
var pr_pair__30318__auto__ = ((function (this__30315__auto____$1){
return (function (keyval__30319__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30316__auto__,cljs.core.pr_writer,""," ","",opts__30317__auto__,keyval__30319__auto__);
});})(this__30315__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30316__auto__,pr_pair__30318__auto__,"#untangled.client.impl.network.Network{",", ","}",opts__30317__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request-transform","request-transform",170337297),self__.request_transform],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),self__.global_error_callback],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),self__.complete_app],null))], null),self__.__extmap));
});

untangled.client.impl.network.Network.prototype.cljs$core$IIterable$ = true;

untangled.client.impl.network.Network.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34382){
var self__ = this;
var G__34382__$1 = this;
return (new cljs.core.RecordIter((0),G__34382__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"request-transform","request-transform",170337297),new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),new cljs.core.Keyword(null,"complete-app","complete-app",1317441339)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

untangled.client.impl.network.Network.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30299__auto__){
var self__ = this;
var this__30299__auto____$1 = this;
return self__.__meta;
});

untangled.client.impl.network.Network.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30295__auto__){
var self__ = this;
var this__30295__auto____$1 = this;
return (new untangled.client.impl.network.Network(self__.url,self__.request_transform,self__.global_error_callback,self__.complete_app,self__.__meta,self__.__extmap,self__.__hash));
});

untangled.client.impl.network.Network.prototype.untangled$client$impl$network$IXhrIOCallbacks$ = true;

untangled.client.impl.network.Network.prototype.untangled$client$impl$network$IXhrIOCallbacks$response_ok$arity$3 = (function (this$,xhr_io,valid_data_callback){
var self__ = this;
var this$__$1 = this;
try{var query_response = untangled.client.impl.network.parse_response.call(null,xhr_io);
if(cljs.core.truth_((function (){var and__29667__auto__ = query_response;
if(cljs.core.truth_(and__29667__auto__)){
return valid_data_callback;
} else {
return and__29667__auto__;
}
})())){
return valid_data_callback.call(null,query_response);
} else {
return null;
}
}finally {xhr_io.dispose();
}});

untangled.client.impl.network.Network.prototype.untangled$client$impl$network$IXhrIOCallbacks$response_error$arity$3 = (function (this$,xhr_io,error_callback){
var self__ = this;
var this$__$1 = this;
try{var status = xhr_io.getStatus();
var log_and_dispatch_error = ((function (status,this$__$1){
return (function (str,error){
untangled.client.logging.error.call(null,str);

if(cljs.core.truth_(cljs.core.deref.call(null,self__.global_error_callback))){
cljs.core.deref.call(null,self__.global_error_callback).call(null,status,error);
} else {
}

return error_callback.call(null,error);
});})(status,this$__$1))
;
if((status === (0))){
return log_and_dispatch_error.call(null,[cljs.core.str("UNTANGLED NETWORK ERROR: No connection established.")].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"network","network",2050004697)], null));
} else {
return log_and_dispatch_error.call(null,[cljs.core.str("SERVER ERROR CODE: "),cljs.core.str(status)].join(''),untangled.client.impl.network.parse_response.call(null,xhr_io));
}
}finally {xhr_io.dispose();
}});

untangled.client.impl.network.Network.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30305__auto__){
var self__ = this;
var this__30305__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

untangled.client.impl.network.Network.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30296__auto__){
var self__ = this;
var this__30296__auto____$1 = this;
var h__30114__auto__ = self__.__hash;
if(!((h__30114__auto__ == null))){
return h__30114__auto__;
} else {
var h__30114__auto____$1 = cljs.core.hash_imap.call(null,this__30296__auto____$1);
self__.__hash = h__30114__auto____$1;

return h__30114__auto____$1;
}
});

untangled.client.impl.network.Network.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__30297__auto__,other__30298__auto__){
var self__ = this;
var this__30297__auto____$1 = this;
if(cljs.core.truth_((function (){var and__29667__auto__ = other__30298__auto__;
if(cljs.core.truth_(and__29667__auto__)){
var and__29667__auto____$1 = (this__30297__auto____$1.constructor === other__30298__auto__.constructor);
if(and__29667__auto____$1){
return cljs.core.equiv_map.call(null,this__30297__auto____$1,other__30298__auto__);
} else {
return and__29667__auto____$1;
}
} else {
return and__29667__auto__;
}
})())){
return true;
} else {
return false;
}
});

untangled.client.impl.network.Network.prototype.untangled$client$impl$network$UntangledNetwork$ = true;

untangled.client.impl.network.Network.prototype.untangled$client$impl$network$UntangledNetwork$send$arity$4 = (function (this$,edn,ok,err){
var self__ = this;
var this$__$1 = this;
var xhrio = untangled.client.impl.network.make_xhrio.call(null);
var headers = new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/transit+json"], null);
var map__34386 = (cljs.core.truth_(self__.request_transform)?self__.request_transform.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),edn,new cljs.core.Keyword(null,"headers","headers",-835030129),headers], null)):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),edn,new cljs.core.Keyword(null,"headers","headers",-835030129),headers], null)
);
var map__34386__$1 = ((((!((map__34386 == null)))?((((map__34386.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34386.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34386):map__34386);
var request = cljs.core.get.call(null,map__34386__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var headers__$1 = cljs.core.get.call(null,map__34386__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var post_data = cognitect.transit.write.call(null,om.transit.writer.call(null),request);
var headers__$2 = cljs.core.clj__GT_js.call(null,headers__$1);
xhrio.send(self__.url,"POST",post_data,headers__$2);

goog.events.listen(xhrio,goog.net.EventType.SUCCESS,((function (xhrio,headers,map__34386,map__34386__$1,request,headers__$1,post_data,headers__$2,this$__$1){
return (function (){
return untangled.client.impl.network.response_ok.call(null,this$__$1,xhrio,ok);
});})(xhrio,headers,map__34386,map__34386__$1,request,headers__$1,post_data,headers__$2,this$__$1))
);

return goog.events.listen(xhrio,goog.net.EventType.ERROR,((function (xhrio,headers,map__34386,map__34386__$1,request,headers__$1,post_data,headers__$2,this$__$1){
return (function (){
return untangled.client.impl.network.response_error.call(null,this$__$1,xhrio,err);
});})(xhrio,headers,map__34386,map__34386__$1,request,headers__$1,post_data,headers__$2,this$__$1))
);
});

untangled.client.impl.network.Network.prototype.untangled$client$impl$network$UntangledNetwork$start$arity$2 = (function (this$,app){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),app);
});

untangled.client.impl.network.Network.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30310__auto__,k__30311__auto__){
var self__ = this;
var this__30310__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),null,new cljs.core.Keyword(null,"request-transform","request-transform",170337297),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),null], null), null),k__30311__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30310__auto____$1),self__.__meta),k__30311__auto__);
} else {
return (new untangled.client.impl.network.Network(self__.url,self__.request_transform,self__.global_error_callback,self__.complete_app,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30311__auto__)),null));
}
});

untangled.client.impl.network.Network.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30308__auto__,k__30309__auto__,G__34382){
var self__ = this;
var this__30308__auto____$1 = this;
var pred__34388 = cljs.core.keyword_identical_QMARK_;
var expr__34389 = k__30309__auto__;
if(cljs.core.truth_(pred__34388.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__34389))){
return (new untangled.client.impl.network.Network(G__34382,self__.request_transform,self__.global_error_callback,self__.complete_app,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34388.call(null,new cljs.core.Keyword(null,"request-transform","request-transform",170337297),expr__34389))){
return (new untangled.client.impl.network.Network(self__.url,G__34382,self__.global_error_callback,self__.complete_app,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34388.call(null,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),expr__34389))){
return (new untangled.client.impl.network.Network(self__.url,self__.request_transform,G__34382,self__.complete_app,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34388.call(null,new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),expr__34389))){
return (new untangled.client.impl.network.Network(self__.url,self__.request_transform,self__.global_error_callback,G__34382,self__.__meta,self__.__extmap,null));
} else {
return (new untangled.client.impl.network.Network(self__.url,self__.request_transform,self__.global_error_callback,self__.complete_app,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30309__auto__,G__34382),null));
}
}
}
}
});

untangled.client.impl.network.Network.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30313__auto__){
var self__ = this;
var this__30313__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request-transform","request-transform",170337297),self__.request_transform],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),self__.global_error_callback],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),self__.complete_app],null))], null),self__.__extmap));
});

untangled.client.impl.network.Network.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30300__auto__,G__34382){
var self__ = this;
var this__30300__auto____$1 = this;
return (new untangled.client.impl.network.Network(self__.url,self__.request_transform,self__.global_error_callback,self__.complete_app,G__34382,self__.__extmap,self__.__hash));
});

untangled.client.impl.network.Network.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30306__auto__,entry__30307__auto__){
var self__ = this;
var this__30306__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30307__auto__)){
return cljs.core._assoc.call(null,this__30306__auto____$1,cljs.core._nth.call(null,entry__30307__auto__,(0)),cljs.core._nth.call(null,entry__30307__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30306__auto____$1,entry__30307__auto__);
}
});

untangled.client.impl.network.Network.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"request-transform","request-transform",1810868824,null),new cljs.core.Symbol(null,"global-error-callback","global-error-callback",-1753008138,null),new cljs.core.Symbol(null,"complete-app","complete-app",-1336994430,null)], null);
});

untangled.client.impl.network.Network.cljs$lang$type = true;

untangled.client.impl.network.Network.cljs$lang$ctorPrSeq = (function (this__30335__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"untangled.client.impl.network/Network");
});

untangled.client.impl.network.Network.cljs$lang$ctorPrWriter = (function (this__30335__auto__,writer__30336__auto__){
return cljs.core._write.call(null,writer__30336__auto__,"untangled.client.impl.network/Network");
});

untangled.client.impl.network.__GT_Network = (function untangled$client$impl$network$__GT_Network(url,request_transform,global_error_callback,complete_app){
return (new untangled.client.impl.network.Network(url,request_transform,global_error_callback,complete_app,null,null,null));
});

untangled.client.impl.network.map__GT_Network = (function untangled$client$impl$network$map__GT_Network(G__34384){
return (new untangled.client.impl.network.Network(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__34384),new cljs.core.Keyword(null,"request-transform","request-transform",170337297).cljs$core$IFn$_invoke$arity$1(G__34384),new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631).cljs$core$IFn$_invoke$arity$1(G__34384),new cljs.core.Keyword(null,"complete-app","complete-app",1317441339).cljs$core$IFn$_invoke$arity$1(G__34384),null,cljs.core.dissoc.call(null,G__34384,new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"request-transform","request-transform",170337297),new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),new cljs.core.Keyword(null,"complete-app","complete-app",1317441339)),null));
});

untangled.client.impl.network.make_untangled_network = (function untangled$client$impl$network$make_untangled_network(var_args){
var args__30756__auto__ = [];
var len__30749__auto___34397 = arguments.length;
var i__30750__auto___34398 = (0);
while(true){
if((i__30750__auto___34398 < len__30749__auto___34397)){
args__30756__auto__.push((arguments[i__30750__auto___34398]));

var G__34399 = (i__30750__auto___34398 + (1));
i__30750__auto___34398 = G__34399;
continue;
} else {
}
break;
}

var argseq__30757__auto__ = ((((1) < args__30756__auto__.length))?(new cljs.core.IndexedSeq(args__30756__auto__.slice((1)),(0),null)):null);
return untangled.client.impl.network.make_untangled_network.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30757__auto__);
});

untangled.client.impl.network.make_untangled_network.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__34394){
var map__34395 = p__34394;
var map__34395__$1 = ((((!((map__34395 == null)))?((((map__34395.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34395.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34395):map__34395);
var request_transform = cljs.core.get.call(null,map__34395__$1,new cljs.core.Keyword(null,"request-transform","request-transform",170337297));
var global_error_callback = cljs.core.get.call(null,map__34395__$1,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631));
return untangled.client.impl.network.map__GT_Network.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"request-transform","request-transform",170337297),request_transform,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),cljs.core.atom.call(null,global_error_callback)], null));
});

untangled.client.impl.network.make_untangled_network.cljs$lang$maxFixedArity = (1);

untangled.client.impl.network.make_untangled_network.cljs$lang$applyTo = (function (seq34392){
var G__34393 = cljs.core.first.call(null,seq34392);
var seq34392__$1 = cljs.core.next.call(null,seq34392);
return untangled.client.impl.network.make_untangled_network.cljs$core$IFn$_invoke$arity$variadic(G__34393,seq34392__$1);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {untangled.client.impl.network.UntangledNetwork}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
untangled.client.impl.network.MockNetwork = (function (complete_app,__meta,__extmap,__hash){
this.complete_app = complete_app;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
untangled.client.impl.network.MockNetwork.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30301__auto__,k__30302__auto__){
var self__ = this;
var this__30301__auto____$1 = this;
return cljs.core._lookup.call(null,this__30301__auto____$1,k__30302__auto__,null);
});

untangled.client.impl.network.MockNetwork.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30303__auto__,k34401,else__30304__auto__){
var self__ = this;
var this__30303__auto____$1 = this;
var G__34403 = (((k34401 instanceof cljs.core.Keyword))?k34401.fqn:null);
switch (G__34403) {
case "complete-app":
return self__.complete_app;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34401,else__30304__auto__);

}
});

untangled.client.impl.network.MockNetwork.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30315__auto__,writer__30316__auto__,opts__30317__auto__){
var self__ = this;
var this__30315__auto____$1 = this;
var pr_pair__30318__auto__ = ((function (this__30315__auto____$1){
return (function (keyval__30319__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30316__auto__,cljs.core.pr_writer,""," ","",opts__30317__auto__,keyval__30319__auto__);
});})(this__30315__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30316__auto__,pr_pair__30318__auto__,"#untangled.client.impl.network.MockNetwork{",", ","}",opts__30317__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),self__.complete_app],null))], null),self__.__extmap));
});

untangled.client.impl.network.MockNetwork.prototype.cljs$core$IIterable$ = true;

untangled.client.impl.network.MockNetwork.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34400){
var self__ = this;
var G__34400__$1 = this;
return (new cljs.core.RecordIter((0),G__34400__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"complete-app","complete-app",1317441339)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

untangled.client.impl.network.MockNetwork.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30299__auto__){
var self__ = this;
var this__30299__auto____$1 = this;
return self__.__meta;
});

untangled.client.impl.network.MockNetwork.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30295__auto__){
var self__ = this;
var this__30295__auto____$1 = this;
return (new untangled.client.impl.network.MockNetwork(self__.complete_app,self__.__meta,self__.__extmap,self__.__hash));
});

untangled.client.impl.network.MockNetwork.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30305__auto__){
var self__ = this;
var this__30305__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

untangled.client.impl.network.MockNetwork.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30296__auto__){
var self__ = this;
var this__30296__auto____$1 = this;
var h__30114__auto__ = self__.__hash;
if(!((h__30114__auto__ == null))){
return h__30114__auto__;
} else {
var h__30114__auto____$1 = cljs.core.hash_imap.call(null,this__30296__auto____$1);
self__.__hash = h__30114__auto____$1;

return h__30114__auto____$1;
}
});

untangled.client.impl.network.MockNetwork.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__30297__auto__,other__30298__auto__){
var self__ = this;
var this__30297__auto____$1 = this;
if(cljs.core.truth_((function (){var and__29667__auto__ = other__30298__auto__;
if(cljs.core.truth_(and__29667__auto__)){
var and__29667__auto____$1 = (this__30297__auto____$1.constructor === other__30298__auto__.constructor);
if(and__29667__auto____$1){
return cljs.core.equiv_map.call(null,this__30297__auto____$1,other__30298__auto__);
} else {
return and__29667__auto____$1;
}
} else {
return and__29667__auto__;
}
})())){
return true;
} else {
return false;
}
});

untangled.client.impl.network.MockNetwork.prototype.untangled$client$impl$network$UntangledNetwork$ = true;

untangled.client.impl.network.MockNetwork.prototype.untangled$client$impl$network$UntangledNetwork$send$arity$4 = (function (this$,edn,ok,err){
var self__ = this;
var this$__$1 = this;
return untangled.client.logging.info.call(null,"Ignored (mock) Network request ",edn);
});

untangled.client.impl.network.MockNetwork.prototype.untangled$client$impl$network$UntangledNetwork$start$arity$2 = (function (this$,app){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),app);
});

untangled.client.impl.network.MockNetwork.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30310__auto__,k__30311__auto__){
var self__ = this;
var this__30310__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),null], null), null),k__30311__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30310__auto____$1),self__.__meta),k__30311__auto__);
} else {
return (new untangled.client.impl.network.MockNetwork(self__.complete_app,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30311__auto__)),null));
}
});

untangled.client.impl.network.MockNetwork.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30308__auto__,k__30309__auto__,G__34400){
var self__ = this;
var this__30308__auto____$1 = this;
var pred__34404 = cljs.core.keyword_identical_QMARK_;
var expr__34405 = k__30309__auto__;
if(cljs.core.truth_(pred__34404.call(null,new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),expr__34405))){
return (new untangled.client.impl.network.MockNetwork(G__34400,self__.__meta,self__.__extmap,null));
} else {
return (new untangled.client.impl.network.MockNetwork(self__.complete_app,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30309__auto__,G__34400),null));
}
});

untangled.client.impl.network.MockNetwork.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30313__auto__){
var self__ = this;
var this__30313__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),self__.complete_app],null))], null),self__.__extmap));
});

untangled.client.impl.network.MockNetwork.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30300__auto__,G__34400){
var self__ = this;
var this__30300__auto____$1 = this;
return (new untangled.client.impl.network.MockNetwork(self__.complete_app,G__34400,self__.__extmap,self__.__hash));
});

untangled.client.impl.network.MockNetwork.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30306__auto__,entry__30307__auto__){
var self__ = this;
var this__30306__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30307__auto__)){
return cljs.core._assoc.call(null,this__30306__auto____$1,cljs.core._nth.call(null,entry__30307__auto__,(0)),cljs.core._nth.call(null,entry__30307__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30306__auto____$1,entry__30307__auto__);
}
});

untangled.client.impl.network.MockNetwork.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"complete-app","complete-app",-1336994430,null)], null);
});

untangled.client.impl.network.MockNetwork.cljs$lang$type = true;

untangled.client.impl.network.MockNetwork.cljs$lang$ctorPrSeq = (function (this__30335__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"untangled.client.impl.network/MockNetwork");
});

untangled.client.impl.network.MockNetwork.cljs$lang$ctorPrWriter = (function (this__30335__auto__,writer__30336__auto__){
return cljs.core._write.call(null,writer__30336__auto__,"untangled.client.impl.network/MockNetwork");
});

untangled.client.impl.network.__GT_MockNetwork = (function untangled$client$impl$network$__GT_MockNetwork(complete_app){
return (new untangled.client.impl.network.MockNetwork(complete_app,null,null,null));
});

untangled.client.impl.network.map__GT_MockNetwork = (function untangled$client$impl$network$map__GT_MockNetwork(G__34402){
return (new untangled.client.impl.network.MockNetwork(new cljs.core.Keyword(null,"complete-app","complete-app",1317441339).cljs$core$IFn$_invoke$arity$1(G__34402),null,cljs.core.dissoc.call(null,G__34402,new cljs.core.Keyword(null,"complete-app","complete-app",1317441339)),null));
});

untangled.client.impl.network.mock_network = (function untangled$client$impl$network$mock_network(){
return untangled.client.impl.network.map__GT_MockNetwork.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=network.js.map?rel=1466782836391