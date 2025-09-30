goog.provide('app2.core');
/**
 * 0.10 以降、 reagent.core/render は reagent.dom/render に移された (React17+)
 */
app2.core.render = (function app2$core$render(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app2.hello.hello], null),document.getElementById("app2"));
});
/**
 * Run application startup logic.
 */
app2.core.main = (function app2$core$main(){
return app2.core.render();
});
goog.exportSymbol('app2.core.main', app2.core.main);

//# sourceMappingURL=app2.core.js.map
