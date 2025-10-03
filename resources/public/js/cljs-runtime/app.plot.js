goog.provide('app.plot');
var module$node_modules$plotly_DOT_js_dist_min$plotly_min=shadow.js.require("module$node_modules$plotly_DOT_js_dist_min$plotly_min", {});
app.plot.plot = (function app$plot$plot(p__34614){
var map__34618 = p__34614;
var map__34618__$1 = (((((!((map__34618 == null))))?(((((map__34618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34618):map__34618);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34618__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34618__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34618__$1,new cljs.core.Keyword(null,"node","node",581201198));
var with_let34628 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let34628","with-let34628",879390294));
var temp__5739__auto___34652 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___34652 == null)){
} else {
var c__34574__auto___34653 = temp__5739__auto___34652;
if((with_let34628.generation === c__34574__auto___34653.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let34628.generation = c__34574__auto___34653.ratomGeneration);
}

var init34629 = (with_let34628.length === (0));
var f = ((((init34629) || (cljs.core.not(with_let34628.hasOwnProperty((0))))))?(with_let34628[(0)] = (function (el){
if(cljs.core.truth_(el)){
cljs.core.reset_BANG_(node,el);

return reagent.core.after_render((function (){
return module$node_modules$plotly_DOT_js_dist_min$plotly_min.newPlot(cljs.core.deref(node),cljs.core.clj__GT_js(cljs.core.deref(data)),cljs.core.clj__GT_js(cljs.core.deref(layout)));
}));
} else {
return null;
}
})):(with_let34628[(0)]));
var res34630 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),f], null)], null);
var destroy__34573__auto___34654 = (function (){
if(cljs.core.truth_(cljs.core.deref(node))){
return module$node_modules$plotly_DOT_js_dist_min$plotly_min.purge(cljs.core.deref(node));
} else {
return null;
}
});
if(reagent.ratom.reactive_QMARK_()){
if((with_let34628.destroy == null)){
(with_let34628.destroy = destroy__34573__auto___34654);
} else {
}
} else {
destroy__34573__auto___34654();
}

return res34630;
});
app.plot.update_plot = (function app$plot$update_plot(p__34640){
var map__34641 = p__34640;
var map__34641__$1 = (((((!((map__34641 == null))))?(((((map__34641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34641):map__34641);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34641__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34641__$1,new cljs.core.Keyword(null,"node","node",581201198));
cljs.core.reset_BANG_(data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.range.cljs$core$IFn$_invoke$arity$0())),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34639_SHARP_){
return ((2) * p1__34639_SHARP_);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$0())),new cljs.core.Keyword(null,"type","type",1174270348),"scatter"], null)], null));

if(cljs.core.truth_(cljs.core.deref(node))){
return module$node_modules$plotly_DOT_js_dist_min$plotly_min.react(cljs.core.deref(node),cljs.core.clj__GT_js(cljs.core.deref(data)),cljs.core.clj__GT_js(null));
} else {
return null;
}
});

//# sourceMappingURL=app.plot.js.map
