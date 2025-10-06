goog.provide('app.plot');
var module$node_modules$plotly_DOT_js_dist_min$plotly_min=shadow.js.require("module$node_modules$plotly_DOT_js_dist_min$plotly_min", {});
app.plot.plot = (function app$plot$plot(p__44022){
var map__44023 = p__44022;
var map__44023__$1 = (((((!((map__44023 == null))))?(((((map__44023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44023):map__44023);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44023__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44023__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44023__$1,new cljs.core.Keyword(null,"node","node",581201198));
var with_let44032 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let44032","with-let44032",-1974914004));
var temp__5739__auto___44061 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___44061 == null)){
} else {
var c__42143__auto___44062 = temp__5739__auto___44061;
if((with_let44032.generation === c__42143__auto___44062.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let44032.generation = c__42143__auto___44062.ratomGeneration);
}

var init44033 = (with_let44032.length === (0));
var f = ((((init44033) || (cljs.core.not(with_let44032.hasOwnProperty((0))))))?(with_let44032[(0)] = (function (el){
if(cljs.core.truth_(el)){
cljs.core.reset_BANG_(node,el);

return reagent.core.after_render((function (){
return module$node_modules$plotly_DOT_js_dist_min$plotly_min.newPlot(cljs.core.deref(node),cljs.core.clj__GT_js(cljs.core.deref(data)),cljs.core.clj__GT_js(cljs.core.deref(layout)));
}));
} else {
return null;
}
})):(with_let44032[(0)]));
var res44044 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),f], null)], null);
var destroy__42142__auto___44083 = (function (){
if(cljs.core.truth_(cljs.core.deref(node))){
return module$node_modules$plotly_DOT_js_dist_min$plotly_min.purge(cljs.core.deref(node));
} else {
return null;
}
});
if(reagent.ratom.reactive_QMARK_()){
if((with_let44032.destroy == null)){
(with_let44032.destroy = destroy__42142__auto___44083);
} else {
}
} else {
destroy__42142__auto___44083();
}

return res44044;
});
app.plot.update_plot = (function app$plot$update_plot(p__44055){
var map__44056 = p__44055;
var map__44056__$1 = (((((!((map__44056 == null))))?(((((map__44056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44056):map__44056);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44056__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44056__$1,new cljs.core.Keyword(null,"node","node",581201198));
cljs.core.reset_BANG_(data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.range.cljs$core$IFn$_invoke$arity$0())),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44050_SHARP_){
return ((2) * p1__44050_SHARP_);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$0())),new cljs.core.Keyword(null,"type","type",1174270348),"scatter"], null)], null));

if(cljs.core.truth_(cljs.core.deref(node))){
return module$node_modules$plotly_DOT_js_dist_min$plotly_min.react(cljs.core.deref(node),cljs.core.clj__GT_js(cljs.core.deref(data)),cljs.core.clj__GT_js(null));
} else {
return null;
}
});

//# sourceMappingURL=app.plot.js.map
