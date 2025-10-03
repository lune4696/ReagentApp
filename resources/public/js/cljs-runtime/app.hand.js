goog.provide('app.hand');
var module$node_modules$three$build$three_cjs=shadow.js.require("module$node_modules$three$build$three_cjs", {});
var module$node_modules$three$examples$jsm$controls$OrbitControls=shadow.js.require("module$node_modules$three$examples$jsm$controls$OrbitControls", {});
app.hand.hand_joint_three = (function app$hand$hand_joint_three(p__45980){
var map__45981 = p__45980;
var map__45981__$1 = (((((!((map__45981 == null))))?(((((map__45981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45981):map__45981);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45981__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45981__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var xyz = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45981__$1,new cljs.core.Keyword(null,"xyz","xyz",-1605570015));
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__45983){
var vec__45984 = p__45983;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45984,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45984,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45984,(2),null);
var mesh = app.three.sphere_three(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"radius","radius",-2073122258),radius,new cljs.core.Keyword(null,"color","color",1011675173),color], null));
mesh.position.set(x,y,z);

return mesh;
}),cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((3),xyz)));
});
app.hand.hand_line_three = (function app$hand$hand_line_three(spheres,bones,color){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__45987){
var vec__45988 = p__45987;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45988,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45988,(1),null);
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
app.hand.hand_skeleton = (function app$hand$hand_skeleton(p__45998){
var map__45999 = p__45998;
var map__45999__$1 = (((((!((map__45999 == null))))?(((((map__45999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45999):map__45999);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45999__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45999__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45999__$1,new cljs.core.Keyword(null,"ratio","ratio",-926560044),((9) / (16)));
var stream = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45999__$1,new cljs.core.Keyword(null,"stream","stream",1534941648));
var with_let46001 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let46001","with-let46001",2058849864));
var temp__5739__auto___46076 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___46076 == null)){
} else {
var c__34574__auto___46077 = temp__5739__auto___46076;
if((with_let46001.generation === c__34574__auto___46077.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let46001.generation = c__34574__auto___46077.ratomGeneration);
}

var init46002 = (with_let46001.length === (0));
var node = ((((init46002) || (cljs.core.not(with_let46001.hasOwnProperty((0))))))?(with_let46001[(0)] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let46001[(0)]));
var scene = ((((init46002) || (cljs.core.not(with_let46001.hasOwnProperty((1))))))?(with_let46001[(1)] = (new module$node_modules$three$build$three_cjs.Scene())):(with_let46001[(1)]));
var camera = ((((init46002) || (cljs.core.not(with_let46001.hasOwnProperty((2))))))?(with_let46001[(2)] = (new module$node_modules$three$build$three_cjs.PerspectiveCamera((90),(1),0.1,(1000)))):(with_let46001[(2)]));
var renderer = ((((init46002) || (cljs.core.not(with_let46001.hasOwnProperty((3))))))?(with_let46001[(3)] = (new module$node_modules$three$build$three_cjs.WebGLRenderer(({"alpha": true})))):(with_let46001[(3)]));
var light = ((((init46002) || (cljs.core.not(with_let46001.hasOwnProperty((4))))))?(with_let46001[(4)] = (new module$node_modules$three$build$three_cjs.DirectionalLight((16777215),(2)))):(with_let46001[(4)]));
var ambient = ((((init46002) || (cljs.core.not(with_let46001.hasOwnProperty((5))))))?(with_let46001[(5)] = (new module$node_modules$three$build$three_cjs.AmbientLight((16777215),0.5))):(with_let46001[(5)]));
var hand_joints = ((((init46002) || (cljs.core.not(with_let46001.hasOwnProperty((6))))))?(with_let46001[(6)] = app.hand.hand_joint_three(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"radius","radius",-2073122258),0.025,new cljs.core.Keyword(null,"color","color",1011675173),(65280),new cljs.core.Keyword(null,"xyz","xyz",-1605570015),(cljs.core.truth_(new cljs.core.Keyword(null,"frames","frames",1765687497).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(stream)))?cljs.core.first(new cljs.core.Keyword(null,"frames","frames",1765687497).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(stream))):cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,(0)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((63))))], null))):(with_let46001[(6)]));
var hand_lines = ((((init46002) || (cljs.core.not(with_let46001.hasOwnProperty((7))))))?(with_let46001[(7)] = app.hand.hand_line_three(hand_joints,app.hand.hand_bones,(16711680))):(with_let46001[(7)]));
var f = ((((init46002) || (cljs.core.not(with_let46001.hasOwnProperty((8))))))?(with_let46001[(8)] = (function (el){
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

var seq__46004_46080 = cljs.core.seq(hand_joints);
var chunk__46005_46081 = null;
var count__46006_46082 = (0);
var i__46007_46083 = (0);
while(true){
if((i__46007_46083 < count__46006_46082)){
var a_46084 = chunk__46005_46081.cljs$core$IIndexed$_nth$arity$2(null,i__46007_46083);
scene.add(a_46084);


var G__46085 = seq__46004_46080;
var G__46086 = chunk__46005_46081;
var G__46087 = count__46006_46082;
var G__46088 = (i__46007_46083 + (1));
seq__46004_46080 = G__46085;
chunk__46005_46081 = G__46086;
count__46006_46082 = G__46087;
i__46007_46083 = G__46088;
continue;
} else {
var temp__5735__auto___46089 = cljs.core.seq(seq__46004_46080);
if(temp__5735__auto___46089){
var seq__46004_46090__$1 = temp__5735__auto___46089;
if(cljs.core.chunked_seq_QMARK_(seq__46004_46090__$1)){
var c__4556__auto___46091 = cljs.core.chunk_first(seq__46004_46090__$1);
var G__46092 = cljs.core.chunk_rest(seq__46004_46090__$1);
var G__46093 = c__4556__auto___46091;
var G__46094 = cljs.core.count(c__4556__auto___46091);
var G__46095 = (0);
seq__46004_46080 = G__46092;
chunk__46005_46081 = G__46093;
count__46006_46082 = G__46094;
i__46007_46083 = G__46095;
continue;
} else {
var a_46096 = cljs.core.first(seq__46004_46090__$1);
scene.add(a_46096);


var G__46097 = cljs.core.next(seq__46004_46090__$1);
var G__46098 = null;
var G__46099 = (0);
var G__46100 = (0);
seq__46004_46080 = G__46097;
chunk__46005_46081 = G__46098;
count__46006_46082 = G__46099;
i__46007_46083 = G__46100;
continue;
}
} else {
}
}
break;
}

var seq__46008_46101 = cljs.core.seq(hand_lines);
var chunk__46009_46102 = null;
var count__46010_46103 = (0);
var i__46011_46104 = (0);
while(true){
if((i__46011_46104 < count__46010_46103)){
var a_46105 = chunk__46009_46102.cljs$core$IIndexed$_nth$arity$2(null,i__46011_46104);
scene.add(a_46105);


var G__46106 = seq__46008_46101;
var G__46107 = chunk__46009_46102;
var G__46108 = count__46010_46103;
var G__46109 = (i__46011_46104 + (1));
seq__46008_46101 = G__46106;
chunk__46009_46102 = G__46107;
count__46010_46103 = G__46108;
i__46011_46104 = G__46109;
continue;
} else {
var temp__5735__auto___46110 = cljs.core.seq(seq__46008_46101);
if(temp__5735__auto___46110){
var seq__46008_46111__$1 = temp__5735__auto___46110;
if(cljs.core.chunked_seq_QMARK_(seq__46008_46111__$1)){
var c__4556__auto___46112 = cljs.core.chunk_first(seq__46008_46111__$1);
var G__46113 = cljs.core.chunk_rest(seq__46008_46111__$1);
var G__46114 = c__4556__auto___46112;
var G__46115 = cljs.core.count(c__4556__auto___46112);
var G__46116 = (0);
seq__46008_46101 = G__46113;
chunk__46009_46102 = G__46114;
count__46010_46103 = G__46115;
i__46011_46104 = G__46116;
continue;
} else {
var a_46118 = cljs.core.first(seq__46008_46111__$1);
scene.add(a_46118);


var G__46119 = cljs.core.next(seq__46008_46111__$1);
var G__46120 = null;
var G__46121 = (0);
var G__46122 = (0);
seq__46008_46101 = G__46119;
chunk__46009_46102 = G__46120;
count__46010_46103 = G__46121;
i__46011_46104 = G__46122;
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
var xyzs_46123 = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((3),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"frames","frames",1765687497).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(stream)),(function (){var x__4217__auto__ = (new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(stream)) - (1));
var y__4218__auto__ = (new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(stream)) | (0));
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})()));
var seq__46044_46124 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,hand_joints));
var chunk__46045_46125 = null;
var count__46046_46126 = (0);
var i__46047_46127 = (0);
while(true){
if((i__46047_46127 < count__46046_46126)){
var vec__46054_46128 = chunk__46045_46125.cljs$core$IIndexed$_nth$arity$2(null,i__46047_46127);
var i_46129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46054_46128,(0),null);
var sphere_46130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46054_46128,(1),null);
app.three.repos(sphere_46130,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(xyzs_46123,i_46129));


var G__46131 = seq__46044_46124;
var G__46132 = chunk__46045_46125;
var G__46133 = count__46046_46126;
var G__46134 = (i__46047_46127 + (1));
seq__46044_46124 = G__46131;
chunk__46045_46125 = G__46132;
count__46046_46126 = G__46133;
i__46047_46127 = G__46134;
continue;
} else {
var temp__5735__auto___46135 = cljs.core.seq(seq__46044_46124);
if(temp__5735__auto___46135){
var seq__46044_46136__$1 = temp__5735__auto___46135;
if(cljs.core.chunked_seq_QMARK_(seq__46044_46136__$1)){
var c__4556__auto___46137 = cljs.core.chunk_first(seq__46044_46136__$1);
var G__46138 = cljs.core.chunk_rest(seq__46044_46136__$1);
var G__46139 = c__4556__auto___46137;
var G__46140 = cljs.core.count(c__4556__auto___46137);
var G__46141 = (0);
seq__46044_46124 = G__46138;
chunk__46045_46125 = G__46139;
count__46046_46126 = G__46140;
i__46047_46127 = G__46141;
continue;
} else {
var vec__46057_46142 = cljs.core.first(seq__46044_46136__$1);
var i_46143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46057_46142,(0),null);
var sphere_46144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46057_46142,(1),null);
app.three.repos(sphere_46144,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(xyzs_46123,i_46143));


var G__46145 = cljs.core.next(seq__46044_46136__$1);
var G__46146 = null;
var G__46147 = (0);
var G__46148 = (0);
seq__46044_46124 = G__46145;
chunk__46045_46125 = G__46146;
count__46046_46126 = G__46147;
i__46047_46127 = G__46148;
continue;
}
} else {
}
}
break;
}

