goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__46001){
var map__46002 = p__46001;
var map__46002__$1 = (((((!((map__46002 == null))))?(((((map__46002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46002):map__46002);
var m = map__46002__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46002__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46002__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__46007_46214 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46008_46215 = null;
var count__46009_46216 = (0);
var i__46010_46217 = (0);
while(true){
if((i__46010_46217 < count__46009_46216)){
var f_46220 = chunk__46008_46215.cljs$core$IIndexed$_nth$arity$2(null,i__46010_46217);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_46220], 0));


var G__46223 = seq__46007_46214;
var G__46224 = chunk__46008_46215;
var G__46225 = count__46009_46216;
var G__46226 = (i__46010_46217 + (1));
seq__46007_46214 = G__46223;
chunk__46008_46215 = G__46224;
count__46009_46216 = G__46225;
i__46010_46217 = G__46226;
continue;
} else {
var temp__5735__auto___46227 = cljs.core.seq(seq__46007_46214);
if(temp__5735__auto___46227){
var seq__46007_46228__$1 = temp__5735__auto___46227;
if(cljs.core.chunked_seq_QMARK_(seq__46007_46228__$1)){
var c__4556__auto___46229 = cljs.core.chunk_first(seq__46007_46228__$1);
var G__46230 = cljs.core.chunk_rest(seq__46007_46228__$1);
var G__46231 = c__4556__auto___46229;
var G__46232 = cljs.core.count(c__4556__auto___46229);
var G__46233 = (0);
seq__46007_46214 = G__46230;
chunk__46008_46215 = G__46231;
count__46009_46216 = G__46232;
i__46010_46217 = G__46233;
continue;
} else {
var f_46234 = cljs.core.first(seq__46007_46228__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_46234], 0));


var G__46235 = cljs.core.next(seq__46007_46228__$1);
var G__46236 = null;
var G__46237 = (0);
var G__46238 = (0);
seq__46007_46214 = G__46235;
chunk__46008_46215 = G__46236;
count__46009_46216 = G__46237;
i__46010_46217 = G__46238;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_46239 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_46239], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_46239)))?cljs.core.second(arglists_46239):arglists_46239)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__46011_46244 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46012_46245 = null;
var count__46013_46246 = (0);
var i__46014_46247 = (0);
while(true){
if((i__46014_46247 < count__46013_46246)){
var vec__46028_46248 = chunk__46012_46245.cljs$core$IIndexed$_nth$arity$2(null,i__46014_46247);
var name_46249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46028_46248,(0),null);
var map__46031_46250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46028_46248,(1),null);
var map__46031_46251__$1 = (((((!((map__46031_46250 == null))))?(((((map__46031_46250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46031_46250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46031_46250):map__46031_46250);
var doc_46252 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46031_46251__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46253 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46031_46251__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_46249], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_46253], 0));

if(cljs.core.truth_(doc_46252)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_46252], 0));
} else {
}


var G__46254 = seq__46011_46244;
var G__46255 = chunk__46012_46245;
var G__46256 = count__46013_46246;
var G__46257 = (i__46014_46247 + (1));
seq__46011_46244 = G__46254;
chunk__46012_46245 = G__46255;
count__46013_46246 = G__46256;
i__46014_46247 = G__46257;
continue;
} else {
var temp__5735__auto___46258 = cljs.core.seq(seq__46011_46244);
if(temp__5735__auto___46258){
var seq__46011_46259__$1 = temp__5735__auto___46258;
if(cljs.core.chunked_seq_QMARK_(seq__46011_46259__$1)){
var c__4556__auto___46260 = cljs.core.chunk_first(seq__46011_46259__$1);
var G__46261 = cljs.core.chunk_rest(seq__46011_46259__$1);
var G__46262 = c__4556__auto___46260;
var G__46263 = cljs.core.count(c__4556__auto___46260);
var G__46264 = (0);
seq__46011_46244 = G__46261;
chunk__46012_46245 = G__46262;
count__46013_46246 = G__46263;
i__46014_46247 = G__46264;
continue;
} else {
var vec__46034_46265 = cljs.core.first(seq__46011_46259__$1);
var name_46266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46034_46265,(0),null);
var map__46037_46267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46034_46265,(1),null);
var map__46037_46268__$1 = (((((!((map__46037_46267 == null))))?(((((map__46037_46267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46037_46267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46037_46267):map__46037_46267);
var doc_46269 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46037_46268__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46270 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46037_46268__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_46266], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_46270], 0));

if(cljs.core.truth_(doc_46269)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_46269], 0));
} else {
}


