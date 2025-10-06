goog.provide('app.hand');
var module$node_modules$three$build$three_cjs=shadow.js.require("module$node_modules$three$build$three_cjs", {});
var module$node_modules$three$examples$jsm$controls$OrbitControls=shadow.js.require("module$node_modules$three$examples$jsm$controls$OrbitControls", {});
app.hand.hand_joint_three = (function app$hand$hand_joint_three(p__44034){
var map__44037 = p__44034;
var map__44037__$1 = (((((!((map__44037 == null))))?(((((map__44037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44037):map__44037);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44037__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44037__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var xyz = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44037__$1,new cljs.core.Keyword(null,"xyz","xyz",-1605570015));
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__44043){
var vec__44045 = p__44043;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44045,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44045,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44045,(2),null);
var mesh = app.three.sphere_three(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"radius","radius",-2073122258),radius,new cljs.core.Keyword(null,"color","color",1011675173),color], null));
mesh.position.set(x,y,z);

return mesh;
}),cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((3),xyz)));
});
app.hand.hand_line_three = (function app$hand$hand_line_three(spheres,bones,color){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__44049){
var vec__44051 = p__44049;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44051,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44051,(1),null);
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(spheres,i).position;
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(spheres,j).position;
return app.three.line_three(p1,p2,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),color], null));
}),bones);
});
app.hand.hand_bones = new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(17)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(9)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(13)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(11)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13),(14)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13),(17)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(14),(15)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),(16)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(17),(18)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(18),(19)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(19),(20)], null)], null);
app.hand.get_bone_pos0 = (function app$hand$get_bone_pos0(xyzs,i){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(xyzs,cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(app.hand.hand_bones,i)));
});
app.hand.get_bone_pos1 = (function app$hand$get_bone_pos1(xyzs,i){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(xyzs,cljs.core.second(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(app.hand.hand_bones,i)));
});
app.hand.hand_landmark = cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indices","indices",-1218138343),cljs.core.PersistentHashMap.fromArrays([(0),(7),(20),(1),(4),(15),(13),(6),(17),(3),(12),(2),(19),(11),(9),(5),(14),(16),(10),(18),(8)],["WRIST","INDEX_FINGER_DIP","PINKY_TIP","THUMB_CMC","THUMB_TIP","RING_FINGER_DIP","RING_FINGER_MCP","INDEX_FINGER_PIP","PINKY_MCP","THUMB_IP","MIDDLE_FINGER_TIP","THUMB_MCP","PINKY_DIP","MIDDLE_FINGER_DIP","MIDDLE_FINGER_MCP","INDEX_FINGER_MCP","RING_FINGER_PIP","RING_FINGER_TIP","MIDDLE_FINGER_PIP","PINKY_PIP","INDEX_FINGER_TIP"])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"https://ai.google.dev/edge/mediapipe/solutions/vision/hand_landmarker?hl=ja"], null));
app.hand.hand_skeleton = (function app$hand$hand_skeleton(p__44077){
var map__44078 = p__44077;
var map__44078__$1 = (((((!((map__44078 == null))))?(((((map__44078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44078):map__44078);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44078__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44078__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44078__$1,new cljs.core.Keyword(null,"ratio","ratio",-926560044),((9) / (16)));
var stream = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44078__$1,new cljs.core.Keyword(null,"stream","stream",1534941648));
var with_let44081 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let44081","with-let44081",-1805036951));
var temp__5739__auto___44352 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___44352 == null)){
} else {
var c__42143__auto___44353 = temp__5739__auto___44352;
if((with_let44081.generation === c__42143__auto___44353.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let44081.generation = c__42143__auto___44353.ratomGeneration);
}

var init44082 = (with_let44081.length === (0));
var node = ((((init44082) || (cljs.core.not(with_let44081.hasOwnProperty((0))))))?(with_let44081[(0)] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let44081[(0)]));
var scene = ((((init44082) || (cljs.core.not(with_let44081.hasOwnProperty((1))))))?(with_let44081[(1)] = (new module$node_modules$three$build$three_cjs.Scene())):(with_let44081[(1)]));
var camera = ((((init44082) || (cljs.core.not(with_let44081.hasOwnProperty((2))))))?(with_let44081[(2)] = (new module$node_modules$three$build$three_cjs.PerspectiveCamera((90),(1),0.1,(1000)))):(with_let44081[(2)]));
var renderer = ((((init44082) || (cljs.core.not(with_let44081.hasOwnProperty((3))))))?(with_let44081[(3)] = (new module$node_modules$three$build$three_cjs.WebGLRenderer(({"alpha": true})))):(with_let44081[(3)]));
var light = ((((init44082) || (cljs.core.not(with_let44081.hasOwnProperty((4))))))?(with_let44081[(4)] = (new module$node_modules$three$build$three_cjs.DirectionalLight((16777215),(2)))):(with_let44081[(4)]));
var ambient = ((((init44082) || (cljs.core.not(with_let44081.hasOwnProperty((5))))))?(with_let44081[(5)] = (new module$node_modules$three$build$three_cjs.AmbientLight((16777215),0.5))):(with_let44081[(5)]));
var hand_joints = ((((init44082) || (cljs.core.not(with_let44081.hasOwnProperty((6))))))?(with_let44081[(6)] = app.hand.hand_joint_three(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"radius","radius",-2073122258),0.025,new cljs.core.Keyword(null,"color","color",1011675173),(65280),new cljs.core.Keyword(null,"xyz","xyz",-1605570015),(cljs.core.truth_(new cljs.core.Keyword(null,"frames","frames",1765687497).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(stream)))?cljs.core.first(new cljs.core.Keyword(null,"frames","frames",1765687497).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(stream))):cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,(0)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((63))))], null))):(with_let44081[(6)]));
var hand_lines = ((((init44082) || (cljs.core.not(with_let44081.hasOwnProperty((7))))))?(with_let44081[(7)] = app.hand.hand_line_three(hand_joints,app.hand.hand_bones,(16711680))):(with_let44081[(7)]));
var f = ((((init44082) || (cljs.core.not(with_let44081.hasOwnProperty((8))))))?(with_let44081[(8)] = (function (el){
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
var update_ctrl = cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(app.three.resize_view,node,width__$1,height__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ratio,renderer,camera], 0));
update_ctrl();

window.addEventListener("resize",update_ctrl);

app.three.init_view(scene,renderer,camera,light,ambient);

camera.position.set((0),(0),(1));

var seq__44123_44377 = cljs.core.seq(hand_joints);
var chunk__44124_44378 = null;
var count__44125_44379 = (0);
var i__44126_44380 = (0);
while(true){
if((i__44126_44380 < count__44125_44379)){
var a_44385 = chunk__44124_44378.cljs$core$IIndexed$_nth$arity$2(null,i__44126_44380);
scene.add(a_44385);


var G__44386 = seq__44123_44377;
var G__44387 = chunk__44124_44378;
var G__44388 = count__44125_44379;
var G__44389 = (i__44126_44380 + (1));
seq__44123_44377 = G__44386;
chunk__44124_44378 = G__44387;
count__44125_44379 = G__44388;
i__44126_44380 = G__44389;
continue;
} else {
var temp__5735__auto___44392 = cljs.core.seq(seq__44123_44377);
if(temp__5735__auto___44392){
var seq__44123_44393__$1 = temp__5735__auto___44392;
if(cljs.core.chunked_seq_QMARK_(seq__44123_44393__$1)){
var c__4556__auto___44394 = cljs.core.chunk_first(seq__44123_44393__$1);
var G__44395 = cljs.core.chunk_rest(seq__44123_44393__$1);
var G__44396 = c__4556__auto___44394;
var G__44397 = cljs.core.count(c__4556__auto___44394);
var G__44398 = (0);
seq__44123_44377 = G__44395;
chunk__44124_44378 = G__44396;
count__44125_44379 = G__44397;
i__44126_44380 = G__44398;
continue;
} else {
var a_44399 = cljs.core.first(seq__44123_44393__$1);
scene.add(a_44399);


var G__44400 = cljs.core.next(seq__44123_44393__$1);
var G__44401 = null;
var G__44402 = (0);
var G__44403 = (0);
seq__44123_44377 = G__44400;
chunk__44124_44378 = G__44401;
count__44125_44379 = G__44402;
i__44126_44380 = G__44403;
continue;
}
} else {
}
}
break;
}

var seq__44143_44404 = cljs.core.seq(hand_lines);
var chunk__44144_44405 = null;
var count__44145_44406 = (0);
var i__44146_44407 = (0);
while(true){
if((i__44146_44407 < count__44145_44406)){
var a_44408 = chunk__44144_44405.cljs$core$IIndexed$_nth$arity$2(null,i__44146_44407);
scene.add(a_44408);


var G__44410 = seq__44143_44404;
var G__44411 = chunk__44144_44405;
var G__44412 = count__44145_44406;
var G__44413 = (i__44146_44407 + (1));
seq__44143_44404 = G__44410;
chunk__44144_44405 = G__44411;
count__44145_44406 = G__44412;
i__44146_44407 = G__44413;
continue;
} else {
var temp__5735__auto___44415 = cljs.core.seq(seq__44143_44404);
if(temp__5735__auto___44415){
var seq__44143_44416__$1 = temp__5735__auto___44415;
if(cljs.core.chunked_seq_QMARK_(seq__44143_44416__$1)){
var c__4556__auto___44417 = cljs.core.chunk_first(seq__44143_44416__$1);
var G__44418 = cljs.core.chunk_rest(seq__44143_44416__$1);
var G__44419 = c__4556__auto___44417;
var G__44420 = cljs.core.count(c__4556__auto___44417);
var G__44421 = (0);
seq__44143_44404 = G__44418;
chunk__44144_44405 = G__44419;
count__44145_44406 = G__44420;
i__44146_44407 = G__44421;
continue;
} else {
var a_44422 = cljs.core.first(seq__44143_44416__$1);
scene.add(a_44422);


var G__44423 = cljs.core.next(seq__44143_44416__$1);
var G__44424 = null;
var G__44425 = (0);
var G__44426 = (0);
seq__44143_44404 = G__44423;
chunk__44144_44405 = G__44424;
count__44145_44406 = G__44425;
i__44146_44407 = G__44426;
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

if((!((new cljs.core.Keyword(null,"frames","frames",1765687497).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(stream)) == null)))){
var xyzs_44431 = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((3),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"frames","frames",1765687497).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(stream)),(function (){var x__4217__auto__ = (new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(stream)) - (1));
var y__4218__auto__ = (new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(stream)) | (0));
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})()));
var seq__44257_44432 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,hand_joints));
var chunk__44258_44433 = null;
var count__44259_44434 = (0);
var i__44260_44435 = (0);
while(true){
if((i__44260_44435 < count__44259_44434)){
var vec__44271_44437 = chunk__44258_44433.cljs$core$IIndexed$_nth$arity$2(null,i__44260_44435);
var i_44438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44271_44437,(0),null);
var sphere_44439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44271_44437,(1),null);
app.three.repos(sphere_44439,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(xyzs_44431,i_44438));


