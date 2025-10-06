goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__38061 = arguments.length;
switch (G__38061) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38065 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38065 = (function (f,blockable,meta38066){
this.f = f;
this.blockable = blockable;
this.meta38066 = meta38066;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38067,meta38066__$1){
var self__ = this;
var _38067__$1 = this;
return (new cljs.core.async.t_cljs$core$async38065(self__.f,self__.blockable,meta38066__$1));
}));

(cljs.core.async.t_cljs$core$async38065.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38067){
var self__ = this;
var _38067__$1 = this;
return self__.meta38066;
}));

(cljs.core.async.t_cljs$core$async38065.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38065.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38065.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async38065.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async38065.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta38066","meta38066",-806821711,null)], null);
}));

(cljs.core.async.t_cljs$core$async38065.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38065.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38065");

(cljs.core.async.t_cljs$core$async38065.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async38065");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38065.
 */
cljs.core.async.__GT_t_cljs$core$async38065 = (function cljs$core$async$__GT_t_cljs$core$async38065(f__$1,blockable__$1,meta38066){
return (new cljs.core.async.t_cljs$core$async38065(f__$1,blockable__$1,meta38066));
});

}

return (new cljs.core.async.t_cljs$core$async38065(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__38089 = arguments.length;
switch (G__38089) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__38126 = arguments.length;
switch (G__38126) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__38169 = arguments.length;
switch (G__38169) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_42156 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_42156) : fn1.call(null,val_42156));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_42156) : fn1.call(null,val_42156));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__38180 = arguments.length;
switch (G__38180) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___42171 = n;
var x_42172 = (0);
while(true){
if((x_42172 < n__4613__auto___42171)){
(a[x_42172] = x_42172);

var G__42173 = (x_42172 + (1));
x_42172 = G__42173;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38196 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38196 = (function (flag,meta38197){
this.flag = flag;
this.meta38197 = meta38197;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38198,meta38197__$1){
var self__ = this;
var _38198__$1 = this;
return (new cljs.core.async.t_cljs$core$async38196(self__.flag,meta38197__$1));
}));

(cljs.core.async.t_cljs$core$async38196.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38198){
var self__ = this;
var _38198__$1 = this;
return self__.meta38197;
}));

(cljs.core.async.t_cljs$core$async38196.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38196.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async38196.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38196.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async38196.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta38197","meta38197",-651074806,null)], null);
}));

(cljs.core.async.t_cljs$core$async38196.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38196.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38196");

(cljs.core.async.t_cljs$core$async38196.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async38196");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38196.
 */
cljs.core.async.__GT_t_cljs$core$async38196 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async38196(flag__$1,meta38197){
return (new cljs.core.async.t_cljs$core$async38196(flag__$1,meta38197));
});

}

return (new cljs.core.async.t_cljs$core$async38196(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38219 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38219 = (function (flag,cb,meta38220){
this.flag = flag;
this.cb = cb;
this.meta38220 = meta38220;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38221,meta38220__$1){
var self__ = this;
var _38221__$1 = this;
return (new cljs.core.async.t_cljs$core$async38219(self__.flag,self__.cb,meta38220__$1));
}));

(cljs.core.async.t_cljs$core$async38219.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38221){
var self__ = this;
var _38221__$1 = this;
return self__.meta38220;
}));

(cljs.core.async.t_cljs$core$async38219.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38219.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async38219.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38219.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async38219.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta38220","meta38220",719045167,null)], null);
}));

(cljs.core.async.t_cljs$core$async38219.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38219.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38219");

(cljs.core.async.t_cljs$core$async38219.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async38219");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38219.
 */
cljs.core.async.__GT_t_cljs$core$async38219 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async38219(flag__$1,cb__$1,meta38220){
return (new cljs.core.async.t_cljs$core$async38219(flag__$1,cb__$1,meta38220));
});

}