var G__46271 = cljs.core.next(seq__46011_46259__$1);
var G__46272 = null;
var G__46273 = (0);
var G__46274 = (0);
seq__46011_46244 = G__46271;
chunk__46012_46245 = G__46272;
count__46013_46246 = G__46273;
i__46014_46247 = G__46274;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__46040 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__46041 = null;
var count__46042 = (0);
var i__46043 = (0);
while(true){
if((i__46043 < count__46042)){
var role = chunk__46041.cljs$core$IIndexed$_nth$arity$2(null,i__46043);
var temp__5735__auto___46275__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___46275__$1)){
var spec_46276 = temp__5735__auto___46275__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_46276)], 0));
} else {
}


var G__46277 = seq__46040;
var G__46278 = chunk__46041;
var G__46279 = count__46042;
var G__46280 = (i__46043 + (1));
seq__46040 = G__46277;
chunk__46041 = G__46278;
count__46042 = G__46279;
i__46043 = G__46280;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__46040);
if(temp__5735__auto____$1){
var seq__46040__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__46040__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46040__$1);
var G__46281 = cljs.core.chunk_rest(seq__46040__$1);
var G__46282 = c__4556__auto__;
var G__46283 = cljs.core.count(c__4556__auto__);
var G__46284 = (0);
seq__46040 = G__46281;
chunk__46041 = G__46282;
count__46042 = G__46283;
i__46043 = G__46284;
continue;
} else {
var role = cljs.core.first(seq__46040__$1);
var temp__5735__auto___46285__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___46285__$2)){
var spec_46286 = temp__5735__auto___46285__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_46286)], 0));
} else {
}