var G__44441 = seq__44257_44432;
var G__44442 = chunk__44258_44433;
var G__44443 = count__44259_44434;
var G__44444 = (i__44260_44435 + (1));
seq__44257_44432 = G__44441;
chunk__44258_44433 = G__44442;
count__44259_44434 = G__44443;
i__44260_44435 = G__44444;
continue;
} else {
var temp__5735__auto___44446 = cljs.core.seq(seq__44257_44432);
if(temp__5735__auto___44446){
var seq__44257_44447__$1 = temp__5735__auto___44446;
if(cljs.core.chunked_seq_QMARK_(seq__44257_44447__$1)){
var c__4556__auto___44448 = cljs.core.chunk_first(seq__44257_44447__$1);
var G__44449 = cljs.core.chunk_rest(seq__44257_44447__$1);
var G__44450 = c__4556__auto___44448;
var G__44451 = cljs.core.count(c__4556__auto___44448);
var G__44452 = (0);
seq__44257_44432 = G__44449;
chunk__44258_44433 = G__44450;
count__44259_44434 = G__44451;
i__44260_44435 = G__44452;
continue;
} else {
var vec__44275_44453 = cljs.core.first(seq__44257_44447__$1);
var i_44454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44275_44453,(0),null);
var sphere_44455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44275_44453,(1),null);
app.three.repos(sphere_44455,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(xyzs_44431,i_44454));


var G__44456 = cljs.core.next(seq__44257_44447__$1);
var G__44457 = null;
var G__44458 = (0);
var G__44459 = (0);
seq__44257_44432 = G__44456;
chunk__44258_44433 = G__44457;
count__44259_44434 = G__44458;
i__44260_44435 = G__44459;
continue;
}
} else {
}
}
break;
}

