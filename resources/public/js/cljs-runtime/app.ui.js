goog.provide('app.ui');
app.ui.timer = (function app$ui$timer(comp,class$){
var with_let39792 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let39792","with-let39792",-1339588024));
var temp__5739__auto___39797 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___39797 == null)){
} else {
var c__35423__auto___39798 = temp__5739__auto___39797;
if((with_let39792.generation === c__35423__auto___39798.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let39792.generation = c__35423__auto___39798.ratomGeneration);
}

var init39793 = (with_let39792.length === (0));
var sec = ((((init39793) || (cljs.core.not(with_let39792.hasOwnProperty((0))))))?(with_let39792[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0))):(with_let39792[(0)]));
var res39794 = (function (){
setTimeout((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(sec,cljs.core.inc);
}),(1000));

return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,class$,cljs.core.mod(((cljs.core.deref(sec) / ((24) * (60))) | (0)),(60)),":",cljs.core.mod(((cljs.core.deref(sec) / (60)) | (0)),(60)),":",cljs.core.mod(cljs.core.deref(sec),(60))], null);
})()
;
return res39794;
});
app.ui.text_input = (function app$ui$text_input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full border",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__39795_SHARP_){
return cljs.core.reset_BANG_(value,p1__39795_SHARP_.target.value);
})], null)], null);
});
app.ui.slider = (function app$ui$slider(target,param,value,min,max,invalidates,recalc){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var new_value = parseInt(e.target.value);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(target,(function (data){
var G__39796 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,param,new_value),invalidates);
return (recalc.cljs$core$IFn$_invoke$arity$1 ? recalc.cljs$core$IFn$_invoke$arity$1(G__39796) : recalc.call(null,G__39796));
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
