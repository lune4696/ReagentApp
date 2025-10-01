goog.provide('app.hello');
var module$node_modules$plotly_DOT_js_dist_min$plotly_min=shadow.js.require("module$node_modules$plotly_DOT_js_dist_min$plotly_min", {});
var module$node_modules$three$build$three_cjs=shadow.js.require("module$node_modules$three$build$three_cjs", {});
var module$node_modules$three$examples$jsm$controls$OrbitControls=shadow.js.require("module$node_modules$three$examples$jsm$controls$OrbitControls", {});
app.hello.click_counter = (function app$hello$click_counter(c){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"The atom ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"click-count"], null)," has value: ",cljs.core.deref(c),". ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Click me!",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.inc);
})], null)], null)], null);
});
app.hello.click_count = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
app.hello.counters = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0)),reagent.core.atom.cljs$core$IFn$_invoke$arity$1((1)),reagent.core.atom.cljs$core$IFn$_invoke$arity$1((2))], null);
/**
 * コレクションの各要素にコンポーネントを返却する関数 f を適用したうえで、react key を付与
 */
app.hello.map_with_key = (function app$hello$map_with_key(f,coll){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,c){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,c], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
}),coll);
});
/**
 * リスト
 */
app.hello.lister_simple = (function app$hello$lister_simple(items){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,c){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Item: ",c], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
}),items)], null);
});
app.hello.timer_fn_component = (function app$hello$timer_fn_component(){
var with_let42403 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let42403","with-let42403",-2130881941));
var temp__5739__auto___42464 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___42464 == null)){
} else {
var c__34580__auto___42465 = temp__5739__auto___42464;
if((with_let42403.generation === c__34580__auto___42465.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let42403.generation = c__34580__auto___42465.ratomGeneration);
}

var init42404 = (with_let42403.length === (0));
var seconds_elapsed = ((((init42404) || (cljs.core.not(with_let42403.hasOwnProperty((0))))))?(with_let42403[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0))):(with_let42403[(0)]));
var res42405 = (function (){
setTimeout((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(seconds_elapsed,cljs.core.inc);
}),(1000));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Seconds Elapsed: ",cljs.core.deref(seconds_elapsed)], null);
})()
;
return res42405;
});
app.hello.atom_input = (function app$hello$atom_input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__42406_SHARP_){
return cljs.core.reset_BANG_(value,p1__42406_SHARP_.target.value);
})], null)], null);
});
app.hello.shared_state = (function app$hello$shared_state(){
var val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("foo");
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The value is now: ",cljs.core.deref(val),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"Change it here: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.hello.atom_input,val], null)], null)], null);
});
});
app.hello.calc_bmi = (function app$hello$calc_bmi(p__42407){
var map__42408 = p__42407;
var map__42408__$1 = (((((!((map__42408 == null))))?(((((map__42408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42408):map__42408);
var data = map__42408__$1;
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42408__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42408__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var bmi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42408__$1,new cljs.core.Keyword(null,"bmi","bmi",1421979636));
var h = (height / (100));
if((bmi == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"bmi","bmi",1421979636),(weight / (h * h)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"weight","weight",-1262796205),((bmi * h) * h));
}
});
app.hello.bmi_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(app.hello.calc_bmi(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(100),new cljs.core.Keyword(null,"weight","weight",-1262796205),(80)], null)));
app.hello.slider = (function app$hello$slider(param,value,min,max,invalidates){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var new_value = parseInt(e.target.value);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.hello.bmi_data,(function (data){
return app.hello.calc_bmi(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,param,new_value),invalidates));
}));
})], null)], null);
});
app.hello.bmi_component = (function app$hello$bmi_component(){
var map__42410 = cljs.core.deref(app.hello.bmi_data);
var map__42410__$1 = (((((!((map__42410 == null))))?(((((map__42410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42410):map__42410);
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42410__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42410__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var bmi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42410__$1,new cljs.core.Keyword(null,"bmi","bmi",1421979636));
var vec__42411 = (((bmi < 18.5))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange","underweight"], null):(((bmi < (25)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inherit","normal"], null):(((bmi < (30)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange","overweight"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","obese"], null)
)));
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42411,(0),null);
var diagnose = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42411,(1),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"BMI calculator"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Height: ",(height | (0)),"cm",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.hello.slider,new cljs.core.Keyword(null,"height","height",1025178622),height,(100),(220),new cljs.core.Keyword(null,"bmi","bmi",1421979636)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Weight: ",(weight | (0)),"kg",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.hello.slider,new cljs.core.Keyword(null,"weight","weight",-1262796205),weight,(30),(150),new cljs.core.Keyword(null,"bmi","bmi",1421979636)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"BMI: ",(bmi | (0))," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null),diagnose], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.hello.slider,new cljs.core.Keyword(null,"bmi","bmi",1421979636),bmi,(10),(50),new cljs.core.Keyword(null,"weight","weight",-1262796205)], null)], null)], null);
});
app.hello.plot = (function app$hello$plot(p__42415){
var map__42416 = p__42415;
var map__42416__$1 = (((((!((map__42416 == null))))?(((((map__42416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42416):map__42416);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42416__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42416__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42416__$1,new cljs.core.Keyword(null,"node","node",581201198));
var with_let42418 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let42418","with-let42418",623312180));
var temp__5739__auto___42466 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___42466 == null)){
} else {
var c__34580__auto___42467 = temp__5739__auto___42466;
if((with_let42418.generation === c__34580__auto___42467.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let42418.generation = c__34580__auto___42467.ratomGeneration);
}

var init42419 = (with_let42418.length === (0));
var f = ((((init42419) || (cljs.core.not(with_let42418.hasOwnProperty((0))))))?(with_let42418[(0)] = (function (el){
if(cljs.core.truth_(el)){
cljs.core.reset_BANG_(node,el);

return reagent.core.after_render((function (){
return module$node_modules$plotly_DOT_js_dist_min$plotly_min.newPlot(cljs.core.deref(node),cljs.core.clj__GT_js(cljs.core.deref(data)),cljs.core.clj__GT_js(cljs.core.deref(layout)));
}));
} else {
return null;
}
})):(with_let42418[(0)]));
var res42420 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),f], null)], null);
var destroy__34579__auto___42468 = (function (){
if(cljs.core.truth_(cljs.core.deref(node))){
return module$node_modules$plotly_DOT_js_dist_min$plotly_min.purge(cljs.core.deref(node));
} else {
return null;
}
});
if(reagent.ratom.reactive_QMARK_()){
if((with_let42418.destroy == null)){
(with_let42418.destroy = destroy__34579__auto___42468);
} else {
}
} else {
destroy__34579__auto___42468();
}

return res42420;
});
app.hello.update_plot = (function app$hello$update_plot(p__42422){
var map__42423 = p__42422;
var map__42423__$1 = (((((!((map__42423 == null))))?(((((map__42423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42423):map__42423);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42423__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42423__$1,new cljs.core.Keyword(null,"node","node",581201198));
cljs.core.reset_BANG_(data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.range.cljs$core$IFn$_invoke$arity$0())),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42421_SHARP_){
return ((2) * p1__42421_SHARP_);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$0())),new cljs.core.Keyword(null,"type","type",1174270348),"scatter"], null)], null));

