goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__46137){
var map__46138 = p__46137;
var map__46138__$1 = (((((!((map__46138 == null))))?(((((map__46138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46138):map__46138);
var m = map__46138__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46138__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46138__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__46140_46348 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46141_46349 = null;
var count__46142_46350 = (0);
var i__46143_46351 = (0);
while(true){
if((i__46143_46351 < count__46142_46350)){
var f_46352 = chunk__46141_46349.cljs$core$IIndexed$_nth$arity$2(null,i__46143_46351);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_46352], 0));


var G__46353 = seq__46140_46348;
var G__46354 = chunk__46141_46349;
var G__46355 = count__46142_46350;
var G__46356 = (i__46143_46351 + (1));
seq__46140_46348 = G__46353;
chunk__46141_46349 = G__46354;
count__46142_46350 = G__46355;
i__46143_46351 = G__46356;
continue;
} else {
var temp__5735__auto___46357 = cljs.core.seq(seq__46140_46348);
if(temp__5735__auto___46357){
var seq__46140_46358__$1 = temp__5735__auto___46357;
if(cljs.core.chunked_seq_QMARK_(seq__46140_46358__$1)){
var c__4556__auto___46359 = cljs.core.chunk_first(seq__46140_46358__$1);
var G__46360 = cljs.core.chunk_rest(seq__46140_46358__$1);
var G__46361 = c__4556__auto___46359;
var G__46362 = cljs.core.count(c__4556__auto___46359);
var G__46363 = (0);
seq__46140_46348 = G__46360;
chunk__46141_46349 = G__46361;
count__46142_46350 = G__46362;
i__46143_46351 = G__46363;
continue;
} else {
var f_46364 = cljs.core.first(seq__46140_46358__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_46364], 0));


var G__46365 = cljs.core.next(seq__46140_46358__$1);
var G__46366 = null;
var G__46367 = (0);
var G__46368 = (0);
seq__46140_46348 = G__46365;
chunk__46141_46349 = G__46366;
count__46142_46350 = G__46367;
i__46143_46351 = G__46368;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_46369 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_46369], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_46369)))?cljs.core.second(arglists_46369):arglists_46369)], 0));
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
var seq__46147_46371 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46148_46372 = null;
var count__46149_46373 = (0);
var i__46150_46374 = (0);
while(true){
if((i__46150_46374 < count__46149_46373)){
var vec__46165_46375 = chunk__46148_46372.cljs$core$IIndexed$_nth$arity$2(null,i__46150_46374);
var name_46376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46165_46375,(0),null);
var map__46168_46377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46165_46375,(1),null);
var map__46168_46378__$1 = (((((!((map__46168_46377 == null))))?(((((map__46168_46377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46168_46377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46168_46377):map__46168_46377);
var doc_46379 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46168_46378__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46380 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46168_46378__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_46376], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_46380], 0));

if(cljs.core.truth_(doc_46379)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_46379], 0));
} else {
}


var G__46382 = seq__46147_46371;
var G__46383 = chunk__46148_46372;
var G__46384 = count__46149_46373;
var G__46385 = (i__46150_46374 + (1));
seq__46147_46371 = G__46382;
chunk__46148_46372 = G__46383;
count__46149_46373 = G__46384;
i__46150_46374 = G__46385;
continue;
} else {
var temp__5735__auto___46386 = cljs.core.seq(seq__46147_46371);
if(temp__5735__auto___46386){
var seq__46147_46387__$1 = temp__5735__auto___46386;
if(cljs.core.chunked_seq_QMARK_(seq__46147_46387__$1)){
var c__4556__auto___46389 = cljs.core.chunk_first(seq__46147_46387__$1);
var G__46390 = cljs.core.chunk_rest(seq__46147_46387__$1);
var G__46391 = c__4556__auto___46389;
var G__46392 = cljs.core.count(c__4556__auto___46389);
var G__46393 = (0);
seq__46147_46371 = G__46390;
chunk__46148_46372 = G__46391;
count__46149_46373 = G__46392;
i__46150_46374 = G__46393;
continue;
} else {
var vec__46170_46394 = cljs.core.first(seq__46147_46387__$1);
var name_46395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46170_46394,(0),null);
var map__46173_46396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46170_46394,(1),null);
var map__46173_46397__$1 = (((((!((map__46173_46396 == null))))?(((((map__46173_46396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46173_46396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46173_46396):map__46173_46396);
var doc_46398 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46173_46397__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46173_46397__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_46395], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_46399], 0));

if(cljs.core.truth_(doc_46398)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_46398], 0));
} else {
}