var seq__44279_44461 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,hand_lines));
var chunk__44280_44462 = null;
var count__44281_44463 = (0);
var i__44282_44464 = (0);
while(true){
if((i__44282_44464 < count__44281_44463)){
var vec__44290_44466 = chunk__44280_44462.cljs$core$IIndexed$_nth$arity$2(null,i__44282_44464);
var i_44467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44290_44466,(0),null);
var line_44468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44290_44466,(1),null);
var pos_44470 = line_44468.geometry.attributes.position;
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((function (seq__44279_44461,chunk__44280_44462,count__44281_44463,i__44282_44464,pos_44470,vec__44290_44466,i_44467,line_44468,xyzs_44431,width__$1,height__$1,controls,update_ctrl,init44082,node,scene,camera,renderer,light,ambient,hand_joints,hand_lines,with_let44081,map__44078,map__44078__$1,width,height,ratio,stream){
return (function (p1__44066_SHARP_,p2__44067_SHARP_,p3__44068_SHARP_){
return pos_44470.setXYZ((0),p1__44066_SHARP_,p2__44067_SHARP_,p3__44068_SHARP_);
});})(seq__44279_44461,chunk__44280_44462,count__44281_44463,i__44282_44464,pos_44470,vec__44290_44466,i_44467,line_44468,xyzs_44431,width__$1,height__$1,controls,update_ctrl,init44082,node,scene,camera,renderer,light,ambient,hand_joints,hand_lines,with_let44081,map__44078,map__44078__$1,width,height,ratio,stream))
,app.hand.get_bone_pos0(xyzs_44431,i_44467));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((function (seq__44279_44461,chunk__44280_44462,count__44281_44463,i__44282_44464,pos_44470,vec__44290_44466,i_44467,line_44468,xyzs_44431,width__$1,height__$1,controls,update_ctrl,init44082,node,scene,camera,renderer,light,ambient,hand_joints,hand_lines,with_let44081,map__44078,map__44078__$1,width,height,ratio,stream){
return (function (p1__44069_SHARP_,p2__44070_SHARP_,p3__44071_SHARP_){
return pos_44470.setXYZ((1),p1__44069_SHARP_,p2__44070_SHARP_,p3__44071_SHARP_);
});})(seq__44279_44461,chunk__44280_44462,count__44281_44463,i__44282_44464,pos_44470,vec__44290_44466,i_44467,line_44468,xyzs_44431,width__$1,height__$1,controls,update_ctrl,init44082,node,scene,camera,renderer,light,ambient,hand_joints,hand_lines,with_let44081,map__44078,map__44078__$1,width,height,ratio,stream))
,app.hand.get_bone_pos1(xyzs_44431,i_44467));

