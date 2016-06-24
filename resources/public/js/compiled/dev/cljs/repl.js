// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34552_34566 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34553_34567 = null;
var count__34554_34568 = (0);
var i__34555_34569 = (0);
while(true){
if((i__34555_34569 < count__34554_34568)){
var f_34570 = cljs.core._nth.call(null,chunk__34553_34567,i__34555_34569);
cljs.core.println.call(null,"  ",f_34570);

var G__34571 = seq__34552_34566;
var G__34572 = chunk__34553_34567;
var G__34573 = count__34554_34568;
var G__34574 = (i__34555_34569 + (1));
seq__34552_34566 = G__34571;
chunk__34553_34567 = G__34572;
count__34554_34568 = G__34573;
i__34555_34569 = G__34574;
continue;
} else {
var temp__4657__auto___34575 = cljs.core.seq.call(null,seq__34552_34566);
if(temp__4657__auto___34575){
var seq__34552_34576__$1 = temp__4657__auto___34575;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34552_34576__$1)){
var c__30490__auto___34577 = cljs.core.chunk_first.call(null,seq__34552_34576__$1);
var G__34578 = cljs.core.chunk_rest.call(null,seq__34552_34576__$1);
var G__34579 = c__30490__auto___34577;
var G__34580 = cljs.core.count.call(null,c__30490__auto___34577);
var G__34581 = (0);
seq__34552_34566 = G__34578;
chunk__34553_34567 = G__34579;
count__34554_34568 = G__34580;
i__34555_34569 = G__34581;
continue;
} else {
var f_34582 = cljs.core.first.call(null,seq__34552_34576__$1);
cljs.core.println.call(null,"  ",f_34582);

var G__34583 = cljs.core.next.call(null,seq__34552_34576__$1);
var G__34584 = null;
var G__34585 = (0);
var G__34586 = (0);
seq__34552_34566 = G__34583;
chunk__34553_34567 = G__34584;
count__34554_34568 = G__34585;
i__34555_34569 = G__34586;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34587 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__29679__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__29679__auto__)){
return or__29679__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_34587);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_34587)))?cljs.core.second.call(null,arglists_34587):arglists_34587));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34556 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34557 = null;
var count__34558 = (0);
var i__34559 = (0);
while(true){
if((i__34559 < count__34558)){
var vec__34560 = cljs.core._nth.call(null,chunk__34557,i__34559);
var name = cljs.core.nth.call(null,vec__34560,(0),null);
var map__34561 = cljs.core.nth.call(null,vec__34560,(1),null);
var map__34561__$1 = ((((!((map__34561 == null)))?((((map__34561.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34561.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34561):map__34561);
var doc = cljs.core.get.call(null,map__34561__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__34561__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__34588 = seq__34556;
var G__34589 = chunk__34557;
var G__34590 = count__34558;
var G__34591 = (i__34559 + (1));
seq__34556 = G__34588;
chunk__34557 = G__34589;
count__34558 = G__34590;
i__34559 = G__34591;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34556);
if(temp__4657__auto__){
var seq__34556__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34556__$1)){
var c__30490__auto__ = cljs.core.chunk_first.call(null,seq__34556__$1);
var G__34592 = cljs.core.chunk_rest.call(null,seq__34556__$1);
var G__34593 = c__30490__auto__;
var G__34594 = cljs.core.count.call(null,c__30490__auto__);
var G__34595 = (0);
seq__34556 = G__34592;
chunk__34557 = G__34593;
count__34558 = G__34594;
i__34559 = G__34595;
continue;
} else {
var vec__34563 = cljs.core.first.call(null,seq__34556__$1);
var name = cljs.core.nth.call(null,vec__34563,(0),null);
var map__34564 = cljs.core.nth.call(null,vec__34563,(1),null);
var map__34564__$1 = ((((!((map__34564 == null)))?((((map__34564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34564):map__34564);
var doc = cljs.core.get.call(null,map__34564__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__34564__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__34596 = cljs.core.next.call(null,seq__34556__$1);
var G__34597 = null;
var G__34598 = (0);
var G__34599 = (0);
seq__34556 = G__34596;
chunk__34557 = G__34597;
count__34558 = G__34598;
i__34559 = G__34599;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1466782837169