var seq__46060_46149 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,hand_lines));
var chunk__46061_46150 = null;
var count__46062_46151 = (0);
var i__46063_46152 = (0);
while(true){
if((i__46063_46152 < count__46062_46151)){
var vec__46070_46153 = chunk__46061_46150.cljs$core$IIndexed$_nth$arity$2(null,i__46063_46152);
var i_46154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46070_46153,(0),null);
var line_46155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46070_46153,(1),null);
var pos_46158 = line_46155.geometry.attributes.position;
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((function (seq__46060_46149,chunk__46061_46150,count__46062_46151,i__46063_46152,pos_46158,vec__46070_46153,i_46154,line_46155,xyzs_46123,width__$1,height__$1,controls,update_ctrl,init46002,node,scene,camera,renderer,light,ambient,hand_joints,hand_lines,with_let46001,map__45999,map__45999__$1,width,height,ratio,stream){
return (function (p1__45991_SHARP_,p2__45992_SHARP_,p3__45993_SHARP_){
return pos_46158.setXYZ((0),p1__45991_SHARP_,p2__45992_SHARP_,p3__45993_SHARP_);
});})(seq__46060_46149,chunk__46061_46150,count__46062_46151,i__46063_46152,pos_46158,vec__46070_46153,i_46154,line_46155,xyzs_46123,width__$1,height__$1,controls,update_ctrl,init46002,node,scene,camera,renderer,light,ambient,hand_joints,hand_lines,with_let46001,map__45999,map__45999__$1,width,height,ratio,stream))
,app.hand.get_bone_pos0(xyzs_46123,i_46154));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((function (seq__46060_46149,chunk__46061_46150,count__46062_46151,i__46063_46152,pos_46158,vec__46070_46153,i_46154,line_46155,xyzs_46123,width__$1,height__$1,controls,update_ctrl,init46002,node,scene,camera,renderer,light,ambient,hand_joints,hand_lines,with_let46001,map__45999,map__45999__$1,width,height,ratio,stream){
return (function (p1__45994_SHARP_,p2__45995_SHARP_,p3__45996_SHARP_){
return pos_46158.setXYZ((1),p1__45994_SHARP_,p2__45995_SHARP_,p3__45996_SHARP_);
});})(seq__46060_46149,chunk__46061_46150,count__46062_46151,i__46063_46152,pos_46158,vec__46070_46153,i_46154,line_46155,xyzs_46123,width__$1,height__$1,controls,update_ctrl,init46002,node,scene,camera,renderer,light,ambient,hand_joints,hand_lines,with_let46001,map__45999,map__45999__$1,width,height,ratio,stream))
,app.hand.get_bone_pos1(xyzs_46123,i_46154));

