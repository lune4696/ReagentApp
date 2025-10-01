goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__37859 = arguments.length;
switch (G__37859) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37860 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37860 = (function (f,blockable,meta37861){
this.f = f;
this.blockable = blockable;
this.meta37861 = meta37861;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37862,meta37861__$1){
var self__ = this;
var _37862__$1 = this;
return (new cljs.core.async.t_cljs$core$async37860(self__.f,self__.blockable,meta37861__$1));
}));

(cljs.core.async.t_cljs$core$async37860.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37862){
var self__ = this;
var _37862__$1 = this;
return self__.meta37861;
}));

(cljs.core.async.t_cljs$core$async37860.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37860.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37860.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async37860.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async37860.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37861","meta37861",458745638,null)], null);
}));

(cljs.core.async.t_cljs$core$async37860.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37860.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37860");

(cljs.core.async.t_cljs$core$async37860.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async37860");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37860.
 */
cljs.core.async.__GT_t_cljs$core$async37860 = (function cljs$core$async$__GT_t_cljs$core$async37860(f__$1,blockable__$1,meta37861){
return (new cljs.core.async.t_cljs$core$async37860(f__$1,blockable__$1,meta37861));
});

}

return (new cljs.core.async.t_cljs$core$async37860(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__37884 = arguments.length;
switch (G__37884) {
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
var G__37887 = arguments.length;
switch (G__37887) {
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
var G__37889 = arguments.length;
switch (G__37889) {
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
var val_40392 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_40392) : fn1.call(null,val_40392));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_40392) : fn1.call(null,val_40392));
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
var G__37897 = arguments.length;
switch (G__37897) {
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
var n__4613__auto___40400 = n;
var x_40401 = (0);
while(true){
if((x_40401 < n__4613__auto___40400)){
(a[x_40401] = x_40401);

var G__40403 = (x_40401 + (1));
x_40401 = G__40403;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37912 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37912 = (function (flag,meta37913){
this.flag = flag;
this.meta37913 = meta37913;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37914,meta37913__$1){
var self__ = this;
var _37914__$1 = this;
return (new cljs.core.async.t_cljs$core$async37912(self__.flag,meta37913__$1));
}));

(cljs.core.async.t_cljs$core$async37912.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37914){
var self__ = this;
var _37914__$1 = this;
return self__.meta37913;
}));

(cljs.core.async.t_cljs$core$async37912.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37912.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async37912.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37912.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async37912.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37913","meta37913",1546903555,null)], null);
}));

(cljs.core.async.t_cljs$core$async37912.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37912.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37912");

(cljs.core.async.t_cljs$core$async37912.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async37912");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37912.
 */
cljs.core.async.__GT_t_cljs$core$async37912 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async37912(flag__$1,meta37913){
return (new cljs.core.async.t_cljs$core$async37912(flag__$1,meta37913));
});

}

return (new cljs.core.async.t_cljs$core$async37912(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37934 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37934 = (function (flag,cb,meta37935){
this.flag = flag;
this.cb = cb;
this.meta37935 = meta37935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37936,meta37935__$1){
var self__ = this;
var _37936__$1 = this;
return (new cljs.core.async.t_cljs$core$async37934(self__.flag,self__.cb,meta37935__$1));
}));

(cljs.core.async.t_cljs$core$async37934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37936){
var self__ = this;
var _37936__$1 = this;
return self__.meta37935;
}));

(cljs.core.async.t_cljs$core$async37934.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37934.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async37934.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37934.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async37934.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37935","meta37935",-1650112011,null)], null);
}));

(cljs.core.async.t_cljs$core$async37934.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37934.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37934");

(cljs.core.async.t_cljs$core$async37934.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async37934");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37934.
 */
cljs.core.async.__GT_t_cljs$core$async37934 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async37934(flag__$1,cb__$1,meta37935){
return (new cljs.core.async.t_cljs$core$async37934(flag__$1,cb__$1,meta37935));
});

}

