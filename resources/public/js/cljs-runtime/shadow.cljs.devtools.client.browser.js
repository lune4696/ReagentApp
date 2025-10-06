goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___45200 = arguments.length;
var i__4737__auto___45201 = (0);
while(true){
if((i__4737__auto___45201 < len__4736__auto___45200)){
args__4742__auto__.push((arguments[i__4737__auto___45201]));

var G__45202 = (i__4737__auto___45201 + (1));
i__4737__auto___45201 = G__45202;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq45052){
var G__45053 = cljs.core.first(seq45052);
var seq45052__$1 = cljs.core.next(seq45052);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45053,seq45052__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__45060 = cljs.core.seq(sources);
var chunk__45061 = null;
var count__45062 = (0);
var i__45063 = (0);
while(true){
if((i__45063 < count__45062)){
var map__45074 = chunk__45061.cljs$core$IIndexed$_nth$arity$2(null,i__45063);
var map__45074__$1 = (((((!((map__45074 == null))))?(((((map__45074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45074):map__45074);
var src = map__45074__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45074__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45074__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45074__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45074__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e45077){var e_45203 = e45077;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_45203);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_45203.message)].join('')));
}

var G__45204 = seq__45060;
var G__45205 = chunk__45061;
var G__45206 = count__45062;
var G__45207 = (i__45063 + (1));
seq__45060 = G__45204;
chunk__45061 = G__45205;
count__45062 = G__45206;
i__45063 = G__45207;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45060);
if(temp__5735__auto__){
var seq__45060__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45060__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__45060__$1);
var G__45208 = cljs.core.chunk_rest(seq__45060__$1);
var G__45209 = c__4556__auto__;
var G__45210 = cljs.core.count(c__4556__auto__);
var G__45211 = (0);
seq__45060 = G__45208;
chunk__45061 = G__45209;
count__45062 = G__45210;
i__45063 = G__45211;
continue;
} else {
var map__45078 = cljs.core.first(seq__45060__$1);
var map__45078__$1 = (((((!((map__45078 == null))))?(((((map__45078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45078):map__45078);
var src = map__45078__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45078__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45078__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45078__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45078__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e45080){var e_45212 = e45080;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_45212);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_45212.message)].join('')));
}

var G__45213 = cljs.core.next(seq__45060__$1);
var G__45214 = null;
var G__45215 = (0);
var G__45216 = (0);
seq__45060 = G__45213;
chunk__45061 = G__45214;
count__45062 = G__45215;
i__45063 = G__45216;
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
var seq__45081 = cljs.core.seq(js_requires);
var chunk__45082 = null;
var count__45083 = (0);
var i__45084 = (0);
while(true){
if((i__45084 < count__45083)){
var js_ns = chunk__45082.cljs$core$IIndexed$_nth$arity$2(null,i__45084);
var require_str_45217 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_45217);


var G__45218 = seq__45081;
var G__45219 = chunk__45082;
var G__45220 = count__45083;
var G__45221 = (i__45084 + (1));
seq__45081 = G__45218;
chunk__45082 = G__45219;
count__45083 = G__45220;
i__45084 = G__45221;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45081);
if(temp__5735__auto__){
var seq__45081__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45081__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__45081__$1);
var G__45222 = cljs.core.chunk_rest(seq__45081__$1);
var G__45223 = c__4556__auto__;
var G__45224 = cljs.core.count(c__4556__auto__);
var G__45225 = (0);
seq__45081 = G__45222;
chunk__45082 = G__45223;
count__45083 = G__45224;
i__45084 = G__45225;
continue;
} else {
var js_ns = cljs.core.first(seq__45081__$1);
var require_str_45226 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_45226);


var G__45227 = cljs.core.next(seq__45081__$1);
var G__45228 = null;
var G__45229 = (0);
var G__45230 = (0);
seq__45081 = G__45227;
chunk__45082 = G__45228;
count__45083 = G__45229;
i__45084 = G__45230;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__45088){
var map__45089 = p__45088;
var map__45089__$1 = (((((!((map__45089 == null))))?(((((map__45089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45089):map__45089);
var msg = map__45089__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45089__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45089__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45091(s__45092){
return (new cljs.core.LazySeq(null,(function (){
var s__45092__$1 = s__45092;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__45092__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__45097 = cljs.core.first(xs__6292__auto__);
var map__45097__$1 = (((((!((map__45097 == null))))?(((((map__45097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45097):map__45097);
var src = map__45097__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45097__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45097__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__45092__$1,map__45097,map__45097__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__45089,map__45089__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45091_$_iter__45093(s__45094){
return (new cljs.core.LazySeq(null,((function (s__45092__$1,map__45097,map__45097__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__45089,map__45089__$1,msg,info,reload_info){
return (function (){
var s__45094__$1 = s__45094;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__45094__$1);
if(temp__5735__auto____$1){
var s__45094__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__45094__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__45094__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__45096 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__45095 = (0);
while(true){
if((i__45095 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__45095);
cljs.core.chunk_append(b__45096,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__45231 = (i__45095 + (1));
i__45095 = G__45231;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45096),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45091_$_iter__45093(cljs.core.chunk_rest(s__45094__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45096),null);
}
} else {
var warning = cljs.core.first(s__45094__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45091_$_iter__45093(cljs.core.rest(s__45094__$2)));
}
} else {
return null;
}
break;
}
});})(s__45092__$1,map__45097,map__45097__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__45089,map__45089__$1,msg,info,reload_info))
,null,null));
});})(s__45092__$1,map__45097,map__45097__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__45089,map__45089__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45091(cljs.core.rest(s__45092__$1)));
} else {
var G__45232 = cljs.core.rest(s__45092__$1);
s__45092__$1 = G__45232;
continue;
}
} else {
var G__45233 = cljs.core.rest(s__45092__$1);
s__45092__$1 = G__45233;
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
var seq__45099_45234 = cljs.core.seq(warnings);
var chunk__45100_45235 = null;
var count__45101_45236 = (0);
var i__45102_45237 = (0);
while(true){
if((i__45102_45237 < count__45101_45236)){
var map__45107_45238 = chunk__45100_45235.cljs$core$IIndexed$_nth$arity$2(null,i__45102_45237);
var map__45107_45239__$1 = (((((!((map__45107_45238 == null))))?(((((map__45107_45238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45107_45238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45107_45238):map__45107_45238);
var w_45240 = map__45107_45239__$1;
var msg_45241__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45107_45239__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_45242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45107_45239__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_45243 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45107_45239__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_45244 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45107_45239__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_45244)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_45242),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_45243),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_45241__$1)].join(''));


var G__45245 = seq__45099_45234;
var G__45246 = chunk__45100_45235;
var G__45247 = count__45101_45236;
var G__45248 = (i__45102_45237 + (1));
seq__45099_45234 = G__45245;
chunk__45100_45235 = G__45246;
count__45101_45236 = G__45247;
i__45102_45237 = G__45248;
continue;
} else {
var temp__5735__auto___45249 = cljs.core.seq(seq__45099_45234);
if(temp__5735__auto___45249){
var seq__45099_45250__$1 = temp__5735__auto___45249;
if(cljs.core.chunked_seq_QMARK_(seq__45099_45250__$1)){
var c__4556__auto___45251 = cljs.core.chunk_first(seq__45099_45250__$1);
var G__45252 = cljs.core.chunk_rest(seq__45099_45250__$1);
var G__45253 = c__4556__auto___45251;
var G__45254 = cljs.core.count(c__4556__auto___45251);
var G__45255 = (0);
seq__45099_45234 = G__45252;
chunk__45100_45235 = G__45253;
count__45101_45236 = G__45254;
i__45102_45237 = G__45255;
continue;
} else {
var map__45109_45256 = cljs.core.first(seq__45099_45250__$1);
var map__45109_45257__$1 = (((((!((map__45109_45256 == null))))?(((((map__45109_45256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45109_45256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45109_45256):map__45109_45256);
var w_45258 = map__45109_45257__$1;
var msg_45259__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45109_45257__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_45260 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45109_45257__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_45261 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45109_45257__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_45262 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45109_45257__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_45262)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_45260),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_45261),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_45259__$1)].join(''));


var G__45263 = cljs.core.next(seq__45099_45250__$1);
var G__45264 = null;
var G__45265 = (0);
var G__45266 = (0);
seq__45099_45234 = G__45263;
chunk__45100_45235 = G__45264;
count__45101_45236 = G__45265;
i__45102_45237 = G__45266;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__45086_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__45086_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__45111){
var map__45112 = p__45111;
var map__45112__$1 = (((((!((map__45112 == null))))?(((((map__45112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45112):map__45112);
var msg = map__45112__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45112__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__45114 = cljs.core.seq(updates);
var chunk__45116 = null;
var count__45117 = (0);
var i__45118 = (0);
while(true){
if((i__45118 < count__45117)){
var path = chunk__45116.cljs$core$IIndexed$_nth$arity$2(null,i__45118);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__45144_45267 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__45147_45268 = null;
var count__45148_45269 = (0);
var i__45149_45270 = (0);
while(true){
if((i__45149_45270 < count__45148_45269)){
var node_45271 = chunk__45147_45268.cljs$core$IIndexed$_nth$arity$2(null,i__45149_45270);
var path_match_45272 = shadow.cljs.devtools.client.browser.match_paths(node_45271.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45272)){
var new_link_45273 = (function (){var G__45154 = node_45271.cloneNode(true);
G__45154.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45272),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45154;
})();
(new_link_45273.onload = ((function (seq__45144_45267,chunk__45147_45268,count__45148_45269,i__45149_45270,seq__45114,chunk__45116,count__45117,i__45118,new_link_45273,path_match_45272,node_45271,path,map__45112,map__45112__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_45271);
});})(seq__45144_45267,chunk__45147_45268,count__45148_45269,i__45149_45270,seq__45114,chunk__45116,count__45117,i__45118,new_link_45273,path_match_45272,node_45271,path,map__45112,map__45112__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45272], 0));

goog.dom.insertSiblingAfter(new_link_45273,node_45271);


var G__45274 = seq__45144_45267;
var G__45275 = chunk__45147_45268;
var G__45276 = count__45148_45269;
var G__45277 = (i__45149_45270 + (1));
seq__45144_45267 = G__45274;
chunk__45147_45268 = G__45275;
count__45148_45269 = G__45276;
i__45149_45270 = G__45277;
continue;
} else {
var G__45278 = seq__45144_45267;
var G__45279 = chunk__45147_45268;
var G__45280 = count__45148_45269;
var G__45281 = (i__45149_45270 + (1));
seq__45144_45267 = G__45278;
chunk__45147_45268 = G__45279;
count__45148_45269 = G__45280;
i__45149_45270 = G__45281;
continue;
}
} else {
var temp__5735__auto___45282 = cljs.core.seq(seq__45144_45267);
if(temp__5735__auto___45282){
var seq__45144_45283__$1 = temp__5735__auto___45282;
if(cljs.core.chunked_seq_QMARK_(seq__45144_45283__$1)){
var c__4556__auto___45284 = cljs.core.chunk_first(seq__45144_45283__$1);
var G__45285 = cljs.core.chunk_rest(seq__45144_45283__$1);
var G__45286 = c__4556__auto___45284;
var G__45287 = cljs.core.count(c__4556__auto___45284);
var G__45288 = (0);
seq__45144_45267 = G__45285;
chunk__45147_45268 = G__45286;
count__45148_45269 = G__45287;
i__45149_45270 = G__45288;
continue;
} else {
var node_45289 = cljs.core.first(seq__45144_45283__$1);
var path_match_45290 = shadow.cljs.devtools.client.browser.match_paths(node_45289.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45290)){
var new_link_45291 = (function (){var G__45155 = node_45289.cloneNode(true);
G__45155.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45290),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45155;
})();
(new_link_45291.onload = ((function (seq__45144_45267,chunk__45147_45268,count__45148_45269,i__45149_45270,seq__45114,chunk__45116,count__45117,i__45118,new_link_45291,path_match_45290,node_45289,seq__45144_45283__$1,temp__5735__auto___45282,path,map__45112,map__45112__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_45289);
});})(seq__45144_45267,chunk__45147_45268,count__45148_45269,i__45149_45270,seq__45114,chunk__45116,count__45117,i__45118,new_link_45291,path_match_45290,node_45289,seq__45144_45283__$1,temp__5735__auto___45282,path,map__45112,map__45112__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45290], 0));

goog.dom.insertSiblingAfter(new_link_45291,node_45289);


var G__45292 = cljs.core.next(seq__45144_45283__$1);
var G__45293 = null;
var G__45294 = (0);
var G__45295 = (0);
seq__45144_45267 = G__45292;
chunk__45147_45268 = G__45293;
count__45148_45269 = G__45294;
i__45149_45270 = G__45295;
continue;
} else {
var G__45296 = cljs.core.next(seq__45144_45283__$1);
var G__45297 = null;
var G__45298 = (0);
var G__45299 = (0);
seq__45144_45267 = G__45296;
chunk__45147_45268 = G__45297;
count__45148_45269 = G__45298;
i__45149_45270 = G__45299;
continue;
}
}
} else {
}
}
break;
}


var G__45300 = seq__45114;
var G__45301 = chunk__45116;
var G__45302 = count__45117;
var G__45303 = (i__45118 + (1));
seq__45114 = G__45300;
chunk__45116 = G__45301;
count__45117 = G__45302;
i__45118 = G__45303;
continue;
} else {
var G__45304 = seq__45114;
var G__45305 = chunk__45116;
var G__45306 = count__45117;
var G__45307 = (i__45118 + (1));
seq__45114 = G__45304;
chunk__45116 = G__45305;
count__45117 = G__45306;
i__45118 = G__45307;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45114);
if(temp__5735__auto__){
var seq__45114__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45114__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__45114__$1);
var G__45308 = cljs.core.chunk_rest(seq__45114__$1);
var G__45309 = c__4556__auto__;
var G__45310 = cljs.core.count(c__4556__auto__);
var G__45311 = (0);
seq__45114 = G__45308;
chunk__45116 = G__45309;
count__45117 = G__45310;
i__45118 = G__45311;
continue;
} else {
var path = cljs.core.first(seq__45114__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__45156_45312 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__45159_45313 = null;
var count__45160_45314 = (0);
var i__45161_45315 = (0);
while(true){
if((i__45161_45315 < count__45160_45314)){
var node_45316 = chunk__45159_45313.cljs$core$IIndexed$_nth$arity$2(null,i__45161_45315);
var path_match_45317 = shadow.cljs.devtools.client.browser.match_paths(node_45316.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45317)){
var new_link_45318 = (function (){var G__45166 = node_45316.cloneNode(true);
G__45166.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45317),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45166;
})();
(new_link_45318.onload = ((function (seq__45156_45312,chunk__45159_45313,count__45160_45314,i__45161_45315,seq__45114,chunk__45116,count__45117,i__45118,new_link_45318,path_match_45317,node_45316,path,seq__45114__$1,temp__5735__auto__,map__45112,map__45112__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_45316);
});})(seq__45156_45312,chunk__45159_45313,count__45160_45314,i__45161_45315,seq__45114,chunk__45116,count__45117,i__45118,new_link_45318,path_match_45317,node_45316,path,seq__45114__$1,temp__5735__auto__,map__45112,map__45112__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45317], 0));

goog.dom.insertSiblingAfter(new_link_45318,node_45316);


var G__45319 = seq__45156_45312;
var G__45320 = chunk__45159_45313;
var G__45321 = count__45160_45314;
var G__45322 = (i__45161_45315 + (1));
seq__45156_45312 = G__45319;
chunk__45159_45313 = G__45320;
count__45160_45314 = G__45321;
i__45161_45315 = G__45322;
continue;
} else {
var G__45323 = seq__45156_45312;
var G__45324 = chunk__45159_45313;
var G__45325 = count__45160_45314;
var G__45326 = (i__45161_45315 + (1));
seq__45156_45312 = G__45323;
chunk__45159_45313 = G__45324;
count__45160_45314 = G__45325;
i__45161_45315 = G__45326;
continue;
}
} else {
var temp__5735__auto___45327__$1 = cljs.core.seq(seq__45156_45312);
if(temp__5735__auto___45327__$1){
var seq__45156_45328__$1 = temp__5735__auto___45327__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45156_45328__$1)){
var c__4556__auto___45329 = cljs.core.chunk_first(seq__45156_45328__$1);
var G__45330 = cljs.core.chunk_rest(seq__45156_45328__$1);
var G__45331 = c__4556__auto___45329;
var G__45332 = cljs.core.count(c__4556__auto___45329);
var G__45333 = (0);
seq__45156_45312 = G__45330;
chunk__45159_45313 = G__45331;
count__45160_45314 = G__45332;
i__45161_45315 = G__45333;
continue;
} else {
var node_45334 = cljs.core.first(seq__45156_45328__$1);
var path_match_45335 = shadow.cljs.devtools.client.browser.match_paths(node_45334.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45335)){
var new_link_45336 = (function (){var G__45167 = node_45334.cloneNode(true);
G__45167.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45335),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45167;
})();
(new_link_45336.onload = ((function (seq__45156_45312,chunk__45159_45313,count__45160_45314,i__45161_45315,seq__45114,chunk__45116,count__45117,i__45118,new_link_45336,path_match_45335,node_45334,seq__45156_45328__$1,temp__5735__auto___45327__$1,path,seq__45114__$1,temp__5735__auto__,map__45112,map__45112__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_45334);
});})(seq__45156_45312,chunk__45159_45313,count__45160_45314,i__45161_45315,seq__45114,chunk__45116,count__45117,i__45118,new_link_45336,path_match_45335,node_45334,seq__45156_45328__$1,temp__5735__auto___45327__$1,path,seq__45114__$1,temp__5735__auto__,map__45112,map__45112__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45335], 0));

goog.dom.insertSiblingAfter(new_link_45336,node_45334);


var G__45337 = cljs.core.next(seq__45156_45328__$1);
var G__45338 = null;
var G__45339 = (0);
var G__45340 = (0);
seq__45156_45312 = G__45337;
chunk__45159_45313 = G__45338;
count__45160_45314 = G__45339;
i__45161_45315 = G__45340;
continue;
} else {
var G__45341 = cljs.core.next(seq__45156_45328__$1);
var G__45342 = null;
var G__45343 = (0);
var G__45344 = (0);
seq__45156_45312 = G__45341;
chunk__45159_45313 = G__45342;
count__45160_45314 = G__45343;
i__45161_45315 = G__45344;
continue;
}
}
} else {
}
}
break;
}


var G__45345 = cljs.core.next(seq__45114__$1);
var G__45346 = null;
var G__45347 = (0);
var G__45348 = (0);
seq__45114 = G__45345;
chunk__45116 = G__45346;
count__45117 = G__45347;
i__45118 = G__45348;
continue;
} else {
var G__45349 = cljs.core.next(seq__45114__$1);
var G__45350 = null;
var G__45351 = (0);
var G__45352 = (0);
seq__45114 = G__45349;
chunk__45116 = G__45350;
count__45117 = G__45351;
i__45118 = G__45352;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__45168){
var map__45169 = p__45168;
var map__45169__$1 = (((((!((map__45169 == null))))?(((((map__45169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45169):map__45169);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45169__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__45171){
var map__45172 = p__45171;
var map__45172__$1 = (((((!((map__45172 == null))))?(((((map__45172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45172):map__45172);
var _ = map__45172__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45172__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__45174,done,error){
var map__45175 = p__45174;
var map__45175__$1 = (((((!((map__45175 == null))))?(((((map__45175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45175):map__45175);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45175__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__45177,done,error){
var map__45178 = p__45177;
var map__45178__$1 = (((((!((map__45178 == null))))?(((((map__45178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45178):map__45178);
var msg = map__45178__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45178__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45178__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45178__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__45180){
var map__45181 = p__45180;
var map__45181__$1 = (((((!((map__45181 == null))))?(((((map__45181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45181):map__45181);
var src = map__45181__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45181__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__45183 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__45183) : done.call(null,G__45183));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__45184){
var map__45185 = p__45184;
var map__45185__$1 = (((((!((map__45185 == null))))?(((((map__45185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45185):map__45185);
var msg__$1 = map__45185__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45185__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e45187){var ex = e45187;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__45188){
var map__45189 = p__45188;
var map__45189__$1 = (((((!((map__45189 == null))))?(((((map__45189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45189):map__45189);
var env = map__45189__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45189__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__45191){
var map__45192 = p__45191;
var map__45192__$1 = (((((!((map__45192 == null))))?(((((map__45192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45192):map__45192);
var msg = map__45192__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45192__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__45194){
var map__45195 = p__45194;
var map__45195__$1 = (((((!((map__45195 == null))))?(((((map__45195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45195):map__45195);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45195__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45195__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__45197){
var map__45198 = p__45197;
var map__45198__$1 = (((((!((map__45198 == null))))?(((((map__45198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45198):map__45198);
var svc = map__45198__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45198__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
