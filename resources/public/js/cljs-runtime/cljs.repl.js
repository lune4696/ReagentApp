goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__41960){
var map__41961 = p__41960;
var map__41961__$1 = (((((!((map__41961 == null))))?(((((map__41961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41961):map__41961);
var m = map__41961__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41961__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41961__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__41965_42178 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41966_42179 = null;
var count__41967_42180 = (0);
var i__41968_42181 = (0);
while(true){
if((i__41968_42181 < count__41967_42180)){
var f_42184 = chunk__41966_42179.cljs$core$IIndexed$_nth$arity$2(null,i__41968_42181);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_42184], 0));


var G__42187 = seq__41965_42178;
var G__42188 = chunk__41966_42179;
var G__42189 = count__41967_42180;
var G__42190 = (i__41968_42181 + (1));
seq__41965_42178 = G__42187;
chunk__41966_42179 = G__42188;
count__41967_42180 = G__42189;
i__41968_42181 = G__42190;
continue;
} else {
var temp__5735__auto___42191 = cljs.core.seq(seq__41965_42178);
if(temp__5735__auto___42191){
var seq__41965_42192__$1 = temp__5735__auto___42191;
if(cljs.core.chunked_seq_QMARK_(seq__41965_42192__$1)){
var c__4556__auto___42193 = cljs.core.chunk_first(seq__41965_42192__$1);
var G__42194 = cljs.core.chunk_rest(seq__41965_42192__$1);
var G__42195 = c__4556__auto___42193;
var G__42196 = cljs.core.count(c__4556__auto___42193);
var G__42197 = (0);
seq__41965_42178 = G__42194;
chunk__41966_42179 = G__42195;
count__41967_42180 = G__42196;
i__41968_42181 = G__42197;
continue;
} else {
var f_42198 = cljs.core.first(seq__41965_42192__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_42198], 0));


var G__42199 = cljs.core.next(seq__41965_42192__$1);
var G__42200 = null;
var G__42201 = (0);
var G__42202 = (0);
seq__41965_42178 = G__42199;
chunk__41966_42179 = G__42200;
count__41967_42180 = G__42201;
i__41968_42181 = G__42202;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_42203 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_42203], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_42203)))?cljs.core.second(arglists_42203):arglists_42203)], 0));
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
var seq__41971_42204 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41972_42205 = null;
var count__41973_42206 = (0);
var i__41974_42207 = (0);
while(true){
if((i__41974_42207 < count__41973_42206)){
var vec__41988_42208 = chunk__41972_42205.cljs$core$IIndexed$_nth$arity$2(null,i__41974_42207);
var name_42209 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41988_42208,(0),null);
var map__41991_42210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41988_42208,(1),null);
var map__41991_42211__$1 = (((((!((map__41991_42210 == null))))?(((((map__41991_42210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41991_42210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41991_42210):map__41991_42210);
var doc_42212 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41991_42211__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42213 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41991_42211__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_42209], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_42213], 0));

if(cljs.core.truth_(doc_42212)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_42212], 0));
} else {
}


var G__42214 = seq__41971_42204;
var G__42215 = chunk__41972_42205;
var G__42216 = count__41973_42206;
var G__42217 = (i__41974_42207 + (1));
seq__41971_42204 = G__42214;
chunk__41972_42205 = G__42215;
count__41973_42206 = G__42216;
i__41974_42207 = G__42217;
continue;
} else {
var temp__5735__auto___42218 = cljs.core.seq(seq__41971_42204);
if(temp__5735__auto___42218){
var seq__41971_42219__$1 = temp__5735__auto___42218;
if(cljs.core.chunked_seq_QMARK_(seq__41971_42219__$1)){
var c__4556__auto___42220 = cljs.core.chunk_first(seq__41971_42219__$1);
var G__42221 = cljs.core.chunk_rest(seq__41971_42219__$1);
var G__42222 = c__4556__auto___42220;
var G__42223 = cljs.core.count(c__4556__auto___42220);
var G__42224 = (0);
seq__41971_42204 = G__42221;
chunk__41972_42205 = G__42222;
count__41973_42206 = G__42223;
i__41974_42207 = G__42224;
continue;
} else {
var vec__41993_42225 = cljs.core.first(seq__41971_42219__$1);
var name_42226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41993_42225,(0),null);
var map__41996_42227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41993_42225,(1),null);
var map__41996_42228__$1 = (((((!((map__41996_42227 == null))))?(((((map__41996_42227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41996_42227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41996_42227):map__41996_42227);
var doc_42229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41996_42228__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41996_42228__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_42226], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_42230], 0));

if(cljs.core.truth_(doc_42229)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_42229], 0));
} else {
}