return (new cljs.core.async.t_cljs$core$async37934(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__37947_SHARP_){
var G__37953 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37947_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__37953) : fret.call(null,G__37953));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37948_SHARP_){
var G__37954 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37948_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__37954) : fret.call(null,G__37954));
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
var G__40439 = (i + (1));
i = G__40439;
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
var len__4736__auto___40449 = arguments.length;
var i__4737__auto___40450 = (0);
while(true){
if((i__4737__auto___40450 < len__4736__auto___40449)){
args__4742__auto__.push((arguments[i__4737__auto___40450]));

var G__40452 = (i__4737__auto___40450 + (1));
i__4737__auto___40450 = G__40452;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37966){
var map__37968 = p__37966;
var map__37968__$1 = (((((!((map__37968 == null))))?(((((map__37968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37968):map__37968);
var opts = map__37968__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37962){
var G__37963 = cljs.core.first(seq37962);
var seq37962__$1 = cljs.core.next(seq37962);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37963,seq37962__$1);
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
var G__37989 = arguments.length;
switch (G__37989) {
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
var c__37723__auto___40464 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37724__auto__ = (function (){var switch__36898__auto__ = (function (state_38020){
var state_val_38021 = (state_38020[(1)]);
if((state_val_38021 === (7))){
var inst_38016 = (state_38020[(2)]);
var state_38020__$1 = state_38020;
var statearr_38025_40471 = state_38020__$1;
(statearr_38025_40471[(2)] = inst_38016);

(statearr_38025_40471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (1))){
var state_38020__$1 = state_38020;
var statearr_38026_40472 = state_38020__$1;
(statearr_38026_40472[(2)] = null);

(statearr_38026_40472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (4))){
var inst_37999 = (state_38020[(7)]);
var inst_37999__$1 = (state_38020[(2)]);
var inst_38000 = (inst_37999__$1 == null);
var state_38020__$1 = (function (){var statearr_38027 = state_38020;
(statearr_38027[(7)] = inst_37999__$1);

return statearr_38027;
})();
if(cljs.core.truth_(inst_38000)){
var statearr_38028_40473 = state_38020__$1;
(statearr_38028_40473[(1)] = (5));

} else {
var statearr_38029_40474 = state_38020__$1;
(statearr_38029_40474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (13))){
var state_38020__$1 = state_38020;
var statearr_38031_40478 = state_38020__$1;
(statearr_38031_40478[(2)] = null);

(statearr_38031_40478[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (6))){
var inst_37999 = (state_38020[(7)]);
var state_38020__$1 = state_38020;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38020__$1,(11),to,inst_37999);
} else {
if((state_val_38021 === (3))){
var inst_38018 = (state_38020[(2)]);
var state_38020__$1 = state_38020;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38020__$1,inst_38018);
} else {
if((state_val_38021 === (12))){
var state_38020__$1 = state_38020;
var statearr_38034_40482 = state_38020__$1;
(statearr_38034_40482[(2)] = null);

(statearr_38034_40482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (2))){
var state_38020__$1 = state_38020;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38020__$1,(4),from);
} else {
if((state_val_38021 === (11))){
var inst_38009 = (state_38020[(2)]);
var state_38020__$1 = state_38020;
if(cljs.core.truth_(inst_38009)){
var statearr_38036_40493 = state_38020__$1;
(statearr_38036_40493[(1)] = (12));

} else {
var statearr_38038_40495 = state_38020__$1;
(statearr_38038_40495[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (9))){
var state_38020__$1 = state_38020;
var statearr_38039_40497 = state_38020__$1;
(statearr_38039_40497[(2)] = null);

(statearr_38039_40497[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (5))){
var state_38020__$1 = state_38020;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38040_40498 = state_38020__$1;
(statearr_38040_40498[(1)] = (8));

} else {
var statearr_38041_40500 = state_38020__$1;
(statearr_38041_40500[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (14))){
var inst_38014 = (state_38020[(2)]);
var state_38020__$1 = state_38020;
var statearr_38042_40503 = state_38020__$1;
(statearr_38042_40503[(2)] = inst_38014);

(statearr_38042_40503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (10))){
var inst_38006 = (state_38020[(2)]);
var state_38020__$1 = state_38020;
var statearr_38043_40504 = state_38020__$1;
(statearr_38043_40504[(2)] = inst_38006);

(statearr_38043_40504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (8))){
var inst_38003 = cljs.core.async.close_BANG_(to);
var state_38020__$1 = state_38020;
var statearr_38044_40506 = state_38020__$1;
(statearr_38044_40506[(2)] = inst_38003);

(statearr_38044_40506[(1)] = (10));


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
var cljs$core$async$state_machine__36899__auto__ = null;
var cljs$core$async$state_machine__36899__auto____0 = (function (){
var statearr_38047 = [null,null,null,null,null,null,null,null];
(statearr_38047[(0)] = cljs$core$async$state_machine__36899__auto__);

(statearr_38047[(1)] = (1));

return statearr_38047;
});
var cljs$core$async$state_machine__36899__auto____1 = (function (state_38020){
while(true){
var ret_value__36900__auto__ = (function (){try{while(true){
var result__36901__auto__ = switch__36898__auto__(state_38020);
if(cljs.core.keyword_identical_QMARK_(result__36901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36901__auto__;
}
break;
}
}catch (e38048){var ex__36902__auto__ = e38048;
var statearr_38049_40512 = state_38020;
(statearr_38049_40512[(2)] = ex__36902__auto__);


if(cljs.core.seq((state_38020[(4)]))){
var statearr_38050_40513 = state_38020;
(statearr_38050_40513[(1)] = cljs.core.first((state_38020[(4)])));

} else {
throw ex__36902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40514 = state_38020;
state_38020 = G__40514;
continue;
} else {
return ret_value__36900__auto__;
}
break;
}
});
cljs$core$async$state_machine__36899__auto__ = function(state_38020){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36899__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36899__auto____1.call(this,state_38020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36899__auto____0;
cljs$core$async$state_machine__36899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36899__auto____1;
return cljs$core$async$state_machine__36899__auto__;
})()
})();
var state__37725__auto__ = (function (){var statearr_38051 = f__37724__auto__();
(statearr_38051[(6)] = c__37723__auto___40464);

return statearr_38051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37725__auto__);
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
var process = (function (p__38076){
var vec__38077 = p__38076;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38077,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38077,(1),null);
var job = vec__38077;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__37723__auto___40517 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37724__auto__ = (function (){var switch__36898__auto__ = (function (state_38088){
var state_val_38089 = (state_38088[(1)]);
if((state_val_38089 === (1))){
var state_38088__$1 = state_38088;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38088__$1,(2),res,v);
} else {
if((state_val_38089 === (2))){
var inst_38085 = (state_38088[(2)]);
var inst_38086 = cljs.core.async.close_BANG_(res);
var state_38088__$1 = (function (){var statearr_38092 = state_38088;
(statearr_38092[(7)] = inst_38085);

return statearr_38092;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38088__$1,inst_38086);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36899__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36899__auto____0 = (function (){
var statearr_38093 = [null,null,null,null,null,null,null,null];
(statearr_38093[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36899__auto__);

(statearr_38093[(1)] = (1));

return statearr_38093;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36899__auto____1 = (function (state_38088){
while(true){
var ret_value__36900__auto__ = (function (){try{while(true){
var result__36901__auto__ = switch__36898__auto__(state_38088);
if(cljs.core.keyword_identical_QMARK_(result__36901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36901__auto__;
}
break;
}
}catch (e38094){var ex__36902__auto__ = e38094;
var statearr_38097_40530 = state_38088;
(statearr_38097_40530[(2)] = ex__36902__auto__);


if(cljs.core.seq((state_38088[(4)]))){
var statearr_38098_40531 = state_38088;
(statearr_38098_40531[(1)] = cljs.core.first((state_38088[(4)])));

} else {
throw ex__36902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40532 = state_38088;
state_38088 = G__40532;
continue;
} else {
return ret_value__36900__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36899__auto__ = function(state_38088){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36899__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36899__auto____1.call(this,state_38088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36899__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36899__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36899__auto__;
})()
})();
var state__37725__auto__ = (function (){var statearr_38101 = f__37724__auto__();
(statearr_38101[(6)] = c__37723__auto___40517);

return statearr_38101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37725__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__38104){
var vec__38105 = p__38104;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38105,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38105,(1),null);
var job = vec__38105;
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
var n__4613__auto___40542 = n;
var __40543 = (0);
while(true){
if((__40543 < n__4613__auto___40542)){
var G__38110_40544 = type;
var G__38110_40545__$1 = (((G__38110_40544 instanceof cljs.core.Keyword))?G__38110_40544.fqn:null);
switch (G__38110_40545__$1) {
case "compute":
var c__37723__auto___40554 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__40543,c__37723__auto___40554,G__38110_40544,G__38110_40545__$1,n__4613__auto___40542,jobs,results,process,async){
return (function (){
var f__37724__auto__ = (function (){var switch__36898__auto__ = ((function (__40543,c__37723__auto___40554,G__38110_40544,G__38110_40545__$1,n__4613__auto___40542,jobs,results,process,async){
return (function (state_38127){
var state_val_38128 = (state_38127[(1)]);
if((state_val_38128 === (1))){
var state_38127__$1 = state_38127;
var statearr_38129_40560 = state_38127__$1;
(statearr_38129_40560[(2)] = null);

(statearr_38129_40560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (2))){
var state_38127__$1 = state_38127;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38127__$1,(4),jobs);
} else {
if((state_val_38128 === (3))){
var inst_38125 = (state_38127[(2)]);
var state_38127__$1 = state_38127;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38127__$1,inst_38125);
} else {
if((state_val_38128 === (4))){
var inst_38115 = (state_38127[(2)]);
var inst_38117 = process(inst_38115);
var state_38127__$1 = state_38127;
if(cljs.core.truth_(inst_38117)){
var statearr_38133_40561 = state_38127__$1;
(statearr_38133_40561[(1)] = (5));

} else {
var statearr_38134_40562 = state_38127__$1;
(statearr_38134_40562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (5))){
var state_38127__$1 = state_38127;
var statearr_38135_40563 = state_38127__$1;
(statearr_38135_40563[(2)] = null);

(statearr_38135_40563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (6))){
var state_38127__$1 = state_38127;
var statearr_38136_40564 = state_38127__$1;
(statearr_38136_40564[(2)] = null);

(statearr_38136_40564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (7))){
var inst_38123 = (state_38127[(2)]);
var state_38127__$1 = state_38127;
var statearr_38137_40565 = state_38127__$1;
(statearr_38137_40565[(2)] = inst_38123);

(statearr_38137_40565[(1)] = (3));


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
});})(__40543,c__37723__auto___40554,G__38110_40544,G__38110_40545__$1,n__4613__auto___40542,jobs,results,process,async))
;
return ((function (__40543,switch__36898__auto__,c__37723__auto___40554,G__38110_40544,G__38110_40545__$1,n__4613__auto___40542,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36899__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36899__auto____0 = (function (){
var statearr_38138 = [null,null,null,null,null,null,null];
(statearr_38138[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36899__auto__);

(statearr_38138[(1)] = (1));

return statearr_38138;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36899__auto____1 = (function (state_38127){
while(true){
var ret_value__36900__auto__ = (function (){try{while(true){
var result__36901__auto__ = switch__36898__auto__(state_38127);
if(cljs.core.keyword_identical_QMARK_(result__36901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36901__auto__;
}
break;
}
}catch (e38139){var ex__36902__auto__ = e38139;
var statearr_38140_40569 = state_38127;
(statearr_38140_40569[(2)] = ex__36902__auto__);


if(cljs.core.seq((state_38127[(4)]))){
var statearr_38141_40573 = state_38127;
(statearr_38141_40573[(1)] = cljs.core.first((state_38127[(4)])));

} else {
throw ex__36902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40578 = state_38127;
state_38127 = G__40578;
continue;
} else {
return ret_value__36900__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36899__auto__ = function(state_38127){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36899__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36899__auto____1.call(this,state_38127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36899__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36899__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36899__auto__;
})()
;})(__40543,switch__36898__auto__,c__37723__auto___40554,G__38110_40544,G__38110_40545__$1,n__4613__auto___40542,jobs,results,process,async))
})();
var state__37725__auto__ = (function (){var statearr_38146 = f__37724__auto__();
(statearr_38146[(6)] = c__37723__auto___40554);

return statearr_38146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37725__auto__);
});})(__40543,c__37723__auto___40554,G__38110_40544,G__38110_40545__$1,n__4613__auto___40542,jobs,results,process,async))
);


break;
case "async":
var c__37723__auto___40579 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__40543,c__37723__auto___40579,G__38110_40544,G__38110_40545__$1,n__4613__auto___40542,jobs,results,process,async){
return (function (){
var f__37724__auto__ = (function (){var switch__36898__auto__ = ((function (__40543,c__37723__auto___40579,G__38110_40544,G__38110_40545__$1,n__4613__auto___40542,jobs,results,process,async){
return (function (state_38161){
var state_val_38162 = (state_38161[(1)]);
if((state_val_38162 === (1))){
var state_38161__$1 = state_38161;
var statearr_38167_40580 = state_38161__$1;
(statearr_38167_40580[(2)] = null);

(statearr_38167_40580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38162 === (2))){
var state_38161__$1 = state_38161;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38161__$1,(4),jobs);
} else {
if((state_val_38162 === (3))){
var inst_38159 = (state_38161[(2)]);
var state_38161__$1 = state_38161;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38161__$1,inst_38159);
} else {
if((state_val_38162 === (4))){
var inst_38151 = (state_38161[(2)]);
var inst_38152 = async(inst_38151);
var state_38161__$1 = state_38161;
if(cljs.core.truth_(inst_38152)){
var statearr_38172_40584 = state_38161__$1;
(statearr_38172_40584[(1)] = (5));

} else {
var statearr_38173_40585 = state_38161__$1;
(statearr_38173_40585[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38162 === (5))){
var state_38161__$1 = state_38161;
var statearr_38174_40586 = state_38161__$1;
(statearr_38174_40586[(2)] = null);

(statearr_38174_40586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38162 === (6))){
var state_38161__$1 = state_38161;
var statearr_38175_40588 = state_38161__$1;
(statearr_38175_40588[(2)] = null);

(statearr_38175_40588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38162 === (7))){
var inst_38157 = (state_38161[(2)]);
var state_38161__$1 = state_38161;
var statearr_38176_40592 = state_38161__$1;
(statearr_38176_40592[(2)] = inst_38157);

(statearr_38176_40592[(1)] = (3));


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
});})(__40543,c__37723__auto___40579,G__38110_40544,G__38110_40545__$1,n__4613__auto___40542,jobs,results,process,async))
;
return ((function (__40543,switch__36898__auto__,c__37723__auto___40579,G__38110_40544,G__38110_40545__$1,n__4613__auto___40542,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36899__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36899__auto____0 = (function (){
var statearr_38177 = [null,null,null,null,null,null,null];
(statearr_38177[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36899__auto__);

(statearr_38177[(1)] = (1));

return statearr_38177;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36899__auto____1 = (function (state_38161){
while(true){
var ret_value__36900__auto__ = (function (){try{while(true){
var result__36901__auto__ = switch__36898__auto__(state_38161);
if(cljs.core.keyword_identical_QMARK_(result__36901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36901__auto__;
}
break;
}
}catch (e38178){var ex__36902__auto__ = e38178;
var statearr_38179_40602 = state_38161;
(statearr_38179_40602[(2)] = ex__36902__auto__);


if(cljs.core.seq((state_38161[(4)]))){
var statearr_38180_40605 = state_38161;
(statearr_38180_40605[(1)] = cljs.core.first((state_38161[(4)])));

} else {
throw ex__36902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40606 = state_38161;
state_38161 = G__40606;
continue;
} else {
return ret_value__36900__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36899__auto__ = function(state_38161){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36899__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36899__auto____1.call(this,state_38161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36899__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36899__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36899__auto__;
})()
;})(__40543,switch__36898__auto__,c__37723__auto___40579,G__38110_40544,G__38110_40545__$1,n__4613__auto___40542,jobs,results,process,async))
})();
var state__37725__auto__ = (function (){var statearr_38181 = f__37724__auto__();
(statearr_38181[(6)] = c__37723__auto___40579);

return statearr_38181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37725__auto__);
});})(__40543,c__37723__auto___40579,G__38110_40544,G__38110_40545__$1,n__4613__auto___40542,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38110_40545__$1)].join('')));

}

var G__40610 = (__40543 + (1));
__40543 = G__40610;
continue;
} else {
}
break;
}

var c__37723__auto___40611 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37724__auto__ = (function (){var switch__36898__auto__ = (function (state_38207){
var state_val_38208 = (state_38207[(1)]);
if((state_val_38208 === (7))){
var inst_38203 = (state_38207[(2)]);
var state_38207__$1 = state_38207;
var statearr_38212_40612 = state_38207__$1;
(statearr_38212_40612[(2)] = inst_38203);

(statearr_38212_40612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38208 === (1))){
var state_38207__$1 = state_38207;
var statearr_38213_40613 = state_38207__$1;
(statearr_38213_40613[(2)] = null);

(statearr_38213_40613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38208 === (4))){
var inst_38188 = (state_38207[(7)]);
var inst_38188__$1 = (state_38207[(2)]);
var inst_38189 = (inst_38188__$1 == null);
var state_38207__$1 = (function (){var statearr_38214 = state_38207;
(statearr_38214[(7)] = inst_38188__$1);

return statearr_38214;
})();
if(cljs.core.truth_(inst_38189)){
var statearr_38215_40614 = state_38207__$1;
(statearr_38215_40614[(1)] = (5));

} else {
var statearr_38216_40615 = state_38207__$1;
(statearr_38216_40615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38208 === (6))){
var inst_38188 = (state_38207[(7)]);
var inst_38193 = (state_38207[(8)]);
var inst_38193__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_38194 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38195 = [inst_38188,inst_38193__$1];
var inst_38196 = (new cljs.core.PersistentVector(null,2,(5),inst_38194,inst_38195,null));
var state_38207__$1 = (function (){var statearr_38218 = state_38207;
(statearr_38218[(8)] = inst_38193__$1);

return statearr_38218;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38207__$1,(8),jobs,inst_38196);
} else {
if((state_val_38208 === (3))){
var inst_38205 = (state_38207[(2)]);
var state_38207__$1 = state_38207;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38207__$1,inst_38205);
} else {
if((state_val_38208 === (2))){
var state_38207__$1 = state_38207;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38207__$1,(4),from);
} else {
if((state_val_38208 === (9))){
var inst_38200 = (state_38207[(2)]);
var state_38207__$1 = (function (){var statearr_38219 = state_38207;
(statearr_38219[(9)] = inst_38200);

return statearr_38219;
})();
var statearr_38220_40616 = state_38207__$1;
(statearr_38220_40616[(2)] = null);

(statearr_38220_40616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38208 === (5))){
var inst_38191 = cljs.core.async.close_BANG_(jobs);
var state_38207__$1 = state_38207;
var statearr_38221_40623 = state_38207__$1;
(statearr_38221_40623[(2)] = inst_38191);

(statearr_38221_40623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38208 === (8))){
var inst_38193 = (state_38207[(8)]);
var inst_38198 = (state_38207[(2)]);
var state_38207__$1 = (function (){var statearr_38222 = state_38207;
(statearr_38222[(10)] = inst_38198);

return statearr_38222;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38207__$1,(9),results,inst_38193);
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
var cljs$core$async$pipeline_STAR__$_state_machine__36899__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36899__auto____0 = (function (){
var statearr_38223 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38223[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36899__auto__);

(statearr_38223[(1)] = (1));

return statearr_38223;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36899__auto____1 = (function (state_38207){
while(true){
var ret_value__36900__auto__ = (function (){try{while(true){
var result__36901__auto__ = switch__36898__auto__(state_38207);
if(cljs.core.keyword_identical_QMARK_(result__36901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36901__auto__;
}
break;
}
}catch (e38224){var ex__36902__auto__ = e38224;
var statearr_38225_40632 = state_38207;
(statearr_38225_40632[(2)] = ex__36902__auto__);


if(cljs.core.seq((state_38207[(4)]))){
var statearr_38226_40633 = state_38207;
(statearr_38226_40633[(1)] = cljs.core.first((state_38207[(4)])));

} else {
throw ex__36902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40634 = state_38207;
state_38207 = G__40634;
continue;
} else {
return ret_value__36900__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36899__auto__ = function(state_38207){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36899__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36899__auto____1.call(this,state_38207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36899__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36899__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36899__auto__;
})()
})();
var state__37725__auto__ = (function (){var statearr_38227 = f__37724__auto__();
(statearr_38227[(6)] = c__37723__auto___40611);

return statearr_38227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37725__auto__);
}));


var c__37723__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37724__auto__ = (function (){var switch__36898__auto__ = (function (state_38273){
var state_val_38276 = (state_38273[(1)]);
if((state_val_38276 === (7))){
var inst_38266 = (state_38273[(2)]);
var state_38273__$1 = state_38273;
var statearr_38281_40638 = state_38273__$1;
(statearr_38281_40638[(2)] = inst_38266);

(statearr_38281_40638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38276 === (20))){
var state_38273__$1 = state_38273;
var statearr_38282_40639 = state_38273__$1;
(statearr_38282_40639[(2)] = null);

(statearr_38282_40639[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38276 === (1))){
var state_38273__$1 = state_38273;
var statearr_38283_40641 = state_38273__$1;
(statearr_38283_40641[(2)] = null);

(statearr_38283_40641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38276 === (4))){
var inst_38233 = (state_38273[(7)]);
var inst_38233__$1 = (state_38273[(2)]);
var inst_38234 = (inst_38233__$1 == null);
var state_38273__$1 = (function (){var statearr_38284 = state_38273;
(statearr_38284[(7)] = inst_38233__$1);

return statearr_38284;
})();
if(cljs.core.truth_(inst_38234)){
var statearr_38286_40644 = state_38273__$1;
(statearr_38286_40644[(1)] = (5));

} else {
var statearr_38287_40645 = state_38273__$1;
(statearr_38287_40645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38276 === (15))){
var inst_38248 = (state_38273[(8)]);
var state_38273__$1 = state_38273;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38273__$1,(18),to,inst_38248);
} else {
if((state_val_38276 === (21))){
var inst_38261 = (state_38273[(2)]);
var state_38273__$1 = state_38273;
var statearr_38288_40646 = state_38273__$1;
(statearr_38288_40646[(2)] = inst_38261);

(statearr_38288_40646[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38276 === (13))){
var inst_38263 = (state_38273[(2)]);
var state_38273__$1 = (function (){var statearr_38289 = state_38273;
(statearr_38289[(9)] = inst_38263);

return statearr_38289;
})();
var statearr_38291_40647 = state_38273__$1;
(statearr_38291_40647[(2)] = null);

(statearr_38291_40647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38276 === (6))){
var inst_38233 = (state_38273[(7)]);
var state_38273__$1 = state_38273;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38273__$1,(11),inst_38233);
} else {
if((state_val_38276 === (17))){
var inst_38256 = (state_38273[(2)]);
var state_38273__$1 = state_38273;
if(cljs.core.truth_(inst_38256)){
var statearr_38292_40654 = state_38273__$1;
(statearr_38292_40654[(1)] = (19));

} else {
var statearr_38293_40656 = state_38273__$1;
(statearr_38293_40656[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38276 === (3))){
var inst_38268 = (state_38273[(2)]);
var state_38273__$1 = state_38273;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38273__$1,inst_38268);
} else {
if((state_val_38276 === (12))){
var inst_38243 = (state_38273[(10)]);
var state_38273__$1 = state_38273;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38273__$1,(14),inst_38243);
} else {
if((state_val_38276 === (2))){
var state_38273__$1 = state_38273;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38273__$1,(4),results);
} else {
if((state_val_38276 === (19))){
var state_38273__$1 = state_38273;
var statearr_38298_40660 = state_38273__$1;
(statearr_38298_40660[(2)] = null);

(statearr_38298_40660[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38276 === (11))){
var inst_38243 = (state_38273[(2)]);
var state_38273__$1 = (function (){var statearr_38299 = state_38273;
(statearr_38299[(10)] = inst_38243);

return statearr_38299;
})();
var statearr_38300_40661 = state_38273__$1;
(statearr_38300_40661[(2)] = null);

(statearr_38300_40661[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38276 === (9))){
var state_38273__$1 = state_38273;
var statearr_38301_40668 = state_38273__$1;
(statearr_38301_40668[(2)] = null);

(statearr_38301_40668[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38276 === (5))){
var state_38273__$1 = state_38273;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38303_40671 = state_38273__$1;
(statearr_38303_40671[(1)] = (8));

} else {
var statearr_38304_40672 = state_38273__$1;
(statearr_38304_40672[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38276 === (14))){
var inst_38248 = (state_38273[(8)]);
var inst_38248__$1 = (state_38273[(2)]);
var inst_38249 = (inst_38248__$1 == null);
var inst_38250 = cljs.core.not(inst_38249);
var state_38273__$1 = (function (){var statearr_38305 = state_38273;
(statearr_38305[(8)] = inst_38248__$1);

return statearr_38305;
})();
if(inst_38250){
var statearr_38306_40675 = state_38273__$1;
(statearr_38306_40675[(1)] = (15));

} else {
var statearr_38307_40676 = state_38273__$1;
(statearr_38307_40676[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38276 === (16))){
var state_38273__$1 = state_38273;
var statearr_38308_40677 = state_38273__$1;
(statearr_38308_40677[(2)] = false);

(statearr_38308_40677[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38276 === (10))){
var inst_38240 = (state_38273[(2)]);
var state_38273__$1 = state_38273;
var statearr_38310_40678 = state_38273__$1;
(statearr_38310_40678[(2)] = inst_38240);

(statearr_38310_40678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38276 === (18))){
var inst_38253 = (state_38273[(2)]);
var state_38273__$1 = state_38273;
var statearr_38313_40679 = state_38273__$1;
(statearr_38313_40679[(2)] = inst_38253);

(statearr_38313_40679[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38276 === (8))){
var inst_38237 = cljs.core.async.close_BANG_(to);
var state_38273__$1 = state_38273;
var statearr_38315_40682 = state_38273__$1;
(statearr_38315_40682[(2)] = inst_38237);

(statearr_38315_40682[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__36899__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36899__auto____0 = (function (){
var statearr_38316 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38316[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36899__auto__);

(statearr_38316[(1)] = (1));

return statearr_38316;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36899__auto____1 = (function (state_38273){
while(true){
var ret_value__36900__auto__ = (function (){try{while(true){
var result__36901__auto__ = switch__36898__auto__(state_38273);
if(cljs.core.keyword_identical_QMARK_(result__36901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36901__auto__;
}
break;
}
}catch (e38317){var ex__36902__auto__ = e38317;
var statearr_38318_40687 = state_38273;
(statearr_38318_40687[(2)] = ex__36902__auto__);


if(cljs.core.seq((state_38273[(4)]))){
var statearr_38319_40688 = state_38273;
(statearr_38319_40688[(1)] = cljs.core.first((state_38273[(4)])));

} else {
throw ex__36902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40689 = state_38273;
state_38273 = G__40689;
continue;
} else {
return ret_value__36900__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36899__auto__ = function(state_38273){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36899__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36899__auto____1.call(this,state_38273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36899__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36899__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36899__auto__;
})()
})();
var state__37725__auto__ = (function (){var statearr_38320 = f__37724__auto__();
(statearr_38320[(6)] = c__37723__auto__);

return statearr_38320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37725__auto__);
}));

return c__37723__auto__;
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
var G__38329 = arguments.length;
switch (G__38329) {
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
var G__38338 = arguments.length;
switch (G__38338) {
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
var G__38358 = arguments.length;
switch (G__38358) {
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
var c__37723__auto___40712 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37724__auto__ = (function (){var switch__36898__auto__ = (function (state_38393){
var state_val_38395 = (state_38393[(1)]);
if((state_val_38395 === (7))){
var inst_38389 = (state_38393[(2)]);
var state_38393__$1 = state_38393;
var statearr_38400_40717 = state_38393__$1;
(statearr_38400_40717[(2)] = inst_38389);

(statearr_38400_40717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38395 === (1))){
var state_38393__$1 = state_38393;
var statearr_38402_40718 = state_38393__$1;
(statearr_38402_40718[(2)] = null);

(statearr_38402_40718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38395 === (4))){
var inst_38370 = (state_38393[(7)]);
var inst_38370__$1 = (state_38393[(2)]);
var inst_38371 = (inst_38370__$1 == null);
var state_38393__$1 = (function (){var statearr_38406 = state_38393;
(statearr_38406[(7)] = inst_38370__$1);

return statearr_38406;
})();
if(cljs.core.truth_(inst_38371)){
var statearr_38408_40728 = state_38393__$1;
(statearr_38408_40728[(1)] = (5));

} else {
var statearr_38412_40730 = state_38393__$1;
(statearr_38412_40730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38395 === (13))){
var state_38393__$1 = state_38393;
var statearr_38413_40731 = state_38393__$1;
(statearr_38413_40731[(2)] = null);

(statearr_38413_40731[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38395 === (6))){
var inst_38370 = (state_38393[(7)]);
var inst_38376 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_38370) : p.call(null,inst_38370));
var state_38393__$1 = state_38393;
if(cljs.core.truth_(inst_38376)){
var statearr_38415_40734 = state_38393__$1;
(statearr_38415_40734[(1)] = (9));

} else {
var statearr_38416_40736 = state_38393__$1;
(statearr_38416_40736[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38395 === (3))){
var inst_38391 = (state_38393[(2)]);
var state_38393__$1 = state_38393;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38393__$1,inst_38391);
} else {
if((state_val_38395 === (12))){
var state_38393__$1 = state_38393;
var statearr_38421_40738 = state_38393__$1;
(statearr_38421_40738[(2)] = null);

(statearr_38421_40738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38395 === (2))){
var state_38393__$1 = state_38393;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38393__$1,(4),ch);
} else {
if((state_val_38395 === (11))){
var inst_38370 = (state_38393[(7)]);
var inst_38380 = (state_38393[(2)]);
var state_38393__$1 = state_38393;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38393__$1,(8),inst_38380,inst_38370);
} else {
if((state_val_38395 === (9))){
var state_38393__$1 = state_38393;
var statearr_38423_40743 = state_38393__$1;
(statearr_38423_40743[(2)] = tc);

(statearr_38423_40743[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38395 === (5))){
var inst_38373 = cljs.core.async.close_BANG_(tc);
var inst_38374 = cljs.core.async.close_BANG_(fc);
var state_38393__$1 = (function (){var statearr_38426 = state_38393;
(statearr_38426[(8)] = inst_38373);

return statearr_38426;
})();
var statearr_38427_40744 = state_38393__$1;
(statearr_38427_40744[(2)] = inst_38374);

(statearr_38427_40744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38395 === (14))){
var inst_38387 = (state_38393[(2)]);
var state_38393__$1 = state_38393;
var statearr_38431_40750 = state_38393__$1;
(statearr_38431_40750[(2)] = inst_38387);

(statearr_38431_40750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38395 === (10))){
var state_38393__$1 = state_38393;
var statearr_38432_40752 = state_38393__$1;
(statearr_38432_40752[(2)] = fc);

(statearr_38432_40752[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38395 === (8))){
var inst_38382 = (state_38393[(2)]);
var state_38393__$1 = state_38393;
if(cljs.core.truth_(inst_38382)){
var statearr_38434_40754 = state_38393__$1;
(statearr_38434_40754[(1)] = (12));

} else {
var statearr_38435_40755 = state_38393__$1;
(statearr_38435_40755[(1)] = (13));

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
var cljs$core$async$state_machine__36899__auto__ = null;
var cljs$core$async$state_machine__36899__auto____0 = (function (){
var statearr_38439 = [null,null,null,null,null,null,null,null,null];
(statearr_38439[(0)] = cljs$core$async$state_machine__36899__auto__);

(statearr_38439[(1)] = (1));

return statearr_38439;
});
var cljs$core$async$state_machine__36899__auto____1 = (function (state_38393){
while(true){
var ret_value__36900__auto__ = (function (){try{while(true){
var result__36901__auto__ = switch__36898__auto__(state_38393);
if(cljs.core.keyword_identical_QMARK_(result__36901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36901__auto__;
}
break;
}
}catch (e38440){var ex__36902__auto__ = e38440;
var statearr_38443_40756 = state_38393;
(statearr_38443_40756[(2)] = ex__36902__auto__);


if(cljs.core.seq((state_38393[(4)]))){
var statearr_38445_40757 = state_38393;
(statearr_38445_40757[(1)] = cljs.core.first((state_38393[(4)])));

} else {
throw ex__36902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40759 = state_38393;
state_38393 = G__40759;
continue;
} else {
return ret_value__36900__auto__;
}
break;
}
});
cljs$core$async$state_machine__36899__auto__ = function(state_38393){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36899__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36899__auto____1.call(this,state_38393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36899__auto____0;
cljs$core$async$state_machine__36899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36899__auto____1;
return cljs$core$async$state_machine__36899__auto__;
})()
})();
var state__37725__auto__ = (function (){var statearr_38447 = f__37724__auto__();
(statearr_38447[(6)] = c__37723__auto___40712);

return statearr_38447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37725__auto__);
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
var c__37723__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37724__auto__ = (function (){var switch__36898__auto__ = (function (state_38482){
var state_val_38483 = (state_38482[(1)]);
if((state_val_38483 === (7))){
var inst_38478 = (state_38482[(2)]);
var state_38482__$1 = state_38482;
var statearr_38485_40764 = state_38482__$1;
(statearr_38485_40764[(2)] = inst_38478);

(statearr_38485_40764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38483 === (1))){
var inst_38456 = init;
var inst_38457 = inst_38456;
var state_38482__$1 = (function (){var statearr_38486 = state_38482;
(statearr_38486[(7)] = inst_38457);

return statearr_38486;
})();
var statearr_38488_40765 = state_38482__$1;
(statearr_38488_40765[(2)] = null);

(statearr_38488_40765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38483 === (4))){
var inst_38461 = (state_38482[(8)]);
var inst_38461__$1 = (state_38482[(2)]);
var inst_38463 = (inst_38461__$1 == null);
var state_38482__$1 = (function (){var statearr_38490 = state_38482;
(statearr_38490[(8)] = inst_38461__$1);

return statearr_38490;
})();
if(cljs.core.truth_(inst_38463)){
var statearr_38492_40766 = state_38482__$1;
(statearr_38492_40766[(1)] = (5));

} else {
var statearr_38493_40767 = state_38482__$1;
(statearr_38493_40767[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38483 === (6))){
var inst_38466 = (state_38482[(9)]);
var inst_38461 = (state_38482[(8)]);
var inst_38457 = (state_38482[(7)]);
var inst_38466__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_38457,inst_38461) : f.call(null,inst_38457,inst_38461));
var inst_38469 = cljs.core.reduced_QMARK_(inst_38466__$1);
var state_38482__$1 = (function (){var statearr_38496 = state_38482;
(statearr_38496[(9)] = inst_38466__$1);

return statearr_38496;
})();
if(inst_38469){
var statearr_38497_40770 = state_38482__$1;
(statearr_38497_40770[(1)] = (8));

} else {
var statearr_38499_40772 = state_38482__$1;
(statearr_38499_40772[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38483 === (3))){
var inst_38480 = (state_38482[(2)]);
var state_38482__$1 = state_38482;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38482__$1,inst_38480);
} else {
if((state_val_38483 === (2))){
var state_38482__$1 = state_38482;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38482__$1,(4),ch);
} else {
if((state_val_38483 === (9))){
var inst_38466 = (state_38482[(9)]);
var inst_38457 = inst_38466;
var state_38482__$1 = (function (){var statearr_38501 = state_38482;
(statearr_38501[(7)] = inst_38457);

return statearr_38501;
})();
var statearr_38502_40773 = state_38482__$1;
(statearr_38502_40773[(2)] = null);

(statearr_38502_40773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38483 === (5))){
var inst_38457 = (state_38482[(7)]);
var state_38482__$1 = state_38482;
var statearr_38505_40778 = state_38482__$1;
(statearr_38505_40778[(2)] = inst_38457);

(statearr_38505_40778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38483 === (10))){
var inst_38476 = (state_38482[(2)]);
var state_38482__$1 = state_38482;
var statearr_38506_40783 = state_38482__$1;
(statearr_38506_40783[(2)] = inst_38476);

(statearr_38506_40783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38483 === (8))){
var inst_38466 = (state_38482[(9)]);
var inst_38472 = cljs.core.deref(inst_38466);
var state_38482__$1 = state_38482;
var statearr_38507_40788 = state_38482__$1;
(statearr_38507_40788[(2)] = inst_38472);

(statearr_38507_40788[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__36899__auto__ = null;
var cljs$core$async$reduce_$_state_machine__36899__auto____0 = (function (){
var statearr_38511 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38511[(0)] = cljs$core$async$reduce_$_state_machine__36899__auto__);

(statearr_38511[(1)] = (1));

return statearr_38511;
});
var cljs$core$async$reduce_$_state_machine__36899__auto____1 = (function (state_38482){
while(true){
var ret_value__36900__auto__ = (function (){try{while(true){
var result__36901__auto__ = switch__36898__auto__(state_38482);
if(cljs.core.keyword_identical_QMARK_(result__36901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36901__auto__;
}
break;
}
}catch (e38512){var ex__36902__auto__ = e38512;
var statearr_38513_40792 = state_38482;
(statearr_38513_40792[(2)] = ex__36902__auto__);


if(cljs.core.seq((state_38482[(4)]))){
var statearr_38514_40793 = state_38482;
(statearr_38514_40793[(1)] = cljs.core.first((state_38482[(4)])));

} else {
throw ex__36902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40794 = state_38482;
state_38482 = G__40794;
continue;
} else {
return ret_value__36900__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__36899__auto__ = function(state_38482){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__36899__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__36899__auto____1.call(this,state_38482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__36899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__36899__auto____0;
cljs$core$async$reduce_$_state_machine__36899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__36899__auto____1;
return cljs$core$async$reduce_$_state_machine__36899__auto__;
})()
})();
var state__37725__auto__ = (function (){var statearr_38516 = f__37724__auto__();
(statearr_38516[(6)] = c__37723__auto__);

return statearr_38516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37725__auto__);
}));

return c__37723__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__37723__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37724__auto__ = (function (){var switch__36898__auto__ = (function (state_38528){
var state_val_38529 = (state_38528[(1)]);
if((state_val_38529 === (1))){
var inst_38523 = cljs.core.async.reduce(f__$1,init,ch);
var state_38528__$1 = state_38528;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38528__$1,(2),inst_38523);
} else {
if((state_val_38529 === (2))){
var inst_38525 = (state_38528[(2)]);
var inst_38526 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_38525) : f__$1.call(null,inst_38525));
var state_38528__$1 = state_38528;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38528__$1,inst_38526);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__36899__auto__ = null;
var cljs$core$async$transduce_$_state_machine__36899__auto____0 = (function (){
var statearr_38532 = [null,null,null,null,null,null,null];
(statearr_38532[(0)] = cljs$core$async$transduce_$_state_machine__36899__auto__);

(statearr_38532[(1)] = (1));

return statearr_38532;
});
var cljs$core$async$transduce_$_state_machine__36899__auto____1 = (function (state_38528){
while(true){
var ret_value__36900__auto__ = (function (){try{while(true){
var result__36901__auto__ = switch__36898__auto__(state_38528);
if(cljs.core.keyword_identical_QMARK_(result__36901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36901__auto__;
}
break;
}
}catch (e38533){var ex__36902__auto__ = e38533;
var statearr_38535_40801 = state_38528;
(statearr_38535_40801[(2)] = ex__36902__auto__);


if(cljs.core.seq((state_38528[(4)]))){
var statearr_38536_40802 = state_38528;
(statearr_38536_40802[(1)] = cljs.core.first((state_38528[(4)])));

} else {
throw ex__36902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40806 = state_38528;
state_38528 = G__40806;
continue;
} else {
return ret_value__36900__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__36899__auto__ = function(state_38528){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__36899__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__36899__auto____1.call(this,state_38528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__36899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__36899__auto____0;
cljs$core$async$transduce_$_state_machine__36899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__36899__auto____1;
return cljs$core$async$transduce_$_state_machine__36899__auto__;
})()
})();
var state__37725__auto__ = (function (){var statearr_38537 = f__37724__auto__();
(statearr_38537[(6)] = c__37723__auto__);

return statearr_38537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37725__auto__);
}));

return c__37723__auto__;
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
var G__38541 = arguments.length;
switch (G__38541) {
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
var c__37723__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37724__auto__ = (function (){var switch__36898__auto__ = (function (state_38577){
var state_val_38578 = (state_38577[(1)]);
if((state_val_38578 === (7))){
var inst_38552 = (state_38577[(2)]);
var state_38577__$1 = state_38577;
var statearr_38583_40808 = state_38577__$1;
(statearr_38583_40808[(2)] = inst_38552);

(statearr_38583_40808[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38578 === (1))){
var inst_38546 = cljs.core.seq(coll);
var inst_38547 = inst_38546;
var state_38577__$1 = (function (){var statearr_38584 = state_38577;
(statearr_38584[(7)] = inst_38547);

return statearr_38584;
})();
var statearr_38585_40809 = state_38577__$1;
(statearr_38585_40809[(2)] = null);

(statearr_38585_40809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38578 === (4))){
var inst_38547 = (state_38577[(7)]);
var inst_38550 = cljs.core.first(inst_38547);
var state_38577__$1 = state_38577;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38577__$1,(7),ch,inst_38550);
} else {
if((state_val_38578 === (13))){
var inst_38564 = (state_38577[(2)]);
var state_38577__$1 = state_38577;
var statearr_38590_40813 = state_38577__$1;
(statearr_38590_40813[(2)] = inst_38564);

(statearr_38590_40813[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38578 === (6))){
var inst_38555 = (state_38577[(2)]);
var state_38577__$1 = state_38577;
if(cljs.core.truth_(inst_38555)){
var statearr_38591_40816 = state_38577__$1;
(statearr_38591_40816[(1)] = (8));

} else {
var statearr_38592_40817 = state_38577__$1;
(statearr_38592_40817[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38578 === (3))){
var inst_38568 = (state_38577[(2)]);
var state_38577__$1 = state_38577;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38577__$1,inst_38568);
} else {
if((state_val_38578 === (12))){
var state_38577__$1 = state_38577;
var statearr_38593_40818 = state_38577__$1;
(statearr_38593_40818[(2)] = null);

(statearr_38593_40818[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38578 === (2))){
var inst_38547 = (state_38577[(7)]);
var state_38577__$1 = state_38577;
if(cljs.core.truth_(inst_38547)){
var statearr_38594_40819 = state_38577__$1;
(statearr_38594_40819[(1)] = (4));

} else {
var statearr_38595_40820 = state_38577__$1;
(statearr_38595_40820[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38578 === (11))){
var inst_38561 = cljs.core.async.close_BANG_(ch);
var state_38577__$1 = state_38577;
var statearr_38596_40821 = state_38577__$1;
(statearr_38596_40821[(2)] = inst_38561);

(statearr_38596_40821[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38578 === (9))){
var state_38577__$1 = state_38577;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38599_40824 = state_38577__$1;
(statearr_38599_40824[(1)] = (11));

} else {
var statearr_38601_40825 = state_38577__$1;
(statearr_38601_40825[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38578 === (5))){
var inst_38547 = (state_38577[(7)]);
var state_38577__$1 = state_38577;
var statearr_38603_40827 = state_38577__$1;
(statearr_38603_40827[(2)] = inst_38547);

(statearr_38603_40827[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38578 === (10))){
var inst_38566 = (state_38577[(2)]);
var state_38577__$1 = state_38577;
var statearr_38604_40828 = state_38577__$1;
(statearr_38604_40828[(2)] = inst_38566);

(statearr_38604_40828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38578 === (8))){
var inst_38547 = (state_38577[(7)]);
var inst_38557 = cljs.core.next(inst_38547);
var inst_38547__$1 = inst_38557;
var state_38577__$1 = (function (){var statearr_38605 = state_38577;
(statearr_38605[(7)] = inst_38547__$1);

return statearr_38605;
})();
var statearr_38606_40829 = state_38577__$1;
(statearr_38606_40829[(2)] = null);

(statearr_38606_40829[(1)] = (2));


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
var cljs$core$async$state_machine__36899__auto__ = null;
var cljs$core$async$state_machine__36899__auto____0 = (function (){
var statearr_38607 = [null,null,null,null,null,null,null,null];
(statearr_38607[(0)] = cljs$core$async$state_machine__36899__auto__);

(statearr_38607[(1)] = (1));

return statearr_38607;
});
var cljs$core$async$state_machine__36899__auto____1 = (function (state_38577){
while(true){
var ret_value__36900__auto__ = (function (){try{while(true){
var result__36901__auto__ = switch__36898__auto__(state_38577);
if(cljs.core.keyword_identical_QMARK_(result__36901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36901__auto__;
}
break;
}
}catch (e38608){var ex__36902__auto__ = e38608;
var statearr_38609_40834 = state_38577;
(statearr_38609_40834[(2)] = ex__36902__auto__);


if(cljs.core.seq((state_38577[(4)]))){
var statearr_38610_40836 = state_38577;
(statearr_38610_40836[(1)] = cljs.core.first((state_38577[(4)])));

} else {
throw ex__36902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40848 = state_38577;
state_38577 = G__40848;
continue;
} else {
return ret_value__36900__auto__;
}
break;
}
});
cljs$core$async$state_machine__36899__auto__ = function(state_38577){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36899__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36899__auto____1.call(this,state_38577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36899__auto____0;
cljs$core$async$state_machine__36899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36899__auto____1;
return cljs$core$async$state_machine__36899__auto__;
})()
})();
var state__37725__auto__ = (function (){var statearr_38614 = f__37724__auto__();
(statearr_38614[(6)] = c__37723__auto__);

return statearr_38614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37725__auto__);
}));

return c__37723__auto__;
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
var G__38617 = arguments.length;
switch (G__38617) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_40858 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_40858(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_40868 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_40868(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_40883 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_40883(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_40884 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_40884(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38644 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38644 = (function (ch,cs,meta38645){
this.ch = ch;
this.cs = cs;
this.meta38645 = meta38645;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38646,meta38645__$1){
var self__ = this;
var _38646__$1 = this;
return (new cljs.core.async.t_cljs$core$async38644(self__.ch,self__.cs,meta38645__$1));
}));

(cljs.core.async.t_cljs$core$async38644.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38646){
var self__ = this;
var _38646__$1 = this;
return self__.meta38645;
}));

(cljs.core.async.t_cljs$core$async38644.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38644.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async38644.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38644.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async38644.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async38644.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async38644.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta38645","meta38645",-483372909,null)], null);
}));

(cljs.core.async.t_cljs$core$async38644.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38644.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38644");

(cljs.core.async.t_cljs$core$async38644.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async38644");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38644.
 */
cljs.core.async.__GT_t_cljs$core$async38644 = (function cljs$core$async$mult_$___GT_t_cljs$core$async38644(ch__$1,cs__$1,meta38645){
return (new cljs.core.async.t_cljs$core$async38644(ch__$1,cs__$1,meta38645));
});

}

return (new cljs.core.async.t_cljs$core$async38644(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__37723__auto___40905 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37724__auto__ = (function (){var switch__36898__auto__ = (function (state_38806){
var state_val_38807 = (state_38806[(1)]);
if((state_val_38807 === (7))){
var inst_38802 = (state_38806[(2)]);
var state_38806__$1 = state_38806;
var statearr_38811_40910 = state_38806__$1;
(statearr_38811_40910[(2)] = inst_38802);

(statearr_38811_40910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (20))){
var inst_38699 = (state_38806[(7)]);
var inst_38711 = cljs.core.first(inst_38699);
var inst_38713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38711,(0),null);
var inst_38714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38711,(1),null);
var state_38806__$1 = (function (){var statearr_38817 = state_38806;
(statearr_38817[(8)] = inst_38713);

return statearr_38817;
})();
if(cljs.core.truth_(inst_38714)){
var statearr_38818_40915 = state_38806__$1;
(statearr_38818_40915[(1)] = (22));

} else {
var statearr_38819_40916 = state_38806__$1;
(statearr_38819_40916[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (27))){
var inst_38746 = (state_38806[(9)]);
var inst_38661 = (state_38806[(10)]);
var inst_38744 = (state_38806[(11)]);
var inst_38753 = (state_38806[(12)]);
var inst_38753__$1 = cljs.core._nth(inst_38744,inst_38746);
var inst_38754 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_38753__$1,inst_38661,done);
var state_38806__$1 = (function (){var statearr_38820 = state_38806;
(statearr_38820[(12)] = inst_38753__$1);

return statearr_38820;
})();
if(cljs.core.truth_(inst_38754)){
var statearr_38821_40925 = state_38806__$1;
(statearr_38821_40925[(1)] = (30));

} else {
var statearr_38822_40927 = state_38806__$1;
(statearr_38822_40927[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (1))){
var state_38806__$1 = state_38806;
var statearr_38823_40930 = state_38806__$1;
(statearr_38823_40930[(2)] = null);

(statearr_38823_40930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (24))){
var inst_38699 = (state_38806[(7)]);
var inst_38719 = (state_38806[(2)]);
var inst_38720 = cljs.core.next(inst_38699);
var inst_38671 = inst_38720;
var inst_38672 = null;
var inst_38673 = (0);
var inst_38674 = (0);
var state_38806__$1 = (function (){var statearr_38824 = state_38806;
(statearr_38824[(13)] = inst_38674);

(statearr_38824[(14)] = inst_38671);

(statearr_38824[(15)] = inst_38673);

(statearr_38824[(16)] = inst_38672);

(statearr_38824[(17)] = inst_38719);

return statearr_38824;
})();
var statearr_38825_40934 = state_38806__$1;
(statearr_38825_40934[(2)] = null);

(statearr_38825_40934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (39))){
var state_38806__$1 = state_38806;
var statearr_38830_40939 = state_38806__$1;
(statearr_38830_40939[(2)] = null);

(statearr_38830_40939[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (4))){
var inst_38661 = (state_38806[(10)]);
var inst_38661__$1 = (state_38806[(2)]);
var inst_38662 = (inst_38661__$1 == null);
var state_38806__$1 = (function (){var statearr_38831 = state_38806;
(statearr_38831[(10)] = inst_38661__$1);

return statearr_38831;
})();
if(cljs.core.truth_(inst_38662)){
var statearr_38832_40950 = state_38806__$1;
(statearr_38832_40950[(1)] = (5));

} else {
var statearr_38845_40952 = state_38806__$1;
(statearr_38845_40952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (15))){
var inst_38674 = (state_38806[(13)]);
var inst_38671 = (state_38806[(14)]);
var inst_38673 = (state_38806[(15)]);
var inst_38672 = (state_38806[(16)]);
var inst_38692 = (state_38806[(2)]);
var inst_38696 = (inst_38674 + (1));
var tmp38826 = inst_38671;
var tmp38827 = inst_38673;
var tmp38828 = inst_38672;
var inst_38671__$1 = tmp38826;
var inst_38672__$1 = tmp38828;
var inst_38673__$1 = tmp38827;
var inst_38674__$1 = inst_38696;
var state_38806__$1 = (function (){var statearr_38848 = state_38806;
(statearr_38848[(13)] = inst_38674__$1);

(statearr_38848[(14)] = inst_38671__$1);

(statearr_38848[(15)] = inst_38673__$1);

(statearr_38848[(18)] = inst_38692);

(statearr_38848[(16)] = inst_38672__$1);

return statearr_38848;
})();
var statearr_38849_40989 = state_38806__$1;
(statearr_38849_40989[(2)] = null);

(statearr_38849_40989[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (21))){
var inst_38723 = (state_38806[(2)]);
var state_38806__$1 = state_38806;
var statearr_38855_40990 = state_38806__$1;
(statearr_38855_40990[(2)] = inst_38723);

(statearr_38855_40990[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (31))){
var inst_38753 = (state_38806[(12)]);
var inst_38757 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_38753);
var state_38806__$1 = state_38806;
var statearr_38856_40995 = state_38806__$1;
(statearr_38856_40995[(2)] = inst_38757);

(statearr_38856_40995[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (32))){
var inst_38746 = (state_38806[(9)]);
var inst_38745 = (state_38806[(19)]);
var inst_38744 = (state_38806[(11)]);
var inst_38743 = (state_38806[(20)]);
var inst_38759 = (state_38806[(2)]);
var inst_38760 = (inst_38746 + (1));
var tmp38852 = inst_38745;
var tmp38853 = inst_38744;
var tmp38854 = inst_38743;
var inst_38743__$1 = tmp38854;
var inst_38744__$1 = tmp38853;
var inst_38745__$1 = tmp38852;
var inst_38746__$1 = inst_38760;
var state_38806__$1 = (function (){var statearr_38857 = state_38806;
(statearr_38857[(21)] = inst_38759);

(statearr_38857[(9)] = inst_38746__$1);

(statearr_38857[(19)] = inst_38745__$1);

(statearr_38857[(11)] = inst_38744__$1);

(statearr_38857[(20)] = inst_38743__$1);

return statearr_38857;
})();
var statearr_38858_41005 = state_38806__$1;
(statearr_38858_41005[(2)] = null);

(statearr_38858_41005[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (40))){
var inst_38775 = (state_38806[(22)]);
var inst_38779 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_38775);
var state_38806__$1 = state_38806;
var statearr_38860_41022 = state_38806__$1;
(statearr_38860_41022[(2)] = inst_38779);

(statearr_38860_41022[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (33))){
var inst_38763 = (state_38806[(23)]);
var inst_38765 = cljs.core.chunked_seq_QMARK_(inst_38763);
var state_38806__$1 = state_38806;
if(inst_38765){
var statearr_38863_41029 = state_38806__$1;
(statearr_38863_41029[(1)] = (36));

} else {
var statearr_38866_41031 = state_38806__$1;
(statearr_38866_41031[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (13))){
var inst_38685 = (state_38806[(24)]);
var inst_38689 = cljs.core.async.close_BANG_(inst_38685);
var state_38806__$1 = state_38806;
var statearr_38867_41034 = state_38806__$1;
(statearr_38867_41034[(2)] = inst_38689);

(statearr_38867_41034[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (22))){
var inst_38713 = (state_38806[(8)]);
var inst_38716 = cljs.core.async.close_BANG_(inst_38713);
var state_38806__$1 = state_38806;
var statearr_38868_41036 = state_38806__$1;
(statearr_38868_41036[(2)] = inst_38716);

(statearr_38868_41036[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (36))){
var inst_38763 = (state_38806[(23)]);
var inst_38767 = cljs.core.chunk_first(inst_38763);
var inst_38768 = cljs.core.chunk_rest(inst_38763);
var inst_38769 = cljs.core.count(inst_38767);
var inst_38743 = inst_38768;
var inst_38744 = inst_38767;
var inst_38745 = inst_38769;
var inst_38746 = (0);
var state_38806__$1 = (function (){var statearr_38870 = state_38806;
(statearr_38870[(9)] = inst_38746);

(statearr_38870[(19)] = inst_38745);

(statearr_38870[(11)] = inst_38744);

(statearr_38870[(20)] = inst_38743);

return statearr_38870;
})();
var statearr_38871_41037 = state_38806__$1;
(statearr_38871_41037[(2)] = null);

(statearr_38871_41037[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (41))){
var inst_38763 = (state_38806[(23)]);
var inst_38781 = (state_38806[(2)]);
var inst_38782 = cljs.core.next(inst_38763);
var inst_38743 = inst_38782;
var inst_38744 = null;
var inst_38745 = (0);
var inst_38746 = (0);
var state_38806__$1 = (function (){var statearr_38875 = state_38806;
(statearr_38875[(9)] = inst_38746);

(statearr_38875[(19)] = inst_38745);

(statearr_38875[(11)] = inst_38744);

(statearr_38875[(25)] = inst_38781);

(statearr_38875[(20)] = inst_38743);

return statearr_38875;
})();
var statearr_38883_41042 = state_38806__$1;
(statearr_38883_41042[(2)] = null);

(statearr_38883_41042[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (43))){
var state_38806__$1 = state_38806;
var statearr_38887_41046 = state_38806__$1;
(statearr_38887_41046[(2)] = null);

(statearr_38887_41046[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (29))){
var inst_38790 = (state_38806[(2)]);
var state_38806__$1 = state_38806;
var statearr_38891_41047 = state_38806__$1;
(statearr_38891_41047[(2)] = inst_38790);

(statearr_38891_41047[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (44))){
var inst_38799 = (state_38806[(2)]);
var state_38806__$1 = (function (){var statearr_38896 = state_38806;
(statearr_38896[(26)] = inst_38799);

return statearr_38896;
})();
var statearr_38897_41076 = state_38806__$1;
(statearr_38897_41076[(2)] = null);

(statearr_38897_41076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (6))){
var inst_38735 = (state_38806[(27)]);
var inst_38733 = cljs.core.deref(cs);
var inst_38735__$1 = cljs.core.keys(inst_38733);
var inst_38736 = cljs.core.count(inst_38735__$1);
var inst_38737 = cljs.core.reset_BANG_(dctr,inst_38736);
var inst_38742 = cljs.core.seq(inst_38735__$1);
var inst_38743 = inst_38742;
var inst_38744 = null;
var inst_38745 = (0);
var inst_38746 = (0);
var state_38806__$1 = (function (){var statearr_38900 = state_38806;
(statearr_38900[(9)] = inst_38746);

(statearr_38900[(19)] = inst_38745);

(statearr_38900[(11)] = inst_38744);

(statearr_38900[(27)] = inst_38735__$1);

(statearr_38900[(28)] = inst_38737);

(statearr_38900[(20)] = inst_38743);

return statearr_38900;
})();
var statearr_38901_41089 = state_38806__$1;
(statearr_38901_41089[(2)] = null);

(statearr_38901_41089[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (28))){
var inst_38763 = (state_38806[(23)]);
var inst_38743 = (state_38806[(20)]);
var inst_38763__$1 = cljs.core.seq(inst_38743);
var state_38806__$1 = (function (){var statearr_38904 = state_38806;
(statearr_38904[(23)] = inst_38763__$1);

return statearr_38904;
})();
if(inst_38763__$1){
var statearr_38905_41094 = state_38806__$1;
(statearr_38905_41094[(1)] = (33));

} else {
var statearr_38906_41095 = state_38806__$1;
(statearr_38906_41095[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (25))){
var inst_38746 = (state_38806[(9)]);
var inst_38745 = (state_38806[(19)]);
var inst_38750 = (inst_38746 < inst_38745);
var inst_38751 = inst_38750;
var state_38806__$1 = state_38806;
if(cljs.core.truth_(inst_38751)){
var statearr_38907_41102 = state_38806__$1;
(statearr_38907_41102[(1)] = (27));

} else {
var statearr_38908_41103 = state_38806__$1;
(statearr_38908_41103[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (34))){
var state_38806__$1 = state_38806;
var statearr_38909_41120 = state_38806__$1;
(statearr_38909_41120[(2)] = null);

(statearr_38909_41120[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (17))){
var state_38806__$1 = state_38806;
var statearr_38910_41122 = state_38806__$1;
(statearr_38910_41122[(2)] = null);

(statearr_38910_41122[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (3))){
var inst_38804 = (state_38806[(2)]);
var state_38806__$1 = state_38806;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38806__$1,inst_38804);
} else {
if((state_val_38807 === (12))){
var inst_38728 = (state_38806[(2)]);
var state_38806__$1 = state_38806;
var statearr_38911_41123 = state_38806__$1;
(statearr_38911_41123[(2)] = inst_38728);

(statearr_38911_41123[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (2))){
var state_38806__$1 = state_38806;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38806__$1,(4),ch);
} else {
if((state_val_38807 === (23))){
var state_38806__$1 = state_38806;
var statearr_38913_41124 = state_38806__$1;
(statearr_38913_41124[(2)] = null);

(statearr_38913_41124[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (35))){
var inst_38788 = (state_38806[(2)]);
var state_38806__$1 = state_38806;
var statearr_38916_41127 = state_38806__$1;
(statearr_38916_41127[(2)] = inst_38788);

(statearr_38916_41127[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (19))){
var inst_38699 = (state_38806[(7)]);
var inst_38703 = cljs.core.chunk_first(inst_38699);
var inst_38704 = cljs.core.chunk_rest(inst_38699);
var inst_38705 = cljs.core.count(inst_38703);
var inst_38671 = inst_38704;
var inst_38672 = inst_38703;
var inst_38673 = inst_38705;
var inst_38674 = (0);
var state_38806__$1 = (function (){var statearr_38919 = state_38806;
(statearr_38919[(13)] = inst_38674);

(statearr_38919[(14)] = inst_38671);

(statearr_38919[(15)] = inst_38673);

(statearr_38919[(16)] = inst_38672);

return statearr_38919;
})();
var statearr_38920_41128 = state_38806__$1;
(statearr_38920_41128[(2)] = null);

(statearr_38920_41128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (11))){
var inst_38699 = (state_38806[(7)]);
var inst_38671 = (state_38806[(14)]);
var inst_38699__$1 = cljs.core.seq(inst_38671);
var state_38806__$1 = (function (){var statearr_38921 = state_38806;
(statearr_38921[(7)] = inst_38699__$1);

return statearr_38921;
})();
if(inst_38699__$1){
var statearr_38922_41129 = state_38806__$1;
(statearr_38922_41129[(1)] = (16));

} else {
var statearr_38923_41136 = state_38806__$1;
(statearr_38923_41136[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (9))){
var inst_38730 = (state_38806[(2)]);
var state_38806__$1 = state_38806;
var statearr_38924_41137 = state_38806__$1;
(statearr_38924_41137[(2)] = inst_38730);

(statearr_38924_41137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (5))){
var inst_38669 = cljs.core.deref(cs);
var inst_38670 = cljs.core.seq(inst_38669);
var inst_38671 = inst_38670;
var inst_38672 = null;
var inst_38673 = (0);
var inst_38674 = (0);
var state_38806__$1 = (function (){var statearr_38925 = state_38806;
(statearr_38925[(13)] = inst_38674);

(statearr_38925[(14)] = inst_38671);

(statearr_38925[(15)] = inst_38673);

(statearr_38925[(16)] = inst_38672);

return statearr_38925;
})();
var statearr_38926_41141 = state_38806__$1;
(statearr_38926_41141[(2)] = null);

(statearr_38926_41141[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (14))){
var state_38806__$1 = state_38806;
var statearr_38927_41142 = state_38806__$1;
(statearr_38927_41142[(2)] = null);

(statearr_38927_41142[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (45))){
var inst_38796 = (state_38806[(2)]);
var state_38806__$1 = state_38806;
var statearr_38928_41144 = state_38806__$1;
(statearr_38928_41144[(2)] = inst_38796);

(statearr_38928_41144[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (26))){
var inst_38735 = (state_38806[(27)]);
var inst_38792 = (state_38806[(2)]);
var inst_38793 = cljs.core.seq(inst_38735);
var state_38806__$1 = (function (){var statearr_38929 = state_38806;
(statearr_38929[(29)] = inst_38792);

return statearr_38929;
})();
if(inst_38793){
var statearr_38930_41148 = state_38806__$1;
(statearr_38930_41148[(1)] = (42));

} else {
var statearr_38931_41149 = state_38806__$1;
(statearr_38931_41149[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (16))){
var inst_38699 = (state_38806[(7)]);
var inst_38701 = cljs.core.chunked_seq_QMARK_(inst_38699);
var state_38806__$1 = state_38806;
if(inst_38701){
var statearr_38938_41150 = state_38806__$1;
(statearr_38938_41150[(1)] = (19));

} else {
var statearr_38939_41151 = state_38806__$1;
(statearr_38939_41151[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (38))){
var inst_38785 = (state_38806[(2)]);
var state_38806__$1 = state_38806;
var statearr_38940_41153 = state_38806__$1;
(statearr_38940_41153[(2)] = inst_38785);

(statearr_38940_41153[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (30))){
var state_38806__$1 = state_38806;
var statearr_38942_41154 = state_38806__$1;
(statearr_38942_41154[(2)] = null);

(statearr_38942_41154[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (10))){
var inst_38674 = (state_38806[(13)]);
var inst_38672 = (state_38806[(16)]);
var inst_38684 = cljs.core._nth(inst_38672,inst_38674);
var inst_38685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38684,(0),null);
var inst_38687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38684,(1),null);
var state_38806__$1 = (function (){var statearr_38943 = state_38806;
(statearr_38943[(24)] = inst_38685);

return statearr_38943;
})();
if(cljs.core.truth_(inst_38687)){
var statearr_38944_41160 = state_38806__$1;
(statearr_38944_41160[(1)] = (13));

} else {
var statearr_38945_41164 = state_38806__$1;
(statearr_38945_41164[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (18))){
var inst_38726 = (state_38806[(2)]);
var state_38806__$1 = state_38806;
var statearr_38948_41167 = state_38806__$1;
(statearr_38948_41167[(2)] = inst_38726);

(statearr_38948_41167[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (42))){
var state_38806__$1 = state_38806;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38806__$1,(45),dchan);
} else {
if((state_val_38807 === (37))){
var inst_38763 = (state_38806[(23)]);
var inst_38661 = (state_38806[(10)]);
var inst_38775 = (state_38806[(22)]);
var inst_38775__$1 = cljs.core.first(inst_38763);
var inst_38776 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_38775__$1,inst_38661,done);
var state_38806__$1 = (function (){var statearr_38951 = state_38806;
(statearr_38951[(22)] = inst_38775__$1);

return statearr_38951;
})();
if(cljs.core.truth_(inst_38776)){
var statearr_38952_41172 = state_38806__$1;
(statearr_38952_41172[(1)] = (39));

} else {
var statearr_38953_41174 = state_38806__$1;
(statearr_38953_41174[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (8))){
var inst_38674 = (state_38806[(13)]);
var inst_38673 = (state_38806[(15)]);
var inst_38676 = (inst_38674 < inst_38673);
var inst_38677 = inst_38676;
var state_38806__$1 = state_38806;
if(cljs.core.truth_(inst_38677)){
var statearr_38954_41178 = state_38806__$1;
(statearr_38954_41178[(1)] = (10));

} else {
var statearr_38955_41179 = state_38806__$1;
(statearr_38955_41179[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__36899__auto__ = null;
var cljs$core$async$mult_$_state_machine__36899__auto____0 = (function (){
var statearr_38967 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38967[(0)] = cljs$core$async$mult_$_state_machine__36899__auto__);

(statearr_38967[(1)] = (1));

return statearr_38967;
});
var cljs$core$async$mult_$_state_machine__36899__auto____1 = (function (state_38806){
while(true){
var ret_value__36900__auto__ = (function (){try{while(true){
var result__36901__auto__ = switch__36898__auto__(state_38806);
if(cljs.core.keyword_identical_QMARK_(result__36901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36901__auto__;
}
break;
}
}catch (e38969){var ex__36902__auto__ = e38969;
var statearr_38970_41184 = state_38806;
(statearr_38970_41184[(2)] = ex__36902__auto__);


if(cljs.core.seq((state_38806[(4)]))){
var statearr_38973_41185 = state_38806;
(statearr_38973_41185[(1)] = cljs.core.first((state_38806[(4)])));

} else {
throw ex__36902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41186 = state_38806;
state_38806 = G__41186;
continue;
} else {
return ret_value__36900__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__36899__auto__ = function(state_38806){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__36899__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__36899__auto____1.call(this,state_38806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__36899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__36899__auto____0;
cljs$core$async$mult_$_state_machine__36899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__36899__auto____1;
return cljs$core$async$mult_$_state_machine__36899__auto__;
})()
})();
var state__37725__auto__ = (function (){var statearr_38974 = f__37724__auto__();
(statearr_38974[(6)] = c__37723__auto___40905);

return statearr_38974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37725__auto__);
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
var G__38980 = arguments.length;
switch (G__38980) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_41198 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_41198(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_41208 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_41208(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_41215 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_41215(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_41224 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_41224(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_41236 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_41236(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___41248 = arguments.length;
var i__4737__auto___41249 = (0);
while(true){
if((i__4737__auto___41249 < len__4736__auto___41248)){
args__4742__auto__.push((arguments[i__4737__auto___41249]));

var G__41250 = (i__4737__auto___41249 + (1));
i__4737__auto___41249 = G__41250;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__39019){
var map__39020 = p__39019;
var map__39020__$1 = (((((!((map__39020 == null))))?(((((map__39020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39020):map__39020);
var opts = map__39020__$1;
var statearr_39024_41258 = state;
(statearr_39024_41258[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_39025_41260 = state;
(statearr_39025_41260[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_39027_41263 = state;
(statearr_39027_41263[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq39007){
var G__39008 = cljs.core.first(seq39007);
var seq39007__$1 = cljs.core.next(seq39007);
var G__39009 = cljs.core.first(seq39007__$1);
var seq39007__$2 = cljs.core.next(seq39007__$1);
var G__39010 = cljs.core.first(seq39007__$2);
var seq39007__$3 = cljs.core.next(seq39007__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39008,G__39009,G__39010,seq39007__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39037 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39037 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta39038){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta39038 = meta39038;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39039,meta39038__$1){
var self__ = this;
var _39039__$1 = this;
return (new cljs.core.async.t_cljs$core$async39037(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta39038__$1));
}));

(cljs.core.async.t_cljs$core$async39037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39039){
var self__ = this;
var _39039__$1 = this;
return self__.meta39038;
}));

(cljs.core.async.t_cljs$core$async39037.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39037.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async39037.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39037.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async39037.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async39037.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async39037.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async39037.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async39037.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta39038","meta39038",1369387904,null)], null);
}));

(cljs.core.async.t_cljs$core$async39037.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39037.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39037");

(cljs.core.async.t_cljs$core$async39037.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async39037");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39037.
 */
cljs.core.async.__GT_t_cljs$core$async39037 = (function cljs$core$async$mix_$___GT_t_cljs$core$async39037(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39038){
return (new cljs.core.async.t_cljs$core$async39037(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39038));
});

}

return (new cljs.core.async.t_cljs$core$async39037(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37723__auto___41314 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37724__auto__ = (function (){var switch__36898__auto__ = (function (state_39172){
var state_val_39173 = (state_39172[(1)]);
if((state_val_39173 === (7))){
var inst_39073 = (state_39172[(2)]);
var state_39172__$1 = state_39172;
var statearr_39176_41318 = state_39172__$1;
(statearr_39176_41318[(2)] = inst_39073);

(statearr_39176_41318[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39173 === (20))){
var inst_39085 = (state_39172[(7)]);
var state_39172__$1 = state_39172;
var statearr_39177_41319 = state_39172__$1;
(statearr_39177_41319[(2)] = inst_39085);

(statearr_39177_41319[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39173 === (27))){
var state_39172__$1 = state_39172;
var statearr_39178_41321 = state_39172__$1;
(statearr_39178_41321[(2)] = null);

(statearr_39178_41321[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39173 === (1))){
var inst_39057 = (state_39172[(8)]);
var inst_39057__$1 = calc_state();
var inst_39062 = (inst_39057__$1 == null);
var inst_39063 = cljs.core.not(inst_39062);
var state_39172__$1 = (function (){var statearr_39179 = state_39172;
(statearr_39179[(8)] = inst_39057__$1);

return statearr_39179;
})();
if(inst_39063){
var statearr_39180_41325 = state_39172__$1;
(statearr_39180_41325[(1)] = (2));

} else {
var statearr_39181_41326 = state_39172__$1;
(statearr_39181_41326[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39173 === (24))){
var inst_39109 = (state_39172[(9)]);
var inst_39118 = (state_39172[(10)]);
var inst_39136 = (state_39172[(11)]);
var inst_39136__$1 = (inst_39109.cljs$core$IFn$_invoke$arity$1 ? inst_39109.cljs$core$IFn$_invoke$arity$1(inst_39118) : inst_39109.call(null,inst_39118));
var state_39172__$1 = (function (){var statearr_39183 = state_39172;
(statearr_39183[(11)] = inst_39136__$1);

return statearr_39183;
})();
if(cljs.core.truth_(inst_39136__$1)){
var statearr_39196_41327 = state_39172__$1;
(statearr_39196_41327[(1)] = (29));

} else {
var statearr_39197_41328 = state_39172__$1;
(statearr_39197_41328[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39173 === (4))){
var inst_39076 = (state_39172[(2)]);
var state_39172__$1 = state_39172;
if(cljs.core.truth_(inst_39076)){
var statearr_39199_41329 = state_39172__$1;
(statearr_39199_41329[(1)] = (8));

} else {
var statearr_39200_41330 = state_39172__$1;
(statearr_39200_41330[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39173 === (15))){
var inst_39103 = (state_39172[(2)]);
var state_39172__$1 = state_39172;
if(cljs.core.truth_(inst_39103)){
var statearr_39201_41331 = state_39172__$1;
(statearr_39201_41331[(1)] = (19));

} else {
var statearr_39202_41332 = state_39172__$1;
(statearr_39202_41332[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39173 === (21))){
var inst_39108 = (state_39172[(12)]);
var inst_39108__$1 = (state_39172[(2)]);
var inst_39109 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39108__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39110 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39108__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39111 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39108__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_39172__$1 = (function (){var statearr_39203 = state_39172;
(statearr_39203[(12)] = inst_39108__$1);

(statearr_39203[(9)] = inst_39109);

(statearr_39203[(13)] = inst_39110);

return statearr_39203;
})();
return cljs.core.async.ioc_alts_BANG_(state_39172__$1,(22),inst_39111);
} else {
if((state_val_39173 === (31))){
var inst_39148 = (state_39172[(2)]);
var state_39172__$1 = state_39172;
if(cljs.core.truth_(inst_39148)){
var statearr_39204_41335 = state_39172__$1;
(statearr_39204_41335[(1)] = (32));

} else {
var statearr_39205_41337 = state_39172__$1;
(statearr_39205_41337[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39173 === (32))){
var inst_39117 = (state_39172[(14)]);
var state_39172__$1 = state_39172;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39172__$1,(35),out,inst_39117);
} else {
if((state_val_39173 === (33))){
var inst_39108 = (state_39172[(12)]);
var inst_39085 = inst_39108;
var state_39172__$1 = (function (){var statearr_39206 = state_39172;
(statearr_39206[(7)] = inst_39085);

return statearr_39206;
})();
var statearr_39207_41341 = state_39172__$1;
(statearr_39207_41341[(2)] = null);

(statearr_39207_41341[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39173 === (13))){
var inst_39085 = (state_39172[(7)]);
var inst_39092 = inst_39085.cljs$lang$protocol_mask$partition0$;
var inst_39093 = (inst_39092 & (64));
var inst_39094 = inst_39085.cljs$core$ISeq$;
var inst_39095 = (cljs.core.PROTOCOL_SENTINEL === inst_39094);
var inst_39096 = ((inst_39093) || (inst_39095));
var state_39172__$1 = state_39172;
if(cljs.core.truth_(inst_39096)){
var statearr_39210_41345 = state_39172__$1;
(statearr_39210_41345[(1)] = (16));

} else {
var statearr_39211_41346 = state_39172__$1;
(statearr_39211_41346[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39173 === (22))){
var inst_39117 = (state_39172[(14)]);
var inst_39118 = (state_39172[(10)]);
var inst_39116 = (state_39172[(2)]);
var inst_39117__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39116,(0),null);
var inst_39118__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39116,(1),null);
var inst_39119 = (inst_39117__$1 == null);
var inst_39120 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39118__$1,change);
var inst_39121 = ((inst_39119) || (inst_39120));
var state_39172__$1 = (function (){var statearr_39214 = state_39172;
(statearr_39214[(14)] = inst_39117__$1);

(statearr_39214[(10)] = inst_39118__$1);

return statearr_39214;
})();
if(cljs.core.truth_(inst_39121)){
var statearr_39215_41347 = state_39172__$1;
(statearr_39215_41347[(1)] = (23));

} else {
var statearr_39216_41349 = state_39172__$1;
(statearr_39216_41349[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39173 === (36))){
var inst_39108 = (state_39172[(12)]);
var inst_39085 = inst_39108;
var state_39172__$1 = (function (){var statearr_39217 = state_39172;
(statearr_39217[(7)] = inst_39085);

return statearr_39217;
})();
var statearr_39218_41350 = state_39172__$1;
(statearr_39218_41350[(2)] = null);

(statearr_39218_41350[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39173 === (29))){
var inst_39136 = (state_39172[(11)]);
var state_39172__$1 = state_39172;
var statearr_39219_41351 = state_39172__$1;
(statearr_39219_41351[(2)] = inst_39136);

(statearr_39219_41351[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39173 === (6))){
var state_39172__$1 = state_39172;
var statearr_39220_41354 = state_39172__$1;
(statearr_39220_41354[(2)] = false);

(statearr_39220_41354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39173 === (28))){
var inst_39128 = (state_39172[(2)]);
var inst_39133 = calc_state();
var inst_39085 = inst_39133;
var state_39172__$1 = (function (){var statearr_39221 = state_39172;
(statearr_39221[(7)] = inst_39085);

(statearr_39221[(15)] = inst_39128);

return statearr_39221;
})();
var statearr_39222_41357 = state_39172__$1;
(statearr_39222_41357[(2)] = null);

(statearr_39222_41357[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39173 === (25))){
var inst_39162 = (state_39172[(2)]);
var state_39172__$1 = state_39172;
var statearr_39224_41359 = state_39172__$1;
(statearr_39224_41359[(2)] = inst_39162);

(statearr_39224_41359[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39173 === (34))){
var inst_39160 = (state_39172[(2)]);
var state_39172__$1 = state_39172;
var statearr_39225_41360 = state_39172__$1;
(statearr_39225_41360[(2)] = inst_39160);

(statearr_39225_41360[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39173 === (17))){
var state_39172__$1 = state_39172;
var statearr_39228_41362 = state_39172__$1;
(statearr_39228_41362[(2)] = false);

(statearr_39228_41362[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39173 === (3))){
var state_39172__$1 = state_39172;
var statearr_39233_41363 = state_39172__$1;
(statearr_39233_41363[(2)] = false);

(statearr_39233_41363[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39173 === (12))){
var inst_39165 = (state_39172[(2)]);
var state_39172__$1 = state_39172;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39172__$1,inst_39165);
} else {
if((state_val_39173 === (2))){
var inst_39057 = (state_39172[(8)]);
var inst_39065 = inst_39057.cljs$lang$protocol_mask$partition0$;
var inst_39066 = (inst_39065 & (64));
var inst_39067 = inst_39057.cljs$core$ISeq$;
var inst_39068 = (cljs.core.PROTOCOL_SENTINEL === inst_39067);
var inst_39069 = ((inst_39066) || (inst_39068));
var state_39172__$1 = state_39172;
if(cljs.core.truth_(inst_39069)){
var statearr_39234_41364 = state_39172__$1;
(statearr_39234_41364[(1)] = (5));

} else {
var statearr_39235_41365 = state_39172__$1;
(statearr_39235_41365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39173 === (23))){
var inst_39117 = (state_39172[(14)]);
var inst_39123 = (inst_39117 == null);
var state_39172__$1 = state_39172;
if(cljs.core.truth_(inst_39123)){
var statearr_39236_41368 = state_39172__$1;
(statearr_39236_41368[(1)] = (26));

} else {
var statearr_39237_41370 = state_39172__$1;
(statearr_39237_41370[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39173 === (35))){
var inst_39151 = (state_39172[(2)]);
var state_39172__$1 = state_39172;
if(cljs.core.truth_(inst_39151)){
var statearr_39241_41371 = state_39172__$1;
(statearr_39241_41371[(1)] = (36));

} else {
var statearr_39242_41373 = state_39172__$1;
(statearr_39242_41373[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39173 === (19))){
var inst_39085 = (state_39172[(7)]);
var inst_39105 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_39085);
var state_39172__$1 = state_39172;
var statearr_39243_41378 = state_39172__$1;
(statearr_39243_41378[(2)] = inst_39105);

(statearr_39243_41378[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39173 === (11))){
var inst_39085 = (state_39172[(7)]);
var inst_39089 = (inst_39085 == null);
var inst_39090 = cljs.core.not(inst_39089);
var state_39172__$1 = state_39172;
if(inst_39090){
var statearr_39244_41382 = state_39172__$1;
(statearr_39244_41382[(1)] = (13));

} else {
var statearr_39245_41383 = state_39172__$1;
(statearr_39245_41383[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39173 === (9))){
var inst_39057 = (state_39172[(8)]);
var state_39172__$1 = state_39172;
var statearr_39246_41385 = state_39172__$1;
(statearr_39246_41385[(2)] = inst_39057);

(statearr_39246_41385[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39173 === (5))){
var state_39172__$1 = state_39172;
var statearr_39247_41387 = state_39172__$1;
(statearr_39247_41387[(2)] = true);

(statearr_39247_41387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39173 === (14))){
var state_39172__$1 = state_39172;
var statearr_39248_41393 = state_39172__$1;
(statearr_39248_41393[(2)] = false);

(statearr_39248_41393[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39173 === (26))){
var inst_39118 = (state_39172[(10)]);
var inst_39125 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_39118);
var state_39172__$1 = state_39172;
var statearr_39250_41398 = state_39172__$1;
(statearr_39250_41398[(2)] = inst_39125);

(statearr_39250_41398[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39173 === (16))){
var state_39172__$1 = state_39172;
var statearr_39254_41404 = state_39172__$1;
(statearr_39254_41404[(2)] = true);

(statearr_39254_41404[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39173 === (38))){
var inst_39156 = (state_39172[(2)]);
var state_39172__$1 = state_39172;
var statearr_39256_41405 = state_39172__$1;
(statearr_39256_41405[(2)] = inst_39156);

(statearr_39256_41405[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39173 === (30))){
var inst_39109 = (state_39172[(9)]);
var inst_39118 = (state_39172[(10)]);
var inst_39110 = (state_39172[(13)]);
var inst_39143 = cljs.core.empty_QMARK_(inst_39109);
var inst_39144 = (inst_39110.cljs$core$IFn$_invoke$arity$1 ? inst_39110.cljs$core$IFn$_invoke$arity$1(inst_39118) : inst_39110.call(null,inst_39118));
var inst_39145 = cljs.core.not(inst_39144);
var inst_39146 = ((inst_39143) && (inst_39145));
var state_39172__$1 = state_39172;
var statearr_39260_41410 = state_39172__$1;
(statearr_39260_41410[(2)] = inst_39146);

(statearr_39260_41410[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39173 === (10))){
var inst_39057 = (state_39172[(8)]);
var inst_39081 = (state_39172[(2)]);
var inst_39082 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39081,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39083 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39081,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39081,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_39085 = inst_39057;
var state_39172__$1 = (function (){var statearr_39261 = state_39172;
(statearr_39261[(7)] = inst_39085);

(statearr_39261[(16)] = inst_39082);

(statearr_39261[(17)] = inst_39083);

(statearr_39261[(18)] = inst_39084);

return statearr_39261;
})();
var statearr_39262_41418 = state_39172__$1;
(statearr_39262_41418[(2)] = null);

(statearr_39262_41418[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39173 === (18))){
var inst_39100 = (state_39172[(2)]);
var state_39172__$1 = state_39172;
var statearr_39267_41419 = state_39172__$1;
(statearr_39267_41419[(2)] = inst_39100);

(statearr_39267_41419[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39173 === (37))){
var state_39172__$1 = state_39172;
var statearr_39268_41421 = state_39172__$1;
(statearr_39268_41421[(2)] = null);

(statearr_39268_41421[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39173 === (8))){
var inst_39057 = (state_39172[(8)]);
var inst_39078 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_39057);
var state_39172__$1 = state_39172;
var statearr_39269_41422 = state_39172__$1;
(statearr_39269_41422[(2)] = inst_39078);

(statearr_39269_41422[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__36899__auto__ = null;
var cljs$core$async$mix_$_state_machine__36899__auto____0 = (function (){
var statearr_39272 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39272[(0)] = cljs$core$async$mix_$_state_machine__36899__auto__);

(statearr_39272[(1)] = (1));

return statearr_39272;
});
var cljs$core$async$mix_$_state_machine__36899__auto____1 = (function (state_39172){
while(true){
var ret_value__36900__auto__ = (function (){try{while(true){
var result__36901__auto__ = switch__36898__auto__(state_39172);
if(cljs.core.keyword_identical_QMARK_(result__36901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36901__auto__;
}
break;
}
}catch (e39273){var ex__36902__auto__ = e39273;
var statearr_39274_41432 = state_39172;
(statearr_39274_41432[(2)] = ex__36902__auto__);


if(cljs.core.seq((state_39172[(4)]))){
var statearr_39277_41440 = state_39172;
(statearr_39277_41440[(1)] = cljs.core.first((state_39172[(4)])));

} else {
throw ex__36902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41443 = state_39172;
state_39172 = G__41443;
continue;
} else {
return ret_value__36900__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__36899__auto__ = function(state_39172){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__36899__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__36899__auto____1.call(this,state_39172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__36899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__36899__auto____0;
cljs$core$async$mix_$_state_machine__36899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__36899__auto____1;
return cljs$core$async$mix_$_state_machine__36899__auto__;
})()
})();
var state__37725__auto__ = (function (){var statearr_39279 = f__37724__auto__();
(statearr_39279[(6)] = c__37723__auto___41314);

return statearr_39279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37725__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_41458 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_41458(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_41469 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_41469(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_41484 = (function() {
var G__41485 = null;
var G__41485__1 = (function (p){
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
var G__41485__2 = (function (p,v){
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
G__41485 = function(p,v){
switch(arguments.length){
case 1:
return G__41485__1.call(this,p);
case 2:
return G__41485__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__41485.cljs$core$IFn$_invoke$arity$1 = G__41485__1;
G__41485.cljs$core$IFn$_invoke$arity$2 = G__41485__2;
return G__41485;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__39299 = arguments.length;
switch (G__39299) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_41484(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_41484(p,v);
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
var G__39303 = arguments.length;
switch (G__39303) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__39301_SHARP_){
if(cljs.core.truth_((p1__39301_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__39301_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__39301_SHARP_.call(null,topic)))){
return p1__39301_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__39301_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39308 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39308 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta39309){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta39309 = meta39309;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39310,meta39309__$1){
var self__ = this;
var _39310__$1 = this;
return (new cljs.core.async.t_cljs$core$async39308(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta39309__$1));
}));

(cljs.core.async.t_cljs$core$async39308.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39310){
var self__ = this;
var _39310__$1 = this;
return self__.meta39309;
}));

(cljs.core.async.t_cljs$core$async39308.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39308.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async39308.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39308.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async39308.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async39308.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async39308.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async39308.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta39309","meta39309",1255463140,null)], null);
}));

(cljs.core.async.t_cljs$core$async39308.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39308.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39308");

(cljs.core.async.t_cljs$core$async39308.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async39308");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39308.
 */
cljs.core.async.__GT_t_cljs$core$async39308 = (function cljs$core$async$__GT_t_cljs$core$async39308(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39309){
return (new cljs.core.async.t_cljs$core$async39308(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39309));
});

}

return (new cljs.core.async.t_cljs$core$async39308(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37723__auto___41545 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37724__auto__ = (function (){var switch__36898__auto__ = (function (state_39438){
var state_val_39439 = (state_39438[(1)]);
if((state_val_39439 === (7))){
var inst_39434 = (state_39438[(2)]);
var state_39438__$1 = state_39438;
var statearr_39440_41550 = state_39438__$1;
(statearr_39440_41550[(2)] = inst_39434);

(statearr_39440_41550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39439 === (20))){
var state_39438__$1 = state_39438;
var statearr_39441_41552 = state_39438__$1;
(statearr_39441_41552[(2)] = null);

(statearr_39441_41552[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39439 === (1))){
var state_39438__$1 = state_39438;
var statearr_39442_41559 = state_39438__$1;
(statearr_39442_41559[(2)] = null);

(statearr_39442_41559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39439 === (24))){
var inst_39417 = (state_39438[(7)]);
var inst_39426 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_39417);
var state_39438__$1 = state_39438;
var statearr_39444_41567 = state_39438__$1;
(statearr_39444_41567[(2)] = inst_39426);

(statearr_39444_41567[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39439 === (4))){
var inst_39327 = (state_39438[(8)]);
var inst_39327__$1 = (state_39438[(2)]);
var inst_39328 = (inst_39327__$1 == null);
var state_39438__$1 = (function (){var statearr_39445 = state_39438;
(statearr_39445[(8)] = inst_39327__$1);

return statearr_39445;
})();
if(cljs.core.truth_(inst_39328)){
var statearr_39446_41572 = state_39438__$1;
(statearr_39446_41572[(1)] = (5));

} else {
var statearr_39447_41573 = state_39438__$1;
(statearr_39447_41573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39439 === (15))){
var inst_39411 = (state_39438[(2)]);
var state_39438__$1 = state_39438;
var statearr_39451_41575 = state_39438__$1;
(statearr_39451_41575[(2)] = inst_39411);

(statearr_39451_41575[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39439 === (21))){
var inst_39431 = (state_39438[(2)]);
var state_39438__$1 = (function (){var statearr_39453 = state_39438;
(statearr_39453[(9)] = inst_39431);

return statearr_39453;
})();
var statearr_39455_41579 = state_39438__$1;
(statearr_39455_41579[(2)] = null);

(statearr_39455_41579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39439 === (13))){
var inst_39393 = (state_39438[(10)]);
var inst_39395 = cljs.core.chunked_seq_QMARK_(inst_39393);
var state_39438__$1 = state_39438;
if(inst_39395){
var statearr_39457_41580 = state_39438__$1;
(statearr_39457_41580[(1)] = (16));

} else {
var statearr_39458_41581 = state_39438__$1;
(statearr_39458_41581[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39439 === (22))){
var inst_39423 = (state_39438[(2)]);
var state_39438__$1 = state_39438;
if(cljs.core.truth_(inst_39423)){
var statearr_39459_41583 = state_39438__$1;
(statearr_39459_41583[(1)] = (23));

} else {
var statearr_39460_41584 = state_39438__$1;
(statearr_39460_41584[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39439 === (6))){
var inst_39419 = (state_39438[(11)]);
var inst_39327 = (state_39438[(8)]);
var inst_39417 = (state_39438[(7)]);
var inst_39417__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_39327) : topic_fn.call(null,inst_39327));
var inst_39418 = cljs.core.deref(mults);
var inst_39419__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39418,inst_39417__$1);
var state_39438__$1 = (function (){var statearr_39461 = state_39438;
(statearr_39461[(11)] = inst_39419__$1);

(statearr_39461[(7)] = inst_39417__$1);

return statearr_39461;
})();
if(cljs.core.truth_(inst_39419__$1)){
var statearr_39462_41589 = state_39438__$1;
(statearr_39462_41589[(1)] = (19));

} else {
var statearr_39463_41594 = state_39438__$1;
(statearr_39463_41594[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39439 === (25))){
var inst_39428 = (state_39438[(2)]);
var state_39438__$1 = state_39438;
var statearr_39464_41596 = state_39438__$1;
(statearr_39464_41596[(2)] = inst_39428);

(statearr_39464_41596[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39439 === (17))){
var inst_39393 = (state_39438[(10)]);
var inst_39402 = cljs.core.first(inst_39393);
var inst_39403 = cljs.core.async.muxch_STAR_(inst_39402);
var inst_39404 = cljs.core.async.close_BANG_(inst_39403);
var inst_39405 = cljs.core.next(inst_39393);
var inst_39337 = inst_39405;
var inst_39338 = null;
var inst_39339 = (0);
var inst_39340 = (0);
var state_39438__$1 = (function (){var statearr_39465 = state_39438;
(statearr_39465[(12)] = inst_39340);

(statearr_39465[(13)] = inst_39338);

(statearr_39465[(14)] = inst_39404);

(statearr_39465[(15)] = inst_39339);

(statearr_39465[(16)] = inst_39337);

return statearr_39465;
})();
var statearr_39466_41601 = state_39438__$1;
(statearr_39466_41601[(2)] = null);

(statearr_39466_41601[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39439 === (3))){
var inst_39436 = (state_39438[(2)]);
var state_39438__$1 = state_39438;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39438__$1,inst_39436);
} else {
if((state_val_39439 === (12))){
var inst_39413 = (state_39438[(2)]);
var state_39438__$1 = state_39438;
var statearr_39467_41607 = state_39438__$1;
(statearr_39467_41607[(2)] = inst_39413);

(statearr_39467_41607[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39439 === (2))){
var state_39438__$1 = state_39438;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39438__$1,(4),ch);
} else {
if((state_val_39439 === (23))){
var state_39438__$1 = state_39438;
var statearr_39468_41614 = state_39438__$1;
(statearr_39468_41614[(2)] = null);

(statearr_39468_41614[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39439 === (19))){
var inst_39419 = (state_39438[(11)]);
var inst_39327 = (state_39438[(8)]);
var inst_39421 = cljs.core.async.muxch_STAR_(inst_39419);
var state_39438__$1 = state_39438;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39438__$1,(22),inst_39421,inst_39327);
} else {
if((state_val_39439 === (11))){
var inst_39393 = (state_39438[(10)]);
var inst_39337 = (state_39438[(16)]);
var inst_39393__$1 = cljs.core.seq(inst_39337);
var state_39438__$1 = (function (){var statearr_39469 = state_39438;
(statearr_39469[(10)] = inst_39393__$1);

return statearr_39469;
})();
if(inst_39393__$1){
var statearr_39470_41617 = state_39438__$1;
(statearr_39470_41617[(1)] = (13));

} else {
var statearr_39471_41619 = state_39438__$1;
(statearr_39471_41619[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39439 === (9))){
var inst_39415 = (state_39438[(2)]);
var state_39438__$1 = state_39438;
var statearr_39472_41621 = state_39438__$1;
(statearr_39472_41621[(2)] = inst_39415);

(statearr_39472_41621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39439 === (5))){
var inst_39334 = cljs.core.deref(mults);
var inst_39335 = cljs.core.vals(inst_39334);
var inst_39336 = cljs.core.seq(inst_39335);
var inst_39337 = inst_39336;
var inst_39338 = null;
var inst_39339 = (0);
var inst_39340 = (0);
var state_39438__$1 = (function (){var statearr_39473 = state_39438;
(statearr_39473[(12)] = inst_39340);

(statearr_39473[(13)] = inst_39338);

(statearr_39473[(15)] = inst_39339);

(statearr_39473[(16)] = inst_39337);

return statearr_39473;
})();
var statearr_39474_41624 = state_39438__$1;
(statearr_39474_41624[(2)] = null);

(statearr_39474_41624[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39439 === (14))){
var state_39438__$1 = state_39438;
var statearr_39478_41625 = state_39438__$1;
(statearr_39478_41625[(2)] = null);

(statearr_39478_41625[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39439 === (16))){
var inst_39393 = (state_39438[(10)]);
var inst_39397 = cljs.core.chunk_first(inst_39393);
var inst_39398 = cljs.core.chunk_rest(inst_39393);
var inst_39399 = cljs.core.count(inst_39397);
var inst_39337 = inst_39398;
var inst_39338 = inst_39397;
var inst_39339 = inst_39399;
var inst_39340 = (0);
var state_39438__$1 = (function (){var statearr_39481 = state_39438;
(statearr_39481[(12)] = inst_39340);

(statearr_39481[(13)] = inst_39338);

(statearr_39481[(15)] = inst_39339);

(statearr_39481[(16)] = inst_39337);

return statearr_39481;
})();
var statearr_39482_41631 = state_39438__$1;
(statearr_39482_41631[(2)] = null);

(statearr_39482_41631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39439 === (10))){
var inst_39340 = (state_39438[(12)]);
var inst_39338 = (state_39438[(13)]);
var inst_39339 = (state_39438[(15)]);
var inst_39337 = (state_39438[(16)]);
var inst_39345 = cljs.core._nth(inst_39338,inst_39340);
var inst_39359 = cljs.core.async.muxch_STAR_(inst_39345);
var inst_39361 = cljs.core.async.close_BANG_(inst_39359);
var inst_39369 = (inst_39340 + (1));
var tmp39475 = inst_39338;
var tmp39476 = inst_39339;
var tmp39477 = inst_39337;
var inst_39337__$1 = tmp39477;
var inst_39338__$1 = tmp39475;
var inst_39339__$1 = tmp39476;
var inst_39340__$1 = inst_39369;
var state_39438__$1 = (function (){var statearr_39483 = state_39438;
(statearr_39483[(12)] = inst_39340__$1);

(statearr_39483[(17)] = inst_39361);

(statearr_39483[(13)] = inst_39338__$1);

(statearr_39483[(15)] = inst_39339__$1);

(statearr_39483[(16)] = inst_39337__$1);

return statearr_39483;
})();
var statearr_39484_41678 = state_39438__$1;
(statearr_39484_41678[(2)] = null);

(statearr_39484_41678[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39439 === (18))){
var inst_39408 = (state_39438[(2)]);
var state_39438__$1 = state_39438;
var statearr_39488_41683 = state_39438__$1;
(statearr_39488_41683[(2)] = inst_39408);

(statearr_39488_41683[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39439 === (8))){
var inst_39340 = (state_39438[(12)]);
var inst_39339 = (state_39438[(15)]);
var inst_39342 = (inst_39340 < inst_39339);
var inst_39343 = inst_39342;
var state_39438__$1 = state_39438;
if(cljs.core.truth_(inst_39343)){
var statearr_39497_41684 = state_39438__$1;
(statearr_39497_41684[(1)] = (10));

} else {
var statearr_39500_41685 = state_39438__$1;
(statearr_39500_41685[(1)] = (11));

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
var cljs$core$async$state_machine__36899__auto__ = null;
var cljs$core$async$state_machine__36899__auto____0 = (function (){
var statearr_39501 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39501[(0)] = cljs$core$async$state_machine__36899__auto__);

(statearr_39501[(1)] = (1));

return statearr_39501;
});
var cljs$core$async$state_machine__36899__auto____1 = (function (state_39438){
while(true){
var ret_value__36900__auto__ = (function (){try{while(true){
var result__36901__auto__ = switch__36898__auto__(state_39438);
if(cljs.core.keyword_identical_QMARK_(result__36901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36901__auto__;
}
break;
}
}catch (e39502){var ex__36902__auto__ = e39502;
var statearr_39503_41686 = state_39438;
(statearr_39503_41686[(2)] = ex__36902__auto__);


if(cljs.core.seq((state_39438[(4)]))){
var statearr_39504_41687 = state_39438;
(statearr_39504_41687[(1)] = cljs.core.first((state_39438[(4)])));

} else {
throw ex__36902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41689 = state_39438;
state_39438 = G__41689;
continue;
} else {
return ret_value__36900__auto__;
}
break;
}
});
cljs$core$async$state_machine__36899__auto__ = function(state_39438){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36899__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36899__auto____1.call(this,state_39438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36899__auto____0;
cljs$core$async$state_machine__36899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36899__auto____1;
return cljs$core$async$state_machine__36899__auto__;
})()
})();
var state__37725__auto__ = (function (){var statearr_39505 = f__37724__auto__();
(statearr_39505[(6)] = c__37723__auto___41545);

return statearr_39505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37725__auto__);
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
var G__39507 = arguments.length;
switch (G__39507) {
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
var G__39509 = arguments.length;
switch (G__39509) {
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
var G__39515 = arguments.length;
switch (G__39515) {
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
var c__37723__auto___41712 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37724__auto__ = (function (){var switch__36898__auto__ = (function (state_39575){
var state_val_39576 = (state_39575[(1)]);
if((state_val_39576 === (7))){
var state_39575__$1 = state_39575;
var statearr_39580_41714 = state_39575__$1;
(statearr_39580_41714[(2)] = null);

(statearr_39580_41714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39576 === (1))){
var state_39575__$1 = state_39575;
var statearr_39581_41717 = state_39575__$1;
(statearr_39581_41717[(2)] = null);

(statearr_39581_41717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39576 === (4))){
var inst_39525 = (state_39575[(7)]);
var inst_39526 = (state_39575[(8)]);
var inst_39529 = (inst_39526 < inst_39525);
var state_39575__$1 = state_39575;
if(cljs.core.truth_(inst_39529)){
var statearr_39582_41720 = state_39575__$1;
(statearr_39582_41720[(1)] = (6));

} else {
var statearr_39583_41722 = state_39575__$1;
(statearr_39583_41722[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39576 === (15))){
var inst_39556 = (state_39575[(9)]);
var inst_39563 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_39556);
var state_39575__$1 = state_39575;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39575__$1,(17),out,inst_39563);
} else {
if((state_val_39576 === (13))){
var inst_39556 = (state_39575[(9)]);
var inst_39556__$1 = (state_39575[(2)]);
var inst_39557 = cljs.core.some(cljs.core.nil_QMARK_,inst_39556__$1);
var state_39575__$1 = (function (){var statearr_39588 = state_39575;
(statearr_39588[(9)] = inst_39556__$1);

return statearr_39588;
})();
if(cljs.core.truth_(inst_39557)){
var statearr_39589_41723 = state_39575__$1;
(statearr_39589_41723[(1)] = (14));

} else {
var statearr_39590_41724 = state_39575__$1;
(statearr_39590_41724[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39576 === (6))){
var state_39575__$1 = state_39575;
var statearr_39591_41725 = state_39575__$1;
(statearr_39591_41725[(2)] = null);

(statearr_39591_41725[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39576 === (17))){
var inst_39565 = (state_39575[(2)]);
var state_39575__$1 = (function (){var statearr_39593 = state_39575;
(statearr_39593[(10)] = inst_39565);

return statearr_39593;
})();
var statearr_39594_41726 = state_39575__$1;
(statearr_39594_41726[(2)] = null);

(statearr_39594_41726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39576 === (3))){
var inst_39570 = (state_39575[(2)]);
var state_39575__$1 = state_39575;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39575__$1,inst_39570);
} else {
if((state_val_39576 === (12))){
var _ = (function (){var statearr_39596 = state_39575;
(statearr_39596[(4)] = cljs.core.rest((state_39575[(4)])));

return statearr_39596;
})();
var state_39575__$1 = state_39575;
var ex39592 = (state_39575__$1[(2)]);
var statearr_39601_41729 = state_39575__$1;
(statearr_39601_41729[(5)] = ex39592);


if((ex39592 instanceof Object)){
var statearr_39602_41730 = state_39575__$1;
(statearr_39602_41730[(1)] = (11));

(statearr_39602_41730[(5)] = null);

} else {
throw ex39592;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39576 === (2))){
var inst_39524 = cljs.core.reset_BANG_(dctr,cnt);
var inst_39525 = cnt;
var inst_39526 = (0);
var state_39575__$1 = (function (){var statearr_39603 = state_39575;
(statearr_39603[(11)] = inst_39524);

(statearr_39603[(7)] = inst_39525);

(statearr_39603[(8)] = inst_39526);

return statearr_39603;
})();
var statearr_39606_41736 = state_39575__$1;
(statearr_39606_41736[(2)] = null);

(statearr_39606_41736[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39576 === (11))){
var inst_39535 = (state_39575[(2)]);
var inst_39536 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_39575__$1 = (function (){var statearr_39613 = state_39575;
(statearr_39613[(12)] = inst_39535);

return statearr_39613;
})();
var statearr_39614_41738 = state_39575__$1;
(statearr_39614_41738[(2)] = inst_39536);

(statearr_39614_41738[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39576 === (9))){
var inst_39526 = (state_39575[(8)]);
var _ = (function (){var statearr_39618 = state_39575;
(statearr_39618[(4)] = cljs.core.cons((12),(state_39575[(4)])));

return statearr_39618;
})();
var inst_39542 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_39526) : chs__$1.call(null,inst_39526));
var inst_39543 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_39526) : done.call(null,inst_39526));
var inst_39544 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_39542,inst_39543);
var ___$1 = (function (){var statearr_39622 = state_39575;
(statearr_39622[(4)] = cljs.core.rest((state_39575[(4)])));

return statearr_39622;
})();
var state_39575__$1 = state_39575;
var statearr_39623_41739 = state_39575__$1;
(statearr_39623_41739[(2)] = inst_39544);

(statearr_39623_41739[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39576 === (5))){
var inst_39554 = (state_39575[(2)]);
var state_39575__$1 = (function (){var statearr_39624 = state_39575;
(statearr_39624[(13)] = inst_39554);

return statearr_39624;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39575__$1,(13),dchan);
} else {
if((state_val_39576 === (14))){
var inst_39559 = cljs.core.async.close_BANG_(out);
var state_39575__$1 = state_39575;
var statearr_39633_41740 = state_39575__$1;
(statearr_39633_41740[(2)] = inst_39559);

(statearr_39633_41740[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39576 === (16))){
var inst_39568 = (state_39575[(2)]);
var state_39575__$1 = state_39575;
var statearr_39635_41743 = state_39575__$1;
(statearr_39635_41743[(2)] = inst_39568);

(statearr_39635_41743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39576 === (10))){
var inst_39526 = (state_39575[(8)]);
var inst_39547 = (state_39575[(2)]);
var inst_39548 = (inst_39526 + (1));
var inst_39526__$1 = inst_39548;
var state_39575__$1 = (function (){var statearr_39636 = state_39575;
(statearr_39636[(14)] = inst_39547);

(statearr_39636[(8)] = inst_39526__$1);

return statearr_39636;
})();
var statearr_39637_41747 = state_39575__$1;
(statearr_39637_41747[(2)] = null);

(statearr_39637_41747[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39576 === (8))){
var inst_39552 = (state_39575[(2)]);
var state_39575__$1 = state_39575;
var statearr_39638_41748 = state_39575__$1;
(statearr_39638_41748[(2)] = inst_39552);

(statearr_39638_41748[(1)] = (5));


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
var cljs$core$async$state_machine__36899__auto__ = null;
var cljs$core$async$state_machine__36899__auto____0 = (function (){
var statearr_39639 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39639[(0)] = cljs$core$async$state_machine__36899__auto__);

(statearr_39639[(1)] = (1));

return statearr_39639;
});
var cljs$core$async$state_machine__36899__auto____1 = (function (state_39575){
while(true){
var ret_value__36900__auto__ = (function (){try{while(true){
var result__36901__auto__ = switch__36898__auto__(state_39575);
if(cljs.core.keyword_identical_QMARK_(result__36901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36901__auto__;
}
break;
}
}catch (e39640){var ex__36902__auto__ = e39640;
var statearr_39641_41752 = state_39575;
(statearr_39641_41752[(2)] = ex__36902__auto__);


if(cljs.core.seq((state_39575[(4)]))){
var statearr_39642_41755 = state_39575;
(statearr_39642_41755[(1)] = cljs.core.first((state_39575[(4)])));

} else {
throw ex__36902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41761 = state_39575;
state_39575 = G__41761;
continue;
} else {
return ret_value__36900__auto__;
}
break;
}
});
cljs$core$async$state_machine__36899__auto__ = function(state_39575){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36899__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36899__auto____1.call(this,state_39575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36899__auto____0;
cljs$core$async$state_machine__36899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36899__auto____1;
return cljs$core$async$state_machine__36899__auto__;
})()
})();
var state__37725__auto__ = (function (){var statearr_39656 = f__37724__auto__();
(statearr_39656[(6)] = c__37723__auto___41712);

return statearr_39656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37725__auto__);
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
var G__39660 = arguments.length;
switch (G__39660) {
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
var c__37723__auto___41775 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37724__auto__ = (function (){var switch__36898__auto__ = (function (state_39697){
var state_val_39698 = (state_39697[(1)]);
if((state_val_39698 === (7))){
var inst_39673 = (state_39697[(7)]);
var inst_39674 = (state_39697[(8)]);
var inst_39673__$1 = (state_39697[(2)]);
var inst_39674__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39673__$1,(0),null);
var inst_39675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39673__$1,(1),null);
var inst_39676 = (inst_39674__$1 == null);
var state_39697__$1 = (function (){var statearr_39702 = state_39697;
(statearr_39702[(9)] = inst_39675);

(statearr_39702[(7)] = inst_39673__$1);

(statearr_39702[(8)] = inst_39674__$1);

return statearr_39702;
})();
if(cljs.core.truth_(inst_39676)){
var statearr_39703_41787 = state_39697__$1;
(statearr_39703_41787[(1)] = (8));

} else {
var statearr_39704_41788 = state_39697__$1;
(statearr_39704_41788[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39698 === (1))){
var inst_39661 = cljs.core.vec(chs);
var inst_39662 = inst_39661;
var state_39697__$1 = (function (){var statearr_39705 = state_39697;
(statearr_39705[(10)] = inst_39662);

return statearr_39705;
})();
var statearr_39706_41797 = state_39697__$1;
(statearr_39706_41797[(2)] = null);

(statearr_39706_41797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39698 === (4))){
var inst_39662 = (state_39697[(10)]);
var state_39697__$1 = state_39697;
return cljs.core.async.ioc_alts_BANG_(state_39697__$1,(7),inst_39662);
} else {
if((state_val_39698 === (6))){
var inst_39693 = (state_39697[(2)]);
var state_39697__$1 = state_39697;
var statearr_39717_41799 = state_39697__$1;
(statearr_39717_41799[(2)] = inst_39693);

(statearr_39717_41799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39698 === (3))){
var inst_39695 = (state_39697[(2)]);
var state_39697__$1 = state_39697;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39697__$1,inst_39695);
} else {
if((state_val_39698 === (2))){
var inst_39662 = (state_39697[(10)]);
var inst_39664 = cljs.core.count(inst_39662);
var inst_39667 = (inst_39664 > (0));
var state_39697__$1 = state_39697;
if(cljs.core.truth_(inst_39667)){
var statearr_39720_41803 = state_39697__$1;
(statearr_39720_41803[(1)] = (4));

} else {
var statearr_39722_41804 = state_39697__$1;
(statearr_39722_41804[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39698 === (11))){
var inst_39662 = (state_39697[(10)]);
var inst_39686 = (state_39697[(2)]);
var tmp39719 = inst_39662;
var inst_39662__$1 = tmp39719;
var state_39697__$1 = (function (){var statearr_39723 = state_39697;
(statearr_39723[(10)] = inst_39662__$1);

(statearr_39723[(11)] = inst_39686);

return statearr_39723;
})();
var statearr_39724_41806 = state_39697__$1;
(statearr_39724_41806[(2)] = null);

(statearr_39724_41806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39698 === (9))){
var inst_39674 = (state_39697[(8)]);
var state_39697__$1 = state_39697;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39697__$1,(11),out,inst_39674);
} else {
if((state_val_39698 === (5))){
var inst_39691 = cljs.core.async.close_BANG_(out);
var state_39697__$1 = state_39697;
var statearr_39731_41807 = state_39697__$1;
(statearr_39731_41807[(2)] = inst_39691);

(statearr_39731_41807[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39698 === (10))){
var inst_39689 = (state_39697[(2)]);
var state_39697__$1 = state_39697;
var statearr_39732_41817 = state_39697__$1;
(statearr_39732_41817[(2)] = inst_39689);

(statearr_39732_41817[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39698 === (8))){
var inst_39662 = (state_39697[(10)]);
var inst_39675 = (state_39697[(9)]);
var inst_39673 = (state_39697[(7)]);
var inst_39674 = (state_39697[(8)]);
var inst_39681 = (function (){var cs = inst_39662;
var vec__39669 = inst_39673;
var v = inst_39674;
var c = inst_39675;
return (function (p1__39658_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__39658_SHARP_);
});
})();
var inst_39682 = cljs.core.filterv(inst_39681,inst_39662);
var inst_39662__$1 = inst_39682;
var state_39697__$1 = (function (){var statearr_39733 = state_39697;
(statearr_39733[(10)] = inst_39662__$1);

return statearr_39733;
})();
var statearr_39734_41827 = state_39697__$1;
(statearr_39734_41827[(2)] = null);

(statearr_39734_41827[(1)] = (2));


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
var cljs$core$async$state_machine__36899__auto__ = null;
var cljs$core$async$state_machine__36899__auto____0 = (function (){
var statearr_39735 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39735[(0)] = cljs$core$async$state_machine__36899__auto__);

(statearr_39735[(1)] = (1));

return statearr_39735;
});
var cljs$core$async$state_machine__36899__auto____1 = (function (state_39697){
while(true){
var ret_value__36900__auto__ = (function (){try{while(true){
var result__36901__auto__ = switch__36898__auto__(state_39697);
if(cljs.core.keyword_identical_QMARK_(result__36901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36901__auto__;
}
break;
}
}catch (e39736){var ex__36902__auto__ = e39736;
var statearr_39737_41828 = state_39697;
(statearr_39737_41828[(2)] = ex__36902__auto__);


if(cljs.core.seq((state_39697[(4)]))){
var statearr_39738_41829 = state_39697;
(statearr_39738_41829[(1)] = cljs.core.first((state_39697[(4)])));

} else {
throw ex__36902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41830 = state_39697;
state_39697 = G__41830;
continue;
} else {
return ret_value__36900__auto__;
}
break;
}
});
cljs$core$async$state_machine__36899__auto__ = function(state_39697){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36899__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36899__auto____1.call(this,state_39697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36899__auto____0;
cljs$core$async$state_machine__36899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36899__auto____1;
return cljs$core$async$state_machine__36899__auto__;
})()
})();
var state__37725__auto__ = (function (){var statearr_39739 = f__37724__auto__();
(statearr_39739[(6)] = c__37723__auto___41775);

return statearr_39739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37725__auto__);
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
var G__39743 = arguments.length;
switch (G__39743) {
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
var c__37723__auto___41866 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37724__auto__ = (function (){var switch__36898__auto__ = (function (state_39770){
var state_val_39771 = (state_39770[(1)]);
if((state_val_39771 === (7))){
var inst_39752 = (state_39770[(7)]);
var inst_39752__$1 = (state_39770[(2)]);
var inst_39753 = (inst_39752__$1 == null);
var inst_39754 = cljs.core.not(inst_39753);
var state_39770__$1 = (function (){var statearr_39778 = state_39770;
(statearr_39778[(7)] = inst_39752__$1);

return statearr_39778;
})();
if(inst_39754){
var statearr_39779_41869 = state_39770__$1;
(statearr_39779_41869[(1)] = (8));

} else {
var statearr_39780_41870 = state_39770__$1;
(statearr_39780_41870[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39771 === (1))){
var inst_39745 = (0);
var state_39770__$1 = (function (){var statearr_39781 = state_39770;
(statearr_39781[(8)] = inst_39745);

return statearr_39781;
})();
var statearr_39782_41873 = state_39770__$1;
(statearr_39782_41873[(2)] = null);

(statearr_39782_41873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39771 === (4))){
var state_39770__$1 = state_39770;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39770__$1,(7),ch);
} else {
if((state_val_39771 === (6))){
var inst_39765 = (state_39770[(2)]);
var state_39770__$1 = state_39770;
var statearr_39783_41880 = state_39770__$1;
(statearr_39783_41880[(2)] = inst_39765);

(statearr_39783_41880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39771 === (3))){
var inst_39767 = (state_39770[(2)]);
var inst_39768 = cljs.core.async.close_BANG_(out);
var state_39770__$1 = (function (){var statearr_39785 = state_39770;
(statearr_39785[(9)] = inst_39767);

return statearr_39785;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39770__$1,inst_39768);
} else {
if((state_val_39771 === (2))){
var inst_39745 = (state_39770[(8)]);
var inst_39747 = (inst_39745 < n);
var state_39770__$1 = state_39770;
if(cljs.core.truth_(inst_39747)){
var statearr_39787_41882 = state_39770__$1;
(statearr_39787_41882[(1)] = (4));

} else {
var statearr_39788_41883 = state_39770__$1;
(statearr_39788_41883[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39771 === (11))){
var inst_39745 = (state_39770[(8)]);
var inst_39757 = (state_39770[(2)]);
var inst_39758 = (inst_39745 + (1));
var inst_39745__$1 = inst_39758;
var state_39770__$1 = (function (){var statearr_39790 = state_39770;
(statearr_39790[(8)] = inst_39745__$1);

(statearr_39790[(10)] = inst_39757);

return statearr_39790;
})();
var statearr_39791_41884 = state_39770__$1;
(statearr_39791_41884[(2)] = null);

(statearr_39791_41884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39771 === (9))){
var state_39770__$1 = state_39770;
var statearr_39792_41885 = state_39770__$1;
(statearr_39792_41885[(2)] = null);

(statearr_39792_41885[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39771 === (5))){
var state_39770__$1 = state_39770;
var statearr_39797_41890 = state_39770__$1;
(statearr_39797_41890[(2)] = null);

(statearr_39797_41890[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39771 === (10))){
var inst_39762 = (state_39770[(2)]);
var state_39770__$1 = state_39770;
var statearr_39798_41895 = state_39770__$1;
(statearr_39798_41895[(2)] = inst_39762);

(statearr_39798_41895[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39771 === (8))){
var inst_39752 = (state_39770[(7)]);
var state_39770__$1 = state_39770;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39770__$1,(11),out,inst_39752);
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
var cljs$core$async$state_machine__36899__auto__ = null;
var cljs$core$async$state_machine__36899__auto____0 = (function (){
var statearr_39800 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39800[(0)] = cljs$core$async$state_machine__36899__auto__);

(statearr_39800[(1)] = (1));

return statearr_39800;
});
var cljs$core$async$state_machine__36899__auto____1 = (function (state_39770){
while(true){
var ret_value__36900__auto__ = (function (){try{while(true){
var result__36901__auto__ = switch__36898__auto__(state_39770);
if(cljs.core.keyword_identical_QMARK_(result__36901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36901__auto__;
}
break;
}
}catch (e39801){var ex__36902__auto__ = e39801;
var statearr_39802_41913 = state_39770;
(statearr_39802_41913[(2)] = ex__36902__auto__);


if(cljs.core.seq((state_39770[(4)]))){
var statearr_39803_41915 = state_39770;
(statearr_39803_41915[(1)] = cljs.core.first((state_39770[(4)])));

} else {
throw ex__36902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41916 = state_39770;
state_39770 = G__41916;
continue;
} else {
return ret_value__36900__auto__;
}
break;
}
});
cljs$core$async$state_machine__36899__auto__ = function(state_39770){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36899__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36899__auto____1.call(this,state_39770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36899__auto____0;
cljs$core$async$state_machine__36899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36899__auto____1;
return cljs$core$async$state_machine__36899__auto__;
})()
})();
var state__37725__auto__ = (function (){var statearr_39807 = f__37724__auto__();
(statearr_39807[(6)] = c__37723__auto___41866);

return statearr_39807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37725__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39809 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39809 = (function (f,ch,meta39810){
this.f = f;
this.ch = ch;
this.meta39810 = meta39810;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39811,meta39810__$1){
var self__ = this;
var _39811__$1 = this;
return (new cljs.core.async.t_cljs$core$async39809(self__.f,self__.ch,meta39810__$1));
}));

(cljs.core.async.t_cljs$core$async39809.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39811){
var self__ = this;
var _39811__$1 = this;
return self__.meta39810;
}));

(cljs.core.async.t_cljs$core$async39809.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39809.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39809.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39809.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39809.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39817 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39817 = (function (f,ch,meta39810,_,fn1,meta39818){
this.f = f;
this.ch = ch;
this.meta39810 = meta39810;
this._ = _;
this.fn1 = fn1;
this.meta39818 = meta39818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39819,meta39818__$1){
var self__ = this;
var _39819__$1 = this;
return (new cljs.core.async.t_cljs$core$async39817(self__.f,self__.ch,self__.meta39810,self__._,self__.fn1,meta39818__$1));
}));

(cljs.core.async.t_cljs$core$async39817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39819){
var self__ = this;
var _39819__$1 = this;
return self__.meta39818;
}));

(cljs.core.async.t_cljs$core$async39817.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39817.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async39817.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async39817.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__39808_SHARP_){
var G__39823 = (((p1__39808_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__39808_SHARP_) : self__.f.call(null,p1__39808_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__39823) : f1.call(null,G__39823));
});
}));

(cljs.core.async.t_cljs$core$async39817.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39810","meta39810",670936708,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async39809","cljs.core.async/t_cljs$core$async39809",-477217267,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta39818","meta39818",-580402925,null)], null);
}));

(cljs.core.async.t_cljs$core$async39817.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39817.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39817");

(cljs.core.async.t_cljs$core$async39817.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async39817");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39817.
 */
cljs.core.async.__GT_t_cljs$core$async39817 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39817(f__$1,ch__$1,meta39810__$1,___$2,fn1__$1,meta39818){
return (new cljs.core.async.t_cljs$core$async39817(f__$1,ch__$1,meta39810__$1,___$2,fn1__$1,meta39818));
});

}

return (new cljs.core.async.t_cljs$core$async39817(self__.f,self__.ch,self__.meta39810,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__39825 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__39825) : self__.f.call(null,G__39825));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async39809.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39809.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async39809.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39810","meta39810",670936708,null)], null);
}));

(cljs.core.async.t_cljs$core$async39809.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39809.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39809");

(cljs.core.async.t_cljs$core$async39809.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async39809");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39809.
 */
cljs.core.async.__GT_t_cljs$core$async39809 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39809(f__$1,ch__$1,meta39810){
return (new cljs.core.async.t_cljs$core$async39809(f__$1,ch__$1,meta39810));
});

}

return (new cljs.core.async.t_cljs$core$async39809(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39832 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39832 = (function (f,ch,meta39833){
this.f = f;
this.ch = ch;
this.meta39833 = meta39833;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39834,meta39833__$1){
var self__ = this;
var _39834__$1 = this;
return (new cljs.core.async.t_cljs$core$async39832(self__.f,self__.ch,meta39833__$1));
}));

(cljs.core.async.t_cljs$core$async39832.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39834){
var self__ = this;
var _39834__$1 = this;
return self__.meta39833;
}));

(cljs.core.async.t_cljs$core$async39832.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39832.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39832.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39832.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async39832.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39832.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async39832.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39833","meta39833",659512912,null)], null);
}));

(cljs.core.async.t_cljs$core$async39832.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39832.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39832");

(cljs.core.async.t_cljs$core$async39832.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async39832");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39832.
 */
cljs.core.async.__GT_t_cljs$core$async39832 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async39832(f__$1,ch__$1,meta39833){
return (new cljs.core.async.t_cljs$core$async39832(f__$1,ch__$1,meta39833));
});

}

return (new cljs.core.async.t_cljs$core$async39832(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39844 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39844 = (function (p,ch,meta39845){
this.p = p;
this.ch = ch;
this.meta39845 = meta39845;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39846,meta39845__$1){
var self__ = this;
var _39846__$1 = this;
return (new cljs.core.async.t_cljs$core$async39844(self__.p,self__.ch,meta39845__$1));
}));

(cljs.core.async.t_cljs$core$async39844.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39846){
var self__ = this;
var _39846__$1 = this;
return self__.meta39845;
}));

(cljs.core.async.t_cljs$core$async39844.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39844.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39844.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39844.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39844.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async39844.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39844.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async39844.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39845","meta39845",-1964016874,null)], null);
}));

(cljs.core.async.t_cljs$core$async39844.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39844.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39844");

(cljs.core.async.t_cljs$core$async39844.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async39844");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39844.
 */
cljs.core.async.__GT_t_cljs$core$async39844 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async39844(p__$1,ch__$1,meta39845){
return (new cljs.core.async.t_cljs$core$async39844(p__$1,ch__$1,meta39845));
});

}

return (new cljs.core.async.t_cljs$core$async39844(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__39858 = arguments.length;
switch (G__39858) {
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
var c__37723__auto___42018 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37724__auto__ = (function (){var switch__36898__auto__ = (function (state_39881){
var state_val_39882 = (state_39881[(1)]);
if((state_val_39882 === (7))){
var inst_39877 = (state_39881[(2)]);
var state_39881__$1 = state_39881;
var statearr_39889_42024 = state_39881__$1;
(statearr_39889_42024[(2)] = inst_39877);

(statearr_39889_42024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39882 === (1))){
var state_39881__$1 = state_39881;
var statearr_39890_42027 = state_39881__$1;
(statearr_39890_42027[(2)] = null);

(statearr_39890_42027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39882 === (4))){
var inst_39863 = (state_39881[(7)]);
var inst_39863__$1 = (state_39881[(2)]);
var inst_39864 = (inst_39863__$1 == null);
var state_39881__$1 = (function (){var statearr_39895 = state_39881;
(statearr_39895[(7)] = inst_39863__$1);

return statearr_39895;
})();
if(cljs.core.truth_(inst_39864)){
var statearr_39896_42029 = state_39881__$1;
(statearr_39896_42029[(1)] = (5));

} else {
var statearr_39897_42030 = state_39881__$1;
(statearr_39897_42030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39882 === (6))){
var inst_39863 = (state_39881[(7)]);
var inst_39868 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_39863) : p.call(null,inst_39863));
var state_39881__$1 = state_39881;
if(cljs.core.truth_(inst_39868)){
var statearr_39898_42033 = state_39881__$1;
(statearr_39898_42033[(1)] = (8));

} else {
var statearr_39899_42037 = state_39881__$1;
(statearr_39899_42037[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39882 === (3))){
var inst_39879 = (state_39881[(2)]);
var state_39881__$1 = state_39881;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39881__$1,inst_39879);
} else {
if((state_val_39882 === (2))){
var state_39881__$1 = state_39881;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39881__$1,(4),ch);
} else {
if((state_val_39882 === (11))){
var inst_39871 = (state_39881[(2)]);
var state_39881__$1 = state_39881;
var statearr_39900_42044 = state_39881__$1;
(statearr_39900_42044[(2)] = inst_39871);

(statearr_39900_42044[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39882 === (9))){
var state_39881__$1 = state_39881;
var statearr_39904_42048 = state_39881__$1;
(statearr_39904_42048[(2)] = null);

(statearr_39904_42048[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39882 === (5))){
var inst_39866 = cljs.core.async.close_BANG_(out);
var state_39881__$1 = state_39881;
var statearr_39909_42049 = state_39881__$1;
(statearr_39909_42049[(2)] = inst_39866);

(statearr_39909_42049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39882 === (10))){
var inst_39874 = (state_39881[(2)]);
var state_39881__$1 = (function (){var statearr_39910 = state_39881;
(statearr_39910[(8)] = inst_39874);

return statearr_39910;
})();
var statearr_39911_42050 = state_39881__$1;
(statearr_39911_42050[(2)] = null);

(statearr_39911_42050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39882 === (8))){
var inst_39863 = (state_39881[(7)]);
var state_39881__$1 = state_39881;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39881__$1,(11),out,inst_39863);
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
var cljs$core$async$state_machine__36899__auto__ = null;
var cljs$core$async$state_machine__36899__auto____0 = (function (){
var statearr_39915 = [null,null,null,null,null,null,null,null,null];
(statearr_39915[(0)] = cljs$core$async$state_machine__36899__auto__);

(statearr_39915[(1)] = (1));

return statearr_39915;
});
var cljs$core$async$state_machine__36899__auto____1 = (function (state_39881){
while(true){
var ret_value__36900__auto__ = (function (){try{while(true){
var result__36901__auto__ = switch__36898__auto__(state_39881);
if(cljs.core.keyword_identical_QMARK_(result__36901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36901__auto__;
}
break;
}
}catch (e39916){var ex__36902__auto__ = e39916;
var statearr_39917_42053 = state_39881;
(statearr_39917_42053[(2)] = ex__36902__auto__);


if(cljs.core.seq((state_39881[(4)]))){
var statearr_39918_42054 = state_39881;
(statearr_39918_42054[(1)] = cljs.core.first((state_39881[(4)])));

} else {
throw ex__36902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42055 = state_39881;
state_39881 = G__42055;
continue;
} else {
return ret_value__36900__auto__;
}
break;
}
});
cljs$core$async$state_machine__36899__auto__ = function(state_39881){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36899__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36899__auto____1.call(this,state_39881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36899__auto____0;
cljs$core$async$state_machine__36899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36899__auto____1;
return cljs$core$async$state_machine__36899__auto__;
})()
})();
var state__37725__auto__ = (function (){var statearr_39919 = f__37724__auto__();
(statearr_39919[(6)] = c__37723__auto___42018);

return statearr_39919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37725__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__39922 = arguments.length;
switch (G__39922) {
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
var c__37723__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37724__auto__ = (function (){var switch__36898__auto__ = (function (state_39999){
var state_val_40000 = (state_39999[(1)]);
if((state_val_40000 === (7))){
var inst_39995 = (state_39999[(2)]);
var state_39999__$1 = state_39999;
var statearr_40002_42065 = state_39999__$1;
(statearr_40002_42065[(2)] = inst_39995);

(statearr_40002_42065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40000 === (20))){
var inst_39965 = (state_39999[(7)]);
var inst_39976 = (state_39999[(2)]);
var inst_39977 = cljs.core.next(inst_39965);
var inst_39951 = inst_39977;
var inst_39952 = null;
var inst_39953 = (0);
var inst_39954 = (0);
var state_39999__$1 = (function (){var statearr_40004 = state_39999;
(statearr_40004[(8)] = inst_39951);

(statearr_40004[(9)] = inst_39976);

(statearr_40004[(10)] = inst_39953);

(statearr_40004[(11)] = inst_39954);

(statearr_40004[(12)] = inst_39952);

return statearr_40004;
})();
var statearr_40005_42078 = state_39999__$1;
(statearr_40005_42078[(2)] = null);

(statearr_40005_42078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40000 === (1))){
var state_39999__$1 = state_39999;
var statearr_40006_42083 = state_39999__$1;
(statearr_40006_42083[(2)] = null);

(statearr_40006_42083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40000 === (4))){
var inst_39940 = (state_39999[(13)]);
var inst_39940__$1 = (state_39999[(2)]);
var inst_39941 = (inst_39940__$1 == null);
var state_39999__$1 = (function (){var statearr_40007 = state_39999;
(statearr_40007[(13)] = inst_39940__$1);

return statearr_40007;
})();
if(cljs.core.truth_(inst_39941)){
var statearr_40008_42084 = state_39999__$1;
(statearr_40008_42084[(1)] = (5));

} else {
var statearr_40012_42085 = state_39999__$1;
(statearr_40012_42085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40000 === (15))){
var state_39999__$1 = state_39999;
var statearr_40022_42088 = state_39999__$1;
(statearr_40022_42088[(2)] = null);

(statearr_40022_42088[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40000 === (21))){
var state_39999__$1 = state_39999;
var statearr_40027_42090 = state_39999__$1;
(statearr_40027_42090[(2)] = null);

(statearr_40027_42090[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40000 === (13))){
var inst_39951 = (state_39999[(8)]);
var inst_39953 = (state_39999[(10)]);
var inst_39954 = (state_39999[(11)]);
var inst_39952 = (state_39999[(12)]);
var inst_39961 = (state_39999[(2)]);
var inst_39962 = (inst_39954 + (1));
var tmp40019 = inst_39951;
var tmp40020 = inst_39953;
var tmp40021 = inst_39952;
var inst_39951__$1 = tmp40019;
var inst_39952__$1 = tmp40021;
var inst_39953__$1 = tmp40020;
var inst_39954__$1 = inst_39962;
var state_39999__$1 = (function (){var statearr_40028 = state_39999;
(statearr_40028[(8)] = inst_39951__$1);

(statearr_40028[(10)] = inst_39953__$1);

(statearr_40028[(14)] = inst_39961);

(statearr_40028[(11)] = inst_39954__$1);

(statearr_40028[(12)] = inst_39952__$1);

return statearr_40028;
})();
var statearr_40029_42096 = state_39999__$1;
(statearr_40029_42096[(2)] = null);

(statearr_40029_42096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40000 === (22))){
var state_39999__$1 = state_39999;
var statearr_40030_42097 = state_39999__$1;
(statearr_40030_42097[(2)] = null);

(statearr_40030_42097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40000 === (6))){
var inst_39940 = (state_39999[(13)]);
var inst_39949 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_39940) : f.call(null,inst_39940));
var inst_39950 = cljs.core.seq(inst_39949);
var inst_39951 = inst_39950;
var inst_39952 = null;
var inst_39953 = (0);
var inst_39954 = (0);
var state_39999__$1 = (function (){var statearr_40031 = state_39999;
(statearr_40031[(8)] = inst_39951);

(statearr_40031[(10)] = inst_39953);

(statearr_40031[(11)] = inst_39954);

(statearr_40031[(12)] = inst_39952);

return statearr_40031;
})();
var statearr_40032_42102 = state_39999__$1;
(statearr_40032_42102[(2)] = null);

(statearr_40032_42102[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40000 === (17))){
var inst_39965 = (state_39999[(7)]);
var inst_39969 = cljs.core.chunk_first(inst_39965);
var inst_39970 = cljs.core.chunk_rest(inst_39965);
var inst_39971 = cljs.core.count(inst_39969);
var inst_39951 = inst_39970;
var inst_39952 = inst_39969;
var inst_39953 = inst_39971;
var inst_39954 = (0);
var state_39999__$1 = (function (){var statearr_40033 = state_39999;
(statearr_40033[(8)] = inst_39951);

(statearr_40033[(10)] = inst_39953);

(statearr_40033[(11)] = inst_39954);

(statearr_40033[(12)] = inst_39952);

return statearr_40033;
})();
var statearr_40034_42104 = state_39999__$1;
(statearr_40034_42104[(2)] = null);

(statearr_40034_42104[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40000 === (3))){
var inst_39997 = (state_39999[(2)]);
var state_39999__$1 = state_39999;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39999__$1,inst_39997);
} else {
if((state_val_40000 === (12))){
var inst_39985 = (state_39999[(2)]);
var state_39999__$1 = state_39999;
var statearr_40035_42112 = state_39999__$1;
(statearr_40035_42112[(2)] = inst_39985);

(statearr_40035_42112[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40000 === (2))){
var state_39999__$1 = state_39999;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39999__$1,(4),in$);
} else {
if((state_val_40000 === (23))){
var inst_39993 = (state_39999[(2)]);
var state_39999__$1 = state_39999;
var statearr_40036_42118 = state_39999__$1;
(statearr_40036_42118[(2)] = inst_39993);

(statearr_40036_42118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40000 === (19))){
var inst_39980 = (state_39999[(2)]);
var state_39999__$1 = state_39999;
var statearr_40041_42123 = state_39999__$1;
(statearr_40041_42123[(2)] = inst_39980);

(statearr_40041_42123[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40000 === (11))){
var inst_39951 = (state_39999[(8)]);
var inst_39965 = (state_39999[(7)]);
var inst_39965__$1 = cljs.core.seq(inst_39951);
var state_39999__$1 = (function (){var statearr_40043 = state_39999;
(statearr_40043[(7)] = inst_39965__$1);

return statearr_40043;
})();
if(inst_39965__$1){
var statearr_40048_42126 = state_39999__$1;
(statearr_40048_42126[(1)] = (14));

} else {
var statearr_40049_42127 = state_39999__$1;
(statearr_40049_42127[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40000 === (9))){
var inst_39987 = (state_39999[(2)]);
var inst_39988 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_39999__$1 = (function (){var statearr_40051 = state_39999;
(statearr_40051[(15)] = inst_39987);

return statearr_40051;
})();
if(cljs.core.truth_(inst_39988)){
var statearr_40052_42132 = state_39999__$1;
(statearr_40052_42132[(1)] = (21));

} else {
var statearr_40053_42134 = state_39999__$1;
(statearr_40053_42134[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40000 === (5))){
var inst_39943 = cljs.core.async.close_BANG_(out);
var state_39999__$1 = state_39999;
var statearr_40054_42135 = state_39999__$1;
(statearr_40054_42135[(2)] = inst_39943);

(statearr_40054_42135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40000 === (14))){
var inst_39965 = (state_39999[(7)]);
var inst_39967 = cljs.core.chunked_seq_QMARK_(inst_39965);
var state_39999__$1 = state_39999;
if(inst_39967){
var statearr_40057_42145 = state_39999__$1;
(statearr_40057_42145[(1)] = (17));

} else {
var statearr_40058_42150 = state_39999__$1;
(statearr_40058_42150[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40000 === (16))){
var inst_39983 = (state_39999[(2)]);
var state_39999__$1 = state_39999;
var statearr_40064_42156 = state_39999__$1;
(statearr_40064_42156[(2)] = inst_39983);

(statearr_40064_42156[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40000 === (10))){
var inst_39954 = (state_39999[(11)]);
var inst_39952 = (state_39999[(12)]);
var inst_39959 = cljs.core._nth(inst_39952,inst_39954);
var state_39999__$1 = state_39999;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39999__$1,(13),out,inst_39959);
} else {
if((state_val_40000 === (18))){
var inst_39965 = (state_39999[(7)]);
var inst_39974 = cljs.core.first(inst_39965);
var state_39999__$1 = state_39999;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39999__$1,(20),out,inst_39974);
} else {
if((state_val_40000 === (8))){
var inst_39953 = (state_39999[(10)]);
var inst_39954 = (state_39999[(11)]);
var inst_39956 = (inst_39954 < inst_39953);
var inst_39957 = inst_39956;
var state_39999__$1 = state_39999;
if(cljs.core.truth_(inst_39957)){
var statearr_40067_42157 = state_39999__$1;
(statearr_40067_42157[(1)] = (10));

} else {
var statearr_40068_42158 = state_39999__$1;
(statearr_40068_42158[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__36899__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__36899__auto____0 = (function (){
var statearr_40069 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40069[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__36899__auto__);

(statearr_40069[(1)] = (1));

return statearr_40069;
});
var cljs$core$async$mapcat_STAR__$_state_machine__36899__auto____1 = (function (state_39999){
while(true){
var ret_value__36900__auto__ = (function (){try{while(true){
var result__36901__auto__ = switch__36898__auto__(state_39999);
if(cljs.core.keyword_identical_QMARK_(result__36901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36901__auto__;
}
break;
}
}catch (e40070){var ex__36902__auto__ = e40070;
var statearr_40071_42159 = state_39999;
(statearr_40071_42159[(2)] = ex__36902__auto__);


if(cljs.core.seq((state_39999[(4)]))){
var statearr_40072_42160 = state_39999;
(statearr_40072_42160[(1)] = cljs.core.first((state_39999[(4)])));

} else {
throw ex__36902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42161 = state_39999;
state_39999 = G__42161;
continue;
} else {
return ret_value__36900__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__36899__auto__ = function(state_39999){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__36899__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__36899__auto____1.call(this,state_39999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__36899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__36899__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__36899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__36899__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__36899__auto__;
})()
})();
var state__37725__auto__ = (function (){var statearr_40080 = f__37724__auto__();
(statearr_40080[(6)] = c__37723__auto__);

return statearr_40080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37725__auto__);
}));

return c__37723__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__40086 = arguments.length;
switch (G__40086) {
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
var G__40093 = arguments.length;
switch (G__40093) {
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
var G__40099 = arguments.length;
switch (G__40099) {
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
var c__37723__auto___42201 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37724__auto__ = (function (){var switch__36898__auto__ = (function (state_40128){
var state_val_40129 = (state_40128[(1)]);
if((state_val_40129 === (7))){
var inst_40123 = (state_40128[(2)]);
var state_40128__$1 = state_40128;
var statearr_40130_42203 = state_40128__$1;
(statearr_40130_42203[(2)] = inst_40123);

(statearr_40130_42203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40129 === (1))){
var inst_40103 = null;
var state_40128__$1 = (function (){var statearr_40135 = state_40128;
(statearr_40135[(7)] = inst_40103);

return statearr_40135;
})();
var statearr_40136_42208 = state_40128__$1;
(statearr_40136_42208[(2)] = null);

(statearr_40136_42208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40129 === (4))){
var inst_40106 = (state_40128[(8)]);
var inst_40106__$1 = (state_40128[(2)]);
var inst_40107 = (inst_40106__$1 == null);
var inst_40108 = cljs.core.not(inst_40107);
var state_40128__$1 = (function (){var statearr_40138 = state_40128;
(statearr_40138[(8)] = inst_40106__$1);

return statearr_40138;
})();
if(inst_40108){
var statearr_40139_42212 = state_40128__$1;
(statearr_40139_42212[(1)] = (5));

} else {
var statearr_40140_42213 = state_40128__$1;
(statearr_40140_42213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40129 === (6))){
var state_40128__$1 = state_40128;
var statearr_40141_42215 = state_40128__$1;
(statearr_40141_42215[(2)] = null);

(statearr_40141_42215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40129 === (3))){
var inst_40125 = (state_40128[(2)]);
var inst_40126 = cljs.core.async.close_BANG_(out);
var state_40128__$1 = (function (){var statearr_40142 = state_40128;
(statearr_40142[(9)] = inst_40125);

return statearr_40142;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40128__$1,inst_40126);
} else {
if((state_val_40129 === (2))){
var state_40128__$1 = state_40128;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40128__$1,(4),ch);
} else {
if((state_val_40129 === (11))){
var inst_40106 = (state_40128[(8)]);
var inst_40117 = (state_40128[(2)]);
var inst_40103 = inst_40106;
var state_40128__$1 = (function (){var statearr_40147 = state_40128;
(statearr_40147[(10)] = inst_40117);

(statearr_40147[(7)] = inst_40103);

return statearr_40147;
})();
var statearr_40148_42219 = state_40128__$1;
(statearr_40148_42219[(2)] = null);

(statearr_40148_42219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40129 === (9))){
var inst_40106 = (state_40128[(8)]);
var state_40128__$1 = state_40128;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40128__$1,(11),out,inst_40106);
} else {
if((state_val_40129 === (5))){
var inst_40106 = (state_40128[(8)]);
var inst_40103 = (state_40128[(7)]);
var inst_40110 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_40106,inst_40103);
var state_40128__$1 = state_40128;
if(inst_40110){
var statearr_40150_42222 = state_40128__$1;
(statearr_40150_42222[(1)] = (8));

} else {
var statearr_40151_42223 = state_40128__$1;
(statearr_40151_42223[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40129 === (10))){
var inst_40120 = (state_40128[(2)]);
var state_40128__$1 = state_40128;
var statearr_40152_42226 = state_40128__$1;
(statearr_40152_42226[(2)] = inst_40120);

(statearr_40152_42226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40129 === (8))){
var inst_40103 = (state_40128[(7)]);
var tmp40149 = inst_40103;
var inst_40103__$1 = tmp40149;
var state_40128__$1 = (function (){var statearr_40153 = state_40128;
(statearr_40153[(7)] = inst_40103__$1);

return statearr_40153;
})();
var statearr_40154_42240 = state_40128__$1;
(statearr_40154_42240[(2)] = null);

(statearr_40154_42240[(1)] = (2));


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
var cljs$core$async$state_machine__36899__auto__ = null;
var cljs$core$async$state_machine__36899__auto____0 = (function (){
var statearr_40156 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40156[(0)] = cljs$core$async$state_machine__36899__auto__);

(statearr_40156[(1)] = (1));

return statearr_40156;
});
var cljs$core$async$state_machine__36899__auto____1 = (function (state_40128){
while(true){
var ret_value__36900__auto__ = (function (){try{while(true){
var result__36901__auto__ = switch__36898__auto__(state_40128);
if(cljs.core.keyword_identical_QMARK_(result__36901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36901__auto__;
}
break;
}
}catch (e40160){var ex__36902__auto__ = e40160;
var statearr_40161_42260 = state_40128;
(statearr_40161_42260[(2)] = ex__36902__auto__);


if(cljs.core.seq((state_40128[(4)]))){
var statearr_40162_42263 = state_40128;
(statearr_40162_42263[(1)] = cljs.core.first((state_40128[(4)])));

} else {
throw ex__36902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42272 = state_40128;
state_40128 = G__42272;
continue;
} else {
return ret_value__36900__auto__;
}
break;
}
});
cljs$core$async$state_machine__36899__auto__ = function(state_40128){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36899__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36899__auto____1.call(this,state_40128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36899__auto____0;
cljs$core$async$state_machine__36899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36899__auto____1;
return cljs$core$async$state_machine__36899__auto__;
})()
})();
var state__37725__auto__ = (function (){var statearr_40163 = f__37724__auto__();
(statearr_40163[(6)] = c__37723__auto___42201);

return statearr_40163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37725__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__40166 = arguments.length;
switch (G__40166) {
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
var c__37723__auto___42304 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37724__auto__ = (function (){var switch__36898__auto__ = (function (state_40209){
var state_val_40210 = (state_40209[(1)]);
if((state_val_40210 === (7))){
var inst_40204 = (state_40209[(2)]);
var state_40209__$1 = state_40209;
var statearr_40211_42312 = state_40209__$1;
(statearr_40211_42312[(2)] = inst_40204);

(statearr_40211_42312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40210 === (1))){
var inst_40169 = (new Array(n));
var inst_40170 = inst_40169;
var inst_40171 = (0);
var state_40209__$1 = (function (){var statearr_40212 = state_40209;
(statearr_40212[(7)] = inst_40171);

(statearr_40212[(8)] = inst_40170);

return statearr_40212;
})();
var statearr_40213_42329 = state_40209__$1;
(statearr_40213_42329[(2)] = null);

(statearr_40213_42329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40210 === (4))){
var inst_40175 = (state_40209[(9)]);
var inst_40175__$1 = (state_40209[(2)]);
var inst_40176 = (inst_40175__$1 == null);
var inst_40177 = cljs.core.not(inst_40176);
var state_40209__$1 = (function (){var statearr_40215 = state_40209;
(statearr_40215[(9)] = inst_40175__$1);

return statearr_40215;
})();
if(inst_40177){
var statearr_40217_42338 = state_40209__$1;
(statearr_40217_42338[(1)] = (5));

} else {
var statearr_40218_42340 = state_40209__$1;
(statearr_40218_42340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40210 === (15))){
var inst_40198 = (state_40209[(2)]);
var state_40209__$1 = state_40209;
var statearr_40222_42346 = state_40209__$1;
(statearr_40222_42346[(2)] = inst_40198);

(statearr_40222_42346[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40210 === (13))){
var state_40209__$1 = state_40209;
var statearr_40224_42350 = state_40209__$1;
(statearr_40224_42350[(2)] = null);

(statearr_40224_42350[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40210 === (6))){
var inst_40171 = (state_40209[(7)]);
var inst_40194 = (inst_40171 > (0));
var state_40209__$1 = state_40209;
if(cljs.core.truth_(inst_40194)){
var statearr_40226_42352 = state_40209__$1;
(statearr_40226_42352[(1)] = (12));

} else {
var statearr_40228_42354 = state_40209__$1;
(statearr_40228_42354[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40210 === (3))){
var inst_40206 = (state_40209[(2)]);
var state_40209__$1 = state_40209;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40209__$1,inst_40206);
} else {
if((state_val_40210 === (12))){
var inst_40170 = (state_40209[(8)]);
var inst_40196 = cljs.core.vec(inst_40170);
var state_40209__$1 = state_40209;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40209__$1,(15),out,inst_40196);
} else {
if((state_val_40210 === (2))){
var state_40209__$1 = state_40209;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40209__$1,(4),ch);
} else {
if((state_val_40210 === (11))){
var inst_40188 = (state_40209[(2)]);
var inst_40189 = (new Array(n));
var inst_40170 = inst_40189;
var inst_40171 = (0);
var state_40209__$1 = (function (){var statearr_40230 = state_40209;
(statearr_40230[(7)] = inst_40171);

(statearr_40230[(10)] = inst_40188);

(statearr_40230[(8)] = inst_40170);

return statearr_40230;
})();
var statearr_40231_42365 = state_40209__$1;
(statearr_40231_42365[(2)] = null);

(statearr_40231_42365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40210 === (9))){
var inst_40170 = (state_40209[(8)]);
var inst_40186 = cljs.core.vec(inst_40170);
var state_40209__$1 = state_40209;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40209__$1,(11),out,inst_40186);
} else {
if((state_val_40210 === (5))){
var inst_40171 = (state_40209[(7)]);
var inst_40181 = (state_40209[(11)]);
var inst_40175 = (state_40209[(9)]);
var inst_40170 = (state_40209[(8)]);
var inst_40180 = (inst_40170[inst_40171] = inst_40175);
var inst_40181__$1 = (inst_40171 + (1));
var inst_40182 = (inst_40181__$1 < n);
var state_40209__$1 = (function (){var statearr_40233 = state_40209;
(statearr_40233[(11)] = inst_40181__$1);

(statearr_40233[(12)] = inst_40180);

return statearr_40233;
})();
if(cljs.core.truth_(inst_40182)){
var statearr_40234_42380 = state_40209__$1;
(statearr_40234_42380[(1)] = (8));

} else {
var statearr_40235_42382 = state_40209__$1;
(statearr_40235_42382[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40210 === (14))){
var inst_40201 = (state_40209[(2)]);
var inst_40202 = cljs.core.async.close_BANG_(out);
var state_40209__$1 = (function (){var statearr_40241 = state_40209;
(statearr_40241[(13)] = inst_40201);

return statearr_40241;
})();
var statearr_40242_42385 = state_40209__$1;
(statearr_40242_42385[(2)] = inst_40202);

(statearr_40242_42385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40210 === (10))){
var inst_40192 = (state_40209[(2)]);
var state_40209__$1 = state_40209;
var statearr_40243_42388 = state_40209__$1;
(statearr_40243_42388[(2)] = inst_40192);

(statearr_40243_42388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40210 === (8))){
var inst_40181 = (state_40209[(11)]);
var inst_40170 = (state_40209[(8)]);
var tmp40240 = inst_40170;
var inst_40170__$1 = tmp40240;
var inst_40171 = inst_40181;
var state_40209__$1 = (function (){var statearr_40244 = state_40209;
(statearr_40244[(7)] = inst_40171);

(statearr_40244[(8)] = inst_40170__$1);

return statearr_40244;
})();
var statearr_40245_42391 = state_40209__$1;
(statearr_40245_42391[(2)] = null);

(statearr_40245_42391[(1)] = (2));


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
var cljs$core$async$state_machine__36899__auto__ = null;
var cljs$core$async$state_machine__36899__auto____0 = (function (){
var statearr_40252 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40252[(0)] = cljs$core$async$state_machine__36899__auto__);

(statearr_40252[(1)] = (1));

return statearr_40252;
});
var cljs$core$async$state_machine__36899__auto____1 = (function (state_40209){
while(true){
var ret_value__36900__auto__ = (function (){try{while(true){
var result__36901__auto__ = switch__36898__auto__(state_40209);
if(cljs.core.keyword_identical_QMARK_(result__36901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36901__auto__;
}
break;
}
}catch (e40253){var ex__36902__auto__ = e40253;
var statearr_40258_42405 = state_40209;
(statearr_40258_42405[(2)] = ex__36902__auto__);


if(cljs.core.seq((state_40209[(4)]))){
var statearr_40259_42409 = state_40209;
(statearr_40259_42409[(1)] = cljs.core.first((state_40209[(4)])));

} else {
throw ex__36902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42411 = state_40209;
state_40209 = G__42411;
continue;
} else {
return ret_value__36900__auto__;
}
break;
}
});
cljs$core$async$state_machine__36899__auto__ = function(state_40209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36899__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36899__auto____1.call(this,state_40209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36899__auto____0;
cljs$core$async$state_machine__36899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36899__auto____1;
return cljs$core$async$state_machine__36899__auto__;
})()
})();
var state__37725__auto__ = (function (){var statearr_40260 = f__37724__auto__();
(statearr_40260[(6)] = c__37723__auto___42304);

return statearr_40260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37725__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__40268 = arguments.length;
switch (G__40268) {
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
var c__37723__auto___42434 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37724__auto__ = (function (){var switch__36898__auto__ = (function (state_40315){
var state_val_40316 = (state_40315[(1)]);
if((state_val_40316 === (7))){
var inst_40311 = (state_40315[(2)]);
var state_40315__$1 = state_40315;
var statearr_40317_42441 = state_40315__$1;
(statearr_40317_42441[(2)] = inst_40311);

(statearr_40317_42441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40316 === (1))){
var inst_40274 = [];
var inst_40275 = inst_40274;
var inst_40276 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_40315__$1 = (function (){var statearr_40318 = state_40315;
(statearr_40318[(7)] = inst_40275);

(statearr_40318[(8)] = inst_40276);

return statearr_40318;
})();
var statearr_40319_42446 = state_40315__$1;
(statearr_40319_42446[(2)] = null);

(statearr_40319_42446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40316 === (4))){
var inst_40279 = (state_40315[(9)]);
var inst_40279__$1 = (state_40315[(2)]);
var inst_40280 = (inst_40279__$1 == null);
var inst_40281 = cljs.core.not(inst_40280);
var state_40315__$1 = (function (){var statearr_40320 = state_40315;
(statearr_40320[(9)] = inst_40279__$1);

return statearr_40320;
})();
if(inst_40281){
var statearr_40321_42459 = state_40315__$1;
(statearr_40321_42459[(1)] = (5));

} else {
var statearr_40322_42465 = state_40315__$1;
(statearr_40322_42465[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40316 === (15))){
var inst_40305 = (state_40315[(2)]);
var state_40315__$1 = state_40315;
var statearr_40324_42471 = state_40315__$1;
(statearr_40324_42471[(2)] = inst_40305);

(statearr_40324_42471[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40316 === (13))){
var state_40315__$1 = state_40315;
var statearr_40325_42479 = state_40315__$1;
(statearr_40325_42479[(2)] = null);

(statearr_40325_42479[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40316 === (6))){
var inst_40275 = (state_40315[(7)]);
var inst_40300 = inst_40275.length;
var inst_40301 = (inst_40300 > (0));
var state_40315__$1 = state_40315;
if(cljs.core.truth_(inst_40301)){
var statearr_40326_42481 = state_40315__$1;
(statearr_40326_42481[(1)] = (12));

} else {
var statearr_40327_42482 = state_40315__$1;
(statearr_40327_42482[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40316 === (3))){
var inst_40313 = (state_40315[(2)]);
var state_40315__$1 = state_40315;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40315__$1,inst_40313);
} else {
if((state_val_40316 === (12))){
var inst_40275 = (state_40315[(7)]);
var inst_40303 = cljs.core.vec(inst_40275);
var state_40315__$1 = state_40315;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40315__$1,(15),out,inst_40303);
} else {
if((state_val_40316 === (2))){
var state_40315__$1 = state_40315;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40315__$1,(4),ch);
} else {
if((state_val_40316 === (11))){
var inst_40283 = (state_40315[(10)]);
var inst_40279 = (state_40315[(9)]);
var inst_40293 = (state_40315[(2)]);
var inst_40294 = [];
var inst_40295 = inst_40294.push(inst_40279);
var inst_40275 = inst_40294;
var inst_40276 = inst_40283;
var state_40315__$1 = (function (){var statearr_40329 = state_40315;
(statearr_40329[(11)] = inst_40295);

(statearr_40329[(7)] = inst_40275);

(statearr_40329[(8)] = inst_40276);

(statearr_40329[(12)] = inst_40293);

return statearr_40329;
})();
var statearr_40330_42491 = state_40315__$1;
(statearr_40330_42491[(2)] = null);

(statearr_40330_42491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40316 === (9))){
var inst_40275 = (state_40315[(7)]);
var inst_40291 = cljs.core.vec(inst_40275);
var state_40315__$1 = state_40315;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40315__$1,(11),out,inst_40291);
} else {
if((state_val_40316 === (5))){
var inst_40283 = (state_40315[(10)]);
var inst_40279 = (state_40315[(9)]);
var inst_40276 = (state_40315[(8)]);
var inst_40283__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_40279) : f.call(null,inst_40279));
var inst_40284 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_40283__$1,inst_40276);
var inst_40285 = cljs.core.keyword_identical_QMARK_(inst_40276,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_40286 = ((inst_40284) || (inst_40285));
var state_40315__$1 = (function (){var statearr_40331 = state_40315;
(statearr_40331[(10)] = inst_40283__$1);

return statearr_40331;
})();
if(cljs.core.truth_(inst_40286)){
var statearr_40332_42493 = state_40315__$1;
(statearr_40332_42493[(1)] = (8));

} else {
var statearr_40333_42494 = state_40315__$1;
(statearr_40333_42494[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40316 === (14))){
var inst_40308 = (state_40315[(2)]);
var inst_40309 = cljs.core.async.close_BANG_(out);
var state_40315__$1 = (function (){var statearr_40335 = state_40315;
(statearr_40335[(13)] = inst_40308);

return statearr_40335;
})();
var statearr_40336_42501 = state_40315__$1;
(statearr_40336_42501[(2)] = inst_40309);

(statearr_40336_42501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40316 === (10))){
var inst_40298 = (state_40315[(2)]);
var state_40315__$1 = state_40315;
var statearr_40337_42506 = state_40315__$1;
(statearr_40337_42506[(2)] = inst_40298);

(statearr_40337_42506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40316 === (8))){
var inst_40283 = (state_40315[(10)]);
var inst_40275 = (state_40315[(7)]);
var inst_40279 = (state_40315[(9)]);
var inst_40288 = inst_40275.push(inst_40279);
var tmp40334 = inst_40275;
var inst_40275__$1 = tmp40334;
var inst_40276 = inst_40283;
var state_40315__$1 = (function (){var statearr_40338 = state_40315;
(statearr_40338[(14)] = inst_40288);

(statearr_40338[(7)] = inst_40275__$1);

(statearr_40338[(8)] = inst_40276);

return statearr_40338;
})();
var statearr_40339_42512 = state_40315__$1;
(statearr_40339_42512[(2)] = null);

(statearr_40339_42512[(1)] = (2));


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
var cljs$core$async$state_machine__36899__auto__ = null;
var cljs$core$async$state_machine__36899__auto____0 = (function (){
var statearr_40340 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40340[(0)] = cljs$core$async$state_machine__36899__auto__);

(statearr_40340[(1)] = (1));

return statearr_40340;
});
var cljs$core$async$state_machine__36899__auto____1 = (function (state_40315){
while(true){
var ret_value__36900__auto__ = (function (){try{while(true){
var result__36901__auto__ = switch__36898__auto__(state_40315);
if(cljs.core.keyword_identical_QMARK_(result__36901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36901__auto__;
}
break;
}
}catch (e40341){var ex__36902__auto__ = e40341;
var statearr_40342_42521 = state_40315;
(statearr_40342_42521[(2)] = ex__36902__auto__);


if(cljs.core.seq((state_40315[(4)]))){
var statearr_40343_42522 = state_40315;
(statearr_40343_42522[(1)] = cljs.core.first((state_40315[(4)])));

} else {
throw ex__36902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42523 = state_40315;
state_40315 = G__42523;
continue;
} else {
return ret_value__36900__auto__;
}
break;
}
});
cljs$core$async$state_machine__36899__auto__ = function(state_40315){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36899__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36899__auto____1.call(this,state_40315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36899__auto____0;
cljs$core$async$state_machine__36899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36899__auto____1;
return cljs$core$async$state_machine__36899__auto__;
})()
})();
var state__37725__auto__ = (function (){var statearr_40344 = f__37724__auto__();
(statearr_40344[(6)] = c__37723__auto___42434);

return statearr_40344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37725__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