(pos_46158.needsUpdate = true);


var G__46160 = seq__46060_46149;
var G__46161 = chunk__46061_46150;
var G__46162 = count__46062_46151;
var G__46163 = (i__46063_46152 + (1));
seq__46060_46149 = G__46160;
chunk__46061_46150 = G__46161;
count__46062_46151 = G__46162;
i__46063_46152 = G__46163;
continue;
} else {
var temp__5735__auto___46164 = cljs.core.seq(seq__46060_46149);
if(temp__5735__auto___46164){
var seq__46060_46165__$1 = temp__5735__auto___46164;
if(cljs.core.chunked_seq_QMARK_(seq__46060_46165__$1)){
var c__4556__auto___46166 = cljs.core.chunk_first(seq__46060_46165__$1);
var G__46167 = cljs.core.chunk_rest(seq__46060_46165__$1);
var G__46168 = c__4556__auto___46166;
var G__46169 = cljs.core.count(c__4556__auto___46166);
var G__46170 = (0);
seq__46060_46149 = G__46167;
chunk__46061_46150 = G__46168;
count__46062_46151 = G__46169;
i__46063_46152 = G__46170;
continue;
} else {
var vec__46073_46171 = cljs.core.first(seq__46060_46165__$1);
var i_46172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46073_46171,(0),null);
var line_46173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46073_46171,(1),null);
var pos_46179 = line_46173.geometry.attributes.position;
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((function (seq__46060_46149,chunk__46061_46150,count__46062_46151,i__46063_46152,pos_46179,vec__46073_46171,i_46172,line_46173,seq__46060_46165__$1,temp__5735__auto___46164,xyzs_46123,width__$1,height__$1,controls,update_ctrl,init46002,node,scene,camera,renderer,light,ambient,hand_joints,hand_lines,with_let46001,map__45999,map__45999__$1,width,height,ratio,stream){
return (function (p1__45991_SHARP_,p2__45992_SHARP_,p3__45993_SHARP_){
return pos_46179.setXYZ((0),p1__45991_SHARP_,p2__45992_SHARP_,p3__45993_SHARP_);
});})(seq__46060_46149,chunk__46061_46150,count__46062_46151,i__46063_46152,pos_46179,vec__46073_46171,i_46172,line_46173,seq__46060_46165__$1,temp__5735__auto___46164,xyzs_46123,width__$1,height__$1,controls,update_ctrl,init46002,node,scene,camera,renderer,light,ambient,hand_joints,hand_lines,with_let46001,map__45999,map__45999__$1,width,height,ratio,stream))
,app.hand.get_bone_pos0(xyzs_46123,i_46172));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((function (seq__46060_46149,chunk__46061_46150,count__46062_46151,i__46063_46152,pos_46179,vec__46073_46171,i_46172,line_46173,seq__46060_46165__$1,temp__5735__auto___46164,xyzs_46123,width__$1,height__$1,controls,update_ctrl,init46002,node,scene,camera,renderer,light,ambient,hand_joints,hand_lines,with_let46001,map__45999,map__45999__$1,width,height,ratio,stream){
return (function (p1__45994_SHARP_,p2__45995_SHARP_,p3__45996_SHARP_){
return pos_46179.setXYZ((1),p1__45994_SHARP_,p2__45995_SHARP_,p3__45996_SHARP_);
});})(seq__46060_46149,chunk__46061_46150,count__46062_46151,i__46063_46152,pos_46179,vec__46073_46171,i_46172,line_46173,seq__46060_46165__$1,temp__5735__auto___46164,xyzs_46123,width__$1,height__$1,controls,update_ctrl,init46002,node,scene,camera,renderer,light,ambient,hand_joints,hand_lines,with_let46001,map__45999,map__45999__$1,width,height,ratio,stream))
,app.hand.get_bone_pos1(xyzs_46123,i_46172));