return (new cljs.core.async.t_cljs$core$async38219(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38236_SHARP_){
var G__38244 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38236_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__38244) : fret.call(null,G__38244));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38237_SHARP_){
var G__38248 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38237_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__38248) : fret.call(null,G__38248));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__42185 = (i + (1));
i = G__42185;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42192 = arguments.length;
var i__4737__auto___42193 = (0);
while(true){
if((i__4737__auto___42193 < len__4736__auto___42192)){
args__4742__auto__.push((arguments[i__4737__auto___42193]));

var G__42194 = (i__4737__auto___42193 + (1));
i__4737__auto___42193 = G__42194;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__38261){
var map__38262 = p__38261;
var map__38262__$1 = (((((!((map__38262 == null))))?(((((map__38262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38262):map__38262);
var opts = map__38262__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq38255){
var G__38256 = cljs.core.first(seq38255);
var seq38255__$1 = cljs.core.next(seq38255);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38256,seq38255__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__38273 = arguments.length;
switch (G__38273) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__37909__auto___42199 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37910__auto__ = (function (){var switch__37342__auto__ = (function (state_38411){
var state_val_38412 = (state_38411[(1)]);
if((state_val_38412 === (7))){
var inst_38369 = (state_38411[(2)]);
var state_38411__$1 = state_38411;
var statearr_38424_42210 = state_38411__$1;
(statearr_38424_42210[(2)] = inst_38369);

(statearr_38424_42210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38412 === (1))){
var state_38411__$1 = state_38411;
var statearr_38426_42217 = state_38411__$1;
(statearr_38426_42217[(2)] = null);

(statearr_38426_42217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38412 === (4))){
var inst_38346 = (state_38411[(7)]);
var inst_38346__$1 = (state_38411[(2)]);
var inst_38353 = (inst_38346__$1 == null);
var state_38411__$1 = (function (){var statearr_38430 = state_38411;
(statearr_38430[(7)] = inst_38346__$1);

return statearr_38430;
})();
if(cljs.core.truth_(inst_38353)){
var statearr_38431_42218 = state_38411__$1;
(statearr_38431_42218[(1)] = (5));

} else {
var statearr_38432_42219 = state_38411__$1;
(statearr_38432_42219[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38412 === (13))){
var state_38411__$1 = state_38411;
var statearr_38462_42220 = state_38411__$1;
(statearr_38462_42220[(2)] = null);

(statearr_38462_42220[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38412 === (6))){
var inst_38346 = (state_38411[(7)]);
var state_38411__$1 = state_38411;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38411__$1,(11),to,inst_38346);
} else {
if((state_val_38412 === (3))){
var inst_38375 = (state_38411[(2)]);
var state_38411__$1 = state_38411;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38411__$1,inst_38375);
} else {
if((state_val_38412 === (12))){
var state_38411__$1 = state_38411;
var statearr_38476_42221 = state_38411__$1;
(statearr_38476_42221[(2)] = null);

(statearr_38476_42221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38412 === (2))){
var state_38411__$1 = state_38411;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38411__$1,(4),from);
} else {
if((state_val_38412 === (11))){
var inst_38362 = (state_38411[(2)]);
var state_38411__$1 = state_38411;
if(cljs.core.truth_(inst_38362)){
var statearr_38484_42225 = state_38411__$1;
(statearr_38484_42225[(1)] = (12));

} else {
var statearr_38485_42226 = state_38411__$1;
(statearr_38485_42226[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38412 === (9))){
var state_38411__$1 = state_38411;
var statearr_38486_42228 = state_38411__$1;
(statearr_38486_42228[(2)] = null);

(statearr_38486_42228[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38412 === (5))){
var state_38411__$1 = state_38411;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38487_42229 = state_38411__$1;
(statearr_38487_42229[(1)] = (8));

} else {
var statearr_38488_42230 = state_38411__$1;
(statearr_38488_42230[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38412 === (14))){
var inst_38367 = (state_38411[(2)]);
var state_38411__$1 = state_38411;
var statearr_38491_42231 = state_38411__$1;
(statearr_38491_42231[(2)] = inst_38367);

(statearr_38491_42231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38412 === (10))){
var inst_38359 = (state_38411[(2)]);
var state_38411__$1 = state_38411;
var statearr_38495_42232 = state_38411__$1;
(statearr_38495_42232[(2)] = inst_38359);

(statearr_38495_42232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38412 === (8))){
var inst_38356 = cljs.core.async.close_BANG_(to);
var state_38411__$1 = state_38411;
var statearr_38501_42233 = state_38411__$1;
(statearr_38501_42233[(2)] = inst_38356);

(statearr_38501_42233[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37343__auto__ = null;
var cljs$core$async$state_machine__37343__auto____0 = (function (){
var statearr_38503 = [null,null,null,null,null,null,null,null];
(statearr_38503[(0)] = cljs$core$async$state_machine__37343__auto__);

(statearr_38503[(1)] = (1));

return statearr_38503;
});
var cljs$core$async$state_machine__37343__auto____1 = (function (state_38411){
while(true){
var ret_value__37344__auto__ = (function (){try{while(true){
var result__37345__auto__ = switch__37342__auto__(state_38411);
if(cljs.core.keyword_identical_QMARK_(result__37345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37345__auto__;
}
break;
}
}catch (e38506){var ex__37346__auto__ = e38506;
var statearr_38513_42235 = state_38411;
(statearr_38513_42235[(2)] = ex__37346__auto__);


if(cljs.core.seq((state_38411[(4)]))){
var statearr_38516_42236 = state_38411;
(statearr_38516_42236[(1)] = cljs.core.first((state_38411[(4)])));

} else {
throw ex__37346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42237 = state_38411;
state_38411 = G__42237;
continue;
} else {
return ret_value__37344__auto__;
}
break;
}
});
cljs$core$async$state_machine__37343__auto__ = function(state_38411){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37343__auto____1.call(this,state_38411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37343__auto____0;
cljs$core$async$state_machine__37343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37343__auto____1;
return cljs$core$async$state_machine__37343__auto__;
})()
})();
var state__37911__auto__ = (function (){var statearr_38518 = f__37910__auto__();
(statearr_38518[(6)] = c__37909__auto___42199);

return statearr_38518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37911__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__38525){
var vec__38526 = p__38525;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38526,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38526,(1),null);
var job = vec__38526;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__37909__auto___42242 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37910__auto__ = (function (){var switch__37342__auto__ = (function (state_38535){
var state_val_38536 = (state_38535[(1)]);
if((state_val_38536 === (1))){
var state_38535__$1 = state_38535;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38535__$1,(2),res,v);
} else {
if((state_val_38536 === (2))){
var inst_38532 = (state_38535[(2)]);
var inst_38533 = cljs.core.async.close_BANG_(res);
var state_38535__$1 = (function (){var statearr_38553 = state_38535;
(statearr_38553[(7)] = inst_38532);

return statearr_38553;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38535__$1,inst_38533);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37343__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37343__auto____0 = (function (){
var statearr_38554 = [null,null,null,null,null,null,null,null];
(statearr_38554[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37343__auto__);

(statearr_38554[(1)] = (1));

return statearr_38554;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37343__auto____1 = (function (state_38535){
while(true){
var ret_value__37344__auto__ = (function (){try{while(true){
var result__37345__auto__ = switch__37342__auto__(state_38535);
if(cljs.core.keyword_identical_QMARK_(result__37345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37345__auto__;
}
break;
}
}catch (e38558){var ex__37346__auto__ = e38558;
var statearr_38559_42249 = state_38535;
(statearr_38559_42249[(2)] = ex__37346__auto__);


if(cljs.core.seq((state_38535[(4)]))){
var statearr_38560_42250 = state_38535;
(statearr_38560_42250[(1)] = cljs.core.first((state_38535[(4)])));

} else {
throw ex__37346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42251 = state_38535;
state_38535 = G__42251;
continue;
} else {
return ret_value__37344__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37343__auto__ = function(state_38535){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37343__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37343__auto____1.call(this,state_38535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37343__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37343__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37343__auto__;
})()
})();
var state__37911__auto__ = (function (){var statearr_38574 = f__37910__auto__();
(statearr_38574[(6)] = c__37909__auto___42242);

return statearr_38574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37911__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__38580){
var vec__38581 = p__38580;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38581,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38581,(1),null);
var job = vec__38581;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___42253 = n;
var __42254 = (0);
while(true){
if((__42254 < n__4613__auto___42253)){
var G__38589_42255 = type;
var G__38589_42256__$1 = (((G__38589_42255 instanceof cljs.core.Keyword))?G__38589_42255.fqn:null);
switch (G__38589_42256__$1) {
case "compute":
var c__37909__auto___42260 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__42254,c__37909__auto___42260,G__38589_42255,G__38589_42256__$1,n__4613__auto___42253,jobs,results,process,async){
return (function (){
var f__37910__auto__ = (function (){var switch__37342__auto__ = ((function (__42254,c__37909__auto___42260,G__38589_42255,G__38589_42256__$1,n__4613__auto___42253,jobs,results,process,async){
return (function (state_38608){
var state_val_38609 = (state_38608[(1)]);
if((state_val_38609 === (1))){
var state_38608__$1 = state_38608;
var statearr_38610_42264 = state_38608__$1;
(statearr_38610_42264[(2)] = null);

(statearr_38610_42264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38609 === (2))){
var state_38608__$1 = state_38608;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38608__$1,(4),jobs);
} else {
if((state_val_38609 === (3))){
var inst_38605 = (state_38608[(2)]);
var state_38608__$1 = state_38608;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38608__$1,inst_38605);
} else {
if((state_val_38609 === (4))){
var inst_38597 = (state_38608[(2)]);
var inst_38598 = process(inst_38597);
var state_38608__$1 = state_38608;
if(cljs.core.truth_(inst_38598)){
var statearr_38611_42267 = state_38608__$1;
(statearr_38611_42267[(1)] = (5));

} else {
var statearr_38612_42268 = state_38608__$1;
(statearr_38612_42268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38609 === (5))){
var state_38608__$1 = state_38608;
var statearr_38615_42269 = state_38608__$1;
(statearr_38615_42269[(2)] = null);

(statearr_38615_42269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38609 === (6))){
var state_38608__$1 = state_38608;
var statearr_38616_42274 = state_38608__$1;
(statearr_38616_42274[(2)] = null);

(statearr_38616_42274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38609 === (7))){
var inst_38603 = (state_38608[(2)]);
var state_38608__$1 = state_38608;
var statearr_38617_42276 = state_38608__$1;
(statearr_38617_42276[(2)] = inst_38603);

(statearr_38617_42276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__42254,c__37909__auto___42260,G__38589_42255,G__38589_42256__$1,n__4613__auto___42253,jobs,results,process,async))
;
return ((function (__42254,switch__37342__auto__,c__37909__auto___42260,G__38589_42255,G__38589_42256__$1,n__4613__auto___42253,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37343__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37343__auto____0 = (function (){
var statearr_38618 = [null,null,null,null,null,null,null];
(statearr_38618[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37343__auto__);

(statearr_38618[(1)] = (1));

return statearr_38618;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37343__auto____1 = (function (state_38608){
while(true){
var ret_value__37344__auto__ = (function (){try{while(true){
var result__37345__auto__ = switch__37342__auto__(state_38608);
if(cljs.core.keyword_identical_QMARK_(result__37345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37345__auto__;
}
break;
}
}catch (e38625){var ex__37346__auto__ = e38625;
var statearr_38626_42277 = state_38608;
(statearr_38626_42277[(2)] = ex__37346__auto__);


if(cljs.core.seq((state_38608[(4)]))){
var statearr_38627_42278 = state_38608;
(statearr_38627_42278[(1)] = cljs.core.first((state_38608[(4)])));

} else {
throw ex__37346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42280 = state_38608;
state_38608 = G__42280;
continue;
} else {
return ret_value__37344__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37343__auto__ = function(state_38608){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37343__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37343__auto____1.call(this,state_38608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37343__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37343__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37343__auto__;
})()
;})(__42254,switch__37342__auto__,c__37909__auto___42260,G__38589_42255,G__38589_42256__$1,n__4613__auto___42253,jobs,results,process,async))
})();
var state__37911__auto__ = (function (){var statearr_38630 = f__37910__auto__();
(statearr_38630[(6)] = c__37909__auto___42260);

return statearr_38630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37911__auto__);
});})(__42254,c__37909__auto___42260,G__38589_42255,G__38589_42256__$1,n__4613__auto___42253,jobs,results,process,async))
);


break;
case "async":
var c__37909__auto___42281 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__42254,c__37909__auto___42281,G__38589_42255,G__38589_42256__$1,n__4613__auto___42253,jobs,results,process,async){
return (function (){
var f__37910__auto__ = (function (){var switch__37342__auto__ = ((function (__42254,c__37909__auto___42281,G__38589_42255,G__38589_42256__$1,n__4613__auto___42253,jobs,results,process,async){
return (function (state_38646){
var state_val_38647 = (state_38646[(1)]);
if((state_val_38647 === (1))){
var state_38646__$1 = state_38646;
var statearr_38651_42286 = state_38646__$1;
(statearr_38651_42286[(2)] = null);

(statearr_38651_42286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38647 === (2))){
var state_38646__$1 = state_38646;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38646__$1,(4),jobs);
} else {
if((state_val_38647 === (3))){
var inst_38644 = (state_38646[(2)]);
var state_38646__$1 = state_38646;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38646__$1,inst_38644);
} else {
if((state_val_38647 === (4))){
var inst_38635 = (state_38646[(2)]);
var inst_38636 = async(inst_38635);
var state_38646__$1 = state_38646;
if(cljs.core.truth_(inst_38636)){
var statearr_38662_42287 = state_38646__$1;
(statearr_38662_42287[(1)] = (5));

} else {
var statearr_38663_42288 = state_38646__$1;
(statearr_38663_42288[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38647 === (5))){
var state_38646__$1 = state_38646;
var statearr_38664_42289 = state_38646__$1;
(statearr_38664_42289[(2)] = null);

(statearr_38664_42289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38647 === (6))){
var state_38646__$1 = state_38646;
var statearr_38667_42292 = state_38646__$1;
(statearr_38667_42292[(2)] = null);

(statearr_38667_42292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38647 === (7))){
var inst_38642 = (state_38646[(2)]);
var state_38646__$1 = state_38646;
var statearr_38668_42293 = state_38646__$1;
(statearr_38668_42293[(2)] = inst_38642);

(statearr_38668_42293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__42254,c__37909__auto___42281,G__38589_42255,G__38589_42256__$1,n__4613__auto___42253,jobs,results,process,async))
;
return ((function (__42254,switch__37342__auto__,c__37909__auto___42281,G__38589_42255,G__38589_42256__$1,n__4613__auto___42253,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37343__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37343__auto____0 = (function (){
var statearr_38672 = [null,null,null,null,null,null,null];
(statearr_38672[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37343__auto__);

(statearr_38672[(1)] = (1));

return statearr_38672;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37343__auto____1 = (function (state_38646){
while(true){
var ret_value__37344__auto__ = (function (){try{while(true){
var result__37345__auto__ = switch__37342__auto__(state_38646);
if(cljs.core.keyword_identical_QMARK_(result__37345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37345__auto__;
}
break;
}
}catch (e38673){var ex__37346__auto__ = e38673;
var statearr_38674_42296 = state_38646;
(statearr_38674_42296[(2)] = ex__37346__auto__);


if(cljs.core.seq((state_38646[(4)]))){
var statearr_38676_42297 = state_38646;
(statearr_38676_42297[(1)] = cljs.core.first((state_38646[(4)])));

} else {
throw ex__37346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42298 = state_38646;
state_38646 = G__42298;
continue;
} else {
return ret_value__37344__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37343__auto__ = function(state_38646){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37343__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37343__auto____1.call(this,state_38646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37343__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37343__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37343__auto__;
})()
;})(__42254,switch__37342__auto__,c__37909__auto___42281,G__38589_42255,G__38589_42256__$1,n__4613__auto___42253,jobs,results,process,async))
})();
var state__37911__auto__ = (function (){var statearr_38679 = f__37910__auto__();
(statearr_38679[(6)] = c__37909__auto___42281);

return statearr_38679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37911__auto__);
});})(__42254,c__37909__auto___42281,G__38589_42255,G__38589_42256__$1,n__4613__auto___42253,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38589_42256__$1)].join('')));

}

var G__42305 = (__42254 + (1));
__42254 = G__42305;
continue;
} else {
}
break;
}

var c__37909__auto___42306 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37910__auto__ = (function (){var switch__37342__auto__ = (function (state_38756){
var state_val_38757 = (state_38756[(1)]);
if((state_val_38757 === (7))){
var inst_38748 = (state_38756[(2)]);
var state_38756__$1 = state_38756;
var statearr_38775_42310 = state_38756__$1;
(statearr_38775_42310[(2)] = inst_38748);

(statearr_38775_42310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38757 === (1))){
var state_38756__$1 = state_38756;
var statearr_38778_42311 = state_38756__$1;
(statearr_38778_42311[(2)] = null);

(statearr_38778_42311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38757 === (4))){
var inst_38685 = (state_38756[(7)]);
var inst_38685__$1 = (state_38756[(2)]);
var inst_38686 = (inst_38685__$1 == null);
var state_38756__$1 = (function (){var statearr_38782 = state_38756;
(statearr_38782[(7)] = inst_38685__$1);

return statearr_38782;
})();
if(cljs.core.truth_(inst_38686)){
var statearr_38789_42312 = state_38756__$1;
(statearr_38789_42312[(1)] = (5));

} else {
var statearr_38790_42313 = state_38756__$1;
(statearr_38790_42313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38757 === (6))){
var inst_38685 = (state_38756[(7)]);
var inst_38696 = (state_38756[(8)]);
var inst_38696__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_38728 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38736 = [inst_38685,inst_38696__$1];
var inst_38737 = (new cljs.core.PersistentVector(null,2,(5),inst_38728,inst_38736,null));
var state_38756__$1 = (function (){var statearr_38795 = state_38756;
(statearr_38795[(8)] = inst_38696__$1);

return statearr_38795;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38756__$1,(8),jobs,inst_38737);
} else {
if((state_val_38757 === (3))){
var inst_38750 = (state_38756[(2)]);
var state_38756__$1 = state_38756;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38756__$1,inst_38750);
} else {
if((state_val_38757 === (2))){
var state_38756__$1 = state_38756;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38756__$1,(4),from);
} else {
if((state_val_38757 === (9))){
var inst_38744 = (state_38756[(2)]);
var state_38756__$1 = (function (){var statearr_38827 = state_38756;
(statearr_38827[(9)] = inst_38744);

return statearr_38827;
})();
var statearr_38828_42318 = state_38756__$1;
(statearr_38828_42318[(2)] = null);

(statearr_38828_42318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38757 === (5))){
var inst_38694 = cljs.core.async.close_BANG_(jobs);
var state_38756__$1 = state_38756;
var statearr_38830_42322 = state_38756__$1;
(statearr_38830_42322[(2)] = inst_38694);

(statearr_38830_42322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38757 === (8))){
var inst_38696 = (state_38756[(8)]);
var inst_38739 = (state_38756[(2)]);
var state_38756__$1 = (function (){var statearr_38831 = state_38756;
(statearr_38831[(10)] = inst_38739);

return statearr_38831;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38756__$1,(9),results,inst_38696);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37343__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37343__auto____0 = (function (){
var statearr_38833 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38833[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37343__auto__);

(statearr_38833[(1)] = (1));

return statearr_38833;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37343__auto____1 = (function (state_38756){
while(true){
var ret_value__37344__auto__ = (function (){try{while(true){
var result__37345__auto__ = switch__37342__auto__(state_38756);
if(cljs.core.keyword_identical_QMARK_(result__37345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37345__auto__;
}
break;
}
}catch (e38836){var ex__37346__auto__ = e38836;
var statearr_38837_42323 = state_38756;
(statearr_38837_42323[(2)] = ex__37346__auto__);


if(cljs.core.seq((state_38756[(4)]))){
var statearr_38839_42324 = state_38756;
(statearr_38839_42324[(1)] = cljs.core.first((state_38756[(4)])));

} else {
throw ex__37346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42325 = state_38756;
state_38756 = G__42325;
continue;
} else {
return ret_value__37344__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37343__auto__ = function(state_38756){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37343__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37343__auto____1.call(this,state_38756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37343__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37343__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37343__auto__;
})()
})();
var state__37911__auto__ = (function (){var statearr_38842 = f__37910__auto__();
(statearr_38842[(6)] = c__37909__auto___42306);

return statearr_38842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37911__auto__);
}));


var c__37909__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37910__auto__ = (function (){var switch__37342__auto__ = (function (state_38931){
var state_val_38933 = (state_38931[(1)]);
if((state_val_38933 === (7))){
var inst_38927 = (state_38931[(2)]);
var state_38931__$1 = state_38931;
var statearr_38949_42326 = state_38931__$1;
(statearr_38949_42326[(2)] = inst_38927);

(statearr_38949_42326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38933 === (20))){
var state_38931__$1 = state_38931;
var statearr_38959_42327 = state_38931__$1;
(statearr_38959_42327[(2)] = null);

(statearr_38959_42327[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38933 === (1))){
var state_38931__$1 = state_38931;
var statearr_38961_42328 = state_38931__$1;
(statearr_38961_42328[(2)] = null);

(statearr_38961_42328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38933 === (4))){
var inst_38890 = (state_38931[(7)]);
var inst_38890__$1 = (state_38931[(2)]);
var inst_38895 = (inst_38890__$1 == null);
var state_38931__$1 = (function (){var statearr_38967 = state_38931;
(statearr_38967[(7)] = inst_38890__$1);

return statearr_38967;
})();
if(cljs.core.truth_(inst_38895)){
var statearr_38969_42330 = state_38931__$1;
(statearr_38969_42330[(1)] = (5));

} else {
var statearr_38971_42331 = state_38931__$1;
(statearr_38971_42331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38933 === (15))){
var inst_38908 = (state_38931[(8)]);
var state_38931__$1 = state_38931;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38931__$1,(18),to,inst_38908);
} else {
if((state_val_38933 === (21))){
var inst_38922 = (state_38931[(2)]);
var state_38931__$1 = state_38931;
var statearr_38985_42332 = state_38931__$1;
(statearr_38985_42332[(2)] = inst_38922);

(statearr_38985_42332[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38933 === (13))){
var inst_38924 = (state_38931[(2)]);
var state_38931__$1 = (function (){var statearr_38988 = state_38931;
(statearr_38988[(9)] = inst_38924);

return statearr_38988;
})();
var statearr_38993_42335 = state_38931__$1;
(statearr_38993_42335[(2)] = null);

(statearr_38993_42335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38933 === (6))){
var inst_38890 = (state_38931[(7)]);
var state_38931__$1 = state_38931;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38931__$1,(11),inst_38890);
} else {
if((state_val_38933 === (17))){
var inst_38917 = (state_38931[(2)]);
var state_38931__$1 = state_38931;
if(cljs.core.truth_(inst_38917)){
var statearr_39007_42336 = state_38931__$1;
(statearr_39007_42336[(1)] = (19));

} else {
var statearr_39008_42337 = state_38931__$1;
(statearr_39008_42337[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38933 === (3))){
var inst_38929 = (state_38931[(2)]);
var state_38931__$1 = state_38931;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38931__$1,inst_38929);
} else {
if((state_val_38933 === (12))){
var inst_38905 = (state_38931[(10)]);
var state_38931__$1 = state_38931;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38931__$1,(14),inst_38905);
} else {
if((state_val_38933 === (2))){
var state_38931__$1 = state_38931;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38931__$1,(4),results);
} else {
if((state_val_38933 === (19))){
var state_38931__$1 = state_38931;
var statearr_39009_42340 = state_38931__$1;
(statearr_39009_42340[(2)] = null);

(statearr_39009_42340[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38933 === (11))){
var inst_38905 = (state_38931[(2)]);
var state_38931__$1 = (function (){var statearr_39014 = state_38931;
(statearr_39014[(10)] = inst_38905);

return statearr_39014;
})();
var statearr_39015_42342 = state_38931__$1;
(statearr_39015_42342[(2)] = null);

(statearr_39015_42342[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38933 === (9))){
var state_38931__$1 = state_38931;
var statearr_39016_42345 = state_38931__$1;
(statearr_39016_42345[(2)] = null);

(statearr_39016_42345[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38933 === (5))){
var state_38931__$1 = state_38931;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39021_42350 = state_38931__$1;
(statearr_39021_42350[(1)] = (8));

} else {
var statearr_39022_42351 = state_38931__$1;
(statearr_39022_42351[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38933 === (14))){
var inst_38908 = (state_38931[(8)]);
var inst_38908__$1 = (state_38931[(2)]);
var inst_38910 = (inst_38908__$1 == null);
var inst_38911 = cljs.core.not(inst_38910);
var state_38931__$1 = (function (){var statearr_39027 = state_38931;
(statearr_39027[(8)] = inst_38908__$1);

return statearr_39027;
})();
if(inst_38911){
var statearr_39028_42352 = state_38931__$1;
(statearr_39028_42352[(1)] = (15));

} else {
var statearr_39029_42354 = state_38931__$1;
(statearr_39029_42354[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38933 === (16))){
var state_38931__$1 = state_38931;
var statearr_39031_42356 = state_38931__$1;
(statearr_39031_42356[(2)] = false);

(statearr_39031_42356[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38933 === (10))){
var inst_38902 = (state_38931[(2)]);
var state_38931__$1 = state_38931;
var statearr_39036_42358 = state_38931__$1;
(statearr_39036_42358[(2)] = inst_38902);

(statearr_39036_42358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38933 === (18))){
var inst_38914 = (state_38931[(2)]);
var state_38931__$1 = state_38931;
var statearr_39037_42359 = state_38931__$1;
(statearr_39037_42359[(2)] = inst_38914);

(statearr_39037_42359[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38933 === (8))){
var inst_38899 = cljs.core.async.close_BANG_(to);
var state_38931__$1 = state_38931;
var statearr_39038_42360 = state_38931__$1;
(statearr_39038_42360[(2)] = inst_38899);

(statearr_39038_42360[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37343__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37343__auto____0 = (function (){
var statearr_39045 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39045[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37343__auto__);

(statearr_39045[(1)] = (1));

return statearr_39045;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37343__auto____1 = (function (state_38931){
while(true){
var ret_value__37344__auto__ = (function (){try{while(true){
var result__37345__auto__ = switch__37342__auto__(state_38931);
if(cljs.core.keyword_identical_QMARK_(result__37345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37345__auto__;
}
break;
}
}catch (e39048){var ex__37346__auto__ = e39048;
var statearr_39050_42366 = state_38931;
(statearr_39050_42366[(2)] = ex__37346__auto__);


if(cljs.core.seq((state_38931[(4)]))){
var statearr_39051_42367 = state_38931;
(statearr_39051_42367[(1)] = cljs.core.first((state_38931[(4)])));

} else {
throw ex__37346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42369 = state_38931;
state_38931 = G__42369;
continue;
} else {
return ret_value__37344__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37343__auto__ = function(state_38931){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37343__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37343__auto____1.call(this,state_38931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37343__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37343__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37343__auto__;
})()
})();
var state__37911__auto__ = (function (){var statearr_39078 = f__37910__auto__();
(statearr_39078[(6)] = c__37909__auto__);

return statearr_39078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37911__auto__);
}));

return c__37909__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__39088 = arguments.length;
switch (G__39088) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__39100 = arguments.length;
switch (G__39100) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__39107 = arguments.length;
switch (G__39107) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__37909__auto___42384 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37910__auto__ = (function (){var switch__37342__auto__ = (function (state_39144){
var state_val_39149 = (state_39144[(1)]);
if((state_val_39149 === (7))){
var inst_39137 = (state_39144[(2)]);
var state_39144__$1 = state_39144;
var statearr_39151_42385 = state_39144__$1;
(statearr_39151_42385[(2)] = inst_39137);

(statearr_39151_42385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39149 === (1))){
var state_39144__$1 = state_39144;
var statearr_39153_42386 = state_39144__$1;
(statearr_39153_42386[(2)] = null);

(statearr_39153_42386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39149 === (4))){
var inst_39118 = (state_39144[(7)]);
var inst_39118__$1 = (state_39144[(2)]);
var inst_39119 = (inst_39118__$1 == null);
var state_39144__$1 = (function (){var statearr_39157 = state_39144;
(statearr_39157[(7)] = inst_39118__$1);

return statearr_39157;
})();
if(cljs.core.truth_(inst_39119)){
var statearr_39158_42387 = state_39144__$1;
(statearr_39158_42387[(1)] = (5));

} else {
var statearr_39159_42388 = state_39144__$1;
(statearr_39159_42388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39149 === (13))){
var state_39144__$1 = state_39144;
var statearr_39161_42389 = state_39144__$1;
(statearr_39161_42389[(2)] = null);

(statearr_39161_42389[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39149 === (6))){
var inst_39118 = (state_39144[(7)]);
var inst_39124 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_39118) : p.call(null,inst_39118));
var state_39144__$1 = state_39144;
if(cljs.core.truth_(inst_39124)){
var statearr_39162_42390 = state_39144__$1;
(statearr_39162_42390[(1)] = (9));

} else {
var statearr_39163_42391 = state_39144__$1;
(statearr_39163_42391[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39149 === (3))){
var inst_39139 = (state_39144[(2)]);
var state_39144__$1 = state_39144;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39144__$1,inst_39139);
} else {
if((state_val_39149 === (12))){
var state_39144__$1 = state_39144;
var statearr_39173_42396 = state_39144__$1;
(statearr_39173_42396[(2)] = null);

(statearr_39173_42396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39149 === (2))){
var state_39144__$1 = state_39144;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39144__$1,(4),ch);
} else {
if((state_val_39149 === (11))){
var inst_39118 = (state_39144[(7)]);
var inst_39128 = (state_39144[(2)]);
var state_39144__$1 = state_39144;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39144__$1,(8),inst_39128,inst_39118);
} else {
if((state_val_39149 === (9))){
var state_39144__$1 = state_39144;
var statearr_39174_42402 = state_39144__$1;
(statearr_39174_42402[(2)] = tc);

(statearr_39174_42402[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39149 === (5))){
var inst_39121 = cljs.core.async.close_BANG_(tc);
var inst_39122 = cljs.core.async.close_BANG_(fc);
var state_39144__$1 = (function (){var statearr_39176 = state_39144;
(statearr_39176[(8)] = inst_39121);

return statearr_39176;
})();
var statearr_39177_42403 = state_39144__$1;
(statearr_39177_42403[(2)] = inst_39122);

(statearr_39177_42403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39149 === (14))){
var inst_39135 = (state_39144[(2)]);
var state_39144__$1 = state_39144;
var statearr_39178_42404 = state_39144__$1;
(statearr_39178_42404[(2)] = inst_39135);

(statearr_39178_42404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39149 === (10))){
var state_39144__$1 = state_39144;
var statearr_39179_42405 = state_39144__$1;
(statearr_39179_42405[(2)] = fc);

(statearr_39179_42405[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39149 === (8))){
var inst_39130 = (state_39144[(2)]);
var state_39144__$1 = state_39144;
if(cljs.core.truth_(inst_39130)){
var statearr_39180_42406 = state_39144__$1;
(statearr_39180_42406[(1)] = (12));

} else {
var statearr_39182_42407 = state_39144__$1;
(statearr_39182_42407[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37343__auto__ = null;
var cljs$core$async$state_machine__37343__auto____0 = (function (){
var statearr_39184 = [null,null,null,null,null,null,null,null,null];
(statearr_39184[(0)] = cljs$core$async$state_machine__37343__auto__);

(statearr_39184[(1)] = (1));

return statearr_39184;
});
var cljs$core$async$state_machine__37343__auto____1 = (function (state_39144){
while(true){
var ret_value__37344__auto__ = (function (){try{while(true){
var result__37345__auto__ = switch__37342__auto__(state_39144);
if(cljs.core.keyword_identical_QMARK_(result__37345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37345__auto__;
}
break;
}
}catch (e39187){var ex__37346__auto__ = e39187;
var statearr_39191_42408 = state_39144;
(statearr_39191_42408[(2)] = ex__37346__auto__);


if(cljs.core.seq((state_39144[(4)]))){
var statearr_39193_42409 = state_39144;
(statearr_39193_42409[(1)] = cljs.core.first((state_39144[(4)])));

} else {
throw ex__37346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42410 = state_39144;
state_39144 = G__42410;
continue;
} else {
return ret_value__37344__auto__;
}
break;
}
});
cljs$core$async$state_machine__37343__auto__ = function(state_39144){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37343__auto____1.call(this,state_39144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37343__auto____0;
cljs$core$async$state_machine__37343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37343__auto____1;
return cljs$core$async$state_machine__37343__auto__;
})()
})();
var state__37911__auto__ = (function (){var statearr_39194 = f__37910__auto__();
(statearr_39194[(6)] = c__37909__auto___42384);

return statearr_39194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37911__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__37909__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37910__auto__ = (function (){var switch__37342__auto__ = (function (state_39223){
var state_val_39224 = (state_39223[(1)]);
if((state_val_39224 === (7))){
var inst_39219 = (state_39223[(2)]);
var state_39223__$1 = state_39223;
var statearr_39226_42412 = state_39223__$1;
(statearr_39226_42412[(2)] = inst_39219);

(statearr_39226_42412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39224 === (1))){
var inst_39200 = init;
var inst_39203 = inst_39200;
var state_39223__$1 = (function (){var statearr_39227 = state_39223;
(statearr_39227[(7)] = inst_39203);

return statearr_39227;
})();
var statearr_39228_42415 = state_39223__$1;
(statearr_39228_42415[(2)] = null);

(statearr_39228_42415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39224 === (4))){
var inst_39206 = (state_39223[(8)]);
var inst_39206__$1 = (state_39223[(2)]);
var inst_39207 = (inst_39206__$1 == null);
var state_39223__$1 = (function (){var statearr_39229 = state_39223;
(statearr_39229[(8)] = inst_39206__$1);

return statearr_39229;
})();
if(cljs.core.truth_(inst_39207)){
var statearr_39230_42416 = state_39223__$1;
(statearr_39230_42416[(1)] = (5));

} else {
var statearr_39231_42417 = state_39223__$1;
(statearr_39231_42417[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39224 === (6))){
var inst_39203 = (state_39223[(7)]);
var inst_39206 = (state_39223[(8)]);
var inst_39210 = (state_39223[(9)]);
var inst_39210__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_39203,inst_39206) : f.call(null,inst_39203,inst_39206));
var inst_39211 = cljs.core.reduced_QMARK_(inst_39210__$1);
var state_39223__$1 = (function (){var statearr_39233 = state_39223;
(statearr_39233[(9)] = inst_39210__$1);

return statearr_39233;
})();
if(inst_39211){
var statearr_39236_42419 = state_39223__$1;
(statearr_39236_42419[(1)] = (8));

} else {
var statearr_39238_42420 = state_39223__$1;
(statearr_39238_42420[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39224 === (3))){
var inst_39221 = (state_39223[(2)]);
var state_39223__$1 = state_39223;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39223__$1,inst_39221);
} else {
if((state_val_39224 === (2))){
var state_39223__$1 = state_39223;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39223__$1,(4),ch);
} else {
if((state_val_39224 === (9))){
var inst_39210 = (state_39223[(9)]);
var inst_39203 = inst_39210;
var state_39223__$1 = (function (){var statearr_39244 = state_39223;
(statearr_39244[(7)] = inst_39203);

return statearr_39244;
})();
var statearr_39245_42422 = state_39223__$1;
(statearr_39245_42422[(2)] = null);

(statearr_39245_42422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39224 === (5))){
var inst_39203 = (state_39223[(7)]);
var state_39223__$1 = state_39223;
var statearr_39246_42430 = state_39223__$1;
(statearr_39246_42430[(2)] = inst_39203);

(statearr_39246_42430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39224 === (10))){
var inst_39217 = (state_39223[(2)]);
var state_39223__$1 = state_39223;
var statearr_39247_42434 = state_39223__$1;
(statearr_39247_42434[(2)] = inst_39217);

(statearr_39247_42434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39224 === (8))){
var inst_39210 = (state_39223[(9)]);
var inst_39213 = cljs.core.deref(inst_39210);
var state_39223__$1 = state_39223;
var statearr_39248_42437 = state_39223__$1;
(statearr_39248_42437[(2)] = inst_39213);

(statearr_39248_42437[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__37343__auto__ = null;
var cljs$core$async$reduce_$_state_machine__37343__auto____0 = (function (){
var statearr_39254 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39254[(0)] = cljs$core$async$reduce_$_state_machine__37343__auto__);

(statearr_39254[(1)] = (1));

return statearr_39254;
});
var cljs$core$async$reduce_$_state_machine__37343__auto____1 = (function (state_39223){
while(true){
var ret_value__37344__auto__ = (function (){try{while(true){
var result__37345__auto__ = switch__37342__auto__(state_39223);
if(cljs.core.keyword_identical_QMARK_(result__37345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37345__auto__;
}
break;
}
}catch (e39256){var ex__37346__auto__ = e39256;
var statearr_39258_42445 = state_39223;
(statearr_39258_42445[(2)] = ex__37346__auto__);


if(cljs.core.seq((state_39223[(4)]))){
var statearr_39260_42446 = state_39223;
(statearr_39260_42446[(1)] = cljs.core.first((state_39223[(4)])));

} else {
throw ex__37346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42451 = state_39223;
state_39223 = G__42451;
continue;
} else {
return ret_value__37344__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__37343__auto__ = function(state_39223){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__37343__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__37343__auto____1.call(this,state_39223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__37343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__37343__auto____0;
cljs$core$async$reduce_$_state_machine__37343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__37343__auto____1;
return cljs$core$async$reduce_$_state_machine__37343__auto__;
})()
})();
var state__37911__auto__ = (function (){var statearr_39265 = f__37910__auto__();
(statearr_39265[(6)] = c__37909__auto__);

return statearr_39265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37911__auto__);
}));

return c__37909__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__37909__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37910__auto__ = (function (){var switch__37342__auto__ = (function (state_39277){
var state_val_39281 = (state_39277[(1)]);
if((state_val_39281 === (1))){
var inst_39272 = cljs.core.async.reduce(f__$1,init,ch);
var state_39277__$1 = state_39277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39277__$1,(2),inst_39272);
} else {
if((state_val_39281 === (2))){
var inst_39274 = (state_39277[(2)]);
var inst_39275 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_39274) : f__$1.call(null,inst_39274));
var state_39277__$1 = state_39277;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39277__$1,inst_39275);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__37343__auto__ = null;
var cljs$core$async$transduce_$_state_machine__37343__auto____0 = (function (){
var statearr_39288 = [null,null,null,null,null,null,null];
(statearr_39288[(0)] = cljs$core$async$transduce_$_state_machine__37343__auto__);

(statearr_39288[(1)] = (1));

return statearr_39288;
});
var cljs$core$async$transduce_$_state_machine__37343__auto____1 = (function (state_39277){
while(true){
var ret_value__37344__auto__ = (function (){try{while(true){
var result__37345__auto__ = switch__37342__auto__(state_39277);
if(cljs.core.keyword_identical_QMARK_(result__37345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37345__auto__;
}
break;
}
}catch (e39289){var ex__37346__auto__ = e39289;
var statearr_39290_42464 = state_39277;
(statearr_39290_42464[(2)] = ex__37346__auto__);


if(cljs.core.seq((state_39277[(4)]))){
var statearr_39291_42465 = state_39277;
(statearr_39291_42465[(1)] = cljs.core.first((state_39277[(4)])));

} else {
throw ex__37346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42469 = state_39277;
state_39277 = G__42469;
continue;
} else {
return ret_value__37344__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__37343__auto__ = function(state_39277){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__37343__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__37343__auto____1.call(this,state_39277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__37343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__37343__auto____0;
cljs$core$async$transduce_$_state_machine__37343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__37343__auto____1;
return cljs$core$async$transduce_$_state_machine__37343__auto__;
})()
})();
var state__37911__auto__ = (function (){var statearr_39295 = f__37910__auto__();
(statearr_39295[(6)] = c__37909__auto__);

return statearr_39295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37911__auto__);
}));

return c__37909__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__39298 = arguments.length;
switch (G__39298) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__37909__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37910__auto__ = (function (){var switch__37342__auto__ = (function (state_39359){
var state_val_39360 = (state_39359[(1)]);
if((state_val_39360 === (7))){
var inst_39336 = (state_39359[(2)]);
var state_39359__$1 = state_39359;
var statearr_39361_42476 = state_39359__$1;
(statearr_39361_42476[(2)] = inst_39336);

(statearr_39361_42476[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39360 === (1))){
var inst_39310 = cljs.core.seq(coll);
var inst_39311 = inst_39310;
var state_39359__$1 = (function (){var statearr_39362 = state_39359;
(statearr_39362[(7)] = inst_39311);

return statearr_39362;
})();
var statearr_39364_42477 = state_39359__$1;
(statearr_39364_42477[(2)] = null);

(statearr_39364_42477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39360 === (4))){
var inst_39311 = (state_39359[(7)]);
var inst_39334 = cljs.core.first(inst_39311);
var state_39359__$1 = state_39359;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39359__$1,(7),ch,inst_39334);
} else {
if((state_val_39360 === (13))){
var inst_39348 = (state_39359[(2)]);
var state_39359__$1 = state_39359;
var statearr_39366_42480 = state_39359__$1;
(statearr_39366_42480[(2)] = inst_39348);

(statearr_39366_42480[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39360 === (6))){
var inst_39339 = (state_39359[(2)]);
var state_39359__$1 = state_39359;
if(cljs.core.truth_(inst_39339)){
var statearr_39368_42481 = state_39359__$1;
(statearr_39368_42481[(1)] = (8));

} else {
var statearr_39371_42483 = state_39359__$1;
(statearr_39371_42483[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39360 === (3))){
var inst_39356 = (state_39359[(2)]);
var state_39359__$1 = state_39359;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39359__$1,inst_39356);
} else {
if((state_val_39360 === (12))){
var state_39359__$1 = state_39359;
var statearr_39372_42484 = state_39359__$1;
(statearr_39372_42484[(2)] = null);

(statearr_39372_42484[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39360 === (2))){
var inst_39311 = (state_39359[(7)]);
var state_39359__$1 = state_39359;
if(cljs.core.truth_(inst_39311)){
var statearr_39376_42488 = state_39359__$1;
(statearr_39376_42488[(1)] = (4));

} else {
var statearr_39377_42489 = state_39359__$1;
(statearr_39377_42489[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39360 === (11))){
var inst_39345 = cljs.core.async.close_BANG_(ch);
var state_39359__$1 = state_39359;
var statearr_39378_42490 = state_39359__$1;
(statearr_39378_42490[(2)] = inst_39345);

(statearr_39378_42490[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39360 === (9))){
var state_39359__$1 = state_39359;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39380_42492 = state_39359__$1;
(statearr_39380_42492[(1)] = (11));

} else {
var statearr_39381_42493 = state_39359__$1;
(statearr_39381_42493[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39360 === (5))){
var inst_39311 = (state_39359[(7)]);
var state_39359__$1 = state_39359;
var statearr_39384_42494 = state_39359__$1;
(statearr_39384_42494[(2)] = inst_39311);

(statearr_39384_42494[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39360 === (10))){
var inst_39351 = (state_39359[(2)]);
var state_39359__$1 = state_39359;
var statearr_39388_42495 = state_39359__$1;
(statearr_39388_42495[(2)] = inst_39351);

(statearr_39388_42495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39360 === (8))){
var inst_39311 = (state_39359[(7)]);
var inst_39341 = cljs.core.next(inst_39311);
var inst_39311__$1 = inst_39341;
var state_39359__$1 = (function (){var statearr_39389 = state_39359;
(statearr_39389[(7)] = inst_39311__$1);

return statearr_39389;
})();
var statearr_39390_42498 = state_39359__$1;
(statearr_39390_42498[(2)] = null);

(statearr_39390_42498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37343__auto__ = null;
var cljs$core$async$state_machine__37343__auto____0 = (function (){
var statearr_39393 = [null,null,null,null,null,null,null,null];
(statearr_39393[(0)] = cljs$core$async$state_machine__37343__auto__);

(statearr_39393[(1)] = (1));

return statearr_39393;
});
var cljs$core$async$state_machine__37343__auto____1 = (function (state_39359){
while(true){
var ret_value__37344__auto__ = (function (){try{while(true){
var result__37345__auto__ = switch__37342__auto__(state_39359);
if(cljs.core.keyword_identical_QMARK_(result__37345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37345__auto__;
}
break;
}
}catch (e39397){var ex__37346__auto__ = e39397;
var statearr_39399_42502 = state_39359;
(statearr_39399_42502[(2)] = ex__37346__auto__);


if(cljs.core.seq((state_39359[(4)]))){
var statearr_39402_42503 = state_39359;
(statearr_39402_42503[(1)] = cljs.core.first((state_39359[(4)])));

} else {
throw ex__37346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42506 = state_39359;
state_39359 = G__42506;
continue;
} else {
return ret_value__37344__auto__;
}
break;
}
});
cljs$core$async$state_machine__37343__auto__ = function(state_39359){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37343__auto____1.call(this,state_39359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37343__auto____0;
cljs$core$async$state_machine__37343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37343__auto____1;
return cljs$core$async$state_machine__37343__auto__;
})()
})();
var state__37911__auto__ = (function (){var statearr_39406 = f__37910__auto__();
(statearr_39406[(6)] = c__37909__auto__);

return statearr_39406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37911__auto__);
}));

return c__37909__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__39420 = arguments.length;
switch (G__39420) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_42515 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_42515(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_42521 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_42521(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_42530 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_42530(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_42532 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_42532(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39451 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39451 = (function (ch,cs,meta39452){
this.ch = ch;
this.cs = cs;
this.meta39452 = meta39452;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39453,meta39452__$1){
var self__ = this;
var _39453__$1 = this;
return (new cljs.core.async.t_cljs$core$async39451(self__.ch,self__.cs,meta39452__$1));
}));

(cljs.core.async.t_cljs$core$async39451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39453){
var self__ = this;
var _39453__$1 = this;
return self__.meta39452;
}));

(cljs.core.async.t_cljs$core$async39451.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39451.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async39451.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39451.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async39451.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async39451.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async39451.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta39452","meta39452",1848186398,null)], null);
}));

(cljs.core.async.t_cljs$core$async39451.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39451.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39451");

(cljs.core.async.t_cljs$core$async39451.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async39451");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39451.
 */
cljs.core.async.__GT_t_cljs$core$async39451 = (function cljs$core$async$mult_$___GT_t_cljs$core$async39451(ch__$1,cs__$1,meta39452){
return (new cljs.core.async.t_cljs$core$async39451(ch__$1,cs__$1,meta39452));
});

}

return (new cljs.core.async.t_cljs$core$async39451(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__37909__auto___42553 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37910__auto__ = (function (){var switch__37342__auto__ = (function (state_39685){
var state_val_39686 = (state_39685[(1)]);
if((state_val_39686 === (7))){
var inst_39676 = (state_39685[(2)]);
var state_39685__$1 = state_39685;
var statearr_39691_42556 = state_39685__$1;
(statearr_39691_42556[(2)] = inst_39676);

(statearr_39691_42556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (20))){
var inst_39573 = (state_39685[(7)]);
var inst_39586 = cljs.core.first(inst_39573);
var inst_39587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39586,(0),null);
var inst_39588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39586,(1),null);
var state_39685__$1 = (function (){var statearr_39694 = state_39685;
(statearr_39694[(8)] = inst_39587);

return statearr_39694;
})();
if(cljs.core.truth_(inst_39588)){
var statearr_39695_42565 = state_39685__$1;
(statearr_39695_42565[(1)] = (22));

} else {
var statearr_39696_42572 = state_39685__$1;
(statearr_39696_42572[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (27))){
var inst_39621 = (state_39685[(9)]);
var inst_39532 = (state_39685[(10)]);
var inst_39629 = (state_39685[(11)]);
var inst_39623 = (state_39685[(12)]);
var inst_39629__$1 = cljs.core._nth(inst_39621,inst_39623);
var inst_39630 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_39629__$1,inst_39532,done);
var state_39685__$1 = (function (){var statearr_39700 = state_39685;
(statearr_39700[(11)] = inst_39629__$1);

return statearr_39700;
})();
if(cljs.core.truth_(inst_39630)){
var statearr_39701_42577 = state_39685__$1;
(statearr_39701_42577[(1)] = (30));

} else {
var statearr_39702_42578 = state_39685__$1;
(statearr_39702_42578[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (1))){
var state_39685__$1 = state_39685;
var statearr_39705_42579 = state_39685__$1;
(statearr_39705_42579[(2)] = null);

(statearr_39705_42579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (24))){
var inst_39573 = (state_39685[(7)]);
var inst_39595 = (state_39685[(2)]);
var inst_39596 = cljs.core.next(inst_39573);
var inst_39547 = inst_39596;
var inst_39548 = null;
var inst_39549 = (0);
var inst_39550 = (0);
var state_39685__$1 = (function (){var statearr_39706 = state_39685;
(statearr_39706[(13)] = inst_39550);

(statearr_39706[(14)] = inst_39548);

(statearr_39706[(15)] = inst_39547);

(statearr_39706[(16)] = inst_39595);

(statearr_39706[(17)] = inst_39549);

return statearr_39706;
})();
var statearr_39709_42580 = state_39685__$1;
(statearr_39709_42580[(2)] = null);

(statearr_39709_42580[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (39))){
var state_39685__$1 = state_39685;
var statearr_39753_42581 = state_39685__$1;
(statearr_39753_42581[(2)] = null);

(statearr_39753_42581[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (4))){
var inst_39532 = (state_39685[(10)]);
var inst_39532__$1 = (state_39685[(2)]);
var inst_39535 = (inst_39532__$1 == null);
var state_39685__$1 = (function (){var statearr_39759 = state_39685;
(statearr_39759[(10)] = inst_39532__$1);

return statearr_39759;
})();
if(cljs.core.truth_(inst_39535)){
var statearr_39760_42588 = state_39685__$1;
(statearr_39760_42588[(1)] = (5));

} else {
var statearr_39761_42589 = state_39685__$1;
(statearr_39761_42589[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (15))){
var inst_39550 = (state_39685[(13)]);
var inst_39548 = (state_39685[(14)]);
var inst_39547 = (state_39685[(15)]);
var inst_39549 = (state_39685[(17)]);
var inst_39569 = (state_39685[(2)]);
var inst_39570 = (inst_39550 + (1));
var tmp39744 = inst_39548;
var tmp39747 = inst_39547;
var tmp39748 = inst_39549;
var inst_39547__$1 = tmp39747;
var inst_39548__$1 = tmp39744;
var inst_39549__$1 = tmp39748;
var inst_39550__$1 = inst_39570;
var state_39685__$1 = (function (){var statearr_39772 = state_39685;
(statearr_39772[(13)] = inst_39550__$1);

(statearr_39772[(14)] = inst_39548__$1);

(statearr_39772[(15)] = inst_39547__$1);

(statearr_39772[(17)] = inst_39549__$1);

(statearr_39772[(18)] = inst_39569);

return statearr_39772;
})();
var statearr_39773_42600 = state_39685__$1;
(statearr_39773_42600[(2)] = null);

(statearr_39773_42600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (21))){
var inst_39599 = (state_39685[(2)]);
var state_39685__$1 = state_39685;
var statearr_39798_42601 = state_39685__$1;
(statearr_39798_42601[(2)] = inst_39599);

(statearr_39798_42601[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (31))){
var inst_39629 = (state_39685[(11)]);
var inst_39633 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_39629);
var state_39685__$1 = state_39685;
var statearr_39801_42604 = state_39685__$1;
(statearr_39801_42604[(2)] = inst_39633);

(statearr_39801_42604[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (32))){
var inst_39621 = (state_39685[(9)]);
var inst_39623 = (state_39685[(12)]);
var inst_39620 = (state_39685[(19)]);
var inst_39622 = (state_39685[(20)]);
var inst_39635 = (state_39685[(2)]);
var inst_39636 = (inst_39623 + (1));
var tmp39774 = inst_39621;
var tmp39775 = inst_39620;
var tmp39776 = inst_39622;
var inst_39620__$1 = tmp39775;
var inst_39621__$1 = tmp39774;
var inst_39622__$1 = tmp39776;
var inst_39623__$1 = inst_39636;
var state_39685__$1 = (function (){var statearr_39803 = state_39685;
(statearr_39803[(9)] = inst_39621__$1);

(statearr_39803[(21)] = inst_39635);

(statearr_39803[(12)] = inst_39623__$1);

(statearr_39803[(19)] = inst_39620__$1);

(statearr_39803[(20)] = inst_39622__$1);

return statearr_39803;
})();
var statearr_39807_42616 = state_39685__$1;
(statearr_39807_42616[(2)] = null);

(statearr_39807_42616[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (40))){
var inst_39649 = (state_39685[(22)]);
var inst_39653 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_39649);
var state_39685__$1 = state_39685;
var statearr_39821_42621 = state_39685__$1;
(statearr_39821_42621[(2)] = inst_39653);

(statearr_39821_42621[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (33))){
var inst_39639 = (state_39685[(23)]);
var inst_39641 = cljs.core.chunked_seq_QMARK_(inst_39639);
var state_39685__$1 = state_39685;
if(inst_39641){
var statearr_39834_42626 = state_39685__$1;
(statearr_39834_42626[(1)] = (36));

} else {
var statearr_39839_42627 = state_39685__$1;
(statearr_39839_42627[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (13))){
var inst_39563 = (state_39685[(24)]);
var inst_39566 = cljs.core.async.close_BANG_(inst_39563);
var state_39685__$1 = state_39685;
var statearr_39851_42628 = state_39685__$1;
(statearr_39851_42628[(2)] = inst_39566);

(statearr_39851_42628[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (22))){
var inst_39587 = (state_39685[(8)]);
var inst_39590 = cljs.core.async.close_BANG_(inst_39587);
var state_39685__$1 = state_39685;
var statearr_39854_42629 = state_39685__$1;
(statearr_39854_42629[(2)] = inst_39590);

(statearr_39854_42629[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (36))){
var inst_39639 = (state_39685[(23)]);
var inst_39643 = cljs.core.chunk_first(inst_39639);
var inst_39644 = cljs.core.chunk_rest(inst_39639);
var inst_39646 = cljs.core.count(inst_39643);
var inst_39620 = inst_39644;
var inst_39621 = inst_39643;
var inst_39622 = inst_39646;
var inst_39623 = (0);
var state_39685__$1 = (function (){var statearr_39857 = state_39685;
(statearr_39857[(9)] = inst_39621);

(statearr_39857[(12)] = inst_39623);

(statearr_39857[(19)] = inst_39620);

(statearr_39857[(20)] = inst_39622);

return statearr_39857;
})();
var statearr_39858_42630 = state_39685__$1;
(statearr_39858_42630[(2)] = null);

(statearr_39858_42630[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (41))){
var inst_39639 = (state_39685[(23)]);
var inst_39655 = (state_39685[(2)]);
var inst_39656 = cljs.core.next(inst_39639);
var inst_39620 = inst_39656;
var inst_39621 = null;
var inst_39622 = (0);
var inst_39623 = (0);
var state_39685__$1 = (function (){var statearr_39871 = state_39685;
(statearr_39871[(9)] = inst_39621);

(statearr_39871[(25)] = inst_39655);

(statearr_39871[(12)] = inst_39623);

(statearr_39871[(19)] = inst_39620);

(statearr_39871[(20)] = inst_39622);

return statearr_39871;
})();
var statearr_39872_42634 = state_39685__$1;
(statearr_39872_42634[(2)] = null);

(statearr_39872_42634[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (43))){
var state_39685__$1 = state_39685;
var statearr_39874_42640 = state_39685__$1;
(statearr_39874_42640[(2)] = null);

(statearr_39874_42640[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (29))){
var inst_39664 = (state_39685[(2)]);
var state_39685__$1 = state_39685;
var statearr_39877_42641 = state_39685__$1;
(statearr_39877_42641[(2)] = inst_39664);

(statearr_39877_42641[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (44))){
var inst_39673 = (state_39685[(2)]);
var state_39685__$1 = (function (){var statearr_39879 = state_39685;
(statearr_39879[(26)] = inst_39673);

return statearr_39879;
})();
var statearr_39881_42642 = state_39685__$1;
(statearr_39881_42642[(2)] = null);

(statearr_39881_42642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (6))){
var inst_39609 = (state_39685[(27)]);
var inst_39608 = cljs.core.deref(cs);
var inst_39609__$1 = cljs.core.keys(inst_39608);
var inst_39610 = cljs.core.count(inst_39609__$1);
var inst_39611 = cljs.core.reset_BANG_(dctr,inst_39610);
var inst_39618 = cljs.core.seq(inst_39609__$1);
var inst_39620 = inst_39618;
var inst_39621 = null;
var inst_39622 = (0);
var inst_39623 = (0);
var state_39685__$1 = (function (){var statearr_39884 = state_39685;
(statearr_39884[(27)] = inst_39609__$1);

(statearr_39884[(9)] = inst_39621);

(statearr_39884[(28)] = inst_39611);

(statearr_39884[(12)] = inst_39623);

(statearr_39884[(19)] = inst_39620);

(statearr_39884[(20)] = inst_39622);

return statearr_39884;
})();
var statearr_39885_42646 = state_39685__$1;
(statearr_39885_42646[(2)] = null);

(statearr_39885_42646[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (28))){
var inst_39639 = (state_39685[(23)]);
var inst_39620 = (state_39685[(19)]);
var inst_39639__$1 = cljs.core.seq(inst_39620);
var state_39685__$1 = (function (){var statearr_39906 = state_39685;
(statearr_39906[(23)] = inst_39639__$1);

return statearr_39906;
})();
if(inst_39639__$1){
var statearr_39911_42651 = state_39685__$1;
(statearr_39911_42651[(1)] = (33));

} else {
var statearr_39912_42652 = state_39685__$1;
(statearr_39912_42652[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (25))){
var inst_39623 = (state_39685[(12)]);
var inst_39622 = (state_39685[(20)]);
var inst_39626 = (inst_39623 < inst_39622);
var inst_39627 = inst_39626;
var state_39685__$1 = state_39685;
if(cljs.core.truth_(inst_39627)){
var statearr_39918_42653 = state_39685__$1;
(statearr_39918_42653[(1)] = (27));

} else {
var statearr_39933_42654 = state_39685__$1;
(statearr_39933_42654[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (34))){
var state_39685__$1 = state_39685;
var statearr_39934_42655 = state_39685__$1;
(statearr_39934_42655[(2)] = null);

(statearr_39934_42655[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (17))){
var state_39685__$1 = state_39685;
var statearr_39936_42656 = state_39685__$1;
(statearr_39936_42656[(2)] = null);

(statearr_39936_42656[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (3))){
var inst_39678 = (state_39685[(2)]);
var state_39685__$1 = state_39685;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39685__$1,inst_39678);
} else {
if((state_val_39686 === (12))){
var inst_39604 = (state_39685[(2)]);
var state_39685__$1 = state_39685;
var statearr_39939_42657 = state_39685__$1;
(statearr_39939_42657[(2)] = inst_39604);

(statearr_39939_42657[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (2))){
var state_39685__$1 = state_39685;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39685__$1,(4),ch);
} else {
if((state_val_39686 === (23))){
var state_39685__$1 = state_39685;
var statearr_39943_42658 = state_39685__$1;
(statearr_39943_42658[(2)] = null);

(statearr_39943_42658[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (35))){
var inst_39662 = (state_39685[(2)]);
var state_39685__$1 = state_39685;
var statearr_39953_42659 = state_39685__$1;
(statearr_39953_42659[(2)] = inst_39662);

(statearr_39953_42659[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (19))){
var inst_39573 = (state_39685[(7)]);
var inst_39578 = cljs.core.chunk_first(inst_39573);
var inst_39579 = cljs.core.chunk_rest(inst_39573);
var inst_39580 = cljs.core.count(inst_39578);
var inst_39547 = inst_39579;
var inst_39548 = inst_39578;
var inst_39549 = inst_39580;
var inst_39550 = (0);
var state_39685__$1 = (function (){var statearr_39965 = state_39685;
(statearr_39965[(13)] = inst_39550);

(statearr_39965[(14)] = inst_39548);

(statearr_39965[(15)] = inst_39547);

(statearr_39965[(17)] = inst_39549);

return statearr_39965;
})();
var statearr_39966_42664 = state_39685__$1;
(statearr_39966_42664[(2)] = null);

(statearr_39966_42664[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (11))){
var inst_39547 = (state_39685[(15)]);
var inst_39573 = (state_39685[(7)]);
var inst_39573__$1 = cljs.core.seq(inst_39547);
var state_39685__$1 = (function (){var statearr_39976 = state_39685;
(statearr_39976[(7)] = inst_39573__$1);

return statearr_39976;
})();
if(inst_39573__$1){
var statearr_39978_42665 = state_39685__$1;
(statearr_39978_42665[(1)] = (16));

} else {
var statearr_39982_42666 = state_39685__$1;
(statearr_39982_42666[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (9))){
var inst_39606 = (state_39685[(2)]);
var state_39685__$1 = state_39685;
var statearr_39985_42667 = state_39685__$1;
(statearr_39985_42667[(2)] = inst_39606);

(statearr_39985_42667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (5))){
var inst_39545 = cljs.core.deref(cs);
var inst_39546 = cljs.core.seq(inst_39545);
var inst_39547 = inst_39546;
var inst_39548 = null;
var inst_39549 = (0);
var inst_39550 = (0);
var state_39685__$1 = (function (){var statearr_39987 = state_39685;
(statearr_39987[(13)] = inst_39550);

(statearr_39987[(14)] = inst_39548);

(statearr_39987[(15)] = inst_39547);

(statearr_39987[(17)] = inst_39549);

return statearr_39987;
})();
var statearr_39988_42669 = state_39685__$1;
(statearr_39988_42669[(2)] = null);

(statearr_39988_42669[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (14))){
var state_39685__$1 = state_39685;
var statearr_40004_42670 = state_39685__$1;
(statearr_40004_42670[(2)] = null);

(statearr_40004_42670[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (45))){
var inst_39670 = (state_39685[(2)]);
var state_39685__$1 = state_39685;
var statearr_40006_42671 = state_39685__$1;
(statearr_40006_42671[(2)] = inst_39670);

(statearr_40006_42671[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (26))){
var inst_39609 = (state_39685[(27)]);
var inst_39666 = (state_39685[(2)]);
var inst_39667 = cljs.core.seq(inst_39609);
var state_39685__$1 = (function (){var statearr_40009 = state_39685;
(statearr_40009[(29)] = inst_39666);

return statearr_40009;
})();
if(inst_39667){
var statearr_40011_42672 = state_39685__$1;
(statearr_40011_42672[(1)] = (42));

} else {
var statearr_40012_42674 = state_39685__$1;
(statearr_40012_42674[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (16))){
var inst_39573 = (state_39685[(7)]);
var inst_39575 = cljs.core.chunked_seq_QMARK_(inst_39573);
var state_39685__$1 = state_39685;
if(inst_39575){
var statearr_40014_42680 = state_39685__$1;
(statearr_40014_42680[(1)] = (19));

} else {
var statearr_40016_42681 = state_39685__$1;
(statearr_40016_42681[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (38))){
var inst_39659 = (state_39685[(2)]);
var state_39685__$1 = state_39685;
var statearr_40017_42682 = state_39685__$1;
(statearr_40017_42682[(2)] = inst_39659);

(statearr_40017_42682[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (30))){
var state_39685__$1 = state_39685;
var statearr_40018_42683 = state_39685__$1;
(statearr_40018_42683[(2)] = null);

(statearr_40018_42683[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (10))){
var inst_39550 = (state_39685[(13)]);
var inst_39548 = (state_39685[(14)]);
var inst_39562 = cljs.core._nth(inst_39548,inst_39550);
var inst_39563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39562,(0),null);
var inst_39564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39562,(1),null);
var state_39685__$1 = (function (){var statearr_40019 = state_39685;
(statearr_40019[(24)] = inst_39563);

return statearr_40019;
})();
if(cljs.core.truth_(inst_39564)){
var statearr_40043_42695 = state_39685__$1;
(statearr_40043_42695[(1)] = (13));

} else {
var statearr_40045_42700 = state_39685__$1;
(statearr_40045_42700[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (18))){
var inst_39602 = (state_39685[(2)]);
var state_39685__$1 = state_39685;
var statearr_40047_42701 = state_39685__$1;
(statearr_40047_42701[(2)] = inst_39602);

(statearr_40047_42701[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (42))){
var state_39685__$1 = state_39685;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39685__$1,(45),dchan);
} else {
if((state_val_39686 === (37))){
var inst_39532 = (state_39685[(10)]);
var inst_39639 = (state_39685[(23)]);
var inst_39649 = (state_39685[(22)]);
var inst_39649__$1 = cljs.core.first(inst_39639);
var inst_39650 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_39649__$1,inst_39532,done);
var state_39685__$1 = (function (){var statearr_40054 = state_39685;
(statearr_40054[(22)] = inst_39649__$1);

return statearr_40054;
})();
if(cljs.core.truth_(inst_39650)){
var statearr_40055_42702 = state_39685__$1;
(statearr_40055_42702[(1)] = (39));

} else {
var statearr_40057_42704 = state_39685__$1;
(statearr_40057_42704[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (8))){
var inst_39550 = (state_39685[(13)]);
var inst_39549 = (state_39685[(17)]);
var inst_39552 = (inst_39550 < inst_39549);
var inst_39554 = inst_39552;
var state_39685__$1 = state_39685;
if(cljs.core.truth_(inst_39554)){
var statearr_40060_42717 = state_39685__$1;
(statearr_40060_42717[(1)] = (10));

} else {
var statearr_40061_42718 = state_39685__$1;
(statearr_40061_42718[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__37343__auto__ = null;
var cljs$core$async$mult_$_state_machine__37343__auto____0 = (function (){
var statearr_40062 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40062[(0)] = cljs$core$async$mult_$_state_machine__37343__auto__);

(statearr_40062[(1)] = (1));

return statearr_40062;
});
var cljs$core$async$mult_$_state_machine__37343__auto____1 = (function (state_39685){
while(true){
var ret_value__37344__auto__ = (function (){try{while(true){
var result__37345__auto__ = switch__37342__auto__(state_39685);
if(cljs.core.keyword_identical_QMARK_(result__37345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37345__auto__;
}
break;
}
}catch (e40079){var ex__37346__auto__ = e40079;
var statearr_40080_42725 = state_39685;
(statearr_40080_42725[(2)] = ex__37346__auto__);


if(cljs.core.seq((state_39685[(4)]))){
var statearr_40084_42726 = state_39685;
(statearr_40084_42726[(1)] = cljs.core.first((state_39685[(4)])));

} else {
throw ex__37346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42729 = state_39685;
state_39685 = G__42729;
continue;
} else {
return ret_value__37344__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__37343__auto__ = function(state_39685){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__37343__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__37343__auto____1.call(this,state_39685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__37343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__37343__auto____0;
cljs$core$async$mult_$_state_machine__37343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__37343__auto____1;
return cljs$core$async$mult_$_state_machine__37343__auto__;
})()
})();
var state__37911__auto__ = (function (){var statearr_40086 = f__37910__auto__();
(statearr_40086[(6)] = c__37909__auto___42553);

return statearr_40086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37911__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__40090 = arguments.length;
switch (G__40090) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_42740 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_42740(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_42750 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_42750(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_42753 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_42753(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_42754 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_42754(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_42761 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_42761(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42765 = arguments.length;
var i__4737__auto___42766 = (0);
while(true){
if((i__4737__auto___42766 < len__4736__auto___42765)){
args__4742__auto__.push((arguments[i__4737__auto___42766]));

var G__42767 = (i__4737__auto___42766 + (1));
i__4737__auto___42766 = G__42767;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__40222){
var map__40223 = p__40222;
var map__40223__$1 = (((((!((map__40223 == null))))?(((((map__40223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40223):map__40223);
var opts = map__40223__$1;
var statearr_40231_42769 = state;
(statearr_40231_42769[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_40235_42770 = state;
(statearr_40235_42770[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_40236_42775 = state;
(statearr_40236_42775[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq40205){
var G__40206 = cljs.core.first(seq40205);
var seq40205__$1 = cljs.core.next(seq40205);
var G__40207 = cljs.core.first(seq40205__$1);
var seq40205__$2 = cljs.core.next(seq40205__$1);
var G__40208 = cljs.core.first(seq40205__$2);
var seq40205__$3 = cljs.core.next(seq40205__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40206,G__40207,G__40208,seq40205__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40252 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40252 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta40253){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta40253 = meta40253;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40254,meta40253__$1){
var self__ = this;
var _40254__$1 = this;
return (new cljs.core.async.t_cljs$core$async40252(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta40253__$1));
}));

(cljs.core.async.t_cljs$core$async40252.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40254){
var self__ = this;
var _40254__$1 = this;
return self__.meta40253;
}));

(cljs.core.async.t_cljs$core$async40252.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40252.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async40252.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40252.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async40252.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async40252.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async40252.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async40252.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async40252.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta40253","meta40253",361811818,null)], null);
}));

(cljs.core.async.t_cljs$core$async40252.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40252.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40252");

(cljs.core.async.t_cljs$core$async40252.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async40252");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40252.
 */
cljs.core.async.__GT_t_cljs$core$async40252 = (function cljs$core$async$mix_$___GT_t_cljs$core$async40252(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta40253){
return (new cljs.core.async.t_cljs$core$async40252(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta40253));
});

}

return (new cljs.core.async.t_cljs$core$async40252(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37909__auto___42803 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37910__auto__ = (function (){var switch__37342__auto__ = (function (state_40437){
var state_val_40438 = (state_40437[(1)]);
if((state_val_40438 === (7))){
var inst_40310 = (state_40437[(2)]);
var state_40437__$1 = state_40437;
var statearr_40443_42805 = state_40437__$1;
(statearr_40443_42805[(2)] = inst_40310);

(statearr_40443_42805[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40438 === (20))){
var inst_40324 = (state_40437[(7)]);
var state_40437__$1 = state_40437;
var statearr_40444_42807 = state_40437__$1;
(statearr_40444_42807[(2)] = inst_40324);

(statearr_40444_42807[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40438 === (27))){
var state_40437__$1 = state_40437;
var statearr_40451_42808 = state_40437__$1;
(statearr_40451_42808[(2)] = null);

(statearr_40451_42808[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40438 === (1))){
var inst_40295 = (state_40437[(8)]);
var inst_40295__$1 = calc_state();
var inst_40298 = (inst_40295__$1 == null);
var inst_40299 = cljs.core.not(inst_40298);
var state_40437__$1 = (function (){var statearr_40468 = state_40437;
(statearr_40468[(8)] = inst_40295__$1);

return statearr_40468;
})();
if(inst_40299){
var statearr_40469_42809 = state_40437__$1;
(statearr_40469_42809[(1)] = (2));

} else {
var statearr_40470_42810 = state_40437__$1;
(statearr_40470_42810[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40438 === (24))){
var inst_40360 = (state_40437[(9)]);
var inst_40348 = (state_40437[(10)]);
var inst_40410 = (state_40437[(11)]);
var inst_40410__$1 = (inst_40348.cljs$core$IFn$_invoke$arity$1 ? inst_40348.cljs$core$IFn$_invoke$arity$1(inst_40360) : inst_40348.call(null,inst_40360));
var state_40437__$1 = (function (){var statearr_40471 = state_40437;
(statearr_40471[(11)] = inst_40410__$1);

return statearr_40471;
})();
if(cljs.core.truth_(inst_40410__$1)){
var statearr_40472_42811 = state_40437__$1;
(statearr_40472_42811[(1)] = (29));

} else {
var statearr_40473_42812 = state_40437__$1;
(statearr_40473_42812[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40438 === (4))){
var inst_40313 = (state_40437[(2)]);
var state_40437__$1 = state_40437;
if(cljs.core.truth_(inst_40313)){
var statearr_40474_42813 = state_40437__$1;
(statearr_40474_42813[(1)] = (8));

} else {
var statearr_40475_42814 = state_40437__$1;
(statearr_40475_42814[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40438 === (15))){
var inst_40342 = (state_40437[(2)]);
var state_40437__$1 = state_40437;
if(cljs.core.truth_(inst_40342)){
var statearr_40476_42815 = state_40437__$1;
(statearr_40476_42815[(1)] = (19));

} else {
var statearr_40477_42816 = state_40437__$1;
(statearr_40477_42816[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40438 === (21))){
var inst_40347 = (state_40437[(12)]);
var inst_40347__$1 = (state_40437[(2)]);
var inst_40348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40347__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40349 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40347__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40347__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_40437__$1 = (function (){var statearr_40478 = state_40437;
(statearr_40478[(13)] = inst_40349);

(statearr_40478[(10)] = inst_40348);

(statearr_40478[(12)] = inst_40347__$1);

return statearr_40478;
})();
return cljs.core.async.ioc_alts_BANG_(state_40437__$1,(22),inst_40350);
} else {
if((state_val_40438 === (31))){
var inst_40419 = (state_40437[(2)]);
var state_40437__$1 = state_40437;
if(cljs.core.truth_(inst_40419)){
var statearr_40483_42817 = state_40437__$1;
(statearr_40483_42817[(1)] = (32));

} else {
var statearr_40489_42819 = state_40437__$1;
(statearr_40489_42819[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40438 === (32))){
var inst_40358 = (state_40437[(14)]);
var state_40437__$1 = state_40437;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40437__$1,(35),out,inst_40358);
} else {
if((state_val_40438 === (33))){
var inst_40347 = (state_40437[(12)]);
var inst_40324 = inst_40347;
var state_40437__$1 = (function (){var statearr_40505 = state_40437;
(statearr_40505[(7)] = inst_40324);

return statearr_40505;
})();
var statearr_40506_42823 = state_40437__$1;
(statearr_40506_42823[(2)] = null);

(statearr_40506_42823[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40438 === (13))){
var inst_40324 = (state_40437[(7)]);
var inst_40331 = inst_40324.cljs$lang$protocol_mask$partition0$;
var inst_40332 = (inst_40331 & (64));
var inst_40333 = inst_40324.cljs$core$ISeq$;
var inst_40334 = (cljs.core.PROTOCOL_SENTINEL === inst_40333);
var inst_40335 = ((inst_40332) || (inst_40334));
var state_40437__$1 = state_40437;
if(cljs.core.truth_(inst_40335)){
var statearr_40509_42824 = state_40437__$1;
(statearr_40509_42824[(1)] = (16));

} else {
var statearr_40510_42825 = state_40437__$1;
(statearr_40510_42825[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40438 === (22))){
var inst_40358 = (state_40437[(14)]);
var inst_40360 = (state_40437[(9)]);
var inst_40357 = (state_40437[(2)]);
var inst_40358__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40357,(0),null);
var inst_40360__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40357,(1),null);
var inst_40391 = (inst_40358__$1 == null);
var inst_40393 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_40360__$1,change);
var inst_40394 = ((inst_40391) || (inst_40393));
var state_40437__$1 = (function (){var statearr_40514 = state_40437;
(statearr_40514[(14)] = inst_40358__$1);

(statearr_40514[(9)] = inst_40360__$1);

return statearr_40514;
})();
if(cljs.core.truth_(inst_40394)){
var statearr_40515_42826 = state_40437__$1;
(statearr_40515_42826[(1)] = (23));

} else {
var statearr_40516_42827 = state_40437__$1;
(statearr_40516_42827[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40438 === (36))){
var inst_40347 = (state_40437[(12)]);
var inst_40324 = inst_40347;
var state_40437__$1 = (function (){var statearr_40517 = state_40437;
(statearr_40517[(7)] = inst_40324);

return statearr_40517;
})();
var statearr_40518_42832 = state_40437__$1;
(statearr_40518_42832[(2)] = null);

(statearr_40518_42832[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40438 === (29))){
var inst_40410 = (state_40437[(11)]);
var state_40437__$1 = state_40437;
var statearr_40523_42833 = state_40437__$1;
(statearr_40523_42833[(2)] = inst_40410);

(statearr_40523_42833[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40438 === (6))){
var state_40437__$1 = state_40437;
var statearr_40529_42835 = state_40437__$1;
(statearr_40529_42835[(2)] = false);

(statearr_40529_42835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40438 === (28))){
var inst_40403 = (state_40437[(2)]);
var inst_40407 = calc_state();
var inst_40324 = inst_40407;
var state_40437__$1 = (function (){var statearr_40534 = state_40437;
(statearr_40534[(7)] = inst_40324);

(statearr_40534[(15)] = inst_40403);

return statearr_40534;
})();
var statearr_40535_42836 = state_40437__$1;
(statearr_40535_42836[(2)] = null);

(statearr_40535_42836[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40438 === (25))){
var inst_40433 = (state_40437[(2)]);
var state_40437__$1 = state_40437;
var statearr_40536_42837 = state_40437__$1;
(statearr_40536_42837[(2)] = inst_40433);

(statearr_40536_42837[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40438 === (34))){
var inst_40431 = (state_40437[(2)]);
var state_40437__$1 = state_40437;
var statearr_40537_42839 = state_40437__$1;
(statearr_40537_42839[(2)] = inst_40431);

(statearr_40537_42839[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40438 === (17))){
var state_40437__$1 = state_40437;
var statearr_40539_42840 = state_40437__$1;
(statearr_40539_42840[(2)] = false);

(statearr_40539_42840[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40438 === (3))){
var state_40437__$1 = state_40437;
var statearr_40543_42841 = state_40437__$1;
(statearr_40543_42841[(2)] = false);

(statearr_40543_42841[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40438 === (12))){
var inst_40435 = (state_40437[(2)]);
var state_40437__$1 = state_40437;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40437__$1,inst_40435);
} else {
if((state_val_40438 === (2))){
var inst_40295 = (state_40437[(8)]);
var inst_40302 = inst_40295.cljs$lang$protocol_mask$partition0$;
var inst_40303 = (inst_40302 & (64));
var inst_40304 = inst_40295.cljs$core$ISeq$;
var inst_40305 = (cljs.core.PROTOCOL_SENTINEL === inst_40304);
var inst_40306 = ((inst_40303) || (inst_40305));
var state_40437__$1 = state_40437;
if(cljs.core.truth_(inst_40306)){
var statearr_40550_42846 = state_40437__$1;
(statearr_40550_42846[(1)] = (5));

} else {
var statearr_40551_42847 = state_40437__$1;
(statearr_40551_42847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40438 === (23))){
var inst_40358 = (state_40437[(14)]);
var inst_40398 = (inst_40358 == null);
var state_40437__$1 = state_40437;
if(cljs.core.truth_(inst_40398)){
var statearr_40552_42848 = state_40437__$1;
(statearr_40552_42848[(1)] = (26));

} else {
var statearr_40553_42849 = state_40437__$1;
(statearr_40553_42849[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40438 === (35))){
var inst_40422 = (state_40437[(2)]);
var state_40437__$1 = state_40437;
if(cljs.core.truth_(inst_40422)){
var statearr_40554_42850 = state_40437__$1;
(statearr_40554_42850[(1)] = (36));

} else {
var statearr_40555_42851 = state_40437__$1;
(statearr_40555_42851[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40438 === (19))){
var inst_40324 = (state_40437[(7)]);
var inst_40344 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_40324);
var state_40437__$1 = state_40437;
var statearr_40556_42852 = state_40437__$1;
(statearr_40556_42852[(2)] = inst_40344);

(statearr_40556_42852[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40438 === (11))){
var inst_40324 = (state_40437[(7)]);
var inst_40328 = (inst_40324 == null);
var inst_40329 = cljs.core.not(inst_40328);
var state_40437__$1 = state_40437;
if(inst_40329){
var statearr_40557_42856 = state_40437__$1;
(statearr_40557_42856[(1)] = (13));

} else {
var statearr_40558_42857 = state_40437__$1;
(statearr_40558_42857[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40438 === (9))){
var inst_40295 = (state_40437[(8)]);
var state_40437__$1 = state_40437;
var statearr_40560_42858 = state_40437__$1;
(statearr_40560_42858[(2)] = inst_40295);

(statearr_40560_42858[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40438 === (5))){
var state_40437__$1 = state_40437;
var statearr_40561_42859 = state_40437__$1;
(statearr_40561_42859[(2)] = true);

(statearr_40561_42859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40438 === (14))){
var state_40437__$1 = state_40437;
var statearr_40564_42861 = state_40437__$1;
(statearr_40564_42861[(2)] = false);

(statearr_40564_42861[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40438 === (26))){
var inst_40360 = (state_40437[(9)]);
var inst_40400 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_40360);
var state_40437__$1 = state_40437;
var statearr_40565_42862 = state_40437__$1;
(statearr_40565_42862[(2)] = inst_40400);

(statearr_40565_42862[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40438 === (16))){
var state_40437__$1 = state_40437;
var statearr_40569_42863 = state_40437__$1;
(statearr_40569_42863[(2)] = true);

(statearr_40569_42863[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40438 === (38))){
var inst_40427 = (state_40437[(2)]);
var state_40437__$1 = state_40437;
var statearr_40574_42864 = state_40437__$1;
(statearr_40574_42864[(2)] = inst_40427);

(statearr_40574_42864[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40438 === (30))){
var inst_40360 = (state_40437[(9)]);
var inst_40349 = (state_40437[(13)]);
var inst_40348 = (state_40437[(10)]);
var inst_40414 = cljs.core.empty_QMARK_(inst_40348);
var inst_40415 = (inst_40349.cljs$core$IFn$_invoke$arity$1 ? inst_40349.cljs$core$IFn$_invoke$arity$1(inst_40360) : inst_40349.call(null,inst_40360));
var inst_40416 = cljs.core.not(inst_40415);
var inst_40417 = ((inst_40414) && (inst_40416));
var state_40437__$1 = state_40437;
var statearr_40578_42865 = state_40437__$1;
(statearr_40578_42865[(2)] = inst_40417);

(statearr_40578_42865[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40438 === (10))){
var inst_40295 = (state_40437[(8)]);
var inst_40320 = (state_40437[(2)]);
var inst_40321 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40320,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40322 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40320,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40323 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40320,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_40324 = inst_40295;
var state_40437__$1 = (function (){var statearr_40582 = state_40437;
(statearr_40582[(16)] = inst_40323);

(statearr_40582[(17)] = inst_40321);

(statearr_40582[(7)] = inst_40324);

(statearr_40582[(18)] = inst_40322);

return statearr_40582;
})();
var statearr_40583_42867 = state_40437__$1;
(statearr_40583_42867[(2)] = null);

(statearr_40583_42867[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40438 === (18))){
var inst_40339 = (state_40437[(2)]);
var state_40437__$1 = state_40437;
var statearr_40584_42868 = state_40437__$1;
(statearr_40584_42868[(2)] = inst_40339);

(statearr_40584_42868[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40438 === (37))){
var state_40437__$1 = state_40437;
var statearr_40585_42870 = state_40437__$1;
(statearr_40585_42870[(2)] = null);

(statearr_40585_42870[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40438 === (8))){
var inst_40295 = (state_40437[(8)]);
var inst_40317 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_40295);
var state_40437__$1 = state_40437;
var statearr_40586_42874 = state_40437__$1;
(statearr_40586_42874[(2)] = inst_40317);

(statearr_40586_42874[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__37343__auto__ = null;
var cljs$core$async$mix_$_state_machine__37343__auto____0 = (function (){
var statearr_40592 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40592[(0)] = cljs$core$async$mix_$_state_machine__37343__auto__);

(statearr_40592[(1)] = (1));

return statearr_40592;
});
var cljs$core$async$mix_$_state_machine__37343__auto____1 = (function (state_40437){
while(true){
var ret_value__37344__auto__ = (function (){try{while(true){
var result__37345__auto__ = switch__37342__auto__(state_40437);
if(cljs.core.keyword_identical_QMARK_(result__37345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37345__auto__;
}
break;
}
}catch (e40593){var ex__37346__auto__ = e40593;
var statearr_40594_42879 = state_40437;
(statearr_40594_42879[(2)] = ex__37346__auto__);


if(cljs.core.seq((state_40437[(4)]))){
var statearr_40595_42881 = state_40437;
(statearr_40595_42881[(1)] = cljs.core.first((state_40437[(4)])));

} else {
throw ex__37346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42882 = state_40437;
state_40437 = G__42882;
continue;
} else {
return ret_value__37344__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__37343__auto__ = function(state_40437){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__37343__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__37343__auto____1.call(this,state_40437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__37343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__37343__auto____0;
cljs$core$async$mix_$_state_machine__37343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__37343__auto____1;
return cljs$core$async$mix_$_state_machine__37343__auto__;
})()
})();
var state__37911__auto__ = (function (){var statearr_40619 = f__37910__auto__();
(statearr_40619[(6)] = c__37909__auto___42803);

return statearr_40619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37911__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_42885 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_42885(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_42892 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_42892(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_42896 = (function() {
var G__42897 = null;
var G__42897__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__42897__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__42897 = function(p,v){
switch(arguments.length){
case 1:
return G__42897__1.call(this,p);
case 2:
return G__42897__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42897.cljs$core$IFn$_invoke$arity$1 = G__42897__1;
G__42897.cljs$core$IFn$_invoke$arity$2 = G__42897__2;
return G__42897;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__40714 = arguments.length;
switch (G__40714) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_42896(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_42896(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__40744 = arguments.length;
switch (G__40744) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__40738_SHARP_){
if(cljs.core.truth_((p1__40738_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__40738_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__40738_SHARP_.call(null,topic)))){
return p1__40738_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40738_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40777 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40777 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta40778){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta40778 = meta40778;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40779,meta40778__$1){
var self__ = this;
var _40779__$1 = this;
return (new cljs.core.async.t_cljs$core$async40777(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta40778__$1));
}));

(cljs.core.async.t_cljs$core$async40777.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40779){
var self__ = this;
var _40779__$1 = this;
return self__.meta40778;
}));

(cljs.core.async.t_cljs$core$async40777.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40777.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async40777.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40777.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async40777.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async40777.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async40777.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async40777.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta40778","meta40778",-429649907,null)], null);
}));

(cljs.core.async.t_cljs$core$async40777.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40777.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40777");

(cljs.core.async.t_cljs$core$async40777.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async40777");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40777.
 */
cljs.core.async.__GT_t_cljs$core$async40777 = (function cljs$core$async$__GT_t_cljs$core$async40777(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40778){
return (new cljs.core.async.t_cljs$core$async40777(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40778));
});

}

return (new cljs.core.async.t_cljs$core$async40777(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37909__auto___42936 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37910__auto__ = (function (){var switch__37342__auto__ = (function (state_40874){
var state_val_40875 = (state_40874[(1)]);
if((state_val_40875 === (7))){
var inst_40869 = (state_40874[(2)]);
var state_40874__$1 = state_40874;
var statearr_40877_42941 = state_40874__$1;
(statearr_40877_42941[(2)] = inst_40869);

(statearr_40877_42941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40875 === (20))){
var state_40874__$1 = state_40874;
var statearr_40878_42945 = state_40874__$1;
(statearr_40878_42945[(2)] = null);

(statearr_40878_42945[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40875 === (1))){
var state_40874__$1 = state_40874;
var statearr_40879_42950 = state_40874__$1;
(statearr_40879_42950[(2)] = null);

(statearr_40879_42950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40875 === (24))){
var inst_40850 = (state_40874[(7)]);
var inst_40861 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_40850);
var state_40874__$1 = state_40874;
var statearr_40881_42959 = state_40874__$1;
(statearr_40881_42959[(2)] = inst_40861);

(statearr_40881_42959[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40875 === (4))){
var inst_40791 = (state_40874[(8)]);
var inst_40791__$1 = (state_40874[(2)]);
var inst_40792 = (inst_40791__$1 == null);
var state_40874__$1 = (function (){var statearr_40887 = state_40874;
(statearr_40887[(8)] = inst_40791__$1);

return statearr_40887;
})();
if(cljs.core.truth_(inst_40792)){
var statearr_40888_42967 = state_40874__$1;
(statearr_40888_42967[(1)] = (5));

} else {
var statearr_40889_42968 = state_40874__$1;
(statearr_40889_42968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40875 === (15))){
var inst_40844 = (state_40874[(2)]);
var state_40874__$1 = state_40874;
var statearr_40891_42973 = state_40874__$1;
(statearr_40891_42973[(2)] = inst_40844);

(statearr_40891_42973[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40875 === (21))){
var inst_40866 = (state_40874[(2)]);
var state_40874__$1 = (function (){var statearr_40892 = state_40874;
(statearr_40892[(9)] = inst_40866);

return statearr_40892;
})();
var statearr_40893_42979 = state_40874__$1;
(statearr_40893_42979[(2)] = null);

(statearr_40893_42979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40875 === (13))){
var inst_40823 = (state_40874[(10)]);
var inst_40826 = cljs.core.chunked_seq_QMARK_(inst_40823);
var state_40874__$1 = state_40874;
if(inst_40826){
var statearr_40899_42987 = state_40874__$1;
(statearr_40899_42987[(1)] = (16));

} else {
var statearr_40900_42989 = state_40874__$1;
(statearr_40900_42989[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40875 === (22))){
var inst_40858 = (state_40874[(2)]);
var state_40874__$1 = state_40874;
if(cljs.core.truth_(inst_40858)){
var statearr_40902_42994 = state_40874__$1;
(statearr_40902_42994[(1)] = (23));

} else {
var statearr_40903_42998 = state_40874__$1;
(statearr_40903_42998[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40875 === (6))){
var inst_40852 = (state_40874[(11)]);
var inst_40791 = (state_40874[(8)]);
var inst_40850 = (state_40874[(7)]);
var inst_40850__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_40791) : topic_fn.call(null,inst_40791));
var inst_40851 = cljs.core.deref(mults);
var inst_40852__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40851,inst_40850__$1);
var state_40874__$1 = (function (){var statearr_40908 = state_40874;
(statearr_40908[(11)] = inst_40852__$1);

(statearr_40908[(7)] = inst_40850__$1);

return statearr_40908;
})();
if(cljs.core.truth_(inst_40852__$1)){
var statearr_40913_43002 = state_40874__$1;
(statearr_40913_43002[(1)] = (19));

} else {
var statearr_40918_43003 = state_40874__$1;
(statearr_40918_43003[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40875 === (25))){
var inst_40863 = (state_40874[(2)]);
var state_40874__$1 = state_40874;
var statearr_40921_43004 = state_40874__$1;
(statearr_40921_43004[(2)] = inst_40863);

(statearr_40921_43004[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40875 === (17))){
var inst_40823 = (state_40874[(10)]);
var inst_40834 = cljs.core.first(inst_40823);
var inst_40836 = cljs.core.async.muxch_STAR_(inst_40834);
var inst_40837 = cljs.core.async.close_BANG_(inst_40836);
var inst_40838 = cljs.core.next(inst_40823);
var inst_40805 = inst_40838;
var inst_40806 = null;
var inst_40807 = (0);
var inst_40808 = (0);
var state_40874__$1 = (function (){var statearr_40930 = state_40874;
(statearr_40930[(12)] = inst_40807);

(statearr_40930[(13)] = inst_40837);

(statearr_40930[(14)] = inst_40805);

(statearr_40930[(15)] = inst_40808);

(statearr_40930[(16)] = inst_40806);

return statearr_40930;
})();
var statearr_40937_43009 = state_40874__$1;
(statearr_40937_43009[(2)] = null);

(statearr_40937_43009[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40875 === (3))){
var inst_40871 = (state_40874[(2)]);
var state_40874__$1 = state_40874;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40874__$1,inst_40871);
} else {
if((state_val_40875 === (12))){
var inst_40846 = (state_40874[(2)]);
var state_40874__$1 = state_40874;
var statearr_40949_43010 = state_40874__$1;
(statearr_40949_43010[(2)] = inst_40846);

(statearr_40949_43010[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40875 === (2))){
var state_40874__$1 = state_40874;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40874__$1,(4),ch);
} else {
if((state_val_40875 === (23))){
var state_40874__$1 = state_40874;
var statearr_40952_43013 = state_40874__$1;
(statearr_40952_43013[(2)] = null);

(statearr_40952_43013[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40875 === (19))){
var inst_40852 = (state_40874[(11)]);
var inst_40791 = (state_40874[(8)]);
var inst_40856 = cljs.core.async.muxch_STAR_(inst_40852);
var state_40874__$1 = state_40874;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40874__$1,(22),inst_40856,inst_40791);
} else {
if((state_val_40875 === (11))){
var inst_40823 = (state_40874[(10)]);
var inst_40805 = (state_40874[(14)]);
var inst_40823__$1 = cljs.core.seq(inst_40805);
var state_40874__$1 = (function (){var statearr_40964 = state_40874;
(statearr_40964[(10)] = inst_40823__$1);

return statearr_40964;
})();
if(inst_40823__$1){
var statearr_40965_43014 = state_40874__$1;
(statearr_40965_43014[(1)] = (13));

} else {
var statearr_40968_43015 = state_40874__$1;
(statearr_40968_43015[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40875 === (9))){
var inst_40848 = (state_40874[(2)]);
var state_40874__$1 = state_40874;
var statearr_40972_43016 = state_40874__$1;
(statearr_40972_43016[(2)] = inst_40848);

(statearr_40972_43016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40875 === (5))){
var inst_40802 = cljs.core.deref(mults);
var inst_40803 = cljs.core.vals(inst_40802);
var inst_40804 = cljs.core.seq(inst_40803);
var inst_40805 = inst_40804;
var inst_40806 = null;
var inst_40807 = (0);
var inst_40808 = (0);
var state_40874__$1 = (function (){var statearr_40974 = state_40874;
(statearr_40974[(12)] = inst_40807);

(statearr_40974[(14)] = inst_40805);

(statearr_40974[(15)] = inst_40808);

(statearr_40974[(16)] = inst_40806);

return statearr_40974;
})();
var statearr_40977_43017 = state_40874__$1;
(statearr_40977_43017[(2)] = null);

(statearr_40977_43017[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40875 === (14))){
var state_40874__$1 = state_40874;
var statearr_40983_43019 = state_40874__$1;
(statearr_40983_43019[(2)] = null);

(statearr_40983_43019[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40875 === (16))){
var inst_40823 = (state_40874[(10)]);
var inst_40828 = cljs.core.chunk_first(inst_40823);
var inst_40829 = cljs.core.chunk_rest(inst_40823);
var inst_40830 = cljs.core.count(inst_40828);
var inst_40805 = inst_40829;
var inst_40806 = inst_40828;
var inst_40807 = inst_40830;
var inst_40808 = (0);
var state_40874__$1 = (function (){var statearr_40989 = state_40874;
(statearr_40989[(12)] = inst_40807);

(statearr_40989[(14)] = inst_40805);

(statearr_40989[(15)] = inst_40808);

(statearr_40989[(16)] = inst_40806);

return statearr_40989;
})();
var statearr_40992_43021 = state_40874__$1;
(statearr_40992_43021[(2)] = null);

(statearr_40992_43021[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40875 === (10))){
var inst_40807 = (state_40874[(12)]);
var inst_40805 = (state_40874[(14)]);
var inst_40808 = (state_40874[(15)]);
var inst_40806 = (state_40874[(16)]);
var inst_40817 = cljs.core._nth(inst_40806,inst_40808);
var inst_40818 = cljs.core.async.muxch_STAR_(inst_40817);
var inst_40819 = cljs.core.async.close_BANG_(inst_40818);
var inst_40820 = (inst_40808 + (1));
var tmp40980 = inst_40807;
var tmp40981 = inst_40805;
var tmp40982 = inst_40806;
var inst_40805__$1 = tmp40981;
var inst_40806__$1 = tmp40982;
var inst_40807__$1 = tmp40980;
var inst_40808__$1 = inst_40820;
var state_40874__$1 = (function (){var statearr_40996 = state_40874;
(statearr_40996[(12)] = inst_40807__$1);

(statearr_40996[(17)] = inst_40819);

(statearr_40996[(14)] = inst_40805__$1);

(statearr_40996[(15)] = inst_40808__$1);

(statearr_40996[(16)] = inst_40806__$1);

return statearr_40996;
})();
var statearr_40997_43029 = state_40874__$1;
(statearr_40997_43029[(2)] = null);

(statearr_40997_43029[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40875 === (18))){
var inst_40841 = (state_40874[(2)]);
var state_40874__$1 = state_40874;
var statearr_41000_43030 = state_40874__$1;
(statearr_41000_43030[(2)] = inst_40841);

(statearr_41000_43030[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40875 === (8))){
var inst_40807 = (state_40874[(12)]);
var inst_40808 = (state_40874[(15)]);
var inst_40810 = (inst_40808 < inst_40807);
var inst_40811 = inst_40810;
var state_40874__$1 = state_40874;
if(cljs.core.truth_(inst_40811)){
var statearr_41003_43032 = state_40874__$1;
(statearr_41003_43032[(1)] = (10));

} else {
var statearr_41004_43033 = state_40874__$1;
(statearr_41004_43033[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37343__auto__ = null;
var cljs$core$async$state_machine__37343__auto____0 = (function (){
var statearr_41007 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41007[(0)] = cljs$core$async$state_machine__37343__auto__);

(statearr_41007[(1)] = (1));

return statearr_41007;
});
var cljs$core$async$state_machine__37343__auto____1 = (function (state_40874){
while(true){
var ret_value__37344__auto__ = (function (){try{while(true){
var result__37345__auto__ = switch__37342__auto__(state_40874);
if(cljs.core.keyword_identical_QMARK_(result__37345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37345__auto__;
}
break;
}
}catch (e41008){var ex__37346__auto__ = e41008;
var statearr_41009_43037 = state_40874;
(statearr_41009_43037[(2)] = ex__37346__auto__);


if(cljs.core.seq((state_40874[(4)]))){
var statearr_41011_43041 = state_40874;
(statearr_41011_43041[(1)] = cljs.core.first((state_40874[(4)])));

} else {
throw ex__37346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43042 = state_40874;
state_40874 = G__43042;
continue;
} else {
return ret_value__37344__auto__;
}
break;
}
});
cljs$core$async$state_machine__37343__auto__ = function(state_40874){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37343__auto____1.call(this,state_40874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37343__auto____0;
cljs$core$async$state_machine__37343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37343__auto____1;
return cljs$core$async$state_machine__37343__auto__;
})()
})();
var state__37911__auto__ = (function (){var statearr_41012 = f__37910__auto__();
(statearr_41012[(6)] = c__37909__auto___42936);

return statearr_41012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37911__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__41016 = arguments.length;
switch (G__41016) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__41024 = arguments.length;
switch (G__41024) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__41032 = arguments.length;
switch (G__41032) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__37909__auto___43090 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37910__auto__ = (function (){var switch__37342__auto__ = (function (state_41099){
var state_val_41100 = (state_41099[(1)]);
if((state_val_41100 === (7))){
var state_41099__$1 = state_41099;
var statearr_41101_43093 = state_41099__$1;
(statearr_41101_43093[(2)] = null);

(statearr_41101_43093[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (1))){
var state_41099__$1 = state_41099;
var statearr_41104_43094 = state_41099__$1;
(statearr_41104_43094[(2)] = null);

(statearr_41104_43094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (4))){
var inst_41044 = (state_41099[(7)]);
var inst_41045 = (state_41099[(8)]);
var inst_41047 = (inst_41045 < inst_41044);
var state_41099__$1 = state_41099;
if(cljs.core.truth_(inst_41047)){
var statearr_41107_43096 = state_41099__$1;
(statearr_41107_43096[(1)] = (6));

} else {
var statearr_41108_43097 = state_41099__$1;
(statearr_41108_43097[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (15))){
var inst_41085 = (state_41099[(9)]);
var inst_41090 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_41085);
var state_41099__$1 = state_41099;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41099__$1,(17),out,inst_41090);
} else {
if((state_val_41100 === (13))){
var inst_41085 = (state_41099[(9)]);
var inst_41085__$1 = (state_41099[(2)]);
var inst_41086 = cljs.core.some(cljs.core.nil_QMARK_,inst_41085__$1);
var state_41099__$1 = (function (){var statearr_41111 = state_41099;
(statearr_41111[(9)] = inst_41085__$1);

return statearr_41111;
})();
if(cljs.core.truth_(inst_41086)){
var statearr_41112_43099 = state_41099__$1;
(statearr_41112_43099[(1)] = (14));

} else {
var statearr_41113_43100 = state_41099__$1;
(statearr_41113_43100[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (6))){
var state_41099__$1 = state_41099;
var statearr_41114_43101 = state_41099__$1;
(statearr_41114_43101[(2)] = null);

(statearr_41114_43101[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (17))){
var inst_41092 = (state_41099[(2)]);
var state_41099__$1 = (function (){var statearr_41116 = state_41099;
(statearr_41116[(10)] = inst_41092);

return statearr_41116;
})();
var statearr_41119_43103 = state_41099__$1;
(statearr_41119_43103[(2)] = null);

(statearr_41119_43103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (3))){
var inst_41097 = (state_41099[(2)]);
var state_41099__$1 = state_41099;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41099__$1,inst_41097);
} else {
if((state_val_41100 === (12))){
var _ = (function (){var statearr_41126 = state_41099;
(statearr_41126[(4)] = cljs.core.rest((state_41099[(4)])));

return statearr_41126;
})();
var state_41099__$1 = state_41099;
var ex41115 = (state_41099__$1[(2)]);
var statearr_41129_43105 = state_41099__$1;
(statearr_41129_43105[(5)] = ex41115);


if((ex41115 instanceof Object)){
var statearr_41132_43106 = state_41099__$1;
(statearr_41132_43106[(1)] = (11));

(statearr_41132_43106[(5)] = null);

} else {
throw ex41115;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (2))){
var inst_41041 = cljs.core.reset_BANG_(dctr,cnt);
var inst_41044 = cnt;
var inst_41045 = (0);
var state_41099__$1 = (function (){var statearr_41133 = state_41099;
(statearr_41133[(11)] = inst_41041);

(statearr_41133[(7)] = inst_41044);

(statearr_41133[(8)] = inst_41045);

return statearr_41133;
})();
var statearr_41134_43113 = state_41099__$1;
(statearr_41134_43113[(2)] = null);

(statearr_41134_43113[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (11))){
var inst_41059 = (state_41099[(2)]);
var inst_41061 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_41099__$1 = (function (){var statearr_41135 = state_41099;
(statearr_41135[(12)] = inst_41059);

return statearr_41135;
})();
var statearr_41136_43124 = state_41099__$1;
(statearr_41136_43124[(2)] = inst_41061);

(statearr_41136_43124[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (9))){
var inst_41045 = (state_41099[(8)]);
var _ = (function (){var statearr_41137 = state_41099;
(statearr_41137[(4)] = cljs.core.cons((12),(state_41099[(4)])));

return statearr_41137;
})();
var inst_41071 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_41045) : chs__$1.call(null,inst_41045));
var inst_41072 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_41045) : done.call(null,inst_41045));
var inst_41073 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_41071,inst_41072);
var ___$1 = (function (){var statearr_41138 = state_41099;
(statearr_41138[(4)] = cljs.core.rest((state_41099[(4)])));

return statearr_41138;
})();
var state_41099__$1 = state_41099;
var statearr_41139_43131 = state_41099__$1;
(statearr_41139_43131[(2)] = inst_41073);

(statearr_41139_43131[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (5))){
var inst_41083 = (state_41099[(2)]);
var state_41099__$1 = (function (){var statearr_41140 = state_41099;
(statearr_41140[(13)] = inst_41083);

return statearr_41140;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41099__$1,(13),dchan);
} else {
if((state_val_41100 === (14))){
var inst_41088 = cljs.core.async.close_BANG_(out);
var state_41099__$1 = state_41099;
var statearr_41141_43134 = state_41099__$1;
(statearr_41141_43134[(2)] = inst_41088);

(statearr_41141_43134[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (16))){
var inst_41095 = (state_41099[(2)]);
var state_41099__$1 = state_41099;
var statearr_41143_43135 = state_41099__$1;
(statearr_41143_43135[(2)] = inst_41095);

(statearr_41143_43135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (10))){
var inst_41045 = (state_41099[(8)]);
var inst_41076 = (state_41099[(2)]);
var inst_41077 = (inst_41045 + (1));
var inst_41045__$1 = inst_41077;
var state_41099__$1 = (function (){var statearr_41145 = state_41099;
(statearr_41145[(14)] = inst_41076);

(statearr_41145[(8)] = inst_41045__$1);

return statearr_41145;
})();
var statearr_41146_43141 = state_41099__$1;
(statearr_41146_43141[(2)] = null);

(statearr_41146_43141[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41100 === (8))){
var inst_41081 = (state_41099[(2)]);
var state_41099__$1 = state_41099;
var statearr_41147_43142 = state_41099__$1;
(statearr_41147_43142[(2)] = inst_41081);

(statearr_41147_43142[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37343__auto__ = null;
var cljs$core$async$state_machine__37343__auto____0 = (function (){
var statearr_41153 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41153[(0)] = cljs$core$async$state_machine__37343__auto__);

(statearr_41153[(1)] = (1));

return statearr_41153;
});
var cljs$core$async$state_machine__37343__auto____1 = (function (state_41099){
while(true){
var ret_value__37344__auto__ = (function (){try{while(true){
var result__37345__auto__ = switch__37342__auto__(state_41099);
if(cljs.core.keyword_identical_QMARK_(result__37345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37345__auto__;
}
break;
}
}catch (e41157){var ex__37346__auto__ = e41157;
var statearr_41158_43154 = state_41099;
(statearr_41158_43154[(2)] = ex__37346__auto__);


if(cljs.core.seq((state_41099[(4)]))){
var statearr_41159_43155 = state_41099;
(statearr_41159_43155[(1)] = cljs.core.first((state_41099[(4)])));

} else {
throw ex__37346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43157 = state_41099;
state_41099 = G__43157;
continue;
} else {
return ret_value__37344__auto__;
}
break;
}
});
cljs$core$async$state_machine__37343__auto__ = function(state_41099){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37343__auto____1.call(this,state_41099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37343__auto____0;
cljs$core$async$state_machine__37343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37343__auto____1;
return cljs$core$async$state_machine__37343__auto__;
})()
})();
var state__37911__auto__ = (function (){var statearr_41163 = f__37910__auto__();
(statearr_41163[(6)] = c__37909__auto___43090);

return statearr_41163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37911__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__41166 = arguments.length;
switch (G__41166) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37909__auto___43164 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37910__auto__ = (function (){var switch__37342__auto__ = (function (state_41206){
var state_val_41207 = (state_41206[(1)]);
if((state_val_41207 === (7))){
var inst_41186 = (state_41206[(7)]);
var inst_41185 = (state_41206[(8)]);
var inst_41185__$1 = (state_41206[(2)]);
var inst_41186__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41185__$1,(0),null);
var inst_41187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41185__$1,(1),null);
var inst_41188 = (inst_41186__$1 == null);
var state_41206__$1 = (function (){var statearr_41208 = state_41206;
(statearr_41208[(7)] = inst_41186__$1);

(statearr_41208[(9)] = inst_41187);

(statearr_41208[(8)] = inst_41185__$1);

return statearr_41208;
})();
if(cljs.core.truth_(inst_41188)){
var statearr_41209_43169 = state_41206__$1;
(statearr_41209_43169[(1)] = (8));

} else {
var statearr_41210_43171 = state_41206__$1;
(statearr_41210_43171[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41207 === (1))){
var inst_41174 = cljs.core.vec(chs);
var inst_41175 = inst_41174;
var state_41206__$1 = (function (){var statearr_41211 = state_41206;
(statearr_41211[(10)] = inst_41175);

return statearr_41211;
})();
var statearr_41212_43173 = state_41206__$1;
(statearr_41212_43173[(2)] = null);

(statearr_41212_43173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41207 === (4))){
var inst_41175 = (state_41206[(10)]);
var state_41206__$1 = state_41206;
return cljs.core.async.ioc_alts_BANG_(state_41206__$1,(7),inst_41175);
} else {
if((state_val_41207 === (6))){
var inst_41202 = (state_41206[(2)]);
var state_41206__$1 = state_41206;
var statearr_41213_43182 = state_41206__$1;
(statearr_41213_43182[(2)] = inst_41202);

(statearr_41213_43182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41207 === (3))){
var inst_41204 = (state_41206[(2)]);
var state_41206__$1 = state_41206;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41206__$1,inst_41204);
} else {
if((state_val_41207 === (2))){
var inst_41175 = (state_41206[(10)]);
var inst_41178 = cljs.core.count(inst_41175);
var inst_41179 = (inst_41178 > (0));
var state_41206__$1 = state_41206;
if(cljs.core.truth_(inst_41179)){
var statearr_41216_43187 = state_41206__$1;
(statearr_41216_43187[(1)] = (4));

} else {
var statearr_41217_43188 = state_41206__$1;
(statearr_41217_43188[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41207 === (11))){
var inst_41175 = (state_41206[(10)]);
var inst_41195 = (state_41206[(2)]);
var tmp41214 = inst_41175;
var inst_41175__$1 = tmp41214;
var state_41206__$1 = (function (){var statearr_41219 = state_41206;
(statearr_41219[(10)] = inst_41175__$1);

(statearr_41219[(11)] = inst_41195);

return statearr_41219;
})();
var statearr_41220_43189 = state_41206__$1;
(statearr_41220_43189[(2)] = null);

(statearr_41220_43189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41207 === (9))){
var inst_41186 = (state_41206[(7)]);
var state_41206__$1 = state_41206;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41206__$1,(11),out,inst_41186);
} else {
if((state_val_41207 === (5))){
var inst_41200 = cljs.core.async.close_BANG_(out);
var state_41206__$1 = state_41206;
var statearr_41224_43191 = state_41206__$1;
(statearr_41224_43191[(2)] = inst_41200);

(statearr_41224_43191[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41207 === (10))){
var inst_41198 = (state_41206[(2)]);
var state_41206__$1 = state_41206;
var statearr_41226_43192 = state_41206__$1;
(statearr_41226_43192[(2)] = inst_41198);

(statearr_41226_43192[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41207 === (8))){
var inst_41175 = (state_41206[(10)]);
var inst_41186 = (state_41206[(7)]);
var inst_41187 = (state_41206[(9)]);
var inst_41185 = (state_41206[(8)]);
var inst_41190 = (function (){var cs = inst_41175;
var vec__41181 = inst_41185;
var v = inst_41186;
var c = inst_41187;
return (function (p1__41164_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__41164_SHARP_);
});
})();
var inst_41191 = cljs.core.filterv(inst_41190,inst_41175);
var inst_41175__$1 = inst_41191;
var state_41206__$1 = (function (){var statearr_41228 = state_41206;
(statearr_41228[(10)] = inst_41175__$1);

return statearr_41228;
})();
var statearr_41229_43197 = state_41206__$1;
(statearr_41229_43197[(2)] = null);

(statearr_41229_43197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37343__auto__ = null;
var cljs$core$async$state_machine__37343__auto____0 = (function (){
var statearr_41234 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41234[(0)] = cljs$core$async$state_machine__37343__auto__);

(statearr_41234[(1)] = (1));

return statearr_41234;
});
var cljs$core$async$state_machine__37343__auto____1 = (function (state_41206){
while(true){
var ret_value__37344__auto__ = (function (){try{while(true){
var result__37345__auto__ = switch__37342__auto__(state_41206);
if(cljs.core.keyword_identical_QMARK_(result__37345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37345__auto__;
}
break;
}
}catch (e41235){var ex__37346__auto__ = e41235;
var statearr_41236_43199 = state_41206;
(statearr_41236_43199[(2)] = ex__37346__auto__);


if(cljs.core.seq((state_41206[(4)]))){
var statearr_41237_43201 = state_41206;
(statearr_41237_43201[(1)] = cljs.core.first((state_41206[(4)])));

} else {
throw ex__37346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43202 = state_41206;
state_41206 = G__43202;
continue;
} else {
return ret_value__37344__auto__;
}
break;
}
});
cljs$core$async$state_machine__37343__auto__ = function(state_41206){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37343__auto____1.call(this,state_41206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37343__auto____0;
cljs$core$async$state_machine__37343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37343__auto____1;
return cljs$core$async$state_machine__37343__auto__;
})()
})();
var state__37911__auto__ = (function (){var statearr_41238 = f__37910__auto__();
(statearr_41238[(6)] = c__37909__auto___43164);

return statearr_41238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37911__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__41247 = arguments.length;
switch (G__41247) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37909__auto___43211 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37910__auto__ = (function (){var switch__37342__auto__ = (function (state_41273){
var state_val_41274 = (state_41273[(1)]);
if((state_val_41274 === (7))){
var inst_41255 = (state_41273[(7)]);
var inst_41255__$1 = (state_41273[(2)]);
var inst_41256 = (inst_41255__$1 == null);
var inst_41257 = cljs.core.not(inst_41256);
var state_41273__$1 = (function (){var statearr_41277 = state_41273;
(statearr_41277[(7)] = inst_41255__$1);

return statearr_41277;
})();
if(inst_41257){
var statearr_41278_43212 = state_41273__$1;
(statearr_41278_43212[(1)] = (8));

} else {
var statearr_41279_43213 = state_41273__$1;
(statearr_41279_43213[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41274 === (1))){
var inst_41250 = (0);
var state_41273__$1 = (function (){var statearr_41280 = state_41273;
(statearr_41280[(8)] = inst_41250);

return statearr_41280;
})();
var statearr_41281_43217 = state_41273__$1;
(statearr_41281_43217[(2)] = null);

(statearr_41281_43217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41274 === (4))){
var state_41273__$1 = state_41273;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41273__$1,(7),ch);
} else {
if((state_val_41274 === (6))){
var inst_41268 = (state_41273[(2)]);
var state_41273__$1 = state_41273;
var statearr_41282_43218 = state_41273__$1;
(statearr_41282_43218[(2)] = inst_41268);

(statearr_41282_43218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41274 === (3))){
var inst_41270 = (state_41273[(2)]);
var inst_41271 = cljs.core.async.close_BANG_(out);
var state_41273__$1 = (function (){var statearr_41284 = state_41273;
(statearr_41284[(9)] = inst_41270);

return statearr_41284;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_41273__$1,inst_41271);
} else {
if((state_val_41274 === (2))){
var inst_41250 = (state_41273[(8)]);
var inst_41252 = (inst_41250 < n);
var state_41273__$1 = state_41273;
if(cljs.core.truth_(inst_41252)){
var statearr_41285_43222 = state_41273__$1;
(statearr_41285_43222[(1)] = (4));

} else {
var statearr_41286_43225 = state_41273__$1;
(statearr_41286_43225[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41274 === (11))){
var inst_41250 = (state_41273[(8)]);
var inst_41260 = (state_41273[(2)]);
var inst_41261 = (inst_41250 + (1));
var inst_41250__$1 = inst_41261;
var state_41273__$1 = (function (){var statearr_41287 = state_41273;
(statearr_41287[(10)] = inst_41260);

(statearr_41287[(8)] = inst_41250__$1);

return statearr_41287;
})();
var statearr_41288_43233 = state_41273__$1;
(statearr_41288_43233[(2)] = null);

(statearr_41288_43233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41274 === (9))){
var state_41273__$1 = state_41273;
var statearr_41291_43236 = state_41273__$1;
(statearr_41291_43236[(2)] = null);

(statearr_41291_43236[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41274 === (5))){
var state_41273__$1 = state_41273;
var statearr_41293_43237 = state_41273__$1;
(statearr_41293_43237[(2)] = null);

(statearr_41293_43237[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41274 === (10))){
var inst_41265 = (state_41273[(2)]);
var state_41273__$1 = state_41273;
var statearr_41295_43244 = state_41273__$1;
(statearr_41295_43244[(2)] = inst_41265);

(statearr_41295_43244[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41274 === (8))){
var inst_41255 = (state_41273[(7)]);
var state_41273__$1 = state_41273;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41273__$1,(11),out,inst_41255);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37343__auto__ = null;
var cljs$core$async$state_machine__37343__auto____0 = (function (){
var statearr_41297 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41297[(0)] = cljs$core$async$state_machine__37343__auto__);

(statearr_41297[(1)] = (1));

return statearr_41297;
});
var cljs$core$async$state_machine__37343__auto____1 = (function (state_41273){
while(true){
var ret_value__37344__auto__ = (function (){try{while(true){
var result__37345__auto__ = switch__37342__auto__(state_41273);
if(cljs.core.keyword_identical_QMARK_(result__37345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37345__auto__;
}
break;
}
}catch (e41299){var ex__37346__auto__ = e41299;
var statearr_41300_43245 = state_41273;
(statearr_41300_43245[(2)] = ex__37346__auto__);


if(cljs.core.seq((state_41273[(4)]))){
var statearr_41301_43247 = state_41273;
(statearr_41301_43247[(1)] = cljs.core.first((state_41273[(4)])));

} else {
throw ex__37346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43248 = state_41273;
state_41273 = G__43248;
continue;
} else {
return ret_value__37344__auto__;
}
break;
}
});
cljs$core$async$state_machine__37343__auto__ = function(state_41273){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37343__auto____1.call(this,state_41273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37343__auto____0;
cljs$core$async$state_machine__37343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37343__auto____1;
return cljs$core$async$state_machine__37343__auto__;
})()
})();
var state__37911__auto__ = (function (){var statearr_41302 = f__37910__auto__();
(statearr_41302[(6)] = c__37909__auto___43211);

return statearr_41302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37911__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41304 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41304 = (function (f,ch,meta41305){
this.f = f;
this.ch = ch;
this.meta41305 = meta41305;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41306,meta41305__$1){
var self__ = this;
var _41306__$1 = this;
return (new cljs.core.async.t_cljs$core$async41304(self__.f,self__.ch,meta41305__$1));
}));

(cljs.core.async.t_cljs$core$async41304.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41306){
var self__ = this;
var _41306__$1 = this;
return self__.meta41305;
}));

(cljs.core.async.t_cljs$core$async41304.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41304.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async41304.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async41304.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41304.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41313 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41313 = (function (f,ch,meta41305,_,fn1,meta41314){
this.f = f;
this.ch = ch;
this.meta41305 = meta41305;
this._ = _;
this.fn1 = fn1;
this.meta41314 = meta41314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41315,meta41314__$1){
var self__ = this;
var _41315__$1 = this;
return (new cljs.core.async.t_cljs$core$async41313(self__.f,self__.ch,self__.meta41305,self__._,self__.fn1,meta41314__$1));
}));

(cljs.core.async.t_cljs$core$async41313.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41315){
var self__ = this;
var _41315__$1 = this;
return self__.meta41314;
}));

(cljs.core.async.t_cljs$core$async41313.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41313.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async41313.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async41313.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__41303_SHARP_){
var G__41318 = (((p1__41303_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__41303_SHARP_) : self__.f.call(null,p1__41303_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__41318) : f1.call(null,G__41318));
});
}));

(cljs.core.async.t_cljs$core$async41313.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41305","meta41305",-96098324,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async41304","cljs.core.async/t_cljs$core$async41304",-1888756717,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta41314","meta41314",-968111155,null)], null);
}));

(cljs.core.async.t_cljs$core$async41313.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41313.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41313");

(cljs.core.async.t_cljs$core$async41313.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async41313");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41313.
 */
cljs.core.async.__GT_t_cljs$core$async41313 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async41313(f__$1,ch__$1,meta41305__$1,___$2,fn1__$1,meta41314){
return (new cljs.core.async.t_cljs$core$async41313(f__$1,ch__$1,meta41305__$1,___$2,fn1__$1,meta41314));
});

}

return (new cljs.core.async.t_cljs$core$async41313(self__.f,self__.ch,self__.meta41305,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__41335 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__41335) : self__.f.call(null,G__41335));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async41304.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41304.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async41304.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41305","meta41305",-96098324,null)], null);
}));

(cljs.core.async.t_cljs$core$async41304.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41304.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41304");

(cljs.core.async.t_cljs$core$async41304.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async41304");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41304.
 */
cljs.core.async.__GT_t_cljs$core$async41304 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async41304(f__$1,ch__$1,meta41305){
return (new cljs.core.async.t_cljs$core$async41304(f__$1,ch__$1,meta41305));
});

}

return (new cljs.core.async.t_cljs$core$async41304(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41356 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41356 = (function (f,ch,meta41357){
this.f = f;
this.ch = ch;
this.meta41357 = meta41357;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41358,meta41357__$1){
var self__ = this;
var _41358__$1 = this;
return (new cljs.core.async.t_cljs$core$async41356(self__.f,self__.ch,meta41357__$1));
}));

(cljs.core.async.t_cljs$core$async41356.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41358){
var self__ = this;
var _41358__$1 = this;
return self__.meta41357;
}));

(cljs.core.async.t_cljs$core$async41356.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41356.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async41356.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41356.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async41356.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41356.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async41356.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41357","meta41357",-1671764232,null)], null);
}));

(cljs.core.async.t_cljs$core$async41356.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41356.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41356");

(cljs.core.async.t_cljs$core$async41356.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async41356");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41356.
 */
cljs.core.async.__GT_t_cljs$core$async41356 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async41356(f__$1,ch__$1,meta41357){
return (new cljs.core.async.t_cljs$core$async41356(f__$1,ch__$1,meta41357));
});

}

return (new cljs.core.async.t_cljs$core$async41356(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41385 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41385 = (function (p,ch,meta41386){
this.p = p;
this.ch = ch;
this.meta41386 = meta41386;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41385.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41387,meta41386__$1){
var self__ = this;
var _41387__$1 = this;
return (new cljs.core.async.t_cljs$core$async41385(self__.p,self__.ch,meta41386__$1));
}));

(cljs.core.async.t_cljs$core$async41385.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41387){
var self__ = this;
var _41387__$1 = this;
return self__.meta41386;
}));

(cljs.core.async.t_cljs$core$async41385.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41385.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async41385.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async41385.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41385.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async41385.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41385.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async41385.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41386","meta41386",-1965046133,null)], null);
}));

(cljs.core.async.t_cljs$core$async41385.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41385.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41385");

(cljs.core.async.t_cljs$core$async41385.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async41385");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41385.
 */
cljs.core.async.__GT_t_cljs$core$async41385 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async41385(p__$1,ch__$1,meta41386){
return (new cljs.core.async.t_cljs$core$async41385(p__$1,ch__$1,meta41386));
});

}

return (new cljs.core.async.t_cljs$core$async41385(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__41420 = arguments.length;
switch (G__41420) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37909__auto___43273 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37910__auto__ = (function (){var switch__37342__auto__ = (function (state_41469){
var state_val_41470 = (state_41469[(1)]);
if((state_val_41470 === (7))){
var inst_41461 = (state_41469[(2)]);
var state_41469__$1 = state_41469;
var statearr_41478_43274 = state_41469__$1;
(statearr_41478_43274[(2)] = inst_41461);

(statearr_41478_43274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41470 === (1))){
var state_41469__$1 = state_41469;
var statearr_41481_43276 = state_41469__$1;
(statearr_41481_43276[(2)] = null);

(statearr_41481_43276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41470 === (4))){
var inst_41439 = (state_41469[(7)]);
var inst_41439__$1 = (state_41469[(2)]);
var inst_41442 = (inst_41439__$1 == null);
var state_41469__$1 = (function (){var statearr_41483 = state_41469;
(statearr_41483[(7)] = inst_41439__$1);

return statearr_41483;
})();
if(cljs.core.truth_(inst_41442)){
var statearr_41486_43281 = state_41469__$1;
(statearr_41486_43281[(1)] = (5));

} else {
var statearr_41487_43284 = state_41469__$1;
(statearr_41487_43284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41470 === (6))){
var inst_41439 = (state_41469[(7)]);
var inst_41448 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_41439) : p.call(null,inst_41439));
var state_41469__$1 = state_41469;
if(cljs.core.truth_(inst_41448)){
var statearr_41490_43285 = state_41469__$1;
(statearr_41490_43285[(1)] = (8));

} else {
var statearr_41492_43286 = state_41469__$1;
(statearr_41492_43286[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41470 === (3))){
var inst_41463 = (state_41469[(2)]);
var state_41469__$1 = state_41469;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41469__$1,inst_41463);
} else {
if((state_val_41470 === (2))){
var state_41469__$1 = state_41469;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41469__$1,(4),ch);
} else {
if((state_val_41470 === (11))){
var inst_41455 = (state_41469[(2)]);
var state_41469__$1 = state_41469;
var statearr_41497_43287 = state_41469__$1;
(statearr_41497_43287[(2)] = inst_41455);

(statearr_41497_43287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41470 === (9))){
var state_41469__$1 = state_41469;
var statearr_41500_43288 = state_41469__$1;
(statearr_41500_43288[(2)] = null);

(statearr_41500_43288[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41470 === (5))){
var inst_41445 = cljs.core.async.close_BANG_(out);
var state_41469__$1 = state_41469;
var statearr_41503_43291 = state_41469__$1;
(statearr_41503_43291[(2)] = inst_41445);

(statearr_41503_43291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41470 === (10))){
var inst_41458 = (state_41469[(2)]);
var state_41469__$1 = (function (){var statearr_41506 = state_41469;
(statearr_41506[(8)] = inst_41458);

return statearr_41506;
})();
var statearr_41509_43292 = state_41469__$1;
(statearr_41509_43292[(2)] = null);

(statearr_41509_43292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41470 === (8))){
var inst_41439 = (state_41469[(7)]);
var state_41469__$1 = state_41469;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41469__$1,(11),out,inst_41439);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37343__auto__ = null;
var cljs$core$async$state_machine__37343__auto____0 = (function (){
var statearr_41520 = [null,null,null,null,null,null,null,null,null];
(statearr_41520[(0)] = cljs$core$async$state_machine__37343__auto__);

(statearr_41520[(1)] = (1));

return statearr_41520;
});
var cljs$core$async$state_machine__37343__auto____1 = (function (state_41469){
while(true){
var ret_value__37344__auto__ = (function (){try{while(true){
var result__37345__auto__ = switch__37342__auto__(state_41469);
if(cljs.core.keyword_identical_QMARK_(result__37345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37345__auto__;
}
break;
}
}catch (e41521){var ex__37346__auto__ = e41521;
var statearr_41522_43293 = state_41469;
(statearr_41522_43293[(2)] = ex__37346__auto__);


if(cljs.core.seq((state_41469[(4)]))){
var statearr_41524_43294 = state_41469;
(statearr_41524_43294[(1)] = cljs.core.first((state_41469[(4)])));

} else {
throw ex__37346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43295 = state_41469;
state_41469 = G__43295;
continue;
} else {
return ret_value__37344__auto__;
}
break;
}
});
cljs$core$async$state_machine__37343__auto__ = function(state_41469){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37343__auto____1.call(this,state_41469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37343__auto____0;
cljs$core$async$state_machine__37343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37343__auto____1;
return cljs$core$async$state_machine__37343__auto__;
})()
})();
var state__37911__auto__ = (function (){var statearr_41530 = f__37910__auto__();
(statearr_41530[(6)] = c__37909__auto___43273);

return statearr_41530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37911__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__41536 = arguments.length;
switch (G__41536) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__37909__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37910__auto__ = (function (){var switch__37342__auto__ = (function (state_41644){
var state_val_41645 = (state_41644[(1)]);
if((state_val_41645 === (7))){
var inst_41639 = (state_41644[(2)]);
var state_41644__$1 = state_41644;
var statearr_41659_43298 = state_41644__$1;
(statearr_41659_43298[(2)] = inst_41639);

(statearr_41659_43298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41645 === (20))){
var inst_41594 = (state_41644[(7)]);
var inst_41607 = (state_41644[(2)]);
var inst_41612 = cljs.core.next(inst_41594);
var inst_41573 = inst_41612;
var inst_41574 = null;
var inst_41575 = (0);
var inst_41576 = (0);
var state_41644__$1 = (function (){var statearr_41661 = state_41644;
(statearr_41661[(8)] = inst_41573);

(statearr_41661[(9)] = inst_41575);

(statearr_41661[(10)] = inst_41574);

(statearr_41661[(11)] = inst_41607);

(statearr_41661[(12)] = inst_41576);

return statearr_41661;
})();
var statearr_41667_43305 = state_41644__$1;
(statearr_41667_43305[(2)] = null);

(statearr_41667_43305[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41645 === (1))){
var state_41644__$1 = state_41644;
var statearr_41668_43306 = state_41644__$1;
(statearr_41668_43306[(2)] = null);

(statearr_41668_43306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41645 === (4))){
var inst_41558 = (state_41644[(13)]);
var inst_41558__$1 = (state_41644[(2)]);
var inst_41560 = (inst_41558__$1 == null);
var state_41644__$1 = (function (){var statearr_41673 = state_41644;
(statearr_41673[(13)] = inst_41558__$1);

return statearr_41673;
})();
if(cljs.core.truth_(inst_41560)){
var statearr_41674_43307 = state_41644__$1;
(statearr_41674_43307[(1)] = (5));

} else {
var statearr_41675_43308 = state_41644__$1;
(statearr_41675_43308[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41645 === (15))){
var state_41644__$1 = state_41644;
var statearr_41681_43310 = state_41644__$1;
(statearr_41681_43310[(2)] = null);

(statearr_41681_43310[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41645 === (21))){
var state_41644__$1 = state_41644;
var statearr_41683_43311 = state_41644__$1;
(statearr_41683_43311[(2)] = null);

(statearr_41683_43311[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41645 === (13))){
var inst_41573 = (state_41644[(8)]);
var inst_41575 = (state_41644[(9)]);
var inst_41574 = (state_41644[(10)]);
var inst_41576 = (state_41644[(12)]);
var inst_41587 = (state_41644[(2)]);
var inst_41590 = (inst_41576 + (1));
var tmp41677 = inst_41573;
var tmp41678 = inst_41575;
var tmp41679 = inst_41574;
var inst_41573__$1 = tmp41677;
var inst_41574__$1 = tmp41679;
var inst_41575__$1 = tmp41678;
var inst_41576__$1 = inst_41590;
var state_41644__$1 = (function (){var statearr_41687 = state_41644;
(statearr_41687[(14)] = inst_41587);

(statearr_41687[(8)] = inst_41573__$1);

(statearr_41687[(9)] = inst_41575__$1);

(statearr_41687[(10)] = inst_41574__$1);

(statearr_41687[(12)] = inst_41576__$1);

return statearr_41687;
})();
var statearr_41689_43316 = state_41644__$1;
(statearr_41689_43316[(2)] = null);

(statearr_41689_43316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41645 === (22))){
var state_41644__$1 = state_41644;
var statearr_41696_43318 = state_41644__$1;
(statearr_41696_43318[(2)] = null);

(statearr_41696_43318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41645 === (6))){
var inst_41558 = (state_41644[(13)]);
var inst_41570 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_41558) : f.call(null,inst_41558));
var inst_41571 = cljs.core.seq(inst_41570);
var inst_41573 = inst_41571;
var inst_41574 = null;
var inst_41575 = (0);
var inst_41576 = (0);
var state_41644__$1 = (function (){var statearr_41699 = state_41644;
(statearr_41699[(8)] = inst_41573);

(statearr_41699[(9)] = inst_41575);

(statearr_41699[(10)] = inst_41574);

(statearr_41699[(12)] = inst_41576);

return statearr_41699;
})();
var statearr_41700_43319 = state_41644__$1;
(statearr_41700_43319[(2)] = null);

(statearr_41700_43319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41645 === (17))){
var inst_41594 = (state_41644[(7)]);
var inst_41599 = cljs.core.chunk_first(inst_41594);
var inst_41600 = cljs.core.chunk_rest(inst_41594);
var inst_41601 = cljs.core.count(inst_41599);
var inst_41573 = inst_41600;
var inst_41574 = inst_41599;
var inst_41575 = inst_41601;
var inst_41576 = (0);
var state_41644__$1 = (function (){var statearr_41709 = state_41644;
(statearr_41709[(8)] = inst_41573);

(statearr_41709[(9)] = inst_41575);

(statearr_41709[(10)] = inst_41574);

(statearr_41709[(12)] = inst_41576);

return statearr_41709;
})();
var statearr_41713_43320 = state_41644__$1;
(statearr_41713_43320[(2)] = null);

(statearr_41713_43320[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41645 === (3))){
var inst_41641 = (state_41644[(2)]);
var state_41644__$1 = state_41644;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41644__$1,inst_41641);
} else {
if((state_val_41645 === (12))){
var inst_41620 = (state_41644[(2)]);
var state_41644__$1 = state_41644;
var statearr_41719_43321 = state_41644__$1;
(statearr_41719_43321[(2)] = inst_41620);

(statearr_41719_43321[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41645 === (2))){
var state_41644__$1 = state_41644;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41644__$1,(4),in$);
} else {
if((state_val_41645 === (23))){
var inst_41637 = (state_41644[(2)]);
var state_41644__$1 = state_41644;
var statearr_41720_43322 = state_41644__$1;
(statearr_41720_43322[(2)] = inst_41637);

(statearr_41720_43322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41645 === (19))){
var inst_41615 = (state_41644[(2)]);
var state_41644__$1 = state_41644;
var statearr_41724_43323 = state_41644__$1;
(statearr_41724_43323[(2)] = inst_41615);

(statearr_41724_43323[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41645 === (11))){
var inst_41573 = (state_41644[(8)]);
var inst_41594 = (state_41644[(7)]);
var inst_41594__$1 = cljs.core.seq(inst_41573);
var state_41644__$1 = (function (){var statearr_41727 = state_41644;
(statearr_41727[(7)] = inst_41594__$1);

return statearr_41727;
})();
if(inst_41594__$1){
var statearr_41732_43324 = state_41644__$1;
(statearr_41732_43324[(1)] = (14));

} else {
var statearr_41733_43325 = state_41644__$1;
(statearr_41733_43325[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41645 === (9))){
var inst_41622 = (state_41644[(2)]);
var inst_41623 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_41644__$1 = (function (){var statearr_41734 = state_41644;
(statearr_41734[(15)] = inst_41622);

return statearr_41734;
})();
if(cljs.core.truth_(inst_41623)){
var statearr_41737_43326 = state_41644__$1;
(statearr_41737_43326[(1)] = (21));

} else {
var statearr_41738_43327 = state_41644__$1;
(statearr_41738_43327[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41645 === (5))){
var inst_41562 = cljs.core.async.close_BANG_(out);
var state_41644__$1 = state_41644;
var statearr_41739_43328 = state_41644__$1;
(statearr_41739_43328[(2)] = inst_41562);

(statearr_41739_43328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41645 === (14))){
var inst_41594 = (state_41644[(7)]);
var inst_41597 = cljs.core.chunked_seq_QMARK_(inst_41594);
var state_41644__$1 = state_41644;
if(inst_41597){
var statearr_41740_43329 = state_41644__$1;
(statearr_41740_43329[(1)] = (17));

} else {
var statearr_41741_43330 = state_41644__$1;
(statearr_41741_43330[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41645 === (16))){
var inst_41618 = (state_41644[(2)]);
var state_41644__$1 = state_41644;
var statearr_41742_43331 = state_41644__$1;
(statearr_41742_43331[(2)] = inst_41618);

(statearr_41742_43331[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41645 === (10))){
var inst_41574 = (state_41644[(10)]);
var inst_41576 = (state_41644[(12)]);
var inst_41584 = cljs.core._nth(inst_41574,inst_41576);
var state_41644__$1 = state_41644;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41644__$1,(13),out,inst_41584);
} else {
if((state_val_41645 === (18))){
var inst_41594 = (state_41644[(7)]);
var inst_41605 = cljs.core.first(inst_41594);
var state_41644__$1 = state_41644;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41644__$1,(20),out,inst_41605);
} else {
if((state_val_41645 === (8))){
var inst_41575 = (state_41644[(9)]);
var inst_41576 = (state_41644[(12)]);
var inst_41580 = (inst_41576 < inst_41575);
var inst_41581 = inst_41580;
var state_41644__$1 = state_41644;
if(cljs.core.truth_(inst_41581)){
var statearr_41751_43332 = state_41644__$1;
(statearr_41751_43332[(1)] = (10));

} else {
var statearr_41752_43333 = state_41644__$1;
(statearr_41752_43333[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__37343__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__37343__auto____0 = (function (){
var statearr_41758 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41758[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__37343__auto__);

(statearr_41758[(1)] = (1));

return statearr_41758;
});
var cljs$core$async$mapcat_STAR__$_state_machine__37343__auto____1 = (function (state_41644){
while(true){
var ret_value__37344__auto__ = (function (){try{while(true){
var result__37345__auto__ = switch__37342__auto__(state_41644);
if(cljs.core.keyword_identical_QMARK_(result__37345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37345__auto__;
}
break;
}
}catch (e41761){var ex__37346__auto__ = e41761;
var statearr_41762_43335 = state_41644;
(statearr_41762_43335[(2)] = ex__37346__auto__);


if(cljs.core.seq((state_41644[(4)]))){
var statearr_41763_43336 = state_41644;
(statearr_41763_43336[(1)] = cljs.core.first((state_41644[(4)])));

} else {
throw ex__37346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43337 = state_41644;
state_41644 = G__43337;
continue;
} else {
return ret_value__37344__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__37343__auto__ = function(state_41644){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__37343__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__37343__auto____1.call(this,state_41644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__37343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__37343__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__37343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__37343__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__37343__auto__;
})()
})();
var state__37911__auto__ = (function (){var statearr_41767 = f__37910__auto__();
(statearr_41767[(6)] = c__37909__auto__);

return statearr_41767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37911__auto__);
}));

return c__37909__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__41772 = arguments.length;
switch (G__41772) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__41776 = arguments.length;
switch (G__41776) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__41784 = arguments.length;
switch (G__41784) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37909__auto___43342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37910__auto__ = (function (){var switch__37342__auto__ = (function (state_41814){
var state_val_41815 = (state_41814[(1)]);
if((state_val_41815 === (7))){
var inst_41808 = (state_41814[(2)]);
var state_41814__$1 = state_41814;
var statearr_41817_43344 = state_41814__$1;
(statearr_41817_43344[(2)] = inst_41808);

(statearr_41817_43344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41815 === (1))){
var inst_41789 = null;
var state_41814__$1 = (function (){var statearr_41818 = state_41814;
(statearr_41818[(7)] = inst_41789);

return statearr_41818;
})();
var statearr_41820_43346 = state_41814__$1;
(statearr_41820_43346[(2)] = null);

(statearr_41820_43346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41815 === (4))){
var inst_41792 = (state_41814[(8)]);
var inst_41792__$1 = (state_41814[(2)]);
var inst_41793 = (inst_41792__$1 == null);
var inst_41794 = cljs.core.not(inst_41793);
var state_41814__$1 = (function (){var statearr_41821 = state_41814;
(statearr_41821[(8)] = inst_41792__$1);

return statearr_41821;
})();
if(inst_41794){
var statearr_41823_43347 = state_41814__$1;
(statearr_41823_43347[(1)] = (5));

} else {
var statearr_41824_43348 = state_41814__$1;
(statearr_41824_43348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41815 === (6))){
var state_41814__$1 = state_41814;
var statearr_41825_43349 = state_41814__$1;
(statearr_41825_43349[(2)] = null);

(statearr_41825_43349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41815 === (3))){
var inst_41810 = (state_41814[(2)]);
var inst_41811 = cljs.core.async.close_BANG_(out);
var state_41814__$1 = (function (){var statearr_41826 = state_41814;
(statearr_41826[(9)] = inst_41810);

return statearr_41826;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_41814__$1,inst_41811);
} else {
if((state_val_41815 === (2))){
var state_41814__$1 = state_41814;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41814__$1,(4),ch);
} else {
if((state_val_41815 === (11))){
var inst_41792 = (state_41814[(8)]);
var inst_41802 = (state_41814[(2)]);
var inst_41789 = inst_41792;
var state_41814__$1 = (function (){var statearr_41827 = state_41814;
(statearr_41827[(10)] = inst_41802);

(statearr_41827[(7)] = inst_41789);

return statearr_41827;
})();
var statearr_41828_43350 = state_41814__$1;
(statearr_41828_43350[(2)] = null);

(statearr_41828_43350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41815 === (9))){
var inst_41792 = (state_41814[(8)]);
var state_41814__$1 = state_41814;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41814__$1,(11),out,inst_41792);
} else {
if((state_val_41815 === (5))){
var inst_41789 = (state_41814[(7)]);
var inst_41792 = (state_41814[(8)]);
var inst_41797 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41792,inst_41789);
var state_41814__$1 = state_41814;
if(inst_41797){
var statearr_41830_43352 = state_41814__$1;
(statearr_41830_43352[(1)] = (8));

} else {
var statearr_41831_43353 = state_41814__$1;
(statearr_41831_43353[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41815 === (10))){
var inst_41805 = (state_41814[(2)]);
var state_41814__$1 = state_41814;
var statearr_41833_43354 = state_41814__$1;
(statearr_41833_43354[(2)] = inst_41805);

(statearr_41833_43354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41815 === (8))){
var inst_41789 = (state_41814[(7)]);
var tmp41829 = inst_41789;
var inst_41789__$1 = tmp41829;
var state_41814__$1 = (function (){var statearr_41834 = state_41814;
(statearr_41834[(7)] = inst_41789__$1);

return statearr_41834;
})();
var statearr_41835_43356 = state_41814__$1;
(statearr_41835_43356[(2)] = null);

(statearr_41835_43356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37343__auto__ = null;
var cljs$core$async$state_machine__37343__auto____0 = (function (){
var statearr_41836 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41836[(0)] = cljs$core$async$state_machine__37343__auto__);

(statearr_41836[(1)] = (1));

return statearr_41836;
});
var cljs$core$async$state_machine__37343__auto____1 = (function (state_41814){
while(true){
var ret_value__37344__auto__ = (function (){try{while(true){
var result__37345__auto__ = switch__37342__auto__(state_41814);
if(cljs.core.keyword_identical_QMARK_(result__37345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37345__auto__;
}
break;
}
}catch (e41837){var ex__37346__auto__ = e41837;
var statearr_41838_43359 = state_41814;
(statearr_41838_43359[(2)] = ex__37346__auto__);


if(cljs.core.seq((state_41814[(4)]))){
var statearr_41839_43360 = state_41814;
(statearr_41839_43360[(1)] = cljs.core.first((state_41814[(4)])));

} else {
throw ex__37346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43361 = state_41814;
state_41814 = G__43361;
continue;
} else {
return ret_value__37344__auto__;
}
break;
}
});
cljs$core$async$state_machine__37343__auto__ = function(state_41814){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37343__auto____1.call(this,state_41814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37343__auto____0;
cljs$core$async$state_machine__37343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37343__auto____1;
return cljs$core$async$state_machine__37343__auto__;
})()
})();
var state__37911__auto__ = (function (){var statearr_41847 = f__37910__auto__();
(statearr_41847[(6)] = c__37909__auto___43342);

return statearr_41847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37911__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__41860 = arguments.length;
switch (G__41860) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37909__auto___43363 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37910__auto__ = (function (){var switch__37342__auto__ = (function (state_41906){
var state_val_41907 = (state_41906[(1)]);
if((state_val_41907 === (7))){
var inst_41902 = (state_41906[(2)]);
var state_41906__$1 = state_41906;
var statearr_41911_43370 = state_41906__$1;
(statearr_41911_43370[(2)] = inst_41902);

(statearr_41911_43370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41907 === (1))){
var inst_41863 = (new Array(n));
var inst_41866 = inst_41863;
var inst_41867 = (0);
var state_41906__$1 = (function (){var statearr_41912 = state_41906;
(statearr_41912[(7)] = inst_41866);

(statearr_41912[(8)] = inst_41867);

return statearr_41912;
})();
var statearr_41913_43376 = state_41906__$1;
(statearr_41913_43376[(2)] = null);

(statearr_41913_43376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41907 === (4))){
var inst_41871 = (state_41906[(9)]);
var inst_41871__$1 = (state_41906[(2)]);
var inst_41872 = (inst_41871__$1 == null);
var inst_41873 = cljs.core.not(inst_41872);
var state_41906__$1 = (function (){var statearr_41914 = state_41906;
(statearr_41914[(9)] = inst_41871__$1);

return statearr_41914;
})();
if(inst_41873){
var statearr_41915_43382 = state_41906__$1;
(statearr_41915_43382[(1)] = (5));

} else {
var statearr_41916_43383 = state_41906__$1;
(statearr_41916_43383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41907 === (15))){
var inst_41896 = (state_41906[(2)]);
var state_41906__$1 = state_41906;
var statearr_41917_43384 = state_41906__$1;
(statearr_41917_43384[(2)] = inst_41896);

(statearr_41917_43384[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41907 === (13))){
var state_41906__$1 = state_41906;
var statearr_41918_43385 = state_41906__$1;
(statearr_41918_43385[(2)] = null);

(statearr_41918_43385[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41907 === (6))){
var inst_41867 = (state_41906[(8)]);
var inst_41892 = (inst_41867 > (0));
var state_41906__$1 = state_41906;
if(cljs.core.truth_(inst_41892)){
var statearr_41920_43386 = state_41906__$1;
(statearr_41920_43386[(1)] = (12));

} else {
var statearr_41921_43387 = state_41906__$1;
(statearr_41921_43387[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41907 === (3))){
var inst_41904 = (state_41906[(2)]);
var state_41906__$1 = state_41906;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41906__$1,inst_41904);
} else {
if((state_val_41907 === (12))){
var inst_41866 = (state_41906[(7)]);
var inst_41894 = cljs.core.vec(inst_41866);
var state_41906__$1 = state_41906;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41906__$1,(15),out,inst_41894);
} else {
if((state_val_41907 === (2))){
var state_41906__$1 = state_41906;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41906__$1,(4),ch);
} else {
if((state_val_41907 === (11))){
var inst_41884 = (state_41906[(2)]);
var inst_41886 = (new Array(n));
var inst_41866 = inst_41886;
var inst_41867 = (0);
var state_41906__$1 = (function (){var statearr_41925 = state_41906;
(statearr_41925[(7)] = inst_41866);

(statearr_41925[(10)] = inst_41884);

(statearr_41925[(8)] = inst_41867);

return statearr_41925;
})();
var statearr_41926_43396 = state_41906__$1;
(statearr_41926_43396[(2)] = null);

(statearr_41926_43396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41907 === (9))){
var inst_41866 = (state_41906[(7)]);
var inst_41882 = cljs.core.vec(inst_41866);
var state_41906__$1 = state_41906;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41906__$1,(11),out,inst_41882);
} else {
if((state_val_41907 === (5))){
var inst_41866 = (state_41906[(7)]);
var inst_41867 = (state_41906[(8)]);
var inst_41876 = (state_41906[(11)]);
var inst_41871 = (state_41906[(9)]);
var inst_41875 = (inst_41866[inst_41867] = inst_41871);
var inst_41876__$1 = (inst_41867 + (1));
var inst_41877 = (inst_41876__$1 < n);
var state_41906__$1 = (function (){var statearr_41927 = state_41906;
(statearr_41927[(11)] = inst_41876__$1);

(statearr_41927[(12)] = inst_41875);

return statearr_41927;
})();
if(cljs.core.truth_(inst_41877)){
var statearr_41928_43405 = state_41906__$1;
(statearr_41928_43405[(1)] = (8));

} else {
var statearr_41929_43406 = state_41906__$1;
(statearr_41929_43406[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41907 === (14))){
var inst_41899 = (state_41906[(2)]);
var inst_41900 = cljs.core.async.close_BANG_(out);
var state_41906__$1 = (function (){var statearr_41931 = state_41906;
(statearr_41931[(13)] = inst_41899);

return statearr_41931;
})();
var statearr_41932_43411 = state_41906__$1;
(statearr_41932_43411[(2)] = inst_41900);

(statearr_41932_43411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41907 === (10))){
var inst_41889 = (state_41906[(2)]);
var state_41906__$1 = state_41906;
var statearr_41934_43416 = state_41906__$1;
(statearr_41934_43416[(2)] = inst_41889);

(statearr_41934_43416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41907 === (8))){
var inst_41866 = (state_41906[(7)]);
var inst_41876 = (state_41906[(11)]);
var tmp41930 = inst_41866;
var inst_41866__$1 = tmp41930;
var inst_41867 = inst_41876;
var state_41906__$1 = (function (){var statearr_41935 = state_41906;
(statearr_41935[(7)] = inst_41866__$1);

(statearr_41935[(8)] = inst_41867);

return statearr_41935;
})();
var statearr_41936_43420 = state_41906__$1;
(statearr_41936_43420[(2)] = null);

(statearr_41936_43420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37343__auto__ = null;
var cljs$core$async$state_machine__37343__auto____0 = (function (){
var statearr_41944 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41944[(0)] = cljs$core$async$state_machine__37343__auto__);

(statearr_41944[(1)] = (1));

return statearr_41944;
});
var cljs$core$async$state_machine__37343__auto____1 = (function (state_41906){
while(true){
var ret_value__37344__auto__ = (function (){try{while(true){
var result__37345__auto__ = switch__37342__auto__(state_41906);
if(cljs.core.keyword_identical_QMARK_(result__37345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37345__auto__;
}
break;
}
}catch (e41945){var ex__37346__auto__ = e41945;
var statearr_41951_43422 = state_41906;
(statearr_41951_43422[(2)] = ex__37346__auto__);


if(cljs.core.seq((state_41906[(4)]))){
var statearr_41954_43423 = state_41906;
(statearr_41954_43423[(1)] = cljs.core.first((state_41906[(4)])));

} else {
throw ex__37346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43425 = state_41906;
state_41906 = G__43425;
continue;
} else {
return ret_value__37344__auto__;
}
break;
}
});
cljs$core$async$state_machine__37343__auto__ = function(state_41906){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37343__auto____1.call(this,state_41906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37343__auto____0;
cljs$core$async$state_machine__37343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37343__auto____1;
return cljs$core$async$state_machine__37343__auto__;
})()
})();
var state__37911__auto__ = (function (){var statearr_41964 = f__37910__auto__();
(statearr_41964[(6)] = c__37909__auto___43363);

return statearr_41964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37911__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__41969 = arguments.length;
switch (G__41969) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37909__auto___43428 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37910__auto__ = (function (){var switch__37342__auto__ = (function (state_42026){
var state_val_42027 = (state_42026[(1)]);
if((state_val_42027 === (7))){
var inst_42020 = (state_42026[(2)]);
var state_42026__$1 = state_42026;
var statearr_42034_43429 = state_42026__$1;
(statearr_42034_43429[(2)] = inst_42020);

(statearr_42034_43429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42027 === (1))){
var inst_41979 = [];
var inst_41980 = inst_41979;
var inst_41981 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_42026__$1 = (function (){var statearr_42035 = state_42026;
(statearr_42035[(7)] = inst_41980);

(statearr_42035[(8)] = inst_41981);

return statearr_42035;
})();
var statearr_42038_43430 = state_42026__$1;
(statearr_42038_43430[(2)] = null);

(statearr_42038_43430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42027 === (4))){
var inst_41984 = (state_42026[(9)]);
var inst_41984__$1 = (state_42026[(2)]);
var inst_41986 = (inst_41984__$1 == null);
var inst_41987 = cljs.core.not(inst_41986);
var state_42026__$1 = (function (){var statearr_42040 = state_42026;
(statearr_42040[(9)] = inst_41984__$1);

return statearr_42040;
})();
if(inst_41987){
var statearr_42041_43431 = state_42026__$1;
(statearr_42041_43431[(1)] = (5));

} else {
var statearr_42043_43432 = state_42026__$1;
(statearr_42043_43432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42027 === (15))){
var inst_42014 = (state_42026[(2)]);
var state_42026__$1 = state_42026;
var statearr_42047_43433 = state_42026__$1;
(statearr_42047_43433[(2)] = inst_42014);

(statearr_42047_43433[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42027 === (13))){
var state_42026__$1 = state_42026;
var statearr_42048_43434 = state_42026__$1;
(statearr_42048_43434[(2)] = null);

(statearr_42048_43434[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42027 === (6))){
var inst_41980 = (state_42026[(7)]);
var inst_42009 = inst_41980.length;
var inst_42010 = (inst_42009 > (0));
var state_42026__$1 = state_42026;
if(cljs.core.truth_(inst_42010)){
var statearr_42049_43438 = state_42026__$1;
(statearr_42049_43438[(1)] = (12));

} else {
var statearr_42052_43440 = state_42026__$1;
(statearr_42052_43440[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42027 === (3))){
var inst_42022 = (state_42026[(2)]);
var state_42026__$1 = state_42026;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42026__$1,inst_42022);
} else {
if((state_val_42027 === (12))){
var inst_41980 = (state_42026[(7)]);
var inst_42012 = cljs.core.vec(inst_41980);
var state_42026__$1 = state_42026;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42026__$1,(15),out,inst_42012);
} else {
if((state_val_42027 === (2))){
var state_42026__$1 = state_42026;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42026__$1,(4),ch);
} else {
if((state_val_42027 === (11))){
var inst_41990 = (state_42026[(10)]);
var inst_41984 = (state_42026[(9)]);
var inst_42002 = (state_42026[(2)]);
var inst_42003 = [];
var inst_42004 = inst_42003.push(inst_41984);
var inst_41980 = inst_42003;
var inst_41981 = inst_41990;
var state_42026__$1 = (function (){var statearr_42075 = state_42026;
(statearr_42075[(11)] = inst_42002);

(statearr_42075[(7)] = inst_41980);

(statearr_42075[(8)] = inst_41981);

(statearr_42075[(12)] = inst_42004);

return statearr_42075;
})();
var statearr_42076_43442 = state_42026__$1;
(statearr_42076_43442[(2)] = null);

(statearr_42076_43442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42027 === (9))){
var inst_41980 = (state_42026[(7)]);
var inst_42000 = cljs.core.vec(inst_41980);
var state_42026__$1 = state_42026;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42026__$1,(11),out,inst_42000);
} else {
if((state_val_42027 === (5))){
var inst_41990 = (state_42026[(10)]);
var inst_41981 = (state_42026[(8)]);
var inst_41984 = (state_42026[(9)]);
var inst_41990__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_41984) : f.call(null,inst_41984));
var inst_41992 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41990__$1,inst_41981);
var inst_41993 = cljs.core.keyword_identical_QMARK_(inst_41981,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_41994 = ((inst_41992) || (inst_41993));
var state_42026__$1 = (function (){var statearr_42082 = state_42026;
(statearr_42082[(10)] = inst_41990__$1);

return statearr_42082;
})();
if(cljs.core.truth_(inst_41994)){
var statearr_42083_43443 = state_42026__$1;
(statearr_42083_43443[(1)] = (8));

} else {
var statearr_42084_43444 = state_42026__$1;
(statearr_42084_43444[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42027 === (14))){
var inst_42017 = (state_42026[(2)]);
var inst_42018 = cljs.core.async.close_BANG_(out);
var state_42026__$1 = (function (){var statearr_42089 = state_42026;
(statearr_42089[(13)] = inst_42017);

return statearr_42089;
})();
var statearr_42090_43445 = state_42026__$1;
(statearr_42090_43445[(2)] = inst_42018);

(statearr_42090_43445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42027 === (10))){
var inst_42007 = (state_42026[(2)]);
var state_42026__$1 = state_42026;
var statearr_42091_43461 = state_42026__$1;
(statearr_42091_43461[(2)] = inst_42007);

(statearr_42091_43461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42027 === (8))){
var inst_41980 = (state_42026[(7)]);
var inst_41990 = (state_42026[(10)]);
var inst_41984 = (state_42026[(9)]);
var inst_41997 = inst_41980.push(inst_41984);
var tmp42085 = inst_41980;
var inst_41980__$1 = tmp42085;
var inst_41981 = inst_41990;
var state_42026__$1 = (function (){var statearr_42106 = state_42026;
(statearr_42106[(7)] = inst_41980__$1);

(statearr_42106[(14)] = inst_41997);

(statearr_42106[(8)] = inst_41981);

return statearr_42106;
})();
var statearr_42107_43481 = state_42026__$1;
(statearr_42107_43481[(2)] = null);

(statearr_42107_43481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37343__auto__ = null;
var cljs$core$async$state_machine__37343__auto____0 = (function (){
var statearr_42113 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42113[(0)] = cljs$core$async$state_machine__37343__auto__);

(statearr_42113[(1)] = (1));

return statearr_42113;
});
var cljs$core$async$state_machine__37343__auto____1 = (function (state_42026){
while(true){
var ret_value__37344__auto__ = (function (){try{while(true){
var result__37345__auto__ = switch__37342__auto__(state_42026);
if(cljs.core.keyword_identical_QMARK_(result__37345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37345__auto__;
}
break;
}
}catch (e42114){var ex__37346__auto__ = e42114;
var statearr_42115_43495 = state_42026;
(statearr_42115_43495[(2)] = ex__37346__auto__);


if(cljs.core.seq((state_42026[(4)]))){
var statearr_42116_43497 = state_42026;
(statearr_42116_43497[(1)] = cljs.core.first((state_42026[(4)])));

} else {
throw ex__37346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43499 = state_42026;
state_42026 = G__43499;
continue;
} else {
return ret_value__37344__auto__;
}
break;
}
});
cljs$core$async$state_machine__37343__auto__ = function(state_42026){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37343__auto____1.call(this,state_42026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37343__auto____0;
cljs$core$async$state_machine__37343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37343__auto____1;
return cljs$core$async$state_machine__37343__auto__;
})()
})();
var state__37911__auto__ = (function (){var statearr_42124 = f__37910__auto__();
(statearr_42124[(6)] = c__37909__auto___43428);

return statearr_42124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37911__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