if(cljs.core.truth_(cljs.core.deref(node))){
return module$node_modules$plotly_DOT_js_dist_min$plotly_min.react(cljs.core.deref(node),cljs.core.clj__GT_js(cljs.core.deref(data)),cljs.core.clj__GT_js(null));
} else {
return null;
}
});
app.hello.rolling_box = (function app$hello$rolling_box(p__42425){
var map__42426 = p__42425;
var map__42426__$1 = (((((!((map__42426 == null))))?(((((map__42426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42426):map__42426);
var opt = map__42426__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42426__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42426__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42426__$1,new cljs.core.Keyword(null,"ratio","ratio",-926560044),((9) / (16)));
var with_let42428 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let42428","with-let42428",230766696));
var temp__5739__auto___42469 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___42469 == null)){
} else {
var c__34580__auto___42470 = temp__5739__auto___42469;
if((with_let42428.generation === c__34580__auto___42470.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let42428.generation = c__34580__auto___42470.ratomGeneration);
}

var init42429 = (with_let42428.length === (0));
var node = ((((init42429) || (cljs.core.not(with_let42428.hasOwnProperty((0))))))?(with_let42428[(0)] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let42428[(0)]));
var scene = ((((init42429) || (cljs.core.not(with_let42428.hasOwnProperty((1))))))?(with_let42428[(1)] = (new module$node_modules$three$build$three_cjs.Scene())):(with_let42428[(1)]));
var camera = ((((init42429) || (cljs.core.not(with_let42428.hasOwnProperty((2))))))?(with_let42428[(2)] = (new module$node_modules$three$build$three_cjs.PerspectiveCamera((90),(1),0.1,(3000)))):(with_let42428[(2)]));
var renderer = ((((init42429) || (cljs.core.not(with_let42428.hasOwnProperty((3))))))?(with_let42428[(3)] = (new module$node_modules$three$build$three_cjs.WebGLRenderer(({"alpha": true})))):(with_let42428[(3)]));
var geometry = ((((init42429) || (cljs.core.not(with_let42428.hasOwnProperty((4))))))?(with_let42428[(4)] = (new module$node_modules$three$build$three_cjs.BoxGeometry((500),(500),(500)))):(with_let42428[(4)]));
var box_material = ((((init42429) || (cljs.core.not(with_let42428.hasOwnProperty((5))))))?(with_let42428[(5)] = (new module$node_modules$three$build$three_cjs.MeshStandardMaterial(({"color": (255)})))):(with_let42428[(5)]));
var color_bg = ((((init42429) || (cljs.core.not(with_let42428.hasOwnProperty((6))))))?(with_let42428[(6)] = (new module$node_modules$three$build$three_cjs.Color((8421504)))):(with_let42428[(6)]));
var box = ((((init42429) || (cljs.core.not(with_let42428.hasOwnProperty((7))))))?(with_let42428[(7)] = (new module$node_modules$three$build$three_cjs.Mesh(geometry,box_material))):(with_let42428[(7)]));
var light = ((((init42429) || (cljs.core.not(with_let42428.hasOwnProperty((8))))))?(with_let42428[(8)] = (new module$node_modules$three$build$three_cjs.DirectionalLight((16777215),(2)))):(with_let42428[(8)]));
var ambient = ((((init42429) || (cljs.core.not(with_let42428.hasOwnProperty((9))))))?(with_let42428[(9)] = (new module$node_modules$three$build$three_cjs.AmbientLight((16777215),0.5))):(with_let42428[(9)]));
var update_size = ((((init42429) || (cljs.core.not(with_let42428.hasOwnProperty((10))))))?(with_let42428[(10)] = (function (){
if(cljs.core.truth_(cljs.core.deref(node))){
var w = (function (){var or__4126__auto__ = width;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.deref(node).clientWidth;
}
})();
var h = (function (){var or__4126__auto__ = height;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (w * ratio);
}
})();
renderer.setSize(w,h);

(camera.aspect = (w / h));

return camera.updateProjectionMatrix();
} else {
return null;
}
})):(with_let42428[(10)]));
var f = ((((init42429) || (cljs.core.not(with_let42428.hasOwnProperty((11))))))?(with_let42428[(11)] = (function (el){
if(cljs.core.truth_(el)){
cljs.core.reset_BANG_(node,el);
} else {
}

return reagent.core.after_render((function (){
if(cljs.core.truth_(cljs.core.deref(node))){
if(cljs.core.truth_(cljs.core.deref(node).contains(renderer.domElement))){
} else {
cljs.core.deref(node).appendChild(renderer.domElement);
}

var width__$1 = (function (){var or__4126__auto__ = width;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.deref(node).clientWidth;
}
})();
var height__$1 = (function (){var or__4126__auto__ = height;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (width__$1 * ratio);
}
})();
var controls = (new module$node_modules$three$examples$jsm$controls$OrbitControls.OrbitControls(camera,renderer.domElement));
(update_size.cljs$core$IFn$_invoke$arity$0 ? update_size.cljs$core$IFn$_invoke$arity$0() : update_size.call(null));

window.addEventListener("resize",update_size);

renderer.setPixelRatio(devicePixelRatio);

renderer.setClearColor((0),(0));

camera.position.set((0),(0),(1000));

scene.add(box);

scene.add(light);

scene.add(ambient);

light.position.set((1),(1),(1));

renderer.render(scene,camera);

var tick = (function app$hello$rolling_box_$_tick(){
requestAnimationFrame(app$hello$rolling_box_$_tick);

(box.rotation.x = (box.rotation.x + 0.01));

(box.rotation.y = (box.rotation.y + 0.01));

controls.update();

return renderer.render(scene,camera);
});
return tick();
} else {
return null;
}
}));
})):(with_let42428[(11)]));
var res42430 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),f], null)], null);
var destroy__34579__auto___42471 = (function (){
if(cljs.core.truth_(cljs.core.deref(node))){
cljs.core.deref(node).removeChild(renderer.domElement);

return window.removeEventListener("resize",update_size);
} else {
return null;
}
});
if(reagent.ratom.reactive_QMARK_()){
if((with_let42428.destroy == null)){
(with_let42428.destroy = destroy__34579__auto___42471);
} else {
}
} else {
destroy__34579__auto___42471();
}