(pos_46179.needsUpdate = true);


var G__46180 = cljs.core.next(seq__46060_46165__$1);
var G__46181 = null;
var G__46182 = (0);
var G__46183 = (0);
seq__46060_46149 = G__46180;
chunk__46061_46150 = G__46181;
count__46062_46151 = G__46182;
i__46063_46152 = G__46183;
continue;
}
} else {
}
}
break;
}

if(cljs.core.not(new cljs.core.Keyword(null,"pause","pause",-2095325672).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(stream)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(stream,(function (p1__45997_SHARP_){
var idx = cljs.core.mod((new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(p1__45997_SHARP_) + 0.1),new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(p1__45997_SHARP_));
var knob = ((idx * ((1) / new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(p1__45997_SHARP_))) * (1000));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__45997_SHARP_,new cljs.core.Keyword(null,"idx","idx",1053688473),idx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"knob","knob",-360675213),knob], 0));
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
})):(with_let46001[(8)]));
var res46003 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),f], null)], null);
var destroy__34573__auto___46184 = (function (){
if(cljs.core.truth_(cljs.core.deref(node))){
cljs.core.deref(node).removeChild(renderer.domElement);

return window.removeEventListener("resize");
} else {
return null;
}
});
if(reagent.ratom.reactive_QMARK_()){
if((with_let46001.destroy == null)){
(with_let46001.destroy = destroy__34573__auto___46184);
} else {
}
} else {
destroy__34573__auto___46184();
}

return res46003;
});

//# sourceMappingURL=app.hand.js.map