(pos_44470.needsUpdate = true);


var G__44480 = seq__44279_44461;
var G__44481 = chunk__44280_44462;
var G__44482 = count__44281_44463;
var G__44483 = (i__44282_44464 + (1));
seq__44279_44461 = G__44480;
chunk__44280_44462 = G__44481;
count__44281_44463 = G__44482;
i__44282_44464 = G__44483;
continue;
} else {
var temp__5735__auto___44484 = cljs.core.seq(seq__44279_44461);
if(temp__5735__auto___44484){
var seq__44279_44485__$1 = temp__5735__auto___44484;
if(cljs.core.chunked_seq_QMARK_(seq__44279_44485__$1)){
var c__4556__auto___44486 = cljs.core.chunk_first(seq__44279_44485__$1);
var G__44487 = cljs.core.chunk_rest(seq__44279_44485__$1);
var G__44488 = c__4556__auto___44486;
var G__44489 = cljs.core.count(c__4556__auto___44486);
var G__44490 = (0);
seq__44279_44461 = G__44487;
chunk__44280_44462 = G__44488;
count__44281_44463 = G__44489;
i__44282_44464 = G__44490;
continue;
} else {
var vec__44297_44491 = cljs.core.first(seq__44279_44485__$1);
var i_44492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44297_44491,(0),null);
var line_44493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44297_44491,(1),null);
var pos_44494 = line_44493.geometry.attributes.position;
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((function (seq__44279_44461,chunk__44280_44462,count__44281_44463,i__44282_44464,pos_44494,vec__44297_44491,i_44492,line_44493,seq__44279_44485__$1,temp__5735__auto___44484,xyzs_44431,width__$1,height__$1,controls,update_ctrl,init44082,node,scene,camera,renderer,light,ambient,hand_joints,hand_lines,with_let44081,map__44078,map__44078__$1,width,height,ratio,stream){
return (function (p1__44066_SHARP_,p2__44067_SHARP_,p3__44068_SHARP_){
return pos_44494.setXYZ((0),p1__44066_SHARP_,p2__44067_SHARP_,p3__44068_SHARP_);
});})(seq__44279_44461,chunk__44280_44462,count__44281_44463,i__44282_44464,pos_44494,vec__44297_44491,i_44492,line_44493,seq__44279_44485__$1,temp__5735__auto___44484,xyzs_44431,width__$1,height__$1,controls,update_ctrl,init44082,node,scene,camera,renderer,light,ambient,hand_joints,hand_lines,with_let44081,map__44078,map__44078__$1,width,height,ratio,stream))
,app.hand.get_bone_pos0(xyzs_44431,i_44492));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((function (seq__44279_44461,chunk__44280_44462,count__44281_44463,i__44282_44464,pos_44494,vec__44297_44491,i_44492,line_44493,seq__44279_44485__$1,temp__5735__auto___44484,xyzs_44431,width__$1,height__$1,controls,update_ctrl,init44082,node,scene,camera,renderer,light,ambient,hand_joints,hand_lines,with_let44081,map__44078,map__44078__$1,width,height,ratio,stream){
return (function (p1__44069_SHARP_,p2__44070_SHARP_,p3__44071_SHARP_){
return pos_44494.setXYZ((1),p1__44069_SHARP_,p2__44070_SHARP_,p3__44071_SHARP_);
});})(seq__44279_44461,chunk__44280_44462,count__44281_44463,i__44282_44464,pos_44494,vec__44297_44491,i_44492,line_44493,seq__44279_44485__$1,temp__5735__auto___44484,xyzs_44431,width__$1,height__$1,controls,update_ctrl,init44082,node,scene,camera,renderer,light,ambient,hand_joints,hand_lines,with_let44081,map__44078,map__44078__$1,width,height,ratio,stream))
,app.hand.get_bone_pos1(xyzs_44431,i_44492));