var G__42231 = cljs.core.next(seq__41971_42219__$1);
var G__42232 = null;
var G__42233 = (0);
var G__42234 = (0);
seq__41971_42204 = G__42231;
chunk__41972_42205 = G__42232;
count__41973_42206 = G__42233;
i__41974_42207 = G__42234;
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

var seq__42000 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__42001 = null;
var count__42002 = (0);
var i__42003 = (0);
while(true){
if((i__42003 < count__42002)){
var role = chunk__42001.cljs$core$IIndexed$_nth$arity$2(null,i__42003);
var temp__5735__auto___42235__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___42235__$1)){
var spec_42236 = temp__5735__auto___42235__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_42236)], 0));
} else {
}


var G__42237 = seq__42000;
var G__42238 = chunk__42001;
var G__42239 = count__42002;
var G__42240 = (i__42003 + (1));
seq__42000 = G__42237;
chunk__42001 = G__42238;
count__42002 = G__42239;
i__42003 = G__42240;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__42000);
if(temp__5735__auto____$1){
var seq__42000__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__42000__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__42000__$1);
var G__42241 = cljs.core.chunk_rest(seq__42000__$1);
var G__42242 = c__4556__auto__;
var G__42243 = cljs.core.count(c__4556__auto__);
var G__42244 = (0);
seq__42000 = G__42241;
chunk__42001 = G__42242;
count__42002 = G__42243;
i__42003 = G__42244;
continue;
} else {
var role = cljs.core.first(seq__42000__$1);
var temp__5735__auto___42245__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___42245__$2)){
var spec_42246 = temp__5735__auto___42245__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_42246)], 0));
} else {
}


