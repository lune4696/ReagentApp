goog.provide('app.hello');
app.hello.click_counter = (function app$hello$click_counter(c){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"The atom ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"click-count"], null)," has value: ",cljs.core.deref(c),". ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Click me!",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.inc);
})], null)], null)], null);
});
/**
 * コレクションの各要素にコンポーネントを返却する関数 f を適用したうえで、react key を付与
 */
app.hello.map_with_key = (function app$hello$map_with_key(f,coll){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,c){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,c], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
}),coll);
});
app.hello.calc_bmi = (function app$hello$calc_bmi(p__37016){
var map__37017 = p__37016;
var map__37017__$1 = (((((!((map__37017 == null))))?(((((map__37017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37017):map__37017);
var data = map__37017__$1;
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37017__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37017__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var bmi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37017__$1,new cljs.core.Keyword(null,"bmi","bmi",1421979636));
var h = (height / (100));
if((bmi == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"bmi","bmi",1421979636),(weight / (h * h)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"weight","weight",-1262796205),((bmi * h) * h));
}
});
app.hello.bmi = (function app$hello$bmi(data){
var map__37019 = cljs.core.deref(data);
var map__37019__$1 = (((((!((map__37019 == null))))?(((((map__37019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37019):map__37019);
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37019__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37019__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var bmi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37019__$1,new cljs.core.Keyword(null,"bmi","bmi",1421979636));
var vec__37020 = (((bmi < 18.5))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange","underweight"], null):(((bmi < (25)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inherit","normal"], null):(((bmi < (30)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange","overweight"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","obese"], null)
)));
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37020,(0),null);
var diagnose = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37020,(1),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"BMI calculator"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Height: ",(height | (0)),"cm",new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.slider,data,new cljs.core.Keyword(null,"height","height",1025178622),height,(100),(220),new cljs.core.Keyword(null,"bmi","bmi",1421979636),app.hello.calc_bmi], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Weight: ",(weight | (0)),"kg",new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.slider,data,new cljs.core.Keyword(null,"weight","weight",-1262796205),weight,(30),(150),new cljs.core.Keyword(null,"bmi","bmi",1421979636),app.hello.calc_bmi], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"BMI: ",(bmi | (0))," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null),diagnose], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.slider,data,new cljs.core.Keyword(null,"bmi","bmi",1421979636),bmi,(10),(50),new cljs.core.Keyword(null,"weight","weight",-1262796205),app.hello.calc_bmi], null)], null)], null);
});
app.hello.get_json = (function app$hello$get_json(path,a){
return fetch(path).then((function (p1__37024_SHARP_){
return p1__37024_SHARP_.json();
})).then((function (p1__37025_SHARP_){
return cljs.core.reset_BANG_(a,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__37025_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
}));
});
app.hello.load_json = (function app$hello$load_json(path,data){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Data keys: ",(cljs.core.truth_(cljs.core.deref(data))?cljs.core.keys(cljs.core.deref(data)):"nil"),". ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Load",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return app.hello.get_json(cljs.core.deref(path),data);
})], null)], null)], null);
});
app.hello.counters = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0)),reagent.core.atom.cljs$core$IFn$_invoke$arity$1((1)),reagent.core.atom.cljs$core$IFn$_invoke$arity$1((2))], null);
app.hello.bmi_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(app.hello.calc_bmi(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(100),new cljs.core.Keyword(null,"weight","weight",-1262796205),(80)], null)));
app.hello.plot_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.range.cljs$core$IFn$_invoke$arity$0())),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37026_SHARP_){
return (p1__37026_SHARP_ * p1__37026_SHARP_);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$0())),new cljs.core.Keyword(null,"type","type",1174270348),"scatter"], null)], null));
app.hello.hand_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.fromArray([0.356702536,0.125448644,-3.78144911E-8,0.258442879,0.167962849,-0.0159394536,0.199230939,0.285911858,-0.0380800664,0.203225508,0.403543383,-0.0500700623,0.229443818,0.489487439,-0.0564782768,0.237581402,0.312023699,-0.12733826,0.210384965,0.530334234,-0.151995942,0.220977604,0.492553204,-0.132310286,0.229686156,0.423452169,-0.109627999,0.322596401,0.329260826,-0.124592729,0.280629992,0.570023417,-0.157182232,0.278808087,0.522696495,-0.132588208,0.288175613,0.445645958,-0.107170537,0.393074065,0.347538948,-0.115016364,0.35877648,0.564299107,-0.129306167,0.344347358,0.519447327,-0.0943925604,0.346303612,0.450459629,-0.0668169409,0.444388539,0.354201496,-0.10397286,0.41463536,0.518915653,-0.106505439,0.398395956,0.498268008,-0.080954507,0.397958905,0.446671903,-0.0599709116], true)], null));
app.hello.layout = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Sample"], null));
app.hello.plot_node = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
app.hello.current_page = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"home","home",-74557309));
app.hello.filepath = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
app.hello.input_filepath = (function app$hello$input_filepath(a){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"JsonPath: ",cljs.core.deref(a),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"Input: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.text_input,a], null)], null)], null);
});
app.hello.experiment_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
app.hello.page_home = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.someclass","p.someclass",-1904646929),"Hello world, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"ReagentApp"], null)," is running!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"\u518D\u63CF\u753B"], null),"\u53EF\u80FD\u306A\u30EA\u30B9\u30C8"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.lister,app.hello.map_with_key(app.hello.click_counter,app.hello.counters)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.timer], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.hello.bmi,app.hello.bmi_data], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"plotly.js \u306B\u3088\u308B\u30D7\u30ED\u30C3\u30C8"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.plot.plot,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),app.hello.plot_data,new cljs.core.Keyword(null,"layout","layout",-2120940921),app.hello.layout,new cljs.core.Keyword(null,"node","node",581201198),app.hello.plot_node], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return app.plot.update_plot(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),app.hello.plot_data,new cljs.core.Keyword(null,"node","node",581201198),app.hello.plot_node], null));
})], null),"Update Plot"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.box.rolling_box,cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.hand.hand_skeleton,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hand-pos","hand-pos",-1218301989),app.hello.hand_data], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.hello.input_filepath,app.hello.filepath], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.hello.load_json,app.hello.filepath,app.hello.experiment_data], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Reset",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(app.hello.hand_data,null);
})], null)], null)], null)], null);
app.hello.page_plot = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.someclass","p.someclass",-1904646929),"This is ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Plot"], null)," page"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"plotly.js \u306B\u3088\u308B\u30D7\u30ED\u30C3\u30C8"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.plot.plot,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),app.hello.plot_data,new cljs.core.Keyword(null,"layout","layout",-2120940921),app.hello.layout,new cljs.core.Keyword(null,"node","node",581201198),app.hello.plot_node], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return app.plot.update_plot(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),app.hello.plot_data,new cljs.core.Keyword(null,"node","node",581201198),app.hello.plot_node], null));
})], null),"Update Plot"], null)], null)], null);
app.hello.rooter = (function app$hello$rooter(){
return (function (){
var G__37027 = cljs.core.deref(app.hello.current_page);
var G__37027__$1 = (((G__37027 instanceof cljs.core.Keyword))?G__37027.fqn:null);
switch (G__37027__$1) {
case "home":
return app.hello.page_home;

break;
case "plot":
return app.hello.page_plot;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37027__$1)].join('')));

}
});
});
app.hello.hello = (function app$hello$hello(){
return app.hello.rooter();
});

//# sourceMappingURL=app.hello.js.map
