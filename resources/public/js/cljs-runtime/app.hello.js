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
var with_let39211 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let39211","with-let39211",-190563213));
var temp__5739__auto___39241 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___39241 == null)){
} else {
var c__34580__auto___39242 = temp__5739__auto___39241;
if((with_let39211.generation === c__34580__auto___39242.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let39211.generation = c__34580__auto___39242.ratomGeneration);
}

var init39212 = (with_let39211.length === (0));
var seconds_elapsed = ((((init39212) || (cljs.core.not(with_let39211.hasOwnProperty((0))))))?(with_let39211[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0))):(with_let39211[(0)]));
var res39213 = (function (){
setTimeout((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(seconds_elapsed,cljs.core.inc);
}),(1000));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Seconds Elapsed: ",cljs.core.deref(seconds_elapsed)], null);
})()
;
return res39213;
});
app.hello.atom_input = (function app$hello$atom_input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__39214_SHARP_){
return cljs.core.reset_BANG_(value,p1__39214_SHARP_.target.value);
})], null)], null);
});
app.hello.shared_state = (function app$hello$shared_state(){
var val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("foo");
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The value is now: ",cljs.core.deref(val),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"Change it here: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.hello.atom_input,val], null)], null)], null);
});
});
app.hello.calc_bmi = (function app$hello$calc_bmi(p__39215){
var map__39216 = p__39215;
var map__39216__$1 = (((((!((map__39216 == null))))?(((((map__39216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39216):map__39216);
var data = map__39216__$1;
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39216__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39216__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var bmi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39216__$1,new cljs.core.Keyword(null,"bmi","bmi",1421979636));
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
var map__39218 = cljs.core.deref(app.hello.bmi_data);
var map__39218__$1 = (((((!((map__39218 == null))))?(((((map__39218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39218):map__39218);
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39218__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39218__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var bmi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39218__$1,new cljs.core.Keyword(null,"bmi","bmi",1421979636));
var vec__39219 = (((bmi < 18.5))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange","underweight"], null):(((bmi < (25)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inherit","normal"], null):(((bmi < (30)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange","overweight"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","obese"], null)
)));
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39219,(0),null);
var diagnose = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39219,(1),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"BMI calculator"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Height: ",(height | (0)),"cm",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.hello.slider,new cljs.core.Keyword(null,"height","height",1025178622),height,(100),(220),new cljs.core.Keyword(null,"bmi","bmi",1421979636)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Weight: ",(weight | (0)),"kg",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.hello.slider,new cljs.core.Keyword(null,"weight","weight",-1262796205),weight,(30),(150),new cljs.core.Keyword(null,"bmi","bmi",1421979636)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"BMI: ",(bmi | (0))," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null),diagnose], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.hello.slider,new cljs.core.Keyword(null,"bmi","bmi",1421979636),bmi,(10),(50),new cljs.core.Keyword(null,"weight","weight",-1262796205)], null)], null)], null);
});
app.hello.plot = (function app$hello$plot(p__39223){
var map__39224 = p__39223;
var map__39224__$1 = (((((!((map__39224 == null))))?(((((map__39224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39224):map__39224);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39224__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39224__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39224__$1,new cljs.core.Keyword(null,"node","node",581201198));
var with_let39226 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let39226","with-let39226",-2065695638));
var temp__5739__auto___39243 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___39243 == null)){
} else {
var c__34580__auto___39244 = temp__5739__auto___39243;
if((with_let39226.generation === c__34580__auto___39244.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let39226.generation = c__34580__auto___39244.ratomGeneration);
}

var init39227 = (with_let39226.length === (0));
var f = ((((init39227) || (cljs.core.not(with_let39226.hasOwnProperty((0))))))?(with_let39226[(0)] = (function (el){
if(cljs.core.truth_(el)){
cljs.core.reset_BANG_(node,el);

return reagent.core.after_render((function (){
return module$node_modules$plotly_DOT_js_dist_min$plotly_min.newPlot(cljs.core.deref(node),cljs.core.clj__GT_js(cljs.core.deref(data)),cljs.core.clj__GT_js(cljs.core.deref(layout)));
}));
} else {
return null;
}
})):(with_let39226[(0)]));
var res39228 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),f], null)], null);
var destroy__34579__auto___39245 = (function (){
if(cljs.core.truth_(cljs.core.deref(node))){
return module$node_modules$plotly_DOT_js_dist_min$plotly_min.purge(cljs.core.deref(node));
} else {
return null;
}
});
if(reagent.ratom.reactive_QMARK_()){
if((with_let39226.destroy == null)){
(with_let39226.destroy = destroy__34579__auto___39245);
} else {
}
} else {
destroy__34579__auto___39245();
}

return res39228;
});
app.hello.update_plot = (function app$hello$update_plot(p__39230){
var map__39231 = p__39230;
var map__39231__$1 = (((((!((map__39231 == null))))?(((((map__39231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39231):map__39231);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39231__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39231__$1,new cljs.core.Keyword(null,"node","node",581201198));
cljs.core.reset_BANG_(data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.range.cljs$core$IFn$_invoke$arity$0())),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39229_SHARP_){
return ((2) * p1__39229_SHARP_);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$0())),new cljs.core.Keyword(null,"type","type",1174270348),"scatter"], null)], null));

if(cljs.core.truth_(cljs.core.deref(node))){
return module$node_modules$plotly_DOT_js_dist_min$plotly_min.react(cljs.core.deref(node),cljs.core.clj__GT_js(cljs.core.deref(data)),cljs.core.clj__GT_js(null));
} else {
return null;
}
});
app.hello.rolling_box = (function app$hello$rolling_box(p__39233){
var map__39234 = p__39233;
var map__39234__$1 = (((((!((map__39234 == null))))?(((((map__39234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39234):map__39234);
var opt = map__39234__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39234__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39234__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39234__$1,new cljs.core.Keyword(null,"ratio","ratio",-926560044),((9) / (16)));
var with_let39236 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let39236","with-let39236",-897695366));
var temp__5739__auto___39246 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___39246 == null)){
} else {
var c__34580__auto___39247 = temp__5739__auto___39246;
if((with_let39236.generation === c__34580__auto___39247.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let39236.generation = c__34580__auto___39247.ratomGeneration);
}

var init39237 = (with_let39236.length === (0));
var node = ((((init39237) || (cljs.core.not(with_let39236.hasOwnProperty((0))))))?(with_let39236[(0)] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let39236[(0)]));
var scene = ((((init39237) || (cljs.core.not(with_let39236.hasOwnProperty((1))))))?(with_let39236[(1)] = (new module$node_modules$three$build$three_cjs.Scene())):(with_let39236[(1)]));
var camera = ((((init39237) || (cljs.core.not(with_let39236.hasOwnProperty((2))))))?(with_let39236[(2)] = (new module$node_modules$three$build$three_cjs.PerspectiveCamera((90),(1),0.1,(3000)))):(with_let39236[(2)]));
var renderer = ((((init39237) || (cljs.core.not(with_let39236.hasOwnProperty((3))))))?(with_let39236[(3)] = (new module$node_modules$three$build$three_cjs.WebGLRenderer(({"alpha": true})))):(with_let39236[(3)]));
var geometry = ((((init39237) || (cljs.core.not(with_let39236.hasOwnProperty((4))))))?(with_let39236[(4)] = (new module$node_modules$three$build$three_cjs.BoxGeometry((500),(500),(500)))):(with_let39236[(4)]));
var box_material = ((((init39237) || (cljs.core.not(with_let39236.hasOwnProperty((5))))))?(with_let39236[(5)] = (new module$node_modules$three$build$three_cjs.MeshStandardMaterial(({"color": (255)})))):(with_let39236[(5)]));
var color_bg = ((((init39237) || (cljs.core.not(with_let39236.hasOwnProperty((6))))))?(with_let39236[(6)] = (new module$node_modules$three$build$three_cjs.Color((8421504)))):(with_let39236[(6)]));
var box = ((((init39237) || (cljs.core.not(with_let39236.hasOwnProperty((7))))))?(with_let39236[(7)] = (new module$node_modules$three$build$three_cjs.Mesh(geometry,box_material))):(with_let39236[(7)]));
var light = ((((init39237) || (cljs.core.not(with_let39236.hasOwnProperty((8))))))?(with_let39236[(8)] = (new module$node_modules$three$build$three_cjs.DirectionalLight((16777215),(2)))):(with_let39236[(8)]));
var ambient = ((((init39237) || (cljs.core.not(with_let39236.hasOwnProperty((9))))))?(with_let39236[(9)] = (new module$node_modules$three$build$three_cjs.AmbientLight((16777215),0.5))):(with_let39236[(9)]));
var update_size = ((((init39237) || (cljs.core.not(with_let39236.hasOwnProperty((10))))))?(with_let39236[(10)] = (function (){
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
})):(with_let39236[(10)]));
var f = ((((init39237) || (cljs.core.not(with_let39236.hasOwnProperty((11))))))?(with_let39236[(11)] = (function (el){
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
})):(with_let39236[(11)]));
var res39238 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),f], null)], null);
var destroy__34579__auto___39248 = (function (){
if(cljs.core.truth_(cljs.core.deref(node))){
cljs.core.deref(node).removeChild(renderer.domElement);

return window.removeEventListener("resize",update_size);
} else {
return null;
}
});
if(reagent.ratom.reactive_QMARK_()){
if((with_let39236.destroy == null)){
(with_let39236.destroy = destroy__34579__auto___39248);
} else {
}
} else {
destroy__34579__auto___39248();
}

return res39238;
});
app.hello.data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.range.cljs$core$IFn$_invoke$arity$0())),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39239_SHARP_){
return (p1__39239_SHARP_ * p1__39239_SHARP_);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$0())),new cljs.core.Keyword(null,"type","type",1174270348),"scatter"], null)], null));
app.hello.layout = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Sample"], null));
app.hello.plot_node = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
app.hello.current_page = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"home","home",-74557309));
app.hello.page_home = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.someclass","p.someclass",-1904646929),"Hello world, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"ReagentApp"], null)," is running!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"\u518D\u63CF\u753B"], null),"\u53EF\u80FD\u306A\u30EA\u30B9\u30C8"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.hello.lister_simple,app.hello.map_with_key(app.hello.click_counter,app.hello.counters)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"\u518D\u63CF\u753B"], null),"\u53EF\u80FD\u306A\u30EA\u30B9\u30C8"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.hello.lister_simple,cljs.core.range.cljs$core$IFn$_invoke$arity$1((3))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.hello.timer_fn_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.hello.shared_state], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.hello.bmi_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"plotly.js \u306B\u3088\u308B\u30D7\u30ED\u30C3\u30C8"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.hello.plot,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),app.hello.data,new cljs.core.Keyword(null,"layout","layout",-2120940921),app.hello.layout,new cljs.core.Keyword(null,"node","node",581201198),app.hello.plot_node], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return app.hello.update_plot(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),app.hello.data,new cljs.core.Keyword(null,"node","node",581201198),app.hello.plot_node], null));
})], null),"Update Plot"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.hello.rolling_box,cljs.core.PersistentArrayMap.EMPTY], null)], null);
app.hello.page_plot = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.someclass","p.someclass",-1904646929),"This is ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Plot"], null)," page"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"plotly.js \u306B\u3088\u308B\u30D7\u30ED\u30C3\u30C8"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.hello.plot,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),app.hello.data,new cljs.core.Keyword(null,"layout","layout",-2120940921),app.hello.layout,new cljs.core.Keyword(null,"node","node",581201198),app.hello.plot_node], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return app.hello.update_plot(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),app.hello.data,new cljs.core.Keyword(null,"node","node",581201198),app.hello.plot_node], null));
})], null),"Update Plot"], null)], null)], null);
app.hello.rooter = (function app$hello$rooter(){
return (function (){
var G__39240 = cljs.core.deref(app.hello.current_page);
var G__39240__$1 = (((G__39240 instanceof cljs.core.Keyword))?G__39240.fqn:null);
switch (G__39240__$1) {
case "home":
return app.hello.page_home;

break;
case "plot":
return app.hello.page_plot;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39240__$1)].join('')));

}
});
});
app.hello.hello = (function app$hello$hello(){
return app.hello.rooter();
});

//# sourceMappingURL=app.hello.js.map
