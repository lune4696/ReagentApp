goog.provide('app.hand');
var module$node_modules$three$build$three_cjs=shadow.js.require("module$node_modules$three$build$three_cjs", {});
var module$node_modules$three$examples$jsm$controls$OrbitControls=shadow.js.require("module$node_modules$three$examples$jsm$controls$OrbitControls", {});
app.hand.hand_joint_three = (function app$hand$hand_joint_three(p__36920){
var map__36921 = p__36920;
var map__36921__$1 = (((((!((map__36921 == null))))?(((((map__36921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36921):map__36921);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36921__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36921__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var xyz = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36921__$1,new cljs.core.Keyword(null,"xyz","xyz",-1605570015));
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36923){
var vec__36924 = p__36923;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36924,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36924,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36924,(2),null);
var mesh = app.three.sphere_three(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"radius","radius",-2073122258),radius,new cljs.core.Keyword(null,"color","color",1011675173),color], null));
mesh.position.set(x,y,z);

return mesh;
}),cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((3),xyz)));
});
app.hand.hand_bone_three = (function app$hand$hand_bone_three(spheres,bones,color){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36927){
var vec__36928 = p__36927;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36928,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36928,(1),null);
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(spheres,i).position;
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(spheres,j).position;
return app.three.line_three(p1,p2,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),color], null));
}),bones);
});
app.hand.hand_bones = new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(17)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(9)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(13)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(11)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13),(14)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13),(17)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(14),(15)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),(16)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(17),(18)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(18),(19)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(19),(20)], null)], null);
app.hand.hand_landmark = cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indices","indices",-1218138343),cljs.core.PersistentHashMap.fromArrays([(0),(7),(20),(1),(4),(15),(13),(6),(17),(3),(12),(2),(19),(11),(9),(5),(14),(16),(10),(18),(8)],["WRIST","INDEX_FINGER_DIP","PINKY_TIP","THUMB_CMC","THUMB_TIP","RING_FINGER_DIP","RING_FINGER_MCP","INDEX_FINGER_PIP","PINKY_MCP","THUMB_IP","MIDDLE_FINGER_TIP","THUMB_MCP","PINKY_DIP","MIDDLE_FINGER_DIP","MIDDLE_FINGER_MCP","INDEX_FINGER_MCP","RING_FINGER_PIP","RING_FINGER_TIP","MIDDLE_FINGER_PIP","PINKY_PIP","INDEX_FINGER_TIP"])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"https://ai.google.dev/edge/mediapipe/solutions/vision/hand_landmarker?hl=ja"], null));
app.hand.hand_skeleton = (function app$hand$hand_skeleton(p__36931){
var map__36932 = p__36931;
var map__36932__$1 = (((((!((map__36932 == null))))?(((((map__36932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36932):map__36932);
var opt = map__36932__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36932__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36932__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36932__$1,new cljs.core.Keyword(null,"ratio","ratio",-926560044),((9) / (16)));
var hand_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36932__$1,new cljs.core.Keyword(null,"hand-pos","hand-pos",-1218301989));
var with_let36934 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let36934","with-let36934",115207457));
var temp__5739__auto___36945 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___36945 == null)){
} else {
var c__35403__auto___36946 = temp__5739__auto___36945;
if((with_let36934.generation === c__35403__auto___36946.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let36934.generation = c__35403__auto___36946.ratomGeneration);
}

var init36935 = (with_let36934.length === (0));
var node = ((((init36935) || (cljs.core.not(with_let36934.hasOwnProperty((0))))))?(with_let36934[(0)] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let36934[(0)]));
var scene = ((((init36935) || (cljs.core.not(with_let36934.hasOwnProperty((1))))))?(with_let36934[(1)] = (new module$node_modules$three$build$three_cjs.Scene())):(with_let36934[(1)]));
var camera = ((((init36935) || (cljs.core.not(with_let36934.hasOwnProperty((2))))))?(with_let36934[(2)] = (new module$node_modules$three$build$three_cjs.PerspectiveCamera((90),(1),0.1,(1000)))):(with_let36934[(2)]));
var renderer = ((((init36935) || (cljs.core.not(with_let36934.hasOwnProperty((3))))))?(with_let36934[(3)] = (new module$node_modules$three$build$three_cjs.WebGLRenderer(({"alpha": true})))):(with_let36934[(3)]));
var light = ((((init36935) || (cljs.core.not(with_let36934.hasOwnProperty((4))))))?(with_let36934[(4)] = (new module$node_modules$three$build$three_cjs.DirectionalLight((16777215),(2)))):(with_let36934[(4)]));
var ambient = ((((init36935) || (cljs.core.not(with_let36934.hasOwnProperty((5))))))?(with_let36934[(5)] = (new module$node_modules$three$build$three_cjs.AmbientLight((16777215),0.5))):(with_let36934[(5)]));
var hand_joints = ((((init36935) || (cljs.core.not(with_let36934.hasOwnProperty((6))))))?(with_let36934[(6)] = app.hand.hand_joint_three(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"radius","radius",-2073122258),0.025,new cljs.core.Keyword(null,"color","color",1011675173),(65280),new cljs.core.Keyword(null,"xyz","xyz",-1605570015),(cljs.core.truth_(cljs.core.deref(hand_pos))?cljs.core.first(cljs.core.deref(hand_pos)):cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,(0)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((63))))], null))):(with_let36934[(6)]));
var hand_lines = ((((init36935) || (cljs.core.not(with_let36934.hasOwnProperty((7))))))?(with_let36934[(7)] = app.hand.hand_bone_three(hand_joints,app.hand.hand_bones,(16711680))):(with_let36934[(7)]));
var f = ((((init36935) || (cljs.core.not(with_let36934.hasOwnProperty((8))))))?(with_let36934[(8)] = (function (el){
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

var seq__36937_36947 = cljs.core.seq(hand_joints);
var chunk__36938_36948 = null;
var count__36939_36949 = (0);
var i__36940_36950 = (0);
while(true){
if((i__36940_36950 < count__36939_36949)){
var a_36951 = chunk__36938_36948.cljs$core$IIndexed$_nth$arity$2(null,i__36940_36950);
scene.add(a_36951);


var G__36952 = seq__36937_36947;
var G__36953 = chunk__36938_36948;
var G__36954 = count__36939_36949;
var G__36955 = (i__36940_36950 + (1));
seq__36937_36947 = G__36952;
chunk__36938_36948 = G__36953;
count__36939_36949 = G__36954;
i__36940_36950 = G__36955;
continue;
} else {
var temp__5735__auto___36956 = cljs.core.seq(seq__36937_36947);
if(temp__5735__auto___36956){
var seq__36937_36957__$1 = temp__5735__auto___36956;
if(cljs.core.chunked_seq_QMARK_(seq__36937_36957__$1)){
var c__4556__auto___36958 = cljs.core.chunk_first(seq__36937_36957__$1);
var G__36959 = cljs.core.chunk_rest(seq__36937_36957__$1);
var G__36960 = c__4556__auto___36958;
var G__36961 = cljs.core.count(c__4556__auto___36958);
var G__36962 = (0);
seq__36937_36947 = G__36959;
chunk__36938_36948 = G__36960;
count__36939_36949 = G__36961;
i__36940_36950 = G__36962;
continue;
} else {
var a_36963 = cljs.core.first(seq__36937_36957__$1);
scene.add(a_36963);


var G__36964 = cljs.core.next(seq__36937_36957__$1);
var G__36965 = null;
var G__36966 = (0);
var G__36967 = (0);
seq__36937_36947 = G__36964;
chunk__36938_36948 = G__36965;
count__36939_36949 = G__36966;
i__36940_36950 = G__36967;
continue;
}
} else {
}
}
break;
}

var seq__36941_36968 = cljs.core.seq(hand_lines);
var chunk__36942_36969 = null;
var count__36943_36970 = (0);
var i__36944_36971 = (0);
while(true){
if((i__36944_36971 < count__36943_36970)){
var a_36972 = chunk__36942_36969.cljs$core$IIndexed$_nth$arity$2(null,i__36944_36971);
scene.add(a_36972);


var G__36973 = seq__36941_36968;
var G__36974 = chunk__36942_36969;
var G__36975 = count__36943_36970;
var G__36976 = (i__36944_36971 + (1));
seq__36941_36968 = G__36973;
chunk__36942_36969 = G__36974;
count__36943_36970 = G__36975;
i__36944_36971 = G__36976;
continue;
} else {
var temp__5735__auto___36977 = cljs.core.seq(seq__36941_36968);
if(temp__5735__auto___36977){
var seq__36941_36978__$1 = temp__5735__auto___36977;
if(cljs.core.chunked_seq_QMARK_(seq__36941_36978__$1)){
var c__4556__auto___36980 = cljs.core.chunk_first(seq__36941_36978__$1);
var G__36981 = cljs.core.chunk_rest(seq__36941_36978__$1);
var G__36982 = c__4556__auto___36980;
var G__36983 = cljs.core.count(c__4556__auto___36980);
var G__36984 = (0);
seq__36941_36968 = G__36981;
chunk__36942_36969 = G__36982;
count__36943_36970 = G__36983;
i__36944_36971 = G__36984;
continue;
} else {
var a_36986 = cljs.core.first(seq__36941_36978__$1);
scene.add(a_36986);


var G__36987 = cljs.core.next(seq__36941_36978__$1);
var G__36988 = null;
var G__36989 = (0);
var G__36990 = (0);
seq__36941_36968 = G__36987;
chunk__36942_36969 = G__36988;
count__36943_36970 = G__36989;
i__36944_36971 = G__36990;
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
})):(with_let36934[(8)]));
var res36936 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),f], null)], null);
var destroy__35402__auto___36992 = (function (){
if(cljs.core.truth_(cljs.core.deref(node))){
cljs.core.deref(node).removeChild(renderer.domElement);

return window.removeEventListener("resize",cljs.core.update);
} else {
return null;
}
});
if(reagent.ratom.reactive_QMARK_()){
if((with_let36934.destroy == null)){
(with_let36934.destroy = destroy__35402__auto___36992);
} else {
}
} else {
destroy__35402__auto___36992();
}

return res36936;
});

//# sourceMappingURL=app.hand.js.map