var G__46287 = cljs.core.next(seq__46040__$1);
var G__46288 = null;
var G__46289 = (0);
var G__46290 = (0);
seq__46040 = G__46287;
chunk__46041 = G__46288;
count__46042 = G__46289;
i__46043 = G__46290;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__46291 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__46292 = cljs.core.ex_cause(t);
via = G__46291;
t = G__46292;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__46092 = datafied_throwable;
var map__46092__$1 = (((((!((map__46092 == null))))?(((((map__46092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46092):map__46092);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46092__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46092__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46092__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__46093 = cljs.core.last(via);
var map__46093__$1 = (((((!((map__46093 == null))))?(((((map__46093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46093):map__46093);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46093__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46093__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46093__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__46095 = data;
var map__46095__$1 = (((((!((map__46095 == null))))?(((((map__46095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46095):map__46095);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46095__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46095__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46095__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__46096 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__46096__$1 = (((((!((map__46096 == null))))?(((((map__46096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46096):map__46096);
var top_data = map__46096__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46096__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__46123 = phase;
var G__46123__$1 = (((G__46123 instanceof cljs.core.Keyword))?G__46123.fqn:null);
switch (G__46123__$1) {
case "read-source":
var map__46124 = data;
var map__46124__$1 = (((((!((map__46124 == null))))?(((((map__46124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46124):map__46124);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46124__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46124__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__46137 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__46137__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46137,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__46137);
var G__46137__$2 = (cljs.core.truth_((function (){var fexpr__46141 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__46141.cljs$core$IFn$_invoke$arity$1 ? fexpr__46141.cljs$core$IFn$_invoke$arity$1(source) : fexpr__46141.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__46137__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__46137__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46137__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__46137__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__46142 = top_data;
var G__46142__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46142,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__46142);
var G__46142__$2 = (cljs.core.truth_((function (){var fexpr__46147 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__46147.cljs$core$IFn$_invoke$arity$1 ? fexpr__46147.cljs$core$IFn$_invoke$arity$1(source) : fexpr__46147.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__46142__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__46142__$1);
var G__46142__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46142__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__46142__$2);
var G__46142__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46142__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__46142__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46142__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__46142__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__46152 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46152,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46152,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46152,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46152,(3),null);
var G__46155 = top_data;
var G__46155__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46155,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__46155);
var G__46155__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46155__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__46155__$1);
var G__46155__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46155__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__46155__$2);
var G__46155__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46155__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__46155__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46155__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__46155__$4;
}

break;
case "execution":
var vec__46160 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46160,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46160,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46160,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46160,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__46083_SHARP_){
var or__4126__auto__ = (p1__46083_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__46165 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__46165.cljs$core$IFn$_invoke$arity$1 ? fexpr__46165.cljs$core$IFn$_invoke$arity$1(p1__46083_SHARP_) : fexpr__46165.call(null,p1__46083_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__46166 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__46166__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46166,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__46166);
var G__46166__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46166__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__46166__$1);
var G__46166__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46166__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__46166__$2);
var G__46166__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46166__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__46166__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46166__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__46166__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46123__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__46170){
var map__46171 = p__46170;
var map__46171__$1 = (((((!((map__46171 == null))))?(((((map__46171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46171):map__46171);
var triage_data = map__46171__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46171__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46171__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46171__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46171__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46171__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46171__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46171__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46171__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__46176 = phase;
var G__46176__$1 = (((G__46176 instanceof cljs.core.Keyword))?G__46176.fqn:null);
switch (G__46176__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__46177 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__46178 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46179 = loc;
var G__46180 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__46181_46297 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__46182_46298 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__46183_46299 = true;
var _STAR_print_fn_STAR__temp_val__46184_46300 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46183_46299);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46184_46300);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46168_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__46168_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46182_46298);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46181_46297);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__46177,G__46178,G__46179,G__46180) : format.call(null,G__46177,G__46178,G__46179,G__46180));

break;
case "macroexpansion":
var G__46186 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__46187 = cause_type;
var G__46188 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46189 = loc;
var G__46190 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46186,G__46187,G__46188,G__46189,G__46190) : format.call(null,G__46186,G__46187,G__46188,G__46189,G__46190));

break;
case "compile-syntax-check":
var G__46191 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__46192 = cause_type;
var G__46193 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46194 = loc;
var G__46195 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46191,G__46192,G__46193,G__46194,G__46195) : format.call(null,G__46191,G__46192,G__46193,G__46194,G__46195));

break;
case "compilation":
var G__46196 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__46197 = cause_type;
var G__46198 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46199 = loc;
var G__46200 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46196,G__46197,G__46198,G__46199,G__46200) : format.call(null,G__46196,G__46197,G__46198,G__46199,G__46200));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__46201 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__46202 = symbol;
var G__46203 = loc;
var G__46204 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__46205_46302 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__46206_46303 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__46207_46304 = true;
var _STAR_print_fn_STAR__temp_val__46208_46305 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46207_46304);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46208_46305);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46169_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__46169_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46206_46303);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46205_46302);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__46201,G__46202,G__46203,G__46204) : format.call(null,G__46201,G__46202,G__46203,G__46204));
} else {
var G__46209 = "Execution error%s at %s(%s).\n%s\n";
var G__46210 = cause_type;
var G__46211 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46212 = loc;
var G__46213 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46209,G__46210,G__46211,G__46212,G__46213) : format.call(null,G__46209,G__46210,G__46211,G__46212,G__46213));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46176__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
