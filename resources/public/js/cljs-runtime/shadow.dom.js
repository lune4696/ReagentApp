goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_42017 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_42017(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_42023 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_42023(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__40608 = coll;
var G__40609 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__40608,G__40609) : shadow.dom.lazy_native_coll_seq.call(null,G__40608,G__40609));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__40658 = arguments.length;
switch (G__40658) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__40674 = arguments.length;
switch (G__40674) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__40683 = arguments.length;
switch (G__40683) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__40693 = arguments.length;
switch (G__40693) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__40732 = arguments.length;
switch (G__40732) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__40751 = arguments.length;
switch (G__40751) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e40787){if((e40787 instanceof Object)){
var e = e40787;
return console.log("didnt support attachEvent",el,e);
} else {
throw e40787;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__40797 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__40798 = null;
var count__40799 = (0);
var i__40800 = (0);
while(true){
if((i__40800 < count__40799)){
var el = chunk__40798.cljs$core$IIndexed$_nth$arity$2(null,i__40800);
var handler_42103__$1 = ((function (seq__40797,chunk__40798,count__40799,i__40800,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__40797,chunk__40798,count__40799,i__40800,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_42103__$1);


var G__42105 = seq__40797;
var G__42106 = chunk__40798;
var G__42107 = count__40799;
var G__42108 = (i__40800 + (1));
seq__40797 = G__42105;
chunk__40798 = G__42106;
count__40799 = G__42107;
i__40800 = G__42108;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40797);
if(temp__5735__auto__){
var seq__40797__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40797__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40797__$1);
var G__42113 = cljs.core.chunk_rest(seq__40797__$1);
var G__42114 = c__4556__auto__;
var G__42115 = cljs.core.count(c__4556__auto__);
var G__42116 = (0);
seq__40797 = G__42113;
chunk__40798 = G__42114;
count__40799 = G__42115;
i__40800 = G__42116;
continue;
} else {
var el = cljs.core.first(seq__40797__$1);
var handler_42117__$1 = ((function (seq__40797,chunk__40798,count__40799,i__40800,el,seq__40797__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__40797,chunk__40798,count__40799,i__40800,el,seq__40797__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_42117__$1);


var G__42119 = cljs.core.next(seq__40797__$1);
var G__42120 = null;
var G__42121 = (0);
var G__42122 = (0);
seq__40797 = G__42119;
chunk__40798 = G__42120;
count__40799 = G__42121;
i__40800 = G__42122;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__40826 = arguments.length;
switch (G__40826) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__40830 = cljs.core.seq(events);
var chunk__40831 = null;
var count__40832 = (0);
var i__40833 = (0);
while(true){
if((i__40833 < count__40832)){
var vec__40869 = chunk__40831.cljs$core$IIndexed$_nth$arity$2(null,i__40833);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40869,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40869,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__42136 = seq__40830;
var G__42137 = chunk__40831;
var G__42138 = count__40832;
var G__42139 = (i__40833 + (1));
seq__40830 = G__42136;
chunk__40831 = G__42137;
count__40832 = G__42138;
i__40833 = G__42139;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40830);
if(temp__5735__auto__){
var seq__40830__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40830__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40830__$1);
var G__42146 = cljs.core.chunk_rest(seq__40830__$1);
var G__42147 = c__4556__auto__;
var G__42148 = cljs.core.count(c__4556__auto__);
var G__42149 = (0);
seq__40830 = G__42146;
chunk__40831 = G__42147;
count__40832 = G__42148;
i__40833 = G__42149;
continue;
} else {
var vec__40880 = cljs.core.first(seq__40830__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40880,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40880,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__42152 = cljs.core.next(seq__40830__$1);
var G__42153 = null;
var G__42154 = (0);
var G__42155 = (0);
seq__40830 = G__42152;
chunk__40831 = G__42153;
count__40832 = G__42154;
i__40833 = G__42155;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__40885 = cljs.core.seq(styles);
var chunk__40886 = null;
var count__40887 = (0);
var i__40888 = (0);
while(true){
if((i__40888 < count__40887)){
var vec__40897 = chunk__40886.cljs$core$IIndexed$_nth$arity$2(null,i__40888);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40897,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40897,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__42163 = seq__40885;
var G__42164 = chunk__40886;
var G__42165 = count__40887;
var G__42166 = (i__40888 + (1));
seq__40885 = G__42163;
chunk__40886 = G__42164;
count__40887 = G__42165;
i__40888 = G__42166;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40885);
if(temp__5735__auto__){
var seq__40885__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40885__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40885__$1);
var G__42170 = cljs.core.chunk_rest(seq__40885__$1);
var G__42171 = c__4556__auto__;
var G__42172 = cljs.core.count(c__4556__auto__);
var G__42173 = (0);
seq__40885 = G__42170;
chunk__40886 = G__42171;
count__40887 = G__42172;
i__40888 = G__42173;
continue;
} else {
var vec__40901 = cljs.core.first(seq__40885__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40901,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40901,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__42177 = cljs.core.next(seq__40885__$1);
var G__42178 = null;
var G__42179 = (0);
var G__42180 = (0);
seq__40885 = G__42177;
chunk__40886 = G__42178;
count__40887 = G__42179;
i__40888 = G__42180;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__40911_42182 = key;
var G__40911_42183__$1 = (((G__40911_42182 instanceof cljs.core.Keyword))?G__40911_42182.fqn:null);
switch (G__40911_42183__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_42189 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_42189,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_42189,"aria-");
}
})())){
el.setAttribute(ks_42189,value);
} else {
(el[ks_42189] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__40960){
var map__40961 = p__40960;
var map__40961__$1 = (((((!((map__40961 == null))))?(((((map__40961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40961):map__40961);
var props = map__40961__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40961__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__40968 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40968,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40968,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40968,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__40975 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__40975,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__40975;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__40979 = arguments.length;
switch (G__40979) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__40994){
var vec__40996 = p__40994;
var seq__40997 = cljs.core.seq(vec__40996);
var first__40998 = cljs.core.first(seq__40997);
var seq__40997__$1 = cljs.core.next(seq__40997);
var nn = first__40998;
var first__40998__$1 = cljs.core.first(seq__40997__$1);
var seq__40997__$2 = cljs.core.next(seq__40997__$1);
var np = first__40998__$1;
var nc = seq__40997__$2;
var node = vec__40996;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__41003 = nn;
var G__41004 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__41003,G__41004) : create_fn.call(null,G__41003,G__41004));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__41006 = nn;
var G__41007 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__41006,G__41007) : create_fn.call(null,G__41006,G__41007));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__41011 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41011,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41011,(1),null);
var seq__41015_42227 = cljs.core.seq(node_children);
var chunk__41016_42228 = null;
var count__41017_42229 = (0);
var i__41018_42230 = (0);
while(true){
if((i__41018_42230 < count__41017_42229)){
var child_struct_42232 = chunk__41016_42228.cljs$core$IIndexed$_nth$arity$2(null,i__41018_42230);
var children_42235 = shadow.dom.dom_node(child_struct_42232);
if(cljs.core.seq_QMARK_(children_42235)){
var seq__41113_42236 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_42235));
var chunk__41115_42237 = null;
var count__41116_42238 = (0);
var i__41117_42239 = (0);
while(true){
if((i__41117_42239 < count__41116_42238)){
var child_42241 = chunk__41115_42237.cljs$core$IIndexed$_nth$arity$2(null,i__41117_42239);
if(cljs.core.truth_(child_42241)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_42241);


var G__42242 = seq__41113_42236;
var G__42244 = chunk__41115_42237;
var G__42245 = count__41116_42238;
var G__42246 = (i__41117_42239 + (1));
seq__41113_42236 = G__42242;
chunk__41115_42237 = G__42244;
count__41116_42238 = G__42245;
i__41117_42239 = G__42246;
continue;
} else {
var G__42247 = seq__41113_42236;
var G__42248 = chunk__41115_42237;
var G__42249 = count__41116_42238;
var G__42250 = (i__41117_42239 + (1));
seq__41113_42236 = G__42247;
chunk__41115_42237 = G__42248;
count__41116_42238 = G__42249;
i__41117_42239 = G__42250;
continue;
}
} else {
var temp__5735__auto___42251 = cljs.core.seq(seq__41113_42236);
if(temp__5735__auto___42251){
var seq__41113_42252__$1 = temp__5735__auto___42251;
if(cljs.core.chunked_seq_QMARK_(seq__41113_42252__$1)){
var c__4556__auto___42253 = cljs.core.chunk_first(seq__41113_42252__$1);
var G__42255 = cljs.core.chunk_rest(seq__41113_42252__$1);
var G__42256 = c__4556__auto___42253;
var G__42257 = cljs.core.count(c__4556__auto___42253);
var G__42258 = (0);
seq__41113_42236 = G__42255;
chunk__41115_42237 = G__42256;
count__41116_42238 = G__42257;
i__41117_42239 = G__42258;
continue;
} else {
var child_42262 = cljs.core.first(seq__41113_42252__$1);
if(cljs.core.truth_(child_42262)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_42262);


var G__42264 = cljs.core.next(seq__41113_42252__$1);
var G__42265 = null;
var G__42266 = (0);
var G__42267 = (0);
seq__41113_42236 = G__42264;
chunk__41115_42237 = G__42265;
count__41116_42238 = G__42266;
i__41117_42239 = G__42267;
continue;
} else {
var G__42268 = cljs.core.next(seq__41113_42252__$1);
var G__42269 = null;
var G__42270 = (0);
var G__42271 = (0);
seq__41113_42236 = G__42268;
chunk__41115_42237 = G__42269;
count__41116_42238 = G__42270;
i__41117_42239 = G__42271;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_42235);
}


var G__42273 = seq__41015_42227;
var G__42274 = chunk__41016_42228;
var G__42275 = count__41017_42229;
var G__42276 = (i__41018_42230 + (1));
seq__41015_42227 = G__42273;
chunk__41016_42228 = G__42274;
count__41017_42229 = G__42275;
i__41018_42230 = G__42276;
continue;
} else {
var temp__5735__auto___42278 = cljs.core.seq(seq__41015_42227);
if(temp__5735__auto___42278){
var seq__41015_42280__$1 = temp__5735__auto___42278;
if(cljs.core.chunked_seq_QMARK_(seq__41015_42280__$1)){
var c__4556__auto___42282 = cljs.core.chunk_first(seq__41015_42280__$1);
var G__42283 = cljs.core.chunk_rest(seq__41015_42280__$1);
var G__42284 = c__4556__auto___42282;
var G__42285 = cljs.core.count(c__4556__auto___42282);
var G__42286 = (0);
seq__41015_42227 = G__42283;
chunk__41016_42228 = G__42284;
count__41017_42229 = G__42285;
i__41018_42230 = G__42286;
continue;
} else {
var child_struct_42288 = cljs.core.first(seq__41015_42280__$1);
var children_42289 = shadow.dom.dom_node(child_struct_42288);
if(cljs.core.seq_QMARK_(children_42289)){
var seq__41130_42291 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_42289));
var chunk__41132_42292 = null;
var count__41133_42293 = (0);
var i__41134_42294 = (0);
while(true){
if((i__41134_42294 < count__41133_42293)){
var child_42296 = chunk__41132_42292.cljs$core$IIndexed$_nth$arity$2(null,i__41134_42294);
if(cljs.core.truth_(child_42296)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_42296);


var G__42299 = seq__41130_42291;
var G__42300 = chunk__41132_42292;
var G__42301 = count__41133_42293;
var G__42302 = (i__41134_42294 + (1));
seq__41130_42291 = G__42299;
chunk__41132_42292 = G__42300;
count__41133_42293 = G__42301;
i__41134_42294 = G__42302;
continue;
} else {
var G__42305 = seq__41130_42291;
var G__42306 = chunk__41132_42292;
var G__42307 = count__41133_42293;
var G__42308 = (i__41134_42294 + (1));
seq__41130_42291 = G__42305;
chunk__41132_42292 = G__42306;
count__41133_42293 = G__42307;
i__41134_42294 = G__42308;
continue;
}
} else {
var temp__5735__auto___42309__$1 = cljs.core.seq(seq__41130_42291);
if(temp__5735__auto___42309__$1){
var seq__41130_42310__$1 = temp__5735__auto___42309__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41130_42310__$1)){
var c__4556__auto___42311 = cljs.core.chunk_first(seq__41130_42310__$1);
var G__42313 = cljs.core.chunk_rest(seq__41130_42310__$1);
var G__42314 = c__4556__auto___42311;
var G__42315 = cljs.core.count(c__4556__auto___42311);
var G__42316 = (0);
seq__41130_42291 = G__42313;
chunk__41132_42292 = G__42314;
count__41133_42293 = G__42315;
i__41134_42294 = G__42316;
continue;
} else {
var child_42317 = cljs.core.first(seq__41130_42310__$1);
if(cljs.core.truth_(child_42317)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_42317);


var G__42319 = cljs.core.next(seq__41130_42310__$1);
var G__42320 = null;
var G__42321 = (0);
var G__42322 = (0);
seq__41130_42291 = G__42319;
chunk__41132_42292 = G__42320;
count__41133_42293 = G__42321;
i__41134_42294 = G__42322;
continue;
} else {
var G__42330 = cljs.core.next(seq__41130_42310__$1);
var G__42331 = null;
var G__42332 = (0);
var G__42333 = (0);
seq__41130_42291 = G__42330;
chunk__41132_42292 = G__42331;
count__41133_42293 = G__42332;
i__41134_42294 = G__42333;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_42289);
}


var G__42334 = cljs.core.next(seq__41015_42280__$1);
var G__42335 = null;
var G__42336 = (0);
var G__42337 = (0);
seq__41015_42227 = G__42334;
chunk__41016_42228 = G__42335;
count__41017_42229 = G__42336;
i__41018_42230 = G__42337;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__41190 = cljs.core.seq(node);
var chunk__41191 = null;
var count__41192 = (0);
var i__41193 = (0);
while(true){
if((i__41193 < count__41192)){
var n = chunk__41191.cljs$core$IIndexed$_nth$arity$2(null,i__41193);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__42356 = seq__41190;
var G__42357 = chunk__41191;
var G__42358 = count__41192;
var G__42359 = (i__41193 + (1));
seq__41190 = G__42356;
chunk__41191 = G__42357;
count__41192 = G__42358;
i__41193 = G__42359;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41190);
if(temp__5735__auto__){
var seq__41190__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41190__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__41190__$1);
var G__42361 = cljs.core.chunk_rest(seq__41190__$1);
var G__42362 = c__4556__auto__;
var G__42363 = cljs.core.count(c__4556__auto__);
var G__42364 = (0);
seq__41190 = G__42361;
chunk__41191 = G__42362;
count__41192 = G__42363;
i__41193 = G__42364;
continue;
} else {
var n = cljs.core.first(seq__41190__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__42370 = cljs.core.next(seq__41190__$1);
var G__42371 = null;
var G__42372 = (0);
var G__42373 = (0);
seq__41190 = G__42370;
chunk__41191 = G__42371;
count__41192 = G__42372;
i__41193 = G__42373;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__41214 = arguments.length;
switch (G__41214) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__41227 = arguments.length;
switch (G__41227) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__41253 = arguments.length;
switch (G__41253) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42406 = arguments.length;
var i__4737__auto___42407 = (0);
while(true){
if((i__4737__auto___42407 < len__4736__auto___42406)){
args__4742__auto__.push((arguments[i__4737__auto___42407]));

var G__42410 = (i__4737__auto___42407 + (1));
i__4737__auto___42407 = G__42410;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__41284_42414 = cljs.core.seq(nodes);
var chunk__41285_42415 = null;
var count__41286_42416 = (0);
var i__41287_42417 = (0);
while(true){
if((i__41287_42417 < count__41286_42416)){
var node_42419 = chunk__41285_42415.cljs$core$IIndexed$_nth$arity$2(null,i__41287_42417);
fragment.appendChild(shadow.dom._to_dom(node_42419));


var G__42422 = seq__41284_42414;
var G__42423 = chunk__41285_42415;
var G__42424 = count__41286_42416;
var G__42425 = (i__41287_42417 + (1));
seq__41284_42414 = G__42422;
chunk__41285_42415 = G__42423;
count__41286_42416 = G__42424;
i__41287_42417 = G__42425;
continue;
} else {
var temp__5735__auto___42426 = cljs.core.seq(seq__41284_42414);
if(temp__5735__auto___42426){
var seq__41284_42427__$1 = temp__5735__auto___42426;
if(cljs.core.chunked_seq_QMARK_(seq__41284_42427__$1)){
var c__4556__auto___42428 = cljs.core.chunk_first(seq__41284_42427__$1);
var G__42429 = cljs.core.chunk_rest(seq__41284_42427__$1);
var G__42430 = c__4556__auto___42428;
var G__42431 = cljs.core.count(c__4556__auto___42428);
var G__42432 = (0);
seq__41284_42414 = G__42429;
chunk__41285_42415 = G__42430;
count__41286_42416 = G__42431;
i__41287_42417 = G__42432;
continue;
} else {
var node_42433 = cljs.core.first(seq__41284_42427__$1);
fragment.appendChild(shadow.dom._to_dom(node_42433));


var G__42435 = cljs.core.next(seq__41284_42427__$1);
var G__42436 = null;
var G__42437 = (0);
var G__42438 = (0);
seq__41284_42414 = G__42435;
chunk__41285_42415 = G__42436;
count__41286_42416 = G__42437;
i__41287_42417 = G__42438;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq41278){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41278));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__41299_42442 = cljs.core.seq(scripts);
var chunk__41300_42443 = null;
var count__41301_42444 = (0);
var i__41302_42445 = (0);
while(true){
if((i__41302_42445 < count__41301_42444)){
var vec__41311_42447 = chunk__41300_42443.cljs$core$IIndexed$_nth$arity$2(null,i__41302_42445);
var script_tag_42448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41311_42447,(0),null);
var script_body_42449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41311_42447,(1),null);
eval(script_body_42449);


var G__42452 = seq__41299_42442;
var G__42453 = chunk__41300_42443;
var G__42454 = count__41301_42444;
var G__42455 = (i__41302_42445 + (1));
seq__41299_42442 = G__42452;
chunk__41300_42443 = G__42453;
count__41301_42444 = G__42454;
i__41302_42445 = G__42455;
continue;
} else {
var temp__5735__auto___42457 = cljs.core.seq(seq__41299_42442);
if(temp__5735__auto___42457){
var seq__41299_42458__$1 = temp__5735__auto___42457;
if(cljs.core.chunked_seq_QMARK_(seq__41299_42458__$1)){
var c__4556__auto___42460 = cljs.core.chunk_first(seq__41299_42458__$1);
var G__42461 = cljs.core.chunk_rest(seq__41299_42458__$1);
var G__42462 = c__4556__auto___42460;
var G__42463 = cljs.core.count(c__4556__auto___42460);
var G__42464 = (0);
seq__41299_42442 = G__42461;
chunk__41300_42443 = G__42462;
count__41301_42444 = G__42463;
i__41302_42445 = G__42464;
continue;
} else {
var vec__41315_42468 = cljs.core.first(seq__41299_42458__$1);
var script_tag_42469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41315_42468,(0),null);
var script_body_42470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41315_42468,(1),null);
eval(script_body_42470);


var G__42472 = cljs.core.next(seq__41299_42458__$1);
var G__42473 = null;
var G__42474 = (0);
var G__42475 = (0);
seq__41299_42442 = G__42472;
chunk__41300_42443 = G__42473;
count__41301_42444 = G__42474;
i__41302_42445 = G__42475;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__41320){
var vec__41322 = p__41320;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41322,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41322,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__41334 = arguments.length;
switch (G__41334) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__41389 = cljs.core.seq(style_keys);
var chunk__41390 = null;
var count__41391 = (0);
var i__41392 = (0);
while(true){
if((i__41392 < count__41391)){
var it = chunk__41390.cljs$core$IIndexed$_nth$arity$2(null,i__41392);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__42495 = seq__41389;
var G__42496 = chunk__41390;
var G__42497 = count__41391;
var G__42498 = (i__41392 + (1));
seq__41389 = G__42495;
chunk__41390 = G__42496;
count__41391 = G__42497;
i__41392 = G__42498;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41389);
if(temp__5735__auto__){
var seq__41389__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41389__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__41389__$1);
var G__42502 = cljs.core.chunk_rest(seq__41389__$1);
var G__42503 = c__4556__auto__;
var G__42504 = cljs.core.count(c__4556__auto__);
var G__42505 = (0);
seq__41389 = G__42502;
chunk__41390 = G__42503;
count__41391 = G__42504;
i__41392 = G__42505;
continue;
} else {
var it = cljs.core.first(seq__41389__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__42507 = cljs.core.next(seq__41389__$1);
var G__42508 = null;
var G__42509 = (0);
var G__42510 = (0);
seq__41389 = G__42507;
chunk__41390 = G__42508;
count__41391 = G__42509;
i__41392 = G__42510;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k41415,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__41435 = k41415;
var G__41435__$1 = (((G__41435 instanceof cljs.core.Keyword))?G__41435.fqn:null);
switch (G__41435__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k41415,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__41449){
var vec__41450 = p__41449;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41450,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41450,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41414){
var self__ = this;
var G__41414__$1 = this;
return (new cljs.core.RecordIter((0),G__41414__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41416,other41417){
var self__ = this;
var this41416__$1 = this;
return (((!((other41417 == null)))) && ((this41416__$1.constructor === other41417.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41416__$1.x,other41417.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41416__$1.y,other41417.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41416__$1.__extmap,other41417.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__41414){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__41490 = cljs.core.keyword_identical_QMARK_;
var expr__41491 = k__4388__auto__;
if(cljs.core.truth_((pred__41490.cljs$core$IFn$_invoke$arity$2 ? pred__41490.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__41491) : pred__41490.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__41491)))){
return (new shadow.dom.Coordinate(G__41414,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__41490.cljs$core$IFn$_invoke$arity$2 ? pred__41490.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__41491) : pred__41490.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__41491)))){
return (new shadow.dom.Coordinate(self__.x,G__41414,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__41414),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__41414){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__41414,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__41420){
var extmap__4419__auto__ = (function (){var G__41522 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__41420,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__41420)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__41522);
} else {
return G__41522;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__41420),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__41420),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k41564,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__41582 = k41564;
var G__41582__$1 = (((G__41582 instanceof cljs.core.Keyword))?G__41582.fqn:null);
switch (G__41582__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k41564,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__41588){
var vec__41590 = p__41588;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41590,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41590,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41563){
var self__ = this;
var G__41563__$1 = this;
return (new cljs.core.RecordIter((0),G__41563__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41565,other41566){
var self__ = this;
var this41565__$1 = this;
return (((!((other41566 == null)))) && ((this41565__$1.constructor === other41566.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41565__$1.w,other41566.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41565__$1.h,other41566.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41565__$1.__extmap,other41566.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__41563){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__41637 = cljs.core.keyword_identical_QMARK_;
var expr__41638 = k__4388__auto__;
if(cljs.core.truth_((pred__41637.cljs$core$IFn$_invoke$arity$2 ? pred__41637.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__41638) : pred__41637.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__41638)))){
return (new shadow.dom.Size(G__41563,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__41637.cljs$core$IFn$_invoke$arity$2 ? pred__41637.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__41638) : pred__41637.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__41638)))){
return (new shadow.dom.Size(self__.w,G__41563,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__41563),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__41563){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__41563,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__41571){
var extmap__4419__auto__ = (function (){var G__41664 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__41571,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__41571)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__41664);
} else {
return G__41664;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__41571),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__41571),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__42598 = (i + (1));
var G__42599 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__42598;
ret = G__42599;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__41704){
var vec__41705 = p__41704;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41705,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41705,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__41710 = arguments.length;
switch (G__41710) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__42611 = ps;
var G__42612 = (i + (1));
el__$1 = G__42611;
i = G__42612;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__41749 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41749,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41749,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41749,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__41757_42649 = cljs.core.seq(props);
var chunk__41758_42650 = null;
var count__41759_42651 = (0);
var i__41760_42652 = (0);
while(true){
if((i__41760_42652 < count__41759_42651)){
var vec__41789_42654 = chunk__41758_42650.cljs$core$IIndexed$_nth$arity$2(null,i__41760_42652);
var k_42655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41789_42654,(0),null);
var v_42656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41789_42654,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_42655);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_42655),v_42656);


var G__42659 = seq__41757_42649;
var G__42660 = chunk__41758_42650;
var G__42661 = count__41759_42651;
var G__42662 = (i__41760_42652 + (1));
seq__41757_42649 = G__42659;
chunk__41758_42650 = G__42660;
count__41759_42651 = G__42661;
i__41760_42652 = G__42662;
continue;
} else {
var temp__5735__auto___42663 = cljs.core.seq(seq__41757_42649);
if(temp__5735__auto___42663){
var seq__41757_42665__$1 = temp__5735__auto___42663;
if(cljs.core.chunked_seq_QMARK_(seq__41757_42665__$1)){
var c__4556__auto___42668 = cljs.core.chunk_first(seq__41757_42665__$1);
var G__42669 = cljs.core.chunk_rest(seq__41757_42665__$1);
var G__42670 = c__4556__auto___42668;
var G__42671 = cljs.core.count(c__4556__auto___42668);
var G__42672 = (0);
seq__41757_42649 = G__42669;
chunk__41758_42650 = G__42670;
count__41759_42651 = G__42671;
i__41760_42652 = G__42672;
continue;
} else {
var vec__41800_42677 = cljs.core.first(seq__41757_42665__$1);
var k_42678 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41800_42677,(0),null);
var v_42679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41800_42677,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_42678);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_42678),v_42679);


var G__42680 = cljs.core.next(seq__41757_42665__$1);
var G__42681 = null;
var G__42682 = (0);
var G__42683 = (0);
seq__41757_42649 = G__42680;
chunk__41758_42650 = G__42681;
count__41759_42651 = G__42682;
i__41760_42652 = G__42683;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__41808 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41808,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41808,(1),null);
var seq__41811_42688 = cljs.core.seq(node_children);
var chunk__41813_42689 = null;
var count__41814_42690 = (0);
var i__41815_42691 = (0);
while(true){
if((i__41815_42691 < count__41814_42690)){
var child_struct_42693 = chunk__41813_42689.cljs$core$IIndexed$_nth$arity$2(null,i__41815_42691);
if((!((child_struct_42693 == null)))){
if(typeof child_struct_42693 === 'string'){
var text_42694 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_42694),child_struct_42693].join(''));
} else {
var children_42696 = shadow.dom.svg_node(child_struct_42693);
if(cljs.core.seq_QMARK_(children_42696)){
var seq__41874_42697 = cljs.core.seq(children_42696);
var chunk__41876_42698 = null;
var count__41877_42699 = (0);
var i__41878_42700 = (0);
while(true){
if((i__41878_42700 < count__41877_42699)){
var child_42703 = chunk__41876_42698.cljs$core$IIndexed$_nth$arity$2(null,i__41878_42700);
if(cljs.core.truth_(child_42703)){
node.appendChild(child_42703);


var G__42704 = seq__41874_42697;
var G__42705 = chunk__41876_42698;
var G__42706 = count__41877_42699;
var G__42707 = (i__41878_42700 + (1));
seq__41874_42697 = G__42704;
chunk__41876_42698 = G__42705;
count__41877_42699 = G__42706;
i__41878_42700 = G__42707;
continue;
} else {
var G__42709 = seq__41874_42697;
var G__42710 = chunk__41876_42698;
var G__42711 = count__41877_42699;
var G__42712 = (i__41878_42700 + (1));
seq__41874_42697 = G__42709;
chunk__41876_42698 = G__42710;
count__41877_42699 = G__42711;
i__41878_42700 = G__42712;
continue;
}
} else {
var temp__5735__auto___42715 = cljs.core.seq(seq__41874_42697);
if(temp__5735__auto___42715){
var seq__41874_42717__$1 = temp__5735__auto___42715;
if(cljs.core.chunked_seq_QMARK_(seq__41874_42717__$1)){
var c__4556__auto___42718 = cljs.core.chunk_first(seq__41874_42717__$1);
var G__42719 = cljs.core.chunk_rest(seq__41874_42717__$1);
var G__42720 = c__4556__auto___42718;
var G__42721 = cljs.core.count(c__4556__auto___42718);
var G__42722 = (0);
seq__41874_42697 = G__42719;
chunk__41876_42698 = G__42720;
count__41877_42699 = G__42721;
i__41878_42700 = G__42722;
continue;
} else {
var child_42723 = cljs.core.first(seq__41874_42717__$1);
if(cljs.core.truth_(child_42723)){
node.appendChild(child_42723);


var G__42724 = cljs.core.next(seq__41874_42717__$1);
var G__42725 = null;
var G__42726 = (0);
var G__42727 = (0);
seq__41874_42697 = G__42724;
chunk__41876_42698 = G__42725;
count__41877_42699 = G__42726;
i__41878_42700 = G__42727;
continue;
} else {
var G__42728 = cljs.core.next(seq__41874_42717__$1);
var G__42729 = null;
var G__42730 = (0);
var G__42731 = (0);
seq__41874_42697 = G__42728;
chunk__41876_42698 = G__42729;
count__41877_42699 = G__42730;
i__41878_42700 = G__42731;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_42696);
}
}


var G__42734 = seq__41811_42688;
var G__42735 = chunk__41813_42689;
var G__42736 = count__41814_42690;
var G__42737 = (i__41815_42691 + (1));
seq__41811_42688 = G__42734;
chunk__41813_42689 = G__42735;
count__41814_42690 = G__42736;
i__41815_42691 = G__42737;
continue;
} else {
var G__42739 = seq__41811_42688;
var G__42740 = chunk__41813_42689;
var G__42741 = count__41814_42690;
var G__42742 = (i__41815_42691 + (1));
seq__41811_42688 = G__42739;
chunk__41813_42689 = G__42740;
count__41814_42690 = G__42741;
i__41815_42691 = G__42742;
continue;
}
} else {
var temp__5735__auto___42744 = cljs.core.seq(seq__41811_42688);
if(temp__5735__auto___42744){
var seq__41811_42746__$1 = temp__5735__auto___42744;
if(cljs.core.chunked_seq_QMARK_(seq__41811_42746__$1)){
var c__4556__auto___42747 = cljs.core.chunk_first(seq__41811_42746__$1);
var G__42748 = cljs.core.chunk_rest(seq__41811_42746__$1);
var G__42749 = c__4556__auto___42747;
var G__42750 = cljs.core.count(c__4556__auto___42747);
var G__42751 = (0);
seq__41811_42688 = G__42748;
chunk__41813_42689 = G__42749;
count__41814_42690 = G__42750;
i__41815_42691 = G__42751;
continue;
} else {
var child_struct_42752 = cljs.core.first(seq__41811_42746__$1);
if((!((child_struct_42752 == null)))){
if(typeof child_struct_42752 === 'string'){
var text_42753 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_42753),child_struct_42752].join(''));
} else {
var children_42755 = shadow.dom.svg_node(child_struct_42752);
if(cljs.core.seq_QMARK_(children_42755)){
var seq__41896_42756 = cljs.core.seq(children_42755);
var chunk__41898_42757 = null;
var count__41899_42758 = (0);
var i__41900_42759 = (0);
while(true){
if((i__41900_42759 < count__41899_42758)){
var child_42762 = chunk__41898_42757.cljs$core$IIndexed$_nth$arity$2(null,i__41900_42759);
if(cljs.core.truth_(child_42762)){
node.appendChild(child_42762);


var G__42764 = seq__41896_42756;
var G__42765 = chunk__41898_42757;
var G__42766 = count__41899_42758;
var G__42767 = (i__41900_42759 + (1));
seq__41896_42756 = G__42764;
chunk__41898_42757 = G__42765;
count__41899_42758 = G__42766;
i__41900_42759 = G__42767;
continue;
} else {
var G__42768 = seq__41896_42756;
var G__42769 = chunk__41898_42757;
var G__42770 = count__41899_42758;
var G__42771 = (i__41900_42759 + (1));
seq__41896_42756 = G__42768;
chunk__41898_42757 = G__42769;
count__41899_42758 = G__42770;
i__41900_42759 = G__42771;
continue;
}
} else {
var temp__5735__auto___42772__$1 = cljs.core.seq(seq__41896_42756);
if(temp__5735__auto___42772__$1){
var seq__41896_42773__$1 = temp__5735__auto___42772__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41896_42773__$1)){
var c__4556__auto___42774 = cljs.core.chunk_first(seq__41896_42773__$1);
var G__42775 = cljs.core.chunk_rest(seq__41896_42773__$1);
var G__42776 = c__4556__auto___42774;
var G__42777 = cljs.core.count(c__4556__auto___42774);
var G__42778 = (0);
seq__41896_42756 = G__42775;
chunk__41898_42757 = G__42776;
count__41899_42758 = G__42777;
i__41900_42759 = G__42778;
continue;
} else {
var child_42779 = cljs.core.first(seq__41896_42773__$1);
if(cljs.core.truth_(child_42779)){
node.appendChild(child_42779);


var G__42780 = cljs.core.next(seq__41896_42773__$1);
var G__42781 = null;
var G__42782 = (0);
var G__42783 = (0);
seq__41896_42756 = G__42780;
chunk__41898_42757 = G__42781;
count__41899_42758 = G__42782;
i__41900_42759 = G__42783;
continue;
} else {
var G__42784 = cljs.core.next(seq__41896_42773__$1);
var G__42785 = null;
var G__42786 = (0);
var G__42787 = (0);
seq__41896_42756 = G__42784;
chunk__41898_42757 = G__42785;
count__41899_42758 = G__42786;
i__41900_42759 = G__42787;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_42755);
}
}


var G__42789 = cljs.core.next(seq__41811_42746__$1);
var G__42790 = null;
var G__42791 = (0);
var G__42792 = (0);
seq__41811_42688 = G__42789;
chunk__41813_42689 = G__42790;
count__41814_42690 = G__42791;
i__41815_42691 = G__42792;
continue;
} else {
var G__42793 = cljs.core.next(seq__41811_42746__$1);
var G__42794 = null;
var G__42795 = (0);
var G__42796 = (0);
seq__41811_42688 = G__42793;
chunk__41813_42689 = G__42794;
count__41814_42690 = G__42795;
i__41815_42691 = G__42796;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42800 = arguments.length;
var i__4737__auto___42801 = (0);
while(true){
if((i__4737__auto___42801 < len__4736__auto___42800)){
args__4742__auto__.push((arguments[i__4737__auto___42801]));

var G__42802 = (i__4737__auto___42801 + (1));
i__4737__auto___42801 = G__42802;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq41924){
var G__41925 = cljs.core.first(seq41924);
var seq41924__$1 = cljs.core.next(seq41924);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41925,seq41924__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__41957 = arguments.length;
switch (G__41957) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__37723__auto___42812 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37724__auto__ = (function (){var switch__36898__auto__ = (function (state_41982){
var state_val_41983 = (state_41982[(1)]);
if((state_val_41983 === (1))){
var state_41982__$1 = state_41982;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41982__$1,(2),once_or_cleanup);
} else {
if((state_val_41983 === (2))){
var inst_41979 = (state_41982[(2)]);
var inst_41980 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_41982__$1 = (function (){var statearr_41988 = state_41982;
(statearr_41988[(7)] = inst_41979);

return statearr_41988;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_41982__$1,inst_41980);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__36899__auto__ = null;
var shadow$dom$state_machine__36899__auto____0 = (function (){
var statearr_41995 = [null,null,null,null,null,null,null,null];
(statearr_41995[(0)] = shadow$dom$state_machine__36899__auto__);

(statearr_41995[(1)] = (1));

return statearr_41995;
});
var shadow$dom$state_machine__36899__auto____1 = (function (state_41982){
while(true){
var ret_value__36900__auto__ = (function (){try{while(true){
var result__36901__auto__ = switch__36898__auto__(state_41982);
if(cljs.core.keyword_identical_QMARK_(result__36901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36901__auto__;
}
break;
}
}catch (e41997){var ex__36902__auto__ = e41997;
var statearr_41998_42820 = state_41982;
(statearr_41998_42820[(2)] = ex__36902__auto__);


if(cljs.core.seq((state_41982[(4)]))){
var statearr_42000_42821 = state_41982;
(statearr_42000_42821[(1)] = cljs.core.first((state_41982[(4)])));

} else {
throw ex__36902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42825 = state_41982;
state_41982 = G__42825;
continue;
} else {
return ret_value__36900__auto__;
}
break;
}
});
shadow$dom$state_machine__36899__auto__ = function(state_41982){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__36899__auto____0.call(this);
case 1:
return shadow$dom$state_machine__36899__auto____1.call(this,state_41982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__36899__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__36899__auto____0;
shadow$dom$state_machine__36899__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__36899__auto____1;
return shadow$dom$state_machine__36899__auto__;
})()
})();
var state__37725__auto__ = (function (){var statearr_42002 = f__37724__auto__();
(statearr_42002[(6)] = c__37723__auto___42812);

return statearr_42002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37725__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