var G__46400 = cljs.core.next(seq__46147_46387__$1);
var G__46401 = null;
var G__46402 = (0);
var G__46403 = (0);
seq__46147_46371 = G__46400;
chunk__46148_46372 = G__46401;
count__46149_46373 = G__46402;
i__46150_46374 = G__46403;
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

var seq__46175 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__46176 = null;
var count__46177 = (0);
var i__46178 = (0);
while(true){
if((i__46178 < count__46177)){
var role = chunk__46176.cljs$core$IIndexed$_nth$arity$2(null,i__46178);
var temp__5735__auto___46405__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___46405__$1)){
var spec_46406 = temp__5735__auto___46405__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_46406)], 0));
} else {
}


var G__46407 = seq__46175;
var G__46408 = chunk__46176;
var G__46409 = count__46177;
var G__46410 = (i__46178 + (1));
seq__46175 = G__46407;
chunk__46176 = G__46408;
count__46177 = G__46409;
i__46178 = G__46410;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__46175);
if(temp__5735__auto____$1){
var seq__46175__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__46175__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46175__$1);
var G__46412 = cljs.core.chunk_rest(seq__46175__$1);
var G__46413 = c__4556__auto__;
var G__46414 = cljs.core.count(c__4556__auto__);
var G__46415 = (0);
seq__46175 = G__46412;
chunk__46176 = G__46413;
count__46177 = G__46414;
i__46178 = G__46415;
continue;
} else {
var role = cljs.core.first(seq__46175__$1);
var temp__5735__auto___46416__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___46416__$2)){
var spec_46417 = temp__5735__auto___46416__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_46417)], 0));
} else {
}


