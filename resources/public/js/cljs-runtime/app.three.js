goog.provide('app.three');
var module$node_modules$three$build$three_cjs=shadow.js.require("module$node_modules$three$build$three_cjs", {});
/**
 * 画面のリサイズを行う
 */
app.three.resize_view = (function app$three$resize_view(node,width,height,ratio,renderer,camera){
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
});
/**
 * 画面の基本的な初期設定を行う関数
 */
app.three.init_view = (function app$three$init_view(scene,renderer,camera,light,ambient){
renderer.setPixelRatio(devicePixelRatio);

renderer.setClearColor((0),(0));

camera.position.set((0),(0),(1000));

scene.add(light);

scene.add(ambient);

return light.position.set((1),(1),(1));
});
app.three.sphere_three = (function app$three$sphere_three(p__43437){
var map__43439 = p__43437;
var map__43439__$1 = (((((!((map__43439 == null))))?(((((map__43439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43439):map__43439);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43439__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258),1.0);
var w_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43439__$1,new cljs.core.Keyword(null,"w-segments","w-segments",-169259061),(32));
var h_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43439__$1,new cljs.core.Keyword(null,"h-segments","h-segments",990564322),(16));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43439__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var geom = (new module$node_modules$three$build$three_cjs.SphereGeometry(radius,w_segments,h_segments));
var material = (new module$node_modules$three$build$three_cjs.MeshBasicMaterial(({"color": color})));
return (new module$node_modules$three$build$three_cjs.Mesh(geom,material));
});
app.three.line_three = (function app$three$line_three(p1,p2,p__43446){
var map__43447 = p__43446;
var map__43447__$1 = (((((!((map__43447 == null))))?(((((map__43447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43447):map__43447);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43447__$1,new cljs.core.Keyword(null,"color","color",1011675173),(16711680));
var points = cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,p2], null));
var geom = (new module$node_modules$three$build$three_cjs.BufferGeometry());
geom.setFromPoints(points);

return (new module$node_modules$three$build$three_cjs.Line(geom,(new module$node_modules$three$build$three_cjs.LineBasicMaterial(({"color": color})))));
});
app.three.repos = (function app$three$repos(target,p__43471){
var vec__43473 = p__43471;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43473,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43473,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43473,(2),null);
return target.position.set(x,y,z);
});

//# sourceMappingURL=app.three.js.map
