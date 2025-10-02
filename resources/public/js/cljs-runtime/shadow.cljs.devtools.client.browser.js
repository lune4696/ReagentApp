goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___45060 = arguments.length;
var i__4737__auto___45061 = (0);
while(true){
if((i__4737__auto___45061 < len__4736__auto___45060)){
args__4742__auto__.push((arguments[i__4737__auto___45061]));

var G__45062 = (i__4737__auto___45061 + (1));
i__4737__auto___45061 = G__45062;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq44893){
var G__44894 = cljs.core.first(seq44893);
var seq44893__$1 = cljs.core.next(seq44893);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44894,seq44893__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__44908 = cljs.core.seq(sources);
var chunk__44909 = null;
var count__44910 = (0);
var i__44911 = (0);
while(true){
if((i__44911 < count__44910)){
var map__44928 = chunk__44909.cljs$core$IIndexed$_nth$arity$2(null,i__44911);
var map__44928__$1 = (((((!((map__44928 == null))))?(((((map__44928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44928):map__44928);
var src = map__44928__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44928__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44928__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44928__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44928__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e44932){var e_45063 = e44932;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_45063);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_45063.message)].join('')));
}

var G__45064 = seq__44908;
var G__45065 = chunk__44909;
var G__45066 = count__44910;
var G__45067 = (i__44911 + (1));
seq__44908 = G__45064;
chunk__44909 = G__45065;
count__44910 = G__45066;
i__44911 = G__45067;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44908);
if(temp__5735__auto__){
var seq__44908__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44908__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44908__$1);
var G__45068 = cljs.core.chunk_rest(seq__44908__$1);
var G__45069 = c__4556__auto__;
var G__45070 = cljs.core.count(c__4556__auto__);
var G__45071 = (0);
seq__44908 = G__45068;
chunk__44909 = G__45069;
count__44910 = G__45070;
i__44911 = G__45071;
continue;
} else {
var map__44933 = cljs.core.first(seq__44908__$1);
var map__44933__$1 = (((((!((map__44933 == null))))?(((((map__44933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44933):map__44933);
var src = map__44933__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44933__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44933__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44933__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44933__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e44935){var e_45072 = e44935;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_45072);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_45072.message)].join('')));
}

var G__45073 = cljs.core.next(seq__44908__$1);
var G__45074 = null;
var G__45075 = (0);
var G__45076 = (0);
seq__44908 = G__45073;
chunk__44909 = G__45074;
count__44910 = G__45075;
i__44911 = G__45076;
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
var seq__44936 = cljs.core.seq(js_requires);
var chunk__44937 = null;
var count__44938 = (0);
var i__44939 = (0);
while(true){
if((i__44939 < count__44938)){
var js_ns = chunk__44937.cljs$core$IIndexed$_nth$arity$2(null,i__44939);
var require_str_45077 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_45077);


var G__45078 = seq__44936;
var G__45079 = chunk__44937;
var G__45080 = count__44938;
var G__45081 = (i__44939 + (1));
seq__44936 = G__45078;
chunk__44937 = G__45079;
count__44938 = G__45080;
i__44939 = G__45081;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44936);
if(temp__5735__auto__){
var seq__44936__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44936__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44936__$1);
var G__45082 = cljs.core.chunk_rest(seq__44936__$1);
var G__45083 = c__4556__auto__;
var G__45084 = cljs.core.count(c__4556__auto__);
var G__45085 = (0);
seq__44936 = G__45082;
chunk__44937 = G__45083;
count__44938 = G__45084;
i__44939 = G__45085;
continue;
} else {
var js_ns = cljs.core.first(seq__44936__$1);
var require_str_45086 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_45086);


var G__45087 = cljs.core.next(seq__44936__$1);
var G__45088 = null;
var G__45089 = (0);
var G__45090 = (0);
seq__44936 = G__45087;
chunk__44937 = G__45088;
count__44938 = G__45089;
i__44939 = G__45090;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__44944){
var map__44945 = p__44944;
var map__44945__$1 = (((((!((map__44945 == null))))?(((((map__44945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44945):map__44945);
var msg = map__44945__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44945__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44945__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44948(s__44949){
return (new cljs.core.LazySeq(null,(function (){
var s__44949__$1 = s__44949;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__44949__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__44954 = cljs.core.first(xs__6292__auto__);
var map__44954__$1 = (((((!((map__44954 == null))))?(((((map__44954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44954):map__44954);
var src = map__44954__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44954__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44954__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__44949__$1,map__44954,map__44954__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__44945,map__44945__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44948_$_iter__44950(s__44951){
return (new cljs.core.LazySeq(null,((function (s__44949__$1,map__44954,map__44954__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__44945,map__44945__$1,msg,info,reload_info){
return (function (){
var s__44951__$1 = s__44951;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__44951__$1);
if(temp__5735__auto____$1){
var s__44951__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__44951__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__44951__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__44953 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__44952 = (0);
while(true){
if((i__44952 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__44952);
cljs.core.chunk_append(b__44953,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__45091 = (i__44952 + (1));
i__44952 = G__45091;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44953),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44948_$_iter__44950(cljs.core.chunk_rest(s__44951__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44953),null);
}
} else {
var warning = cljs.core.first(s__44951__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44948_$_iter__44950(cljs.core.rest(s__44951__$2)));
}
} else {
return null;
}
break;
}
});})(s__44949__$1,map__44954,map__44954__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__44945,map__44945__$1,msg,info,reload_info))
,null,null));
});})(s__44949__$1,map__44954,map__44954__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__44945,map__44945__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44948(cljs.core.rest(s__44949__$1)));
} else {
var G__45092 = cljs.core.rest(s__44949__$1);
s__44949__$1 = G__45092;
continue;
}
} else {
var G__45093 = cljs.core.rest(s__44949__$1);
s__44949__$1 = G__45093;
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
var seq__44957_45094 = cljs.core.seq(warnings);
var chunk__44958_45095 = null;
var count__44959_45096 = (0);
var i__44960_45097 = (0);
while(true){
if((i__44960_45097 < count__44959_45096)){
var map__44965_45098 = chunk__44958_45095.cljs$core$IIndexed$_nth$arity$2(null,i__44960_45097);
var map__44965_45099__$1 = (((((!((map__44965_45098 == null))))?(((((map__44965_45098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44965_45098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44965_45098):map__44965_45098);
var w_45100 = map__44965_45099__$1;
var msg_45101__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44965_45099__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_45102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44965_45099__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_45103 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44965_45099__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_45104 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44965_45099__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_45104)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_45102),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_45103),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_45101__$1)].join(''));


var G__45105 = seq__44957_45094;
var G__45106 = chunk__44958_45095;
var G__45107 = count__44959_45096;
var G__45108 = (i__44960_45097 + (1));
seq__44957_45094 = G__45105;
chunk__44958_45095 = G__45106;
count__44959_45096 = G__45107;
i__44960_45097 = G__45108;
continue;
} else {
var temp__5735__auto___45109 = cljs.core.seq(seq__44957_45094);
if(temp__5735__auto___45109){
var seq__44957_45110__$1 = temp__5735__auto___45109;
if(cljs.core.chunked_seq_QMARK_(seq__44957_45110__$1)){
var c__4556__auto___45111 = cljs.core.chunk_first(seq__44957_45110__$1);
var G__45112 = cljs.core.chunk_rest(seq__44957_45110__$1);
var G__45113 = c__4556__auto___45111;
var G__45114 = cljs.core.count(c__4556__auto___45111);
var G__45115 = (0);
seq__44957_45094 = G__45112;
chunk__44958_45095 = G__45113;
count__44959_45096 = G__45114;
i__44960_45097 = G__45115;
continue;
} else {
var map__44967_45116 = cljs.core.first(seq__44957_45110__$1);
var map__44967_45117__$1 = (((((!((map__44967_45116 == null))))?(((((map__44967_45116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44967_45116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44967_45116):map__44967_45116);
var w_45118 = map__44967_45117__$1;
var msg_45119__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44967_45117__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_45120 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44967_45117__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_45121 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44967_45117__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_45122 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44967_45117__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_45122)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_45120),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_45121),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_45119__$1)].join(''));


var G__45123 = cljs.core.next(seq__44957_45110__$1);
var G__45124 = null;
var G__45125 = (0);
var G__45126 = (0);
seq__44957_45094 = G__45123;
chunk__44958_45095 = G__45124;
count__44959_45096 = G__45125;
i__44960_45097 = G__45126;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__44943_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__44943_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__44971){
var map__44972 = p__44971;
var map__44972__$1 = (((((!((map__44972 == null))))?(((((map__44972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44972):map__44972);
var msg = map__44972__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44972__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__44974 = cljs.core.seq(updates);
var chunk__44976 = null;
var count__44977 = (0);
var i__44978 = (0);
while(true){
if((i__44978 < count__44977)){
var path = chunk__44976.cljs$core$IIndexed$_nth$arity$2(null,i__44978);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__45004_45127 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__45007_45128 = null;
var count__45008_45129 = (0);
var i__45009_45130 = (0);
while(true){
if((i__45009_45130 < count__45008_45129)){
var node_45131 = chunk__45007_45128.cljs$core$IIndexed$_nth$arity$2(null,i__45009_45130);
var path_match_45132 = shadow.cljs.devtools.client.browser.match_paths(node_45131.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45132)){
var new_link_45133 = (function (){var G__45014 = node_45131.cloneNode(true);
G__45014.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45132),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45014;
})();
(new_link_45133.onload = ((function (seq__45004_45127,chunk__45007_45128,count__45008_45129,i__45009_45130,seq__44974,chunk__44976,count__44977,i__44978,new_link_45133,path_match_45132,node_45131,path,map__44972,map__44972__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_45131);
});})(seq__45004_45127,chunk__45007_45128,count__45008_45129,i__45009_45130,seq__44974,chunk__44976,count__44977,i__44978,new_link_45133,path_match_45132,node_45131,path,map__44972,map__44972__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45132], 0));

goog.dom.insertSiblingAfter(new_link_45133,node_45131);


var G__45134 = seq__45004_45127;
var G__45135 = chunk__45007_45128;
var G__45136 = count__45008_45129;
var G__45137 = (i__45009_45130 + (1));
seq__45004_45127 = G__45134;
chunk__45007_45128 = G__45135;
count__45008_45129 = G__45136;
i__45009_45130 = G__45137;
continue;
} else {
var G__45138 = seq__45004_45127;
var G__45139 = chunk__45007_45128;
var G__45140 = count__45008_45129;
var G__45141 = (i__45009_45130 + (1));
seq__45004_45127 = G__45138;
chunk__45007_45128 = G__45139;
count__45008_45129 = G__45140;
i__45009_45130 = G__45141;
continue;
}
} else {
var temp__5735__auto___45142 = cljs.core.seq(seq__45004_45127);
if(temp__5735__auto___45142){
var seq__45004_45143__$1 = temp__5735__auto___45142;
if(cljs.core.chunked_seq_QMARK_(seq__45004_45143__$1)){
var c__4556__auto___45144 = cljs.core.chunk_first(seq__45004_45143__$1);
var G__45145 = cljs.core.chunk_rest(seq__45004_45143__$1);
var G__45146 = c__4556__auto___45144;
var G__45147 = cljs.core.count(c__4556__auto___45144);
var G__45148 = (0);
seq__45004_45127 = G__45145;
chunk__45007_45128 = G__45146;
count__45008_45129 = G__45147;
i__45009_45130 = G__45148;
continue;
} else {
var node_45149 = cljs.core.first(seq__45004_45143__$1);
var path_match_45150 = shadow.cljs.devtools.client.browser.match_paths(node_45149.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45150)){
var new_link_45151 = (function (){var G__45015 = node_45149.cloneNode(true);
G__45015.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45150),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45015;
})();
(new_link_45151.onload = ((function (seq__45004_45127,chunk__45007_45128,count__45008_45129,i__45009_45130,seq__44974,chunk__44976,count__44977,i__44978,new_link_45151,path_match_45150,node_45149,seq__45004_45143__$1,temp__5735__auto___45142,path,map__44972,map__44972__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_45149);
});})(seq__45004_45127,chunk__45007_45128,count__45008_45129,i__45009_45130,seq__44974,chunk__44976,count__44977,i__44978,new_link_45151,path_match_45150,node_45149,seq__45004_45143__$1,temp__5735__auto___45142,path,map__44972,map__44972__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45150], 0));

goog.dom.insertSiblingAfter(new_link_45151,node_45149);


var G__45152 = cljs.core.next(seq__45004_45143__$1);
var G__45153 = null;
var G__45154 = (0);
var G__45155 = (0);
seq__45004_45127 = G__45152;
chunk__45007_45128 = G__45153;
count__45008_45129 = G__45154;
i__45009_45130 = G__45155;
continue;
} else {
var G__45156 = cljs.core.next(seq__45004_45143__$1);
var G__45157 = null;
var G__45158 = (0);
var G__45159 = (0);
seq__45004_45127 = G__45156;
chunk__45007_45128 = G__45157;
count__45008_45129 = G__45158;
i__45009_45130 = G__45159;
continue;
}
}
} else {
}
}
break;
}


var G__45160 = seq__44974;
var G__45161 = chunk__44976;
var G__45162 = count__44977;
var G__45163 = (i__44978 + (1));
seq__44974 = G__45160;
chunk__44976 = G__45161;
count__44977 = G__45162;
i__44978 = G__45163;
continue;
} else {
var G__45164 = seq__44974;
var G__45165 = chunk__44976;
var G__45166 = count__44977;
var G__45167 = (i__44978 + (1));
seq__44974 = G__45164;
chunk__44976 = G__45165;
count__44977 = G__45166;
i__44978 = G__45167;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44974);
if(temp__5735__auto__){
var seq__44974__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44974__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44974__$1);
var G__45168 = cljs.core.chunk_rest(seq__44974__$1);
var G__45169 = c__4556__auto__;
var G__45170 = cljs.core.count(c__4556__auto__);
var G__45171 = (0);
seq__44974 = G__45168;
chunk__44976 = G__45169;
count__44977 = G__45170;
i__44978 = G__45171;
continue;
} else {
var path = cljs.core.first(seq__44974__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__45016_45172 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__45019_45173 = null;
var count__45020_45174 = (0);
var i__45021_45175 = (0);
while(true){
if((i__45021_45175 < count__45020_45174)){
var node_45176 = chunk__45019_45173.cljs$core$IIndexed$_nth$arity$2(null,i__45021_45175);
var path_match_45177 = shadow.cljs.devtools.client.browser.match_paths(node_45176.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45177)){
var new_link_45178 = (function (){var G__45026 = node_45176.cloneNode(true);
G__45026.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45177),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45026;
})();
(new_link_45178.onload = ((function (seq__45016_45172,chunk__45019_45173,count__45020_45174,i__45021_45175,seq__44974,chunk__44976,count__44977,i__44978,new_link_45178,path_match_45177,node_45176,path,seq__44974__$1,temp__5735__auto__,map__44972,map__44972__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_45176);
});})(seq__45016_45172,chunk__45019_45173,count__45020_45174,i__45021_45175,seq__44974,chunk__44976,count__44977,i__44978,new_link_45178,path_match_45177,node_45176,path,seq__44974__$1,temp__5735__auto__,map__44972,map__44972__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45177], 0));

goog.dom.insertSiblingAfter(new_link_45178,node_45176);


var G__45179 = seq__45016_45172;
var G__45180 = chunk__45019_45173;
var G__45181 = count__45020_45174;
var G__45182 = (i__45021_45175 + (1));
seq__45016_45172 = G__45179;
chunk__45019_45173 = G__45180;
count__45020_45174 = G__45181;
i__45021_45175 = G__45182;
continue;
} else {
var G__45183 = seq__45016_45172;
var G__45184 = chunk__45019_45173;
var G__45185 = count__45020_45174;
var G__45186 = (i__45021_45175 + (1));
seq__45016_45172 = G__45183;
chunk__45019_45173 = G__45184;
count__45020_45174 = G__45185;
i__45021_45175 = G__45186;
continue;
}
} else {
var temp__5735__auto___45187__$1 = cljs.core.seq(seq__45016_45172);
if(temp__5735__auto___45187__$1){
var seq__45016_45188__$1 = temp__5735__auto___45187__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45016_45188__$1)){
var c__4556__auto___45189 = cljs.core.chunk_first(seq__45016_45188__$1);
var G__45190 = cljs.core.chunk_rest(seq__45016_45188__$1);
var G__45191 = c__4556__auto___45189;
var G__45192 = cljs.core.count(c__4556__auto___45189);
var G__45193 = (0);
seq__45016_45172 = G__45190;
chunk__45019_45173 = G__45191;
count__45020_45174 = G__45192;
i__45021_45175 = G__45193;
continue;
} else {
var node_45194 = cljs.core.first(seq__45016_45188__$1);
var path_match_45195 = shadow.cljs.devtools.client.browser.match_paths(node_45194.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45195)){
var new_link_45196 = (function (){var G__45027 = node_45194.cloneNode(true);
G__45027.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45195),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45027;
})();
(new_link_45196.onload = ((function (seq__45016_45172,chunk__45019_45173,count__45020_45174,i__45021_45175,seq__44974,chunk__44976,count__44977,i__44978,new_link_45196,path_match_45195,node_45194,seq__45016_45188__$1,temp__5735__auto___45187__$1,path,seq__44974__$1,temp__5735__auto__,map__44972,map__44972__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_45194);
});})(seq__45016_45172,chunk__45019_45173,count__45020_45174,i__45021_45175,seq__44974,chunk__44976,count__44977,i__44978,new_link_45196,path_match_45195,node_45194,seq__45016_45188__$1,temp__5735__auto___45187__$1,path,seq__44974__$1,temp__5735__auto__,map__44972,map__44972__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45195], 0));

goog.dom.insertSiblingAfter(new_link_45196,node_45194);


var G__45197 = cljs.core.next(seq__45016_45188__$1);
var G__45198 = null;
var G__45199 = (0);
var G__45200 = (0);
seq__45016_45172 = G__45197;
chunk__45019_45173 = G__45198;
count__45020_45174 = G__45199;
i__45021_45175 = G__45200;
continue;
} else {
var G__45201 = cljs.core.next(seq__45016_45188__$1);
var G__45202 = null;
var G__45203 = (0);
var G__45204 = (0);
seq__45016_45172 = G__45201;
chunk__45019_45173 = G__45202;
count__45020_45174 = G__45203;
i__45021_45175 = G__45204;
continue;
}
}
} else {
}
}
break;
}


var G__45205 = cljs.core.next(seq__44974__$1);
var G__45206 = null;
var G__45207 = (0);
var G__45208 = (0);
seq__44974 = G__45205;
chunk__44976 = G__45206;
count__44977 = G__45207;
i__44978 = G__45208;
continue;
} else {
var G__45209 = cljs.core.next(seq__44974__$1);
var G__45210 = null;
var G__45211 = (0);
var G__45212 = (0);
seq__44974 = G__45209;
chunk__44976 = G__45210;
count__44977 = G__45211;
i__44978 = G__45212;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__45028){
var map__45029 = p__45028;
var map__45029__$1 = (((((!((map__45029 == null))))?(((((map__45029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45029):map__45029);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45029__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__45031){
var map__45032 = p__45031;
var map__45032__$1 = (((((!((map__45032 == null))))?(((((map__45032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45032):map__45032);
var _ = map__45032__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45032__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__45034,done,error){
var map__45035 = p__45034;
var map__45035__$1 = (((((!((map__45035 == null))))?(((((map__45035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45035):map__45035);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45035__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__45037,done,error){
var map__45038 = p__45037;
var map__45038__$1 = (((((!((map__45038 == null))))?(((((map__45038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45038):map__45038);
var msg = map__45038__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45038__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45038__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45038__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__45040){
var map__45041 = p__45040;
var map__45041__$1 = (((((!((map__45041 == null))))?(((((map__45041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45041):map__45041);
var src = map__45041__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45041__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__45043 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__45043) : done.call(null,G__45043));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__45044){
var map__45045 = p__45044;
var map__45045__$1 = (((((!((map__45045 == null))))?(((((map__45045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45045):map__45045);
var msg__$1 = map__45045__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45045__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e45047){var ex = e45047;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__45048){
var map__45049 = p__45048;
var map__45049__$1 = (((((!((map__45049 == null))))?(((((map__45049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45049):map__45049);
var env = map__45049__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45049__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__45051){
var map__45052 = p__45051;
var map__45052__$1 = (((((!((map__45052 == null))))?(((((map__45052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45052):map__45052);
var msg = map__45052__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45052__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__45054){
var map__45055 = p__45054;
var map__45055__$1 = (((((!((map__45055 == null))))?(((((map__45055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45055):map__45055);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45055__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45055__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__45057){
var map__45058 = p__45057;
var map__45058__$1 = (((((!((map__45058 == null))))?(((((map__45058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45058):map__45058);
var svc = map__45058__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45058__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
