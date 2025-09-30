goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__40250,p__40251){
var map__40270 = p__40250;
var map__40270__$1 = (((((!((map__40270 == null))))?(((((map__40270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40270):map__40270);
var svc = map__40270__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40270__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40270__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40270__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__40272 = p__40251;
var map__40272__$1 = (((((!((map__40272 == null))))?(((((map__40272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40272):map__40272);
var msg = map__40272__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40272__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40272__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40272__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40272__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__40291,p__40292){
var map__40298 = p__40291;
var map__40298__$1 = (((((!((map__40298 == null))))?(((((map__40298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40298):map__40298);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40298__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__40299 = p__40292;
var map__40299__$1 = (((((!((map__40299 == null))))?(((((map__40299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40299):map__40299);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40299__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__40339,p__40340){
var map__40341 = p__40339;
var map__40341__$1 = (((((!((map__40341 == null))))?(((((map__40341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40341):map__40341);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40341__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40341__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__40342 = p__40340;
var map__40342__$1 = (((((!((map__40342 == null))))?(((((map__40342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40342):map__40342);
var msg = map__40342__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40342__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__40345,tid){
var map__40346 = p__40345;
var map__40346__$1 = (((((!((map__40346 == null))))?(((((map__40346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40346):map__40346);
var svc = map__40346__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40346__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__40356 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__40357 = null;
var count__40358 = (0);
var i__40359 = (0);
while(true){
if((i__40359 < count__40358)){
var vec__40371 = chunk__40357.cljs$core$IIndexed$_nth$arity$2(null,i__40359);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40371,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40371,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__40462 = seq__40356;
var G__40463 = chunk__40357;
var G__40464 = count__40358;
var G__40465 = (i__40359 + (1));
seq__40356 = G__40462;
chunk__40357 = G__40463;
count__40358 = G__40464;
i__40359 = G__40465;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40356);
if(temp__5735__auto__){
var seq__40356__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40356__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40356__$1);
var G__40467 = cljs.core.chunk_rest(seq__40356__$1);
var G__40468 = c__4556__auto__;
var G__40469 = cljs.core.count(c__4556__auto__);
var G__40470 = (0);
seq__40356 = G__40467;
chunk__40357 = G__40468;
count__40358 = G__40469;
i__40359 = G__40470;
continue;
} else {
var vec__40374 = cljs.core.first(seq__40356__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40374,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40374,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__40488 = cljs.core.next(seq__40356__$1);
var G__40489 = null;
var G__40490 = (0);
var G__40491 = (0);
seq__40356 = G__40488;
chunk__40357 = G__40489;
count__40358 = G__40490;
i__40359 = G__40491;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__40350_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__40350_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__40351_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__40351_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__40352_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__40352_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__40353_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__40353_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__40384){
var map__40385 = p__40384;
var map__40385__$1 = (((((!((map__40385 == null))))?(((((map__40385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40385):map__40385);
var svc = map__40385__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40385__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40385__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
