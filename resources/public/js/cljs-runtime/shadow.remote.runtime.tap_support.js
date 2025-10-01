goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__41339,p__41340){
var map__41342 = p__41339;
var map__41342__$1 = (((((!((map__41342 == null))))?(((((map__41342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41342):map__41342);
var svc = map__41342__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41342__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41342__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41342__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__41343 = p__41340;
var map__41343__$1 = (((((!((map__41343 == null))))?(((((map__41343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41343):map__41343);
var msg = map__41343__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41343__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41343__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41343__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41343__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__41374,p__41375){
var map__41376 = p__41374;
var map__41376__$1 = (((((!((map__41376 == null))))?(((((map__41376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41376):map__41376);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41376__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__41377 = p__41375;
var map__41377__$1 = (((((!((map__41377 == null))))?(((((map__41377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41377):map__41377);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41377__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__41395,p__41396){
var map__41400 = p__41395;
var map__41400__$1 = (((((!((map__41400 == null))))?(((((map__41400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41400):map__41400);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41400__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41400__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__41402 = p__41396;
var map__41402__$1 = (((((!((map__41402 == null))))?(((((map__41402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41402):map__41402);
var msg = map__41402__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41402__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__41453,tid){
var map__41454 = p__41453;
var map__41454__$1 = (((((!((map__41454 == null))))?(((((map__41454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41454):map__41454);
var svc = map__41454__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41454__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__41472 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__41473 = null;
var count__41474 = (0);
var i__41475 = (0);
while(true){
if((i__41475 < count__41474)){
var vec__41510 = chunk__41473.cljs$core$IIndexed$_nth$arity$2(null,i__41475);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41510,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41510,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__41632 = seq__41472;
var G__41633 = chunk__41473;
var G__41634 = count__41474;
var G__41635 = (i__41475 + (1));
seq__41472 = G__41632;
chunk__41473 = G__41633;
count__41474 = G__41634;
i__41475 = G__41635;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41472);
if(temp__5735__auto__){
var seq__41472__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41472__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__41472__$1);
var G__41640 = cljs.core.chunk_rest(seq__41472__$1);
var G__41641 = c__4556__auto__;
var G__41642 = cljs.core.count(c__4556__auto__);
var G__41643 = (0);
seq__41472 = G__41640;
chunk__41473 = G__41641;
count__41474 = G__41642;
i__41475 = G__41643;
continue;
} else {
var vec__41519 = cljs.core.first(seq__41472__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41519,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41519,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__41652 = cljs.core.next(seq__41472__$1);
var G__41653 = null;
var G__41654 = (0);
var G__41655 = (0);
seq__41472 = G__41652;
chunk__41473 = G__41653;
count__41474 = G__41654;
i__41475 = G__41655;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__41461_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__41461_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__41462_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__41462_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__41463_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__41463_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__41464_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__41464_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__41543){
var map__41544 = p__41543;
var map__41544__$1 = (((((!((map__41544 == null))))?(((((map__41544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41544):map__41544);
var svc = map__41544__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41544__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41544__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
