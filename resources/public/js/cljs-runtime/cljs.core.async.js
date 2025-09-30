goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__28821 = arguments.length;
switch (G__28821) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28832 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28832 = (function (f,blockable,meta28833){
this.f = f;
this.blockable = blockable;
this.meta28833 = meta28833;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28834,meta28833__$1){
var self__ = this;
var _28834__$1 = this;
return (new cljs.core.async.t_cljs$core$async28832(self__.f,self__.blockable,meta28833__$1));
}));

(cljs.core.async.t_cljs$core$async28832.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28834){
var self__ = this;
var _28834__$1 = this;
return self__.meta28833;
}));

(cljs.core.async.t_cljs$core$async28832.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28832.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28832.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async28832.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async28832.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28833","meta28833",991346548,null)], null);
}));

(cljs.core.async.t_cljs$core$async28832.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28832.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28832");

(cljs.core.async.t_cljs$core$async28832.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async28832");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28832.
 */
cljs.core.async.__GT_t_cljs$core$async28832 = (function cljs$core$async$__GT_t_cljs$core$async28832(f__$1,blockable__$1,meta28833){
return (new cljs.core.async.t_cljs$core$async28832(f__$1,blockable__$1,meta28833));
});

}

return (new cljs.core.async.t_cljs$core$async28832(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28898 = arguments.length;
switch (G__28898) {
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
var G__28909 = arguments.length;
switch (G__28909) {
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
var G__28951 = arguments.length;
switch (G__28951) {
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
var val_32512 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32512) : fn1.call(null,val_32512));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32512) : fn1.call(null,val_32512));
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
var G__28999 = arguments.length;
switch (G__28999) {
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
var n__4613__auto___32527 = n;
var x_32529 = (0);
while(true){
if((x_32529 < n__4613__auto___32527)){
(a[x_32529] = x_32529);

var G__32530 = (x_32529 + (1));
x_32529 = G__32530;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29033 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29033 = (function (flag,meta29034){
this.flag = flag;
this.meta29034 = meta29034;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29035,meta29034__$1){
var self__ = this;
var _29035__$1 = this;
return (new cljs.core.async.t_cljs$core$async29033(self__.flag,meta29034__$1));
}));

(cljs.core.async.t_cljs$core$async29033.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29035){
var self__ = this;
var _29035__$1 = this;
return self__.meta29034;
}));

(cljs.core.async.t_cljs$core$async29033.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29033.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29033.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29033.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29033.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29034","meta29034",353097067,null)], null);
}));

(cljs.core.async.t_cljs$core$async29033.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29033.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29033");

(cljs.core.async.t_cljs$core$async29033.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29033");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29033.
 */
cljs.core.async.__GT_t_cljs$core$async29033 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29033(flag__$1,meta29034){
return (new cljs.core.async.t_cljs$core$async29033(flag__$1,meta29034));
});

}

return (new cljs.core.async.t_cljs$core$async29033(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29062 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29062 = (function (flag,cb,meta29063){
this.flag = flag;
this.cb = cb;
this.meta29063 = meta29063;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29064,meta29063__$1){
var self__ = this;
var _29064__$1 = this;
return (new cljs.core.async.t_cljs$core$async29062(self__.flag,self__.cb,meta29063__$1));
}));

(cljs.core.async.t_cljs$core$async29062.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29064){
var self__ = this;
var _29064__$1 = this;
return self__.meta29063;
}));

(cljs.core.async.t_cljs$core$async29062.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29062.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29062.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29062.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29062.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29063","meta29063",151087499,null)], null);
}));

(cljs.core.async.t_cljs$core$async29062.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29062.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29062");

(cljs.core.async.t_cljs$core$async29062.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29062");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29062.
 */
cljs.core.async.__GT_t_cljs$core$async29062 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29062(flag__$1,cb__$1,meta29063){
return (new cljs.core.async.t_cljs$core$async29062(flag__$1,cb__$1,meta29063));
});

}

