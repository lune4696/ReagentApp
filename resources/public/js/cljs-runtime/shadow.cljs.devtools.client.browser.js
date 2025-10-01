goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44348 = arguments.length;
var i__4737__auto___44349 = (0);
while(true){
if((i__4737__auto___44349 < len__4736__auto___44348)){
args__4742__auto__.push((arguments[i__4737__auto___44349]));

var G__44350 = (i__4737__auto___44349 + (1));
i__4737__auto___44349 = G__44350;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq44083){
var G__44084 = cljs.core.first(seq44083);
var seq44083__$1 = cljs.core.next(seq44083);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44084,seq44083__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__44093 = cljs.core.seq(sources);
var chunk__44094 = null;
var count__44095 = (0);
var i__44096 = (0);
while(true){
if((i__44096 < count__44095)){
var map__44118 = chunk__44094.cljs$core$IIndexed$_nth$arity$2(null,i__44096);
var map__44118__$1 = (((((!((map__44118 == null))))?(((((map__44118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44118):map__44118);
var src = map__44118__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44118__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44118__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44118__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44118__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e44123){var e_44354 = e44123;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_44354);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_44354.message)].join('')));
}

var G__44355 = seq__44093;
var G__44356 = chunk__44094;
var G__44357 = count__44095;
var G__44358 = (i__44096 + (1));
seq__44093 = G__44355;
chunk__44094 = G__44356;
count__44095 = G__44357;
i__44096 = G__44358;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44093);
if(temp__5735__auto__){
var seq__44093__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44093__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44093__$1);
var G__44359 = cljs.core.chunk_rest(seq__44093__$1);
var G__44360 = c__4556__auto__;
var G__44361 = cljs.core.count(c__4556__auto__);
var G__44362 = (0);
seq__44093 = G__44359;
chunk__44094 = G__44360;
count__44095 = G__44361;
i__44096 = G__44362;
continue;
} else {
var map__44129 = cljs.core.first(seq__44093__$1);
var map__44129__$1 = (((((!((map__44129 == null))))?(((((map__44129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44129):map__44129);
var src = map__44129__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44129__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44129__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44129__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44129__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e44135){var e_44363 = e44135;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_44363);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_44363.message)].join('')));
}

var G__44364 = cljs.core.next(seq__44093__$1);
var G__44365 = null;
var G__44366 = (0);
var G__44367 = (0);
seq__44093 = G__44364;
chunk__44094 = G__44365;
count__44095 = G__44366;
i__44096 = G__44367;
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
var seq__44152 = cljs.core.seq(js_requires);
var chunk__44153 = null;
var count__44154 = (0);
var i__44155 = (0);
while(true){
if((i__44155 < count__44154)){
var js_ns = chunk__44153.cljs$core$IIndexed$_nth$arity$2(null,i__44155);
var require_str_44372 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_44372);


var G__44373 = seq__44152;
var G__44374 = chunk__44153;
var G__44375 = count__44154;
var G__44376 = (i__44155 + (1));
seq__44152 = G__44373;
chunk__44153 = G__44374;
count__44154 = G__44375;
i__44155 = G__44376;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44152);
if(temp__5735__auto__){
var seq__44152__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44152__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44152__$1);
var G__44377 = cljs.core.chunk_rest(seq__44152__$1);
var G__44378 = c__4556__auto__;
var G__44379 = cljs.core.count(c__4556__auto__);
var G__44380 = (0);
seq__44152 = G__44377;
chunk__44153 = G__44378;
count__44154 = G__44379;
i__44155 = G__44380;
continue;
} else {
var js_ns = cljs.core.first(seq__44152__$1);
var require_str_44381 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_44381);


var G__44383 = cljs.core.next(seq__44152__$1);
var G__44384 = null;
var G__44385 = (0);
var G__44386 = (0);
seq__44152 = G__44383;
chunk__44153 = G__44384;
count__44154 = G__44385;
i__44155 = G__44386;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__44158){
var map__44159 = p__44158;
var map__44159__$1 = (((((!((map__44159 == null))))?(((((map__44159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44159):map__44159);
var msg = map__44159__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44159__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44159__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44162(s__44163){
return (new cljs.core.LazySeq(null,(function (){
var s__44163__$1 = s__44163;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__44163__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__44168 = cljs.core.first(xs__6292__auto__);
var map__44168__$1 = (((((!((map__44168 == null))))?(((((map__44168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44168):map__44168);
var src = map__44168__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44168__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44168__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__44163__$1,map__44168,map__44168__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__44159,map__44159__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44162_$_iter__44164(s__44165){
return (new cljs.core.LazySeq(null,((function (s__44163__$1,map__44168,map__44168__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__44159,map__44159__$1,msg,info,reload_info){
return (function (){
var s__44165__$1 = s__44165;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__44165__$1);
if(temp__5735__auto____$1){
var s__44165__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__44165__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__44165__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__44167 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__44166 = (0);
while(true){
if((i__44166 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__44166);
cljs.core.chunk_append(b__44167,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__44388 = (i__44166 + (1));
i__44166 = G__44388;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44167),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44162_$_iter__44164(cljs.core.chunk_rest(s__44165__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44167),null);
}
} else {
var warning = cljs.core.first(s__44165__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44162_$_iter__44164(cljs.core.rest(s__44165__$2)));
}
} else {
return null;
}
break;
}
});})(s__44163__$1,map__44168,map__44168__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__44159,map__44159__$1,msg,info,reload_info))
,null,null));
});})(s__44163__$1,map__44168,map__44168__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__44159,map__44159__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44162(cljs.core.rest(s__44163__$1)));
} else {
var G__44389 = cljs.core.rest(s__44163__$1);
s__44163__$1 = G__44389;
continue;
}
} else {
var G__44390 = cljs.core.rest(s__44163__$1);
s__44163__$1 = G__44390;
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
var seq__44197_44391 = cljs.core.seq(warnings);
var chunk__44198_44392 = null;
var count__44199_44393 = (0);
var i__44200_44394 = (0);
while(true){
if((i__44200_44394 < count__44199_44393)){
var map__44212_44395 = chunk__44198_44392.cljs$core$IIndexed$_nth$arity$2(null,i__44200_44394);
var map__44212_44396__$1 = (((((!((map__44212_44395 == null))))?(((((map__44212_44395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44212_44395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44212_44395):map__44212_44395);
var w_44397 = map__44212_44396__$1;
var msg_44398__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44212_44396__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_44399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44212_44396__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_44400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44212_44396__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_44401 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44212_44396__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_44401)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_44399),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_44400),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_44398__$1)].join(''));


var G__44404 = seq__44197_44391;
var G__44405 = chunk__44198_44392;
var G__44406 = count__44199_44393;
var G__44407 = (i__44200_44394 + (1));
seq__44197_44391 = G__44404;
chunk__44198_44392 = G__44405;
count__44199_44393 = G__44406;
i__44200_44394 = G__44407;
continue;
} else {
var temp__5735__auto___44408 = cljs.core.seq(seq__44197_44391);
if(temp__5735__auto___44408){
var seq__44197_44409__$1 = temp__5735__auto___44408;
if(cljs.core.chunked_seq_QMARK_(seq__44197_44409__$1)){
var c__4556__auto___44410 = cljs.core.chunk_first(seq__44197_44409__$1);
var G__44411 = cljs.core.chunk_rest(seq__44197_44409__$1);
var G__44412 = c__4556__auto___44410;
var G__44413 = cljs.core.count(c__4556__auto___44410);
var G__44414 = (0);
seq__44197_44391 = G__44411;
chunk__44198_44392 = G__44412;
count__44199_44393 = G__44413;
i__44200_44394 = G__44414;
continue;
} else {
var map__44216_44415 = cljs.core.first(seq__44197_44409__$1);
var map__44216_44416__$1 = (((((!((map__44216_44415 == null))))?(((((map__44216_44415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44216_44415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44216_44415):map__44216_44415);
var w_44417 = map__44216_44416__$1;
var msg_44418__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44216_44416__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_44419 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44216_44416__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_44420 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44216_44416__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_44421 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44216_44416__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_44421)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_44419),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_44420),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_44418__$1)].join(''));


var G__44422 = cljs.core.next(seq__44197_44409__$1);
var G__44423 = null;
var G__44424 = (0);
var G__44425 = (0);
seq__44197_44391 = G__44422;
chunk__44198_44392 = G__44423;
count__44199_44393 = G__44424;
i__44200_44394 = G__44425;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__44157_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__44157_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__44229){
var map__44230 = p__44229;
var map__44230__$1 = (((((!((map__44230 == null))))?(((((map__44230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44230):map__44230);
var msg = map__44230__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44230__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__44232 = cljs.core.seq(updates);
var chunk__44234 = null;
var count__44235 = (0);
var i__44236 = (0);
while(true){
if((i__44236 < count__44235)){
var path = chunk__44234.cljs$core$IIndexed$_nth$arity$2(null,i__44236);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__44272_44427 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__44275_44428 = null;
var count__44276_44429 = (0);
var i__44277_44430 = (0);
while(true){
if((i__44277_44430 < count__44276_44429)){
var node_44431 = chunk__44275_44428.cljs$core$IIndexed$_nth$arity$2(null,i__44277_44430);
var path_match_44432 = shadow.cljs.devtools.client.browser.match_paths(node_44431.getAttribute("href"),path);
if(cljs.core.truth_(path_match_44432)){
var new_link_44433 = (function (){var G__44282 = node_44431.cloneNode(true);
G__44282.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_44432),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__44282;
})();
(new_link_44433.onload = ((function (seq__44272_44427,chunk__44275_44428,count__44276_44429,i__44277_44430,seq__44232,chunk__44234,count__44235,i__44236,new_link_44433,path_match_44432,node_44431,path,map__44230,map__44230__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_44431);
});})(seq__44272_44427,chunk__44275_44428,count__44276_44429,i__44277_44430,seq__44232,chunk__44234,count__44235,i__44236,new_link_44433,path_match_44432,node_44431,path,map__44230,map__44230__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_44432], 0));

goog.dom.insertSiblingAfter(new_link_44433,node_44431);


var G__44434 = seq__44272_44427;
var G__44435 = chunk__44275_44428;
var G__44436 = count__44276_44429;
var G__44437 = (i__44277_44430 + (1));
seq__44272_44427 = G__44434;
chunk__44275_44428 = G__44435;
count__44276_44429 = G__44436;
i__44277_44430 = G__44437;
continue;
} else {
var G__44438 = seq__44272_44427;
var G__44439 = chunk__44275_44428;
var G__44440 = count__44276_44429;
var G__44441 = (i__44277_44430 + (1));
seq__44272_44427 = G__44438;
chunk__44275_44428 = G__44439;
count__44276_44429 = G__44440;
i__44277_44430 = G__44441;
continue;
}
} else {
var temp__5735__auto___44442 = cljs.core.seq(seq__44272_44427);
if(temp__5735__auto___44442){
var seq__44272_44443__$1 = temp__5735__auto___44442;
if(cljs.core.chunked_seq_QMARK_(seq__44272_44443__$1)){
var c__4556__auto___44444 = cljs.core.chunk_first(seq__44272_44443__$1);
var G__44445 = cljs.core.chunk_rest(seq__44272_44443__$1);
var G__44446 = c__4556__auto___44444;
var G__44447 = cljs.core.count(c__4556__auto___44444);
var G__44448 = (0);
seq__44272_44427 = G__44445;
chunk__44275_44428 = G__44446;
count__44276_44429 = G__44447;
i__44277_44430 = G__44448;
continue;
} else {
var node_44449 = cljs.core.first(seq__44272_44443__$1);
var path_match_44450 = shadow.cljs.devtools.client.browser.match_paths(node_44449.getAttribute("href"),path);
if(cljs.core.truth_(path_match_44450)){
var new_link_44451 = (function (){var G__44283 = node_44449.cloneNode(true);
G__44283.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_44450),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__44283;
})();
(new_link_44451.onload = ((function (seq__44272_44427,chunk__44275_44428,count__44276_44429,i__44277_44430,seq__44232,chunk__44234,count__44235,i__44236,new_link_44451,path_match_44450,node_44449,seq__44272_44443__$1,temp__5735__auto___44442,path,map__44230,map__44230__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_44449);
});})(seq__44272_44427,chunk__44275_44428,count__44276_44429,i__44277_44430,seq__44232,chunk__44234,count__44235,i__44236,new_link_44451,path_match_44450,node_44449,seq__44272_44443__$1,temp__5735__auto___44442,path,map__44230,map__44230__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_44450], 0));

goog.dom.insertSiblingAfter(new_link_44451,node_44449);


var G__44452 = cljs.core.next(seq__44272_44443__$1);
var G__44453 = null;
var G__44454 = (0);
var G__44455 = (0);
seq__44272_44427 = G__44452;
chunk__44275_44428 = G__44453;
count__44276_44429 = G__44454;
i__44277_44430 = G__44455;
continue;
} else {
var G__44456 = cljs.core.next(seq__44272_44443__$1);
var G__44457 = null;
var G__44458 = (0);
var G__44459 = (0);
seq__44272_44427 = G__44456;
chunk__44275_44428 = G__44457;
count__44276_44429 = G__44458;
i__44277_44430 = G__44459;
continue;
}
}
} else {
}
}
break;
}


var G__44460 = seq__44232;
var G__44461 = chunk__44234;
var G__44462 = count__44235;
var G__44463 = (i__44236 + (1));
seq__44232 = G__44460;
chunk__44234 = G__44461;
count__44235 = G__44462;
i__44236 = G__44463;
continue;
} else {
var G__44464 = seq__44232;
var G__44465 = chunk__44234;
var G__44466 = count__44235;
var G__44467 = (i__44236 + (1));
seq__44232 = G__44464;
chunk__44234 = G__44465;
count__44235 = G__44466;
i__44236 = G__44467;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44232);
if(temp__5735__auto__){
var seq__44232__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44232__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44232__$1);
var G__44469 = cljs.core.chunk_rest(seq__44232__$1);
var G__44470 = c__4556__auto__;
var G__44471 = cljs.core.count(c__4556__auto__);
var G__44472 = (0);
seq__44232 = G__44469;
chunk__44234 = G__44470;
count__44235 = G__44471;
i__44236 = G__44472;
continue;
} else {
var path = cljs.core.first(seq__44232__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__44284_44474 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__44287_44475 = null;
var count__44288_44476 = (0);
var i__44289_44477 = (0);
while(true){
if((i__44289_44477 < count__44288_44476)){
var node_44479 = chunk__44287_44475.cljs$core$IIndexed$_nth$arity$2(null,i__44289_44477);
var path_match_44480 = shadow.cljs.devtools.client.browser.match_paths(node_44479.getAttribute("href"),path);
if(cljs.core.truth_(path_match_44480)){
var new_link_44482 = (function (){var G__44296 = node_44479.cloneNode(true);
G__44296.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_44480),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__44296;
})();
(new_link_44482.onload = ((function (seq__44284_44474,chunk__44287_44475,count__44288_44476,i__44289_44477,seq__44232,chunk__44234,count__44235,i__44236,new_link_44482,path_match_44480,node_44479,path,seq__44232__$1,temp__5735__auto__,map__44230,map__44230__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_44479);
});})(seq__44284_44474,chunk__44287_44475,count__44288_44476,i__44289_44477,seq__44232,chunk__44234,count__44235,i__44236,new_link_44482,path_match_44480,node_44479,path,seq__44232__$1,temp__5735__auto__,map__44230,map__44230__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_44480], 0));

goog.dom.insertSiblingAfter(new_link_44482,node_44479);


var G__44483 = seq__44284_44474;
var G__44484 = chunk__44287_44475;
var G__44485 = count__44288_44476;
var G__44486 = (i__44289_44477 + (1));
seq__44284_44474 = G__44483;
chunk__44287_44475 = G__44484;
count__44288_44476 = G__44485;
i__44289_44477 = G__44486;
continue;
} else {
var G__44487 = seq__44284_44474;
var G__44488 = chunk__44287_44475;
var G__44489 = count__44288_44476;
var G__44490 = (i__44289_44477 + (1));
seq__44284_44474 = G__44487;
chunk__44287_44475 = G__44488;
count__44288_44476 = G__44489;
i__44289_44477 = G__44490;
continue;
}
} else {
var temp__5735__auto___44491__$1 = cljs.core.seq(seq__44284_44474);
if(temp__5735__auto___44491__$1){
var seq__44284_44492__$1 = temp__5735__auto___44491__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44284_44492__$1)){
var c__4556__auto___44493 = cljs.core.chunk_first(seq__44284_44492__$1);
var G__44494 = cljs.core.chunk_rest(seq__44284_44492__$1);
var G__44495 = c__4556__auto___44493;
var G__44496 = cljs.core.count(c__4556__auto___44493);
var G__44497 = (0);
seq__44284_44474 = G__44494;
chunk__44287_44475 = G__44495;
count__44288_44476 = G__44496;
i__44289_44477 = G__44497;
continue;
} else {
var node_44498 = cljs.core.first(seq__44284_44492__$1);
var path_match_44499 = shadow.cljs.devtools.client.browser.match_paths(node_44498.getAttribute("href"),path);
if(cljs.core.truth_(path_match_44499)){
var new_link_44500 = (function (){var G__44297 = node_44498.cloneNode(true);
G__44297.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_44499),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__44297;
})();
(new_link_44500.onload = ((function (seq__44284_44474,chunk__44287_44475,count__44288_44476,i__44289_44477,seq__44232,chunk__44234,count__44235,i__44236,new_link_44500,path_match_44499,node_44498,seq__44284_44492__$1,temp__5735__auto___44491__$1,path,seq__44232__$1,temp__5735__auto__,map__44230,map__44230__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_44498);
});})(seq__44284_44474,chunk__44287_44475,count__44288_44476,i__44289_44477,seq__44232,chunk__44234,count__44235,i__44236,new_link_44500,path_match_44499,node_44498,seq__44284_44492__$1,temp__5735__auto___44491__$1,path,seq__44232__$1,temp__5735__auto__,map__44230,map__44230__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_44499], 0));

goog.dom.insertSiblingAfter(new_link_44500,node_44498);


var G__44502 = cljs.core.next(seq__44284_44492__$1);
var G__44503 = null;
var G__44504 = (0);
var G__44505 = (0);
seq__44284_44474 = G__44502;
chunk__44287_44475 = G__44503;
count__44288_44476 = G__44504;
i__44289_44477 = G__44505;
continue;
} else {
var G__44506 = cljs.core.next(seq__44284_44492__$1);
var G__44507 = null;
var G__44508 = (0);
var G__44509 = (0);
seq__44284_44474 = G__44506;
chunk__44287_44475 = G__44507;
count__44288_44476 = G__44508;
i__44289_44477 = G__44509;
continue;
}
}
} else {
}
}
break;
}


var G__44510 = cljs.core.next(seq__44232__$1);
var G__44511 = null;
var G__44512 = (0);
var G__44513 = (0);
seq__44232 = G__44510;
chunk__44234 = G__44511;
count__44235 = G__44512;
i__44236 = G__44513;
continue;
} else {
var G__44514 = cljs.core.next(seq__44232__$1);
var G__44515 = null;
var G__44516 = (0);
var G__44517 = (0);
seq__44232 = G__44514;
chunk__44234 = G__44515;
count__44235 = G__44516;
i__44236 = G__44517;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__44298){
var map__44299 = p__44298;
var map__44299__$1 = (((((!((map__44299 == null))))?(((((map__44299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44299):map__44299);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44299__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__44301){
var map__44302 = p__44301;
var map__44302__$1 = (((((!((map__44302 == null))))?(((((map__44302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44302):map__44302);
var _ = map__44302__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44302__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__44304,done,error){
var map__44305 = p__44304;
var map__44305__$1 = (((((!((map__44305 == null))))?(((((map__44305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44305):map__44305);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44305__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__44312,done,error){
var map__44313 = p__44312;
var map__44313__$1 = (((((!((map__44313 == null))))?(((((map__44313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44313):map__44313);
var msg = map__44313__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44313__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44313__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44313__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__44315){
var map__44316 = p__44315;
var map__44316__$1 = (((((!((map__44316 == null))))?(((((map__44316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44316):map__44316);
var src = map__44316__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44316__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__44318 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__44318) : done.call(null,G__44318));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__44323){
var map__44324 = p__44323;
var map__44324__$1 = (((((!((map__44324 == null))))?(((((map__44324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44324):map__44324);
var msg__$1 = map__44324__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44324__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e44327){var ex = e44327;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__44328){
var map__44329 = p__44328;
var map__44329__$1 = (((((!((map__44329 == null))))?(((((map__44329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44329):map__44329);
var env = map__44329__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44329__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__44334){
var map__44335 = p__44334;
var map__44335__$1 = (((((!((map__44335 == null))))?(((((map__44335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44335):map__44335);
var msg = map__44335__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44335__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__44338){
var map__44339 = p__44338;
var map__44339__$1 = (((((!((map__44339 == null))))?(((((map__44339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44339):map__44339);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44339__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44339__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__44343){
var map__44344 = p__44343;
var map__44344__$1 = (((((!((map__44344 == null))))?(((((map__44344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44344):map__44344);
var svc = map__44344__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44344__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
