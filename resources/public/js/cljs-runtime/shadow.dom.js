goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_34022 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_34022(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_34026 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_34026(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32654 = coll;
var G__32655 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32654,G__32655) : shadow.dom.lazy_native_coll_seq.call(null,G__32654,G__32655));
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
var G__32717 = arguments.length;
switch (G__32717) {
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
var G__32730 = arguments.length;
switch (G__32730) {
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
var G__32742 = arguments.length;
switch (G__32742) {
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
var G__32756 = arguments.length;
switch (G__32756) {
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
var G__32799 = arguments.length;
switch (G__32799) {
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
var G__32834 = arguments.length;
switch (G__32834) {
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
}catch (e32855){if((e32855 instanceof Object)){
var e = e32855;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32855;

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
var seq__32882 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32883 = null;
var count__32884 = (0);
var i__32885 = (0);
while(true){
if((i__32885 < count__32884)){
var el = chunk__32883.cljs$core$IIndexed$_nth$arity$2(null,i__32885);
var handler_34070__$1 = ((function (seq__32882,chunk__32883,count__32884,i__32885,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32882,chunk__32883,count__32884,i__32885,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34070__$1);


var G__34071 = seq__32882;
var G__34072 = chunk__32883;
var G__34073 = count__32884;
var G__34074 = (i__32885 + (1));
seq__32882 = G__34071;
chunk__32883 = G__34072;
count__32884 = G__34073;
i__32885 = G__34074;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32882);
if(temp__5735__auto__){
var seq__32882__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32882__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32882__$1);
var G__34075 = cljs.core.chunk_rest(seq__32882__$1);
var G__34076 = c__4556__auto__;
var G__34077 = cljs.core.count(c__4556__auto__);
var G__34078 = (0);
seq__32882 = G__34075;
chunk__32883 = G__34076;
count__32884 = G__34077;
i__32885 = G__34078;
continue;
} else {
var el = cljs.core.first(seq__32882__$1);
var handler_34079__$1 = ((function (seq__32882,chunk__32883,count__32884,i__32885,el,seq__32882__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32882,chunk__32883,count__32884,i__32885,el,seq__32882__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34079__$1);


var G__34080 = cljs.core.next(seq__32882__$1);
var G__34081 = null;
var G__34082 = (0);
var G__34083 = (0);
seq__32882 = G__34080;
chunk__32883 = G__34081;
count__32884 = G__34082;
i__32885 = G__34083;
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
var G__32921 = arguments.length;
switch (G__32921) {
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
var seq__32951 = cljs.core.seq(events);
var chunk__32952 = null;
var count__32953 = (0);
var i__32954 = (0);
while(true){
if((i__32954 < count__32953)){
var vec__32980 = chunk__32952.cljs$core$IIndexed$_nth$arity$2(null,i__32954);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32980,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32980,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34087 = seq__32951;
var G__34088 = chunk__32952;
var G__34089 = count__32953;
var G__34090 = (i__32954 + (1));
seq__32951 = G__34087;
chunk__32952 = G__34088;
count__32953 = G__34089;
i__32954 = G__34090;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32951);
if(temp__5735__auto__){
var seq__32951__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32951__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32951__$1);
var G__34091 = cljs.core.chunk_rest(seq__32951__$1);
var G__34092 = c__4556__auto__;
var G__34093 = cljs.core.count(c__4556__auto__);
var G__34094 = (0);
seq__32951 = G__34091;
chunk__32952 = G__34092;
count__32953 = G__34093;
i__32954 = G__34094;
continue;
} else {
var vec__32989 = cljs.core.first(seq__32951__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32989,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32989,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34097 = cljs.core.next(seq__32951__$1);
var G__34098 = null;
var G__34099 = (0);
var G__34100 = (0);
seq__32951 = G__34097;
chunk__32952 = G__34098;
count__32953 = G__34099;
i__32954 = G__34100;
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
var seq__33003 = cljs.core.seq(styles);
var chunk__33004 = null;
var count__33005 = (0);
var i__33006 = (0);
while(true){
if((i__33006 < count__33005)){
var vec__33032 = chunk__33004.cljs$core$IIndexed$_nth$arity$2(null,i__33006);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33032,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33032,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34101 = seq__33003;
var G__34102 = chunk__33004;
var G__34103 = count__33005;
var G__34104 = (i__33006 + (1));
seq__33003 = G__34101;
chunk__33004 = G__34102;
count__33005 = G__34103;
i__33006 = G__34104;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33003);
if(temp__5735__auto__){
var seq__33003__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33003__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33003__$1);
var G__34105 = cljs.core.chunk_rest(seq__33003__$1);
var G__34106 = c__4556__auto__;
var G__34107 = cljs.core.count(c__4556__auto__);
var G__34108 = (0);
seq__33003 = G__34105;
chunk__33004 = G__34106;
count__33005 = G__34107;
i__33006 = G__34108;
continue;
} else {
var vec__33043 = cljs.core.first(seq__33003__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33043,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33043,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34110 = cljs.core.next(seq__33003__$1);
var G__34111 = null;
var G__34112 = (0);
var G__34113 = (0);
seq__33003 = G__34110;
chunk__33004 = G__34111;
count__33005 = G__34112;
i__33006 = G__34113;
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
var G__33063_34114 = key;
var G__33063_34116__$1 = (((G__33063_34114 instanceof cljs.core.Keyword))?G__33063_34114.fqn:null);
switch (G__33063_34116__$1) {
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
var ks_34121 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_34121,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_34121,"aria-");
}
})())){
el.setAttribute(ks_34121,value);
} else {
(el[ks_34121] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33137){
var map__33139 = p__33137;
var map__33139__$1 = (((((!((map__33139 == null))))?(((((map__33139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33139):map__33139);
var props = map__33139__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33139__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33145 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33145,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33145,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33145,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33152 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33152,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33152;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33172 = arguments.length;
switch (G__33172) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33193){
var vec__33197 = p__33193;
var seq__33198 = cljs.core.seq(vec__33197);
var first__33199 = cljs.core.first(seq__33198);
var seq__33198__$1 = cljs.core.next(seq__33198);
var nn = first__33199;
var first__33199__$1 = cljs.core.first(seq__33198__$1);
var seq__33198__$2 = cljs.core.next(seq__33198__$1);
var np = first__33199__$1;
var nc = seq__33198__$2;
var node = vec__33197;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33205 = nn;
var G__33206 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33205,G__33206) : create_fn.call(null,G__33205,G__33206));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33208 = nn;
var G__33209 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33208,G__33209) : create_fn.call(null,G__33208,G__33209));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33215 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33215,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33215,(1),null);
var seq__33220_34143 = cljs.core.seq(node_children);
var chunk__33221_34144 = null;
var count__33222_34145 = (0);
var i__33223_34146 = (0);
while(true){
if((i__33223_34146 < count__33222_34145)){
var child_struct_34148 = chunk__33221_34144.cljs$core$IIndexed$_nth$arity$2(null,i__33223_34146);
var children_34149 = shadow.dom.dom_node(child_struct_34148);
if(cljs.core.seq_QMARK_(children_34149)){
var seq__33282_34150 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34149));
var chunk__33284_34151 = null;
var count__33285_34152 = (0);
var i__33286_34153 = (0);
while(true){
if((i__33286_34153 < count__33285_34152)){
var child_34155 = chunk__33284_34151.cljs$core$IIndexed$_nth$arity$2(null,i__33286_34153);
if(cljs.core.truth_(child_34155)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34155);


var G__34156 = seq__33282_34150;
var G__34157 = chunk__33284_34151;
var G__34158 = count__33285_34152;
var G__34159 = (i__33286_34153 + (1));
seq__33282_34150 = G__34156;
chunk__33284_34151 = G__34157;
count__33285_34152 = G__34158;
i__33286_34153 = G__34159;
continue;
} else {
var G__34161 = seq__33282_34150;
var G__34162 = chunk__33284_34151;
var G__34163 = count__33285_34152;
var G__34164 = (i__33286_34153 + (1));
seq__33282_34150 = G__34161;
chunk__33284_34151 = G__34162;
count__33285_34152 = G__34163;
i__33286_34153 = G__34164;
continue;
}
} else {
var temp__5735__auto___34165 = cljs.core.seq(seq__33282_34150);
if(temp__5735__auto___34165){
var seq__33282_34166__$1 = temp__5735__auto___34165;
if(cljs.core.chunked_seq_QMARK_(seq__33282_34166__$1)){
var c__4556__auto___34167 = cljs.core.chunk_first(seq__33282_34166__$1);
var G__34168 = cljs.core.chunk_rest(seq__33282_34166__$1);
var G__34169 = c__4556__auto___34167;
var G__34170 = cljs.core.count(c__4556__auto___34167);
var G__34171 = (0);
seq__33282_34150 = G__34168;
chunk__33284_34151 = G__34169;
count__33285_34152 = G__34170;
i__33286_34153 = G__34171;
continue;
} else {
var child_34172 = cljs.core.first(seq__33282_34166__$1);
if(cljs.core.truth_(child_34172)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34172);


var G__34173 = cljs.core.next(seq__33282_34166__$1);
var G__34174 = null;
var G__34175 = (0);
var G__34176 = (0);
seq__33282_34150 = G__34173;
chunk__33284_34151 = G__34174;
count__33285_34152 = G__34175;
i__33286_34153 = G__34176;
continue;
} else {
var G__34181 = cljs.core.next(seq__33282_34166__$1);
var G__34182 = null;
var G__34183 = (0);
var G__34184 = (0);
seq__33282_34150 = G__34181;
chunk__33284_34151 = G__34182;
count__33285_34152 = G__34183;
i__33286_34153 = G__34184;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34149);
}


var G__34187 = seq__33220_34143;
var G__34188 = chunk__33221_34144;
var G__34189 = count__33222_34145;
var G__34190 = (i__33223_34146 + (1));
seq__33220_34143 = G__34187;
chunk__33221_34144 = G__34188;
count__33222_34145 = G__34189;
i__33223_34146 = G__34190;
continue;
} else {
var temp__5735__auto___34191 = cljs.core.seq(seq__33220_34143);
if(temp__5735__auto___34191){
var seq__33220_34192__$1 = temp__5735__auto___34191;
if(cljs.core.chunked_seq_QMARK_(seq__33220_34192__$1)){
var c__4556__auto___34193 = cljs.core.chunk_first(seq__33220_34192__$1);
var G__34194 = cljs.core.chunk_rest(seq__33220_34192__$1);
var G__34195 = c__4556__auto___34193;
var G__34196 = cljs.core.count(c__4556__auto___34193);
var G__34197 = (0);
seq__33220_34143 = G__34194;
chunk__33221_34144 = G__34195;
count__33222_34145 = G__34196;
i__33223_34146 = G__34197;
continue;
} else {
var child_struct_34198 = cljs.core.first(seq__33220_34192__$1);
var children_34199 = shadow.dom.dom_node(child_struct_34198);
if(cljs.core.seq_QMARK_(children_34199)){
var seq__33299_34200 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34199));
var chunk__33301_34201 = null;
var count__33302_34202 = (0);
var i__33303_34203 = (0);
while(true){
if((i__33303_34203 < count__33302_34202)){
var child_34204 = chunk__33301_34201.cljs$core$IIndexed$_nth$arity$2(null,i__33303_34203);
if(cljs.core.truth_(child_34204)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34204);


var G__34205 = seq__33299_34200;
var G__34206 = chunk__33301_34201;
var G__34207 = count__33302_34202;
var G__34208 = (i__33303_34203 + (1));
seq__33299_34200 = G__34205;
chunk__33301_34201 = G__34206;
count__33302_34202 = G__34207;
i__33303_34203 = G__34208;
continue;
} else {
var G__34210 = seq__33299_34200;
var G__34211 = chunk__33301_34201;
var G__34212 = count__33302_34202;
var G__34213 = (i__33303_34203 + (1));
seq__33299_34200 = G__34210;
chunk__33301_34201 = G__34211;
count__33302_34202 = G__34212;
i__33303_34203 = G__34213;
continue;
}
} else {
var temp__5735__auto___34214__$1 = cljs.core.seq(seq__33299_34200);
if(temp__5735__auto___34214__$1){
var seq__33299_34215__$1 = temp__5735__auto___34214__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33299_34215__$1)){
var c__4556__auto___34216 = cljs.core.chunk_first(seq__33299_34215__$1);
var G__34217 = cljs.core.chunk_rest(seq__33299_34215__$1);
var G__34218 = c__4556__auto___34216;
var G__34219 = cljs.core.count(c__4556__auto___34216);
var G__34220 = (0);
seq__33299_34200 = G__34217;
chunk__33301_34201 = G__34218;
count__33302_34202 = G__34219;
i__33303_34203 = G__34220;
continue;
} else {
var child_34221 = cljs.core.first(seq__33299_34215__$1);
if(cljs.core.truth_(child_34221)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34221);


var G__34222 = cljs.core.next(seq__33299_34215__$1);
var G__34223 = null;
var G__34224 = (0);
var G__34225 = (0);
seq__33299_34200 = G__34222;
chunk__33301_34201 = G__34223;
count__33302_34202 = G__34224;
i__33303_34203 = G__34225;
continue;
} else {
var G__34227 = cljs.core.next(seq__33299_34215__$1);
var G__34228 = null;
var G__34229 = (0);
var G__34230 = (0);
seq__33299_34200 = G__34227;
chunk__33301_34201 = G__34228;
count__33302_34202 = G__34229;
i__33303_34203 = G__34230;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34199);
}


var G__34232 = cljs.core.next(seq__33220_34192__$1);
var G__34233 = null;
var G__34234 = (0);
var G__34235 = (0);
seq__33220_34143 = G__34232;
chunk__33221_34144 = G__34233;
count__33222_34145 = G__34234;
i__33223_34146 = G__34235;
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
var seq__33325 = cljs.core.seq(node);
var chunk__33326 = null;
var count__33327 = (0);
var i__33328 = (0);
while(true){
if((i__33328 < count__33327)){
var n = chunk__33326.cljs$core$IIndexed$_nth$arity$2(null,i__33328);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34241 = seq__33325;
var G__34242 = chunk__33326;
var G__34243 = count__33327;
var G__34244 = (i__33328 + (1));
seq__33325 = G__34241;
chunk__33326 = G__34242;
count__33327 = G__34243;
i__33328 = G__34244;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33325);
if(temp__5735__auto__){
var seq__33325__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33325__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33325__$1);
var G__34246 = cljs.core.chunk_rest(seq__33325__$1);
var G__34247 = c__4556__auto__;
var G__34248 = cljs.core.count(c__4556__auto__);
var G__34249 = (0);
seq__33325 = G__34246;
chunk__33326 = G__34247;
count__33327 = G__34248;
i__33328 = G__34249;
continue;
} else {
var n = cljs.core.first(seq__33325__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34250 = cljs.core.next(seq__33325__$1);
var G__34251 = null;
var G__34252 = (0);
var G__34253 = (0);
seq__33325 = G__34250;
chunk__33326 = G__34251;
count__33327 = G__34252;
i__33328 = G__34253;
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
var G__33351 = arguments.length;
switch (G__33351) {
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
var G__33362 = arguments.length;
switch (G__33362) {
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
var G__33376 = arguments.length;
switch (G__33376) {
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
var len__4736__auto___34284 = arguments.length;
var i__4737__auto___34285 = (0);
while(true){
if((i__4737__auto___34285 < len__4736__auto___34284)){
args__4742__auto__.push((arguments[i__4737__auto___34285]));

var G__34286 = (i__4737__auto___34285 + (1));
i__4737__auto___34285 = G__34286;
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
var seq__33394_34295 = cljs.core.seq(nodes);
var chunk__33395_34296 = null;
var count__33396_34297 = (0);
var i__33397_34298 = (0);
while(true){
if((i__33397_34298 < count__33396_34297)){
var node_34299 = chunk__33395_34296.cljs$core$IIndexed$_nth$arity$2(null,i__33397_34298);
fragment.appendChild(shadow.dom._to_dom(node_34299));


var G__34300 = seq__33394_34295;
var G__34301 = chunk__33395_34296;
var G__34302 = count__33396_34297;
var G__34303 = (i__33397_34298 + (1));
seq__33394_34295 = G__34300;
chunk__33395_34296 = G__34301;
count__33396_34297 = G__34302;
i__33397_34298 = G__34303;
continue;
} else {
var temp__5735__auto___34304 = cljs.core.seq(seq__33394_34295);
if(temp__5735__auto___34304){
var seq__33394_34305__$1 = temp__5735__auto___34304;
if(cljs.core.chunked_seq_QMARK_(seq__33394_34305__$1)){
var c__4556__auto___34308 = cljs.core.chunk_first(seq__33394_34305__$1);
var G__34310 = cljs.core.chunk_rest(seq__33394_34305__$1);
var G__34311 = c__4556__auto___34308;
var G__34312 = cljs.core.count(c__4556__auto___34308);
var G__34313 = (0);
seq__33394_34295 = G__34310;
chunk__33395_34296 = G__34311;
count__33396_34297 = G__34312;
i__33397_34298 = G__34313;
continue;
} else {
var node_34314 = cljs.core.first(seq__33394_34305__$1);
fragment.appendChild(shadow.dom._to_dom(node_34314));


var G__34316 = cljs.core.next(seq__33394_34305__$1);
var G__34317 = null;
var G__34318 = (0);
var G__34319 = (0);
seq__33394_34295 = G__34316;
chunk__33395_34296 = G__34317;
count__33396_34297 = G__34318;
i__33397_34298 = G__34319;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33385){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33385));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33411_34320 = cljs.core.seq(scripts);
var chunk__33412_34321 = null;
var count__33413_34322 = (0);
var i__33414_34323 = (0);
while(true){
if((i__33414_34323 < count__33413_34322)){
var vec__33430_34324 = chunk__33412_34321.cljs$core$IIndexed$_nth$arity$2(null,i__33414_34323);
var script_tag_34325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33430_34324,(0),null);
var script_body_34326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33430_34324,(1),null);
eval(script_body_34326);


var G__34327 = seq__33411_34320;
var G__34328 = chunk__33412_34321;
var G__34329 = count__33413_34322;
var G__34330 = (i__33414_34323 + (1));
seq__33411_34320 = G__34327;
chunk__33412_34321 = G__34328;
count__33413_34322 = G__34329;
i__33414_34323 = G__34330;
continue;
} else {
var temp__5735__auto___34331 = cljs.core.seq(seq__33411_34320);
if(temp__5735__auto___34331){
var seq__33411_34332__$1 = temp__5735__auto___34331;
if(cljs.core.chunked_seq_QMARK_(seq__33411_34332__$1)){
var c__4556__auto___34333 = cljs.core.chunk_first(seq__33411_34332__$1);
var G__34334 = cljs.core.chunk_rest(seq__33411_34332__$1);
var G__34335 = c__4556__auto___34333;
var G__34336 = cljs.core.count(c__4556__auto___34333);
var G__34337 = (0);
seq__33411_34320 = G__34334;
chunk__33412_34321 = G__34335;
count__33413_34322 = G__34336;
i__33414_34323 = G__34337;
continue;
} else {
var vec__33440_34338 = cljs.core.first(seq__33411_34332__$1);
var script_tag_34339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33440_34338,(0),null);
var script_body_34340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33440_34338,(1),null);
eval(script_body_34340);


var G__34342 = cljs.core.next(seq__33411_34332__$1);
var G__34343 = null;
var G__34344 = (0);
var G__34345 = (0);
seq__33411_34320 = G__34342;
chunk__33412_34321 = G__34343;
count__33413_34322 = G__34344;
i__33414_34323 = G__34345;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33446){
var vec__33448 = p__33446;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33448,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33448,(1),null);
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
var G__33472 = arguments.length;
switch (G__33472) {
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
var seq__33496 = cljs.core.seq(style_keys);
var chunk__33497 = null;
var count__33498 = (0);
var i__33499 = (0);
while(true){
if((i__33499 < count__33498)){
var it = chunk__33497.cljs$core$IIndexed$_nth$arity$2(null,i__33499);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34363 = seq__33496;
var G__34364 = chunk__33497;
var G__34365 = count__33498;
var G__34366 = (i__33499 + (1));
seq__33496 = G__34363;
chunk__33497 = G__34364;
count__33498 = G__34365;
i__33499 = G__34366;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33496);
if(temp__5735__auto__){
var seq__33496__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33496__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33496__$1);
var G__34368 = cljs.core.chunk_rest(seq__33496__$1);
var G__34369 = c__4556__auto__;
var G__34370 = cljs.core.count(c__4556__auto__);
var G__34371 = (0);
seq__33496 = G__34368;
chunk__33497 = G__34369;
count__33498 = G__34370;
i__33499 = G__34371;
continue;
} else {
var it = cljs.core.first(seq__33496__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34373 = cljs.core.next(seq__33496__$1);
var G__34374 = null;
var G__34375 = (0);
var G__34376 = (0);
seq__33496 = G__34373;
chunk__33497 = G__34374;
count__33498 = G__34375;
i__33499 = G__34376;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33519,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33540 = k33519;
var G__33540__$1 = (((G__33540 instanceof cljs.core.Keyword))?G__33540.fqn:null);
switch (G__33540__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33519,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33546){
var vec__33547 = p__33546;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33547,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33547,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33518){
var self__ = this;
var G__33518__$1 = this;
return (new cljs.core.RecordIter((0),G__33518__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33520,other33521){
var self__ = this;
var this33520__$1 = this;
return (((!((other33521 == null)))) && ((this33520__$1.constructor === other33521.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33520__$1.x,other33521.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33520__$1.y,other33521.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33520__$1.__extmap,other33521.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33518){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33566 = cljs.core.keyword_identical_QMARK_;
var expr__33567 = k__4388__auto__;
if(cljs.core.truth_((pred__33566.cljs$core$IFn$_invoke$arity$2 ? pred__33566.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33567) : pred__33566.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33567)))){
return (new shadow.dom.Coordinate(G__33518,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33566.cljs$core$IFn$_invoke$arity$2 ? pred__33566.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33567) : pred__33566.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33567)))){
return (new shadow.dom.Coordinate(self__.x,G__33518,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33518),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33518){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33518,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33533){
var extmap__4419__auto__ = (function (){var G__33622 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33533,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33533)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33622);
} else {
return G__33622;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33533),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33533),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33645,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33694 = k33645;
var G__33694__$1 = (((G__33694 instanceof cljs.core.Keyword))?G__33694.fqn:null);
switch (G__33694__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33645,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33699){
var vec__33701 = p__33699;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33701,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33701,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33644){
var self__ = this;
var G__33644__$1 = this;
return (new cljs.core.RecordIter((0),G__33644__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33646,other33647){
var self__ = this;
var this33646__$1 = this;
return (((!((other33647 == null)))) && ((this33646__$1.constructor === other33647.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33646__$1.w,other33647.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33646__$1.h,other33647.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33646__$1.__extmap,other33647.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33644){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33745 = cljs.core.keyword_identical_QMARK_;
var expr__33746 = k__4388__auto__;
if(cljs.core.truth_((pred__33745.cljs$core$IFn$_invoke$arity$2 ? pred__33745.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33746) : pred__33745.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33746)))){
return (new shadow.dom.Size(G__33644,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33745.cljs$core$IFn$_invoke$arity$2 ? pred__33745.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33746) : pred__33745.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33746)))){
return (new shadow.dom.Size(self__.w,G__33644,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33644),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33644){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33644,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33651){
var extmap__4419__auto__ = (function (){var G__33753 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33651,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33651)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33753);
} else {
return G__33753;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33651),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33651),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var G__34409 = (i + (1));
var G__34410 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34409;
ret = G__34410;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33768){
var vec__33770 = p__33768;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33770,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33770,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33779 = arguments.length;
switch (G__33779) {
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
var G__34423 = ps;
var G__34424 = (i + (1));
el__$1 = G__34423;
i = G__34424;
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
var vec__33804 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33804,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33804,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33804,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33807_34425 = cljs.core.seq(props);
var chunk__33808_34426 = null;
var count__33809_34427 = (0);
var i__33810_34428 = (0);
while(true){
if((i__33810_34428 < count__33809_34427)){
var vec__33821_34429 = chunk__33808_34426.cljs$core$IIndexed$_nth$arity$2(null,i__33810_34428);
var k_34430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33821_34429,(0),null);
var v_34431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33821_34429,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_34430);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34430),v_34431);


var G__34439 = seq__33807_34425;
var G__34440 = chunk__33808_34426;
var G__34441 = count__33809_34427;
var G__34442 = (i__33810_34428 + (1));
seq__33807_34425 = G__34439;
chunk__33808_34426 = G__34440;
count__33809_34427 = G__34441;
i__33810_34428 = G__34442;
continue;
} else {
var temp__5735__auto___34443 = cljs.core.seq(seq__33807_34425);
if(temp__5735__auto___34443){
var seq__33807_34444__$1 = temp__5735__auto___34443;
if(cljs.core.chunked_seq_QMARK_(seq__33807_34444__$1)){
var c__4556__auto___34445 = cljs.core.chunk_first(seq__33807_34444__$1);
var G__34446 = cljs.core.chunk_rest(seq__33807_34444__$1);
var G__34447 = c__4556__auto___34445;
var G__34448 = cljs.core.count(c__4556__auto___34445);
var G__34449 = (0);
seq__33807_34425 = G__34446;
chunk__33808_34426 = G__34447;
count__33809_34427 = G__34448;
i__33810_34428 = G__34449;
continue;
} else {
var vec__33828_34450 = cljs.core.first(seq__33807_34444__$1);
var k_34451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33828_34450,(0),null);
var v_34452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33828_34450,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_34451);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34451),v_34452);


var G__34453 = cljs.core.next(seq__33807_34444__$1);
var G__34454 = null;
var G__34455 = (0);
var G__34456 = (0);
seq__33807_34425 = G__34453;
chunk__33808_34426 = G__34454;
count__33809_34427 = G__34455;
i__33810_34428 = G__34456;
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
var vec__33839 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33839,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33839,(1),null);
var seq__33844_34457 = cljs.core.seq(node_children);
var chunk__33846_34458 = null;
var count__33847_34459 = (0);
var i__33848_34460 = (0);
while(true){
if((i__33848_34460 < count__33847_34459)){
var child_struct_34464 = chunk__33846_34458.cljs$core$IIndexed$_nth$arity$2(null,i__33848_34460);
if((!((child_struct_34464 == null)))){
if(typeof child_struct_34464 === 'string'){
var text_34467 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34467),child_struct_34464].join(''));
} else {
var children_34468 = shadow.dom.svg_node(child_struct_34464);
if(cljs.core.seq_QMARK_(children_34468)){
var seq__33887_34469 = cljs.core.seq(children_34468);
var chunk__33889_34470 = null;
var count__33890_34471 = (0);
var i__33891_34472 = (0);
while(true){
if((i__33891_34472 < count__33890_34471)){
var child_34473 = chunk__33889_34470.cljs$core$IIndexed$_nth$arity$2(null,i__33891_34472);
if(cljs.core.truth_(child_34473)){
node.appendChild(child_34473);


var G__34474 = seq__33887_34469;
var G__34475 = chunk__33889_34470;
var G__34476 = count__33890_34471;
var G__34477 = (i__33891_34472 + (1));
seq__33887_34469 = G__34474;
chunk__33889_34470 = G__34475;
count__33890_34471 = G__34476;
i__33891_34472 = G__34477;
continue;
} else {
var G__34478 = seq__33887_34469;
var G__34479 = chunk__33889_34470;
var G__34480 = count__33890_34471;
var G__34481 = (i__33891_34472 + (1));
seq__33887_34469 = G__34478;
chunk__33889_34470 = G__34479;
count__33890_34471 = G__34480;
i__33891_34472 = G__34481;
continue;
}
} else {
var temp__5735__auto___34482 = cljs.core.seq(seq__33887_34469);
if(temp__5735__auto___34482){
var seq__33887_34483__$1 = temp__5735__auto___34482;
if(cljs.core.chunked_seq_QMARK_(seq__33887_34483__$1)){
var c__4556__auto___34484 = cljs.core.chunk_first(seq__33887_34483__$1);
var G__34485 = cljs.core.chunk_rest(seq__33887_34483__$1);
var G__34486 = c__4556__auto___34484;
var G__34487 = cljs.core.count(c__4556__auto___34484);
var G__34488 = (0);
seq__33887_34469 = G__34485;
chunk__33889_34470 = G__34486;
count__33890_34471 = G__34487;
i__33891_34472 = G__34488;
continue;
} else {
var child_34489 = cljs.core.first(seq__33887_34483__$1);
if(cljs.core.truth_(child_34489)){
node.appendChild(child_34489);


var G__34490 = cljs.core.next(seq__33887_34483__$1);
var G__34491 = null;
var G__34492 = (0);
var G__34493 = (0);
seq__33887_34469 = G__34490;
chunk__33889_34470 = G__34491;
count__33890_34471 = G__34492;
i__33891_34472 = G__34493;
continue;
} else {
var G__34494 = cljs.core.next(seq__33887_34483__$1);
var G__34495 = null;
var G__34496 = (0);
var G__34497 = (0);
seq__33887_34469 = G__34494;
chunk__33889_34470 = G__34495;
count__33890_34471 = G__34496;
i__33891_34472 = G__34497;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34468);
}
}


var G__34498 = seq__33844_34457;
var G__34499 = chunk__33846_34458;
var G__34500 = count__33847_34459;
var G__34501 = (i__33848_34460 + (1));
seq__33844_34457 = G__34498;
chunk__33846_34458 = G__34499;
count__33847_34459 = G__34500;
i__33848_34460 = G__34501;
continue;
} else {
var G__34502 = seq__33844_34457;
var G__34503 = chunk__33846_34458;
var G__34504 = count__33847_34459;
var G__34505 = (i__33848_34460 + (1));
seq__33844_34457 = G__34502;
chunk__33846_34458 = G__34503;
count__33847_34459 = G__34504;
i__33848_34460 = G__34505;
continue;
}
} else {
var temp__5735__auto___34506 = cljs.core.seq(seq__33844_34457);
if(temp__5735__auto___34506){
var seq__33844_34508__$1 = temp__5735__auto___34506;
if(cljs.core.chunked_seq_QMARK_(seq__33844_34508__$1)){
var c__4556__auto___34514 = cljs.core.chunk_first(seq__33844_34508__$1);
var G__34515 = cljs.core.chunk_rest(seq__33844_34508__$1);
var G__34516 = c__4556__auto___34514;
var G__34517 = cljs.core.count(c__4556__auto___34514);
var G__34518 = (0);
seq__33844_34457 = G__34515;
chunk__33846_34458 = G__34516;
count__33847_34459 = G__34517;
i__33848_34460 = G__34518;
continue;
} else {
var child_struct_34519 = cljs.core.first(seq__33844_34508__$1);
if((!((child_struct_34519 == null)))){
if(typeof child_struct_34519 === 'string'){
var text_34520 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34520),child_struct_34519].join(''));
} else {
var children_34521 = shadow.dom.svg_node(child_struct_34519);
if(cljs.core.seq_QMARK_(children_34521)){
var seq__33900_34522 = cljs.core.seq(children_34521);
var chunk__33902_34523 = null;
var count__33903_34524 = (0);
var i__33904_34525 = (0);
while(true){
if((i__33904_34525 < count__33903_34524)){
var child_34526 = chunk__33902_34523.cljs$core$IIndexed$_nth$arity$2(null,i__33904_34525);
if(cljs.core.truth_(child_34526)){
node.appendChild(child_34526);


var G__34527 = seq__33900_34522;
var G__34528 = chunk__33902_34523;
var G__34529 = count__33903_34524;
var G__34530 = (i__33904_34525 + (1));
seq__33900_34522 = G__34527;
chunk__33902_34523 = G__34528;
count__33903_34524 = G__34529;
i__33904_34525 = G__34530;
continue;
} else {
var G__34531 = seq__33900_34522;
var G__34532 = chunk__33902_34523;
var G__34533 = count__33903_34524;
var G__34534 = (i__33904_34525 + (1));
seq__33900_34522 = G__34531;
chunk__33902_34523 = G__34532;
count__33903_34524 = G__34533;
i__33904_34525 = G__34534;
continue;
}
} else {
var temp__5735__auto___34535__$1 = cljs.core.seq(seq__33900_34522);
if(temp__5735__auto___34535__$1){
var seq__33900_34536__$1 = temp__5735__auto___34535__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33900_34536__$1)){
var c__4556__auto___34537 = cljs.core.chunk_first(seq__33900_34536__$1);
var G__34538 = cljs.core.chunk_rest(seq__33900_34536__$1);
var G__34539 = c__4556__auto___34537;
var G__34540 = cljs.core.count(c__4556__auto___34537);
var G__34541 = (0);
seq__33900_34522 = G__34538;
chunk__33902_34523 = G__34539;
count__33903_34524 = G__34540;
i__33904_34525 = G__34541;
continue;
} else {
var child_34542 = cljs.core.first(seq__33900_34536__$1);
if(cljs.core.truth_(child_34542)){
node.appendChild(child_34542);


var G__34543 = cljs.core.next(seq__33900_34536__$1);
var G__34544 = null;
var G__34545 = (0);
var G__34546 = (0);
seq__33900_34522 = G__34543;
chunk__33902_34523 = G__34544;
count__33903_34524 = G__34545;
i__33904_34525 = G__34546;
continue;
} else {
var G__34550 = cljs.core.next(seq__33900_34536__$1);
var G__34551 = null;
var G__34552 = (0);
var G__34553 = (0);
seq__33900_34522 = G__34550;
chunk__33902_34523 = G__34551;
count__33903_34524 = G__34552;
i__33904_34525 = G__34553;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34521);
}
}


var G__34554 = cljs.core.next(seq__33844_34508__$1);
var G__34555 = null;
var G__34556 = (0);
var G__34557 = (0);
seq__33844_34457 = G__34554;
chunk__33846_34458 = G__34555;
count__33847_34459 = G__34556;
i__33848_34460 = G__34557;
continue;
} else {
var G__34559 = cljs.core.next(seq__33844_34508__$1);
var G__34560 = null;
var G__34561 = (0);
var G__34562 = (0);
seq__33844_34457 = G__34559;
chunk__33846_34458 = G__34560;
count__33847_34459 = G__34561;
i__33848_34460 = G__34562;
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
var len__4736__auto___34565 = arguments.length;
var i__4737__auto___34566 = (0);
while(true){
if((i__4737__auto___34566 < len__4736__auto___34565)){
args__4742__auto__.push((arguments[i__4737__auto___34566]));

var G__34567 = (i__4737__auto___34566 + (1));
i__4737__auto___34566 = G__34567;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33922){
var G__33925 = cljs.core.first(seq33922);
var seq33922__$1 = cljs.core.next(seq33922);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33925,seq33922__$1);
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
var G__33940 = arguments.length;
switch (G__33940) {
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
var c__28688__auto___34574 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28689__auto__ = (function (){var switch__28032__auto__ = (function (state_33974){
var state_val_33975 = (state_33974[(1)]);
if((state_val_33975 === (1))){
var state_33974__$1 = state_33974;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33974__$1,(2),once_or_cleanup);
} else {
if((state_val_33975 === (2))){
var inst_33970 = (state_33974[(2)]);
var inst_33972 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33974__$1 = (function (){var statearr_33988 = state_33974;
(statearr_33988[(7)] = inst_33970);

return statearr_33988;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33974__$1,inst_33972);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__28033__auto__ = null;
var shadow$dom$state_machine__28033__auto____0 = (function (){
var statearr_33996 = [null,null,null,null,null,null,null,null];
(statearr_33996[(0)] = shadow$dom$state_machine__28033__auto__);

(statearr_33996[(1)] = (1));

return statearr_33996;
});
var shadow$dom$state_machine__28033__auto____1 = (function (state_33974){
while(true){
var ret_value__28034__auto__ = (function (){try{while(true){
var result__28035__auto__ = switch__28032__auto__(state_33974);
if(cljs.core.keyword_identical_QMARK_(result__28035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28035__auto__;
}
break;
}
}catch (e34003){var ex__28036__auto__ = e34003;
var statearr_34004_34579 = state_33974;
(statearr_34004_34579[(2)] = ex__28036__auto__);


if(cljs.core.seq((state_33974[(4)]))){
var statearr_34005_34581 = state_33974;
(statearr_34005_34581[(1)] = cljs.core.first((state_33974[(4)])));

} else {
throw ex__28036__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34582 = state_33974;
state_33974 = G__34582;
continue;
} else {
return ret_value__28034__auto__;
}
break;
}
});
shadow$dom$state_machine__28033__auto__ = function(state_33974){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__28033__auto____0.call(this);
case 1:
return shadow$dom$state_machine__28033__auto____1.call(this,state_33974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__28033__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__28033__auto____0;
shadow$dom$state_machine__28033__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__28033__auto____1;
return shadow$dom$state_machine__28033__auto__;
})()
})();
var state__28690__auto__ = (function (){var statearr_34007 = f__28689__auto__();
(statearr_34007[(6)] = c__28688__auto___34574);

return statearr_34007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28690__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
