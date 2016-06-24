// Compiled by ClojureScript 1.8.51 {}
goog.provide('untangled.client.impl.application');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('untangled.client.logging');
goog.require('untangled.i18n.core');
goog.require('untangled.client.impl.network');
goog.require('untangled.client.impl.om_plumbing');
goog.require('cljs.core.async');
goog.require('untangled.client.impl.data_fetch');
goog.require('om.next');
untangled.client.impl.application.fallback_handler = (function untangled$client$impl$application$fallback_handler(p__39754,query){
var map__39757 = p__39754;
var map__39757__$1 = ((((!((map__39757 == null)))?((((map__39757.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39757.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39757):map__39757);
var reconciler = cljs.core.get.call(null,map__39757__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
return ((function (map__39757,map__39757__$1,reconciler){
return (function (error){
cljs.core.swap_BANG_.call(null,om.next.app_state.call(null,reconciler),cljs.core.assoc,new cljs.core.Keyword("untangled","server-error","untangled/server-error",1542377811),error);

var temp__4655__auto__ = untangled.client.impl.om_plumbing.fallback_query.call(null,query,error);
if(cljs.core.truth_(temp__4655__auto__)){
var q = temp__4655__auto__;
untangled.client.logging.warn.call(null,untangled.client.logging.value_message.call(null,"Transaction failed. Running fallback.",q));

return om.next.transact_BANG_.call(null,reconciler,q);
} else {
return untangled.client.logging.warn.call(null,"Fallback triggered, but no fallbacks were defined.");
}
});
;})(map__39757,map__39757__$1,reconciler))
});
untangled.client.impl.application.enqueue = (function untangled$client$impl$application$enqueue(q,v){
var c__34337__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34337__auto__){
return (function (){
var f__34338__auto__ = (function (){var switch__34322__auto__ = ((function (c__34337__auto__){
return (function (state_39774){
var state_val_39775 = (state_39774[(1)]);
if((state_val_39775 === (1))){
var state_39774__$1 = state_39774;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39774__$1,(2),q,v);
} else {
if((state_val_39775 === (2))){
var inst_39772 = (state_39774[(2)]);
var state_39774__$1 = state_39774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39774__$1,inst_39772);
} else {
return null;
}
}
});})(c__34337__auto__))
;
return ((function (switch__34322__auto__,c__34337__auto__){
return (function() {
var untangled$client$impl$application$enqueue_$_state_machine__34323__auto__ = null;
var untangled$client$impl$application$enqueue_$_state_machine__34323__auto____0 = (function (){
var statearr_39779 = [null,null,null,null,null,null,null];
(statearr_39779[(0)] = untangled$client$impl$application$enqueue_$_state_machine__34323__auto__);

(statearr_39779[(1)] = (1));

return statearr_39779;
});
var untangled$client$impl$application$enqueue_$_state_machine__34323__auto____1 = (function (state_39774){
while(true){
var ret_value__34324__auto__ = (function (){try{while(true){
var result__34325__auto__ = switch__34322__auto__.call(null,state_39774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34325__auto__;
}
break;
}
}catch (e39780){if((e39780 instanceof Object)){
var ex__34326__auto__ = e39780;
var statearr_39781_39783 = state_39774;
(statearr_39781_39783[(5)] = ex__34326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39784 = state_39774;
state_39774 = G__39784;
continue;
} else {
return ret_value__34324__auto__;
}
break;
}
});
untangled$client$impl$application$enqueue_$_state_machine__34323__auto__ = function(state_39774){
switch(arguments.length){
case 0:
return untangled$client$impl$application$enqueue_$_state_machine__34323__auto____0.call(this);
case 1:
return untangled$client$impl$application$enqueue_$_state_machine__34323__auto____1.call(this,state_39774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$enqueue_$_state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$enqueue_$_state_machine__34323__auto____0;
untangled$client$impl$application$enqueue_$_state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$enqueue_$_state_machine__34323__auto____1;
return untangled$client$impl$application$enqueue_$_state_machine__34323__auto__;
})()
;})(switch__34322__auto__,c__34337__auto__))
})();
var state__34339__auto__ = (function (){var statearr_39782 = f__34338__auto__.call(null);
(statearr_39782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34337__auto__);

return statearr_39782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34339__auto__);
});})(c__34337__auto__))
);

return c__34337__auto__;
});
/**
 * Do a properly-plumbed network send that strips ui attributes from the tx
 */
untangled.client.impl.application.real_send = (function untangled$client$impl$application$real_send(net,tx,on_load,on_error){
return untangled.client.impl.network.send.call(null,net,untangled.client.impl.om_plumbing.strip_ui.call(null,tx),on_load,on_error);
});
untangled.client.impl.application.enqueue_mutations = (function untangled$client$impl$application$enqueue_mutations(p__39786,remote_tx_map,cb){
var map__39789 = p__39786;
var map__39789__$1 = ((((!((map__39789 == null)))?((((map__39789.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39789.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39789):map__39789);
var app__$1 = map__39789__$1;
var queue = cljs.core.get.call(null,map__39789__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var full_remote_transaction = new cljs.core.Keyword(null,"remote","remote",-1593576576).cljs$core$IFn$_invoke$arity$1(remote_tx_map);
var fallback = untangled.client.impl.application.fallback_handler.call(null,app__$1,full_remote_transaction);
var desired_remote_mutations = untangled.client.impl.om_plumbing.remove_loads_and_fallbacks.call(null,full_remote_transaction);
var has_mutations_QMARK_ = (cljs.core.count.call(null,desired_remote_mutations) > (0));
var payload = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),desired_remote_mutations,new cljs.core.Keyword(null,"on-load","on-load",1415151594),cb,new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (full_remote_transaction,fallback,desired_remote_mutations,has_mutations_QMARK_,map__39789,map__39789__$1,app__$1,queue){
return (function (p1__39785_SHARP_){
return fallback.call(null,p1__39785_SHARP_);
});})(full_remote_transaction,fallback,desired_remote_mutations,has_mutations_QMARK_,map__39789,map__39789__$1,app__$1,queue))
], null);
if(has_mutations_QMARK_){
return untangled.client.impl.application.enqueue.call(null,queue,payload);
} else {
return null;
}
});
untangled.client.impl.application.enqueue_reads = (function untangled$client$impl$application$enqueue_reads(p__39793){
var map__39804 = p__39793;
var map__39804__$1 = ((((!((map__39804 == null)))?((((map__39804.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39804.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39804):map__39804);
var queue = cljs.core.get.call(null,map__39804__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var reconciler = cljs.core.get.call(null,map__39804__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var networking = cljs.core.get.call(null,map__39804__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var parallel_payload = untangled.client.impl.data_fetch.mark_parallel_loading.call(null,reconciler);
var fetch_payload = untangled.client.impl.data_fetch.mark_loading.call(null,reconciler);
var seq__39806_39814 = cljs.core.seq.call(null,parallel_payload);
var chunk__39807_39815 = null;
var count__39808_39816 = (0);
var i__39809_39817 = (0);
while(true){
if((i__39809_39817 < count__39808_39816)){
var map__39810_39818 = cljs.core._nth.call(null,chunk__39807_39815,i__39809_39817);
var map__39810_39819__$1 = ((((!((map__39810_39818 == null)))?((((map__39810_39818.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39810_39818.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39810_39818):map__39810_39818);
var query_39820 = cljs.core.get.call(null,map__39810_39819__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var on_load_39821 = cljs.core.get.call(null,map__39810_39819__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var on_error_39822 = cljs.core.get.call(null,map__39810_39819__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var callback_args_39823 = cljs.core.get.call(null,map__39810_39819__$1,new cljs.core.Keyword(null,"callback-args","callback-args",1117743591));
var on_load_SINGLEQUOTE__39824 = ((function (seq__39806_39814,chunk__39807_39815,count__39808_39816,i__39809_39817,map__39810_39818,map__39810_39819__$1,query_39820,on_load_39821,on_error_39822,callback_args_39823,parallel_payload,fetch_payload,map__39804,map__39804__$1,queue,reconciler,networking){
return (function (p1__39791_SHARP_){
return on_load_39821.call(null,p1__39791_SHARP_,callback_args_39823);
});})(seq__39806_39814,chunk__39807_39815,count__39808_39816,i__39809_39817,map__39810_39818,map__39810_39819__$1,query_39820,on_load_39821,on_error_39822,callback_args_39823,parallel_payload,fetch_payload,map__39804,map__39804__$1,queue,reconciler,networking))
;
var on_error_SINGLEQUOTE__39825 = ((function (seq__39806_39814,chunk__39807_39815,count__39808_39816,i__39809_39817,on_load_SINGLEQUOTE__39824,map__39810_39818,map__39810_39819__$1,query_39820,on_load_39821,on_error_39822,callback_args_39823,parallel_payload,fetch_payload,map__39804,map__39804__$1,queue,reconciler,networking){
return (function (p1__39792_SHARP_){
return on_error_39822.call(null,p1__39792_SHARP_,callback_args_39823);
});})(seq__39806_39814,chunk__39807_39815,count__39808_39816,i__39809_39817,on_load_SINGLEQUOTE__39824,map__39810_39818,map__39810_39819__$1,query_39820,on_load_39821,on_error_39822,callback_args_39823,parallel_payload,fetch_payload,map__39804,map__39804__$1,queue,reconciler,networking))
;
untangled.client.impl.application.real_send.call(null,networking,query_39820,on_load_SINGLEQUOTE__39824,on_error_SINGLEQUOTE__39825);

var G__39826 = seq__39806_39814;
var G__39827 = chunk__39807_39815;
var G__39828 = count__39808_39816;
var G__39829 = (i__39809_39817 + (1));
seq__39806_39814 = G__39826;
chunk__39807_39815 = G__39827;
count__39808_39816 = G__39828;
i__39809_39817 = G__39829;
continue;
} else {
var temp__4657__auto___39830 = cljs.core.seq.call(null,seq__39806_39814);
if(temp__4657__auto___39830){
var seq__39806_39831__$1 = temp__4657__auto___39830;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39806_39831__$1)){
var c__30490__auto___39832 = cljs.core.chunk_first.call(null,seq__39806_39831__$1);
var G__39833 = cljs.core.chunk_rest.call(null,seq__39806_39831__$1);
var G__39834 = c__30490__auto___39832;
var G__39835 = cljs.core.count.call(null,c__30490__auto___39832);
var G__39836 = (0);
seq__39806_39814 = G__39833;
chunk__39807_39815 = G__39834;
count__39808_39816 = G__39835;
i__39809_39817 = G__39836;
continue;
} else {
var map__39812_39837 = cljs.core.first.call(null,seq__39806_39831__$1);
var map__39812_39838__$1 = ((((!((map__39812_39837 == null)))?((((map__39812_39837.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39812_39837.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39812_39837):map__39812_39837);
var query_39839 = cljs.core.get.call(null,map__39812_39838__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var on_load_39840 = cljs.core.get.call(null,map__39812_39838__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var on_error_39841 = cljs.core.get.call(null,map__39812_39838__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var callback_args_39842 = cljs.core.get.call(null,map__39812_39838__$1,new cljs.core.Keyword(null,"callback-args","callback-args",1117743591));
var on_load_SINGLEQUOTE__39843 = ((function (seq__39806_39814,chunk__39807_39815,count__39808_39816,i__39809_39817,map__39812_39837,map__39812_39838__$1,query_39839,on_load_39840,on_error_39841,callback_args_39842,seq__39806_39831__$1,temp__4657__auto___39830,parallel_payload,fetch_payload,map__39804,map__39804__$1,queue,reconciler,networking){
return (function (p1__39791_SHARP_){
return on_load_39840.call(null,p1__39791_SHARP_,callback_args_39842);
});})(seq__39806_39814,chunk__39807_39815,count__39808_39816,i__39809_39817,map__39812_39837,map__39812_39838__$1,query_39839,on_load_39840,on_error_39841,callback_args_39842,seq__39806_39831__$1,temp__4657__auto___39830,parallel_payload,fetch_payload,map__39804,map__39804__$1,queue,reconciler,networking))
;
var on_error_SINGLEQUOTE__39844 = ((function (seq__39806_39814,chunk__39807_39815,count__39808_39816,i__39809_39817,on_load_SINGLEQUOTE__39843,map__39812_39837,map__39812_39838__$1,query_39839,on_load_39840,on_error_39841,callback_args_39842,seq__39806_39831__$1,temp__4657__auto___39830,parallel_payload,fetch_payload,map__39804,map__39804__$1,queue,reconciler,networking){
return (function (p1__39792_SHARP_){
return on_error_39841.call(null,p1__39792_SHARP_,callback_args_39842);
});})(seq__39806_39814,chunk__39807_39815,count__39808_39816,i__39809_39817,on_load_SINGLEQUOTE__39843,map__39812_39837,map__39812_39838__$1,query_39839,on_load_39840,on_error_39841,callback_args_39842,seq__39806_39831__$1,temp__4657__auto___39830,parallel_payload,fetch_payload,map__39804,map__39804__$1,queue,reconciler,networking))
;
untangled.client.impl.application.real_send.call(null,networking,query_39839,on_load_SINGLEQUOTE__39843,on_error_SINGLEQUOTE__39844);

var G__39845 = cljs.core.next.call(null,seq__39806_39831__$1);
var G__39846 = null;
var G__39847 = (0);
var G__39848 = (0);
seq__39806_39814 = G__39845;
chunk__39807_39815 = G__39846;
count__39808_39816 = G__39847;
i__39809_39817 = G__39848;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(fetch_payload)){
return untangled.client.impl.application.enqueue.call(null,queue,cljs.core.assoc.call(null,fetch_payload,new cljs.core.Keyword(null,"networking","networking",586110628),networking));
} else {
return null;
}
});
/**
 * Puts queries/mutations (and their corresponding callbacks) onto the send queue. The networking CSP will pull these
 *   off one at a time and send them through the real networking layer. Reads are guaranteed to *follow* writes.
 */
untangled.client.impl.application.server_send = (function untangled$client$impl$application$server_send(app__$1,remote_tx_map,cb){
untangled.client.impl.application.enqueue_mutations.call(null,app__$1,remote_tx_map,cb);

return untangled.client.impl.application.enqueue_reads.call(null,app__$1);
});
/**
 * Starts a communicating sequential process that sends network requests from the request queue.
 */
untangled.client.impl.application.start_network_sequential_processing = (function untangled$client$impl$application$start_network_sequential_processing(p__39849){
var map__39967 = p__39849;
var map__39967__$1 = ((((!((map__39967 == null)))?((((map__39967.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39967.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39967):map__39967);
var networking = cljs.core.get.call(null,map__39967__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var queue = cljs.core.get.call(null,map__39967__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var response_channel = cljs.core.get.call(null,map__39967__$1,new cljs.core.Keyword(null,"response-channel","response-channel",1395191493));
var make_process_response = ((function (map__39967,map__39967__$1,networking,queue,response_channel){
return (function untangled$client$impl$application$start_network_sequential_processing_$_make_process_response(action,callback_args){
return ((function (map__39967,map__39967__$1,networking,queue,response_channel){
return (function (resp){
try{return action.call(null,resp,callback_args);
}finally {var c__34337__auto___40084 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34337__auto___40084,map__39967,map__39967__$1,networking,queue,response_channel){
return (function (){
var f__34338__auto__ = (function (){var switch__34322__auto__ = ((function (c__34337__auto___40084,map__39967,map__39967__$1,networking,queue,response_channel){
return (function (state_40008){
var state_val_40009 = (state_40008[(1)]);
if((state_val_40009 === (1))){
var state_40008__$1 = state_40008;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40008__$1,(2),response_channel,new cljs.core.Keyword(null,"complete","complete",-500388775));
} else {
if((state_val_40009 === (2))){
var inst_40006 = (state_40008[(2)]);
var state_40008__$1 = state_40008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40008__$1,inst_40006);
} else {
return null;
}
}
});})(c__34337__auto___40084,map__39967,map__39967__$1,networking,queue,response_channel))
;
return ((function (switch__34322__auto__,c__34337__auto___40084,map__39967,map__39967__$1,networking,queue,response_channel){
return (function() {
var untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__34323__auto__ = null;
var untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__34323__auto____0 = (function (){
var statearr_40013 = [null,null,null,null,null,null,null];
(statearr_40013[(0)] = untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__34323__auto__);

(statearr_40013[(1)] = (1));

return statearr_40013;
});
var untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__34323__auto____1 = (function (state_40008){
while(true){
var ret_value__34324__auto__ = (function (){try{while(true){
var result__34325__auto__ = switch__34322__auto__.call(null,state_40008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34325__auto__;
}
break;
}
}catch (e40014){if((e40014 instanceof Object)){
var ex__34326__auto__ = e40014;
var statearr_40015_40085 = state_40008;
(statearr_40015_40085[(5)] = ex__34326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40086 = state_40008;
state_40008 = G__40086;
continue;
} else {
return ret_value__34324__auto__;
}
break;
}
});
untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__34323__auto__ = function(state_40008){
switch(arguments.length){
case 0:
return untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__34323__auto____0.call(this);
case 1:
return untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__34323__auto____1.call(this,state_40008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__34323__auto____0;
untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__34323__auto____1;
return untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__34323__auto__;
})()
;})(switch__34322__auto__,c__34337__auto___40084,map__39967,map__39967__$1,networking,queue,response_channel))
})();
var state__34339__auto__ = (function (){var statearr_40016 = f__34338__auto__.call(null);
(statearr_40016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34337__auto___40084);

return statearr_40016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34339__auto__);
});})(c__34337__auto___40084,map__39967,map__39967__$1,networking,queue,response_channel))
);

}});
;})(map__39967,map__39967__$1,networking,queue,response_channel))
});})(map__39967,map__39967__$1,networking,queue,response_channel))
;
var c__34337__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34337__auto__,map__39967,map__39967__$1,networking,queue,response_channel){
return (function (){
var f__34338__auto__ = (function (){var switch__34322__auto__ = ((function (c__34337__auto__,map__39967,map__39967__$1,networking,queue,response_channel){
return (function (state_40057){
var state_val_40058 = (state_40057[(1)]);
if((state_val_40058 === (7))){
var inst_40036 = (state_40057[(2)]);
var state_40057__$1 = state_40057;
if(cljs.core.truth_(inst_40036)){
var statearr_40059_40087 = state_40057__$1;
(statearr_40059_40087[(1)] = (11));

} else {
var statearr_40060_40088 = state_40057__$1;
(statearr_40060_40088[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40058 === (1))){
var state_40057__$1 = state_40057;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40057__$1,(2),queue);
} else {
if((state_val_40058 === (4))){
var inst_40055 = (state_40057[(2)]);
var state_40057__$1 = state_40057;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40057__$1,inst_40055);
} else {
if((state_val_40058 === (15))){
var inst_40052 = (state_40057[(2)]);
var inst_40019 = inst_40052;
var state_40057__$1 = (function (){var statearr_40061 = state_40057;
(statearr_40061[(7)] = inst_40019);

return statearr_40061;
})();
var statearr_40062_40089 = state_40057__$1;
(statearr_40062_40089[(2)] = null);

(statearr_40062_40089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40058 === (13))){
var inst_40041 = (state_40057[(2)]);
var inst_40042 = cljs.core.get.call(null,inst_40041,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_40043 = cljs.core.get.call(null,inst_40041,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var inst_40044 = cljs.core.get.call(null,inst_40041,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var inst_40045 = cljs.core.get.call(null,inst_40041,new cljs.core.Keyword(null,"callback-args","callback-args",1117743591));
var inst_40046 = make_process_response.call(null,inst_40043,inst_40045);
var inst_40047 = make_process_response.call(null,inst_40044,inst_40045);
var inst_40048 = untangled.client.impl.application.real_send.call(null,networking,inst_40042,inst_40046,inst_40047);
var state_40057__$1 = (function (){var statearr_40063 = state_40057;
(statearr_40063[(8)] = inst_40048);

return statearr_40063;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40057__$1,(14),response_channel);
} else {
if((state_val_40058 === (6))){
var state_40057__$1 = state_40057;
var statearr_40064_40090 = state_40057__$1;
(statearr_40064_40090[(2)] = false);

(statearr_40064_40090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40058 === (3))){
var inst_40019 = (state_40057[(7)]);
var inst_40023 = (inst_40019 == null);
var inst_40024 = cljs.core.not.call(null,inst_40023);
var state_40057__$1 = state_40057;
if(inst_40024){
var statearr_40065_40091 = state_40057__$1;
(statearr_40065_40091[(1)] = (5));

} else {
var statearr_40066_40092 = state_40057__$1;
(statearr_40066_40092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40058 === (12))){
var inst_40019 = (state_40057[(7)]);
var state_40057__$1 = state_40057;
var statearr_40067_40093 = state_40057__$1;
(statearr_40067_40093[(2)] = inst_40019);

(statearr_40067_40093[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40058 === (2))){
var inst_40018 = (state_40057[(2)]);
var inst_40019 = inst_40018;
var state_40057__$1 = (function (){var statearr_40068 = state_40057;
(statearr_40068[(7)] = inst_40019);

return statearr_40068;
})();
var statearr_40069_40094 = state_40057__$1;
(statearr_40069_40094[(2)] = null);

(statearr_40069_40094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40058 === (11))){
var inst_40019 = (state_40057[(7)]);
var inst_40038 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40019);
var state_40057__$1 = state_40057;
var statearr_40070_40095 = state_40057__$1;
(statearr_40070_40095[(2)] = inst_40038);

(statearr_40070_40095[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40058 === (9))){
var state_40057__$1 = state_40057;
var statearr_40071_40096 = state_40057__$1;
(statearr_40071_40096[(2)] = false);

(statearr_40071_40096[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40058 === (5))){
var inst_40019 = (state_40057[(7)]);
var inst_40026 = inst_40019.cljs$lang$protocol_mask$partition0$;
var inst_40027 = (inst_40026 & (64));
var inst_40028 = inst_40019.cljs$core$ISeq$;
var inst_40029 = (inst_40027) || (inst_40028);
var state_40057__$1 = state_40057;
if(cljs.core.truth_(inst_40029)){
var statearr_40072_40097 = state_40057__$1;
(statearr_40072_40097[(1)] = (8));

} else {
var statearr_40073_40098 = state_40057__$1;
(statearr_40073_40098[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40058 === (14))){
var inst_40050 = (state_40057[(2)]);
var state_40057__$1 = (function (){var statearr_40074 = state_40057;
(statearr_40074[(9)] = inst_40050);

return statearr_40074;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40057__$1,(15),queue);
} else {
if((state_val_40058 === (10))){
var inst_40033 = (state_40057[(2)]);
var state_40057__$1 = state_40057;
var statearr_40075_40099 = state_40057__$1;
(statearr_40075_40099[(2)] = inst_40033);

(statearr_40075_40099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40058 === (8))){
var state_40057__$1 = state_40057;
var statearr_40076_40100 = state_40057__$1;
(statearr_40076_40100[(2)] = true);

(statearr_40076_40100[(1)] = (10));


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
});})(c__34337__auto__,map__39967,map__39967__$1,networking,queue,response_channel))
;
return ((function (switch__34322__auto__,c__34337__auto__,map__39967,map__39967__$1,networking,queue,response_channel){
return (function() {
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__34323__auto__ = null;
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__34323__auto____0 = (function (){
var statearr_40080 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40080[(0)] = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__34323__auto__);

(statearr_40080[(1)] = (1));

return statearr_40080;
});
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__34323__auto____1 = (function (state_40057){
while(true){
var ret_value__34324__auto__ = (function (){try{while(true){
var result__34325__auto__ = switch__34322__auto__.call(null,state_40057);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34325__auto__;
}
break;
}
}catch (e40081){if((e40081 instanceof Object)){
var ex__34326__auto__ = e40081;
var statearr_40082_40101 = state_40057;
(statearr_40082_40101[(5)] = ex__34326__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40102 = state_40057;
state_40057 = G__40102;
continue;
} else {
return ret_value__34324__auto__;
}
break;
}
});
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__34323__auto__ = function(state_40057){
switch(arguments.length){
case 0:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__34323__auto____0.call(this);
case 1:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__34323__auto____1.call(this,state_40057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__34323__auto____0;
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__34323__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__34323__auto____1;
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__34323__auto__;
})()
;})(switch__34322__auto__,c__34337__auto__,map__39967,map__39967__$1,networking,queue,response_channel))
})();
var state__34339__auto__ = (function (){var statearr_40083 = f__34338__auto__.call(null);
(statearr_40083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34337__auto__);

return statearr_40083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34339__auto__);
});})(c__34337__auto__,map__39967,map__39967__$1,networking,queue,response_channel))
);

return c__34337__auto__;
});
/**
 * Configured Om to re-render when locale changes.
 */
untangled.client.impl.application.initialize_internationalization = (function untangled$client$impl$application$initialize_internationalization(reconciler){
cljs.core.remove_watch.call(null,untangled.i18n.core._STAR_current_locale_STAR_,new cljs.core.Keyword(null,"locale","locale",-2115712697));

return cljs.core.add_watch.call(null,untangled.i18n.core._STAR_current_locale_STAR_,new cljs.core.Keyword(null,"locale","locale",-2115712697),(function (k,r,o,n){
if(om.next.mounted_QMARK_.call(null,om.next.app_root.call(null,reconciler))){
return om.next.force_root_render_BANG_.call(null,reconciler);
} else {
return null;
}
}));
});
/**
 * Remove not-found keys from m (non-recursive)
 */
untangled.client.impl.application.sweep_one = (function untangled$client$impl$application$sweep_one(m){
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.reduce.call(null,(function (acc,p__40105){
var vec__40106 = p__40105;
var k = cljs.core.nth.call(null,vec__40106,(0),null);
var v = cljs.core.nth.call(null,vec__40106,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("untangled.client.impl.om-plumbing","not-found","untangled.client.impl.om-plumbing/not-found",-1009851494),v)){
return acc;
} else {
return cljs.core.assoc.call(null,acc,k,v);
}
}),cljs.core.with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.meta.call(null,m)),m);
} else {
if(cljs.core.vector_QMARK_.call(null,m)){
return cljs.core.with_meta.call(null,cljs.core.mapv.call(null,untangled$client$impl$application$sweep_one,m),cljs.core.meta.call(null,m));
} else {
return m;

}
}
});
/**
 * Remove all of the not-found keys (recursively) from v, stopping at marked leaves (if present)
 */
untangled.client.impl.application.sweep = (function untangled$client$impl$application$sweep(m){
if(cljs.core.truth_(untangled.client.impl.om_plumbing.leaf_QMARK_.call(null,m))){
return untangled.client.impl.application.sweep_one.call(null,m);
} else {
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.reduce.call(null,(function (acc,p__40109){
var vec__40110 = p__40109;
var k = cljs.core.nth.call(null,vec__40110,(0),null);
var v = cljs.core.nth.call(null,vec__40110,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("untangled.client.impl.om-plumbing","not-found","untangled.client.impl.om-plumbing/not-found",-1009851494),v)){
return acc;
} else {
return cljs.core.assoc.call(null,acc,k,untangled$client$impl$application$sweep.call(null,v));
}
}),cljs.core.with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.meta.call(null,m)),m);
} else {
if(cljs.core.vector_QMARK_.call(null,m)){
return cljs.core.with_meta.call(null,cljs.core.mapv.call(null,untangled$client$impl$application$sweep,m),cljs.core.meta.call(null,m));
} else {
return m;

}
}
}
});
untangled.client.impl.application.sweep_merge = (function untangled$client$impl$application$sweep_merge(target,source){
return cljs.core.reduce.call(null,(function (acc,p__40113){
var vec__40114 = p__40113;
var k = cljs.core.nth.call(null,vec__40114,(0),null);
var v = cljs.core.nth.call(null,vec__40114,(1),null);
if(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("untangled.client.impl.om-plumbing","not-found","untangled.client.impl.om-plumbing/not-found",-1009851494))){
return cljs.core.dissoc.call(null,acc,k);
} else {
if(cljs.core.truth_(untangled.client.impl.om_plumbing.leaf_QMARK_.call(null,v))){
return cljs.core.assoc.call(null,acc,k,untangled.client.impl.application.sweep_one.call(null,v));
} else {
if((cljs.core.map_QMARK_.call(null,cljs.core.get.call(null,acc,k))) && (cljs.core.map_QMARK_.call(null,v))){
return cljs.core.update.call(null,acc,k,untangled$client$impl$application$sweep_merge,v);
} else {
return cljs.core.assoc.call(null,acc,k,untangled.client.impl.application.sweep.call(null,v));

}
}
}
}),target,source);
});
/**
 * The reconciler's send method calls UntangledApplication/server-send, which itself requires a reconciler with a
 *   send method already defined. This creates a catch-22 / circular dependency on the reconciler and :send field within
 *   the reconciler.
 * 
 *   To resolve the issue, we def an atom pointing to the reconciler that the send method will deref each time it is
 *   called. This allows us to define the reconciler with a send method that, at the time of initialization, has an app
 *   that points to a nil reconciler. By the end of this function, the app's reconciler reference has been properly set.
 */
untangled.client.impl.application.generate_reconciler = (function untangled$client$impl$application$generate_reconciler(p__40115,initial_state,parser,p__40116){
var map__40121 = p__40115;
var map__40121__$1 = ((((!((map__40121 == null)))?((((map__40121.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40121.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40121):map__40121);
var app__$1 = map__40121__$1;
var queue = cljs.core.get.call(null,map__40121__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var map__40122 = p__40116;
var map__40122__$1 = ((((!((map__40122 == null)))?((((map__40122.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40122.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40122):map__40122);
var migrate = cljs.core.get.call(null,map__40122__$1,new cljs.core.Keyword(null,"migrate","migrate",-207110743),null);
var rec_atom = cljs.core.atom.call(null,null);
var state_migrate = (function (){var or__29679__auto__ = migrate;
if(cljs.core.truth_(or__29679__auto__)){
return or__29679__auto__;
} else {
return untangled.client.impl.om_plumbing.resolve_tempids;
}
})();
var tempid_migrate = ((function (rec_atom,state_migrate,map__40121,map__40121__$1,app__$1,queue,map__40122,map__40122__$1,migrate){
return (function (pure,_,tempids,___$1){
untangled.client.impl.om_plumbing.rewrite_tempids_in_request_queue.call(null,queue,tempids);

return state_migrate.call(null,pure,tempids);
});})(rec_atom,state_migrate,map__40121,map__40121__$1,app__$1,queue,map__40122,map__40122__$1,migrate))
;
var initial_state_with_locale = ((cljs.core._EQ_.call(null,cljs.core.Atom,cljs.core.type.call(null,initial_state)))?(function (){
cljs.core.swap_BANG_.call(null,initial_state,cljs.core.assoc,new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),"en-US");

return initial_state;
})()
:cljs.core.assoc.call(null,initial_state,new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),"en-US"));
var config = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"state","state",-1988618099),initial_state_with_locale,new cljs.core.Keyword(null,"send","send",-652151114),((function (rec_atom,state_migrate,tempid_migrate,initial_state_with_locale,map__40121,map__40121__$1,app__$1,queue,map__40122,map__40122__$1,migrate){
return (function (tx,cb){
return untangled.client.impl.application.server_send.call(null,cljs.core.assoc.call(null,app__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),cljs.core.deref.call(null,rec_atom)),tx,cb);
});})(rec_atom,state_migrate,tempid_migrate,initial_state_with_locale,map__40121,map__40121__$1,app__$1,queue,map__40122,map__40122__$1,migrate))
,new cljs.core.Keyword(null,"migrate","migrate",-207110743),(function (){var or__29679__auto__ = migrate;
if(cljs.core.truth_(or__29679__auto__)){
return or__29679__auto__;
} else {
return tempid_migrate;
}
})(),new cljs.core.Keyword(null,"normalize","normalize",-1904390051),true,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),true,new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),untangled.client.impl.application.sweep_merge,new cljs.core.Keyword(null,"parser","parser",-1543495310),parser], null);
var rec = om.next.reconciler.call(null,config);
cljs.core.reset_BANG_.call(null,rec_atom,rec);

return rec;
});
untangled.client.impl.application.initialize_global_error_callback = (function untangled$client$impl$application$initialize_global_error_callback(app__$1){
var cb_atom = cljs.core.get_in.call(null,app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"networking","networking",586110628),new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631)], null));
if(cljs.core._EQ_.call(null,cljs.core.Atom,cljs.core.type.call(null,cb_atom))){
return cljs.core.swap_BANG_.call(null,cb_atom,((function (cb_atom){
return (function (p1__40125_SHARP_){
if(cljs.core.fn_QMARK_.call(null,p1__40125_SHARP_)){
return cljs.core.partial.call(null,p1__40125_SHARP_,om.next.app_state.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app__$1)));
} else {
throw cljs.core.ex_info.call(null,"Networking error callback must be a function.",cljs.core.PersistentArrayMap.EMPTY);
}
});})(cb_atom))
);
} else {
return null;
}
});
/**
 * Initialize the untangled Application. Creates network queue, sets up i18n, creates reconciler, mounts it, and returns
 *   the initialized app
 */
untangled.client.impl.application.initialize = (function untangled$client$impl$application$initialize(p__40126,initial_state,root_component,dom_id_or_node,reconciler_options){
var map__40129 = p__40126;
var map__40129__$1 = ((((!((map__40129 == null)))?((((map__40129.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40129.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40129):map__40129);
var app__$1 = map__40129__$1;
var networking = cljs.core.get.call(null,map__40129__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var started_callback = cljs.core.get.call(null,map__40129__$1,new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951));
var queue = cljs.core.async.chan.call(null,(1024));
var rc = cljs.core.async.chan.call(null);
var parser = om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),untangled.client.impl.om_plumbing.read_local,new cljs.core.Keyword(null,"mutate","mutate",1422419038),untangled.client.impl.om_plumbing.write_entry_point], null));
var initial_app = cljs.core.assoc.call(null,app__$1,new cljs.core.Keyword(null,"queue","queue",1455835879),queue,new cljs.core.Keyword(null,"response-channel","response-channel",1395191493),rc,new cljs.core.Keyword(null,"parser","parser",-1543495310),parser,new cljs.core.Keyword(null,"mounted?","mounted?",712114760),true,new cljs.core.Keyword(null,"networking","networking",586110628),networking);
var rec = untangled.client.impl.application.generate_reconciler.call(null,initial_app,initial_state,parser,reconciler_options);
var completed_app = cljs.core.assoc.call(null,initial_app,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),rec);
var node = ((typeof dom_id_or_node === 'string')?goog.dom.getElement(dom_id_or_node):dom_id_or_node);
untangled.client.impl.network.start.call(null,networking,completed_app);

untangled.client.impl.application.initialize_internationalization.call(null,rec);

untangled.client.impl.application.initialize_global_error_callback.call(null,completed_app);

untangled.client.impl.application.start_network_sequential_processing.call(null,completed_app);

om.next.add_root_BANG_.call(null,rec,root_component,node);

if(cljs.core.truth_(started_callback)){
started_callback.call(null,completed_app);
} else {
}

return completed_app;
});

//# sourceMappingURL=application.js.map?rel=1466782846114