return (new cljs.core.async.t_cljs$core$async29062(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__29069_SHARP_){
var G__29073 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29069_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29073) : fret.call(null,G__29073));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29070_SHARP_){
var G__29074 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29070_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29074) : fret.call(null,G__29074));
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
var G__32555 = (i + (1));
i = G__32555;
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
var len__4736__auto___32561 = arguments.length;
var i__4737__auto___32562 = (0);
while(true){
if((i__4737__auto___32562 < len__4736__auto___32561)){
args__4742__auto__.push((arguments[i__4737__auto___32562]));

var G__32563 = (i__4737__auto___32562 + (1));
i__4737__auto___32562 = G__32563;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29104){
var map__29105 = p__29104;
var map__29105__$1 = (((((!((map__29105 == null))))?(((((map__29105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29105):map__29105);
var opts = map__29105__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29095){
var G__29097 = cljs.core.first(seq29095);
var seq29095__$1 = cljs.core.next(seq29095);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29097,seq29095__$1);
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
var G__29132 = arguments.length;
switch (G__29132) {
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
var c__28688__auto___32574 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28689__auto__ = (function (){var switch__28032__auto__ = (function (state_29202){
var state_val_29204 = (state_29202[(1)]);
if((state_val_29204 === (7))){
var inst_29190 = (state_29202[(2)]);
var state_29202__$1 = state_29202;
var statearr_29228_32577 = state_29202__$1;
(statearr_29228_32577[(2)] = inst_29190);

(statearr_29228_32577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29204 === (1))){
var state_29202__$1 = state_29202;
var statearr_29239_32578 = state_29202__$1;
(statearr_29239_32578[(2)] = null);

(statearr_29239_32578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29204 === (4))){
var inst_29168 = (state_29202[(7)]);
var inst_29168__$1 = (state_29202[(2)]);
var inst_29174 = (inst_29168__$1 == null);
var state_29202__$1 = (function (){var statearr_29251 = state_29202;
(statearr_29251[(7)] = inst_29168__$1);

return statearr_29251;
})();
if(cljs.core.truth_(inst_29174)){
var statearr_29253_32579 = state_29202__$1;
(statearr_29253_32579[(1)] = (5));

} else {
var statearr_29254_32580 = state_29202__$1;
(statearr_29254_32580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29204 === (13))){
var state_29202__$1 = state_29202;
var statearr_29255_32581 = state_29202__$1;
(statearr_29255_32581[(2)] = null);

(statearr_29255_32581[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29204 === (6))){
var inst_29168 = (state_29202[(7)]);
var state_29202__$1 = state_29202;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29202__$1,(11),to,inst_29168);
} else {
if((state_val_29204 === (3))){
var inst_29192 = (state_29202[(2)]);
var state_29202__$1 = state_29202;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29202__$1,inst_29192);
} else {
if((state_val_29204 === (12))){
var state_29202__$1 = state_29202;
var statearr_29256_32582 = state_29202__$1;
(statearr_29256_32582[(2)] = null);

(statearr_29256_32582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29204 === (2))){
var state_29202__$1 = state_29202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29202__$1,(4),from);
} else {
if((state_val_29204 === (11))){
var inst_29183 = (state_29202[(2)]);
var state_29202__$1 = state_29202;
if(cljs.core.truth_(inst_29183)){
var statearr_29259_32589 = state_29202__$1;
(statearr_29259_32589[(1)] = (12));

} else {
var statearr_29262_32592 = state_29202__$1;
(statearr_29262_32592[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29204 === (9))){
var state_29202__$1 = state_29202;
var statearr_29264_32593 = state_29202__$1;
(statearr_29264_32593[(2)] = null);

(statearr_29264_32593[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29204 === (5))){
var state_29202__$1 = state_29202;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29267_32596 = state_29202__$1;
(statearr_29267_32596[(1)] = (8));

} else {
var statearr_29270_32598 = state_29202__$1;
(statearr_29270_32598[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29204 === (14))){
var inst_29188 = (state_29202[(2)]);
var state_29202__$1 = state_29202;
var statearr_29272_32599 = state_29202__$1;
(statearr_29272_32599[(2)] = inst_29188);

(statearr_29272_32599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29204 === (10))){
var inst_29180 = (state_29202[(2)]);
var state_29202__$1 = state_29202;
var statearr_29273_32604 = state_29202__$1;
(statearr_29273_32604[(2)] = inst_29180);

(statearr_29273_32604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29204 === (8))){
var inst_29177 = cljs.core.async.close_BANG_(to);
var state_29202__$1 = state_29202;
var statearr_29274_32606 = state_29202__$1;
(statearr_29274_32606[(2)] = inst_29177);

(statearr_29274_32606[(1)] = (10));


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
var cljs$core$async$state_machine__28033__auto__ = null;
var cljs$core$async$state_machine__28033__auto____0 = (function (){
var statearr_29280 = [null,null,null,null,null,null,null,null];
(statearr_29280[(0)] = cljs$core$async$state_machine__28033__auto__);

(statearr_29280[(1)] = (1));

return statearr_29280;
});
var cljs$core$async$state_machine__28033__auto____1 = (function (state_29202){
while(true){
var ret_value__28034__auto__ = (function (){try{while(true){
var result__28035__auto__ = switch__28032__auto__(state_29202);
if(cljs.core.keyword_identical_QMARK_(result__28035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28035__auto__;
}
break;
}
}catch (e29281){var ex__28036__auto__ = e29281;
var statearr_29282_32619 = state_29202;
(statearr_29282_32619[(2)] = ex__28036__auto__);


if(cljs.core.seq((state_29202[(4)]))){
var statearr_29283_32622 = state_29202;
(statearr_29283_32622[(1)] = cljs.core.first((state_29202[(4)])));

} else {
throw ex__28036__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32627 = state_29202;
state_29202 = G__32627;
continue;
} else {
return ret_value__28034__auto__;
}
break;
}
});
cljs$core$async$state_machine__28033__auto__ = function(state_29202){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28033__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28033__auto____1.call(this,state_29202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28033__auto____0;
cljs$core$async$state_machine__28033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28033__auto____1;
return cljs$core$async$state_machine__28033__auto__;
})()
})();
var state__28690__auto__ = (function (){var statearr_29291 = f__28689__auto__();
(statearr_29291[(6)] = c__28688__auto___32574);

return statearr_29291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28690__auto__);
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
var process = (function (p__29316){
var vec__29329 = p__29316;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29329,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29329,(1),null);
var job = vec__29329;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__28688__auto___32646 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28689__auto__ = (function (){var switch__28032__auto__ = (function (state_29338){
var state_val_29339 = (state_29338[(1)]);
if((state_val_29339 === (1))){
var state_29338__$1 = state_29338;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29338__$1,(2),res,v);
} else {
if((state_val_29339 === (2))){
var inst_29335 = (state_29338[(2)]);
var inst_29336 = cljs.core.async.close_BANG_(res);
var state_29338__$1 = (function (){var statearr_29344 = state_29338;
(statearr_29344[(7)] = inst_29335);

return statearr_29344;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29338__$1,inst_29336);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28033__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28033__auto____0 = (function (){
var statearr_29347 = [null,null,null,null,null,null,null,null];
(statearr_29347[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28033__auto__);

(statearr_29347[(1)] = (1));

return statearr_29347;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28033__auto____1 = (function (state_29338){
while(true){
var ret_value__28034__auto__ = (function (){try{while(true){
var result__28035__auto__ = switch__28032__auto__(state_29338);
if(cljs.core.keyword_identical_QMARK_(result__28035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28035__auto__;
}
break;
}
}catch (e29349){var ex__28036__auto__ = e29349;
var statearr_29350_32659 = state_29338;
(statearr_29350_32659[(2)] = ex__28036__auto__);


if(cljs.core.seq((state_29338[(4)]))){
var statearr_29352_32660 = state_29338;
(statearr_29352_32660[(1)] = cljs.core.first((state_29338[(4)])));

} else {
throw ex__28036__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32663 = state_29338;
state_29338 = G__32663;
continue;
} else {
return ret_value__28034__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28033__auto__ = function(state_29338){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28033__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28033__auto____1.call(this,state_29338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28033__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28033__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28033__auto__;
})()
})();
var state__28690__auto__ = (function (){var statearr_29355 = f__28689__auto__();
(statearr_29355[(6)] = c__28688__auto___32646);

return statearr_29355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28690__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__29359){
var vec__29360 = p__29359;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29360,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29360,(1),null);
var job = vec__29360;
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
var n__4613__auto___32674 = n;
var __32675 = (0);
while(true){
if((__32675 < n__4613__auto___32674)){
var G__29367_32677 = type;
var G__29367_32678__$1 = (((G__29367_32677 instanceof cljs.core.Keyword))?G__29367_32677.fqn:null);
switch (G__29367_32678__$1) {
case "compute":
var c__28688__auto___32688 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32675,c__28688__auto___32688,G__29367_32677,G__29367_32678__$1,n__4613__auto___32674,jobs,results,process,async){
return (function (){
var f__28689__auto__ = (function (){var switch__28032__auto__ = ((function (__32675,c__28688__auto___32688,G__29367_32677,G__29367_32678__$1,n__4613__auto___32674,jobs,results,process,async){
return (function (state_29388){
var state_val_29389 = (state_29388[(1)]);
if((state_val_29389 === (1))){
var state_29388__$1 = state_29388;
var statearr_29391_32691 = state_29388__$1;
(statearr_29391_32691[(2)] = null);

(statearr_29391_32691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29389 === (2))){
var state_29388__$1 = state_29388;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29388__$1,(4),jobs);
} else {
if((state_val_29389 === (3))){
var inst_29386 = (state_29388[(2)]);
var state_29388__$1 = state_29388;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29388__$1,inst_29386);
} else {
if((state_val_29389 === (4))){
var inst_29375 = (state_29388[(2)]);
var inst_29378 = process(inst_29375);
var state_29388__$1 = state_29388;
if(cljs.core.truth_(inst_29378)){
var statearr_29398_32694 = state_29388__$1;
(statearr_29398_32694[(1)] = (5));

} else {
var statearr_29400_32695 = state_29388__$1;
(statearr_29400_32695[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29389 === (5))){
var state_29388__$1 = state_29388;
var statearr_29407_32698 = state_29388__$1;
(statearr_29407_32698[(2)] = null);

(statearr_29407_32698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29389 === (6))){
var state_29388__$1 = state_29388;
var statearr_29408_32700 = state_29388__$1;
(statearr_29408_32700[(2)] = null);

(statearr_29408_32700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29389 === (7))){
var inst_29384 = (state_29388[(2)]);
var state_29388__$1 = state_29388;
var statearr_29415_32703 = state_29388__$1;
(statearr_29415_32703[(2)] = inst_29384);

(statearr_29415_32703[(1)] = (3));


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
});})(__32675,c__28688__auto___32688,G__29367_32677,G__29367_32678__$1,n__4613__auto___32674,jobs,results,process,async))
;
return ((function (__32675,switch__28032__auto__,c__28688__auto___32688,G__29367_32677,G__29367_32678__$1,n__4613__auto___32674,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28033__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28033__auto____0 = (function (){
var statearr_29416 = [null,null,null,null,null,null,null];
(statearr_29416[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28033__auto__);

(statearr_29416[(1)] = (1));

return statearr_29416;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28033__auto____1 = (function (state_29388){
while(true){
var ret_value__28034__auto__ = (function (){try{while(true){
var result__28035__auto__ = switch__28032__auto__(state_29388);
if(cljs.core.keyword_identical_QMARK_(result__28035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28035__auto__;
}
break;
}
}catch (e29418){var ex__28036__auto__ = e29418;
var statearr_29420_32707 = state_29388;
(statearr_29420_32707[(2)] = ex__28036__auto__);


if(cljs.core.seq((state_29388[(4)]))){
var statearr_29422_32708 = state_29388;
(statearr_29422_32708[(1)] = cljs.core.first((state_29388[(4)])));

} else {
throw ex__28036__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32710 = state_29388;
state_29388 = G__32710;
continue;
} else {
return ret_value__28034__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28033__auto__ = function(state_29388){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28033__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28033__auto____1.call(this,state_29388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28033__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28033__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28033__auto__;
})()
;})(__32675,switch__28032__auto__,c__28688__auto___32688,G__29367_32677,G__29367_32678__$1,n__4613__auto___32674,jobs,results,process,async))
})();
var state__28690__auto__ = (function (){var statearr_29426 = f__28689__auto__();
(statearr_29426[(6)] = c__28688__auto___32688);

return statearr_29426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28690__auto__);
});})(__32675,c__28688__auto___32688,G__29367_32677,G__29367_32678__$1,n__4613__auto___32674,jobs,results,process,async))
);


break;
case "async":
var c__28688__auto___32715 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32675,c__28688__auto___32715,G__29367_32677,G__29367_32678__$1,n__4613__auto___32674,jobs,results,process,async){
return (function (){
var f__28689__auto__ = (function (){var switch__28032__auto__ = ((function (__32675,c__28688__auto___32715,G__29367_32677,G__29367_32678__$1,n__4613__auto___32674,jobs,results,process,async){
return (function (state_29443){
var state_val_29444 = (state_29443[(1)]);
if((state_val_29444 === (1))){
var state_29443__$1 = state_29443;
var statearr_29450_32719 = state_29443__$1;
(statearr_29450_32719[(2)] = null);

(statearr_29450_32719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29444 === (2))){
var state_29443__$1 = state_29443;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29443__$1,(4),jobs);
} else {
if((state_val_29444 === (3))){
var inst_29441 = (state_29443[(2)]);
var state_29443__$1 = state_29443;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29443__$1,inst_29441);
} else {
if((state_val_29444 === (4))){
var inst_29433 = (state_29443[(2)]);
var inst_29434 = async(inst_29433);
var state_29443__$1 = state_29443;
if(cljs.core.truth_(inst_29434)){
var statearr_29457_32720 = state_29443__$1;
(statearr_29457_32720[(1)] = (5));

} else {
var statearr_29458_32723 = state_29443__$1;
(statearr_29458_32723[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29444 === (5))){
var state_29443__$1 = state_29443;
var statearr_29460_32725 = state_29443__$1;
(statearr_29460_32725[(2)] = null);

(statearr_29460_32725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29444 === (6))){
var state_29443__$1 = state_29443;
var statearr_29463_32727 = state_29443__$1;
(statearr_29463_32727[(2)] = null);

(statearr_29463_32727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29444 === (7))){
var inst_29439 = (state_29443[(2)]);
var state_29443__$1 = state_29443;
var statearr_29466_32729 = state_29443__$1;
(statearr_29466_32729[(2)] = inst_29439);

(statearr_29466_32729[(1)] = (3));


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
});})(__32675,c__28688__auto___32715,G__29367_32677,G__29367_32678__$1,n__4613__auto___32674,jobs,results,process,async))
;
return ((function (__32675,switch__28032__auto__,c__28688__auto___32715,G__29367_32677,G__29367_32678__$1,n__4613__auto___32674,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28033__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28033__auto____0 = (function (){
var statearr_29469 = [null,null,null,null,null,null,null];
(statearr_29469[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28033__auto__);

(statearr_29469[(1)] = (1));

return statearr_29469;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28033__auto____1 = (function (state_29443){
while(true){
var ret_value__28034__auto__ = (function (){try{while(true){
var result__28035__auto__ = switch__28032__auto__(state_29443);
if(cljs.core.keyword_identical_QMARK_(result__28035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28035__auto__;
}
break;
}
}catch (e29471){var ex__28036__auto__ = e29471;
var statearr_29473_32735 = state_29443;
(statearr_29473_32735[(2)] = ex__28036__auto__);


if(cljs.core.seq((state_29443[(4)]))){
var statearr_29474_32736 = state_29443;
(statearr_29474_32736[(1)] = cljs.core.first((state_29443[(4)])));

} else {
throw ex__28036__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32739 = state_29443;
state_29443 = G__32739;
continue;
} else {
return ret_value__28034__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28033__auto__ = function(state_29443){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28033__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28033__auto____1.call(this,state_29443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28033__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28033__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28033__auto__;
})()
;})(__32675,switch__28032__auto__,c__28688__auto___32715,G__29367_32677,G__29367_32678__$1,n__4613__auto___32674,jobs,results,process,async))
})();
var state__28690__auto__ = (function (){var statearr_29479 = f__28689__auto__();
(statearr_29479[(6)] = c__28688__auto___32715);

return statearr_29479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28690__auto__);
});})(__32675,c__28688__auto___32715,G__29367_32677,G__29367_32678__$1,n__4613__auto___32674,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29367_32678__$1)].join('')));

}

var G__32743 = (__32675 + (1));
__32675 = G__32743;
continue;
} else {
}
break;
}

var c__28688__auto___32744 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28689__auto__ = (function (){var switch__28032__auto__ = (function (state_29516){
var state_val_29517 = (state_29516[(1)]);
if((state_val_29517 === (7))){
var inst_29511 = (state_29516[(2)]);
var state_29516__$1 = state_29516;
var statearr_29530_32746 = state_29516__$1;
(statearr_29530_32746[(2)] = inst_29511);

(statearr_29530_32746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (1))){
var state_29516__$1 = state_29516;
var statearr_29531_32747 = state_29516__$1;
(statearr_29531_32747[(2)] = null);

(statearr_29531_32747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (4))){
var inst_29489 = (state_29516[(7)]);
var inst_29489__$1 = (state_29516[(2)]);
var inst_29490 = (inst_29489__$1 == null);
var state_29516__$1 = (function (){var statearr_29533 = state_29516;
(statearr_29533[(7)] = inst_29489__$1);

return statearr_29533;
})();
if(cljs.core.truth_(inst_29490)){
var statearr_29535_32749 = state_29516__$1;
(statearr_29535_32749[(1)] = (5));

} else {
var statearr_29537_32754 = state_29516__$1;
(statearr_29537_32754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (6))){
var inst_29489 = (state_29516[(7)]);
var inst_29496 = (state_29516[(8)]);
var inst_29496__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_29501 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29503 = [inst_29489,inst_29496__$1];
var inst_29504 = (new cljs.core.PersistentVector(null,2,(5),inst_29501,inst_29503,null));
var state_29516__$1 = (function (){var statearr_29544 = state_29516;
(statearr_29544[(8)] = inst_29496__$1);

return statearr_29544;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29516__$1,(8),jobs,inst_29504);
} else {
if((state_val_29517 === (3))){
var inst_29514 = (state_29516[(2)]);
var state_29516__$1 = state_29516;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29516__$1,inst_29514);
} else {
if((state_val_29517 === (2))){
var state_29516__$1 = state_29516;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29516__$1,(4),from);
} else {
if((state_val_29517 === (9))){
var inst_29508 = (state_29516[(2)]);
var state_29516__$1 = (function (){var statearr_29552 = state_29516;
(statearr_29552[(9)] = inst_29508);

return statearr_29552;
})();
var statearr_29554_32764 = state_29516__$1;
(statearr_29554_32764[(2)] = null);

(statearr_29554_32764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (5))){
var inst_29494 = cljs.core.async.close_BANG_(jobs);
var state_29516__$1 = state_29516;
var statearr_29556_32766 = state_29516__$1;
(statearr_29556_32766[(2)] = inst_29494);

(statearr_29556_32766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (8))){
var inst_29496 = (state_29516[(8)]);
var inst_29506 = (state_29516[(2)]);
var state_29516__$1 = (function (){var statearr_29560 = state_29516;
(statearr_29560[(10)] = inst_29506);

return statearr_29560;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29516__$1,(9),results,inst_29496);
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
var cljs$core$async$pipeline_STAR__$_state_machine__28033__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28033__auto____0 = (function (){
var statearr_29562 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29562[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28033__auto__);

(statearr_29562[(1)] = (1));

return statearr_29562;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28033__auto____1 = (function (state_29516){
while(true){
var ret_value__28034__auto__ = (function (){try{while(true){
var result__28035__auto__ = switch__28032__auto__(state_29516);
if(cljs.core.keyword_identical_QMARK_(result__28035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28035__auto__;
}
break;
}
}catch (e29563){var ex__28036__auto__ = e29563;
var statearr_29565_32781 = state_29516;
(statearr_29565_32781[(2)] = ex__28036__auto__);


if(cljs.core.seq((state_29516[(4)]))){
var statearr_29566_32782 = state_29516;
(statearr_29566_32782[(1)] = cljs.core.first((state_29516[(4)])));

} else {
throw ex__28036__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32786 = state_29516;
state_29516 = G__32786;
continue;
} else {
return ret_value__28034__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28033__auto__ = function(state_29516){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28033__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28033__auto____1.call(this,state_29516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28033__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28033__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28033__auto__;
})()
})();
var state__28690__auto__ = (function (){var statearr_29569 = f__28689__auto__();
(statearr_29569[(6)] = c__28688__auto___32744);

return statearr_29569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28690__auto__);
}));


var c__28688__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28689__auto__ = (function (){var switch__28032__auto__ = (function (state_29616){
var state_val_29617 = (state_29616[(1)]);
if((state_val_29617 === (7))){
var inst_29612 = (state_29616[(2)]);
var state_29616__$1 = state_29616;
var statearr_29624_32795 = state_29616__$1;
(statearr_29624_32795[(2)] = inst_29612);

(statearr_29624_32795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29617 === (20))){
var state_29616__$1 = state_29616;
var statearr_29625_32796 = state_29616__$1;
(statearr_29625_32796[(2)] = null);

(statearr_29625_32796[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29617 === (1))){
var state_29616__$1 = state_29616;
var statearr_29627_32798 = state_29616__$1;
(statearr_29627_32798[(2)] = null);

(statearr_29627_32798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29617 === (4))){
var inst_29579 = (state_29616[(7)]);
var inst_29579__$1 = (state_29616[(2)]);
var inst_29581 = (inst_29579__$1 == null);
var state_29616__$1 = (function (){var statearr_29630 = state_29616;
(statearr_29630[(7)] = inst_29579__$1);

return statearr_29630;
})();
if(cljs.core.truth_(inst_29581)){
var statearr_29631_32806 = state_29616__$1;
(statearr_29631_32806[(1)] = (5));

} else {
var statearr_29632_32807 = state_29616__$1;
(statearr_29632_32807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29617 === (15))){
var inst_29594 = (state_29616[(8)]);
var state_29616__$1 = state_29616;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29616__$1,(18),to,inst_29594);
} else {
if((state_val_29617 === (21))){
var inst_29607 = (state_29616[(2)]);
var state_29616__$1 = state_29616;
var statearr_29639_32810 = state_29616__$1;
(statearr_29639_32810[(2)] = inst_29607);

(statearr_29639_32810[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29617 === (13))){
var inst_29609 = (state_29616[(2)]);
var state_29616__$1 = (function (){var statearr_29643 = state_29616;
(statearr_29643[(9)] = inst_29609);

return statearr_29643;
})();
var statearr_29646_32811 = state_29616__$1;
(statearr_29646_32811[(2)] = null);

(statearr_29646_32811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29617 === (6))){
var inst_29579 = (state_29616[(7)]);
var state_29616__$1 = state_29616;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29616__$1,(11),inst_29579);
} else {
if((state_val_29617 === (17))){
var inst_29602 = (state_29616[(2)]);
var state_29616__$1 = state_29616;
if(cljs.core.truth_(inst_29602)){
var statearr_29647_32818 = state_29616__$1;
(statearr_29647_32818[(1)] = (19));

} else {
var statearr_29652_32819 = state_29616__$1;
(statearr_29652_32819[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29617 === (3))){
var inst_29614 = (state_29616[(2)]);
var state_29616__$1 = state_29616;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29616__$1,inst_29614);
} else {
if((state_val_29617 === (12))){
var inst_29590 = (state_29616[(10)]);
var state_29616__$1 = state_29616;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29616__$1,(14),inst_29590);
} else {
if((state_val_29617 === (2))){
var state_29616__$1 = state_29616;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29616__$1,(4),results);
} else {
if((state_val_29617 === (19))){
var state_29616__$1 = state_29616;
var statearr_29654_32820 = state_29616__$1;
(statearr_29654_32820[(2)] = null);

(statearr_29654_32820[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29617 === (11))){
var inst_29590 = (state_29616[(2)]);
var state_29616__$1 = (function (){var statearr_29661 = state_29616;
(statearr_29661[(10)] = inst_29590);

return statearr_29661;
})();
var statearr_29662_32823 = state_29616__$1;
(statearr_29662_32823[(2)] = null);

(statearr_29662_32823[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29617 === (9))){
var state_29616__$1 = state_29616;
var statearr_29667_32825 = state_29616__$1;
(statearr_29667_32825[(2)] = null);

(statearr_29667_32825[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29617 === (5))){
var state_29616__$1 = state_29616;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29668_32827 = state_29616__$1;
(statearr_29668_32827[(1)] = (8));

} else {
var statearr_29669_32829 = state_29616__$1;
(statearr_29669_32829[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29617 === (14))){
var inst_29594 = (state_29616[(8)]);
var inst_29594__$1 = (state_29616[(2)]);
var inst_29595 = (inst_29594__$1 == null);
var inst_29596 = cljs.core.not(inst_29595);
var state_29616__$1 = (function (){var statearr_29676 = state_29616;
(statearr_29676[(8)] = inst_29594__$1);

return statearr_29676;
})();
if(inst_29596){
var statearr_29677_32836 = state_29616__$1;
(statearr_29677_32836[(1)] = (15));

} else {
var statearr_29678_32838 = state_29616__$1;
(statearr_29678_32838[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29617 === (16))){
var state_29616__$1 = state_29616;
var statearr_29679_32840 = state_29616__$1;
(statearr_29679_32840[(2)] = false);

(statearr_29679_32840[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29617 === (10))){
var inst_29587 = (state_29616[(2)]);
var state_29616__$1 = state_29616;
var statearr_29682_32841 = state_29616__$1;
(statearr_29682_32841[(2)] = inst_29587);

(statearr_29682_32841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29617 === (18))){
var inst_29599 = (state_29616[(2)]);
var state_29616__$1 = state_29616;
var statearr_29683_32843 = state_29616__$1;
(statearr_29683_32843[(2)] = inst_29599);

(statearr_29683_32843[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29617 === (8))){
var inst_29584 = cljs.core.async.close_BANG_(to);
var state_29616__$1 = state_29616;
var statearr_29685_32846 = state_29616__$1;
(statearr_29685_32846[(2)] = inst_29584);

(statearr_29685_32846[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__28033__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28033__auto____0 = (function (){
var statearr_29690 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29690[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28033__auto__);

(statearr_29690[(1)] = (1));

return statearr_29690;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28033__auto____1 = (function (state_29616){
while(true){
var ret_value__28034__auto__ = (function (){try{while(true){
var result__28035__auto__ = switch__28032__auto__(state_29616);
if(cljs.core.keyword_identical_QMARK_(result__28035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28035__auto__;
}
break;
}
}catch (e29692){var ex__28036__auto__ = e29692;
var statearr_29697_32854 = state_29616;
(statearr_29697_32854[(2)] = ex__28036__auto__);


if(cljs.core.seq((state_29616[(4)]))){
var statearr_29698_32856 = state_29616;
(statearr_29698_32856[(1)] = cljs.core.first((state_29616[(4)])));

} else {
throw ex__28036__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32857 = state_29616;
state_29616 = G__32857;
continue;
} else {
return ret_value__28034__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28033__auto__ = function(state_29616){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28033__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28033__auto____1.call(this,state_29616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28033__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28033__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28033__auto__;
})()
})();
var state__28690__auto__ = (function (){var statearr_29700 = f__28689__auto__();
(statearr_29700[(6)] = c__28688__auto__);

return statearr_29700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28690__auto__);
}));

return c__28688__auto__;
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
var G__29704 = arguments.length;
switch (G__29704) {
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
var G__29716 = arguments.length;
switch (G__29716) {
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
var G__29726 = arguments.length;
switch (G__29726) {
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
var c__28688__auto___32895 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28689__auto__ = (function (){var switch__28032__auto__ = (function (state_29765){
var state_val_29766 = (state_29765[(1)]);
if((state_val_29766 === (7))){
var inst_29761 = (state_29765[(2)]);
var state_29765__$1 = state_29765;
var statearr_29775_32898 = state_29765__$1;
(statearr_29775_32898[(2)] = inst_29761);

(statearr_29775_32898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29766 === (1))){
var state_29765__$1 = state_29765;
var statearr_29780_32902 = state_29765__$1;
(statearr_29780_32902[(2)] = null);

(statearr_29780_32902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29766 === (4))){
var inst_29741 = (state_29765[(7)]);
var inst_29741__$1 = (state_29765[(2)]);
var inst_29742 = (inst_29741__$1 == null);
var state_29765__$1 = (function (){var statearr_29781 = state_29765;
(statearr_29781[(7)] = inst_29741__$1);

return statearr_29781;
})();
if(cljs.core.truth_(inst_29742)){
var statearr_29782_32906 = state_29765__$1;
(statearr_29782_32906[(1)] = (5));

} else {
var statearr_29783_32909 = state_29765__$1;
(statearr_29783_32909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29766 === (13))){
var state_29765__$1 = state_29765;
var statearr_29788_32911 = state_29765__$1;
(statearr_29788_32911[(2)] = null);

(statearr_29788_32911[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29766 === (6))){
var inst_29741 = (state_29765[(7)]);
var inst_29748 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29741) : p.call(null,inst_29741));
var state_29765__$1 = state_29765;
if(cljs.core.truth_(inst_29748)){
var statearr_29791_32913 = state_29765__$1;
(statearr_29791_32913[(1)] = (9));

} else {
var statearr_29792_32914 = state_29765__$1;
(statearr_29792_32914[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29766 === (3))){
var inst_29763 = (state_29765[(2)]);
var state_29765__$1 = state_29765;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29765__$1,inst_29763);
} else {
if((state_val_29766 === (12))){
var state_29765__$1 = state_29765;
var statearr_29793_32918 = state_29765__$1;
(statearr_29793_32918[(2)] = null);

(statearr_29793_32918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29766 === (2))){
var state_29765__$1 = state_29765;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29765__$1,(4),ch);
} else {
if((state_val_29766 === (11))){
var inst_29741 = (state_29765[(7)]);
var inst_29752 = (state_29765[(2)]);
var state_29765__$1 = state_29765;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29765__$1,(8),inst_29752,inst_29741);
} else {
if((state_val_29766 === (9))){
var state_29765__$1 = state_29765;
var statearr_29794_32925 = state_29765__$1;
(statearr_29794_32925[(2)] = tc);

(statearr_29794_32925[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29766 === (5))){
var inst_29744 = cljs.core.async.close_BANG_(tc);
var inst_29746 = cljs.core.async.close_BANG_(fc);
var state_29765__$1 = (function (){var statearr_29798 = state_29765;
(statearr_29798[(8)] = inst_29744);

return statearr_29798;
})();
var statearr_29800_32928 = state_29765__$1;
(statearr_29800_32928[(2)] = inst_29746);

(statearr_29800_32928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29766 === (14))){
var inst_29759 = (state_29765[(2)]);
var state_29765__$1 = state_29765;
var statearr_29801_32934 = state_29765__$1;
(statearr_29801_32934[(2)] = inst_29759);

(statearr_29801_32934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29766 === (10))){
var state_29765__$1 = state_29765;
var statearr_29802_32936 = state_29765__$1;
(statearr_29802_32936[(2)] = fc);

(statearr_29802_32936[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29766 === (8))){
var inst_29754 = (state_29765[(2)]);
var state_29765__$1 = state_29765;
if(cljs.core.truth_(inst_29754)){
var statearr_29803_32941 = state_29765__$1;
(statearr_29803_32941[(1)] = (12));

} else {
var statearr_29805_32943 = state_29765__$1;
(statearr_29805_32943[(1)] = (13));

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
var cljs$core$async$state_machine__28033__auto__ = null;
var cljs$core$async$state_machine__28033__auto____0 = (function (){
var statearr_29808 = [null,null,null,null,null,null,null,null,null];
(statearr_29808[(0)] = cljs$core$async$state_machine__28033__auto__);

(statearr_29808[(1)] = (1));

return statearr_29808;
});
var cljs$core$async$state_machine__28033__auto____1 = (function (state_29765){
while(true){
var ret_value__28034__auto__ = (function (){try{while(true){
var result__28035__auto__ = switch__28032__auto__(state_29765);
if(cljs.core.keyword_identical_QMARK_(result__28035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28035__auto__;
}
break;
}
}catch (e29810){var ex__28036__auto__ = e29810;
var statearr_29820_32947 = state_29765;
(statearr_29820_32947[(2)] = ex__28036__auto__);


if(cljs.core.seq((state_29765[(4)]))){
var statearr_29821_32948 = state_29765;
(statearr_29821_32948[(1)] = cljs.core.first((state_29765[(4)])));

} else {
throw ex__28036__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32950 = state_29765;
state_29765 = G__32950;
continue;
} else {
return ret_value__28034__auto__;
}
break;
}
});
cljs$core$async$state_machine__28033__auto__ = function(state_29765){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28033__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28033__auto____1.call(this,state_29765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28033__auto____0;
cljs$core$async$state_machine__28033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28033__auto____1;
return cljs$core$async$state_machine__28033__auto__;
})()
})();
var state__28690__auto__ = (function (){var statearr_29822 = f__28689__auto__();
(statearr_29822[(6)] = c__28688__auto___32895);

return statearr_29822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28690__auto__);
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
var c__28688__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28689__auto__ = (function (){var switch__28032__auto__ = (function (state_29861){
var state_val_29862 = (state_29861[(1)]);
if((state_val_29862 === (7))){
var inst_29857 = (state_29861[(2)]);
var state_29861__$1 = state_29861;
var statearr_29864_32961 = state_29861__$1;
(statearr_29864_32961[(2)] = inst_29857);

(statearr_29864_32961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29862 === (1))){
var inst_29835 = init;
var inst_29836 = inst_29835;
var state_29861__$1 = (function (){var statearr_29865 = state_29861;
(statearr_29865[(7)] = inst_29836);

return statearr_29865;
})();
var statearr_29867_32962 = state_29861__$1;
(statearr_29867_32962[(2)] = null);

(statearr_29867_32962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29862 === (4))){
var inst_29843 = (state_29861[(8)]);
var inst_29843__$1 = (state_29861[(2)]);
var inst_29845 = (inst_29843__$1 == null);
var state_29861__$1 = (function (){var statearr_29869 = state_29861;
(statearr_29869[(8)] = inst_29843__$1);

return statearr_29869;
})();
if(cljs.core.truth_(inst_29845)){
var statearr_29872_32967 = state_29861__$1;
(statearr_29872_32967[(1)] = (5));

} else {
var statearr_29873_32971 = state_29861__$1;
(statearr_29873_32971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29862 === (6))){
var inst_29848 = (state_29861[(9)]);
var inst_29843 = (state_29861[(8)]);
var inst_29836 = (state_29861[(7)]);
var inst_29848__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_29836,inst_29843) : f.call(null,inst_29836,inst_29843));
var inst_29849 = cljs.core.reduced_QMARK_(inst_29848__$1);
var state_29861__$1 = (function (){var statearr_29877 = state_29861;
(statearr_29877[(9)] = inst_29848__$1);

return statearr_29877;
})();
if(inst_29849){
var statearr_29878_32974 = state_29861__$1;
(statearr_29878_32974[(1)] = (8));

} else {
var statearr_29879_32975 = state_29861__$1;
(statearr_29879_32975[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29862 === (3))){
var inst_29859 = (state_29861[(2)]);
var state_29861__$1 = state_29861;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29861__$1,inst_29859);
} else {
if((state_val_29862 === (2))){
var state_29861__$1 = state_29861;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29861__$1,(4),ch);
} else {
if((state_val_29862 === (9))){
var inst_29848 = (state_29861[(9)]);
var inst_29836 = inst_29848;
var state_29861__$1 = (function (){var statearr_29880 = state_29861;
(statearr_29880[(7)] = inst_29836);

return statearr_29880;
})();
var statearr_29882_32983 = state_29861__$1;
(statearr_29882_32983[(2)] = null);

(statearr_29882_32983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29862 === (5))){
var inst_29836 = (state_29861[(7)]);
var state_29861__$1 = state_29861;
var statearr_29883_32984 = state_29861__$1;
(statearr_29883_32984[(2)] = inst_29836);

(statearr_29883_32984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29862 === (10))){
var inst_29855 = (state_29861[(2)]);
var state_29861__$1 = state_29861;
var statearr_29884_32985 = state_29861__$1;
(statearr_29884_32985[(2)] = inst_29855);

(statearr_29884_32985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29862 === (8))){
var inst_29848 = (state_29861[(9)]);
var inst_29851 = cljs.core.deref(inst_29848);
var state_29861__$1 = state_29861;
var statearr_29885_32986 = state_29861__$1;
(statearr_29885_32986[(2)] = inst_29851);

(statearr_29885_32986[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__28033__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28033__auto____0 = (function (){
var statearr_29888 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29888[(0)] = cljs$core$async$reduce_$_state_machine__28033__auto__);

(statearr_29888[(1)] = (1));

return statearr_29888;
});
var cljs$core$async$reduce_$_state_machine__28033__auto____1 = (function (state_29861){
while(true){
var ret_value__28034__auto__ = (function (){try{while(true){
var result__28035__auto__ = switch__28032__auto__(state_29861);
if(cljs.core.keyword_identical_QMARK_(result__28035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28035__auto__;
}
break;
}
}catch (e29889){var ex__28036__auto__ = e29889;
var statearr_29893_32992 = state_29861;
(statearr_29893_32992[(2)] = ex__28036__auto__);


if(cljs.core.seq((state_29861[(4)]))){
var statearr_29897_32993 = state_29861;
(statearr_29897_32993[(1)] = cljs.core.first((state_29861[(4)])));

} else {
throw ex__28036__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32998 = state_29861;
state_29861 = G__32998;
continue;
} else {
return ret_value__28034__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28033__auto__ = function(state_29861){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28033__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28033__auto____1.call(this,state_29861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28033__auto____0;
cljs$core$async$reduce_$_state_machine__28033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28033__auto____1;
return cljs$core$async$reduce_$_state_machine__28033__auto__;
})()
})();
var state__28690__auto__ = (function (){var statearr_29910 = f__28689__auto__();
(statearr_29910[(6)] = c__28688__auto__);

return statearr_29910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28690__auto__);
}));

return c__28688__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__28688__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28689__auto__ = (function (){var switch__28032__auto__ = (function (state_29920){
var state_val_29921 = (state_29920[(1)]);
if((state_val_29921 === (1))){
var inst_29915 = cljs.core.async.reduce(f__$1,init,ch);
var state_29920__$1 = state_29920;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29920__$1,(2),inst_29915);
} else {
if((state_val_29921 === (2))){
var inst_29917 = (state_29920[(2)]);
var inst_29918 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_29917) : f__$1.call(null,inst_29917));
var state_29920__$1 = state_29920;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29920__$1,inst_29918);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__28033__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28033__auto____0 = (function (){
var statearr_29930 = [null,null,null,null,null,null,null];
(statearr_29930[(0)] = cljs$core$async$transduce_$_state_machine__28033__auto__);

(statearr_29930[(1)] = (1));

return statearr_29930;
});
var cljs$core$async$transduce_$_state_machine__28033__auto____1 = (function (state_29920){
while(true){
var ret_value__28034__auto__ = (function (){try{while(true){
var result__28035__auto__ = switch__28032__auto__(state_29920);
if(cljs.core.keyword_identical_QMARK_(result__28035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28035__auto__;
}
break;
}
}catch (e29934){var ex__28036__auto__ = e29934;
var statearr_29936_33022 = state_29920;
(statearr_29936_33022[(2)] = ex__28036__auto__);


if(cljs.core.seq((state_29920[(4)]))){
var statearr_29939_33023 = state_29920;
(statearr_29939_33023[(1)] = cljs.core.first((state_29920[(4)])));

} else {
throw ex__28036__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33026 = state_29920;
state_29920 = G__33026;
continue;
} else {
return ret_value__28034__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28033__auto__ = function(state_29920){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28033__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28033__auto____1.call(this,state_29920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28033__auto____0;
cljs$core$async$transduce_$_state_machine__28033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28033__auto____1;
return cljs$core$async$transduce_$_state_machine__28033__auto__;
})()
})();
var state__28690__auto__ = (function (){var statearr_29945 = f__28689__auto__();
(statearr_29945[(6)] = c__28688__auto__);

return statearr_29945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28690__auto__);
}));

return c__28688__auto__;
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
var G__29953 = arguments.length;
switch (G__29953) {
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
var c__28688__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28689__auto__ = (function (){var switch__28032__auto__ = (function (state_29985){
var state_val_29986 = (state_29985[(1)]);
if((state_val_29986 === (7))){
var inst_29964 = (state_29985[(2)]);
var state_29985__$1 = state_29985;
var statearr_29997_33037 = state_29985__$1;
(statearr_29997_33037[(2)] = inst_29964);

(statearr_29997_33037[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29986 === (1))){
var inst_29958 = cljs.core.seq(coll);
var inst_29959 = inst_29958;
var state_29985__$1 = (function (){var statearr_29999 = state_29985;
(statearr_29999[(7)] = inst_29959);

return statearr_29999;
})();
var statearr_30000_33042 = state_29985__$1;
(statearr_30000_33042[(2)] = null);

(statearr_30000_33042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29986 === (4))){
var inst_29959 = (state_29985[(7)]);
var inst_29962 = cljs.core.first(inst_29959);
var state_29985__$1 = state_29985;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29985__$1,(7),ch,inst_29962);
} else {
if((state_val_29986 === (13))){
var inst_29976 = (state_29985[(2)]);
var state_29985__$1 = state_29985;
var statearr_30001_33046 = state_29985__$1;
(statearr_30001_33046[(2)] = inst_29976);

(statearr_30001_33046[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29986 === (6))){
var inst_29967 = (state_29985[(2)]);
var state_29985__$1 = state_29985;
if(cljs.core.truth_(inst_29967)){
var statearr_30002_33049 = state_29985__$1;
(statearr_30002_33049[(1)] = (8));

} else {
var statearr_30003_33050 = state_29985__$1;
(statearr_30003_33050[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29986 === (3))){
var inst_29980 = (state_29985[(2)]);
var state_29985__$1 = state_29985;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29985__$1,inst_29980);
} else {
if((state_val_29986 === (12))){
var state_29985__$1 = state_29985;
var statearr_30004_33057 = state_29985__$1;
(statearr_30004_33057[(2)] = null);

(statearr_30004_33057[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29986 === (2))){
var inst_29959 = (state_29985[(7)]);
var state_29985__$1 = state_29985;
if(cljs.core.truth_(inst_29959)){
var statearr_30005_33058 = state_29985__$1;
(statearr_30005_33058[(1)] = (4));

} else {
var statearr_30006_33059 = state_29985__$1;
(statearr_30006_33059[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29986 === (11))){
var inst_29973 = cljs.core.async.close_BANG_(ch);
var state_29985__$1 = state_29985;
var statearr_30008_33060 = state_29985__$1;
(statearr_30008_33060[(2)] = inst_29973);

(statearr_30008_33060[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29986 === (9))){
var state_29985__$1 = state_29985;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30009_33061 = state_29985__$1;
(statearr_30009_33061[(1)] = (11));

} else {
var statearr_30010_33062 = state_29985__$1;
(statearr_30010_33062[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29986 === (5))){
var inst_29959 = (state_29985[(7)]);
var state_29985__$1 = state_29985;
var statearr_30013_33064 = state_29985__$1;
(statearr_30013_33064[(2)] = inst_29959);

(statearr_30013_33064[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29986 === (10))){
var inst_29978 = (state_29985[(2)]);
var state_29985__$1 = state_29985;
var statearr_30020_33068 = state_29985__$1;
(statearr_30020_33068[(2)] = inst_29978);

(statearr_30020_33068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29986 === (8))){
var inst_29959 = (state_29985[(7)]);
var inst_29969 = cljs.core.next(inst_29959);
var inst_29959__$1 = inst_29969;
var state_29985__$1 = (function (){var statearr_30021 = state_29985;
(statearr_30021[(7)] = inst_29959__$1);

return statearr_30021;
})();
var statearr_30022_33069 = state_29985__$1;
(statearr_30022_33069[(2)] = null);

(statearr_30022_33069[(1)] = (2));


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
var cljs$core$async$state_machine__28033__auto__ = null;
var cljs$core$async$state_machine__28033__auto____0 = (function (){
var statearr_30028 = [null,null,null,null,null,null,null,null];
(statearr_30028[(0)] = cljs$core$async$state_machine__28033__auto__);

(statearr_30028[(1)] = (1));

return statearr_30028;
});
var cljs$core$async$state_machine__28033__auto____1 = (function (state_29985){
while(true){
var ret_value__28034__auto__ = (function (){try{while(true){
var result__28035__auto__ = switch__28032__auto__(state_29985);
if(cljs.core.keyword_identical_QMARK_(result__28035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28035__auto__;
}
break;
}
}catch (e30029){var ex__28036__auto__ = e30029;
var statearr_30031_33078 = state_29985;
(statearr_30031_33078[(2)] = ex__28036__auto__);


if(cljs.core.seq((state_29985[(4)]))){
var statearr_30033_33079 = state_29985;
(statearr_30033_33079[(1)] = cljs.core.first((state_29985[(4)])));

} else {
throw ex__28036__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33080 = state_29985;
state_29985 = G__33080;
continue;
} else {
return ret_value__28034__auto__;
}
break;
}
});
cljs$core$async$state_machine__28033__auto__ = function(state_29985){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28033__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28033__auto____1.call(this,state_29985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28033__auto____0;
cljs$core$async$state_machine__28033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28033__auto____1;
return cljs$core$async$state_machine__28033__auto__;
})()
})();
var state__28690__auto__ = (function (){var statearr_30038 = f__28689__auto__();
(statearr_30038[(6)] = c__28688__auto__);

return statearr_30038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28690__auto__);
}));

return c__28688__auto__;
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
var G__30045 = arguments.length;
switch (G__30045) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_33093 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_33093(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33096 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_33096(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33105 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_33105(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33109 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_33109(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30096 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30096 = (function (ch,cs,meta30097){
this.ch = ch;
this.cs = cs;
this.meta30097 = meta30097;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30098,meta30097__$1){
var self__ = this;
var _30098__$1 = this;
return (new cljs.core.async.t_cljs$core$async30096(self__.ch,self__.cs,meta30097__$1));
}));

(cljs.core.async.t_cljs$core$async30096.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30098){
var self__ = this;
var _30098__$1 = this;
return self__.meta30097;
}));

(cljs.core.async.t_cljs$core$async30096.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30096.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30096.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30096.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30096.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30096.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30096.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30097","meta30097",-276448642,null)], null);
}));

(cljs.core.async.t_cljs$core$async30096.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30096.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30096");

(cljs.core.async.t_cljs$core$async30096.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30096");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30096.
 */
cljs.core.async.__GT_t_cljs$core$async30096 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30096(ch__$1,cs__$1,meta30097){
return (new cljs.core.async.t_cljs$core$async30096(ch__$1,cs__$1,meta30097));
});

}

return (new cljs.core.async.t_cljs$core$async30096(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28688__auto___33129 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28689__auto__ = (function (){var switch__28032__auto__ = (function (state_30267){
var state_val_30271 = (state_30267[(1)]);
if((state_val_30271 === (7))){
var inst_30257 = (state_30267[(2)]);
var state_30267__$1 = state_30267;
var statearr_30277_33130 = state_30267__$1;
(statearr_30277_33130[(2)] = inst_30257);

(statearr_30277_33130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (20))){
var inst_30153 = (state_30267[(7)]);
var inst_30165 = cljs.core.first(inst_30153);
var inst_30166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30165,(0),null);
var inst_30167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30165,(1),null);
var state_30267__$1 = (function (){var statearr_30281 = state_30267;
(statearr_30281[(8)] = inst_30166);

return statearr_30281;
})();
if(cljs.core.truth_(inst_30167)){
var statearr_30283_33132 = state_30267__$1;
(statearr_30283_33132[(1)] = (22));

} else {
var statearr_30284_33133 = state_30267__$1;
(statearr_30284_33133[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (27))){
var inst_30120 = (state_30267[(9)]);
var inst_30198 = (state_30267[(10)]);
var inst_30203 = (state_30267[(11)]);
var inst_30196 = (state_30267[(12)]);
var inst_30203__$1 = cljs.core._nth(inst_30196,inst_30198);
var inst_30204 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30203__$1,inst_30120,done);
var state_30267__$1 = (function (){var statearr_30291 = state_30267;
(statearr_30291[(11)] = inst_30203__$1);

return statearr_30291;
})();
if(cljs.core.truth_(inst_30204)){
var statearr_30292_33138 = state_30267__$1;
(statearr_30292_33138[(1)] = (30));

} else {
var statearr_30294_33141 = state_30267__$1;
(statearr_30294_33141[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (1))){
var state_30267__$1 = state_30267;
var statearr_30295_33143 = state_30267__$1;
(statearr_30295_33143[(2)] = null);

(statearr_30295_33143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (24))){
var inst_30153 = (state_30267[(7)]);
var inst_30173 = (state_30267[(2)]);
var inst_30174 = cljs.core.next(inst_30153);
var inst_30131 = inst_30174;
var inst_30132 = null;
var inst_30133 = (0);
var inst_30134 = (0);
var state_30267__$1 = (function (){var statearr_30299 = state_30267;
(statearr_30299[(13)] = inst_30173);

(statearr_30299[(14)] = inst_30131);

(statearr_30299[(15)] = inst_30134);

(statearr_30299[(16)] = inst_30133);

(statearr_30299[(17)] = inst_30132);

return statearr_30299;
})();
var statearr_30303_33144 = state_30267__$1;
(statearr_30303_33144[(2)] = null);

(statearr_30303_33144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (39))){
var state_30267__$1 = state_30267;
var statearr_30309_33148 = state_30267__$1;
(statearr_30309_33148[(2)] = null);

(statearr_30309_33148[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (4))){
var inst_30120 = (state_30267[(9)]);
var inst_30120__$1 = (state_30267[(2)]);
var inst_30121 = (inst_30120__$1 == null);
var state_30267__$1 = (function (){var statearr_30312 = state_30267;
(statearr_30312[(9)] = inst_30120__$1);

return statearr_30312;
})();
if(cljs.core.truth_(inst_30121)){
var statearr_30313_33150 = state_30267__$1;
(statearr_30313_33150[(1)] = (5));

} else {
var statearr_30316_33151 = state_30267__$1;
(statearr_30316_33151[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (15))){
var inst_30131 = (state_30267[(14)]);
var inst_30134 = (state_30267[(15)]);
var inst_30133 = (state_30267[(16)]);
var inst_30132 = (state_30267[(17)]);
var inst_30149 = (state_30267[(2)]);
var inst_30150 = (inst_30134 + (1));
var tmp30305 = inst_30131;
var tmp30306 = inst_30133;
var tmp30307 = inst_30132;
var inst_30131__$1 = tmp30305;
var inst_30132__$1 = tmp30307;
var inst_30133__$1 = tmp30306;
var inst_30134__$1 = inst_30150;
var state_30267__$1 = (function (){var statearr_30324 = state_30267;
(statearr_30324[(18)] = inst_30149);

(statearr_30324[(14)] = inst_30131__$1);

(statearr_30324[(15)] = inst_30134__$1);

(statearr_30324[(16)] = inst_30133__$1);

(statearr_30324[(17)] = inst_30132__$1);

return statearr_30324;
})();
var statearr_30325_33154 = state_30267__$1;
(statearr_30325_33154[(2)] = null);

(statearr_30325_33154[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (21))){
var inst_30177 = (state_30267[(2)]);
var state_30267__$1 = state_30267;
var statearr_30332_33155 = state_30267__$1;
(statearr_30332_33155[(2)] = inst_30177);

(statearr_30332_33155[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (31))){
var inst_30203 = (state_30267[(11)]);
var inst_30208 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30203);
var state_30267__$1 = state_30267;
var statearr_30336_33156 = state_30267__$1;
(statearr_30336_33156[(2)] = inst_30208);

(statearr_30336_33156[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (32))){
var inst_30197 = (state_30267[(19)]);
var inst_30198 = (state_30267[(10)]);
var inst_30196 = (state_30267[(12)]);
var inst_30195 = (state_30267[(20)]);
var inst_30210 = (state_30267[(2)]);
var inst_30211 = (inst_30198 + (1));
var tmp30329 = inst_30197;
var tmp30330 = inst_30196;
var tmp30331 = inst_30195;
var inst_30195__$1 = tmp30331;
var inst_30196__$1 = tmp30330;
var inst_30197__$1 = tmp30329;
var inst_30198__$1 = inst_30211;
var state_30267__$1 = (function (){var statearr_30340 = state_30267;
(statearr_30340[(19)] = inst_30197__$1);

(statearr_30340[(21)] = inst_30210);

(statearr_30340[(10)] = inst_30198__$1);

(statearr_30340[(12)] = inst_30196__$1);

(statearr_30340[(20)] = inst_30195__$1);

return statearr_30340;
})();
var statearr_30341_33159 = state_30267__$1;
(statearr_30341_33159[(2)] = null);

(statearr_30341_33159[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (40))){
var inst_30229 = (state_30267[(22)]);
var inst_30233 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30229);
var state_30267__$1 = state_30267;
var statearr_30342_33160 = state_30267__$1;
(statearr_30342_33160[(2)] = inst_30233);

(statearr_30342_33160[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (33))){
var inst_30214 = (state_30267[(23)]);
var inst_30218 = cljs.core.chunked_seq_QMARK_(inst_30214);
var state_30267__$1 = state_30267;
if(inst_30218){
var statearr_30343_33165 = state_30267__$1;
(statearr_30343_33165[(1)] = (36));

} else {
var statearr_30348_33168 = state_30267__$1;
(statearr_30348_33168[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (13))){
var inst_30143 = (state_30267[(24)]);
var inst_30146 = cljs.core.async.close_BANG_(inst_30143);
var state_30267__$1 = state_30267;
var statearr_30351_33169 = state_30267__$1;
(statearr_30351_33169[(2)] = inst_30146);

(statearr_30351_33169[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (22))){
var inst_30166 = (state_30267[(8)]);
var inst_30170 = cljs.core.async.close_BANG_(inst_30166);
var state_30267__$1 = state_30267;
var statearr_30354_33170 = state_30267__$1;
(statearr_30354_33170[(2)] = inst_30170);

(statearr_30354_33170[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (36))){
var inst_30214 = (state_30267[(23)]);
var inst_30222 = cljs.core.chunk_first(inst_30214);
var inst_30224 = cljs.core.chunk_rest(inst_30214);
var inst_30225 = cljs.core.count(inst_30222);
var inst_30195 = inst_30224;
var inst_30196 = inst_30222;
var inst_30197 = inst_30225;
var inst_30198 = (0);
var state_30267__$1 = (function (){var statearr_30359 = state_30267;
(statearr_30359[(19)] = inst_30197);

(statearr_30359[(10)] = inst_30198);

(statearr_30359[(12)] = inst_30196);

(statearr_30359[(20)] = inst_30195);

return statearr_30359;
})();
var statearr_30361_33176 = state_30267__$1;
(statearr_30361_33176[(2)] = null);

(statearr_30361_33176[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (41))){
var inst_30214 = (state_30267[(23)]);
var inst_30235 = (state_30267[(2)]);
var inst_30236 = cljs.core.next(inst_30214);
var inst_30195 = inst_30236;
var inst_30196 = null;
var inst_30197 = (0);
var inst_30198 = (0);
var state_30267__$1 = (function (){var statearr_30368 = state_30267;
(statearr_30368[(25)] = inst_30235);

(statearr_30368[(19)] = inst_30197);

(statearr_30368[(10)] = inst_30198);

(statearr_30368[(12)] = inst_30196);

(statearr_30368[(20)] = inst_30195);

return statearr_30368;
})();
var statearr_30371_33178 = state_30267__$1;
(statearr_30371_33178[(2)] = null);

(statearr_30371_33178[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (43))){
var state_30267__$1 = state_30267;
var statearr_30372_33181 = state_30267__$1;
(statearr_30372_33181[(2)] = null);

(statearr_30372_33181[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (29))){
var inst_30244 = (state_30267[(2)]);
var state_30267__$1 = state_30267;
var statearr_30378_33183 = state_30267__$1;
(statearr_30378_33183[(2)] = inst_30244);

(statearr_30378_33183[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (44))){
var inst_30254 = (state_30267[(2)]);
var state_30267__$1 = (function (){var statearr_30379 = state_30267;
(statearr_30379[(26)] = inst_30254);

return statearr_30379;
})();
var statearr_30380_33184 = state_30267__$1;
(statearr_30380_33184[(2)] = null);

(statearr_30380_33184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (6))){
var inst_30187 = (state_30267[(27)]);
var inst_30186 = cljs.core.deref(cs);
var inst_30187__$1 = cljs.core.keys(inst_30186);
var inst_30188 = cljs.core.count(inst_30187__$1);
var inst_30189 = cljs.core.reset_BANG_(dctr,inst_30188);
var inst_30194 = cljs.core.seq(inst_30187__$1);
var inst_30195 = inst_30194;
var inst_30196 = null;
var inst_30197 = (0);
var inst_30198 = (0);
var state_30267__$1 = (function (){var statearr_30381 = state_30267;
(statearr_30381[(19)] = inst_30197);

(statearr_30381[(27)] = inst_30187__$1);

(statearr_30381[(10)] = inst_30198);

(statearr_30381[(28)] = inst_30189);

(statearr_30381[(12)] = inst_30196);

(statearr_30381[(20)] = inst_30195);

return statearr_30381;
})();
var statearr_30382_33185 = state_30267__$1;
(statearr_30382_33185[(2)] = null);

(statearr_30382_33185[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (28))){
var inst_30214 = (state_30267[(23)]);
var inst_30195 = (state_30267[(20)]);
var inst_30214__$1 = cljs.core.seq(inst_30195);
var state_30267__$1 = (function (){var statearr_30383 = state_30267;
(statearr_30383[(23)] = inst_30214__$1);

return statearr_30383;
})();
if(inst_30214__$1){
var statearr_30384_33187 = state_30267__$1;
(statearr_30384_33187[(1)] = (33));

} else {
var statearr_30386_33188 = state_30267__$1;
(statearr_30386_33188[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (25))){
var inst_30197 = (state_30267[(19)]);
var inst_30198 = (state_30267[(10)]);
var inst_30200 = (inst_30198 < inst_30197);
var inst_30201 = inst_30200;
var state_30267__$1 = state_30267;
if(cljs.core.truth_(inst_30201)){
var statearr_30387_33189 = state_30267__$1;
(statearr_30387_33189[(1)] = (27));

} else {
var statearr_30388_33191 = state_30267__$1;
(statearr_30388_33191[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (34))){
var state_30267__$1 = state_30267;
var statearr_30390_33192 = state_30267__$1;
(statearr_30390_33192[(2)] = null);

(statearr_30390_33192[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (17))){
var state_30267__$1 = state_30267;
var statearr_30391_33195 = state_30267__$1;
(statearr_30391_33195[(2)] = null);

(statearr_30391_33195[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (3))){
var inst_30259 = (state_30267[(2)]);
var state_30267__$1 = state_30267;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30267__$1,inst_30259);
} else {
if((state_val_30271 === (12))){
var inst_30182 = (state_30267[(2)]);
var state_30267__$1 = state_30267;
var statearr_30392_33202 = state_30267__$1;
(statearr_30392_33202[(2)] = inst_30182);

(statearr_30392_33202[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (2))){
var state_30267__$1 = state_30267;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30267__$1,(4),ch);
} else {
if((state_val_30271 === (23))){
var state_30267__$1 = state_30267;
var statearr_30401_33203 = state_30267__$1;
(statearr_30401_33203[(2)] = null);

(statearr_30401_33203[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (35))){
var inst_30242 = (state_30267[(2)]);
var state_30267__$1 = state_30267;
var statearr_30407_33204 = state_30267__$1;
(statearr_30407_33204[(2)] = inst_30242);

(statearr_30407_33204[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (19))){
var inst_30153 = (state_30267[(7)]);
var inst_30157 = cljs.core.chunk_first(inst_30153);
var inst_30158 = cljs.core.chunk_rest(inst_30153);
var inst_30159 = cljs.core.count(inst_30157);
var inst_30131 = inst_30158;
var inst_30132 = inst_30157;
var inst_30133 = inst_30159;
var inst_30134 = (0);
var state_30267__$1 = (function (){var statearr_30411 = state_30267;
(statearr_30411[(14)] = inst_30131);

(statearr_30411[(15)] = inst_30134);

(statearr_30411[(16)] = inst_30133);

(statearr_30411[(17)] = inst_30132);

return statearr_30411;
})();
var statearr_30412_33207 = state_30267__$1;
(statearr_30412_33207[(2)] = null);

(statearr_30412_33207[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (11))){
var inst_30131 = (state_30267[(14)]);
var inst_30153 = (state_30267[(7)]);
var inst_30153__$1 = cljs.core.seq(inst_30131);
var state_30267__$1 = (function (){var statearr_30414 = state_30267;
(statearr_30414[(7)] = inst_30153__$1);

return statearr_30414;
})();
if(inst_30153__$1){
var statearr_30415_33211 = state_30267__$1;
(statearr_30415_33211[(1)] = (16));

} else {
var statearr_30416_33212 = state_30267__$1;
(statearr_30416_33212[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (9))){
var inst_30184 = (state_30267[(2)]);
var state_30267__$1 = state_30267;
var statearr_30419_33213 = state_30267__$1;
(statearr_30419_33213[(2)] = inst_30184);

(statearr_30419_33213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (5))){
var inst_30129 = cljs.core.deref(cs);
var inst_30130 = cljs.core.seq(inst_30129);
var inst_30131 = inst_30130;
var inst_30132 = null;
var inst_30133 = (0);
var inst_30134 = (0);
var state_30267__$1 = (function (){var statearr_30421 = state_30267;
(statearr_30421[(14)] = inst_30131);

(statearr_30421[(15)] = inst_30134);

(statearr_30421[(16)] = inst_30133);

(statearr_30421[(17)] = inst_30132);

return statearr_30421;
})();
var statearr_30422_33218 = state_30267__$1;
(statearr_30422_33218[(2)] = null);

(statearr_30422_33218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (14))){
var state_30267__$1 = state_30267;
var statearr_30437_33219 = state_30267__$1;
(statearr_30437_33219[(2)] = null);

(statearr_30437_33219[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (45))){
var inst_30251 = (state_30267[(2)]);
var state_30267__$1 = state_30267;
var statearr_30440_33224 = state_30267__$1;
(statearr_30440_33224[(2)] = inst_30251);

(statearr_30440_33224[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (26))){
var inst_30187 = (state_30267[(27)]);
var inst_30246 = (state_30267[(2)]);
var inst_30247 = cljs.core.seq(inst_30187);
var state_30267__$1 = (function (){var statearr_30448 = state_30267;
(statearr_30448[(29)] = inst_30246);

return statearr_30448;
})();
if(inst_30247){
var statearr_30450_33227 = state_30267__$1;
(statearr_30450_33227[(1)] = (42));

} else {
var statearr_30451_33230 = state_30267__$1;
(statearr_30451_33230[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (16))){
var inst_30153 = (state_30267[(7)]);
var inst_30155 = cljs.core.chunked_seq_QMARK_(inst_30153);
var state_30267__$1 = state_30267;
if(inst_30155){
var statearr_30452_33236 = state_30267__$1;
(statearr_30452_33236[(1)] = (19));

} else {
var statearr_30453_33240 = state_30267__$1;
(statearr_30453_33240[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (38))){
var inst_30239 = (state_30267[(2)]);
var state_30267__$1 = state_30267;
var statearr_30454_33245 = state_30267__$1;
(statearr_30454_33245[(2)] = inst_30239);

(statearr_30454_33245[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (30))){
var state_30267__$1 = state_30267;
var statearr_30461_33247 = state_30267__$1;
(statearr_30461_33247[(2)] = null);

(statearr_30461_33247[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (10))){
var inst_30134 = (state_30267[(15)]);
var inst_30132 = (state_30267[(17)]);
var inst_30142 = cljs.core._nth(inst_30132,inst_30134);
var inst_30143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30142,(0),null);
var inst_30144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30142,(1),null);
var state_30267__$1 = (function (){var statearr_30470 = state_30267;
(statearr_30470[(24)] = inst_30143);

return statearr_30470;
})();
if(cljs.core.truth_(inst_30144)){
var statearr_30471_33252 = state_30267__$1;
(statearr_30471_33252[(1)] = (13));

} else {
var statearr_30472_33253 = state_30267__$1;
(statearr_30472_33253[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (18))){
var inst_30180 = (state_30267[(2)]);
var state_30267__$1 = state_30267;
var statearr_30474_33258 = state_30267__$1;
(statearr_30474_33258[(2)] = inst_30180);

(statearr_30474_33258[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (42))){
var state_30267__$1 = state_30267;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30267__$1,(45),dchan);
} else {
if((state_val_30271 === (37))){
var inst_30214 = (state_30267[(23)]);
var inst_30229 = (state_30267[(22)]);
var inst_30120 = (state_30267[(9)]);
var inst_30229__$1 = cljs.core.first(inst_30214);
var inst_30230 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30229__$1,inst_30120,done);
var state_30267__$1 = (function (){var statearr_30481 = state_30267;
(statearr_30481[(22)] = inst_30229__$1);

return statearr_30481;
})();
if(cljs.core.truth_(inst_30230)){
var statearr_30490_33259 = state_30267__$1;
(statearr_30490_33259[(1)] = (39));

} else {
var statearr_30491_33260 = state_30267__$1;
(statearr_30491_33260[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (8))){
var inst_30134 = (state_30267[(15)]);
var inst_30133 = (state_30267[(16)]);
var inst_30136 = (inst_30134 < inst_30133);
var inst_30137 = inst_30136;
var state_30267__$1 = state_30267;
if(cljs.core.truth_(inst_30137)){
var statearr_30494_33261 = state_30267__$1;
(statearr_30494_33261[(1)] = (10));

} else {
var statearr_30495_33262 = state_30267__$1;
(statearr_30495_33262[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__28033__auto__ = null;
var cljs$core$async$mult_$_state_machine__28033__auto____0 = (function (){
var statearr_30500 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30500[(0)] = cljs$core$async$mult_$_state_machine__28033__auto__);

(statearr_30500[(1)] = (1));

return statearr_30500;
});
var cljs$core$async$mult_$_state_machine__28033__auto____1 = (function (state_30267){
while(true){
var ret_value__28034__auto__ = (function (){try{while(true){
var result__28035__auto__ = switch__28032__auto__(state_30267);
if(cljs.core.keyword_identical_QMARK_(result__28035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28035__auto__;
}
break;
}
}catch (e30501){var ex__28036__auto__ = e30501;
var statearr_30502_33264 = state_30267;
(statearr_30502_33264[(2)] = ex__28036__auto__);


if(cljs.core.seq((state_30267[(4)]))){
var statearr_30504_33266 = state_30267;
(statearr_30504_33266[(1)] = cljs.core.first((state_30267[(4)])));

} else {
throw ex__28036__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33267 = state_30267;
state_30267 = G__33267;
continue;
} else {
return ret_value__28034__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28033__auto__ = function(state_30267){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28033__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28033__auto____1.call(this,state_30267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28033__auto____0;
cljs$core$async$mult_$_state_machine__28033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28033__auto____1;
return cljs$core$async$mult_$_state_machine__28033__auto__;
})()
})();
var state__28690__auto__ = (function (){var statearr_30506 = f__28689__auto__();
(statearr_30506[(6)] = c__28688__auto___33129);

return statearr_30506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28690__auto__);
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
var G__30510 = arguments.length;
switch (G__30510) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_33275 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_33275(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33276 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_33276(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33278 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33278(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33279 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_33279(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33288 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33288(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33290 = arguments.length;
var i__4737__auto___33291 = (0);
while(true){
if((i__4737__auto___33291 < len__4736__auto___33290)){
args__4742__auto__.push((arguments[i__4737__auto___33291]));

var G__33292 = (i__4737__auto___33291 + (1));
i__4737__auto___33291 = G__33292;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30558){
var map__30560 = p__30558;
var map__30560__$1 = (((((!((map__30560 == null))))?(((((map__30560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30560):map__30560);
var opts = map__30560__$1;
var statearr_30562_33295 = state;
(statearr_30562_33295[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_30567_33297 = state;
(statearr_30567_33297[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_30568_33298 = state;
(statearr_30568_33298[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30546){
var G__30547 = cljs.core.first(seq30546);
var seq30546__$1 = cljs.core.next(seq30546);
var G__30548 = cljs.core.first(seq30546__$1);
var seq30546__$2 = cljs.core.next(seq30546__$1);
var G__30549 = cljs.core.first(seq30546__$2);
var seq30546__$3 = cljs.core.next(seq30546__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30547,G__30548,G__30549,seq30546__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30598 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30598 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30599){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30599 = meta30599;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30598.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30600,meta30599__$1){
var self__ = this;
var _30600__$1 = this;
return (new cljs.core.async.t_cljs$core$async30598(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30599__$1));
}));

(cljs.core.async.t_cljs$core$async30598.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30600){
var self__ = this;
var _30600__$1 = this;
return self__.meta30599;
}));

(cljs.core.async.t_cljs$core$async30598.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30598.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async30598.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30598.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30598.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30598.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30598.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30598.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30598.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30599","meta30599",-1515161282,null)], null);
}));

(cljs.core.async.t_cljs$core$async30598.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30598.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30598");

(cljs.core.async.t_cljs$core$async30598.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30598");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30598.
 */
cljs.core.async.__GT_t_cljs$core$async30598 = (function cljs$core$async$mix_$___GT_t_cljs$core$async30598(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30599){
return (new cljs.core.async.t_cljs$core$async30598(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30599));
});

}

return (new cljs.core.async.t_cljs$core$async30598(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28688__auto___33309 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28689__auto__ = (function (){var switch__28032__auto__ = (function (state_30748){
var state_val_30749 = (state_30748[(1)]);
if((state_val_30749 === (7))){
var inst_30639 = (state_30748[(2)]);
var state_30748__$1 = state_30748;
var statearr_30755_33310 = state_30748__$1;
(statearr_30755_33310[(2)] = inst_30639);

(statearr_30755_33310[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (20))){
var inst_30651 = (state_30748[(7)]);
var state_30748__$1 = state_30748;
var statearr_30758_33311 = state_30748__$1;
(statearr_30758_33311[(2)] = inst_30651);

(statearr_30758_33311[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (27))){
var state_30748__$1 = state_30748;
var statearr_30759_33312 = state_30748__$1;
(statearr_30759_33312[(2)] = null);

(statearr_30759_33312[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (1))){
var inst_30626 = (state_30748[(8)]);
var inst_30626__$1 = calc_state();
var inst_30628 = (inst_30626__$1 == null);
var inst_30629 = cljs.core.not(inst_30628);
var state_30748__$1 = (function (){var statearr_30762 = state_30748;
(statearr_30762[(8)] = inst_30626__$1);

return statearr_30762;
})();
if(inst_30629){
var statearr_30764_33313 = state_30748__$1;
(statearr_30764_33313[(1)] = (2));

} else {
var statearr_30766_33314 = state_30748__$1;
(statearr_30766_33314[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (24))){
var inst_30684 = (state_30748[(9)]);
var inst_30710 = (state_30748[(10)]);
var inst_30695 = (state_30748[(11)]);
var inst_30710__$1 = (inst_30684.cljs$core$IFn$_invoke$arity$1 ? inst_30684.cljs$core$IFn$_invoke$arity$1(inst_30695) : inst_30684.call(null,inst_30695));
var state_30748__$1 = (function (){var statearr_30767 = state_30748;
(statearr_30767[(10)] = inst_30710__$1);

return statearr_30767;
})();
if(cljs.core.truth_(inst_30710__$1)){
var statearr_30768_33315 = state_30748__$1;
(statearr_30768_33315[(1)] = (29));

} else {
var statearr_30769_33316 = state_30748__$1;
(statearr_30769_33316[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (4))){
var inst_30642 = (state_30748[(2)]);
var state_30748__$1 = state_30748;
if(cljs.core.truth_(inst_30642)){
var statearr_30771_33317 = state_30748__$1;
(statearr_30771_33317[(1)] = (8));

} else {
var statearr_30772_33318 = state_30748__$1;
(statearr_30772_33318[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (15))){
var inst_30674 = (state_30748[(2)]);
var state_30748__$1 = state_30748;
if(cljs.core.truth_(inst_30674)){
var statearr_30774_33319 = state_30748__$1;
(statearr_30774_33319[(1)] = (19));

} else {
var statearr_30778_33320 = state_30748__$1;
(statearr_30778_33320[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (21))){
var inst_30682 = (state_30748[(12)]);
var inst_30682__$1 = (state_30748[(2)]);
var inst_30684 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30682__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30682__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30686 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30682__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30748__$1 = (function (){var statearr_30782 = state_30748;
(statearr_30782[(9)] = inst_30684);

(statearr_30782[(12)] = inst_30682__$1);

(statearr_30782[(13)] = inst_30685);

return statearr_30782;
})();
return cljs.core.async.ioc_alts_BANG_(state_30748__$1,(22),inst_30686);
} else {
if((state_val_30749 === (31))){
var inst_30720 = (state_30748[(2)]);
var state_30748__$1 = state_30748;
if(cljs.core.truth_(inst_30720)){
var statearr_30783_33321 = state_30748__$1;
(statearr_30783_33321[(1)] = (32));

} else {
var statearr_30784_33322 = state_30748__$1;
(statearr_30784_33322[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (32))){
var inst_30694 = (state_30748[(14)]);
var state_30748__$1 = state_30748;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30748__$1,(35),out,inst_30694);
} else {
if((state_val_30749 === (33))){
var inst_30682 = (state_30748[(12)]);
var inst_30651 = inst_30682;
var state_30748__$1 = (function (){var statearr_30788 = state_30748;
(statearr_30788[(7)] = inst_30651);

return statearr_30788;
})();
var statearr_30789_33324 = state_30748__$1;
(statearr_30789_33324[(2)] = null);

(statearr_30789_33324[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (13))){
var inst_30651 = (state_30748[(7)]);
var inst_30659 = inst_30651.cljs$lang$protocol_mask$partition0$;
var inst_30660 = (inst_30659 & (64));
var inst_30661 = inst_30651.cljs$core$ISeq$;
var inst_30662 = (cljs.core.PROTOCOL_SENTINEL === inst_30661);
var inst_30663 = ((inst_30660) || (inst_30662));
var state_30748__$1 = state_30748;
if(cljs.core.truth_(inst_30663)){
var statearr_30791_33329 = state_30748__$1;
(statearr_30791_33329[(1)] = (16));

} else {
var statearr_30793_33330 = state_30748__$1;
(statearr_30793_33330[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (22))){
var inst_30694 = (state_30748[(14)]);
var inst_30695 = (state_30748[(11)]);
var inst_30692 = (state_30748[(2)]);
var inst_30694__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30692,(0),null);
var inst_30695__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30692,(1),null);
var inst_30696 = (inst_30694__$1 == null);
var inst_30697 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30695__$1,change);
var inst_30698 = ((inst_30696) || (inst_30697));
var state_30748__$1 = (function (){var statearr_30797 = state_30748;
(statearr_30797[(14)] = inst_30694__$1);

(statearr_30797[(11)] = inst_30695__$1);

return statearr_30797;
})();
if(cljs.core.truth_(inst_30698)){
var statearr_30798_33331 = state_30748__$1;
(statearr_30798_33331[(1)] = (23));

} else {
var statearr_30801_33332 = state_30748__$1;
(statearr_30801_33332[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (36))){
var inst_30682 = (state_30748[(12)]);
var inst_30651 = inst_30682;
var state_30748__$1 = (function (){var statearr_30806 = state_30748;
(statearr_30806[(7)] = inst_30651);

return statearr_30806;
})();
var statearr_30808_33335 = state_30748__$1;
(statearr_30808_33335[(2)] = null);

(statearr_30808_33335[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (29))){
var inst_30710 = (state_30748[(10)]);
var state_30748__$1 = state_30748;
var statearr_30815_33336 = state_30748__$1;
(statearr_30815_33336[(2)] = inst_30710);

(statearr_30815_33336[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (6))){
var state_30748__$1 = state_30748;
var statearr_30820_33337 = state_30748__$1;
(statearr_30820_33337[(2)] = false);

(statearr_30820_33337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (28))){
var inst_30705 = (state_30748[(2)]);
var inst_30707 = calc_state();
var inst_30651 = inst_30707;
var state_30748__$1 = (function (){var statearr_30831 = state_30748;
(statearr_30831[(7)] = inst_30651);

(statearr_30831[(15)] = inst_30705);

return statearr_30831;
})();
var statearr_30833_33338 = state_30748__$1;
(statearr_30833_33338[(2)] = null);

(statearr_30833_33338[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (25))){
var inst_30735 = (state_30748[(2)]);
var state_30748__$1 = state_30748;
var statearr_30842_33339 = state_30748__$1;
(statearr_30842_33339[(2)] = inst_30735);

(statearr_30842_33339[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (34))){
var inst_30733 = (state_30748[(2)]);
var state_30748__$1 = state_30748;
var statearr_30843_33340 = state_30748__$1;
(statearr_30843_33340[(2)] = inst_30733);

(statearr_30843_33340[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (17))){
var state_30748__$1 = state_30748;
var statearr_30844_33341 = state_30748__$1;
(statearr_30844_33341[(2)] = false);

(statearr_30844_33341[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (3))){
var state_30748__$1 = state_30748;
var statearr_30846_33342 = state_30748__$1;
(statearr_30846_33342[(2)] = false);

(statearr_30846_33342[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (12))){
var inst_30737 = (state_30748[(2)]);
var state_30748__$1 = state_30748;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30748__$1,inst_30737);
} else {
if((state_val_30749 === (2))){
var inst_30626 = (state_30748[(8)]);
var inst_30631 = inst_30626.cljs$lang$protocol_mask$partition0$;
var inst_30632 = (inst_30631 & (64));
var inst_30633 = inst_30626.cljs$core$ISeq$;
var inst_30634 = (cljs.core.PROTOCOL_SENTINEL === inst_30633);
var inst_30635 = ((inst_30632) || (inst_30634));
var state_30748__$1 = state_30748;
if(cljs.core.truth_(inst_30635)){
var statearr_30854_33343 = state_30748__$1;
(statearr_30854_33343[(1)] = (5));

} else {
var statearr_30855_33344 = state_30748__$1;
(statearr_30855_33344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (23))){
var inst_30694 = (state_30748[(14)]);
var inst_30700 = (inst_30694 == null);
var state_30748__$1 = state_30748;
if(cljs.core.truth_(inst_30700)){
var statearr_30856_33345 = state_30748__$1;
(statearr_30856_33345[(1)] = (26));

} else {
var statearr_30857_33346 = state_30748__$1;
(statearr_30857_33346[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (35))){
var inst_30724 = (state_30748[(2)]);
var state_30748__$1 = state_30748;
if(cljs.core.truth_(inst_30724)){
var statearr_30858_33347 = state_30748__$1;
(statearr_30858_33347[(1)] = (36));

} else {
var statearr_30859_33348 = state_30748__$1;
(statearr_30859_33348[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (19))){
var inst_30651 = (state_30748[(7)]);
var inst_30679 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30651);
var state_30748__$1 = state_30748;
var statearr_30860_33350 = state_30748__$1;
(statearr_30860_33350[(2)] = inst_30679);

(statearr_30860_33350[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (11))){
var inst_30651 = (state_30748[(7)]);
var inst_30655 = (inst_30651 == null);
var inst_30656 = cljs.core.not(inst_30655);
var state_30748__$1 = state_30748;
if(inst_30656){
var statearr_30861_33352 = state_30748__$1;
(statearr_30861_33352[(1)] = (13));

} else {
var statearr_30862_33353 = state_30748__$1;
(statearr_30862_33353[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (9))){
var inst_30626 = (state_30748[(8)]);
var state_30748__$1 = state_30748;
var statearr_30867_33355 = state_30748__$1;
(statearr_30867_33355[(2)] = inst_30626);

(statearr_30867_33355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (5))){
var state_30748__$1 = state_30748;
var statearr_30877_33356 = state_30748__$1;
(statearr_30877_33356[(2)] = true);

(statearr_30877_33356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (14))){
var state_30748__$1 = state_30748;
var statearr_30885_33357 = state_30748__$1;
(statearr_30885_33357[(2)] = false);

(statearr_30885_33357[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (26))){
var inst_30695 = (state_30748[(11)]);
var inst_30702 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_30695);
var state_30748__$1 = state_30748;
var statearr_30898_33358 = state_30748__$1;
(statearr_30898_33358[(2)] = inst_30702);

(statearr_30898_33358[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (16))){
var state_30748__$1 = state_30748;
var statearr_30906_33359 = state_30748__$1;
(statearr_30906_33359[(2)] = true);

(statearr_30906_33359[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (38))){
var inst_30729 = (state_30748[(2)]);
var state_30748__$1 = state_30748;
var statearr_30919_33360 = state_30748__$1;
(statearr_30919_33360[(2)] = inst_30729);

(statearr_30919_33360[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (30))){
var inst_30684 = (state_30748[(9)]);
var inst_30685 = (state_30748[(13)]);
var inst_30695 = (state_30748[(11)]);
var inst_30714 = cljs.core.empty_QMARK_(inst_30684);
var inst_30715 = (inst_30685.cljs$core$IFn$_invoke$arity$1 ? inst_30685.cljs$core$IFn$_invoke$arity$1(inst_30695) : inst_30685.call(null,inst_30695));
var inst_30717 = cljs.core.not(inst_30715);
var inst_30718 = ((inst_30714) && (inst_30717));
var state_30748__$1 = state_30748;
var statearr_30920_33363 = state_30748__$1;
(statearr_30920_33363[(2)] = inst_30718);

(statearr_30920_33363[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (10))){
var inst_30626 = (state_30748[(8)]);
var inst_30647 = (state_30748[(2)]);
var inst_30648 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30647,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30649 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30647,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30650 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30647,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30651 = inst_30626;
var state_30748__$1 = (function (){var statearr_30922 = state_30748;
(statearr_30922[(7)] = inst_30651);

(statearr_30922[(16)] = inst_30650);

(statearr_30922[(17)] = inst_30649);

(statearr_30922[(18)] = inst_30648);

return statearr_30922;
})();
var statearr_30924_33365 = state_30748__$1;
(statearr_30924_33365[(2)] = null);

(statearr_30924_33365[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (18))){
var inst_30668 = (state_30748[(2)]);
var state_30748__$1 = state_30748;
var statearr_30925_33366 = state_30748__$1;
(statearr_30925_33366[(2)] = inst_30668);

(statearr_30925_33366[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (37))){
var state_30748__$1 = state_30748;
var statearr_30926_33368 = state_30748__$1;
(statearr_30926_33368[(2)] = null);

(statearr_30926_33368[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (8))){
var inst_30626 = (state_30748[(8)]);
var inst_30644 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30626);
var state_30748__$1 = state_30748;
var statearr_30927_33369 = state_30748__$1;
(statearr_30927_33369[(2)] = inst_30644);

(statearr_30927_33369[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__28033__auto__ = null;
var cljs$core$async$mix_$_state_machine__28033__auto____0 = (function (){
var statearr_30930 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30930[(0)] = cljs$core$async$mix_$_state_machine__28033__auto__);

(statearr_30930[(1)] = (1));

return statearr_30930;
});
var cljs$core$async$mix_$_state_machine__28033__auto____1 = (function (state_30748){
while(true){
var ret_value__28034__auto__ = (function (){try{while(true){
var result__28035__auto__ = switch__28032__auto__(state_30748);
if(cljs.core.keyword_identical_QMARK_(result__28035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28035__auto__;
}
break;
}
}catch (e30933){var ex__28036__auto__ = e30933;
var statearr_30935_33370 = state_30748;
(statearr_30935_33370[(2)] = ex__28036__auto__);


if(cljs.core.seq((state_30748[(4)]))){
var statearr_30936_33371 = state_30748;
(statearr_30936_33371[(1)] = cljs.core.first((state_30748[(4)])));

} else {
throw ex__28036__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33372 = state_30748;
state_30748 = G__33372;
continue;
} else {
return ret_value__28034__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28033__auto__ = function(state_30748){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28033__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28033__auto____1.call(this,state_30748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28033__auto____0;
cljs$core$async$mix_$_state_machine__28033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28033__auto____1;
return cljs$core$async$mix_$_state_machine__28033__auto__;
})()
})();
var state__28690__auto__ = (function (){var statearr_30945 = f__28689__auto__();
(statearr_30945[(6)] = c__28688__auto___33309);

return statearr_30945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28690__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_33377 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_33377(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33378 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_33378(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33380 = (function() {
var G__33381 = null;
var G__33381__1 = (function (p){
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
var G__33381__2 = (function (p,v){
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
G__33381 = function(p,v){
switch(arguments.length){
case 1:
return G__33381__1.call(this,p);
case 2:
return G__33381__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33381.cljs$core$IFn$_invoke$arity$1 = G__33381__1;
G__33381.cljs$core$IFn$_invoke$arity$2 = G__33381__2;
return G__33381;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31012 = arguments.length;
switch (G__31012) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33380(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33380(p,v);
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
var G__31025 = arguments.length;
switch (G__31025) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31020_SHARP_){
if(cljs.core.truth_((p1__31020_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31020_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31020_SHARP_.call(null,topic)))){
return p1__31020_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31020_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31026 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31026 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31027){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31027 = meta31027;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31028,meta31027__$1){
var self__ = this;
var _31028__$1 = this;
return (new cljs.core.async.t_cljs$core$async31026(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31027__$1));
}));

(cljs.core.async.t_cljs$core$async31026.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31028){
var self__ = this;
var _31028__$1 = this;
return self__.meta31027;
}));

(cljs.core.async.t_cljs$core$async31026.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31026.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31026.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31026.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31026.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async31026.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31026.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31026.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31027","meta31027",-254542966,null)], null);
}));

(cljs.core.async.t_cljs$core$async31026.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31026.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31026");

(cljs.core.async.t_cljs$core$async31026.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31026");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31026.
 */
cljs.core.async.__GT_t_cljs$core$async31026 = (function cljs$core$async$__GT_t_cljs$core$async31026(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31027){
return (new cljs.core.async.t_cljs$core$async31026(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31027));
});

}

return (new cljs.core.async.t_cljs$core$async31026(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28688__auto___33423 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28689__auto__ = (function (){var switch__28032__auto__ = (function (state_31147){
var state_val_31148 = (state_31147[(1)]);
if((state_val_31148 === (7))){
var inst_31142 = (state_31147[(2)]);
var state_31147__$1 = state_31147;
var statearr_31152_33428 = state_31147__$1;
(statearr_31152_33428[(2)] = inst_31142);

(statearr_31152_33428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (20))){
var state_31147__$1 = state_31147;
var statearr_31153_33429 = state_31147__$1;
(statearr_31153_33429[(2)] = null);

(statearr_31153_33429[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (1))){
var state_31147__$1 = state_31147;
var statearr_31155_33433 = state_31147__$1;
(statearr_31155_33433[(2)] = null);

(statearr_31155_33433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (24))){
var inst_31121 = (state_31147[(7)]);
var inst_31134 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31121);
var state_31147__$1 = state_31147;
var statearr_31156_33438 = state_31147__$1;
(statearr_31156_33438[(2)] = inst_31134);

(statearr_31156_33438[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (4))){
var inst_31053 = (state_31147[(8)]);
var inst_31053__$1 = (state_31147[(2)]);
var inst_31058 = (inst_31053__$1 == null);
var state_31147__$1 = (function (){var statearr_31159 = state_31147;
(statearr_31159[(8)] = inst_31053__$1);

return statearr_31159;
})();
if(cljs.core.truth_(inst_31058)){
var statearr_31161_33445 = state_31147__$1;
(statearr_31161_33445[(1)] = (5));

} else {
var statearr_31164_33447 = state_31147__$1;
(statearr_31164_33447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (15))){
var inst_31115 = (state_31147[(2)]);
var state_31147__$1 = state_31147;
var statearr_31165_33453 = state_31147__$1;
(statearr_31165_33453[(2)] = inst_31115);

(statearr_31165_33453[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (21))){
var inst_31139 = (state_31147[(2)]);
var state_31147__$1 = (function (){var statearr_31166 = state_31147;
(statearr_31166[(9)] = inst_31139);

return statearr_31166;
})();
var statearr_31169_33455 = state_31147__$1;
(statearr_31169_33455[(2)] = null);

(statearr_31169_33455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (13))){
var inst_31089 = (state_31147[(10)]);
var inst_31092 = cljs.core.chunked_seq_QMARK_(inst_31089);
var state_31147__$1 = state_31147;
if(inst_31092){
var statearr_31171_33456 = state_31147__$1;
(statearr_31171_33456[(1)] = (16));

} else {
var statearr_31172_33457 = state_31147__$1;
(statearr_31172_33457[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (22))){
var inst_31130 = (state_31147[(2)]);
var state_31147__$1 = state_31147;
if(cljs.core.truth_(inst_31130)){
var statearr_31175_33458 = state_31147__$1;
(statearr_31175_33458[(1)] = (23));

} else {
var statearr_31178_33461 = state_31147__$1;
(statearr_31178_33461[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (6))){
var inst_31123 = (state_31147[(11)]);
var inst_31053 = (state_31147[(8)]);
var inst_31121 = (state_31147[(7)]);
var inst_31121__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31053) : topic_fn.call(null,inst_31053));
var inst_31122 = cljs.core.deref(mults);
var inst_31123__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31122,inst_31121__$1);
var state_31147__$1 = (function (){var statearr_31181 = state_31147;
(statearr_31181[(11)] = inst_31123__$1);

(statearr_31181[(7)] = inst_31121__$1);

return statearr_31181;
})();
if(cljs.core.truth_(inst_31123__$1)){
var statearr_31182_33467 = state_31147__$1;
(statearr_31182_33467[(1)] = (19));

} else {
var statearr_31183_33468 = state_31147__$1;
(statearr_31183_33468[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (25))){
var inst_31136 = (state_31147[(2)]);
var state_31147__$1 = state_31147;
var statearr_31185_33469 = state_31147__$1;
(statearr_31185_33469[(2)] = inst_31136);

(statearr_31185_33469[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (17))){
var inst_31089 = (state_31147[(10)]);
var inst_31105 = cljs.core.first(inst_31089);
var inst_31107 = cljs.core.async.muxch_STAR_(inst_31105);
var inst_31108 = cljs.core.async.close_BANG_(inst_31107);
var inst_31109 = cljs.core.next(inst_31089);
var inst_31067 = inst_31109;
var inst_31068 = null;
var inst_31071 = (0);
var inst_31074 = (0);
var state_31147__$1 = (function (){var statearr_31186 = state_31147;
(statearr_31186[(12)] = inst_31071);

(statearr_31186[(13)] = inst_31068);

(statearr_31186[(14)] = inst_31074);

(statearr_31186[(15)] = inst_31067);

(statearr_31186[(16)] = inst_31108);

return statearr_31186;
})();
var statearr_31187_33473 = state_31147__$1;
(statearr_31187_33473[(2)] = null);

(statearr_31187_33473[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (3))){
var inst_31144 = (state_31147[(2)]);
var state_31147__$1 = state_31147;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31147__$1,inst_31144);
} else {
if((state_val_31148 === (12))){
var inst_31117 = (state_31147[(2)]);
var state_31147__$1 = state_31147;
var statearr_31192_33477 = state_31147__$1;
(statearr_31192_33477[(2)] = inst_31117);

(statearr_31192_33477[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (2))){
var state_31147__$1 = state_31147;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31147__$1,(4),ch);
} else {
if((state_val_31148 === (23))){
var state_31147__$1 = state_31147;
var statearr_31193_33480 = state_31147__$1;
(statearr_31193_33480[(2)] = null);

(statearr_31193_33480[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (19))){
var inst_31123 = (state_31147[(11)]);
var inst_31053 = (state_31147[(8)]);
var inst_31127 = cljs.core.async.muxch_STAR_(inst_31123);
var state_31147__$1 = state_31147;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31147__$1,(22),inst_31127,inst_31053);
} else {
if((state_val_31148 === (11))){
var inst_31089 = (state_31147[(10)]);
var inst_31067 = (state_31147[(15)]);
var inst_31089__$1 = cljs.core.seq(inst_31067);
var state_31147__$1 = (function (){var statearr_31198 = state_31147;
(statearr_31198[(10)] = inst_31089__$1);

return statearr_31198;
})();
if(inst_31089__$1){
var statearr_31199_33483 = state_31147__$1;
(statearr_31199_33483[(1)] = (13));

} else {
var statearr_31200_33485 = state_31147__$1;
(statearr_31200_33485[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (9))){
var inst_31119 = (state_31147[(2)]);
var state_31147__$1 = state_31147;
var statearr_31203_33487 = state_31147__$1;
(statearr_31203_33487[(2)] = inst_31119);

(statearr_31203_33487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (5))){
var inst_31064 = cljs.core.deref(mults);
var inst_31065 = cljs.core.vals(inst_31064);
var inst_31066 = cljs.core.seq(inst_31065);
var inst_31067 = inst_31066;
var inst_31068 = null;
var inst_31071 = (0);
var inst_31074 = (0);
var state_31147__$1 = (function (){var statearr_31207 = state_31147;
(statearr_31207[(12)] = inst_31071);

(statearr_31207[(13)] = inst_31068);

(statearr_31207[(14)] = inst_31074);

(statearr_31207[(15)] = inst_31067);

return statearr_31207;
})();
var statearr_31212_33490 = state_31147__$1;
(statearr_31212_33490[(2)] = null);

(statearr_31212_33490[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (14))){
var state_31147__$1 = state_31147;
var statearr_31230_33494 = state_31147__$1;
(statearr_31230_33494[(2)] = null);

(statearr_31230_33494[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (16))){
var inst_31089 = (state_31147[(10)]);
var inst_31094 = cljs.core.chunk_first(inst_31089);
var inst_31095 = cljs.core.chunk_rest(inst_31089);
var inst_31096 = cljs.core.count(inst_31094);
var inst_31067 = inst_31095;
var inst_31068 = inst_31094;
var inst_31071 = inst_31096;
var inst_31074 = (0);
var state_31147__$1 = (function (){var statearr_31246 = state_31147;
(statearr_31246[(12)] = inst_31071);

(statearr_31246[(13)] = inst_31068);

(statearr_31246[(14)] = inst_31074);

(statearr_31246[(15)] = inst_31067);

return statearr_31246;
})();
var statearr_31254_33495 = state_31147__$1;
(statearr_31254_33495[(2)] = null);

(statearr_31254_33495[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (10))){
var inst_31071 = (state_31147[(12)]);
var inst_31068 = (state_31147[(13)]);
var inst_31074 = (state_31147[(14)]);
var inst_31067 = (state_31147[(15)]);
var inst_31081 = cljs.core._nth(inst_31068,inst_31074);
var inst_31083 = cljs.core.async.muxch_STAR_(inst_31081);
var inst_31084 = cljs.core.async.close_BANG_(inst_31083);
var inst_31086 = (inst_31074 + (1));
var tmp31222 = inst_31071;
var tmp31223 = inst_31068;
var tmp31224 = inst_31067;
var inst_31067__$1 = tmp31224;
var inst_31068__$1 = tmp31223;
var inst_31071__$1 = tmp31222;
var inst_31074__$1 = inst_31086;
var state_31147__$1 = (function (){var statearr_31260 = state_31147;
(statearr_31260[(12)] = inst_31071__$1);

(statearr_31260[(17)] = inst_31084);

(statearr_31260[(13)] = inst_31068__$1);

(statearr_31260[(14)] = inst_31074__$1);

(statearr_31260[(15)] = inst_31067__$1);

return statearr_31260;
})();
var statearr_31261_33505 = state_31147__$1;
(statearr_31261_33505[(2)] = null);

(statearr_31261_33505[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (18))){
var inst_31112 = (state_31147[(2)]);
var state_31147__$1 = state_31147;
var statearr_31262_33509 = state_31147__$1;
(statearr_31262_33509[(2)] = inst_31112);

(statearr_31262_33509[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (8))){
var inst_31071 = (state_31147[(12)]);
var inst_31074 = (state_31147[(14)]);
var inst_31077 = (inst_31074 < inst_31071);
var inst_31078 = inst_31077;
var state_31147__$1 = state_31147;
if(cljs.core.truth_(inst_31078)){
var statearr_31264_33512 = state_31147__$1;
(statearr_31264_33512[(1)] = (10));

} else {
var statearr_31265_33513 = state_31147__$1;
(statearr_31265_33513[(1)] = (11));

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
var cljs$core$async$state_machine__28033__auto__ = null;
var cljs$core$async$state_machine__28033__auto____0 = (function (){
var statearr_31268 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31268[(0)] = cljs$core$async$state_machine__28033__auto__);

(statearr_31268[(1)] = (1));

return statearr_31268;
});
var cljs$core$async$state_machine__28033__auto____1 = (function (state_31147){
while(true){
var ret_value__28034__auto__ = (function (){try{while(true){
var result__28035__auto__ = switch__28032__auto__(state_31147);
if(cljs.core.keyword_identical_QMARK_(result__28035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28035__auto__;
}
break;
}
}catch (e31274){var ex__28036__auto__ = e31274;
var statearr_31276_33522 = state_31147;
(statearr_31276_33522[(2)] = ex__28036__auto__);


if(cljs.core.seq((state_31147[(4)]))){
var statearr_31278_33527 = state_31147;
(statearr_31278_33527[(1)] = cljs.core.first((state_31147[(4)])));

} else {
throw ex__28036__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33532 = state_31147;
state_31147 = G__33532;
continue;
} else {
return ret_value__28034__auto__;
}
break;
}
});
cljs$core$async$state_machine__28033__auto__ = function(state_31147){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28033__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28033__auto____1.call(this,state_31147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28033__auto____0;
cljs$core$async$state_machine__28033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28033__auto____1;
return cljs$core$async$state_machine__28033__auto__;
})()
})();
var state__28690__auto__ = (function (){var statearr_31282 = f__28689__auto__();
(statearr_31282[(6)] = c__28688__auto___33423);

return statearr_31282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28690__auto__);
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
var G__31288 = arguments.length;
switch (G__31288) {
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
var G__31298 = arguments.length;
switch (G__31298) {
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
var G__31305 = arguments.length;
switch (G__31305) {
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
var c__28688__auto___33553 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28689__auto__ = (function (){var switch__28032__auto__ = (function (state_31364){
var state_val_31366 = (state_31364[(1)]);
if((state_val_31366 === (7))){
var state_31364__$1 = state_31364;
var statearr_31371_33554 = state_31364__$1;
(statearr_31371_33554[(2)] = null);

(statearr_31371_33554[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31366 === (1))){
var state_31364__$1 = state_31364;
var statearr_31375_33556 = state_31364__$1;
(statearr_31375_33556[(2)] = null);

(statearr_31375_33556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31366 === (4))){
var inst_31318 = (state_31364[(7)]);
var inst_31317 = (state_31364[(8)]);
var inst_31320 = (inst_31318 < inst_31317);
var state_31364__$1 = state_31364;
if(cljs.core.truth_(inst_31320)){
var statearr_31384_33558 = state_31364__$1;
(statearr_31384_33558[(1)] = (6));

} else {
var statearr_31386_33559 = state_31364__$1;
(statearr_31386_33559[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31366 === (15))){
var inst_31349 = (state_31364[(9)]);
var inst_31354 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31349);
var state_31364__$1 = state_31364;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31364__$1,(17),out,inst_31354);
} else {
if((state_val_31366 === (13))){
var inst_31349 = (state_31364[(9)]);
var inst_31349__$1 = (state_31364[(2)]);
var inst_31350 = cljs.core.some(cljs.core.nil_QMARK_,inst_31349__$1);
var state_31364__$1 = (function (){var statearr_31391 = state_31364;
(statearr_31391[(9)] = inst_31349__$1);

return statearr_31391;
})();
if(cljs.core.truth_(inst_31350)){
var statearr_31392_33561 = state_31364__$1;
(statearr_31392_33561[(1)] = (14));

} else {
var statearr_31393_33562 = state_31364__$1;
(statearr_31393_33562[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31366 === (6))){
var state_31364__$1 = state_31364;
var statearr_31398_33563 = state_31364__$1;
(statearr_31398_33563[(2)] = null);

(statearr_31398_33563[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31366 === (17))){
var inst_31356 = (state_31364[(2)]);
var state_31364__$1 = (function (){var statearr_31404 = state_31364;
(statearr_31404[(10)] = inst_31356);

return statearr_31404;
})();
var statearr_31407_33564 = state_31364__$1;
(statearr_31407_33564[(2)] = null);

(statearr_31407_33564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31366 === (3))){
var inst_31361 = (state_31364[(2)]);
var state_31364__$1 = state_31364;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31364__$1,inst_31361);
} else {
if((state_val_31366 === (12))){
var _ = (function (){var statearr_31414 = state_31364;
(statearr_31414[(4)] = cljs.core.rest((state_31364[(4)])));

return statearr_31414;
})();
var state_31364__$1 = state_31364;
var ex31403 = (state_31364__$1[(2)]);
var statearr_31415_33565 = state_31364__$1;
(statearr_31415_33565[(5)] = ex31403);


if((ex31403 instanceof Object)){
var statearr_31417_33569 = state_31364__$1;
(statearr_31417_33569[(1)] = (11));

(statearr_31417_33569[(5)] = null);

} else {
throw ex31403;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31366 === (2))){
var inst_31316 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31317 = cnt;
var inst_31318 = (0);
var state_31364__$1 = (function (){var statearr_31420 = state_31364;
(statearr_31420[(11)] = inst_31316);

(statearr_31420[(7)] = inst_31318);

(statearr_31420[(8)] = inst_31317);

return statearr_31420;
})();
var statearr_31421_33578 = state_31364__$1;
(statearr_31421_33578[(2)] = null);

(statearr_31421_33578[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31366 === (11))){
var inst_31322 = (state_31364[(2)]);
var inst_31323 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31364__$1 = (function (){var statearr_31424 = state_31364;
(statearr_31424[(12)] = inst_31322);

return statearr_31424;
})();
var statearr_31427_33587 = state_31364__$1;
(statearr_31427_33587[(2)] = inst_31323);

(statearr_31427_33587[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31366 === (9))){
var inst_31318 = (state_31364[(7)]);
var _ = (function (){var statearr_31430 = state_31364;
(statearr_31430[(4)] = cljs.core.cons((12),(state_31364[(4)])));

return statearr_31430;
})();
var inst_31335 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31318) : chs__$1.call(null,inst_31318));
var inst_31336 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31318) : done.call(null,inst_31318));
var inst_31337 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31335,inst_31336);
var ___$1 = (function (){var statearr_31432 = state_31364;
(statearr_31432[(4)] = cljs.core.rest((state_31364[(4)])));

return statearr_31432;
})();
var state_31364__$1 = state_31364;
var statearr_31434_33601 = state_31364__$1;
(statearr_31434_33601[(2)] = inst_31337);

(statearr_31434_33601[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31366 === (5))){
var inst_31347 = (state_31364[(2)]);
var state_31364__$1 = (function (){var statearr_31435 = state_31364;
(statearr_31435[(13)] = inst_31347);

return statearr_31435;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31364__$1,(13),dchan);
} else {
if((state_val_31366 === (14))){
var inst_31352 = cljs.core.async.close_BANG_(out);
var state_31364__$1 = state_31364;
var statearr_31436_33610 = state_31364__$1;
(statearr_31436_33610[(2)] = inst_31352);

(statearr_31436_33610[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31366 === (16))){
var inst_31359 = (state_31364[(2)]);
var state_31364__$1 = state_31364;
var statearr_31438_33615 = state_31364__$1;
(statearr_31438_33615[(2)] = inst_31359);

(statearr_31438_33615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31366 === (10))){
var inst_31318 = (state_31364[(7)]);
var inst_31340 = (state_31364[(2)]);
var inst_31341 = (inst_31318 + (1));
var inst_31318__$1 = inst_31341;
var state_31364__$1 = (function (){var statearr_31442 = state_31364;
(statearr_31442[(7)] = inst_31318__$1);

(statearr_31442[(14)] = inst_31340);

return statearr_31442;
})();
var statearr_31443_33629 = state_31364__$1;
(statearr_31443_33629[(2)] = null);

(statearr_31443_33629[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31366 === (8))){
var inst_31345 = (state_31364[(2)]);
var state_31364__$1 = state_31364;
var statearr_31444_33630 = state_31364__$1;
(statearr_31444_33630[(2)] = inst_31345);

(statearr_31444_33630[(1)] = (5));


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
var cljs$core$async$state_machine__28033__auto__ = null;
var cljs$core$async$state_machine__28033__auto____0 = (function (){
var statearr_31446 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31446[(0)] = cljs$core$async$state_machine__28033__auto__);

(statearr_31446[(1)] = (1));

return statearr_31446;
});
var cljs$core$async$state_machine__28033__auto____1 = (function (state_31364){
while(true){
var ret_value__28034__auto__ = (function (){try{while(true){
var result__28035__auto__ = switch__28032__auto__(state_31364);
if(cljs.core.keyword_identical_QMARK_(result__28035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28035__auto__;
}
break;
}
}catch (e31447){var ex__28036__auto__ = e31447;
var statearr_31450_33634 = state_31364;
(statearr_31450_33634[(2)] = ex__28036__auto__);


if(cljs.core.seq((state_31364[(4)]))){
var statearr_31454_33636 = state_31364;
(statearr_31454_33636[(1)] = cljs.core.first((state_31364[(4)])));

} else {
throw ex__28036__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33637 = state_31364;
state_31364 = G__33637;
continue;
} else {
return ret_value__28034__auto__;
}
break;
}
});
cljs$core$async$state_machine__28033__auto__ = function(state_31364){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28033__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28033__auto____1.call(this,state_31364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28033__auto____0;
cljs$core$async$state_machine__28033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28033__auto____1;
return cljs$core$async$state_machine__28033__auto__;
})()
})();
var state__28690__auto__ = (function (){var statearr_31458 = f__28689__auto__();
(statearr_31458[(6)] = c__28688__auto___33553);

return statearr_31458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28690__auto__);
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
var G__31467 = arguments.length;
switch (G__31467) {
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
var c__28688__auto___33648 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28689__auto__ = (function (){var switch__28032__auto__ = (function (state_31523){
var state_val_31524 = (state_31523[(1)]);
if((state_val_31524 === (7))){
var inst_31502 = (state_31523[(7)]);
var inst_31497 = (state_31523[(8)]);
var inst_31497__$1 = (state_31523[(2)]);
var inst_31502__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31497__$1,(0),null);
var inst_31503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31497__$1,(1),null);
var inst_31505 = (inst_31502__$1 == null);
var state_31523__$1 = (function (){var statearr_31534 = state_31523;
(statearr_31534[(7)] = inst_31502__$1);

(statearr_31534[(8)] = inst_31497__$1);

(statearr_31534[(9)] = inst_31503);

return statearr_31534;
})();
if(cljs.core.truth_(inst_31505)){
var statearr_31537_33658 = state_31523__$1;
(statearr_31537_33658[(1)] = (8));

} else {
var statearr_31540_33660 = state_31523__$1;
(statearr_31540_33660[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31524 === (1))){
var inst_31482 = cljs.core.vec(chs);
var inst_31483 = inst_31482;
var state_31523__$1 = (function (){var statearr_31541 = state_31523;
(statearr_31541[(10)] = inst_31483);

return statearr_31541;
})();
var statearr_31543_33672 = state_31523__$1;
(statearr_31543_33672[(2)] = null);

(statearr_31543_33672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31524 === (4))){
var inst_31483 = (state_31523[(10)]);
var state_31523__$1 = state_31523;
return cljs.core.async.ioc_alts_BANG_(state_31523__$1,(7),inst_31483);
} else {
if((state_val_31524 === (6))){
var inst_31519 = (state_31523[(2)]);
var state_31523__$1 = state_31523;
var statearr_31546_33683 = state_31523__$1;
(statearr_31546_33683[(2)] = inst_31519);

(statearr_31546_33683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31524 === (3))){
var inst_31521 = (state_31523[(2)]);
var state_31523__$1 = state_31523;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31523__$1,inst_31521);
} else {
if((state_val_31524 === (2))){
var inst_31483 = (state_31523[(10)]);
var inst_31486 = cljs.core.count(inst_31483);
var inst_31487 = (inst_31486 > (0));
var state_31523__$1 = state_31523;
if(cljs.core.truth_(inst_31487)){
var statearr_31555_33687 = state_31523__$1;
(statearr_31555_33687[(1)] = (4));

} else {
var statearr_31557_33690 = state_31523__$1;
(statearr_31557_33690[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31524 === (11))){
var inst_31483 = (state_31523[(10)]);
var inst_31512 = (state_31523[(2)]);
var tmp31549 = inst_31483;
var inst_31483__$1 = tmp31549;
var state_31523__$1 = (function (){var statearr_31559 = state_31523;
(statearr_31559[(11)] = inst_31512);

(statearr_31559[(10)] = inst_31483__$1);

return statearr_31559;
})();
var statearr_31563_33691 = state_31523__$1;
(statearr_31563_33691[(2)] = null);

(statearr_31563_33691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31524 === (9))){
var inst_31502 = (state_31523[(7)]);
var state_31523__$1 = state_31523;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31523__$1,(11),out,inst_31502);
} else {
if((state_val_31524 === (5))){
var inst_31517 = cljs.core.async.close_BANG_(out);
var state_31523__$1 = state_31523;
var statearr_31578_33695 = state_31523__$1;
(statearr_31578_33695[(2)] = inst_31517);

(statearr_31578_33695[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31524 === (10))){
var inst_31515 = (state_31523[(2)]);
var state_31523__$1 = state_31523;
var statearr_31583_33697 = state_31523__$1;
(statearr_31583_33697[(2)] = inst_31515);

(statearr_31583_33697[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31524 === (8))){
var inst_31502 = (state_31523[(7)]);
var inst_31483 = (state_31523[(10)]);
var inst_31497 = (state_31523[(8)]);
var inst_31503 = (state_31523[(9)]);
var inst_31507 = (function (){var cs = inst_31483;
var vec__31489 = inst_31497;
var v = inst_31502;
var c = inst_31503;
return (function (p1__31459_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31459_SHARP_);
});
})();
var inst_31508 = cljs.core.filterv(inst_31507,inst_31483);
var inst_31483__$1 = inst_31508;
var state_31523__$1 = (function (){var statearr_31592 = state_31523;
(statearr_31592[(10)] = inst_31483__$1);

return statearr_31592;
})();
var statearr_31593_33705 = state_31523__$1;
(statearr_31593_33705[(2)] = null);

(statearr_31593_33705[(1)] = (2));


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
var cljs$core$async$state_machine__28033__auto__ = null;
var cljs$core$async$state_machine__28033__auto____0 = (function (){
var statearr_31603 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31603[(0)] = cljs$core$async$state_machine__28033__auto__);

(statearr_31603[(1)] = (1));

return statearr_31603;
});
var cljs$core$async$state_machine__28033__auto____1 = (function (state_31523){
while(true){
var ret_value__28034__auto__ = (function (){try{while(true){
var result__28035__auto__ = switch__28032__auto__(state_31523);
if(cljs.core.keyword_identical_QMARK_(result__28035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28035__auto__;
}
break;
}
}catch (e31607){var ex__28036__auto__ = e31607;
var statearr_31608_33716 = state_31523;
(statearr_31608_33716[(2)] = ex__28036__auto__);


if(cljs.core.seq((state_31523[(4)]))){
var statearr_31611_33721 = state_31523;
(statearr_31611_33721[(1)] = cljs.core.first((state_31523[(4)])));

} else {
throw ex__28036__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33723 = state_31523;
state_31523 = G__33723;
continue;
} else {
return ret_value__28034__auto__;
}
break;
}
});
cljs$core$async$state_machine__28033__auto__ = function(state_31523){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28033__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28033__auto____1.call(this,state_31523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28033__auto____0;
cljs$core$async$state_machine__28033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28033__auto____1;
return cljs$core$async$state_machine__28033__auto__;
})()
})();
var state__28690__auto__ = (function (){var statearr_31615 = f__28689__auto__();
(statearr_31615[(6)] = c__28688__auto___33648);

return statearr_31615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28690__auto__);
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
var G__31623 = arguments.length;
switch (G__31623) {
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
var c__28688__auto___33732 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28689__auto__ = (function (){var switch__28032__auto__ = (function (state_31670){
var state_val_31671 = (state_31670[(1)]);
if((state_val_31671 === (7))){
var inst_31651 = (state_31670[(7)]);
var inst_31651__$1 = (state_31670[(2)]);
var inst_31652 = (inst_31651__$1 == null);
var inst_31653 = cljs.core.not(inst_31652);
var state_31670__$1 = (function (){var statearr_31682 = state_31670;
(statearr_31682[(7)] = inst_31651__$1);

return statearr_31682;
})();
if(inst_31653){
var statearr_31687_33736 = state_31670__$1;
(statearr_31687_33736[(1)] = (8));

} else {
var statearr_31690_33737 = state_31670__$1;
(statearr_31690_33737[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (1))){
var inst_31644 = (0);
var state_31670__$1 = (function (){var statearr_31693 = state_31670;
(statearr_31693[(8)] = inst_31644);

return statearr_31693;
})();
var statearr_31696_33738 = state_31670__$1;
(statearr_31696_33738[(2)] = null);

(statearr_31696_33738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (4))){
var state_31670__$1 = state_31670;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31670__$1,(7),ch);
} else {
if((state_val_31671 === (6))){
var inst_31665 = (state_31670[(2)]);
var state_31670__$1 = state_31670;
var statearr_31702_33740 = state_31670__$1;
(statearr_31702_33740[(2)] = inst_31665);

(statearr_31702_33740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (3))){
var inst_31667 = (state_31670[(2)]);
var inst_31668 = cljs.core.async.close_BANG_(out);
var state_31670__$1 = (function (){var statearr_31711 = state_31670;
(statearr_31711[(9)] = inst_31667);

return statearr_31711;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31670__$1,inst_31668);
} else {
if((state_val_31671 === (2))){
var inst_31644 = (state_31670[(8)]);
var inst_31648 = (inst_31644 < n);
var state_31670__$1 = state_31670;
if(cljs.core.truth_(inst_31648)){
var statearr_31712_33741 = state_31670__$1;
(statearr_31712_33741[(1)] = (4));

} else {
var statearr_31714_33742 = state_31670__$1;
(statearr_31714_33742[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (11))){
var inst_31644 = (state_31670[(8)]);
var inst_31656 = (state_31670[(2)]);
var inst_31658 = (inst_31644 + (1));
var inst_31644__$1 = inst_31658;
var state_31670__$1 = (function (){var statearr_31717 = state_31670;
(statearr_31717[(10)] = inst_31656);

(statearr_31717[(8)] = inst_31644__$1);

return statearr_31717;
})();
var statearr_31720_33743 = state_31670__$1;
(statearr_31720_33743[(2)] = null);

(statearr_31720_33743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (9))){
var state_31670__$1 = state_31670;
var statearr_31721_33744 = state_31670__$1;
(statearr_31721_33744[(2)] = null);

(statearr_31721_33744[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (5))){
var state_31670__$1 = state_31670;
var statearr_31722_33748 = state_31670__$1;
(statearr_31722_33748[(2)] = null);

(statearr_31722_33748[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (10))){
var inst_31662 = (state_31670[(2)]);
var state_31670__$1 = state_31670;
var statearr_31724_33749 = state_31670__$1;
(statearr_31724_33749[(2)] = inst_31662);

(statearr_31724_33749[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (8))){
var inst_31651 = (state_31670[(7)]);
var state_31670__$1 = state_31670;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31670__$1,(11),out,inst_31651);
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
var cljs$core$async$state_machine__28033__auto__ = null;
var cljs$core$async$state_machine__28033__auto____0 = (function (){
var statearr_31731 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31731[(0)] = cljs$core$async$state_machine__28033__auto__);

(statearr_31731[(1)] = (1));

return statearr_31731;
});
var cljs$core$async$state_machine__28033__auto____1 = (function (state_31670){
while(true){
var ret_value__28034__auto__ = (function (){try{while(true){
var result__28035__auto__ = switch__28032__auto__(state_31670);
if(cljs.core.keyword_identical_QMARK_(result__28035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28035__auto__;
}
break;
}
}catch (e31733){var ex__28036__auto__ = e31733;
var statearr_31734_33750 = state_31670;
(statearr_31734_33750[(2)] = ex__28036__auto__);


if(cljs.core.seq((state_31670[(4)]))){
var statearr_31737_33751 = state_31670;
(statearr_31737_33751[(1)] = cljs.core.first((state_31670[(4)])));

} else {
throw ex__28036__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33752 = state_31670;
state_31670 = G__33752;
continue;
} else {
return ret_value__28034__auto__;
}
break;
}
});
cljs$core$async$state_machine__28033__auto__ = function(state_31670){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28033__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28033__auto____1.call(this,state_31670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28033__auto____0;
cljs$core$async$state_machine__28033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28033__auto____1;
return cljs$core$async$state_machine__28033__auto__;
})()
})();
var state__28690__auto__ = (function (){var statearr_31742 = f__28689__auto__();
(statearr_31742[(6)] = c__28688__auto___33732);

return statearr_31742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28690__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31755 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31755 = (function (f,ch,meta31756){
this.f = f;
this.ch = ch;
this.meta31756 = meta31756;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31757,meta31756__$1){
var self__ = this;
var _31757__$1 = this;
return (new cljs.core.async.t_cljs$core$async31755(self__.f,self__.ch,meta31756__$1));
}));

(cljs.core.async.t_cljs$core$async31755.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31757){
var self__ = this;
var _31757__$1 = this;
return self__.meta31756;
}));

(cljs.core.async.t_cljs$core$async31755.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31755.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31755.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31755.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31755.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31784 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31784 = (function (f,ch,meta31756,_,fn1,meta31785){
this.f = f;
this.ch = ch;
this.meta31756 = meta31756;
this._ = _;
this.fn1 = fn1;
this.meta31785 = meta31785;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31786,meta31785__$1){
var self__ = this;
var _31786__$1 = this;
return (new cljs.core.async.t_cljs$core$async31784(self__.f,self__.ch,self__.meta31756,self__._,self__.fn1,meta31785__$1));
}));

(cljs.core.async.t_cljs$core$async31784.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31786){
var self__ = this;
var _31786__$1 = this;
return self__.meta31785;
}));

(cljs.core.async.t_cljs$core$async31784.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31784.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31784.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31784.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31747_SHARP_){
var G__31797 = (((p1__31747_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31747_SHARP_) : self__.f.call(null,p1__31747_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31797) : f1.call(null,G__31797));
});
}));

(cljs.core.async.t_cljs$core$async31784.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31756","meta31756",-1453006860,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31755","cljs.core.async/t_cljs$core$async31755",-1207325585,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31785","meta31785",-89427002,null)], null);
}));

(cljs.core.async.t_cljs$core$async31784.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31784.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31784");

(cljs.core.async.t_cljs$core$async31784.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31784");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31784.
 */
cljs.core.async.__GT_t_cljs$core$async31784 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31784(f__$1,ch__$1,meta31756__$1,___$2,fn1__$1,meta31785){
return (new cljs.core.async.t_cljs$core$async31784(f__$1,ch__$1,meta31756__$1,___$2,fn1__$1,meta31785));
});

}

return (new cljs.core.async.t_cljs$core$async31784(self__.f,self__.ch,self__.meta31756,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31820 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31820) : self__.f.call(null,G__31820));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31755.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31755.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31755.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31756","meta31756",-1453006860,null)], null);
}));

(cljs.core.async.t_cljs$core$async31755.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31755.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31755");

(cljs.core.async.t_cljs$core$async31755.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31755");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31755.
 */
cljs.core.async.__GT_t_cljs$core$async31755 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31755(f__$1,ch__$1,meta31756){
return (new cljs.core.async.t_cljs$core$async31755(f__$1,ch__$1,meta31756));
});

}

return (new cljs.core.async.t_cljs$core$async31755(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31838 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31838 = (function (f,ch,meta31839){
this.f = f;
this.ch = ch;
this.meta31839 = meta31839;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31840,meta31839__$1){
var self__ = this;
var _31840__$1 = this;
return (new cljs.core.async.t_cljs$core$async31838(self__.f,self__.ch,meta31839__$1));
}));

(cljs.core.async.t_cljs$core$async31838.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31840){
var self__ = this;
var _31840__$1 = this;
return self__.meta31839;
}));

(cljs.core.async.t_cljs$core$async31838.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31838.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31838.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31838.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31838.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31838.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31838.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31839","meta31839",-1270264481,null)], null);
}));

(cljs.core.async.t_cljs$core$async31838.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31838.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31838");

(cljs.core.async.t_cljs$core$async31838.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31838");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31838.
 */
cljs.core.async.__GT_t_cljs$core$async31838 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31838(f__$1,ch__$1,meta31839){
return (new cljs.core.async.t_cljs$core$async31838(f__$1,ch__$1,meta31839));
});

}

return (new cljs.core.async.t_cljs$core$async31838(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31864 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31864 = (function (p,ch,meta31865){
this.p = p;
this.ch = ch;
this.meta31865 = meta31865;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31866,meta31865__$1){
var self__ = this;
var _31866__$1 = this;
return (new cljs.core.async.t_cljs$core$async31864(self__.p,self__.ch,meta31865__$1));
}));

(cljs.core.async.t_cljs$core$async31864.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31866){
var self__ = this;
var _31866__$1 = this;
return self__.meta31865;
}));

(cljs.core.async.t_cljs$core$async31864.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31864.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31864.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31864.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31864.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31864.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31864.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31864.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31865","meta31865",1996744589,null)], null);
}));

(cljs.core.async.t_cljs$core$async31864.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31864.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31864");

(cljs.core.async.t_cljs$core$async31864.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31864");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31864.
 */
cljs.core.async.__GT_t_cljs$core$async31864 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31864(p__$1,ch__$1,meta31865){
return (new cljs.core.async.t_cljs$core$async31864(p__$1,ch__$1,meta31865));
});

}

return (new cljs.core.async.t_cljs$core$async31864(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31886 = arguments.length;
switch (G__31886) {
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
var c__28688__auto___33758 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28689__auto__ = (function (){var switch__28032__auto__ = (function (state_31916){
var state_val_31917 = (state_31916[(1)]);
if((state_val_31917 === (7))){
var inst_31912 = (state_31916[(2)]);
var state_31916__$1 = state_31916;
var statearr_31925_33759 = state_31916__$1;
(statearr_31925_33759[(2)] = inst_31912);

(statearr_31925_33759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31917 === (1))){
var state_31916__$1 = state_31916;
var statearr_31927_33764 = state_31916__$1;
(statearr_31927_33764[(2)] = null);

(statearr_31927_33764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31917 === (4))){
var inst_31892 = (state_31916[(7)]);
var inst_31892__$1 = (state_31916[(2)]);
var inst_31893 = (inst_31892__$1 == null);
var state_31916__$1 = (function (){var statearr_31951 = state_31916;
(statearr_31951[(7)] = inst_31892__$1);

return statearr_31951;
})();
if(cljs.core.truth_(inst_31893)){
var statearr_31956_33765 = state_31916__$1;
(statearr_31956_33765[(1)] = (5));

} else {
var statearr_31957_33766 = state_31916__$1;
(statearr_31957_33766[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31917 === (6))){
var inst_31892 = (state_31916[(7)]);
var inst_31897 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31892) : p.call(null,inst_31892));
var state_31916__$1 = state_31916;
if(cljs.core.truth_(inst_31897)){
var statearr_31958_33769 = state_31916__$1;
(statearr_31958_33769[(1)] = (8));

} else {
var statearr_31959_33774 = state_31916__$1;
(statearr_31959_33774[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31917 === (3))){
var inst_31914 = (state_31916[(2)]);
var state_31916__$1 = state_31916;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31916__$1,inst_31914);
} else {
if((state_val_31917 === (2))){
var state_31916__$1 = state_31916;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31916__$1,(4),ch);
} else {
if((state_val_31917 === (11))){
var inst_31903 = (state_31916[(2)]);
var state_31916__$1 = state_31916;
var statearr_31960_33778 = state_31916__$1;
(statearr_31960_33778[(2)] = inst_31903);

(statearr_31960_33778[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31917 === (9))){
var state_31916__$1 = state_31916;
var statearr_31961_33780 = state_31916__$1;
(statearr_31961_33780[(2)] = null);

(statearr_31961_33780[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31917 === (5))){
var inst_31895 = cljs.core.async.close_BANG_(out);
var state_31916__$1 = state_31916;
var statearr_31962_33781 = state_31916__$1;
(statearr_31962_33781[(2)] = inst_31895);

(statearr_31962_33781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31917 === (10))){
var inst_31909 = (state_31916[(2)]);
var state_31916__$1 = (function (){var statearr_31965 = state_31916;
(statearr_31965[(8)] = inst_31909);

return statearr_31965;
})();
var statearr_31967_33782 = state_31916__$1;
(statearr_31967_33782[(2)] = null);

(statearr_31967_33782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31917 === (8))){
var inst_31892 = (state_31916[(7)]);
var state_31916__$1 = state_31916;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31916__$1,(11),out,inst_31892);
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
var cljs$core$async$state_machine__28033__auto__ = null;
var cljs$core$async$state_machine__28033__auto____0 = (function (){
var statearr_31973 = [null,null,null,null,null,null,null,null,null];
(statearr_31973[(0)] = cljs$core$async$state_machine__28033__auto__);

(statearr_31973[(1)] = (1));

return statearr_31973;
});
var cljs$core$async$state_machine__28033__auto____1 = (function (state_31916){
while(true){
var ret_value__28034__auto__ = (function (){try{while(true){
var result__28035__auto__ = switch__28032__auto__(state_31916);
if(cljs.core.keyword_identical_QMARK_(result__28035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28035__auto__;
}
break;
}
}catch (e31975){var ex__28036__auto__ = e31975;
var statearr_31977_33784 = state_31916;
(statearr_31977_33784[(2)] = ex__28036__auto__);


if(cljs.core.seq((state_31916[(4)]))){
var statearr_31978_33785 = state_31916;
(statearr_31978_33785[(1)] = cljs.core.first((state_31916[(4)])));

} else {
throw ex__28036__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33786 = state_31916;
state_31916 = G__33786;
continue;
} else {
return ret_value__28034__auto__;
}
break;
}
});
cljs$core$async$state_machine__28033__auto__ = function(state_31916){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28033__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28033__auto____1.call(this,state_31916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28033__auto____0;
cljs$core$async$state_machine__28033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28033__auto____1;
return cljs$core$async$state_machine__28033__auto__;
})()
})();
var state__28690__auto__ = (function (){var statearr_31980 = f__28689__auto__();
(statearr_31980[(6)] = c__28688__auto___33758);

return statearr_31980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28690__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31987 = arguments.length;
switch (G__31987) {
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
var c__28688__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28689__auto__ = (function (){var switch__28032__auto__ = (function (state_32057){
var state_val_32058 = (state_32057[(1)]);
if((state_val_32058 === (7))){
var inst_32052 = (state_32057[(2)]);
var state_32057__$1 = state_32057;
var statearr_32059_33792 = state_32057__$1;
(statearr_32059_33792[(2)] = inst_32052);

(statearr_32059_33792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (20))){
var inst_32020 = (state_32057[(7)]);
var inst_32032 = (state_32057[(2)]);
var inst_32034 = cljs.core.next(inst_32020);
var inst_32004 = inst_32034;
var inst_32005 = null;
var inst_32006 = (0);
var inst_32007 = (0);
var state_32057__$1 = (function (){var statearr_32060 = state_32057;
(statearr_32060[(8)] = inst_32032);

(statearr_32060[(9)] = inst_32004);

(statearr_32060[(10)] = inst_32007);

(statearr_32060[(11)] = inst_32006);

(statearr_32060[(12)] = inst_32005);

return statearr_32060;
})();
var statearr_32061_33795 = state_32057__$1;
(statearr_32061_33795[(2)] = null);

(statearr_32061_33795[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (1))){
var state_32057__$1 = state_32057;
var statearr_32062_33796 = state_32057__$1;
(statearr_32062_33796[(2)] = null);

(statearr_32062_33796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (4))){
var inst_31993 = (state_32057[(13)]);
var inst_31993__$1 = (state_32057[(2)]);
var inst_31994 = (inst_31993__$1 == null);
var state_32057__$1 = (function (){var statearr_32063 = state_32057;
(statearr_32063[(13)] = inst_31993__$1);

return statearr_32063;
})();
if(cljs.core.truth_(inst_31994)){
var statearr_32064_33800 = state_32057__$1;
(statearr_32064_33800[(1)] = (5));

} else {
var statearr_32065_33801 = state_32057__$1;
(statearr_32065_33801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (15))){
var state_32057__$1 = state_32057;
var statearr_32069_33802 = state_32057__$1;
(statearr_32069_33802[(2)] = null);

(statearr_32069_33802[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (21))){
var state_32057__$1 = state_32057;
var statearr_32070_33803 = state_32057__$1;
(statearr_32070_33803[(2)] = null);

(statearr_32070_33803[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (13))){
var inst_32004 = (state_32057[(9)]);
var inst_32007 = (state_32057[(10)]);
var inst_32006 = (state_32057[(11)]);
var inst_32005 = (state_32057[(12)]);
var inst_32016 = (state_32057[(2)]);
var inst_32017 = (inst_32007 + (1));
var tmp32066 = inst_32004;
var tmp32067 = inst_32006;
var tmp32068 = inst_32005;
var inst_32004__$1 = tmp32066;
var inst_32005__$1 = tmp32068;
var inst_32006__$1 = tmp32067;
var inst_32007__$1 = inst_32017;
var state_32057__$1 = (function (){var statearr_32071 = state_32057;
(statearr_32071[(9)] = inst_32004__$1);

(statearr_32071[(10)] = inst_32007__$1);

(statearr_32071[(11)] = inst_32006__$1);

(statearr_32071[(14)] = inst_32016);

(statearr_32071[(12)] = inst_32005__$1);

return statearr_32071;
})();
var statearr_32077_33811 = state_32057__$1;
(statearr_32077_33811[(2)] = null);

(statearr_32077_33811[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (22))){
var state_32057__$1 = state_32057;
var statearr_32082_33812 = state_32057__$1;
(statearr_32082_33812[(2)] = null);

(statearr_32082_33812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (6))){
var inst_31993 = (state_32057[(13)]);
var inst_32002 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31993) : f.call(null,inst_31993));
var inst_32003 = cljs.core.seq(inst_32002);
var inst_32004 = inst_32003;
var inst_32005 = null;
var inst_32006 = (0);
var inst_32007 = (0);
var state_32057__$1 = (function (){var statearr_32083 = state_32057;
(statearr_32083[(9)] = inst_32004);

(statearr_32083[(10)] = inst_32007);

(statearr_32083[(11)] = inst_32006);

(statearr_32083[(12)] = inst_32005);

return statearr_32083;
})();
var statearr_32089_33817 = state_32057__$1;
(statearr_32089_33817[(2)] = null);

(statearr_32089_33817[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (17))){
var inst_32020 = (state_32057[(7)]);
var inst_32024 = cljs.core.chunk_first(inst_32020);
var inst_32025 = cljs.core.chunk_rest(inst_32020);
var inst_32026 = cljs.core.count(inst_32024);
var inst_32004 = inst_32025;
var inst_32005 = inst_32024;
var inst_32006 = inst_32026;
var inst_32007 = (0);
var state_32057__$1 = (function (){var statearr_32091 = state_32057;
(statearr_32091[(9)] = inst_32004);

(statearr_32091[(10)] = inst_32007);

(statearr_32091[(11)] = inst_32006);

(statearr_32091[(12)] = inst_32005);

return statearr_32091;
})();
var statearr_32092_33824 = state_32057__$1;
(statearr_32092_33824[(2)] = null);

(statearr_32092_33824[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (3))){
var inst_32054 = (state_32057[(2)]);
var state_32057__$1 = state_32057;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32057__$1,inst_32054);
} else {
if((state_val_32058 === (12))){
var inst_32042 = (state_32057[(2)]);
var state_32057__$1 = state_32057;
var statearr_32093_33827 = state_32057__$1;
(statearr_32093_33827[(2)] = inst_32042);

(statearr_32093_33827[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (2))){
var state_32057__$1 = state_32057;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32057__$1,(4),in$);
} else {
if((state_val_32058 === (23))){
var inst_32050 = (state_32057[(2)]);
var state_32057__$1 = state_32057;
var statearr_32094_33832 = state_32057__$1;
(statearr_32094_33832[(2)] = inst_32050);

(statearr_32094_33832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (19))){
var inst_32037 = (state_32057[(2)]);
var state_32057__$1 = state_32057;
var statearr_32095_33833 = state_32057__$1;
(statearr_32095_33833[(2)] = inst_32037);

(statearr_32095_33833[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (11))){
var inst_32004 = (state_32057[(9)]);
var inst_32020 = (state_32057[(7)]);
var inst_32020__$1 = cljs.core.seq(inst_32004);
var state_32057__$1 = (function (){var statearr_32096 = state_32057;
(statearr_32096[(7)] = inst_32020__$1);

return statearr_32096;
})();
if(inst_32020__$1){
var statearr_32097_33837 = state_32057__$1;
(statearr_32097_33837[(1)] = (14));

} else {
var statearr_32098_33838 = state_32057__$1;
(statearr_32098_33838[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (9))){
var inst_32044 = (state_32057[(2)]);
var inst_32045 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32057__$1 = (function (){var statearr_32099 = state_32057;
(statearr_32099[(15)] = inst_32044);

return statearr_32099;
})();
if(cljs.core.truth_(inst_32045)){
var statearr_32100_33842 = state_32057__$1;
(statearr_32100_33842[(1)] = (21));

} else {
var statearr_32101_33843 = state_32057__$1;
(statearr_32101_33843[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (5))){
var inst_31996 = cljs.core.async.close_BANG_(out);
var state_32057__$1 = state_32057;
var statearr_32102_33850 = state_32057__$1;
(statearr_32102_33850[(2)] = inst_31996);

(statearr_32102_33850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (14))){
var inst_32020 = (state_32057[(7)]);
var inst_32022 = cljs.core.chunked_seq_QMARK_(inst_32020);
var state_32057__$1 = state_32057;
if(inst_32022){
var statearr_32106_33851 = state_32057__$1;
(statearr_32106_33851[(1)] = (17));

} else {
var statearr_32107_33858 = state_32057__$1;
(statearr_32107_33858[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (16))){
var inst_32040 = (state_32057[(2)]);
var state_32057__$1 = state_32057;
var statearr_32112_33861 = state_32057__$1;
(statearr_32112_33861[(2)] = inst_32040);

(statearr_32112_33861[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (10))){
var inst_32007 = (state_32057[(10)]);
var inst_32005 = (state_32057[(12)]);
var inst_32014 = cljs.core._nth(inst_32005,inst_32007);
var state_32057__$1 = state_32057;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32057__$1,(13),out,inst_32014);
} else {
if((state_val_32058 === (18))){
var inst_32020 = (state_32057[(7)]);
var inst_32030 = cljs.core.first(inst_32020);
var state_32057__$1 = state_32057;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32057__$1,(20),out,inst_32030);
} else {
if((state_val_32058 === (8))){
var inst_32007 = (state_32057[(10)]);
var inst_32006 = (state_32057[(11)]);
var inst_32009 = (inst_32007 < inst_32006);
var inst_32010 = inst_32009;
var state_32057__$1 = state_32057;
if(cljs.core.truth_(inst_32010)){
var statearr_32123_33864 = state_32057__$1;
(statearr_32123_33864[(1)] = (10));

} else {
var statearr_32124_33865 = state_32057__$1;
(statearr_32124_33865[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__28033__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28033__auto____0 = (function (){
var statearr_32126 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32126[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28033__auto__);

(statearr_32126[(1)] = (1));

return statearr_32126;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28033__auto____1 = (function (state_32057){
while(true){
var ret_value__28034__auto__ = (function (){try{while(true){
var result__28035__auto__ = switch__28032__auto__(state_32057);
if(cljs.core.keyword_identical_QMARK_(result__28035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28035__auto__;
}
break;
}
}catch (e32129){var ex__28036__auto__ = e32129;
var statearr_32130_33867 = state_32057;
(statearr_32130_33867[(2)] = ex__28036__auto__);


if(cljs.core.seq((state_32057[(4)]))){
var statearr_32134_33868 = state_32057;
(statearr_32134_33868[(1)] = cljs.core.first((state_32057[(4)])));

} else {
throw ex__28036__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33869 = state_32057;
state_32057 = G__33869;
continue;
} else {
return ret_value__28034__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28033__auto__ = function(state_32057){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28033__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28033__auto____1.call(this,state_32057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28033__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28033__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28033__auto__;
})()
})();
var state__28690__auto__ = (function (){var statearr_32135 = f__28689__auto__();
(statearr_32135[(6)] = c__28688__auto__);

return statearr_32135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28690__auto__);
}));

return c__28688__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32141 = arguments.length;
switch (G__32141) {
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
var G__32149 = arguments.length;
switch (G__32149) {
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
var G__32156 = arguments.length;
switch (G__32156) {
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
var c__28688__auto___33885 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28689__auto__ = (function (){var switch__28032__auto__ = (function (state_32194){
var state_val_32195 = (state_32194[(1)]);
if((state_val_32195 === (7))){
var inst_32189 = (state_32194[(2)]);
var state_32194__$1 = state_32194;
var statearr_32198_33886 = state_32194__$1;
(statearr_32198_33886[(2)] = inst_32189);

(statearr_32198_33886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (1))){
var inst_32165 = null;
var state_32194__$1 = (function (){var statearr_32201 = state_32194;
(statearr_32201[(7)] = inst_32165);

return statearr_32201;
})();
var statearr_32202_33893 = state_32194__$1;
(statearr_32202_33893[(2)] = null);

(statearr_32202_33893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (4))){
var inst_32169 = (state_32194[(8)]);
var inst_32169__$1 = (state_32194[(2)]);
var inst_32170 = (inst_32169__$1 == null);
var inst_32171 = cljs.core.not(inst_32170);
var state_32194__$1 = (function (){var statearr_32203 = state_32194;
(statearr_32203[(8)] = inst_32169__$1);

return statearr_32203;
})();
if(inst_32171){
var statearr_32204_33894 = state_32194__$1;
(statearr_32204_33894[(1)] = (5));

} else {
var statearr_32205_33895 = state_32194__$1;
(statearr_32205_33895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (6))){
var state_32194__$1 = state_32194;
var statearr_32206_33896 = state_32194__$1;
(statearr_32206_33896[(2)] = null);

(statearr_32206_33896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (3))){
var inst_32191 = (state_32194[(2)]);
var inst_32192 = cljs.core.async.close_BANG_(out);
var state_32194__$1 = (function (){var statearr_32207 = state_32194;
(statearr_32207[(9)] = inst_32191);

return statearr_32207;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32194__$1,inst_32192);
} else {
if((state_val_32195 === (2))){
var state_32194__$1 = state_32194;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32194__$1,(4),ch);
} else {
if((state_val_32195 === (11))){
var inst_32169 = (state_32194[(8)]);
var inst_32182 = (state_32194[(2)]);
var inst_32165 = inst_32169;
var state_32194__$1 = (function (){var statearr_32210 = state_32194;
(statearr_32210[(10)] = inst_32182);

(statearr_32210[(7)] = inst_32165);

return statearr_32210;
})();
var statearr_32211_33906 = state_32194__$1;
(statearr_32211_33906[(2)] = null);

(statearr_32211_33906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (9))){
var inst_32169 = (state_32194[(8)]);
var state_32194__$1 = state_32194;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32194__$1,(11),out,inst_32169);
} else {
if((state_val_32195 === (5))){
var inst_32169 = (state_32194[(8)]);
var inst_32165 = (state_32194[(7)]);
var inst_32177 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32169,inst_32165);
var state_32194__$1 = state_32194;
if(inst_32177){
var statearr_32213_33907 = state_32194__$1;
(statearr_32213_33907[(1)] = (8));

} else {
var statearr_32214_33909 = state_32194__$1;
(statearr_32214_33909[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (10))){
var inst_32186 = (state_32194[(2)]);
var state_32194__$1 = state_32194;
var statearr_32215_33910 = state_32194__$1;
(statearr_32215_33910[(2)] = inst_32186);

(statearr_32215_33910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (8))){
var inst_32165 = (state_32194[(7)]);
var tmp32212 = inst_32165;
var inst_32165__$1 = tmp32212;
var state_32194__$1 = (function (){var statearr_32216 = state_32194;
(statearr_32216[(7)] = inst_32165__$1);

return statearr_32216;
})();
var statearr_32217_33911 = state_32194__$1;
(statearr_32217_33911[(2)] = null);

(statearr_32217_33911[(1)] = (2));


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
var cljs$core$async$state_machine__28033__auto__ = null;
var cljs$core$async$state_machine__28033__auto____0 = (function (){
var statearr_32219 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32219[(0)] = cljs$core$async$state_machine__28033__auto__);

(statearr_32219[(1)] = (1));

return statearr_32219;
});
var cljs$core$async$state_machine__28033__auto____1 = (function (state_32194){
while(true){
var ret_value__28034__auto__ = (function (){try{while(true){
var result__28035__auto__ = switch__28032__auto__(state_32194);
if(cljs.core.keyword_identical_QMARK_(result__28035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28035__auto__;
}
break;
}
}catch (e32220){var ex__28036__auto__ = e32220;
var statearr_32221_33914 = state_32194;
(statearr_32221_33914[(2)] = ex__28036__auto__);


if(cljs.core.seq((state_32194[(4)]))){
var statearr_32222_33915 = state_32194;
(statearr_32222_33915[(1)] = cljs.core.first((state_32194[(4)])));

} else {
throw ex__28036__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33917 = state_32194;
state_32194 = G__33917;
continue;
} else {
return ret_value__28034__auto__;
}
break;
}
});
cljs$core$async$state_machine__28033__auto__ = function(state_32194){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28033__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28033__auto____1.call(this,state_32194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28033__auto____0;
cljs$core$async$state_machine__28033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28033__auto____1;
return cljs$core$async$state_machine__28033__auto__;
})()
})();
var state__28690__auto__ = (function (){var statearr_32223 = f__28689__auto__();
(statearr_32223[(6)] = c__28688__auto___33885);

return statearr_32223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28690__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32230 = arguments.length;
switch (G__32230) {
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
var c__28688__auto___33920 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28689__auto__ = (function (){var switch__28032__auto__ = (function (state_32273){
var state_val_32276 = (state_32273[(1)]);
if((state_val_32276 === (7))){
var inst_32269 = (state_32273[(2)]);
var state_32273__$1 = state_32273;
var statearr_32281_33924 = state_32273__$1;
(statearr_32281_33924[(2)] = inst_32269);

(statearr_32281_33924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (1))){
var inst_32235 = (new Array(n));
var inst_32236 = inst_32235;
var inst_32237 = (0);
var state_32273__$1 = (function (){var statearr_32288 = state_32273;
(statearr_32288[(7)] = inst_32237);

(statearr_32288[(8)] = inst_32236);

return statearr_32288;
})();
var statearr_32290_33927 = state_32273__$1;
(statearr_32290_33927[(2)] = null);

(statearr_32290_33927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (4))){
var inst_32241 = (state_32273[(9)]);
var inst_32241__$1 = (state_32273[(2)]);
var inst_32242 = (inst_32241__$1 == null);
var inst_32243 = cljs.core.not(inst_32242);
var state_32273__$1 = (function (){var statearr_32296 = state_32273;
(statearr_32296[(9)] = inst_32241__$1);

return statearr_32296;
})();
if(inst_32243){
var statearr_32297_33929 = state_32273__$1;
(statearr_32297_33929[(1)] = (5));

} else {
var statearr_32299_33930 = state_32273__$1;
(statearr_32299_33930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (15))){
var inst_32263 = (state_32273[(2)]);
var state_32273__$1 = state_32273;
var statearr_32301_33931 = state_32273__$1;
(statearr_32301_33931[(2)] = inst_32263);

(statearr_32301_33931[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (13))){
var state_32273__$1 = state_32273;
var statearr_32303_33932 = state_32273__$1;
(statearr_32303_33932[(2)] = null);

(statearr_32303_33932[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (6))){
var inst_32237 = (state_32273[(7)]);
var inst_32259 = (inst_32237 > (0));
var state_32273__$1 = state_32273;
if(cljs.core.truth_(inst_32259)){
var statearr_32305_33933 = state_32273__$1;
(statearr_32305_33933[(1)] = (12));

} else {
var statearr_32306_33934 = state_32273__$1;
(statearr_32306_33934[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (3))){
var inst_32271 = (state_32273[(2)]);
var state_32273__$1 = state_32273;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32273__$1,inst_32271);
} else {
if((state_val_32276 === (12))){
var inst_32236 = (state_32273[(8)]);
var inst_32261 = cljs.core.vec(inst_32236);
var state_32273__$1 = state_32273;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32273__$1,(15),out,inst_32261);
} else {
if((state_val_32276 === (2))){
var state_32273__$1 = state_32273;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32273__$1,(4),ch);
} else {
if((state_val_32276 === (11))){
var inst_32253 = (state_32273[(2)]);
var inst_32254 = (new Array(n));
var inst_32236 = inst_32254;
var inst_32237 = (0);
var state_32273__$1 = (function (){var statearr_32314 = state_32273;
(statearr_32314[(10)] = inst_32253);

(statearr_32314[(7)] = inst_32237);

(statearr_32314[(8)] = inst_32236);

return statearr_32314;
})();
var statearr_32315_33951 = state_32273__$1;
(statearr_32315_33951[(2)] = null);

(statearr_32315_33951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (9))){
var inst_32236 = (state_32273[(8)]);
var inst_32251 = cljs.core.vec(inst_32236);
var state_32273__$1 = state_32273;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32273__$1,(11),out,inst_32251);
} else {
if((state_val_32276 === (5))){
var inst_32237 = (state_32273[(7)]);
var inst_32236 = (state_32273[(8)]);
var inst_32246 = (state_32273[(11)]);
var inst_32241 = (state_32273[(9)]);
var inst_32245 = (inst_32236[inst_32237] = inst_32241);
var inst_32246__$1 = (inst_32237 + (1));
var inst_32247 = (inst_32246__$1 < n);
var state_32273__$1 = (function (){var statearr_32316 = state_32273;
(statearr_32316[(11)] = inst_32246__$1);

(statearr_32316[(12)] = inst_32245);

return statearr_32316;
})();
if(cljs.core.truth_(inst_32247)){
var statearr_32317_33963 = state_32273__$1;
(statearr_32317_33963[(1)] = (8));

} else {
var statearr_32318_33964 = state_32273__$1;
(statearr_32318_33964[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (14))){
var inst_32266 = (state_32273[(2)]);
var inst_32267 = cljs.core.async.close_BANG_(out);
var state_32273__$1 = (function (){var statearr_32323 = state_32273;
(statearr_32323[(13)] = inst_32266);

return statearr_32323;
})();
var statearr_32324_33971 = state_32273__$1;
(statearr_32324_33971[(2)] = inst_32267);

(statearr_32324_33971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (10))){
var inst_32257 = (state_32273[(2)]);
var state_32273__$1 = state_32273;
var statearr_32325_33976 = state_32273__$1;
(statearr_32325_33976[(2)] = inst_32257);

(statearr_32325_33976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (8))){
var inst_32236 = (state_32273[(8)]);
var inst_32246 = (state_32273[(11)]);
var tmp32322 = inst_32236;
var inst_32236__$1 = tmp32322;
var inst_32237 = inst_32246;
var state_32273__$1 = (function (){var statearr_32328 = state_32273;
(statearr_32328[(7)] = inst_32237);

(statearr_32328[(8)] = inst_32236__$1);

return statearr_32328;
})();
var statearr_32329_33982 = state_32273__$1;
(statearr_32329_33982[(2)] = null);

(statearr_32329_33982[(1)] = (2));


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
var cljs$core$async$state_machine__28033__auto__ = null;
var cljs$core$async$state_machine__28033__auto____0 = (function (){
var statearr_32331 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32331[(0)] = cljs$core$async$state_machine__28033__auto__);

(statearr_32331[(1)] = (1));

return statearr_32331;
});
var cljs$core$async$state_machine__28033__auto____1 = (function (state_32273){
while(true){
var ret_value__28034__auto__ = (function (){try{while(true){
var result__28035__auto__ = switch__28032__auto__(state_32273);
if(cljs.core.keyword_identical_QMARK_(result__28035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28035__auto__;
}
break;
}
}catch (e32334){var ex__28036__auto__ = e32334;
var statearr_32335_33995 = state_32273;
(statearr_32335_33995[(2)] = ex__28036__auto__);


if(cljs.core.seq((state_32273[(4)]))){
var statearr_32336_33998 = state_32273;
(statearr_32336_33998[(1)] = cljs.core.first((state_32273[(4)])));

} else {
throw ex__28036__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34006 = state_32273;
state_32273 = G__34006;
continue;
} else {
return ret_value__28034__auto__;
}
break;
}
});
cljs$core$async$state_machine__28033__auto__ = function(state_32273){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28033__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28033__auto____1.call(this,state_32273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28033__auto____0;
cljs$core$async$state_machine__28033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28033__auto____1;
return cljs$core$async$state_machine__28033__auto__;
})()
})();
var state__28690__auto__ = (function (){var statearr_32338 = f__28689__auto__();
(statearr_32338[(6)] = c__28688__auto___33920);

return statearr_32338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28690__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32347 = arguments.length;
switch (G__32347) {
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
var c__28688__auto___34010 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28689__auto__ = (function (){var switch__28032__auto__ = (function (state_32404){
var state_val_32405 = (state_32404[(1)]);
if((state_val_32405 === (7))){
var inst_32399 = (state_32404[(2)]);
var state_32404__$1 = state_32404;
var statearr_32409_34011 = state_32404__$1;
(statearr_32409_34011[(2)] = inst_32399);

(statearr_32409_34011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32405 === (1))){
var inst_32353 = [];
var inst_32355 = inst_32353;
var inst_32356 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32404__$1 = (function (){var statearr_32410 = state_32404;
(statearr_32410[(7)] = inst_32355);

(statearr_32410[(8)] = inst_32356);

return statearr_32410;
})();
var statearr_32411_34016 = state_32404__$1;
(statearr_32411_34016[(2)] = null);

(statearr_32411_34016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32405 === (4))){
var inst_32364 = (state_32404[(9)]);
var inst_32364__$1 = (state_32404[(2)]);
var inst_32365 = (inst_32364__$1 == null);
var inst_32366 = cljs.core.not(inst_32365);
var state_32404__$1 = (function (){var statearr_32415 = state_32404;
(statearr_32415[(9)] = inst_32364__$1);

return statearr_32415;
})();
if(inst_32366){
var statearr_32419_34018 = state_32404__$1;
(statearr_32419_34018[(1)] = (5));

} else {
var statearr_32421_34019 = state_32404__$1;
(statearr_32421_34019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32405 === (15))){
var inst_32393 = (state_32404[(2)]);
var state_32404__$1 = state_32404;
var statearr_32423_34020 = state_32404__$1;
(statearr_32423_34020[(2)] = inst_32393);

(statearr_32423_34020[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32405 === (13))){
var state_32404__$1 = state_32404;
var statearr_32427_34021 = state_32404__$1;
(statearr_32427_34021[(2)] = null);

(statearr_32427_34021[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32405 === (6))){
var inst_32355 = (state_32404[(7)]);
var inst_32388 = inst_32355.length;
var inst_32389 = (inst_32388 > (0));
var state_32404__$1 = state_32404;
if(cljs.core.truth_(inst_32389)){
var statearr_32431_34023 = state_32404__$1;
(statearr_32431_34023[(1)] = (12));

} else {
var statearr_32432_34024 = state_32404__$1;
(statearr_32432_34024[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32405 === (3))){
var inst_32401 = (state_32404[(2)]);
var state_32404__$1 = state_32404;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32404__$1,inst_32401);
} else {
if((state_val_32405 === (12))){
var inst_32355 = (state_32404[(7)]);
var inst_32391 = cljs.core.vec(inst_32355);
var state_32404__$1 = state_32404;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32404__$1,(15),out,inst_32391);
} else {
if((state_val_32405 === (2))){
var state_32404__$1 = state_32404;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32404__$1,(4),ch);
} else {
if((state_val_32405 === (11))){
var inst_32368 = (state_32404[(10)]);
var inst_32364 = (state_32404[(9)]);
var inst_32379 = (state_32404[(2)]);
var inst_32381 = [];
var inst_32382 = inst_32381.push(inst_32364);
var inst_32355 = inst_32381;
var inst_32356 = inst_32368;
var state_32404__$1 = (function (){var statearr_32444 = state_32404;
(statearr_32444[(7)] = inst_32355);

(statearr_32444[(11)] = inst_32382);

(statearr_32444[(12)] = inst_32379);

(statearr_32444[(8)] = inst_32356);

return statearr_32444;
})();
var statearr_32447_34029 = state_32404__$1;
(statearr_32447_34029[(2)] = null);

(statearr_32447_34029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32405 === (9))){
var inst_32355 = (state_32404[(7)]);
var inst_32377 = cljs.core.vec(inst_32355);
var state_32404__$1 = state_32404;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32404__$1,(11),out,inst_32377);
} else {
if((state_val_32405 === (5))){
var inst_32368 = (state_32404[(10)]);
var inst_32364 = (state_32404[(9)]);
var inst_32356 = (state_32404[(8)]);
var inst_32368__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32364) : f.call(null,inst_32364));
var inst_32369 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32368__$1,inst_32356);
var inst_32370 = cljs.core.keyword_identical_QMARK_(inst_32356,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32371 = ((inst_32369) || (inst_32370));
var state_32404__$1 = (function (){var statearr_32457 = state_32404;
(statearr_32457[(10)] = inst_32368__$1);

return statearr_32457;
})();
if(cljs.core.truth_(inst_32371)){
var statearr_32458_34039 = state_32404__$1;
(statearr_32458_34039[(1)] = (8));

} else {
var statearr_32459_34040 = state_32404__$1;
(statearr_32459_34040[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32405 === (14))){
var inst_32396 = (state_32404[(2)]);
var inst_32397 = cljs.core.async.close_BANG_(out);
var state_32404__$1 = (function (){var statearr_32465 = state_32404;
(statearr_32465[(13)] = inst_32396);

return statearr_32465;
})();
var statearr_32467_34042 = state_32404__$1;
(statearr_32467_34042[(2)] = inst_32397);

(statearr_32467_34042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32405 === (10))){
var inst_32386 = (state_32404[(2)]);
var state_32404__$1 = state_32404;
var statearr_32470_34045 = state_32404__$1;
(statearr_32470_34045[(2)] = inst_32386);

(statearr_32470_34045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32405 === (8))){
var inst_32355 = (state_32404[(7)]);
var inst_32368 = (state_32404[(10)]);
var inst_32364 = (state_32404[(9)]);
var inst_32373 = inst_32355.push(inst_32364);
var tmp32460 = inst_32355;
var inst_32355__$1 = tmp32460;
var inst_32356 = inst_32368;
var state_32404__$1 = (function (){var statearr_32471 = state_32404;
(statearr_32471[(14)] = inst_32373);

(statearr_32471[(7)] = inst_32355__$1);

(statearr_32471[(8)] = inst_32356);

return statearr_32471;
})();
var statearr_32473_34048 = state_32404__$1;
(statearr_32473_34048[(2)] = null);

(statearr_32473_34048[(1)] = (2));


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
var cljs$core$async$state_machine__28033__auto__ = null;
var cljs$core$async$state_machine__28033__auto____0 = (function (){
var statearr_32475 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32475[(0)] = cljs$core$async$state_machine__28033__auto__);

(statearr_32475[(1)] = (1));

return statearr_32475;
});
var cljs$core$async$state_machine__28033__auto____1 = (function (state_32404){
while(true){
var ret_value__28034__auto__ = (function (){try{while(true){
var result__28035__auto__ = switch__28032__auto__(state_32404);
if(cljs.core.keyword_identical_QMARK_(result__28035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28035__auto__;
}
break;
}
}catch (e32477){var ex__28036__auto__ = e32477;
var statearr_32478_34054 = state_32404;
(statearr_32478_34054[(2)] = ex__28036__auto__);


if(cljs.core.seq((state_32404[(4)]))){
var statearr_32479_34056 = state_32404;
(statearr_32479_34056[(1)] = cljs.core.first((state_32404[(4)])));

} else {
throw ex__28036__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34058 = state_32404;
state_32404 = G__34058;
continue;
} else {
return ret_value__28034__auto__;
}
break;
}
});
cljs$core$async$state_machine__28033__auto__ = function(state_32404){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28033__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28033__auto____1.call(this,state_32404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28033__auto____0;
cljs$core$async$state_machine__28033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28033__auto____1;
return cljs$core$async$state_machine__28033__auto__;
})()
})();
var state__28690__auto__ = (function (){var statearr_32480 = f__28689__auto__();
(statearr_32480[(6)] = c__28688__auto___34010);

return statearr_32480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28690__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
