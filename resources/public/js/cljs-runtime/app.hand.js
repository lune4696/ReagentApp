goog.provide('app.hand');
var module$node_modules$three$build$three_cjs=shadow.js.require("module$node_modules$three$build$three_cjs", {});
var module$node_modules$three$examples$jsm$controls$OrbitControls=shadow.js.require("module$node_modules$three$examples$jsm$controls$OrbitControls", {});
app.hand.hand_joint_three = (function app$hand$hand_joint_three(p__50213){
var map__50214 = p__50213;
var map__50214__$1 = (((((!((map__50214 == null))))?(((((map__50214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50214):map__50214);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50214__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50214__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var xyz = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50214__$1,new cljs.core.Keyword(null,"xyz","xyz",-1605570015));
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__50216){
var vec__50217 = p__50216;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50217,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50217,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50217,(2),null);
var mesh = app.three.sphere_three(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"radius","radius",-2073122258),radius,new cljs.core.Keyword(null,"color","color",1011675173),color], null));
mesh.position.set(x,y,z);

return mesh;
}),cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((3),xyz)));
});
app.hand.hand_bone_three = (function app$hand$hand_bone_three(spheres,bones,color){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__50220){
var vec__50221 = p__50220;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50221,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50221,(1),null);
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(spheres,i).position;
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(spheres,j).position;
return app.three.line_three(p1,p2,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),color], null));
}),bones);
});
app.hand.hand_bones = new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(17)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(9)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(13)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(11)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13),(14)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13),(17)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(14),(15)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),(16)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(17),(18)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(18),(19)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(19),(20)], null)], null);
app.hand.hand_landmark = cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indices","indices",-1218138343),cljs.core.PersistentHashMap.fromArrays([(0),(7),(20),(1),(4),(15),(13),(6),(17),(3),(12),(2),(19),(11),(9),(5),(14),(16),(10),(18),(8)],["WRIST","INDEX_FINGER_DIP","PINKY_TIP","THUMB_CMC","THUMB_TIP","RING_FINGER_DIP","RING_FINGER_MCP","INDEX_FINGER_PIP","PINKY_MCP","THUMB_IP","MIDDLE_FINGER_TIP","THUMB_MCP","PINKY_DIP","MIDDLE_FINGER_DIP","MIDDLE_FINGER_MCP","INDEX_FINGER_MCP","RING_FINGER_PIP","RING_FINGER_TIP","MIDDLE_FINGER_PIP","PINKY_PIP","INDEX_FINGER_TIP"])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"https://ai.google.dev/edge/mediapipe/solutions/vision/hand_landmarker?hl=ja"], null));
app.hand.hand_skeleton = (function app$hand$hand_skeleton(p__50224){
var map__50225 = p__50224;
var map__50225__$1 = (((((!((map__50225 == null))))?(((((map__50225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50225):map__50225);
var opt = map__50225__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50225__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50225__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50225__$1,new cljs.core.Keyword(null,"ratio","ratio",-926560044),((9) / (16)));
var hand_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50225__$1,new cljs.core.Keyword(null,"hand-pos","hand-pos",-1218301989));
var with_let50227 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let50227","with-let50227",590375154));
var temp__5739__auto___50238 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___50238 == null)){
} else {
var c__38041__auto___50239 = temp__5739__auto___50238;
if((with_let50227.generation === c__38041__auto___50239.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let50227.generation = c__38041__auto___50239.ratomGeneration);
}

var init50228 = (with_let50227.length === (0));
var node = ((((init50228) || (cljs.core.not(with_let50227.hasOwnProperty((0))))))?(with_let50227[(0)] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let50227[(0)]));
var scene = ((((init50228) || (cljs.core.not(with_let50227.hasOwnProperty((1))))))?(with_let50227[(1)] = (new module$node_modules$three$build$three_cjs.Scene())):(with_let50227[(1)]));
var camera = ((((init50228) || (cljs.core.not(with_let50227.hasOwnProperty((2))))))?(with_let50227[(2)] = (new module$node_modules$three$build$three_cjs.PerspectiveCamera((90),(1),0.1,(1000)))):(with_let50227[(2)]));
var renderer = ((((init50228) || (cljs.core.not(with_let50227.hasOwnProperty((3))))))?(with_let50227[(3)] = (new module$node_modules$three$build$three_cjs.WebGLRenderer(({"alpha": true})))):(with_let50227[(3)]));
var light = ((((init50228) || (cljs.core.not(with_let50227.hasOwnProperty((4))))))?(with_let50227[(4)] = (new module$node_modules$three$build$three_cjs.DirectionalLight((16777215),(2)))):(with_let50227[(4)]));
var ambient = ((((init50228) || (cljs.core.not(with_let50227.hasOwnProperty((5))))))?(with_let50227[(5)] = (new module$node_modules$three$build$three_cjs.AmbientLight((16777215),0.5))):(with_let50227[(5)]));
var hand_joints = ((((init50228) || (cljs.core.not(with_let50227.hasOwnProperty((6))))))?(with_let50227[(6)] = app.hand.hand_joint_three(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"radius","radius",-2073122258),0.025,new cljs.core.Keyword(null,"color","color",1011675173),(65280),new cljs.core.Keyword(null,"xyz","xyz",-1605570015),hand_pos], null))):(with_let50227[(6)]));
var hand_lines = ((((init50228) || (cljs.core.not(with_let50227.hasOwnProperty((7))))))?(with_let50227[(7)] = app.hand.hand_bone_three(hand_joints,app.hand.hand_bones,(16711680))):(with_let50227[(7)]));
var f = ((((init50228) || (cljs.core.not(with_let50227.hasOwnProperty((8))))))?(with_let50227[(8)] = (function (el){
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

camera.position.set((0),(0),(1));

var seq__50230_50244 = cljs.core.seq(hand_joints);
var chunk__50231_50245 = null;
var count__50232_50246 = (0);
var i__50233_50247 = (0);
while(true){
if((i__50233_50247 < count__50232_50246)){
var a_50248 = chunk__50231_50245.cljs$core$IIndexed$_nth$arity$2(null,i__50233_50247);
scene.add(a_50248);


var G__50249 = seq__50230_50244;
var G__50250 = chunk__50231_50245;
var G__50251 = count__50232_50246;
var G__50252 = (i__50233_50247 + (1));
seq__50230_50244 = G__50249;
chunk__50231_50245 = G__50250;
count__50232_50246 = G__50251;
i__50233_50247 = G__50252;
continue;
} else {
var temp__5735__auto___50253 = cljs.core.seq(seq__50230_50244);
if(temp__5735__auto___50253){
var seq__50230_50254__$1 = temp__5735__auto___50253;
if(cljs.core.chunked_seq_QMARK_(seq__50230_50254__$1)){
var c__4556__auto___50255 = cljs.core.chunk_first(seq__50230_50254__$1);
var G__50256 = cljs.core.chunk_rest(seq__50230_50254__$1);
var G__50257 = c__4556__auto___50255;
var G__50258 = cljs.core.count(c__4556__auto___50255);
var G__50259 = (0);
seq__50230_50244 = G__50256;
chunk__50231_50245 = G__50257;
count__50232_50246 = G__50258;
i__50233_50247 = G__50259;
continue;
} else {
var a_50260 = cljs.core.first(seq__50230_50254__$1);
scene.add(a_50260);


var G__50261 = cljs.core.next(seq__50230_50254__$1);
var G__50262 = null;
var G__50263 = (0);
var G__50264 = (0);
seq__50230_50244 = G__50261;
chunk__50231_50245 = G__50262;
count__50232_50246 = G__50263;
i__50233_50247 = G__50264;
continue;
}
} else {
}
}
break;
}

var seq__50234_50265 = cljs.core.seq(hand_lines);
var chunk__50235_50266 = null;
var count__50236_50267 = (0);
var i__50237_50268 = (0);
while(true){
if((i__50237_50268 < count__50236_50267)){
var a_50269 = chunk__50235_50266.cljs$core$IIndexed$_nth$arity$2(null,i__50237_50268);
scene.add(a_50269);


var G__50270 = seq__50234_50265;
var G__50271 = chunk__50235_50266;
var G__50272 = count__50236_50267;
var G__50273 = (i__50237_50268 + (1));
seq__50234_50265 = G__50270;
chunk__50235_50266 = G__50271;
count__50236_50267 = G__50272;
i__50237_50268 = G__50273;
continue;
} else {
var temp__5735__auto___50274 = cljs.core.seq(seq__50234_50265);
if(temp__5735__auto___50274){
var seq__50234_50275__$1 = temp__5735__auto___50274;
if(cljs.core.chunked_seq_QMARK_(seq__50234_50275__$1)){
var c__4556__auto___50277 = cljs.core.chunk_first(seq__50234_50275__$1);
var G__50278 = cljs.core.chunk_rest(seq__50234_50275__$1);
var G__50279 = c__4556__auto___50277;
var G__50280 = cljs.core.count(c__4556__auto___50277);
var G__50281 = (0);
seq__50234_50265 = G__50278;
chunk__50235_50266 = G__50279;
count__50236_50267 = G__50280;
i__50237_50268 = G__50281;
continue;
} else {
var a_50284 = cljs.core.first(seq__50234_50275__$1);
scene.add(a_50284);


var G__50285 = cljs.core.next(seq__50234_50275__$1);
var G__50286 = null;
var G__50287 = (0);
var G__50288 = (0);
seq__50234_50265 = G__50285;
chunk__50235_50266 = G__50286;
count__50236_50267 = G__50287;
i__50237_50268 = G__50288;
continue;
}
} else {
}
}
break;
}

renderer.render(scene,camera);

var tick = (function app$hand$hand_skeleton_$_tick(){
requestAnimationFrame(app$hand$hand_skeleton_$_tick);

controls.update();

return renderer.render(scene,camera);
});
return tick();
} else {
return null;
}
}));
})):(with_let50227[(8)]));
var res50229 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),f], null)], null);
var destroy__38040__auto___50289 = (function (){
if(cljs.core.truth_(cljs.core.deref(node))){
cljs.core.deref(node).removeChild(renderer.domElement);

return window.removeEventListener("resize",cljs.core.update);
} else {
return null;
}
});
if(reagent.ratom.reactive_QMARK_()){
if((with_let50227.destroy == null)){
(with_let50227.destroy = destroy__38040__auto___50289);
} else {
}
} else {
destroy__38040__auto___50289();
}

return res50229;
});

//# sourceMappingURL=app.hand.js.map
