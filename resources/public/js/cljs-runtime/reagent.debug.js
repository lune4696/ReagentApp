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
var G__41713__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__41713 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41715__i = 0, G__41715__a = new Array(arguments.length -  0);
while (G__41715__i < G__41715__a.length) {G__41715__a[G__41715__i] = arguments[G__41715__i + 0]; ++G__41715__i;}
  args = new cljs.core.IndexedSeq(G__41715__a,0,null);
} 
return G__41713__delegate.call(this,args);};
G__41713.cljs$lang$maxFixedArity = 0;
G__41713.cljs$lang$applyTo = (function (arglist__41716){
var args = cljs.core.seq(arglist__41716);
return G__41713__delegate(args);
});
G__41713.cljs$core$IFn$_invoke$arity$variadic = G__41713__delegate;
return G__41713;
})()
);

(o.error = (function() { 
var G__41718__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__41718 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41719__i = 0, G__41719__a = new Array(arguments.length -  0);
while (G__41719__i < G__41719__a.length) {G__41719__a[G__41719__i] = arguments[G__41719__i + 0]; ++G__41719__i;}
  args = new cljs.core.IndexedSeq(G__41719__a,0,null);
} 
return G__41718__delegate.call(this,args);};
G__41718.cljs$lang$maxFixedArity = 0;
G__41718.cljs$lang$applyTo = (function (arglist__41721){
var args = cljs.core.seq(arglist__41721);
return G__41718__delegate(args);
});
G__41718.cljs$core$IFn$_invoke$arity$variadic = G__41718__delegate;
return G__41718;
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
