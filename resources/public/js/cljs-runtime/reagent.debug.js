goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__38433__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__38433 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38436__i = 0, G__38436__a = new Array(arguments.length -  0);
while (G__38436__i < G__38436__a.length) {G__38436__a[G__38436__i] = arguments[G__38436__i + 0]; ++G__38436__i;}
  args = new cljs.core.IndexedSeq(G__38436__a,0,null);
} 
return G__38433__delegate.call(this,args);};
G__38433.cljs$lang$maxFixedArity = 0;
G__38433.cljs$lang$applyTo = (function (arglist__38437){
var args = cljs.core.seq(arglist__38437);
return G__38433__delegate(args);
});
G__38433.cljs$core$IFn$_invoke$arity$variadic = G__38433__delegate;
return G__38433;
})()
);

(o.error = (function() { 
var G__38438__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__38438 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38441__i = 0, G__38441__a = new Array(arguments.length -  0);
while (G__38441__i < G__38441__a.length) {G__38441__a[G__38441__i] = arguments[G__38441__i + 0]; ++G__38441__i;}
  args = new cljs.core.IndexedSeq(G__38441__a,0,null);
} 
return G__38438__delegate.call(this,args);};
G__38438.cljs$lang$maxFixedArity = 0;
G__38438.cljs$lang$applyTo = (function (arglist__38442){
var args = cljs.core.seq(arglist__38442);
return G__38438__delegate(args);
});
G__38438.cljs$core$IFn$_invoke$arity$variadic = G__38438__delegate;
return G__38438;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