return res42430;
});
app.hello.sphere_three = (function app$hello$sphere_three(p__42431){
var map__42432 = p__42431;
var map__42432__$1 = (((((!((map__42432 == null))))?(((((map__42432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42432):map__42432);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42432__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258),1.0);
var w_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42432__$1,new cljs.core.Keyword(null,"w-segments","w-segments",-169259061),(32));
var h_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42432__$1,new cljs.core.Keyword(null,"h-segments","h-segments",990564322),(16));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42432__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var geom = (new module$node_modules$three$build$three_cjs.SphereGeometry(radius,w_segments,h_segments));
var material = (new module$node_modules$three$build$three_cjs.MeshBasicMaterial(({"color": color})));
return (new module$node_modules$three$build$three_cjs.Mesh(geom,material));
});
app.hello.hand_joint_three = (function app$hello$hand_joint_three(p__42434){
var map__42435 = p__42434;
var map__42435__$1 = (((((!((map__42435 == null))))?(((((map__42435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42435):map__42435);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42435__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42435__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var xyz = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42435__$1,new cljs.core.Keyword(null,"xyz","xyz",-1605570015));
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__42437){
var vec__42438 = p__42437;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42438,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42438,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42438,(2),null);
var mesh = app.hello.sphere_three(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"radius","radius",-2073122258),radius,new cljs.core.Keyword(null,"color","color",1011675173),color], null));
mesh.position.set(x,y,z);

return mesh;
}),cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((3),xyz)));
});
app.hello.line_three = (function app$hello$line_three(p1,p2,p__42441){
var map__42442 = p__42441;
var map__42442__$1 = (((((!((map__42442 == null))))?(((((map__42442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42442):map__42442);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42442__$1,new cljs.core.Keyword(null,"color","color",1011675173),(16711680));
var points = cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,p2], null));
var geom = (new module$node_modules$three$build$three_cjs.BufferGeometry());
geom.setFromPoints(points);

return (new module$node_modules$three$build$three_cjs.Line(geom,(new module$node_modules$three$build$three_cjs.LineBasicMaterial(({"color": color})))));
});
app.hello.hand_bone_three = (function app$hello$hand_bone_three(spheres,bones,color){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__42444){
var vec__42445 = p__42444;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42445,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42445,(1),null);
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(spheres,i).position;
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(spheres,j).position;
return app.hello.line_three(p1,p2,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),color], null));
}),bones);
});
app.hello.hand_bones = new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(17)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(9)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(13)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(11)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13),(14)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13),(17)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(14),(15)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),(16)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(17),(18)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(18),(19)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(19),(20)], null)], null);
app.hello.hand = (function app$hello$hand(p__42448){
var map__42449 = p__42448;
var map__42449__$1 = (((((!((map__42449 == null))))?(((((map__42449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42449):map__42449);
var opt = map__42449__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42449__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42449__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42449__$1,new cljs.core.Keyword(null,"ratio","ratio",-926560044),((9) / (16)));
var hand_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42449__$1,new cljs.core.Keyword(null,"hand-pos","hand-pos",-1218301989));
var with_let42451 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let42451","with-let42451",1620238269));
var temp__5739__auto___42472 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___42472 == null)){
} else {
var c__34580__auto___42473 = temp__5739__auto___42472;
if((with_let42451.generation === c__34580__auto___42473.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let42451.generation = c__34580__auto___42473.ratomGeneration);
}

var init42452 = (with_let42451.length === (0));
var node = ((((init42452) || (cljs.core.not(with_let42451.hasOwnProperty((0))))))?(with_let42451[(0)] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let42451[(0)]));
var scene = ((((init42452) || (cljs.core.not(with_let42451.hasOwnProperty((1))))))?(with_let42451[(1)] = (new module$node_modules$three$build$three_cjs.Scene())):(with_let42451[(1)]));
var camera = ((((init42452) || (cljs.core.not(with_let42451.hasOwnProperty((2))))))?(with_let42451[(2)] = (new module$node_modules$three$build$three_cjs.PerspectiveCamera((90),(1),0.1,(1000)))):(with_let42451[(2)]));
var renderer = ((((init42452) || (cljs.core.not(with_let42451.hasOwnProperty((3))))))?(with_let42451[(3)] = (new module$node_modules$three$build$three_cjs.WebGLRenderer(({"alpha": true})))):(with_let42451[(3)]));
var hand_joints = ((((init42452) || (cljs.core.not(with_let42451.hasOwnProperty((4))))))?(with_let42451[(4)] = app.hello.hand_joint_three(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"radius","radius",-2073122258),0.025,new cljs.core.Keyword(null,"color","color",1011675173),(65280),new cljs.core.Keyword(null,"xyz","xyz",-1605570015),hand_pos], null))):(with_let42451[(4)]));
var hand_lines = ((((init42452) || (cljs.core.not(with_let42451.hasOwnProperty((5))))))?(with_let42451[(5)] = app.hello.hand_bone_three(hand_joints,app.hello.hand_bones,(16711680))):(with_let42451[(5)]));
var light = ((((init42452) || (cljs.core.not(with_let42451.hasOwnProperty((6))))))?(with_let42451[(6)] = (new module$node_modules$three$build$three_cjs.DirectionalLight((16777215),(2)))):(with_let42451[(6)]));
var ambient = ((((init42452) || (cljs.core.not(with_let42451.hasOwnProperty((7))))))?(with_let42451[(7)] = (new module$node_modules$three$build$three_cjs.AmbientLight((16777215),0.5))):(with_let42451[(7)]));
var update_size = ((((init42452) || (cljs.core.not(with_let42451.hasOwnProperty((8))))))?(with_let42451[(8)] = (function (){
if(cljs.core.truth_(cljs.core.deref(node))){
var w = (function (){var or__4126__auto__ = width;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.deref(node).clientWidth;
}
})();
var h = (function (){var or__4126__auto__ = height;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (w * ratio);
}
})();
renderer.setSize(w,h);

(camera.aspect = (w / h));

return camera.updateProjectionMatrix();
} else {
return null;
}
})):(with_let42451[(8)]));
var f = ((((init42452) || (cljs.core.not(with_let42451.hasOwnProperty((9))))))?(with_let42451[(9)] = (function (el){
if(cljs.core.truth_(el)){
cljs.core.reset_BANG_(node,el);
} else {
}

return reagent.core.after_render((function (){
if(cljs.core.truth_(cljs.core.deref(node))){
if(cljs.core.truth_(cljs.core.deref(node).contains(renderer.domElement))){
} else {
cljs.core.deref(node).appendChild(renderer.domElement);
}

var width__$1 = (function (){var or__4126__auto__ = width;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.deref(node).clientWidth;
}
})();
var height__$1 = (function (){var or__4126__auto__ = height;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (width__$1 * ratio);
}
})();
var controls = (new module$node_modules$three$examples$jsm$controls$OrbitControls.OrbitControls(camera,renderer.domElement));
(update_size.cljs$core$IFn$_invoke$arity$0 ? update_size.cljs$core$IFn$_invoke$arity$0() : update_size.call(null));

window.addEventListener("resize",update_size);

renderer.setPixelRatio(devicePixelRatio);

renderer.setClearColor((0),(0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(hand_joints)], 0));

var seq__42454_42474 = cljs.core.seq(hand_joints);
var chunk__42455_42475 = null;
var count__42456_42476 = (0);
var i__42457_42477 = (0);
while(true){
if((i__42457_42477 < count__42456_42476)){
var a_42478 = chunk__42455_42475.cljs$core$IIndexed$_nth$arity$2(null,i__42457_42477);
scene.add(a_42478);


var G__42479 = seq__42454_42474;
var G__42480 = chunk__42455_42475;
var G__42481 = count__42456_42476;
var G__42482 = (i__42457_42477 + (1));
seq__42454_42474 = G__42479;
chunk__42455_42475 = G__42480;
count__42456_42476 = G__42481;
i__42457_42477 = G__42482;
continue;
} else {
var temp__5735__auto___42483 = cljs.core.seq(seq__42454_42474);
if(temp__5735__auto___42483){
var seq__42454_42484__$1 = temp__5735__auto___42483;
if(cljs.core.chunked_seq_QMARK_(seq__42454_42484__$1)){
var c__4556__auto___42485 = cljs.core.chunk_first(seq__42454_42484__$1);
var G__42486 = cljs.core.chunk_rest(seq__42454_42484__$1);
var G__42487 = c__4556__auto___42485;
var G__42488 = cljs.core.count(c__4556__auto___42485);
var G__42489 = (0);
seq__42454_42474 = G__42486;
chunk__42455_42475 = G__42487;
count__42456_42476 = G__42488;
i__42457_42477 = G__42489;
continue;
} else {
var a_42490 = cljs.core.first(seq__42454_42484__$1);
scene.add(a_42490);


var G__42491 = cljs.core.next(seq__42454_42484__$1);
var G__42492 = null;
var G__42493 = (0);
var G__42494 = (0);
seq__42454_42474 = G__42491;
chunk__42455_42475 = G__42492;
count__42456_42476 = G__42493;
i__42457_42477 = G__42494;
continue;
}
} else {
}
}
break;
}

var seq__42458_42495 = cljs.core.seq(hand_lines);
var chunk__42459_42496 = null;
var count__42460_42497 = (0);
var i__42461_42498 = (0);
while(true){
if((i__42461_42498 < count__42460_42497)){
var a_42499 = chunk__42459_42496.cljs$core$IIndexed$_nth$arity$2(null,i__42461_42498);
scene.add(a_42499);


var G__42500 = seq__42458_42495;
var G__42501 = chunk__42459_42496;
var G__42502 = count__42460_42497;
var G__42503 = (i__42461_42498 + (1));
seq__42458_42495 = G__42500;
chunk__42459_42496 = G__42501;
count__42460_42497 = G__42502;
i__42461_42498 = G__42503;
continue;
} else {
var temp__5735__auto___42504 = cljs.core.seq(seq__42458_42495);
if(temp__5735__auto___42504){
var seq__42458_42505__$1 = temp__5735__auto___42504;
if(cljs.core.chunked_seq_QMARK_(seq__42458_42505__$1)){
var c__4556__auto___42506 = cljs.core.chunk_first(seq__42458_42505__$1);
var G__42507 = cljs.core.chunk_rest(seq__42458_42505__$1);
var G__42508 = c__4556__auto___42506;
var G__42509 = cljs.core.count(c__4556__auto___42506);
var G__42510 = (0);
seq__42458_42495 = G__42507;
chunk__42459_42496 = G__42508;
count__42460_42497 = G__42509;
i__42461_42498 = G__42510;
continue;
} else {
var a_42511 = cljs.core.first(seq__42458_42505__$1);
scene.add(a_42511);


var G__42512 = cljs.core.next(seq__42458_42505__$1);
var G__42513 = null;
var G__42514 = (0);
var G__42515 = (0);
seq__42458_42495 = G__42512;
chunk__42459_42496 = G__42513;
count__42460_42497 = G__42514;
i__42461_42498 = G__42515;
continue;
}
} else {
}
}
break;
}

camera.position.set((0),(0),(1));

scene.add(light);

scene.add(ambient);

light.position.set((1),(1),(1));

renderer.render(scene,camera);

var tick = (function app$hello$hand_$_tick(){
requestAnimationFrame(app$hello$hand_$_tick);

controls.update();

return renderer.render(scene,camera);
});
return tick();
} else {
return null;
}
}));
})):(with_let42451[(9)]));
var res42453 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),f], null)], null);
var destroy__34579__auto___42516 = (function (){
if(cljs.core.truth_(cljs.core.deref(node))){
cljs.core.deref(node).removeChild(renderer.domElement);

return window.removeEventListener("resize",update_size);
} else {
return null;
}
});
if(reagent.ratom.reactive_QMARK_()){
if((with_let42451.destroy == null)){
(with_let42451.destroy = destroy__34579__auto___42516);
} else {
}
} else {
destroy__34579__auto___42516();
}

