// Compiled by ClojureScript 1.8.51 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__30807_30811 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__30808_30812 = null;
var count__30809_30813 = (0);
var i__30810_30814 = (0);
while(true){
if((i__30810_30814 < count__30809_30813)){
var k_30815 = cljs.core._nth.call(null,chunk__30808_30812,i__30810_30814);
var v_30816 = (b[k_30815]);
(a[k_30815] = v_30816);

var G__30817 = seq__30807_30811;
var G__30818 = chunk__30808_30812;
var G__30819 = count__30809_30813;
var G__30820 = (i__30810_30814 + (1));
seq__30807_30811 = G__30817;
chunk__30808_30812 = G__30818;
count__30809_30813 = G__30819;
i__30810_30814 = G__30820;
continue;
} else {
var temp__4657__auto___30821 = cljs.core.seq.call(null,seq__30807_30811);
if(temp__4657__auto___30821){
var seq__30807_30822__$1 = temp__4657__auto___30821;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30807_30822__$1)){
var c__30490__auto___30823 = cljs.core.chunk_first.call(null,seq__30807_30822__$1);
var G__30824 = cljs.core.chunk_rest.call(null,seq__30807_30822__$1);
var G__30825 = c__30490__auto___30823;
var G__30826 = cljs.core.count.call(null,c__30490__auto___30823);
var G__30827 = (0);
seq__30807_30811 = G__30824;
chunk__30808_30812 = G__30825;
count__30809_30813 = G__30826;
i__30810_30814 = G__30827;
continue;
} else {
var k_30828 = cljs.core.first.call(null,seq__30807_30822__$1);
var v_30829 = (b[k_30828]);
(a[k_30828] = v_30829);

var G__30830 = cljs.core.next.call(null,seq__30807_30822__$1);
var G__30831 = null;
var G__30832 = (0);
var G__30833 = (0);
seq__30807_30811 = G__30830;
chunk__30808_30812 = G__30831;
count__30809_30813 = G__30832;
i__30810_30814 = G__30833;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__30285__auto__,writer__30286__auto__,opt__30287__auto__){
return cljs.core._write.call(null,writer__30286__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__30285__auto__,writer__30286__auto__,opt__30287__auto__){
return cljs.core._write.call(null,writer__30286__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args30834 = [];
var len__30749__auto___30837 = arguments.length;
var i__30750__auto___30838 = (0);
while(true){
if((i__30750__auto___30838 < len__30749__auto___30837)){
args30834.push((arguments[i__30750__auto___30838]));

var G__30839 = (i__30750__auto___30838 + (1));
i__30750__auto___30838 = G__30839;
continue;
} else {
}
break;
}

var G__30836 = args30834.length;
switch (G__30836) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30834.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__30841 = (i + (2));
var G__30842 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__30841;
ret = G__30842;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__30285__auto__,writer__30286__auto__,opt__30287__auto__){
return cljs.core._write.call(null,writer__30286__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__30285__auto__,writer__30286__auto__,opt__30287__auto__){
return cljs.core._write.call(null,writer__30286__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__30843_30847 = cljs.core.seq.call(null,v);
var chunk__30844_30848 = null;
var count__30845_30849 = (0);
var i__30846_30850 = (0);
while(true){
if((i__30846_30850 < count__30845_30849)){
var x_30851 = cljs.core._nth.call(null,chunk__30844_30848,i__30846_30850);
ret.push(x_30851);

var G__30852 = seq__30843_30847;
var G__30853 = chunk__30844_30848;
var G__30854 = count__30845_30849;
var G__30855 = (i__30846_30850 + (1));
seq__30843_30847 = G__30852;
chunk__30844_30848 = G__30853;
count__30845_30849 = G__30854;
i__30846_30850 = G__30855;
continue;
} else {
var temp__4657__auto___30856 = cljs.core.seq.call(null,seq__30843_30847);
if(temp__4657__auto___30856){
var seq__30843_30857__$1 = temp__4657__auto___30856;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30843_30857__$1)){
var c__30490__auto___30858 = cljs.core.chunk_first.call(null,seq__30843_30857__$1);
var G__30859 = cljs.core.chunk_rest.call(null,seq__30843_30857__$1);
var G__30860 = c__30490__auto___30858;
var G__30861 = cljs.core.count.call(null,c__30490__auto___30858);
var G__30862 = (0);
seq__30843_30847 = G__30859;
chunk__30844_30848 = G__30860;
count__30845_30849 = G__30861;
i__30846_30850 = G__30862;
continue;
} else {
var x_30863 = cljs.core.first.call(null,seq__30843_30857__$1);
ret.push(x_30863);

var G__30864 = cljs.core.next.call(null,seq__30843_30857__$1);
var G__30865 = null;
var G__30866 = (0);
var G__30867 = (0);
seq__30843_30847 = G__30864;
chunk__30844_30848 = G__30865;
count__30845_30849 = G__30866;
i__30846_30850 = G__30867;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__30285__auto__,writer__30286__auto__,opt__30287__auto__){
return cljs.core._write.call(null,writer__30286__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__30285__auto__,writer__30286__auto__,opt__30287__auto__){
return cljs.core._write.call(null,writer__30286__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__30868_30872 = cljs.core.seq.call(null,v);
var chunk__30869_30873 = null;
var count__30870_30874 = (0);
var i__30871_30875 = (0);
while(true){
if((i__30871_30875 < count__30870_30874)){
var x_30876 = cljs.core._nth.call(null,chunk__30869_30873,i__30871_30875);
ret.push(x_30876);

var G__30877 = seq__30868_30872;
var G__30878 = chunk__30869_30873;
var G__30879 = count__30870_30874;
var G__30880 = (i__30871_30875 + (1));
seq__30868_30872 = G__30877;
chunk__30869_30873 = G__30878;
count__30870_30874 = G__30879;
i__30871_30875 = G__30880;
continue;
} else {
var temp__4657__auto___30881 = cljs.core.seq.call(null,seq__30868_30872);
if(temp__4657__auto___30881){
var seq__30868_30882__$1 = temp__4657__auto___30881;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30868_30882__$1)){
var c__30490__auto___30883 = cljs.core.chunk_first.call(null,seq__30868_30882__$1);
var G__30884 = cljs.core.chunk_rest.call(null,seq__30868_30882__$1);
var G__30885 = c__30490__auto___30883;
var G__30886 = cljs.core.count.call(null,c__30490__auto___30883);
var G__30887 = (0);
seq__30868_30872 = G__30884;
chunk__30869_30873 = G__30885;
count__30870_30874 = G__30886;
i__30871_30875 = G__30887;
continue;
} else {
var x_30888 = cljs.core.first.call(null,seq__30868_30882__$1);
ret.push(x_30888);

var G__30889 = cljs.core.next.call(null,seq__30868_30882__$1);
var G__30890 = null;
var G__30891 = (0);
var G__30892 = (0);
seq__30868_30872 = G__30889;
chunk__30869_30873 = G__30890;
count__30870_30874 = G__30891;
i__30871_30875 = G__30892;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__30285__auto__,writer__30286__auto__,opt__30287__auto__){
return cljs.core._write.call(null,writer__30286__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__30893_30897 = cljs.core.seq.call(null,v);
var chunk__30894_30898 = null;
var count__30895_30899 = (0);
var i__30896_30900 = (0);
while(true){
if((i__30896_30900 < count__30895_30899)){
var x_30901 = cljs.core._nth.call(null,chunk__30894_30898,i__30896_30900);
ret.push(x_30901);

var G__30902 = seq__30893_30897;
var G__30903 = chunk__30894_30898;
var G__30904 = count__30895_30899;
var G__30905 = (i__30896_30900 + (1));
seq__30893_30897 = G__30902;
chunk__30894_30898 = G__30903;
count__30895_30899 = G__30904;
i__30896_30900 = G__30905;
continue;
} else {
var temp__4657__auto___30906 = cljs.core.seq.call(null,seq__30893_30897);
if(temp__4657__auto___30906){
var seq__30893_30907__$1 = temp__4657__auto___30906;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30893_30907__$1)){
var c__30490__auto___30908 = cljs.core.chunk_first.call(null,seq__30893_30907__$1);
var G__30909 = cljs.core.chunk_rest.call(null,seq__30893_30907__$1);
var G__30910 = c__30490__auto___30908;
var G__30911 = cljs.core.count.call(null,c__30490__auto___30908);
var G__30912 = (0);
seq__30893_30897 = G__30909;
chunk__30894_30898 = G__30910;
count__30895_30899 = G__30911;
i__30896_30900 = G__30912;
continue;
} else {
var x_30913 = cljs.core.first.call(null,seq__30893_30907__$1);
ret.push(x_30913);

var G__30914 = cljs.core.next.call(null,seq__30893_30907__$1);
var G__30915 = null;
var G__30916 = (0);
var G__30917 = (0);
seq__30893_30897 = G__30914;
chunk__30894_30898 = G__30915;
count__30895_30899 = G__30916;
i__30896_30900 = G__30917;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__30285__auto__,writer__30286__auto__,opt__30287__auto__){
return cljs.core._write.call(null,writer__30286__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__30285__auto__,writer__30286__auto__,opt__30287__auto__){
return cljs.core._write.call(null,writer__30286__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args30918 = [];
var len__30749__auto___30929 = arguments.length;
var i__30750__auto___30930 = (0);
while(true){
if((i__30750__auto___30930 < len__30749__auto___30929)){
args30918.push((arguments[i__30750__auto___30930]));

var G__30931 = (i__30750__auto___30930 + (1));
i__30750__auto___30930 = G__30931;
continue;
} else {
}
break;
}

var G__30920 = args30918.length;
switch (G__30920) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30918.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__30921 = obj;
G__30921.push(kfn.call(null,k),vfn.call(null,v));

return G__30921;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x30922 = cljs.core.clone.call(null,handlers);
x30922.forEach = ((function (x30922,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__30923 = cljs.core.seq.call(null,coll);
var chunk__30924 = null;
var count__30925 = (0);
var i__30926 = (0);
while(true){
if((i__30926 < count__30925)){
var vec__30927 = cljs.core._nth.call(null,chunk__30924,i__30926);
var k = cljs.core.nth.call(null,vec__30927,(0),null);
var v = cljs.core.nth.call(null,vec__30927,(1),null);
f.call(null,v,k);

var G__30933 = seq__30923;
var G__30934 = chunk__30924;
var G__30935 = count__30925;
var G__30936 = (i__30926 + (1));
seq__30923 = G__30933;
chunk__30924 = G__30934;
count__30925 = G__30935;
i__30926 = G__30936;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30923);
if(temp__4657__auto__){
var seq__30923__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30923__$1)){
var c__30490__auto__ = cljs.core.chunk_first.call(null,seq__30923__$1);
var G__30937 = cljs.core.chunk_rest.call(null,seq__30923__$1);
var G__30938 = c__30490__auto__;
var G__30939 = cljs.core.count.call(null,c__30490__auto__);
var G__30940 = (0);
seq__30923 = G__30937;
chunk__30924 = G__30938;
count__30925 = G__30939;
i__30926 = G__30940;
continue;
} else {
var vec__30928 = cljs.core.first.call(null,seq__30923__$1);
var k = cljs.core.nth.call(null,vec__30928,(0),null);
var v = cljs.core.nth.call(null,vec__30928,(1),null);
f.call(null,v,k);

var G__30941 = cljs.core.next.call(null,seq__30923__$1);
var G__30942 = null;
var G__30943 = (0);
var G__30944 = (0);
seq__30923 = G__30941;
chunk__30924 = G__30942;
count__30925 = G__30943;
i__30926 = G__30944;
continue;
}
} else {
return null;
}
}
break;
}
});})(x30922,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x30922;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args30945 = [];
var len__30749__auto___30951 = arguments.length;
var i__30750__auto___30952 = (0);
while(true){
if((i__30750__auto___30952 < len__30749__auto___30951)){
args30945.push((arguments[i__30750__auto___30952]));

var G__30953 = (i__30750__auto___30952 + (1));
i__30750__auto___30952 = G__30953;
continue;
} else {
}
break;
}

var G__30947 = args30945.length;
switch (G__30947) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30945.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit30948 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit30948 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta30949){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta30949 = meta30949;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit30948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30950,meta30949__$1){
var self__ = this;
var _30950__$1 = this;
return (new cognitect.transit.t_cognitect$transit30948(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta30949__$1));
});

cognitect.transit.t_cognitect$transit30948.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30950){
var self__ = this;
var _30950__$1 = this;
return self__.meta30949;
});

cognitect.transit.t_cognitect$transit30948.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit30948.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit30948.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit30948.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit30948.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta30949","meta30949",1449331259,null)], null);
});

cognitect.transit.t_cognitect$transit30948.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit30948.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit30948";

cognitect.transit.t_cognitect$transit30948.cljs$lang$ctorPrWriter = (function (this__30285__auto__,writer__30286__auto__,opt__30287__auto__){
return cljs.core._write.call(null,writer__30286__auto__,"cognitect.transit/t_cognitect$transit30948");
});

cognitect.transit.__GT_t_cognitect$transit30948 = (function cognitect$transit$__GT_t_cognitect$transit30948(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta30949){
return (new cognitect.transit.t_cognitect$transit30948(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta30949));
});

}

return (new cognitect.transit.t_cognitect$transit30948(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__29679__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__29679__auto__)){
return or__29679__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1466782824684