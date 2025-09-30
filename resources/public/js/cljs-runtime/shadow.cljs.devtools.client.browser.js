goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35565 = arguments.length;
var i__4737__auto___35566 = (0);
while(true){
if((i__4737__auto___35566 < len__4736__auto___35565)){
args__4742__auto__.push((arguments[i__4737__auto___35566]));

var G__35567 = (i__4737__auto___35566 + (1));
i__4737__auto___35566 = G__35567;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35423){
var G__35424 = cljs.core.first(seq35423);
var seq35423__$1 = cljs.core.next(seq35423);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35424,seq35423__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35425 = cljs.core.seq(sources);
var chunk__35426 = null;
var count__35427 = (0);
var i__35428 = (0);
while(true){
if((i__35428 < count__35427)){
var map__35439 = chunk__35426.cljs$core$IIndexed$_nth$arity$2(null,i__35428);
var map__35439__$1 = (((((!((map__35439 == null))))?(((((map__35439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35439):map__35439);
var src = map__35439__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35439__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35439__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35439__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35439__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35441){var e_35568 = e35441;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35568);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35568.message)].join('')));
}

var G__35569 = seq__35425;
var G__35570 = chunk__35426;
var G__35571 = count__35427;
var G__35572 = (i__35428 + (1));
seq__35425 = G__35569;
chunk__35426 = G__35570;
count__35427 = G__35571;
i__35428 = G__35572;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35425);
if(temp__5735__auto__){
var seq__35425__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35425__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35425__$1);
var G__35573 = cljs.core.chunk_rest(seq__35425__$1);
var G__35574 = c__4556__auto__;
var G__35575 = cljs.core.count(c__4556__auto__);
var G__35576 = (0);
seq__35425 = G__35573;
chunk__35426 = G__35574;
count__35427 = G__35575;
i__35428 = G__35576;
continue;
} else {
var map__35443 = cljs.core.first(seq__35425__$1);
var map__35443__$1 = (((((!((map__35443 == null))))?(((((map__35443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35443):map__35443);
var src = map__35443__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35443__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35443__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35443__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35443__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35445){var e_35577 = e35445;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35577);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35577.message)].join('')));
}

var G__35578 = cljs.core.next(seq__35425__$1);
var G__35579 = null;
var G__35580 = (0);
var G__35581 = (0);
seq__35425 = G__35578;
chunk__35426 = G__35579;
count__35427 = G__35580;
i__35428 = G__35581;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35446 = cljs.core.seq(js_requires);
var chunk__35447 = null;
var count__35448 = (0);
var i__35449 = (0);
while(true){
if((i__35449 < count__35448)){
var js_ns = chunk__35447.cljs$core$IIndexed$_nth$arity$2(null,i__35449);
var require_str_35582 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35582);


var G__35583 = seq__35446;
var G__35584 = chunk__35447;
var G__35585 = count__35448;
var G__35586 = (i__35449 + (1));
seq__35446 = G__35583;
chunk__35447 = G__35584;
count__35448 = G__35585;
i__35449 = G__35586;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35446);
if(temp__5735__auto__){
var seq__35446__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35446__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35446__$1);
var G__35587 = cljs.core.chunk_rest(seq__35446__$1);
var G__35588 = c__4556__auto__;
var G__35589 = cljs.core.count(c__4556__auto__);
var G__35590 = (0);
seq__35446 = G__35587;
chunk__35447 = G__35588;
count__35448 = G__35589;
i__35449 = G__35590;
continue;
} else {
var js_ns = cljs.core.first(seq__35446__$1);
var require_str_35591 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35591);


var G__35592 = cljs.core.next(seq__35446__$1);
var G__35593 = null;
var G__35594 = (0);
var G__35595 = (0);
seq__35446 = G__35592;
chunk__35447 = G__35593;
count__35448 = G__35594;
i__35449 = G__35595;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__35451){
var map__35452 = p__35451;
var map__35452__$1 = (((((!((map__35452 == null))))?(((((map__35452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35452):map__35452);
var msg = map__35452__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35452__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35452__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35454(s__35455){
return (new cljs.core.LazySeq(null,(function (){
var s__35455__$1 = s__35455;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35455__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__35460 = cljs.core.first(xs__6292__auto__);
var map__35460__$1 = (((((!((map__35460 == null))))?(((((map__35460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35460):map__35460);
var src = map__35460__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35460__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35460__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__35455__$1,map__35460,map__35460__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35452,map__35452__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35454_$_iter__35456(s__35457){
return (new cljs.core.LazySeq(null,((function (s__35455__$1,map__35460,map__35460__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35452,map__35452__$1,msg,info,reload_info){
return (function (){
var s__35457__$1 = s__35457;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35457__$1);
if(temp__5735__auto____$1){
var s__35457__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35457__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35457__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35459 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35458 = (0);
while(true){
if((i__35458 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__35458);
cljs.core.chunk_append(b__35459,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35596 = (i__35458 + (1));
i__35458 = G__35596;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35459),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35454_$_iter__35456(cljs.core.chunk_rest(s__35457__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35459),null);
}
} else {
var warning = cljs.core.first(s__35457__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35454_$_iter__35456(cljs.core.rest(s__35457__$2)));
}
} else {
return null;
}
break;
}
});})(s__35455__$1,map__35460,map__35460__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35452,map__35452__$1,msg,info,reload_info))
,null,null));
});})(s__35455__$1,map__35460,map__35460__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35452,map__35452__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35454(cljs.core.rest(s__35455__$1)));
} else {
var G__35597 = cljs.core.rest(s__35455__$1);
s__35455__$1 = G__35597;
continue;
}
} else {
var G__35598 = cljs.core.rest(s__35455__$1);
s__35455__$1 = G__35598;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__35464_35599 = cljs.core.seq(warnings);
var chunk__35465_35600 = null;
var count__35466_35601 = (0);
var i__35467_35602 = (0);
while(true){
if((i__35467_35602 < count__35466_35601)){
var map__35472_35603 = chunk__35465_35600.cljs$core$IIndexed$_nth$arity$2(null,i__35467_35602);
var map__35472_35604__$1 = (((((!((map__35472_35603 == null))))?(((((map__35472_35603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35472_35603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35472_35603):map__35472_35603);
var w_35605 = map__35472_35604__$1;
var msg_35606__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35472_35604__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35472_35604__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35608 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35472_35604__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35609 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35472_35604__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35609)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35607),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35608),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35606__$1)].join(''));


var G__35610 = seq__35464_35599;
var G__35611 = chunk__35465_35600;
var G__35612 = count__35466_35601;
var G__35613 = (i__35467_35602 + (1));
seq__35464_35599 = G__35610;
chunk__35465_35600 = G__35611;
count__35466_35601 = G__35612;
i__35467_35602 = G__35613;
continue;
} else {
var temp__5735__auto___35614 = cljs.core.seq(seq__35464_35599);
if(temp__5735__auto___35614){
var seq__35464_35615__$1 = temp__5735__auto___35614;
if(cljs.core.chunked_seq_QMARK_(seq__35464_35615__$1)){
var c__4556__auto___35616 = cljs.core.chunk_first(seq__35464_35615__$1);
var G__35617 = cljs.core.chunk_rest(seq__35464_35615__$1);
var G__35618 = c__4556__auto___35616;
var G__35619 = cljs.core.count(c__4556__auto___35616);
var G__35620 = (0);
seq__35464_35599 = G__35617;
chunk__35465_35600 = G__35618;
count__35466_35601 = G__35619;
i__35467_35602 = G__35620;
continue;
} else {
var map__35474_35621 = cljs.core.first(seq__35464_35615__$1);
var map__35474_35622__$1 = (((((!((map__35474_35621 == null))))?(((((map__35474_35621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35474_35621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35474_35621):map__35474_35621);
var w_35623 = map__35474_35622__$1;
var msg_35624__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35474_35622__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35625 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35474_35622__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35626 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35474_35622__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35474_35622__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35627)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35625),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35626),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35624__$1)].join(''));


var G__35628 = cljs.core.next(seq__35464_35615__$1);
var G__35629 = null;
var G__35630 = (0);
var G__35631 = (0);
seq__35464_35599 = G__35628;
chunk__35465_35600 = G__35629;
count__35466_35601 = G__35630;
i__35467_35602 = G__35631;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__35450_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35450_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__35476){
var map__35477 = p__35476;
var map__35477__$1 = (((((!((map__35477 == null))))?(((((map__35477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35477):map__35477);
var msg = map__35477__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35477__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35479 = cljs.core.seq(updates);
var chunk__35481 = null;
var count__35482 = (0);
var i__35483 = (0);
while(true){
if((i__35483 < count__35482)){
var path = chunk__35481.cljs$core$IIndexed$_nth$arity$2(null,i__35483);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35509_35632 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35512_35633 = null;
var count__35513_35634 = (0);
var i__35514_35635 = (0);
while(true){
if((i__35514_35635 < count__35513_35634)){
var node_35636 = chunk__35512_35633.cljs$core$IIndexed$_nth$arity$2(null,i__35514_35635);
var path_match_35637 = shadow.cljs.devtools.client.browser.match_paths(node_35636.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35637)){
var new_link_35638 = (function (){var G__35519 = node_35636.cloneNode(true);
G__35519.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35637),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35519;
})();
(new_link_35638.onload = ((function (seq__35509_35632,chunk__35512_35633,count__35513_35634,i__35514_35635,seq__35479,chunk__35481,count__35482,i__35483,new_link_35638,path_match_35637,node_35636,path,map__35477,map__35477__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_35636);
});})(seq__35509_35632,chunk__35512_35633,count__35513_35634,i__35514_35635,seq__35479,chunk__35481,count__35482,i__35483,new_link_35638,path_match_35637,node_35636,path,map__35477,map__35477__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35637], 0));

goog.dom.insertSiblingAfter(new_link_35638,node_35636);


var G__35639 = seq__35509_35632;
var G__35640 = chunk__35512_35633;
var G__35641 = count__35513_35634;
var G__35642 = (i__35514_35635 + (1));
seq__35509_35632 = G__35639;
chunk__35512_35633 = G__35640;
count__35513_35634 = G__35641;
i__35514_35635 = G__35642;
continue;
} else {
var G__35643 = seq__35509_35632;
var G__35644 = chunk__35512_35633;
var G__35645 = count__35513_35634;
var G__35646 = (i__35514_35635 + (1));
seq__35509_35632 = G__35643;
chunk__35512_35633 = G__35644;
count__35513_35634 = G__35645;
i__35514_35635 = G__35646;
continue;
}
} else {
var temp__5735__auto___35647 = cljs.core.seq(seq__35509_35632);
if(temp__5735__auto___35647){
var seq__35509_35648__$1 = temp__5735__auto___35647;
if(cljs.core.chunked_seq_QMARK_(seq__35509_35648__$1)){
var c__4556__auto___35649 = cljs.core.chunk_first(seq__35509_35648__$1);
var G__35650 = cljs.core.chunk_rest(seq__35509_35648__$1);
var G__35651 = c__4556__auto___35649;
var G__35652 = cljs.core.count(c__4556__auto___35649);
var G__35653 = (0);
seq__35509_35632 = G__35650;
chunk__35512_35633 = G__35651;
count__35513_35634 = G__35652;
i__35514_35635 = G__35653;
continue;
} else {
var node_35654 = cljs.core.first(seq__35509_35648__$1);
var path_match_35655 = shadow.cljs.devtools.client.browser.match_paths(node_35654.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35655)){
var new_link_35656 = (function (){var G__35520 = node_35654.cloneNode(true);
G__35520.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35655),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35520;
})();
(new_link_35656.onload = ((function (seq__35509_35632,chunk__35512_35633,count__35513_35634,i__35514_35635,seq__35479,chunk__35481,count__35482,i__35483,new_link_35656,path_match_35655,node_35654,seq__35509_35648__$1,temp__5735__auto___35647,path,map__35477,map__35477__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_35654);
});})(seq__35509_35632,chunk__35512_35633,count__35513_35634,i__35514_35635,seq__35479,chunk__35481,count__35482,i__35483,new_link_35656,path_match_35655,node_35654,seq__35509_35648__$1,temp__5735__auto___35647,path,map__35477,map__35477__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35655], 0));

goog.dom.insertSiblingAfter(new_link_35656,node_35654);


var G__35657 = cljs.core.next(seq__35509_35648__$1);
var G__35658 = null;
var G__35659 = (0);
var G__35660 = (0);
seq__35509_35632 = G__35657;
chunk__35512_35633 = G__35658;
count__35513_35634 = G__35659;
i__35514_35635 = G__35660;
continue;
} else {
var G__35661 = cljs.core.next(seq__35509_35648__$1);
var G__35662 = null;
var G__35663 = (0);
var G__35664 = (0);
seq__35509_35632 = G__35661;
chunk__35512_35633 = G__35662;
count__35513_35634 = G__35663;
i__35514_35635 = G__35664;
continue;
}
}
} else {
}
}
break;
}


var G__35665 = seq__35479;
var G__35666 = chunk__35481;
var G__35667 = count__35482;
var G__35668 = (i__35483 + (1));
seq__35479 = G__35665;
chunk__35481 = G__35666;
count__35482 = G__35667;
i__35483 = G__35668;
continue;
} else {
var G__35669 = seq__35479;
var G__35670 = chunk__35481;
var G__35671 = count__35482;
var G__35672 = (i__35483 + (1));
seq__35479 = G__35669;
chunk__35481 = G__35670;
count__35482 = G__35671;
i__35483 = G__35672;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35479);
if(temp__5735__auto__){
var seq__35479__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35479__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35479__$1);
var G__35673 = cljs.core.chunk_rest(seq__35479__$1);
var G__35674 = c__4556__auto__;
var G__35675 = cljs.core.count(c__4556__auto__);
var G__35676 = (0);
seq__35479 = G__35673;
chunk__35481 = G__35674;
count__35482 = G__35675;
i__35483 = G__35676;
continue;
} else {
var path = cljs.core.first(seq__35479__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35521_35677 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35524_35678 = null;
var count__35525_35679 = (0);
var i__35526_35680 = (0);
while(true){
if((i__35526_35680 < count__35525_35679)){
var node_35681 = chunk__35524_35678.cljs$core$IIndexed$_nth$arity$2(null,i__35526_35680);
var path_match_35682 = shadow.cljs.devtools.client.browser.match_paths(node_35681.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35682)){
var new_link_35683 = (function (){var G__35531 = node_35681.cloneNode(true);
G__35531.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35682),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35531;
})();
(new_link_35683.onload = ((function (seq__35521_35677,chunk__35524_35678,count__35525_35679,i__35526_35680,seq__35479,chunk__35481,count__35482,i__35483,new_link_35683,path_match_35682,node_35681,path,seq__35479__$1,temp__5735__auto__,map__35477,map__35477__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_35681);
});})(seq__35521_35677,chunk__35524_35678,count__35525_35679,i__35526_35680,seq__35479,chunk__35481,count__35482,i__35483,new_link_35683,path_match_35682,node_35681,path,seq__35479__$1,temp__5735__auto__,map__35477,map__35477__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35682], 0));

goog.dom.insertSiblingAfter(new_link_35683,node_35681);


var G__35684 = seq__35521_35677;
var G__35685 = chunk__35524_35678;
var G__35686 = count__35525_35679;
var G__35687 = (i__35526_35680 + (1));
seq__35521_35677 = G__35684;
chunk__35524_35678 = G__35685;
count__35525_35679 = G__35686;
i__35526_35680 = G__35687;
continue;
} else {
var G__35688 = seq__35521_35677;
var G__35689 = chunk__35524_35678;
var G__35690 = count__35525_35679;
var G__35691 = (i__35526_35680 + (1));
seq__35521_35677 = G__35688;
chunk__35524_35678 = G__35689;
count__35525_35679 = G__35690;
i__35526_35680 = G__35691;
continue;
}
} else {
var temp__5735__auto___35692__$1 = cljs.core.seq(seq__35521_35677);
if(temp__5735__auto___35692__$1){
var seq__35521_35693__$1 = temp__5735__auto___35692__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35521_35693__$1)){
var c__4556__auto___35694 = cljs.core.chunk_first(seq__35521_35693__$1);
var G__35695 = cljs.core.chunk_rest(seq__35521_35693__$1);
var G__35696 = c__4556__auto___35694;
var G__35697 = cljs.core.count(c__4556__auto___35694);
var G__35698 = (0);
seq__35521_35677 = G__35695;
chunk__35524_35678 = G__35696;
count__35525_35679 = G__35697;
i__35526_35680 = G__35698;
continue;
} else {
var node_35699 = cljs.core.first(seq__35521_35693__$1);
var path_match_35700 = shadow.cljs.devtools.client.browser.match_paths(node_35699.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35700)){
var new_link_35701 = (function (){var G__35532 = node_35699.cloneNode(true);
G__35532.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35700),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35532;
})();
(new_link_35701.onload = ((function (seq__35521_35677,chunk__35524_35678,count__35525_35679,i__35526_35680,seq__35479,chunk__35481,count__35482,i__35483,new_link_35701,path_match_35700,node_35699,seq__35521_35693__$1,temp__5735__auto___35692__$1,path,seq__35479__$1,temp__5735__auto__,map__35477,map__35477__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_35699);
});})(seq__35521_35677,chunk__35524_35678,count__35525_35679,i__35526_35680,seq__35479,chunk__35481,count__35482,i__35483,new_link_35701,path_match_35700,node_35699,seq__35521_35693__$1,temp__5735__auto___35692__$1,path,seq__35479__$1,temp__5735__auto__,map__35477,map__35477__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35700], 0));

goog.dom.insertSiblingAfter(new_link_35701,node_35699);


var G__35702 = cljs.core.next(seq__35521_35693__$1);
var G__35703 = null;
var G__35704 = (0);
var G__35705 = (0);
seq__35521_35677 = G__35702;
chunk__35524_35678 = G__35703;
count__35525_35679 = G__35704;
i__35526_35680 = G__35705;
continue;
} else {
var G__35706 = cljs.core.next(seq__35521_35693__$1);
var G__35707 = null;
var G__35708 = (0);
var G__35709 = (0);
seq__35521_35677 = G__35706;
chunk__35524_35678 = G__35707;
count__35525_35679 = G__35708;
i__35526_35680 = G__35709;
continue;
}
}
} else {
}
}
break;
}


var G__35710 = cljs.core.next(seq__35479__$1);
var G__35711 = null;
var G__35712 = (0);
var G__35713 = (0);
seq__35479 = G__35710;
chunk__35481 = G__35711;
count__35482 = G__35712;
i__35483 = G__35713;
continue;
} else {
var G__35714 = cljs.core.next(seq__35479__$1);
var G__35715 = null;
var G__35716 = (0);
var G__35717 = (0);
seq__35479 = G__35714;
chunk__35481 = G__35715;
count__35482 = G__35716;
i__35483 = G__35717;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__35533){
var map__35534 = p__35533;
var map__35534__$1 = (((((!((map__35534 == null))))?(((((map__35534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35534):map__35534);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35534__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__35536){
var map__35537 = p__35536;
var map__35537__$1 = (((((!((map__35537 == null))))?(((((map__35537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35537):map__35537);
var _ = map__35537__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35537__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__35539,done,error){
var map__35540 = p__35539;
var map__35540__$1 = (((((!((map__35540 == null))))?(((((map__35540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35540):map__35540);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35540__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__35542,done,error){
var map__35543 = p__35542;
var map__35543__$1 = (((((!((map__35543 == null))))?(((((map__35543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35543):map__35543);
var msg = map__35543__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35543__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35543__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35543__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__35545){
var map__35546 = p__35545;
var map__35546__$1 = (((((!((map__35546 == null))))?(((((map__35546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35546):map__35546);
var src = map__35546__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35546__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__35548 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__35548) : done.call(null,G__35548));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__35549){
var map__35550 = p__35549;
var map__35550__$1 = (((((!((map__35550 == null))))?(((((map__35550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35550):map__35550);
var msg__$1 = map__35550__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35550__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e35552){var ex = e35552;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__35553){
var map__35554 = p__35553;
var map__35554__$1 = (((((!((map__35554 == null))))?(((((map__35554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35554):map__35554);
var env = map__35554__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35554__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__35556){
var map__35557 = p__35556;
var map__35557__$1 = (((((!((map__35557 == null))))?(((((map__35557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35557):map__35557);
var msg = map__35557__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35557__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__35559){
var map__35560 = p__35559;
var map__35560__$1 = (((((!((map__35560 == null))))?(((((map__35560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35560):map__35560);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35560__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35560__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__35562){
var map__35563 = p__35562;
var map__35563__$1 = (((((!((map__35563 == null))))?(((((map__35563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35563):map__35563);
var svc = map__35563__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35563__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
