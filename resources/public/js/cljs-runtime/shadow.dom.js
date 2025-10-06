goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_43334 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_43334(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_43338 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_43338(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__42302 = coll;
var G__42303 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__42302,G__42303) : shadow.dom.lazy_native_coll_seq.call(null,G__42302,G__42303));
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
var G__42341 = arguments.length;
switch (G__42341) {
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
var G__42349 = arguments.length;
switch (G__42349) {
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
var G__42355 = arguments.length;
switch (G__42355) {
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
var G__42362 = arguments.length;
switch (G__42362) {
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
var G__42365 = arguments.length;
switch (G__42365) {
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
var G__42372 = arguments.length;
switch (G__42372) {
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
}catch (e42383){if((e42383 instanceof Object)){
var e = e42383;
return console.log("didnt support attachEvent",el,e);
} else {
throw e42383;

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
var seq__42392 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__42393 = null;
var count__42394 = (0);
var i__42395 = (0);
while(true){
if((i__42395 < count__42394)){
var el = chunk__42393.cljs$core$IIndexed$_nth$arity$2(null,i__42395);
var handler_43364__$1 = ((function (seq__42392,chunk__42393,count__42394,i__42395,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__42392,chunk__42393,count__42394,i__42395,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_43364__$1);


var G__43365 = seq__42392;
var G__43366 = chunk__42393;
var G__43367 = count__42394;
var G__43368 = (i__42395 + (1));
seq__42392 = G__43365;
chunk__42393 = G__43366;
count__42394 = G__43367;
i__42395 = G__43368;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42392);
if(temp__5735__auto__){
var seq__42392__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42392__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__42392__$1);
var G__43371 = cljs.core.chunk_rest(seq__42392__$1);
var G__43372 = c__4556__auto__;
var G__43373 = cljs.core.count(c__4556__auto__);
var G__43374 = (0);
seq__42392 = G__43371;
chunk__42393 = G__43372;
count__42394 = G__43373;
i__42395 = G__43374;
continue;
} else {
var el = cljs.core.first(seq__42392__$1);
var handler_43375__$1 = ((function (seq__42392,chunk__42393,count__42394,i__42395,el,seq__42392__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__42392,chunk__42393,count__42394,i__42395,el,seq__42392__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_43375__$1);


var G__43377 = cljs.core.next(seq__42392__$1);
var G__43378 = null;
var G__43379 = (0);
var G__43380 = (0);
seq__42392 = G__43377;
chunk__42393 = G__43378;
count__42394 = G__43379;
i__42395 = G__43380;
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
var G__42414 = arguments.length;
switch (G__42414) {
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
var seq__42426 = cljs.core.seq(events);
var chunk__42427 = null;
var count__42428 = (0);
var i__42429 = (0);
while(true){
if((i__42429 < count__42428)){
var vec__42442 = chunk__42427.cljs$core$IIndexed$_nth$arity$2(null,i__42429);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42442,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42442,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__43388 = seq__42426;
var G__43389 = chunk__42427;
var G__43390 = count__42428;
var G__43391 = (i__42429 + (1));
seq__42426 = G__43388;
chunk__42427 = G__43389;
count__42428 = G__43390;
i__42429 = G__43391;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42426);
if(temp__5735__auto__){
var seq__42426__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42426__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__42426__$1);
var G__43392 = cljs.core.chunk_rest(seq__42426__$1);
var G__43393 = c__4556__auto__;
var G__43394 = cljs.core.count(c__4556__auto__);
var G__43395 = (0);
seq__42426 = G__43392;
chunk__42427 = G__43393;
count__42428 = G__43394;
i__42429 = G__43395;
continue;
} else {
var vec__42448 = cljs.core.first(seq__42426__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42448,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42448,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__43397 = cljs.core.next(seq__42426__$1);
var G__43398 = null;
var G__43399 = (0);
var G__43400 = (0);
seq__42426 = G__43397;
chunk__42427 = G__43398;
count__42428 = G__43399;
i__42429 = G__43400;
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
var seq__42454 = cljs.core.seq(styles);
var chunk__42455 = null;
var count__42456 = (0);
var i__42457 = (0);
while(true){
if((i__42457 < count__42456)){
var vec__42466 = chunk__42455.cljs$core$IIndexed$_nth$arity$2(null,i__42457);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42466,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42466,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__43401 = seq__42454;
var G__43402 = chunk__42455;
var G__43403 = count__42456;
var G__43404 = (i__42457 + (1));
seq__42454 = G__43401;
chunk__42455 = G__43402;
count__42456 = G__43403;
i__42457 = G__43404;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42454);
if(temp__5735__auto__){
var seq__42454__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42454__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__42454__$1);
var G__43407 = cljs.core.chunk_rest(seq__42454__$1);
var G__43408 = c__4556__auto__;
var G__43409 = cljs.core.count(c__4556__auto__);
var G__43410 = (0);
seq__42454 = G__43407;
chunk__42455 = G__43408;
count__42456 = G__43409;
i__42457 = G__43410;
continue;
} else {
var vec__42471 = cljs.core.first(seq__42454__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42471,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42471,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__43412 = cljs.core.next(seq__42454__$1);
var G__43413 = null;
var G__43414 = (0);
var G__43415 = (0);
seq__42454 = G__43412;
chunk__42455 = G__43413;
count__42456 = G__43414;
i__42457 = G__43415;
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
var G__42475_43417 = key;
var G__42475_43418__$1 = (((G__42475_43417 instanceof cljs.core.Keyword))?G__42475_43417.fqn:null);
switch (G__42475_43418__$1) {
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
var ks_43424 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_43424,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_43424,"aria-");
}
})())){
el.setAttribute(ks_43424,value);
} else {
(el[ks_43424] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__42516){
var map__42518 = p__42516;
var map__42518__$1 = (((((!((map__42518 == null))))?(((((map__42518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42518):map__42518);
var props = map__42518__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42518__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__42524 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42524,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42524,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42524,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__42529 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__42529,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__42529;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__42533 = arguments.length;
switch (G__42533) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__42542){
var vec__42543 = p__42542;
var seq__42544 = cljs.core.seq(vec__42543);
var first__42545 = cljs.core.first(seq__42544);
var seq__42544__$1 = cljs.core.next(seq__42544);
var nn = first__42545;
var first__42545__$1 = cljs.core.first(seq__42544__$1);
var seq__42544__$2 = cljs.core.next(seq__42544__$1);
var np = first__42545__$1;
var nc = seq__42544__$2;
var node = vec__42543;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__42546 = nn;
var G__42547 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__42546,G__42547) : create_fn.call(null,G__42546,G__42547));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__42549 = nn;
var G__42550 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__42549,G__42550) : create_fn.call(null,G__42549,G__42550));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__42557 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42557,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42557,(1),null);
var seq__42560_43449 = cljs.core.seq(node_children);
var chunk__42561_43450 = null;
var count__42562_43452 = (0);
var i__42563_43453 = (0);
while(true){
if((i__42563_43453 < count__42562_43452)){
var child_struct_43454 = chunk__42561_43450.cljs$core$IIndexed$_nth$arity$2(null,i__42563_43453);
var children_43455 = shadow.dom.dom_node(child_struct_43454);
if(cljs.core.seq_QMARK_(children_43455)){
var seq__42606_43456 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_43455));
var chunk__42608_43457 = null;
var count__42609_43458 = (0);
var i__42610_43459 = (0);
while(true){
if((i__42610_43459 < count__42609_43458)){
var child_43460 = chunk__42608_43457.cljs$core$IIndexed$_nth$arity$2(null,i__42610_43459);
if(cljs.core.truth_(child_43460)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_43460);


var G__43462 = seq__42606_43456;
var G__43463 = chunk__42608_43457;
var G__43464 = count__42609_43458;
var G__43465 = (i__42610_43459 + (1));
seq__42606_43456 = G__43462;
chunk__42608_43457 = G__43463;
count__42609_43458 = G__43464;
i__42610_43459 = G__43465;
continue;
} else {
var G__43466 = seq__42606_43456;
var G__43467 = chunk__42608_43457;
var G__43468 = count__42609_43458;
var G__43469 = (i__42610_43459 + (1));
seq__42606_43456 = G__43466;
chunk__42608_43457 = G__43467;
count__42609_43458 = G__43468;
i__42610_43459 = G__43469;
continue;
}
} else {
var temp__5735__auto___43470 = cljs.core.seq(seq__42606_43456);
if(temp__5735__auto___43470){
var seq__42606_43472__$1 = temp__5735__auto___43470;
if(cljs.core.chunked_seq_QMARK_(seq__42606_43472__$1)){
var c__4556__auto___43476 = cljs.core.chunk_first(seq__42606_43472__$1);
var G__43477 = cljs.core.chunk_rest(seq__42606_43472__$1);
var G__43478 = c__4556__auto___43476;
var G__43479 = cljs.core.count(c__4556__auto___43476);
var G__43480 = (0);
seq__42606_43456 = G__43477;
chunk__42608_43457 = G__43478;
count__42609_43458 = G__43479;
i__42610_43459 = G__43480;
continue;
} else {
var child_43482 = cljs.core.first(seq__42606_43472__$1);
if(cljs.core.truth_(child_43482)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_43482);


var G__43483 = cljs.core.next(seq__42606_43472__$1);
var G__43484 = null;
var G__43485 = (0);
var G__43486 = (0);
seq__42606_43456 = G__43483;
chunk__42608_43457 = G__43484;
count__42609_43458 = G__43485;
i__42610_43459 = G__43486;
continue;
} else {
var G__43487 = cljs.core.next(seq__42606_43472__$1);
var G__43488 = null;
var G__43489 = (0);
var G__43490 = (0);
seq__42606_43456 = G__43487;
chunk__42608_43457 = G__43488;
count__42609_43458 = G__43489;
i__42610_43459 = G__43490;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_43455);
}


var G__43491 = seq__42560_43449;
var G__43492 = chunk__42561_43450;
var G__43493 = count__42562_43452;
var G__43494 = (i__42563_43453 + (1));
seq__42560_43449 = G__43491;
chunk__42561_43450 = G__43492;
count__42562_43452 = G__43493;
i__42563_43453 = G__43494;
continue;
} else {
var temp__5735__auto___43500 = cljs.core.seq(seq__42560_43449);
if(temp__5735__auto___43500){
var seq__42560_43501__$1 = temp__5735__auto___43500;
if(cljs.core.chunked_seq_QMARK_(seq__42560_43501__$1)){
var c__4556__auto___43502 = cljs.core.chunk_first(seq__42560_43501__$1);
var G__43503 = cljs.core.chunk_rest(seq__42560_43501__$1);
var G__43504 = c__4556__auto___43502;
var G__43505 = cljs.core.count(c__4556__auto___43502);
var G__43506 = (0);
seq__42560_43449 = G__43503;
chunk__42561_43450 = G__43504;
count__42562_43452 = G__43505;
i__42563_43453 = G__43506;
continue;
} else {
var child_struct_43507 = cljs.core.first(seq__42560_43501__$1);
var children_43508 = shadow.dom.dom_node(child_struct_43507);
if(cljs.core.seq_QMARK_(children_43508)){
var seq__42633_43509 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_43508));
var chunk__42636_43510 = null;
var count__42637_43511 = (0);
var i__42638_43512 = (0);
while(true){
if((i__42638_43512 < count__42637_43511)){
var child_43514 = chunk__42636_43510.cljs$core$IIndexed$_nth$arity$2(null,i__42638_43512);
if(cljs.core.truth_(child_43514)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_43514);


var G__43515 = seq__42633_43509;
var G__43516 = chunk__42636_43510;
var G__43517 = count__42637_43511;
var G__43518 = (i__42638_43512 + (1));
seq__42633_43509 = G__43515;
chunk__42636_43510 = G__43516;
count__42637_43511 = G__43517;
i__42638_43512 = G__43518;
continue;
} else {
var G__43519 = seq__42633_43509;
var G__43520 = chunk__42636_43510;
var G__43521 = count__42637_43511;
var G__43522 = (i__42638_43512 + (1));
seq__42633_43509 = G__43519;
chunk__42636_43510 = G__43520;
count__42637_43511 = G__43521;
i__42638_43512 = G__43522;
continue;
}
} else {
var temp__5735__auto___43523__$1 = cljs.core.seq(seq__42633_43509);
if(temp__5735__auto___43523__$1){
var seq__42633_43524__$1 = temp__5735__auto___43523__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42633_43524__$1)){
var c__4556__auto___43525 = cljs.core.chunk_first(seq__42633_43524__$1);
var G__43526 = cljs.core.chunk_rest(seq__42633_43524__$1);
var G__43527 = c__4556__auto___43525;
var G__43528 = cljs.core.count(c__4556__auto___43525);
var G__43529 = (0);
seq__42633_43509 = G__43526;
chunk__42636_43510 = G__43527;
count__42637_43511 = G__43528;
i__42638_43512 = G__43529;
continue;
} else {
var child_43532 = cljs.core.first(seq__42633_43524__$1);
if(cljs.core.truth_(child_43532)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_43532);


var G__43533 = cljs.core.next(seq__42633_43524__$1);
var G__43534 = null;
var G__43535 = (0);
var G__43536 = (0);
seq__42633_43509 = G__43533;
chunk__42636_43510 = G__43534;
count__42637_43511 = G__43535;
i__42638_43512 = G__43536;
continue;
} else {
var G__43538 = cljs.core.next(seq__42633_43524__$1);
var G__43539 = null;
var G__43540 = (0);
var G__43541 = (0);
seq__42633_43509 = G__43538;
chunk__42636_43510 = G__43539;
count__42637_43511 = G__43540;
i__42638_43512 = G__43541;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_43508);
}


var G__43542 = cljs.core.next(seq__42560_43501__$1);
var G__43543 = null;
var G__43544 = (0);
var G__43545 = (0);
seq__42560_43449 = G__43542;
chunk__42561_43450 = G__43543;
count__42562_43452 = G__43544;
i__42563_43453 = G__43545;
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
var seq__42676 = cljs.core.seq(node);
var chunk__42677 = null;
var count__42678 = (0);
var i__42679 = (0);
while(true){
if((i__42679 < count__42678)){
var n = chunk__42677.cljs$core$IIndexed$_nth$arity$2(null,i__42679);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__43555 = seq__42676;
var G__43556 = chunk__42677;
var G__43557 = count__42678;
var G__43558 = (i__42679 + (1));
seq__42676 = G__43555;
chunk__42677 = G__43556;
count__42678 = G__43557;
i__42679 = G__43558;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42676);
if(temp__5735__auto__){
var seq__42676__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42676__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__42676__$1);
var G__43559 = cljs.core.chunk_rest(seq__42676__$1);
var G__43560 = c__4556__auto__;
var G__43561 = cljs.core.count(c__4556__auto__);
var G__43562 = (0);
seq__42676 = G__43559;
chunk__42677 = G__43560;
count__42678 = G__43561;
i__42679 = G__43562;
continue;
} else {
var n = cljs.core.first(seq__42676__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__43563 = cljs.core.next(seq__42676__$1);
var G__43564 = null;
var G__43565 = (0);
var G__43566 = (0);
seq__42676 = G__43563;
chunk__42677 = G__43564;
count__42678 = G__43565;
i__42679 = G__43566;
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
var G__42713 = arguments.length;
switch (G__42713) {
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
var G__42724 = arguments.length;
switch (G__42724) {
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
var G__42748 = arguments.length;
switch (G__42748) {
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
var len__4736__auto___43587 = arguments.length;
var i__4737__auto___43588 = (0);
while(true){
if((i__4737__auto___43588 < len__4736__auto___43587)){
args__4742__auto__.push((arguments[i__4737__auto___43588]));

var G__43589 = (i__4737__auto___43588 + (1));
i__4737__auto___43588 = G__43589;
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
var seq__42771_43591 = cljs.core.seq(nodes);
var chunk__42772_43592 = null;
var count__42773_43593 = (0);
var i__42774_43594 = (0);
while(true){
if((i__42774_43594 < count__42773_43593)){
var node_43595 = chunk__42772_43592.cljs$core$IIndexed$_nth$arity$2(null,i__42774_43594);
fragment.appendChild(shadow.dom._to_dom(node_43595));


var G__43596 = seq__42771_43591;
var G__43597 = chunk__42772_43592;
var G__43598 = count__42773_43593;
var G__43599 = (i__42774_43594 + (1));
seq__42771_43591 = G__43596;
chunk__42772_43592 = G__43597;
count__42773_43593 = G__43598;
i__42774_43594 = G__43599;
continue;
} else {
var temp__5735__auto___43600 = cljs.core.seq(seq__42771_43591);
if(temp__5735__auto___43600){
var seq__42771_43601__$1 = temp__5735__auto___43600;
if(cljs.core.chunked_seq_QMARK_(seq__42771_43601__$1)){
var c__4556__auto___43602 = cljs.core.chunk_first(seq__42771_43601__$1);
var G__43603 = cljs.core.chunk_rest(seq__42771_43601__$1);
var G__43604 = c__4556__auto___43602;
var G__43605 = cljs.core.count(c__4556__auto___43602);
var G__43606 = (0);
seq__42771_43591 = G__43603;
chunk__42772_43592 = G__43604;
count__42773_43593 = G__43605;
i__42774_43594 = G__43606;
continue;
} else {
var node_43607 = cljs.core.first(seq__42771_43601__$1);
fragment.appendChild(shadow.dom._to_dom(node_43607));


var G__43608 = cljs.core.next(seq__42771_43601__$1);
var G__43609 = null;
var G__43610 = (0);
var G__43611 = (0);
seq__42771_43591 = G__43608;
chunk__42772_43592 = G__43609;
count__42773_43593 = G__43610;
i__42774_43594 = G__43611;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq42768){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42768));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__42781_43612 = cljs.core.seq(scripts);
var chunk__42782_43613 = null;
var count__42783_43614 = (0);
var i__42784_43615 = (0);
while(true){
if((i__42784_43615 < count__42783_43614)){
var vec__42793_43616 = chunk__42782_43613.cljs$core$IIndexed$_nth$arity$2(null,i__42784_43615);
var script_tag_43617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42793_43616,(0),null);
var script_body_43618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42793_43616,(1),null);
eval(script_body_43618);


var G__43621 = seq__42781_43612;
var G__43622 = chunk__42782_43613;
var G__43623 = count__42783_43614;
var G__43624 = (i__42784_43615 + (1));
seq__42781_43612 = G__43621;
chunk__42782_43613 = G__43622;
count__42783_43614 = G__43623;
i__42784_43615 = G__43624;
continue;
} else {
var temp__5735__auto___43625 = cljs.core.seq(seq__42781_43612);
if(temp__5735__auto___43625){
var seq__42781_43626__$1 = temp__5735__auto___43625;
if(cljs.core.chunked_seq_QMARK_(seq__42781_43626__$1)){
var c__4556__auto___43627 = cljs.core.chunk_first(seq__42781_43626__$1);
var G__43629 = cljs.core.chunk_rest(seq__42781_43626__$1);
var G__43630 = c__4556__auto___43627;
var G__43631 = cljs.core.count(c__4556__auto___43627);
var G__43632 = (0);
seq__42781_43612 = G__43629;
chunk__42782_43613 = G__43630;
count__42783_43614 = G__43631;
i__42784_43615 = G__43632;
continue;
} else {
var vec__42796_43633 = cljs.core.first(seq__42781_43626__$1);
var script_tag_43634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42796_43633,(0),null);
var script_body_43635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42796_43633,(1),null);
eval(script_body_43635);


var G__43636 = cljs.core.next(seq__42781_43626__$1);
var G__43637 = null;
var G__43638 = (0);
var G__43639 = (0);
seq__42781_43612 = G__43636;
chunk__42782_43613 = G__43637;
count__42783_43614 = G__43638;
i__42784_43615 = G__43639;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__42799){
var vec__42800 = p__42799;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42800,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42800,(1),null);
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
var G__42806 = arguments.length;
switch (G__42806) {
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
var seq__42818 = cljs.core.seq(style_keys);
var chunk__42820 = null;
var count__42821 = (0);
var i__42822 = (0);
while(true){
if((i__42822 < count__42821)){
var it = chunk__42820.cljs$core$IIndexed$_nth$arity$2(null,i__42822);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__43643 = seq__42818;
var G__43644 = chunk__42820;
var G__43645 = count__42821;
var G__43646 = (i__42822 + (1));
seq__42818 = G__43643;
chunk__42820 = G__43644;
count__42821 = G__43645;
i__42822 = G__43646;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42818);
if(temp__5735__auto__){
var seq__42818__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42818__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__42818__$1);
var G__43647 = cljs.core.chunk_rest(seq__42818__$1);
var G__43648 = c__4556__auto__;
var G__43649 = cljs.core.count(c__4556__auto__);
var G__43650 = (0);
seq__42818 = G__43647;
chunk__42820 = G__43648;
count__42821 = G__43649;
i__42822 = G__43650;
continue;
} else {
var it = cljs.core.first(seq__42818__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__43654 = cljs.core.next(seq__42818__$1);
var G__43655 = null;
var G__43656 = (0);
var G__43657 = (0);
seq__42818 = G__43654;
chunk__42820 = G__43655;
count__42821 = G__43656;
i__42822 = G__43657;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k42829,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__42838 = k42829;
var G__42838__$1 = (((G__42838 instanceof cljs.core.Keyword))?G__42838.fqn:null);
switch (G__42838__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42829,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__42842){
var vec__42843 = p__42842;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42843,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42843,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42828){
var self__ = this;
var G__42828__$1 = this;
return (new cljs.core.RecordIter((0),G__42828__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42830,other42831){
var self__ = this;
var this42830__$1 = this;
return (((!((other42831 == null)))) && ((this42830__$1.constructor === other42831.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42830__$1.x,other42831.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42830__$1.y,other42831.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42830__$1.__extmap,other42831.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__42828){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__42869 = cljs.core.keyword_identical_QMARK_;
var expr__42871 = k__4388__auto__;
if(cljs.core.truth_((pred__42869.cljs$core$IFn$_invoke$arity$2 ? pred__42869.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__42871) : pred__42869.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__42871)))){
return (new shadow.dom.Coordinate(G__42828,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42869.cljs$core$IFn$_invoke$arity$2 ? pred__42869.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__42871) : pred__42869.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__42871)))){
return (new shadow.dom.Coordinate(self__.x,G__42828,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__42828),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__42828){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__42828,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__42834){
var extmap__4419__auto__ = (function (){var G__42894 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__42834,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__42834)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42894);
} else {
return G__42894;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__42834),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__42834),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k42906,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__42918 = k42906;
var G__42918__$1 = (((G__42918 instanceof cljs.core.Keyword))?G__42918.fqn:null);
switch (G__42918__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42906,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__42921){
var vec__42922 = p__42921;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42922,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42922,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42905){
var self__ = this;
var G__42905__$1 = this;
return (new cljs.core.RecordIter((0),G__42905__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42907,other42908){
var self__ = this;
var this42907__$1 = this;
return (((!((other42908 == null)))) && ((this42907__$1.constructor === other42908.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42907__$1.w,other42908.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42907__$1.h,other42908.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42907__$1.__extmap,other42908.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__42905){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__42995 = cljs.core.keyword_identical_QMARK_;
var expr__42996 = k__4388__auto__;
if(cljs.core.truth_((pred__42995.cljs$core$IFn$_invoke$arity$2 ? pred__42995.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__42996) : pred__42995.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__42996)))){
return (new shadow.dom.Size(G__42905,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42995.cljs$core$IFn$_invoke$arity$2 ? pred__42995.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__42996) : pred__42995.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__42996)))){
return (new shadow.dom.Size(self__.w,G__42905,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__42905),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__42905){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__42905,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__42913){
var extmap__4419__auto__ = (function (){var G__43011 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__42913,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__42913)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__43011);
} else {
return G__43011;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__42913),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__42913),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var G__43670 = (i + (1));
var G__43671 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__43670;
ret = G__43671;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__43043){
var vec__43044 = p__43043;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43044,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43044,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__43053 = arguments.length;
switch (G__43053) {
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
var G__43676 = ps;
var G__43677 = (i + (1));
el__$1 = G__43676;
i = G__43677;
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
var vec__43138 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43138,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43138,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43138,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__43143_43681 = cljs.core.seq(props);
var chunk__43144_43682 = null;
var count__43145_43683 = (0);
var i__43146_43684 = (0);
while(true){
if((i__43146_43684 < count__43145_43683)){
var vec__43179_43685 = chunk__43144_43682.cljs$core$IIndexed$_nth$arity$2(null,i__43146_43684);
var k_43686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43179_43685,(0),null);
var v_43687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43179_43685,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_43686);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_43686),v_43687);


var G__43688 = seq__43143_43681;
var G__43689 = chunk__43144_43682;
var G__43690 = count__43145_43683;
var G__43691 = (i__43146_43684 + (1));
seq__43143_43681 = G__43688;
chunk__43144_43682 = G__43689;
count__43145_43683 = G__43690;
i__43146_43684 = G__43691;
continue;
} else {
var temp__5735__auto___43692 = cljs.core.seq(seq__43143_43681);
if(temp__5735__auto___43692){
var seq__43143_43693__$1 = temp__5735__auto___43692;
if(cljs.core.chunked_seq_QMARK_(seq__43143_43693__$1)){
var c__4556__auto___43694 = cljs.core.chunk_first(seq__43143_43693__$1);
var G__43695 = cljs.core.chunk_rest(seq__43143_43693__$1);
var G__43696 = c__4556__auto___43694;
var G__43697 = cljs.core.count(c__4556__auto___43694);
var G__43698 = (0);
seq__43143_43681 = G__43695;
chunk__43144_43682 = G__43696;
count__43145_43683 = G__43697;
i__43146_43684 = G__43698;
continue;
} else {
var vec__43193_43699 = cljs.core.first(seq__43143_43693__$1);
var k_43700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43193_43699,(0),null);
var v_43701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43193_43699,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_43700);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_43700),v_43701);


var G__43702 = cljs.core.next(seq__43143_43693__$1);
var G__43703 = null;
var G__43704 = (0);
var G__43705 = (0);
seq__43143_43681 = G__43702;
chunk__43144_43682 = G__43703;
count__43145_43683 = G__43704;
i__43146_43684 = G__43705;
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
var vec__43219 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43219,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43219,(1),null);
var seq__43224_43708 = cljs.core.seq(node_children);
var chunk__43227_43709 = null;
var count__43228_43710 = (0);
var i__43229_43711 = (0);
while(true){
if((i__43229_43711 < count__43228_43710)){
var child_struct_43712 = chunk__43227_43709.cljs$core$IIndexed$_nth$arity$2(null,i__43229_43711);
if((!((child_struct_43712 == null)))){
if(typeof child_struct_43712 === 'string'){
var text_43713 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_43713),child_struct_43712].join(''));
} else {
var children_43715 = shadow.dom.svg_node(child_struct_43712);
if(cljs.core.seq_QMARK_(children_43715)){
var seq__43257_43718 = cljs.core.seq(children_43715);
var chunk__43259_43719 = null;
var count__43260_43720 = (0);
var i__43261_43721 = (0);
while(true){
if((i__43261_43721 < count__43260_43720)){
var child_43722 = chunk__43259_43719.cljs$core$IIndexed$_nth$arity$2(null,i__43261_43721);
if(cljs.core.truth_(child_43722)){
node.appendChild(child_43722);


var G__43725 = seq__43257_43718;
var G__43726 = chunk__43259_43719;
var G__43727 = count__43260_43720;
var G__43728 = (i__43261_43721 + (1));
seq__43257_43718 = G__43725;
chunk__43259_43719 = G__43726;
count__43260_43720 = G__43727;
i__43261_43721 = G__43728;
continue;
} else {
var G__43729 = seq__43257_43718;
var G__43730 = chunk__43259_43719;
var G__43731 = count__43260_43720;
var G__43732 = (i__43261_43721 + (1));
seq__43257_43718 = G__43729;
chunk__43259_43719 = G__43730;
count__43260_43720 = G__43731;
i__43261_43721 = G__43732;
continue;
}
} else {
var temp__5735__auto___43733 = cljs.core.seq(seq__43257_43718);
if(temp__5735__auto___43733){
var seq__43257_43734__$1 = temp__5735__auto___43733;
if(cljs.core.chunked_seq_QMARK_(seq__43257_43734__$1)){
var c__4556__auto___43735 = cljs.core.chunk_first(seq__43257_43734__$1);
var G__43736 = cljs.core.chunk_rest(seq__43257_43734__$1);
var G__43737 = c__4556__auto___43735;
var G__43738 = cljs.core.count(c__4556__auto___43735);
var G__43739 = (0);
seq__43257_43718 = G__43736;
chunk__43259_43719 = G__43737;
count__43260_43720 = G__43738;
i__43261_43721 = G__43739;
continue;
} else {
var child_43740 = cljs.core.first(seq__43257_43734__$1);
if(cljs.core.truth_(child_43740)){
node.appendChild(child_43740);


var G__43741 = cljs.core.next(seq__43257_43734__$1);
var G__43742 = null;
var G__43743 = (0);
var G__43744 = (0);
seq__43257_43718 = G__43741;
chunk__43259_43719 = G__43742;
count__43260_43720 = G__43743;
i__43261_43721 = G__43744;
continue;
} else {
var G__43745 = cljs.core.next(seq__43257_43734__$1);
var G__43746 = null;
var G__43747 = (0);
var G__43748 = (0);
seq__43257_43718 = G__43745;
chunk__43259_43719 = G__43746;
count__43260_43720 = G__43747;
i__43261_43721 = G__43748;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_43715);
}
}


var G__43750 = seq__43224_43708;
var G__43751 = chunk__43227_43709;
var G__43752 = count__43228_43710;
var G__43753 = (i__43229_43711 + (1));
seq__43224_43708 = G__43750;
chunk__43227_43709 = G__43751;
count__43228_43710 = G__43752;
i__43229_43711 = G__43753;
continue;
} else {
var G__43758 = seq__43224_43708;
var G__43759 = chunk__43227_43709;
var G__43760 = count__43228_43710;
var G__43761 = (i__43229_43711 + (1));
seq__43224_43708 = G__43758;
chunk__43227_43709 = G__43759;
count__43228_43710 = G__43760;
i__43229_43711 = G__43761;
continue;
}
} else {
var temp__5735__auto___43762 = cljs.core.seq(seq__43224_43708);
if(temp__5735__auto___43762){
var seq__43224_43763__$1 = temp__5735__auto___43762;
if(cljs.core.chunked_seq_QMARK_(seq__43224_43763__$1)){
var c__4556__auto___43764 = cljs.core.chunk_first(seq__43224_43763__$1);
var G__43765 = cljs.core.chunk_rest(seq__43224_43763__$1);
var G__43766 = c__4556__auto___43764;
var G__43767 = cljs.core.count(c__4556__auto___43764);
var G__43768 = (0);
seq__43224_43708 = G__43765;
chunk__43227_43709 = G__43766;
count__43228_43710 = G__43767;
i__43229_43711 = G__43768;
continue;
} else {
var child_struct_43769 = cljs.core.first(seq__43224_43763__$1);
if((!((child_struct_43769 == null)))){
if(typeof child_struct_43769 === 'string'){
var text_43770 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_43770),child_struct_43769].join(''));
} else {
var children_43771 = shadow.dom.svg_node(child_struct_43769);
if(cljs.core.seq_QMARK_(children_43771)){
var seq__43265_43772 = cljs.core.seq(children_43771);
var chunk__43267_43773 = null;
var count__43268_43774 = (0);
var i__43269_43775 = (0);
while(true){
if((i__43269_43775 < count__43268_43774)){
var child_43776 = chunk__43267_43773.cljs$core$IIndexed$_nth$arity$2(null,i__43269_43775);
if(cljs.core.truth_(child_43776)){
node.appendChild(child_43776);


var G__43777 = seq__43265_43772;
var G__43778 = chunk__43267_43773;
var G__43779 = count__43268_43774;
var G__43780 = (i__43269_43775 + (1));
seq__43265_43772 = G__43777;
chunk__43267_43773 = G__43778;
count__43268_43774 = G__43779;
i__43269_43775 = G__43780;
continue;
} else {
var G__43781 = seq__43265_43772;
var G__43782 = chunk__43267_43773;
var G__43783 = count__43268_43774;
var G__43784 = (i__43269_43775 + (1));
seq__43265_43772 = G__43781;
chunk__43267_43773 = G__43782;
count__43268_43774 = G__43783;
i__43269_43775 = G__43784;
continue;
}
} else {
var temp__5735__auto___43785__$1 = cljs.core.seq(seq__43265_43772);
if(temp__5735__auto___43785__$1){
var seq__43265_43787__$1 = temp__5735__auto___43785__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43265_43787__$1)){
var c__4556__auto___43788 = cljs.core.chunk_first(seq__43265_43787__$1);
var G__43789 = cljs.core.chunk_rest(seq__43265_43787__$1);
var G__43790 = c__4556__auto___43788;
var G__43791 = cljs.core.count(c__4556__auto___43788);
var G__43792 = (0);
seq__43265_43772 = G__43789;
chunk__43267_43773 = G__43790;
count__43268_43774 = G__43791;
i__43269_43775 = G__43792;
continue;
} else {
var child_43794 = cljs.core.first(seq__43265_43787__$1);
if(cljs.core.truth_(child_43794)){
node.appendChild(child_43794);


var G__43795 = cljs.core.next(seq__43265_43787__$1);
var G__43796 = null;
var G__43797 = (0);
var G__43798 = (0);
seq__43265_43772 = G__43795;
chunk__43267_43773 = G__43796;
count__43268_43774 = G__43797;
i__43269_43775 = G__43798;
continue;
} else {
var G__43799 = cljs.core.next(seq__43265_43787__$1);
var G__43800 = null;
var G__43801 = (0);
var G__43802 = (0);
seq__43265_43772 = G__43799;
chunk__43267_43773 = G__43800;
count__43268_43774 = G__43801;
i__43269_43775 = G__43802;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_43771);
}
}


var G__43804 = cljs.core.next(seq__43224_43763__$1);
var G__43805 = null;
var G__43806 = (0);
var G__43807 = (0);
seq__43224_43708 = G__43804;
chunk__43227_43709 = G__43805;
count__43228_43710 = G__43806;
i__43229_43711 = G__43807;
continue;
} else {
var G__43808 = cljs.core.next(seq__43224_43763__$1);
var G__43809 = null;
var G__43810 = (0);
var G__43811 = (0);
seq__43224_43708 = G__43808;
chunk__43227_43709 = G__43809;
count__43228_43710 = G__43810;
i__43229_43711 = G__43811;
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
var len__4736__auto___43819 = arguments.length;
var i__4737__auto___43821 = (0);
while(true){
if((i__4737__auto___43821 < len__4736__auto___43819)){
args__4742__auto__.push((arguments[i__4737__auto___43821]));

var G__43822 = (i__4737__auto___43821 + (1));
i__4737__auto___43821 = G__43822;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq43282){
var G__43283 = cljs.core.first(seq43282);
var seq43282__$1 = cljs.core.next(seq43282);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43283,seq43282__$1);
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
var G__43290 = arguments.length;
switch (G__43290) {
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
var c__37909__auto___43831 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37910__auto__ = (function (){var switch__37342__auto__ = (function (state_43303){
var state_val_43304 = (state_43303[(1)]);
if((state_val_43304 === (1))){
var state_43303__$1 = state_43303;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43303__$1,(2),once_or_cleanup);
} else {
if((state_val_43304 === (2))){
var inst_43300 = (state_43303[(2)]);
var inst_43301 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_43303__$1 = (function (){var statearr_43309 = state_43303;
(statearr_43309[(7)] = inst_43300);

return statearr_43309;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43303__$1,inst_43301);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__37343__auto__ = null;
var shadow$dom$state_machine__37343__auto____0 = (function (){
var statearr_43312 = [null,null,null,null,null,null,null,null];
(statearr_43312[(0)] = shadow$dom$state_machine__37343__auto__);

(statearr_43312[(1)] = (1));

return statearr_43312;
});
var shadow$dom$state_machine__37343__auto____1 = (function (state_43303){
while(true){
var ret_value__37344__auto__ = (function (){try{while(true){
var result__37345__auto__ = switch__37342__auto__(state_43303);
if(cljs.core.keyword_identical_QMARK_(result__37345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37345__auto__;
}
break;
}
}catch (e43313){var ex__37346__auto__ = e43313;
var statearr_43314_43844 = state_43303;
(statearr_43314_43844[(2)] = ex__37346__auto__);


if(cljs.core.seq((state_43303[(4)]))){
var statearr_43315_43845 = state_43303;
(statearr_43315_43845[(1)] = cljs.core.first((state_43303[(4)])));

} else {
throw ex__37346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43846 = state_43303;
state_43303 = G__43846;
continue;
} else {
return ret_value__37344__auto__;
}
break;
}
});
shadow$dom$state_machine__37343__auto__ = function(state_43303){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__37343__auto____0.call(this);
case 1:
return shadow$dom$state_machine__37343__auto____1.call(this,state_43303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__37343__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__37343__auto____0;
shadow$dom$state_machine__37343__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__37343__auto____1;
return shadow$dom$state_machine__37343__auto__;
})()
})();
var state__37911__auto__ = (function (){var statearr_43317 = f__37910__auto__();
(statearr_43317[(6)] = c__37909__auto___43831);

return statearr_43317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37911__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
