goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_42839 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_42839(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_42844 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_42844(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__41506 = coll;
var G__41507 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__41506,G__41507) : shadow.dom.lazy_native_coll_seq.call(null,G__41506,G__41507));
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
var G__41549 = arguments.length;
switch (G__41549) {
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
var G__41558 = arguments.length;
switch (G__41558) {
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
var G__41570 = arguments.length;
switch (G__41570) {
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
var G__41575 = arguments.length;
switch (G__41575) {
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
var G__41592 = arguments.length;
switch (G__41592) {
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
var G__41610 = arguments.length;
switch (G__41610) {
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
}catch (e41637){if((e41637 instanceof Object)){
var e = e41637;
return console.log("didnt support attachEvent",el,e);
} else {
throw e41637;

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
var seq__41653 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__41654 = null;
var count__41655 = (0);
var i__41656 = (0);
while(true){
if((i__41656 < count__41655)){
var el = chunk__41654.cljs$core$IIndexed$_nth$arity$2(null,i__41656);
var handler_42946__$1 = ((function (seq__41653,chunk__41654,count__41655,i__41656,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__41653,chunk__41654,count__41655,i__41656,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_42946__$1);


var G__42949 = seq__41653;
var G__42950 = chunk__41654;
var G__42951 = count__41655;
var G__42952 = (i__41656 + (1));
seq__41653 = G__42949;
chunk__41654 = G__42950;
count__41655 = G__42951;
i__41656 = G__42952;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41653);
if(temp__5735__auto__){
var seq__41653__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41653__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__41653__$1);
var G__42957 = cljs.core.chunk_rest(seq__41653__$1);
var G__42958 = c__4556__auto__;
var G__42959 = cljs.core.count(c__4556__auto__);
var G__42960 = (0);
seq__41653 = G__42957;
chunk__41654 = G__42958;
count__41655 = G__42959;
i__41656 = G__42960;
continue;
} else {
var el = cljs.core.first(seq__41653__$1);
var handler_42961__$1 = ((function (seq__41653,chunk__41654,count__41655,i__41656,el,seq__41653__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__41653,chunk__41654,count__41655,i__41656,el,seq__41653__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_42961__$1);


var G__42964 = cljs.core.next(seq__41653__$1);
var G__42965 = null;
var G__42966 = (0);
var G__42967 = (0);
seq__41653 = G__42964;
chunk__41654 = G__42965;
count__41655 = G__42966;
i__41656 = G__42967;
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
var G__41685 = arguments.length;
switch (G__41685) {
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
var seq__41693 = cljs.core.seq(events);
var chunk__41694 = null;
var count__41695 = (0);
var i__41696 = (0);
while(true){
if((i__41696 < count__41695)){
var vec__41717 = chunk__41694.cljs$core$IIndexed$_nth$arity$2(null,i__41696);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41717,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41717,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__42997 = seq__41693;
var G__42998 = chunk__41694;
var G__42999 = count__41695;
var G__43000 = (i__41696 + (1));
seq__41693 = G__42997;
chunk__41694 = G__42998;
count__41695 = G__42999;
i__41696 = G__43000;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41693);
if(temp__5735__auto__){
var seq__41693__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41693__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__41693__$1);
var G__43003 = cljs.core.chunk_rest(seq__41693__$1);
var G__43004 = c__4556__auto__;
var G__43005 = cljs.core.count(c__4556__auto__);
var G__43006 = (0);
seq__41693 = G__43003;
chunk__41694 = G__43004;
count__41695 = G__43005;
i__41696 = G__43006;
continue;
} else {
var vec__41721 = cljs.core.first(seq__41693__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41721,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41721,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__43016 = cljs.core.next(seq__41693__$1);
var G__43017 = null;
var G__43018 = (0);
var G__43019 = (0);
seq__41693 = G__43016;
chunk__41694 = G__43017;
count__41695 = G__43018;
i__41696 = G__43019;
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
var seq__41724 = cljs.core.seq(styles);
var chunk__41725 = null;
var count__41726 = (0);
var i__41727 = (0);
while(true){
if((i__41727 < count__41726)){
var vec__41741 = chunk__41725.cljs$core$IIndexed$_nth$arity$2(null,i__41727);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41741,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41741,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__43026 = seq__41724;
var G__43027 = chunk__41725;
var G__43028 = count__41726;
var G__43029 = (i__41727 + (1));
seq__41724 = G__43026;
chunk__41725 = G__43027;
count__41726 = G__43028;
i__41727 = G__43029;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41724);
if(temp__5735__auto__){
var seq__41724__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41724__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__41724__$1);
var G__43032 = cljs.core.chunk_rest(seq__41724__$1);
var G__43033 = c__4556__auto__;
var G__43034 = cljs.core.count(c__4556__auto__);
var G__43035 = (0);
seq__41724 = G__43032;
chunk__41725 = G__43033;
count__41726 = G__43034;
i__41727 = G__43035;
continue;
} else {
var vec__41749 = cljs.core.first(seq__41724__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41749,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41749,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__43036 = cljs.core.next(seq__41724__$1);
var G__43037 = null;
var G__43038 = (0);
var G__43039 = (0);
seq__41724 = G__43036;
chunk__41725 = G__43037;
count__41726 = G__43038;
i__41727 = G__43039;
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
var G__41762_43044 = key;
var G__41762_43045__$1 = (((G__41762_43044 instanceof cljs.core.Keyword))?G__41762_43044.fqn:null);
switch (G__41762_43045__$1) {
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
var ks_43059 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_43059,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_43059,"aria-");
}
})())){
el.setAttribute(ks_43059,value);
} else {
(el[ks_43059] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__41855){
var map__41857 = p__41855;
var map__41857__$1 = (((((!((map__41857 == null))))?(((((map__41857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41857):map__41857);
var props = map__41857__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41857__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__41864 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41864,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41864,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41864,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__41870 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__41870,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__41870;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__41877 = arguments.length;
switch (G__41877) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__41889){
var vec__41891 = p__41889;
var seq__41892 = cljs.core.seq(vec__41891);
var first__41893 = cljs.core.first(seq__41892);
var seq__41892__$1 = cljs.core.next(seq__41892);
var nn = first__41893;
var first__41893__$1 = cljs.core.first(seq__41892__$1);
var seq__41892__$2 = cljs.core.next(seq__41892__$1);
var np = first__41893__$1;
var nc = seq__41892__$2;
var node = vec__41891;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__41896 = nn;
var G__41897 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__41896,G__41897) : create_fn.call(null,G__41896,G__41897));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__41901 = nn;
var G__41902 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__41901,G__41902) : create_fn.call(null,G__41901,G__41902));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__41905 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41905,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41905,(1),null);
var seq__41909_43098 = cljs.core.seq(node_children);
var chunk__41910_43099 = null;
var count__41911_43100 = (0);
var i__41912_43101 = (0);
while(true){
if((i__41912_43101 < count__41911_43100)){
var child_struct_43102 = chunk__41910_43099.cljs$core$IIndexed$_nth$arity$2(null,i__41912_43101);
var children_43103 = shadow.dom.dom_node(child_struct_43102);
if(cljs.core.seq_QMARK_(children_43103)){
var seq__41944_43105 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_43103));
var chunk__41946_43106 = null;
var count__41947_43107 = (0);
var i__41948_43108 = (0);
while(true){
if((i__41948_43108 < count__41947_43107)){
var child_43109 = chunk__41946_43106.cljs$core$IIndexed$_nth$arity$2(null,i__41948_43108);
if(cljs.core.truth_(child_43109)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_43109);


var G__43110 = seq__41944_43105;
var G__43111 = chunk__41946_43106;
var G__43112 = count__41947_43107;
var G__43113 = (i__41948_43108 + (1));
seq__41944_43105 = G__43110;
chunk__41946_43106 = G__43111;
count__41947_43107 = G__43112;
i__41948_43108 = G__43113;
continue;
} else {
var G__43114 = seq__41944_43105;
var G__43115 = chunk__41946_43106;
var G__43116 = count__41947_43107;
var G__43117 = (i__41948_43108 + (1));
seq__41944_43105 = G__43114;
chunk__41946_43106 = G__43115;
count__41947_43107 = G__43116;
i__41948_43108 = G__43117;
continue;
}
} else {
var temp__5735__auto___43118 = cljs.core.seq(seq__41944_43105);
if(temp__5735__auto___43118){
var seq__41944_43123__$1 = temp__5735__auto___43118;
if(cljs.core.chunked_seq_QMARK_(seq__41944_43123__$1)){
var c__4556__auto___43125 = cljs.core.chunk_first(seq__41944_43123__$1);
var G__43126 = cljs.core.chunk_rest(seq__41944_43123__$1);
var G__43127 = c__4556__auto___43125;
var G__43128 = cljs.core.count(c__4556__auto___43125);
var G__43129 = (0);
seq__41944_43105 = G__43126;
chunk__41946_43106 = G__43127;
count__41947_43107 = G__43128;
i__41948_43108 = G__43129;
continue;
} else {
var child_43136 = cljs.core.first(seq__41944_43123__$1);
if(cljs.core.truth_(child_43136)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_43136);


var G__43137 = cljs.core.next(seq__41944_43123__$1);
var G__43138 = null;
var G__43139 = (0);
var G__43140 = (0);
seq__41944_43105 = G__43137;
chunk__41946_43106 = G__43138;
count__41947_43107 = G__43139;
i__41948_43108 = G__43140;
continue;
} else {
var G__43147 = cljs.core.next(seq__41944_43123__$1);
var G__43148 = null;
var G__43149 = (0);
var G__43150 = (0);
seq__41944_43105 = G__43147;
chunk__41946_43106 = G__43148;
count__41947_43107 = G__43149;
i__41948_43108 = G__43150;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_43103);
}


var G__43156 = seq__41909_43098;
var G__43157 = chunk__41910_43099;
var G__43158 = count__41911_43100;
var G__43159 = (i__41912_43101 + (1));
seq__41909_43098 = G__43156;
chunk__41910_43099 = G__43157;
count__41911_43100 = G__43158;
i__41912_43101 = G__43159;
continue;
} else {
var temp__5735__auto___43160 = cljs.core.seq(seq__41909_43098);
if(temp__5735__auto___43160){
var seq__41909_43162__$1 = temp__5735__auto___43160;
if(cljs.core.chunked_seq_QMARK_(seq__41909_43162__$1)){
var c__4556__auto___43163 = cljs.core.chunk_first(seq__41909_43162__$1);
var G__43164 = cljs.core.chunk_rest(seq__41909_43162__$1);
var G__43165 = c__4556__auto___43163;
var G__43166 = cljs.core.count(c__4556__auto___43163);
var G__43167 = (0);
seq__41909_43098 = G__43164;
chunk__41910_43099 = G__43165;
count__41911_43100 = G__43166;
i__41912_43101 = G__43167;
continue;
} else {
var child_struct_43171 = cljs.core.first(seq__41909_43162__$1);
var children_43172 = shadow.dom.dom_node(child_struct_43171);
if(cljs.core.seq_QMARK_(children_43172)){
var seq__41971_43177 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_43172));
var chunk__41973_43178 = null;
var count__41974_43179 = (0);
var i__41975_43180 = (0);
while(true){
if((i__41975_43180 < count__41974_43179)){
var child_43182 = chunk__41973_43178.cljs$core$IIndexed$_nth$arity$2(null,i__41975_43180);
if(cljs.core.truth_(child_43182)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_43182);


var G__43183 = seq__41971_43177;
var G__43184 = chunk__41973_43178;
var G__43185 = count__41974_43179;
var G__43186 = (i__41975_43180 + (1));
seq__41971_43177 = G__43183;
chunk__41973_43178 = G__43184;
count__41974_43179 = G__43185;
i__41975_43180 = G__43186;
continue;
} else {
var G__43188 = seq__41971_43177;
var G__43189 = chunk__41973_43178;
var G__43190 = count__41974_43179;
var G__43191 = (i__41975_43180 + (1));
seq__41971_43177 = G__43188;
chunk__41973_43178 = G__43189;
count__41974_43179 = G__43190;
i__41975_43180 = G__43191;
continue;
}
} else {
var temp__5735__auto___43193__$1 = cljs.core.seq(seq__41971_43177);
if(temp__5735__auto___43193__$1){
var seq__41971_43194__$1 = temp__5735__auto___43193__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41971_43194__$1)){
var c__4556__auto___43195 = cljs.core.chunk_first(seq__41971_43194__$1);
var G__43196 = cljs.core.chunk_rest(seq__41971_43194__$1);
var G__43197 = c__4556__auto___43195;
var G__43198 = cljs.core.count(c__4556__auto___43195);
var G__43199 = (0);
seq__41971_43177 = G__43196;
chunk__41973_43178 = G__43197;
count__41974_43179 = G__43198;
i__41975_43180 = G__43199;
continue;
} else {
var child_43202 = cljs.core.first(seq__41971_43194__$1);
if(cljs.core.truth_(child_43202)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_43202);


var G__43206 = cljs.core.next(seq__41971_43194__$1);
var G__43207 = null;
var G__43208 = (0);
var G__43209 = (0);
seq__41971_43177 = G__43206;
chunk__41973_43178 = G__43207;
count__41974_43179 = G__43208;
i__41975_43180 = G__43209;
continue;
} else {
var G__43211 = cljs.core.next(seq__41971_43194__$1);
var G__43212 = null;
var G__43213 = (0);
var G__43214 = (0);
seq__41971_43177 = G__43211;
chunk__41973_43178 = G__43212;
count__41974_43179 = G__43213;
i__41975_43180 = G__43214;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_43172);
}


var G__43215 = cljs.core.next(seq__41909_43162__$1);
var G__43216 = null;
var G__43217 = (0);
var G__43218 = (0);
seq__41909_43098 = G__43215;
chunk__41910_43099 = G__43216;
count__41911_43100 = G__43217;
i__41912_43101 = G__43218;
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
var seq__42026 = cljs.core.seq(node);
var chunk__42027 = null;
var count__42028 = (0);
var i__42029 = (0);
while(true){
if((i__42029 < count__42028)){
var n = chunk__42027.cljs$core$IIndexed$_nth$arity$2(null,i__42029);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__43228 = seq__42026;
var G__43229 = chunk__42027;
var G__43230 = count__42028;
var G__43231 = (i__42029 + (1));
seq__42026 = G__43228;
chunk__42027 = G__43229;
count__42028 = G__43230;
i__42029 = G__43231;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42026);
if(temp__5735__auto__){
var seq__42026__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42026__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__42026__$1);
var G__43232 = cljs.core.chunk_rest(seq__42026__$1);
var G__43233 = c__4556__auto__;
var G__43234 = cljs.core.count(c__4556__auto__);
var G__43235 = (0);
seq__42026 = G__43232;
chunk__42027 = G__43233;
count__42028 = G__43234;
i__42029 = G__43235;
continue;
} else {
var n = cljs.core.first(seq__42026__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__43236 = cljs.core.next(seq__42026__$1);
var G__43237 = null;
var G__43238 = (0);
var G__43239 = (0);
seq__42026 = G__43236;
chunk__42027 = G__43237;
count__42028 = G__43238;
i__42029 = G__43239;
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
var G__42057 = arguments.length;
switch (G__42057) {
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
var G__42073 = arguments.length;
switch (G__42073) {
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
var G__42090 = arguments.length;
switch (G__42090) {
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
var len__4736__auto___43270 = arguments.length;
var i__4737__auto___43271 = (0);
while(true){
if((i__4737__auto___43271 < len__4736__auto___43270)){
args__4742__auto__.push((arguments[i__4737__auto___43271]));

var G__43272 = (i__4737__auto___43271 + (1));
i__4737__auto___43271 = G__43272;
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
var seq__42131_43283 = cljs.core.seq(nodes);
var chunk__42132_43284 = null;
var count__42133_43285 = (0);
var i__42134_43286 = (0);
while(true){
if((i__42134_43286 < count__42133_43285)){
var node_43288 = chunk__42132_43284.cljs$core$IIndexed$_nth$arity$2(null,i__42134_43286);
fragment.appendChild(shadow.dom._to_dom(node_43288));


var G__43289 = seq__42131_43283;
var G__43290 = chunk__42132_43284;
var G__43291 = count__42133_43285;
var G__43292 = (i__42134_43286 + (1));
seq__42131_43283 = G__43289;
chunk__42132_43284 = G__43290;
count__42133_43285 = G__43291;
i__42134_43286 = G__43292;
continue;
} else {
var temp__5735__auto___43293 = cljs.core.seq(seq__42131_43283);
if(temp__5735__auto___43293){
var seq__42131_43294__$1 = temp__5735__auto___43293;
if(cljs.core.chunked_seq_QMARK_(seq__42131_43294__$1)){
var c__4556__auto___43295 = cljs.core.chunk_first(seq__42131_43294__$1);
var G__43297 = cljs.core.chunk_rest(seq__42131_43294__$1);
var G__43298 = c__4556__auto___43295;
var G__43299 = cljs.core.count(c__4556__auto___43295);
var G__43300 = (0);
seq__42131_43283 = G__43297;
chunk__42132_43284 = G__43298;
count__42133_43285 = G__43299;
i__42134_43286 = G__43300;
continue;
} else {
var node_43302 = cljs.core.first(seq__42131_43294__$1);
fragment.appendChild(shadow.dom._to_dom(node_43302));


var G__43303 = cljs.core.next(seq__42131_43294__$1);
var G__43304 = null;
var G__43305 = (0);
var G__43306 = (0);
seq__42131_43283 = G__43303;
chunk__42132_43284 = G__43304;
count__42133_43285 = G__43305;
i__42134_43286 = G__43306;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq42119){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42119));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__42147_43310 = cljs.core.seq(scripts);
var chunk__42148_43311 = null;
var count__42149_43312 = (0);
var i__42150_43313 = (0);
while(true){
if((i__42150_43313 < count__42149_43312)){
var vec__42170_43314 = chunk__42148_43311.cljs$core$IIndexed$_nth$arity$2(null,i__42150_43313);
var script_tag_43315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42170_43314,(0),null);
var script_body_43316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42170_43314,(1),null);
eval(script_body_43316);


var G__43317 = seq__42147_43310;
var G__43318 = chunk__42148_43311;
var G__43319 = count__42149_43312;
var G__43320 = (i__42150_43313 + (1));
seq__42147_43310 = G__43317;
chunk__42148_43311 = G__43318;
count__42149_43312 = G__43319;
i__42150_43313 = G__43320;
continue;
} else {
var temp__5735__auto___43321 = cljs.core.seq(seq__42147_43310);
if(temp__5735__auto___43321){
var seq__42147_43322__$1 = temp__5735__auto___43321;
if(cljs.core.chunked_seq_QMARK_(seq__42147_43322__$1)){
var c__4556__auto___43325 = cljs.core.chunk_first(seq__42147_43322__$1);
var G__43327 = cljs.core.chunk_rest(seq__42147_43322__$1);
var G__43328 = c__4556__auto___43325;
var G__43329 = cljs.core.count(c__4556__auto___43325);
var G__43330 = (0);
seq__42147_43310 = G__43327;
chunk__42148_43311 = G__43328;
count__42149_43312 = G__43329;
i__42150_43313 = G__43330;
continue;
} else {
var vec__42179_43334 = cljs.core.first(seq__42147_43322__$1);
var script_tag_43335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42179_43334,(0),null);
var script_body_43336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42179_43334,(1),null);
eval(script_body_43336);


var G__43338 = cljs.core.next(seq__42147_43322__$1);
var G__43339 = null;
var G__43340 = (0);
var G__43341 = (0);
seq__42147_43310 = G__43338;
chunk__42148_43311 = G__43339;
count__42149_43312 = G__43340;
i__42150_43313 = G__43341;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__42183){
var vec__42184 = p__42183;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42184,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42184,(1),null);
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
var G__42207 = arguments.length;
switch (G__42207) {
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
var seq__42234 = cljs.core.seq(style_keys);
var chunk__42235 = null;
var count__42236 = (0);
var i__42237 = (0);
while(true){
if((i__42237 < count__42236)){
var it = chunk__42235.cljs$core$IIndexed$_nth$arity$2(null,i__42237);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__43380 = seq__42234;
var G__43381 = chunk__42235;
var G__43382 = count__42236;
var G__43383 = (i__42237 + (1));
seq__42234 = G__43380;
chunk__42235 = G__43381;
count__42236 = G__43382;
i__42237 = G__43383;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42234);
if(temp__5735__auto__){
var seq__42234__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42234__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__42234__$1);
var G__43394 = cljs.core.chunk_rest(seq__42234__$1);
var G__43395 = c__4556__auto__;
var G__43396 = cljs.core.count(c__4556__auto__);
var G__43397 = (0);
seq__42234 = G__43394;
chunk__42235 = G__43395;
count__42236 = G__43396;
i__42237 = G__43397;
continue;
} else {
var it = cljs.core.first(seq__42234__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__43398 = cljs.core.next(seq__42234__$1);
var G__43399 = null;
var G__43400 = (0);
var G__43401 = (0);
seq__42234 = G__43398;
chunk__42235 = G__43399;
count__42236 = G__43400;
i__42237 = G__43401;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k42255,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__42270 = k42255;
var G__42270__$1 = (((G__42270 instanceof cljs.core.Keyword))?G__42270.fqn:null);
switch (G__42270__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42255,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__42276){
var vec__42280 = p__42276;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42280,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42280,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42254){
var self__ = this;
var G__42254__$1 = this;
return (new cljs.core.RecordIter((0),G__42254__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42256,other42257){
var self__ = this;
var this42256__$1 = this;
return (((!((other42257 == null)))) && ((this42256__$1.constructor === other42257.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42256__$1.x,other42257.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42256__$1.y,other42257.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42256__$1.__extmap,other42257.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__42254){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__42350 = cljs.core.keyword_identical_QMARK_;
var expr__42351 = k__4388__auto__;
if(cljs.core.truth_((pred__42350.cljs$core$IFn$_invoke$arity$2 ? pred__42350.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__42351) : pred__42350.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__42351)))){
return (new shadow.dom.Coordinate(G__42254,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42350.cljs$core$IFn$_invoke$arity$2 ? pred__42350.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__42351) : pred__42350.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__42351)))){
return (new shadow.dom.Coordinate(self__.x,G__42254,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__42254),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__42254){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__42254,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__42266){
var extmap__4419__auto__ = (function (){var G__42390 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__42266,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__42266)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42390);
} else {
return G__42390;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__42266),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__42266),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k42425,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__42436 = k42425;
var G__42436__$1 = (((G__42436 instanceof cljs.core.Keyword))?G__42436.fqn:null);
switch (G__42436__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42425,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__42438){
var vec__42439 = p__42438;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42439,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42439,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42424){
var self__ = this;
var G__42424__$1 = this;
return (new cljs.core.RecordIter((0),G__42424__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42426,other42427){
var self__ = this;
var this42426__$1 = this;
return (((!((other42427 == null)))) && ((this42426__$1.constructor === other42427.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42426__$1.w,other42427.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42426__$1.h,other42427.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42426__$1.__extmap,other42427.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__42424){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__42461 = cljs.core.keyword_identical_QMARK_;
var expr__42462 = k__4388__auto__;
if(cljs.core.truth_((pred__42461.cljs$core$IFn$_invoke$arity$2 ? pred__42461.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__42462) : pred__42461.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__42462)))){
return (new shadow.dom.Size(G__42424,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42461.cljs$core$IFn$_invoke$arity$2 ? pred__42461.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__42462) : pred__42461.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__42462)))){
return (new shadow.dom.Size(self__.w,G__42424,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__42424),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__42424){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__42424,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__42432){
var extmap__4419__auto__ = (function (){var G__42480 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__42432,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__42432)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42480);
} else {
return G__42480;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__42432),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__42432),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var G__43532 = (i + (1));
var G__43533 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__43532;
ret = G__43533;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__42507){
var vec__42508 = p__42507;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42508,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42508,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__42518 = arguments.length;
switch (G__42518) {
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
var G__43557 = ps;
var G__43558 = (i + (1));
el__$1 = G__43557;
i = G__43558;
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
var vec__42591 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42591,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42591,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42591,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__42597_43574 = cljs.core.seq(props);
var chunk__42598_43575 = null;
var count__42599_43576 = (0);
var i__42600_43577 = (0);
while(true){
if((i__42600_43577 < count__42599_43576)){
var vec__42616_43578 = chunk__42598_43575.cljs$core$IIndexed$_nth$arity$2(null,i__42600_43577);
var k_43579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42616_43578,(0),null);
var v_43580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42616_43578,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_43579);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_43579),v_43580);


var G__43583 = seq__42597_43574;
var G__43584 = chunk__42598_43575;
var G__43585 = count__42599_43576;
var G__43586 = (i__42600_43577 + (1));
seq__42597_43574 = G__43583;
chunk__42598_43575 = G__43584;
count__42599_43576 = G__43585;
i__42600_43577 = G__43586;
continue;
} else {
var temp__5735__auto___43588 = cljs.core.seq(seq__42597_43574);
if(temp__5735__auto___43588){
var seq__42597_43589__$1 = temp__5735__auto___43588;
if(cljs.core.chunked_seq_QMARK_(seq__42597_43589__$1)){
var c__4556__auto___43591 = cljs.core.chunk_first(seq__42597_43589__$1);
var G__43593 = cljs.core.chunk_rest(seq__42597_43589__$1);
var G__43594 = c__4556__auto___43591;
var G__43595 = cljs.core.count(c__4556__auto___43591);
var G__43596 = (0);
seq__42597_43574 = G__43593;
chunk__42598_43575 = G__43594;
count__42599_43576 = G__43595;
i__42600_43577 = G__43596;
continue;
} else {
var vec__42619_43598 = cljs.core.first(seq__42597_43589__$1);
var k_43599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42619_43598,(0),null);
var v_43600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42619_43598,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_43599);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_43599),v_43600);


var G__43602 = cljs.core.next(seq__42597_43589__$1);
var G__43603 = null;
var G__43604 = (0);
var G__43605 = (0);
seq__42597_43574 = G__43602;
chunk__42598_43575 = G__43603;
count__42599_43576 = G__43604;
i__42600_43577 = G__43605;
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
var vec__42627 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42627,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42627,(1),null);
var seq__42630_43610 = cljs.core.seq(node_children);
var chunk__42632_43611 = null;
var count__42633_43612 = (0);
var i__42634_43613 = (0);
while(true){
if((i__42634_43613 < count__42633_43612)){
var child_struct_43614 = chunk__42632_43611.cljs$core$IIndexed$_nth$arity$2(null,i__42634_43613);
if((!((child_struct_43614 == null)))){
if(typeof child_struct_43614 === 'string'){
var text_43615 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_43615),child_struct_43614].join(''));
} else {
var children_43616 = shadow.dom.svg_node(child_struct_43614);
if(cljs.core.seq_QMARK_(children_43616)){
var seq__42681_43622 = cljs.core.seq(children_43616);
var chunk__42683_43623 = null;
var count__42684_43624 = (0);
var i__42685_43625 = (0);
while(true){
if((i__42685_43625 < count__42684_43624)){
var child_43626 = chunk__42683_43623.cljs$core$IIndexed$_nth$arity$2(null,i__42685_43625);
if(cljs.core.truth_(child_43626)){
node.appendChild(child_43626);


var G__43629 = seq__42681_43622;
var G__43630 = chunk__42683_43623;
var G__43631 = count__42684_43624;
var G__43632 = (i__42685_43625 + (1));
seq__42681_43622 = G__43629;
chunk__42683_43623 = G__43630;
count__42684_43624 = G__43631;
i__42685_43625 = G__43632;
continue;
} else {
var G__43636 = seq__42681_43622;
var G__43637 = chunk__42683_43623;
var G__43638 = count__42684_43624;
var G__43639 = (i__42685_43625 + (1));
seq__42681_43622 = G__43636;
chunk__42683_43623 = G__43637;
count__42684_43624 = G__43638;
i__42685_43625 = G__43639;
continue;
}
} else {
var temp__5735__auto___43640 = cljs.core.seq(seq__42681_43622);
if(temp__5735__auto___43640){
var seq__42681_43641__$1 = temp__5735__auto___43640;
if(cljs.core.chunked_seq_QMARK_(seq__42681_43641__$1)){
var c__4556__auto___43643 = cljs.core.chunk_first(seq__42681_43641__$1);
var G__43648 = cljs.core.chunk_rest(seq__42681_43641__$1);
var G__43649 = c__4556__auto___43643;
var G__43650 = cljs.core.count(c__4556__auto___43643);
var G__43651 = (0);
seq__42681_43622 = G__43648;
chunk__42683_43623 = G__43649;
count__42684_43624 = G__43650;
i__42685_43625 = G__43651;
continue;
} else {
var child_43652 = cljs.core.first(seq__42681_43641__$1);
if(cljs.core.truth_(child_43652)){
node.appendChild(child_43652);


var G__43665 = cljs.core.next(seq__42681_43641__$1);
var G__43667 = null;
var G__43668 = (0);
var G__43669 = (0);
seq__42681_43622 = G__43665;
chunk__42683_43623 = G__43667;
count__42684_43624 = G__43668;
i__42685_43625 = G__43669;
continue;
} else {
var G__43685 = cljs.core.next(seq__42681_43641__$1);
var G__43686 = null;
var G__43687 = (0);
var G__43688 = (0);
seq__42681_43622 = G__43685;
chunk__42683_43623 = G__43686;
count__42684_43624 = G__43687;
i__42685_43625 = G__43688;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_43616);
}
}


var G__43689 = seq__42630_43610;
var G__43690 = chunk__42632_43611;
var G__43691 = count__42633_43612;
var G__43692 = (i__42634_43613 + (1));
seq__42630_43610 = G__43689;
chunk__42632_43611 = G__43690;
count__42633_43612 = G__43691;
i__42634_43613 = G__43692;
continue;
} else {
var G__43695 = seq__42630_43610;
var G__43696 = chunk__42632_43611;
var G__43697 = count__42633_43612;
var G__43698 = (i__42634_43613 + (1));
seq__42630_43610 = G__43695;
chunk__42632_43611 = G__43696;
count__42633_43612 = G__43697;
i__42634_43613 = G__43698;
continue;
}
} else {
var temp__5735__auto___43700 = cljs.core.seq(seq__42630_43610);
if(temp__5735__auto___43700){
var seq__42630_43701__$1 = temp__5735__auto___43700;
if(cljs.core.chunked_seq_QMARK_(seq__42630_43701__$1)){
var c__4556__auto___43702 = cljs.core.chunk_first(seq__42630_43701__$1);
var G__43703 = cljs.core.chunk_rest(seq__42630_43701__$1);
var G__43704 = c__4556__auto___43702;
var G__43705 = cljs.core.count(c__4556__auto___43702);
var G__43706 = (0);
seq__42630_43610 = G__43703;
chunk__42632_43611 = G__43704;
count__42633_43612 = G__43705;
i__42634_43613 = G__43706;
continue;
} else {
var child_struct_43710 = cljs.core.first(seq__42630_43701__$1);
if((!((child_struct_43710 == null)))){
if(typeof child_struct_43710 === 'string'){
var text_43711 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_43711),child_struct_43710].join(''));
} else {
var children_43712 = shadow.dom.svg_node(child_struct_43710);
if(cljs.core.seq_QMARK_(children_43712)){
var seq__42697_43713 = cljs.core.seq(children_43712);
var chunk__42699_43714 = null;
var count__42700_43717 = (0);
var i__42701_43720 = (0);
while(true){
if((i__42701_43720 < count__42700_43717)){
var child_43725 = chunk__42699_43714.cljs$core$IIndexed$_nth$arity$2(null,i__42701_43720);
if(cljs.core.truth_(child_43725)){
node.appendChild(child_43725);


var G__43729 = seq__42697_43713;
var G__43730 = chunk__42699_43714;
var G__43731 = count__42700_43717;
var G__43732 = (i__42701_43720 + (1));
seq__42697_43713 = G__43729;
chunk__42699_43714 = G__43730;
count__42700_43717 = G__43731;
i__42701_43720 = G__43732;
continue;
} else {
var G__43733 = seq__42697_43713;
var G__43734 = chunk__42699_43714;
var G__43735 = count__42700_43717;
var G__43736 = (i__42701_43720 + (1));
seq__42697_43713 = G__43733;
chunk__42699_43714 = G__43734;
count__42700_43717 = G__43735;
i__42701_43720 = G__43736;
continue;
}
} else {
var temp__5735__auto___43737__$1 = cljs.core.seq(seq__42697_43713);
if(temp__5735__auto___43737__$1){
var seq__42697_43738__$1 = temp__5735__auto___43737__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42697_43738__$1)){
var c__4556__auto___43740 = cljs.core.chunk_first(seq__42697_43738__$1);
var G__43741 = cljs.core.chunk_rest(seq__42697_43738__$1);
var G__43742 = c__4556__auto___43740;
var G__43743 = cljs.core.count(c__4556__auto___43740);
var G__43744 = (0);
seq__42697_43713 = G__43741;
chunk__42699_43714 = G__43742;
count__42700_43717 = G__43743;
i__42701_43720 = G__43744;
continue;
} else {
var child_43745 = cljs.core.first(seq__42697_43738__$1);
if(cljs.core.truth_(child_43745)){
node.appendChild(child_43745);


var G__43746 = cljs.core.next(seq__42697_43738__$1);
var G__43747 = null;
var G__43748 = (0);
var G__43749 = (0);
seq__42697_43713 = G__43746;
chunk__42699_43714 = G__43747;
count__42700_43717 = G__43748;
i__42701_43720 = G__43749;
continue;
} else {
var G__43750 = cljs.core.next(seq__42697_43738__$1);
var G__43751 = null;
var G__43752 = (0);
var G__43753 = (0);
seq__42697_43713 = G__43750;
chunk__42699_43714 = G__43751;
count__42700_43717 = G__43752;
i__42701_43720 = G__43753;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_43712);
}
}


var G__43754 = cljs.core.next(seq__42630_43701__$1);
var G__43755 = null;
var G__43756 = (0);
var G__43757 = (0);
seq__42630_43610 = G__43754;
chunk__42632_43611 = G__43755;
count__42633_43612 = G__43756;
i__42634_43613 = G__43757;
continue;
} else {
var G__43758 = cljs.core.next(seq__42630_43701__$1);
var G__43759 = null;
var G__43760 = (0);
var G__43761 = (0);
seq__42630_43610 = G__43758;
chunk__42632_43611 = G__43759;
count__42633_43612 = G__43760;
i__42634_43613 = G__43761;
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
var len__4736__auto___43775 = arguments.length;
var i__4737__auto___43776 = (0);
while(true){
if((i__4737__auto___43776 < len__4736__auto___43775)){
args__4742__auto__.push((arguments[i__4737__auto___43776]));

var G__43777 = (i__4737__auto___43776 + (1));
i__4737__auto___43776 = G__43777;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq42731){
var G__42732 = cljs.core.first(seq42731);
var seq42731__$1 = cljs.core.next(seq42731);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42732,seq42731__$1);
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
var G__42755 = arguments.length;
switch (G__42755) {
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
var c__37751__auto___43793 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37752__auto__ = (function (){var switch__36983__auto__ = (function (state_42786){
var state_val_42787 = (state_42786[(1)]);
if((state_val_42787 === (1))){
var state_42786__$1 = state_42786;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42786__$1,(2),once_or_cleanup);
} else {
if((state_val_42787 === (2))){
var inst_42783 = (state_42786[(2)]);
var inst_42784 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_42786__$1 = (function (){var statearr_42794 = state_42786;
(statearr_42794[(7)] = inst_42783);

return statearr_42794;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42786__$1,inst_42784);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__36984__auto__ = null;
var shadow$dom$state_machine__36984__auto____0 = (function (){
var statearr_42795 = [null,null,null,null,null,null,null,null];
(statearr_42795[(0)] = shadow$dom$state_machine__36984__auto__);

(statearr_42795[(1)] = (1));

return statearr_42795;
});
var shadow$dom$state_machine__36984__auto____1 = (function (state_42786){
while(true){
var ret_value__36985__auto__ = (function (){try{while(true){
var result__36986__auto__ = switch__36983__auto__(state_42786);
if(cljs.core.keyword_identical_QMARK_(result__36986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36986__auto__;
}
break;
}
}catch (e42800){var ex__36987__auto__ = e42800;
var statearr_42802_43800 = state_42786;
(statearr_42802_43800[(2)] = ex__36987__auto__);


if(cljs.core.seq((state_42786[(4)]))){
var statearr_42803_43801 = state_42786;
(statearr_42803_43801[(1)] = cljs.core.first((state_42786[(4)])));

} else {
throw ex__36987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43802 = state_42786;
state_42786 = G__43802;
continue;
} else {
return ret_value__36985__auto__;
}
break;
}
});
shadow$dom$state_machine__36984__auto__ = function(state_42786){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__36984__auto____0.call(this);
case 1:
return shadow$dom$state_machine__36984__auto____1.call(this,state_42786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__36984__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__36984__auto____0;
shadow$dom$state_machine__36984__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__36984__auto____1;
return shadow$dom$state_machine__36984__auto__;
})()
})();
var state__37753__auto__ = (function (){var statearr_42809 = f__37752__auto__();
(statearr_42809[(6)] = c__37751__auto___43793);

return statearr_42809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37753__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