(pos_44494.needsUpdate = true);


var G__44496 = cljs.core.next(seq__44279_44485__$1);
var G__44497 = null;
var G__44498 = (0);
var G__44499 = (0);
seq__44279_44461 = G__44496;
chunk__44280_44462 = G__44497;
count__44281_44463 = G__44498;
i__44282_44464 = G__44499;
continue;
}
} else {
}
}
break;
}

if(cljs.core.not(new cljs.core.Keyword(null,"pause","pause",-2095325672).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(stream)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(stream,(function (p1__44074_SHARP_){
var idx = cljs.core.mod((new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(p1__44074_SHARP_) + 0.1),new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(p1__44074_SHARP_));
var knob = ((idx * ((1) / new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(p1__44074_SHARP_))) * (1000));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__44074_SHARP_,new cljs.core.Keyword(null,"idx","idx",1053688473),idx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"knob","knob",-360675213),knob], 0));
}));
} else {
}
} else {
}

controls.update();

return renderer.render(scene,camera);
});
return tick();
} else {
return null;
}
}));
})):(with_let44081[(8)]));
var res44088 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),f], null)], null);
var destroy__42142__auto___44508 = (function (){
if(cljs.core.truth_(cljs.core.deref(node))){
cljs.core.deref(node).removeChild(renderer.domElement);

return window.removeEventListener("resize",cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(app.three.resize_view,node,width,height,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ratio,renderer,camera], 0)));
} else {
return null;
}
});
if(reagent.ratom.reactive_QMARK_()){
if((with_let44081.destroy == null)){
(with_let44081.destroy = destroy__42142__auto___44508);
} else {
}
} else {
destroy__42142__auto___44508();
}

return res44088;
});

//# sourceMappingURL=app.hand.js.map
