goog.provide('app.core');
/**
 * 0.10 以降、 reagent.core/render は reagent.dom/render に移された (React17+)
 */
app.core.render = (function app$core$render(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.hello.hello], null),document.getElementById("app"));
});
/**
 * Run application startup logic.
 */
app.core.main = (function app$core$main(){
return app.core.render();
});
goog.exportSymbol('app.core.main', app.core.main);

//# sourceMappingURL=app.core.js.map
