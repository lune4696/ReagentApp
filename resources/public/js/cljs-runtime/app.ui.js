goog.provide('app.ui');
app.ui.timer = (function app$ui$timer(){
var with_let50430 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let50430","with-let50430",-1239558476));
var temp__5739__auto___50435 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___50435 == null)){
} else {
var c__38041__auto___50436 = temp__5739__auto___50435;
if((with_let50430.generation === c__38041__auto___50436.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let50430.generation = c__38041__auto___50436.ratomGeneration);
}

var init50431 = (with_let50430.length === (0));
var sec = ((((init50431) || (cljs.core.not(with_let50430.hasOwnProperty((0))))))?(with_let50430[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0))):(with_let50430[(0)]));
var res50432 = (function (){
setTimeout((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(sec,cljs.core.inc);
}),(1000));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Seconds Elapsed: ",cljs.core.deref(sec)], null);
})()
;
return res50432;
});
app.ui.text_input = (function app$ui$text_input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__50433_SHARP_){
return cljs.core.reset_BANG_(value,p1__50433_SHARP_.target.value);
})], null)], null);
});
app.ui.slider = (function app$ui$slider(target,param,value,min,max,invalidates,calc){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var new_value = parseInt(e.target.value);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(target,(function (data){
var G__50434 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,param,new_value),invalidates);
return (calc.cljs$core$IFn$_invoke$arity$1 ? calc.cljs$core$IFn$_invoke$arity$1(G__50434) : calc.call(null,G__50434));
}));
})], null)], null);
});
/**
 * リスト
 */
app.ui.lister = (function app$ui$lister(items){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,c){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Item: ",c], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
}),items)], null);
});

//# sourceMappingURL=app.ui.js.map