var G__42247 = cljs.core.next(seq__42000__$1);
var G__42248 = null;
var G__42249 = (0);
var G__42250 = (0);
seq__42000 = G__42247;
chunk__42001 = G__42248;
count__42002 = G__42249;
i__42003 = G__42250;
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
var G__42251 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__42252 = cljs.core.ex_cause(t);
via = G__42251;
t = G__42252;
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
var map__42044 = datafied_throwable;
var map__42044__$1 = (((((!((map__42044 == null))))?(((((map__42044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42044):map__42044);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42044__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42044__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42044__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__42045 = cljs.core.last(via);
var map__42045__$1 = (((((!((map__42045 == null))))?(((((map__42045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42045):map__42045);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42045__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42045__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42045__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__42046 = data;
var map__42046__$1 = (((((!((map__42046 == null))))?(((((map__42046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42046):map__42046);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42046__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42046__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42046__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__42047 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__42047__$1 = (((((!((map__42047 == null))))?(((((map__42047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42047):map__42047);
var top_data = map__42047__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42047__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__42097 = phase;
var G__42097__$1 = (((G__42097 instanceof cljs.core.Keyword))?G__42097.fqn:null);
switch (G__42097__$1) {
case "read-source":
var map__42106 = data;
var map__42106__$1 = (((((!((map__42106 == null))))?(((((map__42106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42106):map__42106);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42106__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42106__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__42112 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__42112__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42112,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__42112);
var G__42112__$2 = (cljs.core.truth_((function (){var fexpr__42113 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__42113.cljs$core$IFn$_invoke$arity$1 ? fexpr__42113.cljs$core$IFn$_invoke$arity$1(source) : fexpr__42113.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__42112__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__42112__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42112__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__42112__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__42115 = top_data;
var G__42115__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42115,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__42115);
var G__42115__$2 = (cljs.core.truth_((function (){var fexpr__42116 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__42116.cljs$core$IFn$_invoke$arity$1 ? fexpr__42116.cljs$core$IFn$_invoke$arity$1(source) : fexpr__42116.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__42115__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__42115__$1);
var G__42115__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42115__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__42115__$2);
var G__42115__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42115__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__42115__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42115__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__42115__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__42117 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42117,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42117,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42117,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42117,(3),null);
var G__42121 = top_data;
var G__42121__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42121,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__42121);
var G__42121__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42121__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__42121__$1);
var G__42121__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42121__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__42121__$2);
var G__42121__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42121__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__42121__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42121__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__42121__$4;
}

break;
case "execution":
var vec__42122 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42122,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42122,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42122,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42122,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__42029_SHARP_){
var or__4126__auto__ = (p1__42029_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__42126 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__42126.cljs$core$IFn$_invoke$arity$1 ? fexpr__42126.cljs$core$IFn$_invoke$arity$1(p1__42029_SHARP_) : fexpr__42126.call(null,p1__42029_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__42127 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__42127__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42127,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__42127);
var G__42127__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42127__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__42127__$1);
var G__42127__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42127__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__42127__$2);
var G__42127__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42127__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__42127__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42127__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__42127__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42097__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__42133){
var map__42134 = p__42133;
var map__42134__$1 = (((((!((map__42134 == null))))?(((((map__42134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42134):map__42134);
var triage_data = map__42134__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42134__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42134__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42134__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42134__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42134__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42134__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42134__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42134__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__42136 = phase;
var G__42136__$1 = (((G__42136 instanceof cljs.core.Keyword))?G__42136.fqn:null);
switch (G__42136__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__42138 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__42139 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42140 = loc;
var G__42141 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42142_42257 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42143_42258 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42144_42259 = true;
var _STAR_print_fn_STAR__temp_val__42145_42260 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42144_42259);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42145_42260);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42130_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__42130_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42143_42258);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42142_42257);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__42138,G__42139,G__42140,G__42141) : format.call(null,G__42138,G__42139,G__42140,G__42141));

break;
case "macroexpansion":
var G__42146 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__42147 = cause_type;
var G__42148 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42149 = loc;
var G__42150 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42146,G__42147,G__42148,G__42149,G__42150) : format.call(null,G__42146,G__42147,G__42148,G__42149,G__42150));

break;
case "compile-syntax-check":
var G__42151 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__42152 = cause_type;
var G__42153 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42154 = loc;
var G__42155 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42151,G__42152,G__42153,G__42154,G__42155) : format.call(null,G__42151,G__42152,G__42153,G__42154,G__42155));

break;
case "compilation":
var G__42156 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__42157 = cause_type;
var G__42158 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42159 = loc;
var G__42160 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42156,G__42157,G__42158,G__42159,G__42160) : format.call(null,G__42156,G__42157,G__42158,G__42159,G__42160));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__42161 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__42162 = symbol;
var G__42163 = loc;
var G__42164 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42165_42262 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42166_42263 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42167_42264 = true;
var _STAR_print_fn_STAR__temp_val__42168_42265 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42167_42264);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42168_42265);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42131_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__42131_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42166_42263);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42165_42262);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__42161,G__42162,G__42163,G__42164) : format.call(null,G__42161,G__42162,G__42163,G__42164));
} else {
var G__42169 = "Execution error%s at %s(%s).\n%s\n";
var G__42170 = cause_type;
var G__42171 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42172 = loc;
var G__42173 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42169,G__42170,G__42171,G__42172,G__42173) : format.call(null,G__42169,G__42170,G__42171,G__42172,G__42173));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42136__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
