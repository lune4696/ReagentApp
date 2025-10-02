goog.provide('app.plot');
var module$node_modules$plotly_DOT_js_dist_min$plotly_min=shadow.js.require("module$node_modules$plotly_DOT_js_dist_min$plotly_min", {});
app.plot.plot = (function app$plot$plot(p__47983){
var map__47984 = p__47983;
var map__47984__$1 = (((((!((map__47984 == null))))?(((((map__47984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47984):map__47984);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47984__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47984__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47984__$1,new cljs.core.Keyword(null,"node","node",581201198));
var with_let47986 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let47986","with-let47986",-1398890003));
var temp__5739__auto___47993 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___47993 == null)){
} else {
var c__38041__auto___47994 = temp__5739__auto___47993;
if((with_let47986.generation === c__38041__auto___47994.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let47986.generation = c__38041__auto___47994.ratomGeneration);
}

var init47987 = (with_let47986.length === (0));
var f = ((((init47987) || (cljs.core.not(with_let47986.hasOwnProperty((0))))))?(with_let47986[(0)] = (function (el){
if(cljs.core.truth_(el)){
cljs.core.reset_BANG_(node,el);

return reagent.core.after_render((function (){
return module$node_modules$plotly_DOT_js_dist_min$plotly_min.newPlot(cljs.core.deref(node),cljs.core.clj__GT_js(cljs.core.deref(data)),cljs.core.clj__GT_js(cljs.core.deref(layout)));
}));
} else {
return null;
}
})):(with_let47986[(0)]));
var res47988 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),f], null)], null);
var destroy__38040__auto___47995 = (function (){
if(cljs.core.truth_(cljs.core.deref(node))){
return module$node_modules$plotly_DOT_js_dist_min$plotly_min.purge(cljs.core.deref(node));
} else {
return null;
}
});
if(reagent.ratom.reactive_QMARK_()){
if((with_let47986.destroy == null)){
(with_let47986.destroy = destroy__38040__auto___47995);
} else {
}
} else {
destroy__38040__auto___47995();
}

return res47988;
});
app.plot.update_plot = (function app$plot$update_plot(p__47990){
var map__47991 = p__47990;
var map__47991__$1 = (((((!((map__47991 == null))))?(((((map__47991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47991):map__47991);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47991__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47991__$1,new cljs.core.Keyword(null,"node","node",581201198));
cljs.core.reset_BANG_(data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.range.cljs$core$IFn$_invoke$arity$0())),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47989_SHARP_){
return ((2) * p1__47989_SHARP_);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$0())),new cljs.core.Keyword(null,"type","type",1174270348),"scatter"], null)], null));

if(cljs.core.truth_(cljs.core.deref(node))){
return module$node_modules$plotly_DOT_js_dist_min$plotly_min.react(cljs.core.deref(node),cljs.core.clj__GT_js(cljs.core.deref(data)),cljs.core.clj__GT_js(null));
} else {
return null;
}
});

//# sourceMappingURL=app.plot.js.map