var G__46418 = cljs.core.next(seq__46175__$1);
var G__46419 = null;
var G__46420 = (0);
var G__46421 = (0);
seq__46175 = G__46418;
chunk__46176 = G__46419;
count__46177 = G__46420;
i__46178 = G__46421;
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
var G__46422 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__46423 = cljs.core.ex_cause(t);
via = G__46422;
t = G__46423;
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
var map__46184 = datafied_throwable;
var map__46184__$1 = (((((!((map__46184 == null))))?(((((map__46184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46184):map__46184);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46184__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46184__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46184__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__46186 = cljs.core.last(via);
var map__46186__$1 = (((((!((map__46186 == null))))?(((((map__46186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46186):map__46186);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46186__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46186__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46186__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__46187 = data;
var map__46187__$1 = (((((!((map__46187 == null))))?(((((map__46187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46187):map__46187);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46187__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46187__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46187__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__46188 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__46188__$1 = (((((!((map__46188 == null))))?(((((map__46188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46188):map__46188);
var top_data = map__46188__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46188__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__46194 = phase;
var G__46194__$1 = (((G__46194 instanceof cljs.core.Keyword))?G__46194.fqn:null);
switch (G__46194__$1) {
case "read-source":
var map__46195 = data;
var map__46195__$1 = (((((!((map__46195 == null))))?(((((map__46195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46195):map__46195);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46195__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46195__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__46197 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__46197__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46197,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__46197);
var G__46197__$2 = (cljs.core.truth_((function (){var fexpr__46198 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__46198.cljs$core$IFn$_invoke$arity$1 ? fexpr__46198.cljs$core$IFn$_invoke$arity$1(source) : fexpr__46198.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__46197__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__46197__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46197__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__46197__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__46199 = top_data;
var G__46199__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46199,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__46199);
var G__46199__$2 = (cljs.core.truth_((function (){var fexpr__46200 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__46200.cljs$core$IFn$_invoke$arity$1 ? fexpr__46200.cljs$core$IFn$_invoke$arity$1(source) : fexpr__46200.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__46199__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__46199__$1);
var G__46199__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46199__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__46199__$2);
var G__46199__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46199__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__46199__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46199__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__46199__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__46201 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46201,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46201,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46201,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46201,(3),null);
var G__46204 = top_data;
var G__46204__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46204,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__46204);
var G__46204__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46204__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__46204__$1);
var G__46204__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46204__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__46204__$2);
var G__46204__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46204__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__46204__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46204__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__46204__$4;
}

break;
case "execution":
var vec__46205 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46205,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46205,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46205,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46205,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__46183_SHARP_){
var or__4126__auto__ = (p1__46183_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__46209 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__46209.cljs$core$IFn$_invoke$arity$1 ? fexpr__46209.cljs$core$IFn$_invoke$arity$1(p1__46183_SHARP_) : fexpr__46209.call(null,p1__46183_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__46210 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__46210__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46210,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__46210);
var G__46210__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46210__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__46210__$1);
var G__46210__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46210__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__46210__$2);
var G__46210__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46210__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__46210__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46210__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__46210__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46194__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__46230){
var map__46231 = p__46230;
var map__46231__$1 = (((((!((map__46231 == null))))?(((((map__46231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46231):map__46231);
var triage_data = map__46231__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46231__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46231__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46231__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46231__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46231__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46231__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46231__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46231__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__46240 = phase;
var G__46240__$1 = (((G__46240 instanceof cljs.core.Keyword))?G__46240.fqn:null);
switch (G__46240__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__46246 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__46247 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46248 = loc;
var G__46249 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__46259_46435 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__46260_46436 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__46261_46437 = true;
var _STAR_print_fn_STAR__temp_val__46262_46438 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46261_46437);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46262_46438);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46228_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__46228_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46260_46436);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46259_46435);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__46246,G__46247,G__46248,G__46249) : format.call(null,G__46246,G__46247,G__46248,G__46249));

break;
case "macroexpansion":
var G__46278 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__46279 = cause_type;
var G__46280 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46281 = loc;
var G__46282 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46278,G__46279,G__46280,G__46281,G__46282) : format.call(null,G__46278,G__46279,G__46280,G__46281,G__46282));

break;
case "compile-syntax-check":
var G__46292 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__46293 = cause_type;
var G__46294 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46295 = loc;
var G__46296 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46292,G__46293,G__46294,G__46295,G__46296) : format.call(null,G__46292,G__46293,G__46294,G__46295,G__46296));

break;
case "compilation":
var G__46297 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__46298 = cause_type;
var G__46299 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46300 = loc;
var G__46301 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46297,G__46298,G__46299,G__46300,G__46301) : format.call(null,G__46297,G__46298,G__46299,G__46300,G__46301));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__46302 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__46303 = symbol;
var G__46304 = loc;
var G__46305 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__46306_46439 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__46307_46440 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__46308_46441 = true;
var _STAR_print_fn_STAR__temp_val__46309_46442 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46308_46441);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46309_46442);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46229_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__46229_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46307_46440);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46306_46439);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__46302,G__46303,G__46304,G__46305) : format.call(null,G__46302,G__46303,G__46304,G__46305));
} else {
var G__46317 = "Execution error%s at %s(%s).\n%s\n";
var G__46318 = cause_type;
var G__46319 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46320 = loc;
var G__46321 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46317,G__46318,G__46319,G__46320,G__46321) : format.call(null,G__46317,G__46318,G__46319,G__46320,G__46321));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46240__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
