goog.provide('app.box');
var module$node_modules$three$build$three_cjs=shadow.js.require("module$node_modules$three$build$three_cjs", {});
var module$node_modules$three$examples$jsm$controls$OrbitControls=shadow.js.require("module$node_modules$three$examples$jsm$controls$OrbitControls", {});
app.box.rolling_box = (function app$box$rolling_box(p__37100){
var map__37101 = p__37100;
var map__37101__$1 = (((((!((map__37101 == null))))?(((((map__37101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37101):map__37101);
var opt = map__37101__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37101__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37101__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37101__$1,new cljs.core.Keyword(null,"ratio","ratio",-926560044),((9) / (16)));
var with_let37107 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let37107","with-let37107",822599786));
var temp__5739__auto___37120 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___37120 == null)){
} else {
var c__34574__auto___37121 = temp__5739__auto___37120;
if((with_let37107.generation === c__34574__auto___37121.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let37107.generation = c__34574__auto___37121.ratomGeneration);
}

var init37108 = (with_let37107.length === (0));
var node = ((((init37108) || (cljs.core.not(with_let37107.hasOwnProperty((0))))))?(with_let37107[(0)] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let37107[(0)]));
var scene = ((((init37108) || (cljs.core.not(with_let37107.hasOwnProperty((1))))))?(with_let37107[(1)] = (new module$node_modules$three$build$three_cjs.Scene())):(with_let37107[(1)]));
var camera = ((((init37108) || (cljs.core.not(with_let37107.hasOwnProperty((2))))))?(with_let37107[(2)] = (new module$node_modules$three$build$three_cjs.PerspectiveCamera((90),(1),0.1,(3000)))):(with_let37107[(2)]));
var renderer = ((((init37108) || (cljs.core.not(with_let37107.hasOwnProperty((3))))))?(with_let37107[(3)] = (new module$node_modules$three$build$three_cjs.WebGLRenderer(({"alpha": true})))):(with_let37107[(3)]));
var light = ((((init37108) || (cljs.core.not(with_let37107.hasOwnProperty((4))))))?(with_let37107[(4)] = (new module$node_modules$three$build$three_cjs.DirectionalLight((16777215),(2)))):(with_let37107[(4)]));
var ambient = ((((init37108) || (cljs.core.not(with_let37107.hasOwnProperty((5))))))?(with_let37107[(5)] = (new module$node_modules$three$build$three_cjs.AmbientLight((16777215),0.5))):(with_let37107[(5)]));
var geometry = ((((init37108) || (cljs.core.not(with_let37107.hasOwnProperty((6))))))?(with_let37107[(6)] = (new module$node_modules$three$build$three_cjs.BoxGeometry((500),(500),(500)))):(with_let37107[(6)]));
var box_material = ((((init37108) || (cljs.core.not(with_let37107.hasOwnProperty((7))))))?(with_let37107[(7)] = (new module$node_modules$three$build$three_cjs.MeshStandardMaterial(({"color": (255)})))):(with_let37107[(7)]));
var box = ((((init37108) || (cljs.core.not(with_let37107.hasOwnProperty((8))))))?(with_let37107[(8)] = (new module$node_modules$three$build$three_cjs.Mesh(geometry,box_material))):(with_let37107[(8)]));
var f = ((((init37108) || (cljs.core.not(with_let37107.hasOwnProperty((9))))))?(with_let37107[(9)] = (function (el){
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
var update = cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(app.three.resize_view,node,width__$1,height__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ratio,renderer,camera], 0));
update();

window.addEventListener("resize",update);

app.three.init_view(scene,renderer,camera,light,ambient);

scene.add(box);

renderer.render(scene,camera);

var tick = (function app$box$rolling_box_$_tick(){
requestAnimationFrame(app$box$rolling_box_$_tick);

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
})):(with_let37107[(9)]));
var res37109 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),f], null)], null);
var destroy__34573__auto___37130 = (function (){
if(cljs.core.truth_(cljs.core.deref(node))){
cljs.core.deref(node).removeChild(renderer.domElement);

return window.removeEventListener("resize",cljs.core.update);
} else {
return null;
}
});
if(reagent.ratom.reactive_QMARK_()){
if((with_let37107.destroy == null)){
(with_let37107.destroy = destroy__34573__auto___37130);
} else {
}
} else {
destroy__34573__auto___37130();
}

return res37109;
});

//# sourceMappingURL=app.box.js.map