return res42453;
});
app.hello.data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.range.cljs$core$IFn$_invoke$arity$0())),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42462_SHARP_){
return (p1__42462_SHARP_ * p1__42462_SHARP_);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$0())),new cljs.core.Keyword(null,"type","type",1174270348),"scatter"], null)], null));
app.hello.layout = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Sample"], null));
app.hello.plot_node = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
app.hello.hand_landmark = cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indices","indices",-1218138343),cljs.core.PersistentHashMap.fromArrays([(0),(7),(20),(1),(4),(15),(13),(6),(17),(3),(12),(2),(19),(11),(9),(5),(14),(16),(10),(18),(8)],["WRIST","INDEX_FINGER_DIP","PINKY_TIP","THUMB_CMC","THUMB_TIP","RING_FINGER_DIP","RING_FINGER_MCP","INDEX_FINGER_PIP","PINKY_MCP","THUMB_IP","MIDDLE_FINGER_TIP","THUMB_MCP","PINKY_DIP","MIDDLE_FINGER_DIP","MIDDLE_FINGER_MCP","INDEX_FINGER_MCP","RING_FINGER_PIP","RING_FINGER_TIP","MIDDLE_FINGER_PIP","PINKY_PIP","INDEX_FINGER_TIP"])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"https://ai.google.dev/edge/mediapipe/solutions/vision/hand_landmarker?hl=ja"], null));
app.hello.testdata_hand = cljs.core.PersistentVector.fromArray([0.356702536,0.125448644,-3.78144911E-8,0.258442879,0.167962849,-0.0159394536,0.199230939,0.285911858,-0.0380800664,0.203225508,0.403543383,-0.0500700623,0.229443818,0.489487439,-0.0564782768,0.237581402,0.312023699,-0.12733826,0.210384965,0.530334234,-0.151995942,0.220977604,0.492553204,-0.132310286,0.229686156,0.423452169,-0.109627999,0.322596401,0.329260826,-0.124592729,0.280629992,0.570023417,-0.157182232,0.278808087,0.522696495,-0.132588208,0.288175613,0.445645958,-0.107170537,0.393074065,0.347538948,-0.115016364,0.35877648,0.564299107,-0.129306167,0.344347358,0.519447327,-0.0943925604,0.346303612,0.450459629,-0.0668169409,0.444388539,0.354201496,-0.10397286,0.41463536,0.518915653,-0.106505439,0.398395956,0.498268008,-0.080954507,0.397958905,0.446671903,-0.0599709116], true);
app.hello.current_page = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"home","home",-74557309));
app.hello.page_home = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.someclass","p.someclass",-1904646929),"Hello world, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"ReagentApp"], null)," is running!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"\u518D\u63CF\u753B"], null),"\u53EF\u80FD\u306A\u30EA\u30B9\u30C8"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.hello.lister_simple,app.hello.map_with_key(app.hello.click_counter,app.hello.counters)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"\u518D\u63CF\u753B"], null),"\u53EF\u80FD\u306A\u30EA\u30B9\u30C8"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.hello.lister_simple,cljs.core.range.cljs$core$IFn$_invoke$arity$1((3))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.hello.timer_fn_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.hello.shared_state], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.hello.bmi_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"plotly.js \u306B\u3088\u308B\u30D7\u30ED\u30C3\u30C8"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.hello.plot,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),app.hello.data,new cljs.core.Keyword(null,"layout","layout",-2120940921),app.hello.layout,new cljs.core.Keyword(null,"node","node",581201198),app.hello.plot_node], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return app.hello.update_plot(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),app.hello.data,new cljs.core.Keyword(null,"node","node",581201198),app.hello.plot_node], null));
})], null),"Update Plot"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.hello.rolling_box,cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.hello.hand,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hand-pos","hand-pos",-1218301989),app.hello.testdata_hand], null)], null)], null);
app.hello.page_plot = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.someclass","p.someclass",-1904646929),"This is ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Plot"], null)," page"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"plotly.js \u306B\u3088\u308B\u30D7\u30ED\u30C3\u30C8"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.hello.plot,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),app.hello.data,new cljs.core.Keyword(null,"layout","layout",-2120940921),app.hello.layout,new cljs.core.Keyword(null,"node","node",581201198),app.hello.plot_node], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return app.hello.update_plot(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),app.hello.data,new cljs.core.Keyword(null,"node","node",581201198),app.hello.plot_node], null));
})], null),"Update Plot"], null)], null)], null);
app.hello.rooter = (function app$hello$rooter(){
return (function (){
var G__42463 = cljs.core.deref(app.hello.current_page);
var G__42463__$1 = (((G__42463 instanceof cljs.core.Keyword))?G__42463.fqn:null);
switch (G__42463__$1) {
case "home":
return app.hello.page_home;

break;
case "plot":
return app.hello.page_plot;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42463__$1)].join('')));

}
});
});
app.hello.hello = (function app$hello$hello(){
return app.hello.rooter();
});

//# sourceMappingURL=app.hello.js.map
