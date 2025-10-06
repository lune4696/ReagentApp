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
var G__41117__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__41117 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41118__i = 0, G__41118__a = new Array(arguments.length -  0);
while (G__41118__i < G__41118__a.length) {G__41118__a[G__41118__i] = arguments[G__41118__i + 0]; ++G__41118__i;}
  args = new cljs.core.IndexedSeq(G__41118__a,0,null);
} 
return G__41117__delegate.call(this,args);};
G__41117.cljs$lang$maxFixedArity = 0;
G__41117.cljs$lang$applyTo = (function (arglist__41120){
var args = cljs.core.seq(arglist__41120);
return G__41117__delegate(args);
});
G__41117.cljs$core$IFn$_invoke$arity$variadic = G__41117__delegate;
return G__41117;
})()
);

(o.error = (function() { 
var G__41121__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__41121 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41122__i = 0, G__41122__a = new Array(arguments.length -  0);
while (G__41122__i < G__41122__a.length) {G__41122__a[G__41122__i] = arguments[G__41122__i + 0]; ++G__41122__i;}
  args = new cljs.core.IndexedSeq(G__41122__a,0,null);
} 
return G__41121__delegate.call(this,args);};
G__41121.cljs$lang$maxFixedArity = 0;
G__41121.cljs$lang$applyTo = (function (arglist__41123){
var args = cljs.core.seq(arglist__41123);
return G__41121__delegate(args);
});
G__41121.cljs$core$IFn$_invoke$arity$variadic = G__41121__delegate;
return G__41121;
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
