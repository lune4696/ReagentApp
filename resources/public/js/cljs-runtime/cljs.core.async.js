goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__37858 = arguments.length;
switch (G__37858) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37861 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37861 = (function (f,blockable,meta37862){
this.f = f;
this.blockable = blockable;
this.meta37862 = meta37862;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37863,meta37862__$1){
var self__ = this;
var _37863__$1 = this;
return (new cljs.core.async.t_cljs$core$async37861(self__.f,self__.blockable,meta37862__$1));
}));

(cljs.core.async.t_cljs$core$async37861.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37863){
var self__ = this;
var _37863__$1 = this;
return self__.meta37862;
}));

(cljs.core.async.t_cljs$core$async37861.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37861.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37861.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async37861.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async37861.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37862","meta37862",-1230477328,null)], null);
}));

(cljs.core.async.t_cljs$core$async37861.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37861.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37861");

(cljs.core.async.t_cljs$core$async37861.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async37861");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37861.
 */
cljs.core.async.__GT_t_cljs$core$async37861 = (function cljs$core$async$__GT_t_cljs$core$async37861(f__$1,blockable__$1,meta37862){
return (new cljs.core.async.t_cljs$core$async37861(f__$1,blockable__$1,meta37862));
});

}

return (new cljs.core.async.t_cljs$core$async37861(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__37902 = arguments.length;
switch (G__37902) {
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
var G__37926 = arguments.length;
switch (G__37926) {
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
var G__37957 = arguments.length;
switch (G__37957) {
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
var val_41328 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_41328) : fn1.call(null,val_41328));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_41328) : fn1.call(null,val_41328));
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
var G__37986 = arguments.length;
switch (G__37986) {
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
var n__4613__auto___41337 = n;
var x_41338 = (0);
while(true){
if((x_41338 < n__4613__auto___41337)){
(a[x_41338] = x_41338);

var G__41339 = (x_41338 + (1));
x_41338 = G__41339;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38019 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38019 = (function (flag,meta38020){
this.flag = flag;
this.meta38020 = meta38020;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38021,meta38020__$1){
var self__ = this;
var _38021__$1 = this;
return (new cljs.core.async.t_cljs$core$async38019(self__.flag,meta38020__$1));
}));

(cljs.core.async.t_cljs$core$async38019.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38021){
var self__ = this;
var _38021__$1 = this;
return self__.meta38020;
}));

(cljs.core.async.t_cljs$core$async38019.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38019.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async38019.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38019.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async38019.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta38020","meta38020",-769362983,null)], null);
}));

(cljs.core.async.t_cljs$core$async38019.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38019.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38019");

(cljs.core.async.t_cljs$core$async38019.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async38019");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38019.
 */
cljs.core.async.__GT_t_cljs$core$async38019 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async38019(flag__$1,meta38020){
return (new cljs.core.async.t_cljs$core$async38019(flag__$1,meta38020));
});

}

return (new cljs.core.async.t_cljs$core$async38019(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38044 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38044 = (function (flag,cb,meta38045){
this.flag = flag;
this.cb = cb;
this.meta38045 = meta38045;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38046,meta38045__$1){
var self__ = this;
var _38046__$1 = this;
return (new cljs.core.async.t_cljs$core$async38044(self__.flag,self__.cb,meta38045__$1));
}));

(cljs.core.async.t_cljs$core$async38044.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38046){
var self__ = this;
var _38046__$1 = this;
return self__.meta38045;
}));

(cljs.core.async.t_cljs$core$async38044.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38044.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async38044.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38044.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async38044.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta38045","meta38045",738127203,null)], null);
}));

(cljs.core.async.t_cljs$core$async38044.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38044.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38044");

(cljs.core.async.t_cljs$core$async38044.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async38044");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38044.
 */
cljs.core.async.__GT_t_cljs$core$async38044 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async38044(flag__$1,cb__$1,meta38045){
return (new cljs.core.async.t_cljs$core$async38044(flag__$1,cb__$1,meta38045));
});

}

return (new cljs.core.async.t_cljs$core$async38044(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__38067_SHARP_){
var G__38080 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38067_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__38080) : fret.call(null,G__38080));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38068_SHARP_){
var G__38083 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38068_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__38083) : fret.call(null,G__38083));
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
var G__41351 = (i + (1));
i = G__41351;
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
var len__4736__auto___41353 = arguments.length;
var i__4737__auto___41357 = (0);
while(true){
if((i__4737__auto___41357 < len__4736__auto___41353)){
args__4742__auto__.push((arguments[i__4737__auto___41357]));

var G__41358 = (i__4737__auto___41357 + (1));
i__4737__auto___41357 = G__41358;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__38096){
var map__38097 = p__38096;
var map__38097__$1 = (((((!((map__38097 == null))))?(((((map__38097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38097):map__38097);
var opts = map__38097__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq38093){
var G__38094 = cljs.core.first(seq38093);
var seq38093__$1 = cljs.core.next(seq38093);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38094,seq38093__$1);
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
var G__38112 = arguments.length;
switch (G__38112) {
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
var c__37751__auto___41377 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37752__auto__ = (function (){var switch__36983__auto__ = (function (state_38179){
var state_val_38182 = (state_38179[(1)]);
if((state_val_38182 === (7))){
var inst_38168 = (state_38179[(2)]);
var state_38179__$1 = state_38179;
var statearr_38216_41378 = state_38179__$1;
(statearr_38216_41378[(2)] = inst_38168);

(statearr_38216_41378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38182 === (1))){
var state_38179__$1 = state_38179;
var statearr_38217_41379 = state_38179__$1;
(statearr_38217_41379[(2)] = null);

(statearr_38217_41379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38182 === (4))){
var inst_38140 = (state_38179[(7)]);
var inst_38140__$1 = (state_38179[(2)]);
var inst_38149 = (inst_38140__$1 == null);
var state_38179__$1 = (function (){var statearr_38218 = state_38179;
(statearr_38218[(7)] = inst_38140__$1);

return statearr_38218;
})();
if(cljs.core.truth_(inst_38149)){
var statearr_38219_41380 = state_38179__$1;
(statearr_38219_41380[(1)] = (5));

} else {
var statearr_38220_41381 = state_38179__$1;
(statearr_38220_41381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38182 === (13))){
var state_38179__$1 = state_38179;
var statearr_38221_41382 = state_38179__$1;
(statearr_38221_41382[(2)] = null);

(statearr_38221_41382[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38182 === (6))){
var inst_38140 = (state_38179[(7)]);
var state_38179__$1 = state_38179;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38179__$1,(11),to,inst_38140);
} else {
if((state_val_38182 === (3))){
var inst_38170 = (state_38179[(2)]);
var state_38179__$1 = state_38179;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38179__$1,inst_38170);
} else {
if((state_val_38182 === (12))){
var state_38179__$1 = state_38179;
var statearr_38225_41387 = state_38179__$1;
(statearr_38225_41387[(2)] = null);

(statearr_38225_41387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38182 === (2))){
var state_38179__$1 = state_38179;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38179__$1,(4),from);
} else {
if((state_val_38182 === (11))){
var inst_38159 = (state_38179[(2)]);
var state_38179__$1 = state_38179;
if(cljs.core.truth_(inst_38159)){
var statearr_38226_41395 = state_38179__$1;
(statearr_38226_41395[(1)] = (12));

} else {
var statearr_38228_41397 = state_38179__$1;
(statearr_38228_41397[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38182 === (9))){
var state_38179__$1 = state_38179;
var statearr_38231_41399 = state_38179__$1;
(statearr_38231_41399[(2)] = null);

(statearr_38231_41399[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38182 === (5))){
var state_38179__$1 = state_38179;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38233_41400 = state_38179__$1;
(statearr_38233_41400[(1)] = (8));

} else {
var statearr_38235_41401 = state_38179__$1;
(statearr_38235_41401[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38182 === (14))){
var inst_38166 = (state_38179[(2)]);
var state_38179__$1 = state_38179;
var statearr_38237_41402 = state_38179__$1;
(statearr_38237_41402[(2)] = inst_38166);

(statearr_38237_41402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38182 === (10))){
var inst_38156 = (state_38179[(2)]);
var state_38179__$1 = state_38179;
var statearr_38238_41412 = state_38179__$1;
(statearr_38238_41412[(2)] = inst_38156);

(statearr_38238_41412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38182 === (8))){
var inst_38153 = cljs.core.async.close_BANG_(to);
var state_38179__$1 = state_38179;
var statearr_38239_41415 = state_38179__$1;
(statearr_38239_41415[(2)] = inst_38153);

(statearr_38239_41415[(1)] = (10));


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
var cljs$core$async$state_machine__36984__auto__ = null;
var cljs$core$async$state_machine__36984__auto____0 = (function (){
var statearr_38242 = [null,null,null,null,null,null,null,null];
(statearr_38242[(0)] = cljs$core$async$state_machine__36984__auto__);

(statearr_38242[(1)] = (1));

return statearr_38242;
});
var cljs$core$async$state_machine__36984__auto____1 = (function (state_38179){
while(true){
var ret_value__36985__auto__ = (function (){try{while(true){
var result__36986__auto__ = switch__36983__auto__(state_38179);
if(cljs.core.keyword_identical_QMARK_(result__36986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36986__auto__;
}
break;
}
}catch (e38245){var ex__36987__auto__ = e38245;
var statearr_38246_41424 = state_38179;
(statearr_38246_41424[(2)] = ex__36987__auto__);


if(cljs.core.seq((state_38179[(4)]))){
var statearr_38247_41425 = state_38179;
(statearr_38247_41425[(1)] = cljs.core.first((state_38179[(4)])));

} else {
throw ex__36987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41426 = state_38179;
state_38179 = G__41426;
continue;
} else {
return ret_value__36985__auto__;
}
break;
}
});
cljs$core$async$state_machine__36984__auto__ = function(state_38179){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36984__auto____1.call(this,state_38179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36984__auto____0;
cljs$core$async$state_machine__36984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36984__auto____1;
return cljs$core$async$state_machine__36984__auto__;
})()
})();
var state__37753__auto__ = (function (){var statearr_38250 = f__37752__auto__();
(statearr_38250[(6)] = c__37751__auto___41377);

return statearr_38250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37753__auto__);
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
var process = (function (p__38253){
var vec__38255 = p__38253;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38255,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38255,(1),null);
var job = vec__38255;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__37751__auto___41439 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37752__auto__ = (function (){var switch__36983__auto__ = (function (state_38265){
var state_val_38266 = (state_38265[(1)]);
if((state_val_38266 === (1))){
var state_38265__$1 = state_38265;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38265__$1,(2),res,v);
} else {
if((state_val_38266 === (2))){
var inst_38261 = (state_38265[(2)]);
var inst_38263 = cljs.core.async.close_BANG_(res);
var state_38265__$1 = (function (){var statearr_38270 = state_38265;
(statearr_38270[(7)] = inst_38261);

return statearr_38270;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38265__$1,inst_38263);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36984__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36984__auto____0 = (function (){
var statearr_38271 = [null,null,null,null,null,null,null,null];
(statearr_38271[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36984__auto__);

(statearr_38271[(1)] = (1));

return statearr_38271;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36984__auto____1 = (function (state_38265){
while(true){
var ret_value__36985__auto__ = (function (){try{while(true){
var result__36986__auto__ = switch__36983__auto__(state_38265);
if(cljs.core.keyword_identical_QMARK_(result__36986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36986__auto__;
}
break;
}
}catch (e38274){var ex__36987__auto__ = e38274;
var statearr_38277_41445 = state_38265;
(statearr_38277_41445[(2)] = ex__36987__auto__);


if(cljs.core.seq((state_38265[(4)]))){
var statearr_38278_41446 = state_38265;
(statearr_38278_41446[(1)] = cljs.core.first((state_38265[(4)])));

} else {
throw ex__36987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41449 = state_38265;
state_38265 = G__41449;
continue;
} else {
return ret_value__36985__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36984__auto__ = function(state_38265){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36984__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36984__auto____1.call(this,state_38265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36984__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36984__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36984__auto__;
})()
})();
var state__37753__auto__ = (function (){var statearr_38279 = f__37752__auto__();
(statearr_38279[(6)] = c__37751__auto___41439);

return statearr_38279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37753__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__38284){
var vec__38286 = p__38284;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38286,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38286,(1),null);
var job = vec__38286;
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
var n__4613__auto___41450 = n;
var __41451 = (0);
while(true){
if((__41451 < n__4613__auto___41450)){
var G__38291_41452 = type;
var G__38291_41453__$1 = (((G__38291_41452 instanceof cljs.core.Keyword))?G__38291_41452.fqn:null);
switch (G__38291_41453__$1) {
case "compute":
var c__37751__auto___41455 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__41451,c__37751__auto___41455,G__38291_41452,G__38291_41453__$1,n__4613__auto___41450,jobs,results,process,async){
return (function (){
var f__37752__auto__ = (function (){var switch__36983__auto__ = ((function (__41451,c__37751__auto___41455,G__38291_41452,G__38291_41453__$1,n__4613__auto___41450,jobs,results,process,async){
return (function (state_38307){
var state_val_38308 = (state_38307[(1)]);
if((state_val_38308 === (1))){
var state_38307__$1 = state_38307;
var statearr_38313_41456 = state_38307__$1;
(statearr_38313_41456[(2)] = null);

(statearr_38313_41456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38308 === (2))){
var state_38307__$1 = state_38307;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38307__$1,(4),jobs);
} else {
if((state_val_38308 === (3))){
var inst_38305 = (state_38307[(2)]);
var state_38307__$1 = state_38307;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38307__$1,inst_38305);
} else {
if((state_val_38308 === (4))){
var inst_38297 = (state_38307[(2)]);
var inst_38298 = process(inst_38297);
var state_38307__$1 = state_38307;
if(cljs.core.truth_(inst_38298)){
var statearr_38314_41461 = state_38307__$1;
(statearr_38314_41461[(1)] = (5));

} else {
var statearr_38315_41462 = state_38307__$1;
(statearr_38315_41462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38308 === (5))){
var state_38307__$1 = state_38307;
var statearr_38317_41463 = state_38307__$1;
(statearr_38317_41463[(2)] = null);

(statearr_38317_41463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38308 === (6))){
var state_38307__$1 = state_38307;
var statearr_38321_41464 = state_38307__$1;
(statearr_38321_41464[(2)] = null);

(statearr_38321_41464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38308 === (7))){
var inst_38303 = (state_38307[(2)]);
var state_38307__$1 = state_38307;
var statearr_38323_41465 = state_38307__$1;
(statearr_38323_41465[(2)] = inst_38303);

(statearr_38323_41465[(1)] = (3));


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
});})(__41451,c__37751__auto___41455,G__38291_41452,G__38291_41453__$1,n__4613__auto___41450,jobs,results,process,async))
;
return ((function (__41451,switch__36983__auto__,c__37751__auto___41455,G__38291_41452,G__38291_41453__$1,n__4613__auto___41450,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36984__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36984__auto____0 = (function (){
var statearr_38324 = [null,null,null,null,null,null,null];
(statearr_38324[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36984__auto__);

(statearr_38324[(1)] = (1));

return statearr_38324;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36984__auto____1 = (function (state_38307){
while(true){
var ret_value__36985__auto__ = (function (){try{while(true){
var result__36986__auto__ = switch__36983__auto__(state_38307);
if(cljs.core.keyword_identical_QMARK_(result__36986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36986__auto__;
}
break;
}
}catch (e38325){var ex__36987__auto__ = e38325;
var statearr_38326_41466 = state_38307;
(statearr_38326_41466[(2)] = ex__36987__auto__);


if(cljs.core.seq((state_38307[(4)]))){
var statearr_38327_41467 = state_38307;
(statearr_38327_41467[(1)] = cljs.core.first((state_38307[(4)])));

} else {
throw ex__36987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41470 = state_38307;
state_38307 = G__41470;
continue;
} else {
return ret_value__36985__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36984__auto__ = function(state_38307){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36984__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36984__auto____1.call(this,state_38307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36984__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36984__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36984__auto__;
})()
;})(__41451,switch__36983__auto__,c__37751__auto___41455,G__38291_41452,G__38291_41453__$1,n__4613__auto___41450,jobs,results,process,async))
})();
var state__37753__auto__ = (function (){var statearr_38336 = f__37752__auto__();
(statearr_38336[(6)] = c__37751__auto___41455);

return statearr_38336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37753__auto__);
});})(__41451,c__37751__auto___41455,G__38291_41452,G__38291_41453__$1,n__4613__auto___41450,jobs,results,process,async))
);


break;
case "async":
var c__37751__auto___41472 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__41451,c__37751__auto___41472,G__38291_41452,G__38291_41453__$1,n__4613__auto___41450,jobs,results,process,async){
return (function (){
var f__37752__auto__ = (function (){var switch__36983__auto__ = ((function (__41451,c__37751__auto___41472,G__38291_41452,G__38291_41453__$1,n__4613__auto___41450,jobs,results,process,async){
return (function (state_38349){
var state_val_38350 = (state_38349[(1)]);
if((state_val_38350 === (1))){
var state_38349__$1 = state_38349;
var statearr_38352_41477 = state_38349__$1;
(statearr_38352_41477[(2)] = null);

(statearr_38352_41477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38350 === (2))){
var state_38349__$1 = state_38349;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38349__$1,(4),jobs);
} else {
if((state_val_38350 === (3))){
var inst_38347 = (state_38349[(2)]);
var state_38349__$1 = state_38349;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38349__$1,inst_38347);
} else {
if((state_val_38350 === (4))){
var inst_38339 = (state_38349[(2)]);
var inst_38340 = async(inst_38339);
var state_38349__$1 = state_38349;
if(cljs.core.truth_(inst_38340)){
var statearr_38353_41481 = state_38349__$1;
(statearr_38353_41481[(1)] = (5));

} else {
var statearr_38354_41482 = state_38349__$1;
(statearr_38354_41482[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38350 === (5))){
var state_38349__$1 = state_38349;
var statearr_38355_41483 = state_38349__$1;
(statearr_38355_41483[(2)] = null);

(statearr_38355_41483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38350 === (6))){
var state_38349__$1 = state_38349;
var statearr_38356_41484 = state_38349__$1;
(statearr_38356_41484[(2)] = null);

(statearr_38356_41484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38350 === (7))){
var inst_38345 = (state_38349[(2)]);
var state_38349__$1 = state_38349;
var statearr_38357_41485 = state_38349__$1;
(statearr_38357_41485[(2)] = inst_38345);

(statearr_38357_41485[(1)] = (3));


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
});})(__41451,c__37751__auto___41472,G__38291_41452,G__38291_41453__$1,n__4613__auto___41450,jobs,results,process,async))
;
return ((function (__41451,switch__36983__auto__,c__37751__auto___41472,G__38291_41452,G__38291_41453__$1,n__4613__auto___41450,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36984__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36984__auto____0 = (function (){
var statearr_38363 = [null,null,null,null,null,null,null];
(statearr_38363[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36984__auto__);

(statearr_38363[(1)] = (1));

return statearr_38363;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36984__auto____1 = (function (state_38349){
while(true){
var ret_value__36985__auto__ = (function (){try{while(true){
var result__36986__auto__ = switch__36983__auto__(state_38349);
if(cljs.core.keyword_identical_QMARK_(result__36986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36986__auto__;
}
break;
}
}catch (e38366){var ex__36987__auto__ = e38366;
var statearr_38371_41495 = state_38349;
(statearr_38371_41495[(2)] = ex__36987__auto__);


if(cljs.core.seq((state_38349[(4)]))){
var statearr_38372_41496 = state_38349;
(statearr_38372_41496[(1)] = cljs.core.first((state_38349[(4)])));

} else {
throw ex__36987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41497 = state_38349;
state_38349 = G__41497;
continue;
} else {
return ret_value__36985__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36984__auto__ = function(state_38349){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36984__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36984__auto____1.call(this,state_38349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36984__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36984__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36984__auto__;
})()
;})(__41451,switch__36983__auto__,c__37751__auto___41472,G__38291_41452,G__38291_41453__$1,n__4613__auto___41450,jobs,results,process,async))
})();
var state__37753__auto__ = (function (){var statearr_38373 = f__37752__auto__();
(statearr_38373[(6)] = c__37751__auto___41472);

return statearr_38373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37753__auto__);
});})(__41451,c__37751__auto___41472,G__38291_41452,G__38291_41453__$1,n__4613__auto___41450,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38291_41453__$1)].join('')));

}

var G__41498 = (__41451 + (1));
__41451 = G__41498;
continue;
} else {
}
break;
}

var c__37751__auto___41499 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37752__auto__ = (function (){var switch__36983__auto__ = (function (state_38395){
var state_val_38396 = (state_38395[(1)]);
if((state_val_38396 === (7))){
var inst_38391 = (state_38395[(2)]);
var state_38395__$1 = state_38395;
var statearr_38398_41500 = state_38395__$1;
(statearr_38398_41500[(2)] = inst_38391);

(statearr_38398_41500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38396 === (1))){
var state_38395__$1 = state_38395;
var statearr_38399_41505 = state_38395__$1;
(statearr_38399_41505[(2)] = null);

(statearr_38399_41505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38396 === (4))){
var inst_38376 = (state_38395[(7)]);
var inst_38376__$1 = (state_38395[(2)]);
var inst_38377 = (inst_38376__$1 == null);
var state_38395__$1 = (function (){var statearr_38400 = state_38395;
(statearr_38400[(7)] = inst_38376__$1);

return statearr_38400;
})();
if(cljs.core.truth_(inst_38377)){
var statearr_38401_41508 = state_38395__$1;
(statearr_38401_41508[(1)] = (5));

} else {
var statearr_38402_41509 = state_38395__$1;
(statearr_38402_41509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38396 === (6))){
var inst_38381 = (state_38395[(8)]);
var inst_38376 = (state_38395[(7)]);
var inst_38381__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_38382 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38383 = [inst_38376,inst_38381__$1];
var inst_38384 = (new cljs.core.PersistentVector(null,2,(5),inst_38382,inst_38383,null));
var state_38395__$1 = (function (){var statearr_38403 = state_38395;
(statearr_38403[(8)] = inst_38381__$1);

return statearr_38403;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38395__$1,(8),jobs,inst_38384);
} else {
if((state_val_38396 === (3))){
var inst_38393 = (state_38395[(2)]);
var state_38395__$1 = state_38395;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38395__$1,inst_38393);
} else {
if((state_val_38396 === (2))){
var state_38395__$1 = state_38395;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38395__$1,(4),from);
} else {
if((state_val_38396 === (9))){
var inst_38388 = (state_38395[(2)]);
var state_38395__$1 = (function (){var statearr_38404 = state_38395;
(statearr_38404[(9)] = inst_38388);

return statearr_38404;
})();
var statearr_38405_41511 = state_38395__$1;
(statearr_38405_41511[(2)] = null);

(statearr_38405_41511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38396 === (5))){
var inst_38379 = cljs.core.async.close_BANG_(jobs);
var state_38395__$1 = state_38395;
var statearr_38406_41512 = state_38395__$1;
(statearr_38406_41512[(2)] = inst_38379);

(statearr_38406_41512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38396 === (8))){
var inst_38381 = (state_38395[(8)]);
var inst_38386 = (state_38395[(2)]);
var state_38395__$1 = (function (){var statearr_38407 = state_38395;
(statearr_38407[(10)] = inst_38386);

return statearr_38407;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38395__$1,(9),results,inst_38381);
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
var cljs$core$async$pipeline_STAR__$_state_machine__36984__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36984__auto____0 = (function (){
var statearr_38409 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38409[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36984__auto__);

(statearr_38409[(1)] = (1));

return statearr_38409;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36984__auto____1 = (function (state_38395){
while(true){
var ret_value__36985__auto__ = (function (){try{while(true){
var result__36986__auto__ = switch__36983__auto__(state_38395);
if(cljs.core.keyword_identical_QMARK_(result__36986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36986__auto__;
}
break;
}
}catch (e38410){var ex__36987__auto__ = e38410;
var statearr_38411_41513 = state_38395;
(statearr_38411_41513[(2)] = ex__36987__auto__);


if(cljs.core.seq((state_38395[(4)]))){
var statearr_38412_41514 = state_38395;
(statearr_38412_41514[(1)] = cljs.core.first((state_38395[(4)])));

} else {
throw ex__36987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41515 = state_38395;
state_38395 = G__41515;
continue;
} else {
return ret_value__36985__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36984__auto__ = function(state_38395){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36984__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36984__auto____1.call(this,state_38395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36984__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36984__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36984__auto__;
})()
})();
var state__37753__auto__ = (function (){var statearr_38418 = f__37752__auto__();
(statearr_38418[(6)] = c__37751__auto___41499);

return statearr_38418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37753__auto__);
}));


var c__37751__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37752__auto__ = (function (){var switch__36983__auto__ = (function (state_38464){
var state_val_38465 = (state_38464[(1)]);
if((state_val_38465 === (7))){
var inst_38460 = (state_38464[(2)]);
var state_38464__$1 = state_38464;
var statearr_38466_41520 = state_38464__$1;
(statearr_38466_41520[(2)] = inst_38460);

(statearr_38466_41520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38465 === (20))){
var state_38464__$1 = state_38464;
var statearr_38467_41521 = state_38464__$1;
(statearr_38467_41521[(2)] = null);

(statearr_38467_41521[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38465 === (1))){
var state_38464__$1 = state_38464;
var statearr_38468_41522 = state_38464__$1;
(statearr_38468_41522[(2)] = null);

(statearr_38468_41522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38465 === (4))){
var inst_38424 = (state_38464[(7)]);
var inst_38424__$1 = (state_38464[(2)]);
var inst_38425 = (inst_38424__$1 == null);
var state_38464__$1 = (function (){var statearr_38469 = state_38464;
(statearr_38469[(7)] = inst_38424__$1);

return statearr_38469;
})();
if(cljs.core.truth_(inst_38425)){
var statearr_38470_41523 = state_38464__$1;
(statearr_38470_41523[(1)] = (5));

} else {
var statearr_38471_41524 = state_38464__$1;
(statearr_38471_41524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38465 === (15))){
var inst_38437 = (state_38464[(8)]);
var state_38464__$1 = state_38464;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38464__$1,(18),to,inst_38437);
} else {
if((state_val_38465 === (21))){
var inst_38455 = (state_38464[(2)]);
var state_38464__$1 = state_38464;
var statearr_38479_41529 = state_38464__$1;
(statearr_38479_41529[(2)] = inst_38455);

(statearr_38479_41529[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38465 === (13))){
var inst_38457 = (state_38464[(2)]);
var state_38464__$1 = (function (){var statearr_38481 = state_38464;
(statearr_38481[(9)] = inst_38457);

return statearr_38481;
})();
var statearr_38482_41530 = state_38464__$1;
(statearr_38482_41530[(2)] = null);

(statearr_38482_41530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38465 === (6))){
var inst_38424 = (state_38464[(7)]);
var state_38464__$1 = state_38464;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38464__$1,(11),inst_38424);
} else {
if((state_val_38465 === (17))){
var inst_38450 = (state_38464[(2)]);
var state_38464__$1 = state_38464;
if(cljs.core.truth_(inst_38450)){
var statearr_38488_41536 = state_38464__$1;
(statearr_38488_41536[(1)] = (19));

} else {
var statearr_38491_41542 = state_38464__$1;
(statearr_38491_41542[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38465 === (3))){
var inst_38462 = (state_38464[(2)]);
var state_38464__$1 = state_38464;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38464__$1,inst_38462);
} else {
if((state_val_38465 === (12))){
var inst_38434 = (state_38464[(10)]);
var state_38464__$1 = state_38464;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38464__$1,(14),inst_38434);
} else {
if((state_val_38465 === (2))){
var state_38464__$1 = state_38464;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38464__$1,(4),results);
} else {
if((state_val_38465 === (19))){
var state_38464__$1 = state_38464;
var statearr_38494_41543 = state_38464__$1;
(statearr_38494_41543[(2)] = null);

(statearr_38494_41543[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38465 === (11))){
var inst_38434 = (state_38464[(2)]);
var state_38464__$1 = (function (){var statearr_38498 = state_38464;
(statearr_38498[(10)] = inst_38434);

return statearr_38498;
})();
var statearr_38503_41544 = state_38464__$1;
(statearr_38503_41544[(2)] = null);

(statearr_38503_41544[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38465 === (9))){
var state_38464__$1 = state_38464;
var statearr_38505_41545 = state_38464__$1;
(statearr_38505_41545[(2)] = null);

(statearr_38505_41545[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38465 === (5))){
var state_38464__$1 = state_38464;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38506_41547 = state_38464__$1;
(statearr_38506_41547[(1)] = (8));

} else {
var statearr_38507_41548 = state_38464__$1;
(statearr_38507_41548[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38465 === (14))){
var inst_38437 = (state_38464[(8)]);
var inst_38437__$1 = (state_38464[(2)]);
var inst_38443 = (inst_38437__$1 == null);
var inst_38444 = cljs.core.not(inst_38443);
var state_38464__$1 = (function (){var statearr_38510 = state_38464;
(statearr_38510[(8)] = inst_38437__$1);

return statearr_38510;
})();
if(inst_38444){
var statearr_38513_41550 = state_38464__$1;
(statearr_38513_41550[(1)] = (15));

} else {
var statearr_38515_41551 = state_38464__$1;
(statearr_38515_41551[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38465 === (16))){
var state_38464__$1 = state_38464;
var statearr_38517_41552 = state_38464__$1;
(statearr_38517_41552[(2)] = false);

(statearr_38517_41552[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38465 === (10))){
var inst_38431 = (state_38464[(2)]);
var state_38464__$1 = state_38464;
var statearr_38518_41553 = state_38464__$1;
(statearr_38518_41553[(2)] = inst_38431);

(statearr_38518_41553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38465 === (18))){
var inst_38447 = (state_38464[(2)]);
var state_38464__$1 = state_38464;
var statearr_38525_41555 = state_38464__$1;
(statearr_38525_41555[(2)] = inst_38447);

(statearr_38525_41555[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38465 === (8))){
var inst_38428 = cljs.core.async.close_BANG_(to);
var state_38464__$1 = state_38464;
var statearr_38528_41556 = state_38464__$1;
(statearr_38528_41556[(2)] = inst_38428);

(statearr_38528_41556[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__36984__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36984__auto____0 = (function (){
var statearr_38532 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38532[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36984__auto__);

(statearr_38532[(1)] = (1));

return statearr_38532;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36984__auto____1 = (function (state_38464){
while(true){
var ret_value__36985__auto__ = (function (){try{while(true){
var result__36986__auto__ = switch__36983__auto__(state_38464);
if(cljs.core.keyword_identical_QMARK_(result__36986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36986__auto__;
}
break;
}
}catch (e38535){var ex__36987__auto__ = e38535;
var statearr_38536_41559 = state_38464;
(statearr_38536_41559[(2)] = ex__36987__auto__);


if(cljs.core.seq((state_38464[(4)]))){
var statearr_38538_41560 = state_38464;
(statearr_38538_41560[(1)] = cljs.core.first((state_38464[(4)])));

} else {
throw ex__36987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41565 = state_38464;
state_38464 = G__41565;
continue;
} else {
return ret_value__36985__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36984__auto__ = function(state_38464){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36984__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36984__auto____1.call(this,state_38464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36984__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36984__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36984__auto__;
})()
})();
var state__37753__auto__ = (function (){var statearr_38550 = f__37752__auto__();
(statearr_38550[(6)] = c__37751__auto__);

return statearr_38550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37753__auto__);
}));

return c__37751__auto__;
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
var G__38552 = arguments.length;
switch (G__38552) {
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
var G__38567 = arguments.length;
switch (G__38567) {
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
var G__38581 = arguments.length;
switch (G__38581) {
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
var c__37751__auto___41576 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37752__auto__ = (function (){var switch__36983__auto__ = (function (state_38630){
var state_val_38631 = (state_38630[(1)]);
if((state_val_38631 === (7))){
var inst_38620 = (state_38630[(2)]);
var state_38630__$1 = state_38630;
var statearr_38640_41577 = state_38630__$1;
(statearr_38640_41577[(2)] = inst_38620);

(statearr_38640_41577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38631 === (1))){
var state_38630__$1 = state_38630;
var statearr_38641_41578 = state_38630__$1;
(statearr_38641_41578[(2)] = null);

(statearr_38641_41578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38631 === (4))){
var inst_38599 = (state_38630[(7)]);
var inst_38599__$1 = (state_38630[(2)]);
var inst_38601 = (inst_38599__$1 == null);
var state_38630__$1 = (function (){var statearr_38645 = state_38630;
(statearr_38645[(7)] = inst_38599__$1);

return statearr_38645;
})();
if(cljs.core.truth_(inst_38601)){
var statearr_38646_41579 = state_38630__$1;
(statearr_38646_41579[(1)] = (5));

} else {
var statearr_38647_41580 = state_38630__$1;
(statearr_38647_41580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38631 === (13))){
var state_38630__$1 = state_38630;
var statearr_38651_41581 = state_38630__$1;
(statearr_38651_41581[(2)] = null);

(statearr_38651_41581[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38631 === (6))){
var inst_38599 = (state_38630[(7)]);
var inst_38606 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_38599) : p.call(null,inst_38599));
var state_38630__$1 = state_38630;
if(cljs.core.truth_(inst_38606)){
var statearr_38652_41587 = state_38630__$1;
(statearr_38652_41587[(1)] = (9));

} else {
var statearr_38653_41588 = state_38630__$1;
(statearr_38653_41588[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38631 === (3))){
var inst_38625 = (state_38630[(2)]);
var state_38630__$1 = state_38630;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38630__$1,inst_38625);
} else {
if((state_val_38631 === (12))){
var state_38630__$1 = state_38630;
var statearr_38654_41589 = state_38630__$1;
(statearr_38654_41589[(2)] = null);

(statearr_38654_41589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38631 === (2))){
var state_38630__$1 = state_38630;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38630__$1,(4),ch);
} else {
if((state_val_38631 === (11))){
var inst_38599 = (state_38630[(7)]);
var inst_38610 = (state_38630[(2)]);
var state_38630__$1 = state_38630;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38630__$1,(8),inst_38610,inst_38599);
} else {
if((state_val_38631 === (9))){
var state_38630__$1 = state_38630;
var statearr_38661_41597 = state_38630__$1;
(statearr_38661_41597[(2)] = tc);

(statearr_38661_41597[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38631 === (5))){
var inst_38603 = cljs.core.async.close_BANG_(tc);
var inst_38604 = cljs.core.async.close_BANG_(fc);
var state_38630__$1 = (function (){var statearr_38662 = state_38630;
(statearr_38662[(8)] = inst_38603);

return statearr_38662;
})();
var statearr_38664_41598 = state_38630__$1;
(statearr_38664_41598[(2)] = inst_38604);

(statearr_38664_41598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38631 === (14))){
var inst_38618 = (state_38630[(2)]);
var state_38630__$1 = state_38630;
var statearr_38665_41600 = state_38630__$1;
(statearr_38665_41600[(2)] = inst_38618);

(statearr_38665_41600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38631 === (10))){
var state_38630__$1 = state_38630;
var statearr_38666_41601 = state_38630__$1;
(statearr_38666_41601[(2)] = fc);

(statearr_38666_41601[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38631 === (8))){
var inst_38613 = (state_38630[(2)]);
var state_38630__$1 = state_38630;
if(cljs.core.truth_(inst_38613)){
var statearr_38667_41602 = state_38630__$1;
(statearr_38667_41602[(1)] = (12));

} else {
var statearr_38668_41603 = state_38630__$1;
(statearr_38668_41603[(1)] = (13));

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
var cljs$core$async$state_machine__36984__auto__ = null;
var cljs$core$async$state_machine__36984__auto____0 = (function (){
var statearr_38693 = [null,null,null,null,null,null,null,null,null];
(statearr_38693[(0)] = cljs$core$async$state_machine__36984__auto__);

(statearr_38693[(1)] = (1));

return statearr_38693;
});
var cljs$core$async$state_machine__36984__auto____1 = (function (state_38630){
while(true){
var ret_value__36985__auto__ = (function (){try{while(true){
var result__36986__auto__ = switch__36983__auto__(state_38630);
if(cljs.core.keyword_identical_QMARK_(result__36986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36986__auto__;
}
break;
}
}catch (e38694){var ex__36987__auto__ = e38694;
var statearr_38695_41604 = state_38630;
(statearr_38695_41604[(2)] = ex__36987__auto__);


if(cljs.core.seq((state_38630[(4)]))){
var statearr_38696_41605 = state_38630;
(statearr_38696_41605[(1)] = cljs.core.first((state_38630[(4)])));

} else {
throw ex__36987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41606 = state_38630;
state_38630 = G__41606;
continue;
} else {
return ret_value__36985__auto__;
}
break;
}
});
cljs$core$async$state_machine__36984__auto__ = function(state_38630){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36984__auto____1.call(this,state_38630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36984__auto____0;
cljs$core$async$state_machine__36984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36984__auto____1;
return cljs$core$async$state_machine__36984__auto__;
})()
})();
var state__37753__auto__ = (function (){var statearr_38697 = f__37752__auto__();
(statearr_38697[(6)] = c__37751__auto___41576);

return statearr_38697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37753__auto__);
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
var c__37751__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37752__auto__ = (function (){var switch__36983__auto__ = (function (state_38721){
var state_val_38722 = (state_38721[(1)]);
if((state_val_38722 === (7))){
var inst_38717 = (state_38721[(2)]);
var state_38721__$1 = state_38721;
var statearr_38723_41611 = state_38721__$1;
(statearr_38723_41611[(2)] = inst_38717);

(statearr_38723_41611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38722 === (1))){
var inst_38700 = init;
var inst_38701 = inst_38700;
var state_38721__$1 = (function (){var statearr_38724 = state_38721;
(statearr_38724[(7)] = inst_38701);

return statearr_38724;
})();
var statearr_38725_41612 = state_38721__$1;
(statearr_38725_41612[(2)] = null);

(statearr_38725_41612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38722 === (4))){
var inst_38704 = (state_38721[(8)]);
var inst_38704__$1 = (state_38721[(2)]);
var inst_38705 = (inst_38704__$1 == null);
var state_38721__$1 = (function (){var statearr_38728 = state_38721;
(statearr_38728[(8)] = inst_38704__$1);

return statearr_38728;
})();
if(cljs.core.truth_(inst_38705)){
var statearr_38729_41616 = state_38721__$1;
(statearr_38729_41616[(1)] = (5));

} else {
var statearr_38730_41621 = state_38721__$1;
(statearr_38730_41621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38722 === (6))){
var inst_38704 = (state_38721[(8)]);
var inst_38708 = (state_38721[(9)]);
var inst_38701 = (state_38721[(7)]);
var inst_38708__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_38701,inst_38704) : f.call(null,inst_38701,inst_38704));
var inst_38709 = cljs.core.reduced_QMARK_(inst_38708__$1);
var state_38721__$1 = (function (){var statearr_38733 = state_38721;
(statearr_38733[(9)] = inst_38708__$1);

return statearr_38733;
})();
if(inst_38709){
var statearr_38734_41623 = state_38721__$1;
(statearr_38734_41623[(1)] = (8));

} else {
var statearr_38735_41624 = state_38721__$1;
(statearr_38735_41624[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38722 === (3))){
var inst_38719 = (state_38721[(2)]);
var state_38721__$1 = state_38721;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38721__$1,inst_38719);
} else {
if((state_val_38722 === (2))){
var state_38721__$1 = state_38721;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38721__$1,(4),ch);
} else {
if((state_val_38722 === (9))){
var inst_38708 = (state_38721[(9)]);
var inst_38701 = inst_38708;
var state_38721__$1 = (function (){var statearr_38736 = state_38721;
(statearr_38736[(7)] = inst_38701);

return statearr_38736;
})();
var statearr_38738_41625 = state_38721__$1;
(statearr_38738_41625[(2)] = null);

(statearr_38738_41625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38722 === (5))){
var inst_38701 = (state_38721[(7)]);
var state_38721__$1 = state_38721;
var statearr_38740_41627 = state_38721__$1;
(statearr_38740_41627[(2)] = inst_38701);

(statearr_38740_41627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38722 === (10))){
var inst_38715 = (state_38721[(2)]);
var state_38721__$1 = state_38721;
var statearr_38741_41629 = state_38721__$1;
(statearr_38741_41629[(2)] = inst_38715);

(statearr_38741_41629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38722 === (8))){
var inst_38708 = (state_38721[(9)]);
var inst_38711 = cljs.core.deref(inst_38708);
var state_38721__$1 = state_38721;
var statearr_38742_41633 = state_38721__$1;
(statearr_38742_41633[(2)] = inst_38711);

(statearr_38742_41633[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__36984__auto__ = null;
var cljs$core$async$reduce_$_state_machine__36984__auto____0 = (function (){
var statearr_38746 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38746[(0)] = cljs$core$async$reduce_$_state_machine__36984__auto__);

(statearr_38746[(1)] = (1));

return statearr_38746;
});
var cljs$core$async$reduce_$_state_machine__36984__auto____1 = (function (state_38721){
while(true){
var ret_value__36985__auto__ = (function (){try{while(true){
var result__36986__auto__ = switch__36983__auto__(state_38721);
if(cljs.core.keyword_identical_QMARK_(result__36986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36986__auto__;
}
break;
}
}catch (e38747){var ex__36987__auto__ = e38747;
var statearr_38748_41634 = state_38721;
(statearr_38748_41634[(2)] = ex__36987__auto__);


if(cljs.core.seq((state_38721[(4)]))){
var statearr_38751_41635 = state_38721;
(statearr_38751_41635[(1)] = cljs.core.first((state_38721[(4)])));

} else {
throw ex__36987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41636 = state_38721;
state_38721 = G__41636;
continue;
} else {
return ret_value__36985__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__36984__auto__ = function(state_38721){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__36984__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__36984__auto____1.call(this,state_38721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__36984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__36984__auto____0;
cljs$core$async$reduce_$_state_machine__36984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__36984__auto____1;
return cljs$core$async$reduce_$_state_machine__36984__auto__;
})()
})();
var state__37753__auto__ = (function (){var statearr_38754 = f__37752__auto__();
(statearr_38754[(6)] = c__37751__auto__);

return statearr_38754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37753__auto__);
}));

return c__37751__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__37751__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37752__auto__ = (function (){var switch__36983__auto__ = (function (state_38760){
var state_val_38761 = (state_38760[(1)]);
if((state_val_38761 === (1))){
var inst_38755 = cljs.core.async.reduce(f__$1,init,ch);
var state_38760__$1 = state_38760;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38760__$1,(2),inst_38755);
} else {
if((state_val_38761 === (2))){
var inst_38757 = (state_38760[(2)]);
var inst_38758 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_38757) : f__$1.call(null,inst_38757));
var state_38760__$1 = state_38760;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38760__$1,inst_38758);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__36984__auto__ = null;
var cljs$core$async$transduce_$_state_machine__36984__auto____0 = (function (){
var statearr_38765 = [null,null,null,null,null,null,null];
(statearr_38765[(0)] = cljs$core$async$transduce_$_state_machine__36984__auto__);

(statearr_38765[(1)] = (1));

return statearr_38765;
});
var cljs$core$async$transduce_$_state_machine__36984__auto____1 = (function (state_38760){
while(true){
var ret_value__36985__auto__ = (function (){try{while(true){
var result__36986__auto__ = switch__36983__auto__(state_38760);
if(cljs.core.keyword_identical_QMARK_(result__36986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36986__auto__;
}
break;
}
}catch (e38767){var ex__36987__auto__ = e38767;
var statearr_38768_41640 = state_38760;
(statearr_38768_41640[(2)] = ex__36987__auto__);


if(cljs.core.seq((state_38760[(4)]))){
var statearr_38769_41641 = state_38760;
(statearr_38769_41641[(1)] = cljs.core.first((state_38760[(4)])));

} else {
throw ex__36987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41642 = state_38760;
state_38760 = G__41642;
continue;
} else {
return ret_value__36985__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__36984__auto__ = function(state_38760){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__36984__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__36984__auto____1.call(this,state_38760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__36984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__36984__auto____0;
cljs$core$async$transduce_$_state_machine__36984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__36984__auto____1;
return cljs$core$async$transduce_$_state_machine__36984__auto__;
})()
})();
var state__37753__auto__ = (function (){var statearr_38770 = f__37752__auto__();
(statearr_38770[(6)] = c__37751__auto__);

return statearr_38770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37753__auto__);
}));

return c__37751__auto__;
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
var G__38776 = arguments.length;
switch (G__38776) {
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
var c__37751__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37752__auto__ = (function (){var switch__36983__auto__ = (function (state_38806){
var state_val_38807 = (state_38806[(1)]);
if((state_val_38807 === (7))){
var inst_38788 = (state_38806[(2)]);
var state_38806__$1 = state_38806;
var statearr_38808_41648 = state_38806__$1;
(statearr_38808_41648[(2)] = inst_38788);

(statearr_38808_41648[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (1))){
var inst_38782 = cljs.core.seq(coll);
var inst_38783 = inst_38782;
var state_38806__$1 = (function (){var statearr_38815 = state_38806;
(statearr_38815[(7)] = inst_38783);

return statearr_38815;
})();
var statearr_38816_41649 = state_38806__$1;
(statearr_38816_41649[(2)] = null);

(statearr_38816_41649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (4))){
var inst_38783 = (state_38806[(7)]);
var inst_38786 = cljs.core.first(inst_38783);
var state_38806__$1 = state_38806;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38806__$1,(7),ch,inst_38786);
} else {
if((state_val_38807 === (13))){
var inst_38800 = (state_38806[(2)]);
var state_38806__$1 = state_38806;
var statearr_38823_41651 = state_38806__$1;
(statearr_38823_41651[(2)] = inst_38800);

(statearr_38823_41651[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (6))){
var inst_38791 = (state_38806[(2)]);
var state_38806__$1 = state_38806;
if(cljs.core.truth_(inst_38791)){
var statearr_38824_41657 = state_38806__$1;
(statearr_38824_41657[(1)] = (8));

} else {
var statearr_38826_41658 = state_38806__$1;
(statearr_38826_41658[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (3))){
var inst_38804 = (state_38806[(2)]);
var state_38806__$1 = state_38806;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38806__$1,inst_38804);
} else {
if((state_val_38807 === (12))){
var state_38806__$1 = state_38806;
var statearr_38827_41659 = state_38806__$1;
(statearr_38827_41659[(2)] = null);

(statearr_38827_41659[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (2))){
var inst_38783 = (state_38806[(7)]);
var state_38806__$1 = state_38806;
if(cljs.core.truth_(inst_38783)){
var statearr_38830_41664 = state_38806__$1;
(statearr_38830_41664[(1)] = (4));

} else {
var statearr_38832_41665 = state_38806__$1;
(statearr_38832_41665[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (11))){
var inst_38797 = cljs.core.async.close_BANG_(ch);
var state_38806__$1 = state_38806;
var statearr_38834_41668 = state_38806__$1;
(statearr_38834_41668[(2)] = inst_38797);

(statearr_38834_41668[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (9))){
var state_38806__$1 = state_38806;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38841_41670 = state_38806__$1;
(statearr_38841_41670[(1)] = (11));

} else {
var statearr_38843_41671 = state_38806__$1;
(statearr_38843_41671[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (5))){
var inst_38783 = (state_38806[(7)]);
var state_38806__$1 = state_38806;
var statearr_38846_41672 = state_38806__$1;
(statearr_38846_41672[(2)] = inst_38783);

(statearr_38846_41672[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (10))){
var inst_38802 = (state_38806[(2)]);
var state_38806__$1 = state_38806;
var statearr_38847_41673 = state_38806__$1;
(statearr_38847_41673[(2)] = inst_38802);

(statearr_38847_41673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38807 === (8))){
var inst_38783 = (state_38806[(7)]);
var inst_38793 = cljs.core.next(inst_38783);
var inst_38783__$1 = inst_38793;
var state_38806__$1 = (function (){var statearr_38852 = state_38806;
(statearr_38852[(7)] = inst_38783__$1);

return statearr_38852;
})();
var statearr_38853_41674 = state_38806__$1;
(statearr_38853_41674[(2)] = null);

(statearr_38853_41674[(1)] = (2));


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
var cljs$core$async$state_machine__36984__auto__ = null;
var cljs$core$async$state_machine__36984__auto____0 = (function (){
var statearr_38854 = [null,null,null,null,null,null,null,null];
(statearr_38854[(0)] = cljs$core$async$state_machine__36984__auto__);

(statearr_38854[(1)] = (1));

return statearr_38854;
});
var cljs$core$async$state_machine__36984__auto____1 = (function (state_38806){
while(true){
var ret_value__36985__auto__ = (function (){try{while(true){
var result__36986__auto__ = switch__36983__auto__(state_38806);
if(cljs.core.keyword_identical_QMARK_(result__36986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36986__auto__;
}
break;
}
}catch (e38855){var ex__36987__auto__ = e38855;
var statearr_38856_41677 = state_38806;
(statearr_38856_41677[(2)] = ex__36987__auto__);


if(cljs.core.seq((state_38806[(4)]))){
var statearr_38857_41678 = state_38806;
(statearr_38857_41678[(1)] = cljs.core.first((state_38806[(4)])));

} else {
throw ex__36987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41683 = state_38806;
state_38806 = G__41683;
continue;
} else {
return ret_value__36985__auto__;
}
break;
}
});
cljs$core$async$state_machine__36984__auto__ = function(state_38806){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36984__auto____1.call(this,state_38806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36984__auto____0;
cljs$core$async$state_machine__36984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36984__auto____1;
return cljs$core$async$state_machine__36984__auto__;
})()
})();
var state__37753__auto__ = (function (){var statearr_38858 = f__37752__auto__();
(statearr_38858[(6)] = c__37751__auto__);

return statearr_38858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37753__auto__);
}));

return c__37751__auto__;
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
var G__38868 = arguments.length;
switch (G__38868) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_41687 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_41687(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_41692 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_41692(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_41697 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_41697(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_41709 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_41709(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38925 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38925 = (function (ch,cs,meta38926){
this.ch = ch;
this.cs = cs;
this.meta38926 = meta38926;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38927,meta38926__$1){
var self__ = this;
var _38927__$1 = this;
return (new cljs.core.async.t_cljs$core$async38925(self__.ch,self__.cs,meta38926__$1));
}));

(cljs.core.async.t_cljs$core$async38925.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38927){
var self__ = this;
var _38927__$1 = this;
return self__.meta38926;
}));

(cljs.core.async.t_cljs$core$async38925.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38925.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async38925.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38925.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async38925.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async38925.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async38925.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta38926","meta38926",1905822680,null)], null);
}));

(cljs.core.async.t_cljs$core$async38925.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38925.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38925");

(cljs.core.async.t_cljs$core$async38925.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async38925");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38925.
 */
cljs.core.async.__GT_t_cljs$core$async38925 = (function cljs$core$async$mult_$___GT_t_cljs$core$async38925(ch__$1,cs__$1,meta38926){
return (new cljs.core.async.t_cljs$core$async38925(ch__$1,cs__$1,meta38926));
});

}

return (new cljs.core.async.t_cljs$core$async38925(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__37751__auto___41731 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37752__auto__ = (function (){var switch__36983__auto__ = (function (state_39158){
var state_val_39159 = (state_39158[(1)]);
if((state_val_39159 === (7))){
var inst_39145 = (state_39158[(2)]);
var state_39158__$1 = state_39158;
var statearr_39168_41733 = state_39158__$1;
(statearr_39168_41733[(2)] = inst_39145);

(statearr_39168_41733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (20))){
var inst_39008 = (state_39158[(7)]);
var inst_39022 = cljs.core.first(inst_39008);
var inst_39024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39022,(0),null);
var inst_39026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39022,(1),null);
var state_39158__$1 = (function (){var statearr_39171 = state_39158;
(statearr_39171[(8)] = inst_39024);

return statearr_39171;
})();
if(cljs.core.truth_(inst_39026)){
var statearr_39174_41737 = state_39158__$1;
(statearr_39174_41737[(1)] = (22));

} else {
var statearr_39175_41738 = state_39158__$1;
(statearr_39175_41738[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (27))){
var inst_39079 = (state_39158[(9)]);
var inst_39059 = (state_39158[(10)]);
var inst_39061 = (state_39158[(11)]);
var inst_38965 = (state_39158[(12)]);
var inst_39079__$1 = cljs.core._nth(inst_39059,inst_39061);
var inst_39080 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_39079__$1,inst_38965,done);
var state_39158__$1 = (function (){var statearr_39182 = state_39158;
(statearr_39182[(9)] = inst_39079__$1);

return statearr_39182;
})();
if(cljs.core.truth_(inst_39080)){
var statearr_39183_41739 = state_39158__$1;
(statearr_39183_41739[(1)] = (30));

} else {
var statearr_39187_41740 = state_39158__$1;
(statearr_39187_41740[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (1))){
var state_39158__$1 = state_39158;
var statearr_39190_41744 = state_39158__$1;
(statearr_39190_41744[(2)] = null);

(statearr_39190_41744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (24))){
var inst_39008 = (state_39158[(7)]);
var inst_39035 = (state_39158[(2)]);
var inst_39036 = cljs.core.next(inst_39008);
var inst_38979 = inst_39036;
var inst_38980 = null;
var inst_38981 = (0);
var inst_38982 = (0);
var state_39158__$1 = (function (){var statearr_39195 = state_39158;
(statearr_39195[(13)] = inst_38980);

(statearr_39195[(14)] = inst_39035);

(statearr_39195[(15)] = inst_38981);

(statearr_39195[(16)] = inst_38979);

(statearr_39195[(17)] = inst_38982);

return statearr_39195;
})();
var statearr_39199_41745 = state_39158__$1;
(statearr_39199_41745[(2)] = null);

(statearr_39199_41745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (39))){
var state_39158__$1 = state_39158;
var statearr_39209_41746 = state_39158__$1;
(statearr_39209_41746[(2)] = null);

(statearr_39209_41746[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (4))){
var inst_38965 = (state_39158[(12)]);
var inst_38965__$1 = (state_39158[(2)]);
var inst_38967 = (inst_38965__$1 == null);
var state_39158__$1 = (function (){var statearr_39213 = state_39158;
(statearr_39213[(12)] = inst_38965__$1);

return statearr_39213;
})();
if(cljs.core.truth_(inst_38967)){
var statearr_39215_41747 = state_39158__$1;
(statearr_39215_41747[(1)] = (5));

} else {
var statearr_39216_41748 = state_39158__$1;
(statearr_39216_41748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (15))){
var inst_38980 = (state_39158[(13)]);
var inst_38981 = (state_39158[(15)]);
var inst_38979 = (state_39158[(16)]);
var inst_38982 = (state_39158[(17)]);
var inst_39002 = (state_39158[(2)]);
var inst_39005 = (inst_38982 + (1));
var tmp39201 = inst_38980;
var tmp39202 = inst_38981;
var tmp39203 = inst_38979;
var inst_38979__$1 = tmp39203;
var inst_38980__$1 = tmp39201;
var inst_38981__$1 = tmp39202;
var inst_38982__$1 = inst_39005;
var state_39158__$1 = (function (){var statearr_39224 = state_39158;
(statearr_39224[(13)] = inst_38980__$1);

(statearr_39224[(18)] = inst_39002);

(statearr_39224[(15)] = inst_38981__$1);

(statearr_39224[(16)] = inst_38979__$1);

(statearr_39224[(17)] = inst_38982__$1);

return statearr_39224;
})();
var statearr_39227_41755 = state_39158__$1;
(statearr_39227_41755[(2)] = null);

(statearr_39227_41755[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (21))){
var inst_39039 = (state_39158[(2)]);
var state_39158__$1 = state_39158;
var statearr_39233_41757 = state_39158__$1;
(statearr_39233_41757[(2)] = inst_39039);

(statearr_39233_41757[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (31))){
var inst_39079 = (state_39158[(9)]);
var inst_39086 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_39079);
var state_39158__$1 = state_39158;
var statearr_39236_41761 = state_39158__$1;
(statearr_39236_41761[(2)] = inst_39086);

(statearr_39236_41761[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (32))){
var inst_39058 = (state_39158[(19)]);
var inst_39059 = (state_39158[(10)]);
var inst_39061 = (state_39158[(11)]);
var inst_39060 = (state_39158[(20)]);
var inst_39088 = (state_39158[(2)]);
var inst_39090 = (inst_39061 + (1));
var tmp39229 = inst_39058;
var tmp39230 = inst_39059;
var tmp39231 = inst_39060;
var inst_39058__$1 = tmp39229;
var inst_39059__$1 = tmp39230;
var inst_39060__$1 = tmp39231;
var inst_39061__$1 = inst_39090;
var state_39158__$1 = (function (){var statearr_39239 = state_39158;
(statearr_39239[(19)] = inst_39058__$1);

(statearr_39239[(10)] = inst_39059__$1);

(statearr_39239[(11)] = inst_39061__$1);

(statearr_39239[(21)] = inst_39088);

(statearr_39239[(20)] = inst_39060__$1);

return statearr_39239;
})();
var statearr_39242_41763 = state_39158__$1;
(statearr_39242_41763[(2)] = null);

(statearr_39242_41763[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (40))){
var inst_39107 = (state_39158[(22)]);
var inst_39113 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_39107);
var state_39158__$1 = state_39158;
var statearr_39246_41764 = state_39158__$1;
(statearr_39246_41764[(2)] = inst_39113);

(statearr_39246_41764[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (33))){
var inst_39096 = (state_39158[(23)]);
var inst_39099 = cljs.core.chunked_seq_QMARK_(inst_39096);
var state_39158__$1 = state_39158;
if(inst_39099){
var statearr_39249_41765 = state_39158__$1;
(statearr_39249_41765[(1)] = (36));

} else {
var statearr_39250_41766 = state_39158__$1;
(statearr_39250_41766[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (13))){
var inst_38994 = (state_39158[(24)]);
var inst_38998 = cljs.core.async.close_BANG_(inst_38994);
var state_39158__$1 = state_39158;
var statearr_39251_41767 = state_39158__$1;
(statearr_39251_41767[(2)] = inst_38998);

(statearr_39251_41767[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (22))){
var inst_39024 = (state_39158[(8)]);
var inst_39032 = cljs.core.async.close_BANG_(inst_39024);
var state_39158__$1 = state_39158;
var statearr_39260_41772 = state_39158__$1;
(statearr_39260_41772[(2)] = inst_39032);

(statearr_39260_41772[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (36))){
var inst_39096 = (state_39158[(23)]);
var inst_39101 = cljs.core.chunk_first(inst_39096);
var inst_39102 = cljs.core.chunk_rest(inst_39096);
var inst_39104 = cljs.core.count(inst_39101);
var inst_39058 = inst_39102;
var inst_39059 = inst_39101;
var inst_39060 = inst_39104;
var inst_39061 = (0);
var state_39158__$1 = (function (){var statearr_39268 = state_39158;
(statearr_39268[(19)] = inst_39058);

(statearr_39268[(10)] = inst_39059);

(statearr_39268[(11)] = inst_39061);

(statearr_39268[(20)] = inst_39060);

return statearr_39268;
})();
var statearr_39269_41773 = state_39158__$1;
(statearr_39269_41773[(2)] = null);

(statearr_39269_41773[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (41))){
var inst_39096 = (state_39158[(23)]);
var inst_39116 = (state_39158[(2)]);
var inst_39121 = cljs.core.next(inst_39096);
var inst_39058 = inst_39121;
var inst_39059 = null;
var inst_39060 = (0);
var inst_39061 = (0);
var state_39158__$1 = (function (){var statearr_39274 = state_39158;
(statearr_39274[(19)] = inst_39058);

(statearr_39274[(10)] = inst_39059);

(statearr_39274[(11)] = inst_39061);

(statearr_39274[(25)] = inst_39116);

(statearr_39274[(20)] = inst_39060);

return statearr_39274;
})();
var statearr_39275_41779 = state_39158__$1;
(statearr_39275_41779[(2)] = null);

(statearr_39275_41779[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (43))){
var state_39158__$1 = state_39158;
var statearr_39276_41780 = state_39158__$1;
(statearr_39276_41780[(2)] = null);

(statearr_39276_41780[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (29))){
var inst_39131 = (state_39158[(2)]);
var state_39158__$1 = state_39158;
var statearr_39277_41785 = state_39158__$1;
(statearr_39277_41785[(2)] = inst_39131);

(statearr_39277_41785[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (44))){
var inst_39142 = (state_39158[(2)]);
var state_39158__$1 = (function (){var statearr_39278 = state_39158;
(statearr_39278[(26)] = inst_39142);

return statearr_39278;
})();
var statearr_39279_41786 = state_39158__$1;
(statearr_39279_41786[(2)] = null);

(statearr_39279_41786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (6))){
var inst_39049 = (state_39158[(27)]);
var inst_39048 = cljs.core.deref(cs);
var inst_39049__$1 = cljs.core.keys(inst_39048);
var inst_39050 = cljs.core.count(inst_39049__$1);
var inst_39051 = cljs.core.reset_BANG_(dctr,inst_39050);
var inst_39057 = cljs.core.seq(inst_39049__$1);
var inst_39058 = inst_39057;
var inst_39059 = null;
var inst_39060 = (0);
var inst_39061 = (0);
var state_39158__$1 = (function (){var statearr_39280 = state_39158;
(statearr_39280[(27)] = inst_39049__$1);

(statearr_39280[(19)] = inst_39058);

(statearr_39280[(10)] = inst_39059);

(statearr_39280[(11)] = inst_39061);

(statearr_39280[(20)] = inst_39060);

(statearr_39280[(28)] = inst_39051);

return statearr_39280;
})();
var statearr_39281_41807 = state_39158__$1;
(statearr_39281_41807[(2)] = null);

(statearr_39281_41807[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (28))){
var inst_39058 = (state_39158[(19)]);
var inst_39096 = (state_39158[(23)]);
var inst_39096__$1 = cljs.core.seq(inst_39058);
var state_39158__$1 = (function (){var statearr_39283 = state_39158;
(statearr_39283[(23)] = inst_39096__$1);

return statearr_39283;
})();
if(inst_39096__$1){
var statearr_39286_41817 = state_39158__$1;
(statearr_39286_41817[(1)] = (33));

} else {
var statearr_39288_41818 = state_39158__$1;
(statearr_39288_41818[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (25))){
var inst_39061 = (state_39158[(11)]);
var inst_39060 = (state_39158[(20)]);
var inst_39068 = (inst_39061 < inst_39060);
var inst_39069 = inst_39068;
var state_39158__$1 = state_39158;
if(cljs.core.truth_(inst_39069)){
var statearr_39289_41828 = state_39158__$1;
(statearr_39289_41828[(1)] = (27));

} else {
var statearr_39290_41830 = state_39158__$1;
(statearr_39290_41830[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (34))){
var state_39158__$1 = state_39158;
var statearr_39291_41836 = state_39158__$1;
(statearr_39291_41836[(2)] = null);

(statearr_39291_41836[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (17))){
var state_39158__$1 = state_39158;
var statearr_39292_41841 = state_39158__$1;
(statearr_39292_41841[(2)] = null);

(statearr_39292_41841[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (3))){
var inst_39147 = (state_39158[(2)]);
var state_39158__$1 = state_39158;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39158__$1,inst_39147);
} else {
if((state_val_39159 === (12))){
var inst_39044 = (state_39158[(2)]);
var state_39158__$1 = state_39158;
var statearr_39293_41846 = state_39158__$1;
(statearr_39293_41846[(2)] = inst_39044);

(statearr_39293_41846[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (2))){
var state_39158__$1 = state_39158;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39158__$1,(4),ch);
} else {
if((state_val_39159 === (23))){
var state_39158__$1 = state_39158;
var statearr_39295_41847 = state_39158__$1;
(statearr_39295_41847[(2)] = null);

(statearr_39295_41847[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (35))){
var inst_39129 = (state_39158[(2)]);
var state_39158__$1 = state_39158;
var statearr_39301_41852 = state_39158__$1;
(statearr_39301_41852[(2)] = inst_39129);

(statearr_39301_41852[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (19))){
var inst_39008 = (state_39158[(7)]);
var inst_39013 = cljs.core.chunk_first(inst_39008);
var inst_39014 = cljs.core.chunk_rest(inst_39008);
var inst_39015 = cljs.core.count(inst_39013);
var inst_38979 = inst_39014;
var inst_38980 = inst_39013;
var inst_38981 = inst_39015;
var inst_38982 = (0);
var state_39158__$1 = (function (){var statearr_39303 = state_39158;
(statearr_39303[(13)] = inst_38980);

(statearr_39303[(15)] = inst_38981);

(statearr_39303[(16)] = inst_38979);

(statearr_39303[(17)] = inst_38982);

return statearr_39303;
})();
var statearr_39304_41856 = state_39158__$1;
(statearr_39304_41856[(2)] = null);

(statearr_39304_41856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (11))){
var inst_39008 = (state_39158[(7)]);
var inst_38979 = (state_39158[(16)]);
var inst_39008__$1 = cljs.core.seq(inst_38979);
var state_39158__$1 = (function (){var statearr_39306 = state_39158;
(statearr_39306[(7)] = inst_39008__$1);

return statearr_39306;
})();
if(inst_39008__$1){
var statearr_39307_41861 = state_39158__$1;
(statearr_39307_41861[(1)] = (16));

} else {
var statearr_39308_41862 = state_39158__$1;
(statearr_39308_41862[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (9))){
var inst_39046 = (state_39158[(2)]);
var state_39158__$1 = state_39158;
var statearr_39309_41863 = state_39158__$1;
(statearr_39309_41863[(2)] = inst_39046);

(statearr_39309_41863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (5))){
var inst_38976 = cljs.core.deref(cs);
var inst_38977 = cljs.core.seq(inst_38976);
var inst_38979 = inst_38977;
var inst_38980 = null;
var inst_38981 = (0);
var inst_38982 = (0);
var state_39158__$1 = (function (){var statearr_39310 = state_39158;
(statearr_39310[(13)] = inst_38980);

(statearr_39310[(15)] = inst_38981);

(statearr_39310[(16)] = inst_38979);

(statearr_39310[(17)] = inst_38982);

return statearr_39310;
})();
var statearr_39311_41869 = state_39158__$1;
(statearr_39311_41869[(2)] = null);

(statearr_39311_41869[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (14))){
var state_39158__$1 = state_39158;
var statearr_39313_41872 = state_39158__$1;
(statearr_39313_41872[(2)] = null);

(statearr_39313_41872[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (45))){
var inst_39139 = (state_39158[(2)]);
var state_39158__$1 = state_39158;
var statearr_39314_41873 = state_39158__$1;
(statearr_39314_41873[(2)] = inst_39139);

(statearr_39314_41873[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (26))){
var inst_39049 = (state_39158[(27)]);
var inst_39133 = (state_39158[(2)]);
var inst_39135 = cljs.core.seq(inst_39049);
var state_39158__$1 = (function (){var statearr_39316 = state_39158;
(statearr_39316[(29)] = inst_39133);

return statearr_39316;
})();
if(inst_39135){
var statearr_39317_41875 = state_39158__$1;
(statearr_39317_41875[(1)] = (42));

} else {
var statearr_39318_41876 = state_39158__$1;
(statearr_39318_41876[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (16))){
var inst_39008 = (state_39158[(7)]);
var inst_39011 = cljs.core.chunked_seq_QMARK_(inst_39008);
var state_39158__$1 = state_39158;
if(inst_39011){
var statearr_39319_41878 = state_39158__$1;
(statearr_39319_41878[(1)] = (19));

} else {
var statearr_39320_41879 = state_39158__$1;
(statearr_39320_41879[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (38))){
var inst_39125 = (state_39158[(2)]);
var state_39158__$1 = state_39158;
var statearr_39321_41882 = state_39158__$1;
(statearr_39321_41882[(2)] = inst_39125);

(statearr_39321_41882[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (30))){
var state_39158__$1 = state_39158;
var statearr_39322_41883 = state_39158__$1;
(statearr_39322_41883[(2)] = null);

(statearr_39322_41883[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (10))){
var inst_38980 = (state_39158[(13)]);
var inst_38982 = (state_39158[(17)]);
var inst_38993 = cljs.core._nth(inst_38980,inst_38982);
var inst_38994 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38993,(0),null);
var inst_38996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38993,(1),null);
var state_39158__$1 = (function (){var statearr_39326 = state_39158;
(statearr_39326[(24)] = inst_38994);

return statearr_39326;
})();
if(cljs.core.truth_(inst_38996)){
var statearr_39330_41884 = state_39158__$1;
(statearr_39330_41884[(1)] = (13));

} else {
var statearr_39331_41885 = state_39158__$1;
(statearr_39331_41885[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (18))){
var inst_39042 = (state_39158[(2)]);
var state_39158__$1 = state_39158;
var statearr_39332_41886 = state_39158__$1;
(statearr_39332_41886[(2)] = inst_39042);

(statearr_39332_41886[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (42))){
var state_39158__$1 = state_39158;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39158__$1,(45),dchan);
} else {
if((state_val_39159 === (37))){
var inst_39107 = (state_39158[(22)]);
var inst_39096 = (state_39158[(23)]);
var inst_38965 = (state_39158[(12)]);
var inst_39107__$1 = cljs.core.first(inst_39096);
var inst_39108 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_39107__$1,inst_38965,done);
var state_39158__$1 = (function (){var statearr_39335 = state_39158;
(statearr_39335[(22)] = inst_39107__$1);

return statearr_39335;
})();
if(cljs.core.truth_(inst_39108)){
var statearr_39336_41887 = state_39158__$1;
(statearr_39336_41887[(1)] = (39));

} else {
var statearr_39337_41888 = state_39158__$1;
(statearr_39337_41888[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (8))){
var inst_38981 = (state_39158[(15)]);
var inst_38982 = (state_39158[(17)]);
var inst_38984 = (inst_38982 < inst_38981);
var inst_38985 = inst_38984;
var state_39158__$1 = state_39158;
if(cljs.core.truth_(inst_38985)){
var statearr_39342_41890 = state_39158__$1;
(statearr_39342_41890[(1)] = (10));

} else {
var statearr_39343_41894 = state_39158__$1;
(statearr_39343_41894[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__36984__auto__ = null;
var cljs$core$async$mult_$_state_machine__36984__auto____0 = (function (){
var statearr_39349 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39349[(0)] = cljs$core$async$mult_$_state_machine__36984__auto__);

(statearr_39349[(1)] = (1));

return statearr_39349;
});
var cljs$core$async$mult_$_state_machine__36984__auto____1 = (function (state_39158){
while(true){
var ret_value__36985__auto__ = (function (){try{while(true){
var result__36986__auto__ = switch__36983__auto__(state_39158);
if(cljs.core.keyword_identical_QMARK_(result__36986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36986__auto__;
}
break;
}
}catch (e39351){var ex__36987__auto__ = e39351;
var statearr_39352_41895 = state_39158;
(statearr_39352_41895[(2)] = ex__36987__auto__);


if(cljs.core.seq((state_39158[(4)]))){
var statearr_39355_41898 = state_39158;
(statearr_39355_41898[(1)] = cljs.core.first((state_39158[(4)])));

} else {
throw ex__36987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41899 = state_39158;
state_39158 = G__41899;
continue;
} else {
return ret_value__36985__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__36984__auto__ = function(state_39158){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__36984__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__36984__auto____1.call(this,state_39158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__36984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__36984__auto____0;
cljs$core$async$mult_$_state_machine__36984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__36984__auto____1;
return cljs$core$async$mult_$_state_machine__36984__auto__;
})()
})();
var state__37753__auto__ = (function (){var statearr_39357 = f__37752__auto__();
(statearr_39357[(6)] = c__37751__auto___41731);

return statearr_39357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37753__auto__);
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
var G__39360 = arguments.length;
switch (G__39360) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_41904 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_41904(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_41915 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_41915(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_41923 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_41923(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_41925 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_41925(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_41926 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_41926(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___41927 = arguments.length;
var i__4737__auto___41928 = (0);
while(true){
if((i__4737__auto___41928 < len__4736__auto___41927)){
args__4742__auto__.push((arguments[i__4737__auto___41928]));

var G__41929 = (i__4737__auto___41928 + (1));
i__4737__auto___41928 = G__41929;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__39441){
var map__39443 = p__39441;
var map__39443__$1 = (((((!((map__39443 == null))))?(((((map__39443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39443):map__39443);
var opts = map__39443__$1;
var statearr_39449_41930 = state;
(statearr_39449_41930[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_39452_41931 = state;
(statearr_39452_41931[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_39453_41932 = state;
(statearr_39453_41932[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq39423){
var G__39424 = cljs.core.first(seq39423);
var seq39423__$1 = cljs.core.next(seq39423);
var G__39425 = cljs.core.first(seq39423__$1);
var seq39423__$2 = cljs.core.next(seq39423__$1);
var G__39427 = cljs.core.first(seq39423__$2);
var seq39423__$3 = cljs.core.next(seq39423__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39424,G__39425,G__39427,seq39423__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39463 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39463 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta39464){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta39464 = meta39464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39465,meta39464__$1){
var self__ = this;
var _39465__$1 = this;
return (new cljs.core.async.t_cljs$core$async39463(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta39464__$1));
}));

(cljs.core.async.t_cljs$core$async39463.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39465){
var self__ = this;
var _39465__$1 = this;
return self__.meta39464;
}));

(cljs.core.async.t_cljs$core$async39463.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39463.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async39463.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39463.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async39463.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async39463.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async39463.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async39463.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async39463.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta39464","meta39464",1362322524,null)], null);
}));

(cljs.core.async.t_cljs$core$async39463.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39463.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39463");

(cljs.core.async.t_cljs$core$async39463.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async39463");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39463.
 */
cljs.core.async.__GT_t_cljs$core$async39463 = (function cljs$core$async$mix_$___GT_t_cljs$core$async39463(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39464){
return (new cljs.core.async.t_cljs$core$async39463(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39464));
});

}

return (new cljs.core.async.t_cljs$core$async39463(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37751__auto___41953 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37752__auto__ = (function (){var switch__36983__auto__ = (function (state_39654){
var state_val_39655 = (state_39654[(1)]);
if((state_val_39655 === (7))){
var inst_39520 = (state_39654[(2)]);
var state_39654__$1 = state_39654;
var statearr_39657_41958 = state_39654__$1;
(statearr_39657_41958[(2)] = inst_39520);

(statearr_39657_41958[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39655 === (20))){
var inst_39536 = (state_39654[(7)]);
var state_39654__$1 = state_39654;
var statearr_39659_41962 = state_39654__$1;
(statearr_39659_41962[(2)] = inst_39536);

(statearr_39659_41962[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39655 === (27))){
var state_39654__$1 = state_39654;
var statearr_39660_41963 = state_39654__$1;
(statearr_39660_41963[(2)] = null);

(statearr_39660_41963[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39655 === (1))){
var inst_39504 = (state_39654[(8)]);
var inst_39504__$1 = calc_state();
var inst_39508 = (inst_39504__$1 == null);
var inst_39509 = cljs.core.not(inst_39508);
var state_39654__$1 = (function (){var statearr_39661 = state_39654;
(statearr_39661[(8)] = inst_39504__$1);

return statearr_39661;
})();
if(inst_39509){
var statearr_39662_41964 = state_39654__$1;
(statearr_39662_41964[(1)] = (2));

} else {
var statearr_39663_41965 = state_39654__$1;
(statearr_39663_41965[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39655 === (24))){
var inst_39621 = (state_39654[(9)]);
var inst_39588 = (state_39654[(10)]);
var inst_39574 = (state_39654[(11)]);
var inst_39621__$1 = (inst_39574.cljs$core$IFn$_invoke$arity$1 ? inst_39574.cljs$core$IFn$_invoke$arity$1(inst_39588) : inst_39574.call(null,inst_39588));
var state_39654__$1 = (function (){var statearr_39664 = state_39654;
(statearr_39664[(9)] = inst_39621__$1);

return statearr_39664;
})();
if(cljs.core.truth_(inst_39621__$1)){
var statearr_39670_41969 = state_39654__$1;
(statearr_39670_41969[(1)] = (29));

} else {
var statearr_39671_41970 = state_39654__$1;
(statearr_39671_41970[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39655 === (4))){
var inst_39523 = (state_39654[(2)]);
var state_39654__$1 = state_39654;
if(cljs.core.truth_(inst_39523)){
var statearr_39678_41977 = state_39654__$1;
(statearr_39678_41977[(1)] = (8));

} else {
var statearr_39681_41978 = state_39654__$1;
(statearr_39681_41978[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39655 === (15))){
var inst_39564 = (state_39654[(2)]);
var state_39654__$1 = state_39654;
if(cljs.core.truth_(inst_39564)){
var statearr_39688_41979 = state_39654__$1;
(statearr_39688_41979[(1)] = (19));

} else {
var statearr_39693_41980 = state_39654__$1;
(statearr_39693_41980[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39655 === (21))){
var inst_39573 = (state_39654[(12)]);
var inst_39573__$1 = (state_39654[(2)]);
var inst_39574 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39573__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39575 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39573__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39577 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39573__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_39654__$1 = (function (){var statearr_39694 = state_39654;
(statearr_39694[(12)] = inst_39573__$1);

(statearr_39694[(13)] = inst_39575);

(statearr_39694[(11)] = inst_39574);

return statearr_39694;
})();
return cljs.core.async.ioc_alts_BANG_(state_39654__$1,(22),inst_39577);
} else {
if((state_val_39655 === (31))){
var inst_39636 = (state_39654[(2)]);
var state_39654__$1 = state_39654;
if(cljs.core.truth_(inst_39636)){
var statearr_39699_41987 = state_39654__$1;
(statearr_39699_41987[(1)] = (32));

} else {
var statearr_39701_41988 = state_39654__$1;
(statearr_39701_41988[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39655 === (32))){
var inst_39587 = (state_39654[(14)]);
var state_39654__$1 = state_39654;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39654__$1,(35),out,inst_39587);
} else {
if((state_val_39655 === (33))){
var inst_39573 = (state_39654[(12)]);
var inst_39536 = inst_39573;
var state_39654__$1 = (function (){var statearr_39710 = state_39654;
(statearr_39710[(7)] = inst_39536);

return statearr_39710;
})();
var statearr_39714_41991 = state_39654__$1;
(statearr_39714_41991[(2)] = null);

(statearr_39714_41991[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39655 === (13))){
var inst_39536 = (state_39654[(7)]);
var inst_39552 = inst_39536.cljs$lang$protocol_mask$partition0$;
var inst_39553 = (inst_39552 & (64));
var inst_39554 = inst_39536.cljs$core$ISeq$;
var inst_39555 = (cljs.core.PROTOCOL_SENTINEL === inst_39554);
var inst_39556 = ((inst_39553) || (inst_39555));
var state_39654__$1 = state_39654;
if(cljs.core.truth_(inst_39556)){
var statearr_39718_41995 = state_39654__$1;
(statearr_39718_41995[(1)] = (16));

} else {
var statearr_39721_41997 = state_39654__$1;
(statearr_39721_41997[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39655 === (22))){
var inst_39588 = (state_39654[(10)]);
var inst_39587 = (state_39654[(14)]);
var inst_39586 = (state_39654[(2)]);
var inst_39587__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39586,(0),null);
var inst_39588__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39586,(1),null);
var inst_39589 = (inst_39587__$1 == null);
var inst_39590 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39588__$1,change);
var inst_39592 = ((inst_39589) || (inst_39590));
var state_39654__$1 = (function (){var statearr_39726 = state_39654;
(statearr_39726[(10)] = inst_39588__$1);

(statearr_39726[(14)] = inst_39587__$1);

return statearr_39726;
})();
if(cljs.core.truth_(inst_39592)){
var statearr_39729_42006 = state_39654__$1;
(statearr_39729_42006[(1)] = (23));

} else {
var statearr_39730_42007 = state_39654__$1;
(statearr_39730_42007[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39655 === (36))){
var inst_39573 = (state_39654[(12)]);
var inst_39536 = inst_39573;
var state_39654__$1 = (function (){var statearr_39732 = state_39654;
(statearr_39732[(7)] = inst_39536);

return statearr_39732;
})();
var statearr_39733_42008 = state_39654__$1;
(statearr_39733_42008[(2)] = null);

(statearr_39733_42008[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39655 === (29))){
var inst_39621 = (state_39654[(9)]);
var state_39654__$1 = state_39654;
var statearr_39734_42009 = state_39654__$1;
(statearr_39734_42009[(2)] = inst_39621);

(statearr_39734_42009[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39655 === (6))){
var state_39654__$1 = state_39654;
var statearr_39738_42010 = state_39654__$1;
(statearr_39738_42010[(2)] = false);

(statearr_39738_42010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39655 === (28))){
var inst_39604 = (state_39654[(2)]);
var inst_39605 = calc_state();
var inst_39536 = inst_39605;
var state_39654__$1 = (function (){var statearr_39742 = state_39654;
(statearr_39742[(15)] = inst_39604);

(statearr_39742[(7)] = inst_39536);

return statearr_39742;
})();
var statearr_39743_42011 = state_39654__$1;
(statearr_39743_42011[(2)] = null);

(statearr_39743_42011[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39655 === (25))){
var inst_39650 = (state_39654[(2)]);
var state_39654__$1 = state_39654;
var statearr_39744_42012 = state_39654__$1;
(statearr_39744_42012[(2)] = inst_39650);

(statearr_39744_42012[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39655 === (34))){
var inst_39648 = (state_39654[(2)]);
var state_39654__$1 = state_39654;
var statearr_39768_42013 = state_39654__$1;
(statearr_39768_42013[(2)] = inst_39648);

(statearr_39768_42013[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39655 === (17))){
var state_39654__$1 = state_39654;
var statearr_39769_42017 = state_39654__$1;
(statearr_39769_42017[(2)] = false);

(statearr_39769_42017[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39655 === (3))){
var state_39654__$1 = state_39654;
var statearr_39772_42018 = state_39654__$1;
(statearr_39772_42018[(2)] = false);

(statearr_39772_42018[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39655 === (12))){
var inst_39652 = (state_39654[(2)]);
var state_39654__$1 = state_39654;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39654__$1,inst_39652);
} else {
if((state_val_39655 === (2))){
var inst_39504 = (state_39654[(8)]);
var inst_39512 = inst_39504.cljs$lang$protocol_mask$partition0$;
var inst_39513 = (inst_39512 & (64));
var inst_39514 = inst_39504.cljs$core$ISeq$;
var inst_39515 = (cljs.core.PROTOCOL_SENTINEL === inst_39514);
var inst_39516 = ((inst_39513) || (inst_39515));
var state_39654__$1 = state_39654;
if(cljs.core.truth_(inst_39516)){
var statearr_39782_42021 = state_39654__$1;
(statearr_39782_42021[(1)] = (5));

} else {
var statearr_39783_42022 = state_39654__$1;
(statearr_39783_42022[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39655 === (23))){
var inst_39587 = (state_39654[(14)]);
var inst_39599 = (inst_39587 == null);
var state_39654__$1 = state_39654;
if(cljs.core.truth_(inst_39599)){
var statearr_39785_42024 = state_39654__$1;
(statearr_39785_42024[(1)] = (26));

} else {
var statearr_39786_42025 = state_39654__$1;
(statearr_39786_42025[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39655 === (35))){
var inst_39639 = (state_39654[(2)]);
var state_39654__$1 = state_39654;
if(cljs.core.truth_(inst_39639)){
var statearr_39794_42030 = state_39654__$1;
(statearr_39794_42030[(1)] = (36));

} else {
var statearr_39795_42031 = state_39654__$1;
(statearr_39795_42031[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39655 === (19))){
var inst_39536 = (state_39654[(7)]);
var inst_39570 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_39536);
var state_39654__$1 = state_39654;
var statearr_39796_42034 = state_39654__$1;
(statearr_39796_42034[(2)] = inst_39570);

(statearr_39796_42034[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39655 === (11))){
var inst_39536 = (state_39654[(7)]);
var inst_39545 = (inst_39536 == null);
var inst_39548 = cljs.core.not(inst_39545);
var state_39654__$1 = state_39654;
if(inst_39548){
var statearr_39797_42039 = state_39654__$1;
(statearr_39797_42039[(1)] = (13));

} else {
var statearr_39798_42041 = state_39654__$1;
(statearr_39798_42041[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39655 === (9))){
var inst_39504 = (state_39654[(8)]);
var state_39654__$1 = state_39654;
var statearr_39800_42042 = state_39654__$1;
(statearr_39800_42042[(2)] = inst_39504);

(statearr_39800_42042[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39655 === (5))){
var state_39654__$1 = state_39654;
var statearr_39801_42044 = state_39654__$1;
(statearr_39801_42044[(2)] = true);

(statearr_39801_42044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39655 === (14))){
var state_39654__$1 = state_39654;
var statearr_39802_42046 = state_39654__$1;
(statearr_39802_42046[(2)] = false);

(statearr_39802_42046[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39655 === (26))){
var inst_39588 = (state_39654[(10)]);
var inst_39601 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_39588);
var state_39654__$1 = state_39654;
var statearr_39813_42047 = state_39654__$1;
(statearr_39813_42047[(2)] = inst_39601);

(statearr_39813_42047[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39655 === (16))){
var state_39654__$1 = state_39654;
var statearr_39816_42050 = state_39654__$1;
(statearr_39816_42050[(2)] = true);

(statearr_39816_42050[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39655 === (38))){
var inst_39644 = (state_39654[(2)]);
var state_39654__$1 = state_39654;
var statearr_39819_42053 = state_39654__$1;
(statearr_39819_42053[(2)] = inst_39644);

(statearr_39819_42053[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39655 === (30))){
var inst_39588 = (state_39654[(10)]);
var inst_39575 = (state_39654[(13)]);
var inst_39574 = (state_39654[(11)]);
var inst_39631 = cljs.core.empty_QMARK_(inst_39574);
var inst_39632 = (inst_39575.cljs$core$IFn$_invoke$arity$1 ? inst_39575.cljs$core$IFn$_invoke$arity$1(inst_39588) : inst_39575.call(null,inst_39588));
var inst_39633 = cljs.core.not(inst_39632);
var inst_39634 = ((inst_39631) && (inst_39633));
var state_39654__$1 = state_39654;
var statearr_39820_42058 = state_39654__$1;
(statearr_39820_42058[(2)] = inst_39634);

(statearr_39820_42058[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39655 === (10))){
var inst_39504 = (state_39654[(8)]);
var inst_39528 = (state_39654[(2)]);
var inst_39532 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39528,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39534 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39528,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39535 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39528,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_39536 = inst_39504;
var state_39654__$1 = (function (){var statearr_39824 = state_39654;
(statearr_39824[(16)] = inst_39534);

(statearr_39824[(17)] = inst_39532);

(statearr_39824[(18)] = inst_39535);

(statearr_39824[(7)] = inst_39536);

return statearr_39824;
})();
var statearr_39825_42065 = state_39654__$1;
(statearr_39825_42065[(2)] = null);

(statearr_39825_42065[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39655 === (18))){
var inst_39561 = (state_39654[(2)]);
var state_39654__$1 = state_39654;
var statearr_39826_42068 = state_39654__$1;
(statearr_39826_42068[(2)] = inst_39561);

(statearr_39826_42068[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39655 === (37))){
var state_39654__$1 = state_39654;
var statearr_39827_42070 = state_39654__$1;
(statearr_39827_42070[(2)] = null);

(statearr_39827_42070[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39655 === (8))){
var inst_39504 = (state_39654[(8)]);
var inst_39525 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_39504);
var state_39654__$1 = state_39654;
var statearr_39828_42074 = state_39654__$1;
(statearr_39828_42074[(2)] = inst_39525);

(statearr_39828_42074[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__36984__auto__ = null;
var cljs$core$async$mix_$_state_machine__36984__auto____0 = (function (){
var statearr_39829 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39829[(0)] = cljs$core$async$mix_$_state_machine__36984__auto__);

(statearr_39829[(1)] = (1));

return statearr_39829;
});
var cljs$core$async$mix_$_state_machine__36984__auto____1 = (function (state_39654){
while(true){
var ret_value__36985__auto__ = (function (){try{while(true){
var result__36986__auto__ = switch__36983__auto__(state_39654);
if(cljs.core.keyword_identical_QMARK_(result__36986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36986__auto__;
}
break;
}
}catch (e39833){var ex__36987__auto__ = e39833;
var statearr_39834_42078 = state_39654;
(statearr_39834_42078[(2)] = ex__36987__auto__);


if(cljs.core.seq((state_39654[(4)]))){
var statearr_39836_42079 = state_39654;
(statearr_39836_42079[(1)] = cljs.core.first((state_39654[(4)])));

} else {
throw ex__36987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42081 = state_39654;
state_39654 = G__42081;
continue;
} else {
return ret_value__36985__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__36984__auto__ = function(state_39654){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__36984__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__36984__auto____1.call(this,state_39654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__36984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__36984__auto____0;
cljs$core$async$mix_$_state_machine__36984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__36984__auto____1;
return cljs$core$async$mix_$_state_machine__36984__auto__;
})()
})();
var state__37753__auto__ = (function (){var statearr_39837 = f__37752__auto__();
(statearr_39837[(6)] = c__37751__auto___41953);

return statearr_39837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37753__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_42086 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_42086(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_42091 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_42091(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_42097 = (function() {
var G__42098 = null;
var G__42098__1 = (function (p){
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
var G__42098__2 = (function (p,v){
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
G__42098 = function(p,v){
switch(arguments.length){
case 1:
return G__42098__1.call(this,p);
case 2:
return G__42098__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42098.cljs$core$IFn$_invoke$arity$1 = G__42098__1;
G__42098.cljs$core$IFn$_invoke$arity$2 = G__42098__2;
return G__42098;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__39892 = arguments.length;
switch (G__39892) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_42097(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_42097(p,v);
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
var G__39914 = arguments.length;
switch (G__39914) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__39909_SHARP_){
if(cljs.core.truth_((p1__39909_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__39909_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__39909_SHARP_.call(null,topic)))){
return p1__39909_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__39909_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39922 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39922 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta39923){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta39923 = meta39923;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39924,meta39923__$1){
var self__ = this;
var _39924__$1 = this;
return (new cljs.core.async.t_cljs$core$async39922(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta39923__$1));
}));

(cljs.core.async.t_cljs$core$async39922.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39924){
var self__ = this;
var _39924__$1 = this;
return self__.meta39923;
}));

(cljs.core.async.t_cljs$core$async39922.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39922.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async39922.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39922.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async39922.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async39922.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async39922.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async39922.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta39923","meta39923",289162885,null)], null);
}));

(cljs.core.async.t_cljs$core$async39922.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39922.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39922");

(cljs.core.async.t_cljs$core$async39922.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async39922");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39922.
 */
cljs.core.async.__GT_t_cljs$core$async39922 = (function cljs$core$async$__GT_t_cljs$core$async39922(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39923){
return (new cljs.core.async.t_cljs$core$async39922(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39923));
});

}

return (new cljs.core.async.t_cljs$core$async39922(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37751__auto___42137 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37752__auto__ = (function (){var switch__36983__auto__ = (function (state_40041){
var state_val_40042 = (state_40041[(1)]);
if((state_val_40042 === (7))){
var inst_40037 = (state_40041[(2)]);
var state_40041__$1 = state_40041;
var statearr_40057_42142 = state_40041__$1;
(statearr_40057_42142[(2)] = inst_40037);

(statearr_40057_42142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (20))){
var state_40041__$1 = state_40041;
var statearr_40058_42143 = state_40041__$1;
(statearr_40058_42143[(2)] = null);

(statearr_40058_42143[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (1))){
var state_40041__$1 = state_40041;
var statearr_40060_42144 = state_40041__$1;
(statearr_40060_42144[(2)] = null);

(statearr_40060_42144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (24))){
var inst_40014 = (state_40041[(7)]);
var inst_40029 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_40014);
var state_40041__$1 = state_40041;
var statearr_40064_42145 = state_40041__$1;
(statearr_40064_42145[(2)] = inst_40029);

(statearr_40064_42145[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (4))){
var inst_39951 = (state_40041[(8)]);
var inst_39951__$1 = (state_40041[(2)]);
var inst_39955 = (inst_39951__$1 == null);
var state_40041__$1 = (function (){var statearr_40068 = state_40041;
(statearr_40068[(8)] = inst_39951__$1);

return statearr_40068;
})();
if(cljs.core.truth_(inst_39955)){
var statearr_40069_42152 = state_40041__$1;
(statearr_40069_42152[(1)] = (5));

} else {
var statearr_40070_42157 = state_40041__$1;
(statearr_40070_42157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (15))){
var inst_40008 = (state_40041[(2)]);
var state_40041__$1 = state_40041;
var statearr_40073_42158 = state_40041__$1;
(statearr_40073_42158[(2)] = inst_40008);

(statearr_40073_42158[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (21))){
var inst_40034 = (state_40041[(2)]);
var state_40041__$1 = (function (){var statearr_40074 = state_40041;
(statearr_40074[(9)] = inst_40034);

return statearr_40074;
})();
var statearr_40076_42159 = state_40041__$1;
(statearr_40076_42159[(2)] = null);

(statearr_40076_42159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (13))){
var inst_39983 = (state_40041[(10)]);
var inst_39987 = cljs.core.chunked_seq_QMARK_(inst_39983);
var state_40041__$1 = state_40041;
if(inst_39987){
var statearr_40077_42164 = state_40041__$1;
(statearr_40077_42164[(1)] = (16));

} else {
var statearr_40079_42165 = state_40041__$1;
(statearr_40079_42165[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (22))){
var inst_40026 = (state_40041[(2)]);
var state_40041__$1 = state_40041;
if(cljs.core.truth_(inst_40026)){
var statearr_40082_42168 = state_40041__$1;
(statearr_40082_42168[(1)] = (23));

} else {
var statearr_40084_42169 = state_40041__$1;
(statearr_40084_42169[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (6))){
var inst_39951 = (state_40041[(8)]);
var inst_40014 = (state_40041[(7)]);
var inst_40019 = (state_40041[(11)]);
var inst_40014__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_39951) : topic_fn.call(null,inst_39951));
var inst_40018 = cljs.core.deref(mults);
var inst_40019__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40018,inst_40014__$1);
var state_40041__$1 = (function (){var statearr_40086 = state_40041;
(statearr_40086[(7)] = inst_40014__$1);

(statearr_40086[(11)] = inst_40019__$1);

return statearr_40086;
})();
if(cljs.core.truth_(inst_40019__$1)){
var statearr_40088_42177 = state_40041__$1;
(statearr_40088_42177[(1)] = (19));

} else {
var statearr_40089_42178 = state_40041__$1;
(statearr_40089_42178[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (25))){
var inst_40031 = (state_40041[(2)]);
var state_40041__$1 = state_40041;
var statearr_40091_42182 = state_40041__$1;
(statearr_40091_42182[(2)] = inst_40031);

(statearr_40091_42182[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (17))){
var inst_39983 = (state_40041[(10)]);
var inst_39999 = cljs.core.first(inst_39983);
var inst_40000 = cljs.core.async.muxch_STAR_(inst_39999);
var inst_40001 = cljs.core.async.close_BANG_(inst_40000);
var inst_40002 = cljs.core.next(inst_39983);
var inst_39964 = inst_40002;
var inst_39965 = null;
var inst_39966 = (0);
var inst_39967 = (0);
var state_40041__$1 = (function (){var statearr_40093 = state_40041;
(statearr_40093[(12)] = inst_39966);

(statearr_40093[(13)] = inst_39965);

(statearr_40093[(14)] = inst_39964);

(statearr_40093[(15)] = inst_40001);

(statearr_40093[(16)] = inst_39967);

return statearr_40093;
})();
var statearr_40094_42188 = state_40041__$1;
(statearr_40094_42188[(2)] = null);

(statearr_40094_42188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (3))){
var inst_40039 = (state_40041[(2)]);
var state_40041__$1 = state_40041;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40041__$1,inst_40039);
} else {
if((state_val_40042 === (12))){
var inst_40010 = (state_40041[(2)]);
var state_40041__$1 = state_40041;
var statearr_40095_42192 = state_40041__$1;
(statearr_40095_42192[(2)] = inst_40010);

(statearr_40095_42192[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (2))){
var state_40041__$1 = state_40041;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40041__$1,(4),ch);
} else {
if((state_val_40042 === (23))){
var state_40041__$1 = state_40041;
var statearr_40099_42193 = state_40041__$1;
(statearr_40099_42193[(2)] = null);

(statearr_40099_42193[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (19))){
var inst_39951 = (state_40041[(8)]);
var inst_40019 = (state_40041[(11)]);
var inst_40024 = cljs.core.async.muxch_STAR_(inst_40019);
var state_40041__$1 = state_40041;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40041__$1,(22),inst_40024,inst_39951);
} else {
if((state_val_40042 === (11))){
var inst_39983 = (state_40041[(10)]);
var inst_39964 = (state_40041[(14)]);
var inst_39983__$1 = cljs.core.seq(inst_39964);
var state_40041__$1 = (function (){var statearr_40102 = state_40041;
(statearr_40102[(10)] = inst_39983__$1);

return statearr_40102;
})();
if(inst_39983__$1){
var statearr_40103_42197 = state_40041__$1;
(statearr_40103_42197[(1)] = (13));

} else {
var statearr_40104_42202 = state_40041__$1;
(statearr_40104_42202[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (9))){
var inst_40012 = (state_40041[(2)]);
var state_40041__$1 = state_40041;
var statearr_40105_42204 = state_40041__$1;
(statearr_40105_42204[(2)] = inst_40012);

(statearr_40105_42204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (5))){
var inst_39961 = cljs.core.deref(mults);
var inst_39962 = cljs.core.vals(inst_39961);
var inst_39963 = cljs.core.seq(inst_39962);
var inst_39964 = inst_39963;
var inst_39965 = null;
var inst_39966 = (0);
var inst_39967 = (0);
var state_40041__$1 = (function (){var statearr_40110 = state_40041;
(statearr_40110[(12)] = inst_39966);

(statearr_40110[(13)] = inst_39965);

(statearr_40110[(14)] = inst_39964);

(statearr_40110[(16)] = inst_39967);

return statearr_40110;
})();
var statearr_40111_42208 = state_40041__$1;
(statearr_40111_42208[(2)] = null);

(statearr_40111_42208[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (14))){
var state_40041__$1 = state_40041;
var statearr_40118_42209 = state_40041__$1;
(statearr_40118_42209[(2)] = null);

(statearr_40118_42209[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (16))){
var inst_39983 = (state_40041[(10)]);
var inst_39989 = cljs.core.chunk_first(inst_39983);
var inst_39990 = cljs.core.chunk_rest(inst_39983);
var inst_39996 = cljs.core.count(inst_39989);
var inst_39964 = inst_39990;
var inst_39965 = inst_39989;
var inst_39966 = inst_39996;
var inst_39967 = (0);
var state_40041__$1 = (function (){var statearr_40122 = state_40041;
(statearr_40122[(12)] = inst_39966);

(statearr_40122[(13)] = inst_39965);

(statearr_40122[(14)] = inst_39964);

(statearr_40122[(16)] = inst_39967);

return statearr_40122;
})();
var statearr_40125_42221 = state_40041__$1;
(statearr_40125_42221[(2)] = null);

(statearr_40125_42221[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (10))){
var inst_39966 = (state_40041[(12)]);
var inst_39965 = (state_40041[(13)]);
var inst_39964 = (state_40041[(14)]);
var inst_39967 = (state_40041[(16)]);
var inst_39974 = cljs.core._nth(inst_39965,inst_39967);
var inst_39975 = cljs.core.async.muxch_STAR_(inst_39974);
var inst_39976 = cljs.core.async.close_BANG_(inst_39975);
var inst_39979 = (inst_39967 + (1));
var tmp40113 = inst_39966;
var tmp40114 = inst_39965;
var tmp40115 = inst_39964;
var inst_39964__$1 = tmp40115;
var inst_39965__$1 = tmp40114;
var inst_39966__$1 = tmp40113;
var inst_39967__$1 = inst_39979;
var state_40041__$1 = (function (){var statearr_40132 = state_40041;
(statearr_40132[(12)] = inst_39966__$1);

(statearr_40132[(17)] = inst_39976);

(statearr_40132[(13)] = inst_39965__$1);

(statearr_40132[(14)] = inst_39964__$1);

(statearr_40132[(16)] = inst_39967__$1);

return statearr_40132;
})();
var statearr_40134_42227 = state_40041__$1;
(statearr_40134_42227[(2)] = null);

(statearr_40134_42227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (18))){
var inst_40005 = (state_40041[(2)]);
var state_40041__$1 = state_40041;
var statearr_40136_42230 = state_40041__$1;
(statearr_40136_42230[(2)] = inst_40005);

(statearr_40136_42230[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (8))){
var inst_39966 = (state_40041[(12)]);
var inst_39967 = (state_40041[(16)]);
var inst_39971 = (inst_39967 < inst_39966);
var inst_39972 = inst_39971;
var state_40041__$1 = state_40041;
if(cljs.core.truth_(inst_39972)){
var statearr_40137_42231 = state_40041__$1;
(statearr_40137_42231[(1)] = (10));

} else {
var statearr_40138_42232 = state_40041__$1;
(statearr_40138_42232[(1)] = (11));

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
var cljs$core$async$state_machine__36984__auto__ = null;
var cljs$core$async$state_machine__36984__auto____0 = (function (){
var statearr_40147 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40147[(0)] = cljs$core$async$state_machine__36984__auto__);

(statearr_40147[(1)] = (1));

return statearr_40147;
});
var cljs$core$async$state_machine__36984__auto____1 = (function (state_40041){
while(true){
var ret_value__36985__auto__ = (function (){try{while(true){
var result__36986__auto__ = switch__36983__auto__(state_40041);
if(cljs.core.keyword_identical_QMARK_(result__36986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36986__auto__;
}
break;
}
}catch (e40150){var ex__36987__auto__ = e40150;
var statearr_40151_42239 = state_40041;
(statearr_40151_42239[(2)] = ex__36987__auto__);


if(cljs.core.seq((state_40041[(4)]))){
var statearr_40152_42241 = state_40041;
(statearr_40152_42241[(1)] = cljs.core.first((state_40041[(4)])));

} else {
throw ex__36987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42244 = state_40041;
state_40041 = G__42244;
continue;
} else {
return ret_value__36985__auto__;
}
break;
}
});
cljs$core$async$state_machine__36984__auto__ = function(state_40041){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36984__auto____1.call(this,state_40041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36984__auto____0;
cljs$core$async$state_machine__36984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36984__auto____1;
return cljs$core$async$state_machine__36984__auto__;
})()
})();
var state__37753__auto__ = (function (){var statearr_40157 = f__37752__auto__();
(statearr_40157[(6)] = c__37751__auto___42137);

return statearr_40157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37753__auto__);
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
var G__40172 = arguments.length;
switch (G__40172) {
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
var G__40189 = arguments.length;
switch (G__40189) {
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
var G__40202 = arguments.length;
switch (G__40202) {
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
var c__37751__auto___42272 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37752__auto__ = (function (){var switch__36983__auto__ = (function (state_40268){
var state_val_40269 = (state_40268[(1)]);
if((state_val_40269 === (7))){
var state_40268__$1 = state_40268;
var statearr_40273_42273 = state_40268__$1;
(statearr_40273_42273[(2)] = null);

(statearr_40273_42273[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40269 === (1))){
var state_40268__$1 = state_40268;
var statearr_40274_42274 = state_40268__$1;
(statearr_40274_42274[(2)] = null);

(statearr_40274_42274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40269 === (4))){
var inst_40214 = (state_40268[(7)]);
var inst_40213 = (state_40268[(8)]);
var inst_40220 = (inst_40214 < inst_40213);
var state_40268__$1 = state_40268;
if(cljs.core.truth_(inst_40220)){
var statearr_40276_42285 = state_40268__$1;
(statearr_40276_42285[(1)] = (6));

} else {
var statearr_40277_42286 = state_40268__$1;
(statearr_40277_42286[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40269 === (15))){
var inst_40254 = (state_40268[(9)]);
var inst_40259 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_40254);
var state_40268__$1 = state_40268;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40268__$1,(17),out,inst_40259);
} else {
if((state_val_40269 === (13))){
var inst_40254 = (state_40268[(9)]);
var inst_40254__$1 = (state_40268[(2)]);
var inst_40255 = cljs.core.some(cljs.core.nil_QMARK_,inst_40254__$1);
var state_40268__$1 = (function (){var statearr_40281 = state_40268;
(statearr_40281[(9)] = inst_40254__$1);

return statearr_40281;
})();
if(cljs.core.truth_(inst_40255)){
var statearr_40283_42302 = state_40268__$1;
(statearr_40283_42302[(1)] = (14));

} else {
var statearr_40286_42303 = state_40268__$1;
(statearr_40286_42303[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40269 === (6))){
var state_40268__$1 = state_40268;
var statearr_40287_42311 = state_40268__$1;
(statearr_40287_42311[(2)] = null);

(statearr_40287_42311[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40269 === (17))){
var inst_40261 = (state_40268[(2)]);
var state_40268__$1 = (function (){var statearr_40294 = state_40268;
(statearr_40294[(10)] = inst_40261);

return statearr_40294;
})();
var statearr_40295_42322 = state_40268__$1;
(statearr_40295_42322[(2)] = null);

(statearr_40295_42322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40269 === (3))){
var inst_40266 = (state_40268[(2)]);
var state_40268__$1 = state_40268;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40268__$1,inst_40266);
} else {
if((state_val_40269 === (12))){
var _ = (function (){var statearr_40301 = state_40268;
(statearr_40301[(4)] = cljs.core.rest((state_40268[(4)])));

return statearr_40301;
})();
var state_40268__$1 = state_40268;
var ex40292 = (state_40268__$1[(2)]);
var statearr_40302_42326 = state_40268__$1;
(statearr_40302_42326[(5)] = ex40292);


if((ex40292 instanceof Object)){
var statearr_40312_42327 = state_40268__$1;
(statearr_40312_42327[(1)] = (11));

(statearr_40312_42327[(5)] = null);

} else {
throw ex40292;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40269 === (2))){
var inst_40211 = cljs.core.reset_BANG_(dctr,cnt);
var inst_40213 = cnt;
var inst_40214 = (0);
var state_40268__$1 = (function (){var statearr_40320 = state_40268;
(statearr_40320[(7)] = inst_40214);

(statearr_40320[(11)] = inst_40211);

(statearr_40320[(8)] = inst_40213);

return statearr_40320;
})();
var statearr_40321_42329 = state_40268__$1;
(statearr_40321_42329[(2)] = null);

(statearr_40321_42329[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40269 === (11))){
var inst_40229 = (state_40268[(2)]);
var inst_40230 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_40268__$1 = (function (){var statearr_40322 = state_40268;
(statearr_40322[(12)] = inst_40229);

return statearr_40322;
})();
var statearr_40323_42337 = state_40268__$1;
(statearr_40323_42337[(2)] = inst_40230);

(statearr_40323_42337[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40269 === (9))){
var inst_40214 = (state_40268[(7)]);
var _ = (function (){var statearr_40327 = state_40268;
(statearr_40327[(4)] = cljs.core.cons((12),(state_40268[(4)])));

return statearr_40327;
})();
var inst_40238 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_40214) : chs__$1.call(null,inst_40214));
var inst_40241 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_40214) : done.call(null,inst_40214));
var inst_40242 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_40238,inst_40241);
var ___$1 = (function (){var statearr_40328 = state_40268;
(statearr_40328[(4)] = cljs.core.rest((state_40268[(4)])));

return statearr_40328;
})();
var state_40268__$1 = state_40268;
var statearr_40332_42345 = state_40268__$1;
(statearr_40332_42345[(2)] = inst_40242);

(statearr_40332_42345[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40269 === (5))){
var inst_40252 = (state_40268[(2)]);
var state_40268__$1 = (function (){var statearr_40336 = state_40268;
(statearr_40336[(13)] = inst_40252);

return statearr_40336;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40268__$1,(13),dchan);
} else {
if((state_val_40269 === (14))){
var inst_40257 = cljs.core.async.close_BANG_(out);
var state_40268__$1 = state_40268;
var statearr_40337_42349 = state_40268__$1;
(statearr_40337_42349[(2)] = inst_40257);

(statearr_40337_42349[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40269 === (16))){
var inst_40264 = (state_40268[(2)]);
var state_40268__$1 = state_40268;
var statearr_40341_42356 = state_40268__$1;
(statearr_40341_42356[(2)] = inst_40264);

(statearr_40341_42356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40269 === (10))){
var inst_40214 = (state_40268[(7)]);
var inst_40245 = (state_40268[(2)]);
var inst_40246 = (inst_40214 + (1));
var inst_40214__$1 = inst_40246;
var state_40268__$1 = (function (){var statearr_40342 = state_40268;
(statearr_40342[(14)] = inst_40245);

(statearr_40342[(7)] = inst_40214__$1);

return statearr_40342;
})();
var statearr_40344_42359 = state_40268__$1;
(statearr_40344_42359[(2)] = null);

(statearr_40344_42359[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40269 === (8))){
var inst_40250 = (state_40268[(2)]);
var state_40268__$1 = state_40268;
var statearr_40345_42368 = state_40268__$1;
(statearr_40345_42368[(2)] = inst_40250);

(statearr_40345_42368[(1)] = (5));


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
var cljs$core$async$state_machine__36984__auto__ = null;
var cljs$core$async$state_machine__36984__auto____0 = (function (){
var statearr_40346 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40346[(0)] = cljs$core$async$state_machine__36984__auto__);

(statearr_40346[(1)] = (1));

return statearr_40346;
});
var cljs$core$async$state_machine__36984__auto____1 = (function (state_40268){
while(true){
var ret_value__36985__auto__ = (function (){try{while(true){
var result__36986__auto__ = switch__36983__auto__(state_40268);
if(cljs.core.keyword_identical_QMARK_(result__36986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36986__auto__;
}
break;
}
}catch (e40348){var ex__36987__auto__ = e40348;
var statearr_40350_42374 = state_40268;
(statearr_40350_42374[(2)] = ex__36987__auto__);


if(cljs.core.seq((state_40268[(4)]))){
var statearr_40351_42375 = state_40268;
(statearr_40351_42375[(1)] = cljs.core.first((state_40268[(4)])));

} else {
throw ex__36987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42377 = state_40268;
state_40268 = G__42377;
continue;
} else {
return ret_value__36985__auto__;
}
break;
}
});
cljs$core$async$state_machine__36984__auto__ = function(state_40268){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36984__auto____1.call(this,state_40268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36984__auto____0;
cljs$core$async$state_machine__36984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36984__auto____1;
return cljs$core$async$state_machine__36984__auto__;
})()
})();
var state__37753__auto__ = (function (){var statearr_40354 = f__37752__auto__();
(statearr_40354[(6)] = c__37751__auto___42272);

return statearr_40354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37753__auto__);
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
var G__40366 = arguments.length;
switch (G__40366) {
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
var c__37751__auto___42384 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37752__auto__ = (function (){var switch__36983__auto__ = (function (state_40433){
var state_val_40437 = (state_40433[(1)]);
if((state_val_40437 === (7))){
var inst_40383 = (state_40433[(7)]);
var inst_40381 = (state_40433[(8)]);
var inst_40381__$1 = (state_40433[(2)]);
var inst_40383__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40381__$1,(0),null);
var inst_40384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40381__$1,(1),null);
var inst_40385 = (inst_40383__$1 == null);
var state_40433__$1 = (function (){var statearr_40444 = state_40433;
(statearr_40444[(7)] = inst_40383__$1);

(statearr_40444[(9)] = inst_40384);

(statearr_40444[(8)] = inst_40381__$1);

return statearr_40444;
})();
if(cljs.core.truth_(inst_40385)){
var statearr_40448_42388 = state_40433__$1;
(statearr_40448_42388[(1)] = (8));

} else {
var statearr_40449_42389 = state_40433__$1;
(statearr_40449_42389[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40437 === (1))){
var inst_40369 = cljs.core.vec(chs);
var inst_40371 = inst_40369;
var state_40433__$1 = (function (){var statearr_40450 = state_40433;
(statearr_40450[(10)] = inst_40371);

return statearr_40450;
})();
var statearr_40451_42393 = state_40433__$1;
(statearr_40451_42393[(2)] = null);

(statearr_40451_42393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40437 === (4))){
var inst_40371 = (state_40433[(10)]);
var state_40433__$1 = state_40433;
return cljs.core.async.ioc_alts_BANG_(state_40433__$1,(7),inst_40371);
} else {
if((state_val_40437 === (6))){
var inst_40414 = (state_40433[(2)]);
var state_40433__$1 = state_40433;
var statearr_40455_42394 = state_40433__$1;
(statearr_40455_42394[(2)] = inst_40414);

(statearr_40455_42394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40437 === (3))){
var inst_40416 = (state_40433[(2)]);
var state_40433__$1 = state_40433;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40433__$1,inst_40416);
} else {
if((state_val_40437 === (2))){
var inst_40371 = (state_40433[(10)]);
var inst_40374 = cljs.core.count(inst_40371);
var inst_40375 = (inst_40374 > (0));
var state_40433__$1 = state_40433;
if(cljs.core.truth_(inst_40375)){
var statearr_40458_42398 = state_40433__$1;
(statearr_40458_42398[(1)] = (4));

} else {
var statearr_40459_42400 = state_40433__$1;
(statearr_40459_42400[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40437 === (11))){
var inst_40371 = (state_40433[(10)]);
var inst_40401 = (state_40433[(2)]);
var tmp40456 = inst_40371;
var inst_40371__$1 = tmp40456;
var state_40433__$1 = (function (){var statearr_40461 = state_40433;
(statearr_40461[(11)] = inst_40401);

(statearr_40461[(10)] = inst_40371__$1);

return statearr_40461;
})();
var statearr_40466_42401 = state_40433__$1;
(statearr_40466_42401[(2)] = null);

(statearr_40466_42401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40437 === (9))){
var inst_40383 = (state_40433[(7)]);
var state_40433__$1 = state_40433;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40433__$1,(11),out,inst_40383);
} else {
if((state_val_40437 === (5))){
var inst_40412 = cljs.core.async.close_BANG_(out);
var state_40433__$1 = state_40433;
var statearr_40472_42407 = state_40433__$1;
(statearr_40472_42407[(2)] = inst_40412);

(statearr_40472_42407[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40437 === (10))){
var inst_40406 = (state_40433[(2)]);
var state_40433__$1 = state_40433;
var statearr_40479_42412 = state_40433__$1;
(statearr_40479_42412[(2)] = inst_40406);

(statearr_40479_42412[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40437 === (8))){
var inst_40383 = (state_40433[(7)]);
var inst_40384 = (state_40433[(9)]);
var inst_40371 = (state_40433[(10)]);
var inst_40381 = (state_40433[(8)]);
var inst_40390 = (function (){var cs = inst_40371;
var vec__40377 = inst_40381;
var v = inst_40383;
var c = inst_40384;
return (function (p1__40362_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__40362_SHARP_);
});
})();
var inst_40391 = cljs.core.filterv(inst_40390,inst_40371);
var inst_40371__$1 = inst_40391;
var state_40433__$1 = (function (){var statearr_40490 = state_40433;
(statearr_40490[(10)] = inst_40371__$1);

return statearr_40490;
})();
var statearr_40491_42419 = state_40433__$1;
(statearr_40491_42419[(2)] = null);

(statearr_40491_42419[(1)] = (2));


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
var cljs$core$async$state_machine__36984__auto__ = null;
var cljs$core$async$state_machine__36984__auto____0 = (function (){
var statearr_40493 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40493[(0)] = cljs$core$async$state_machine__36984__auto__);

(statearr_40493[(1)] = (1));

return statearr_40493;
});
var cljs$core$async$state_machine__36984__auto____1 = (function (state_40433){
while(true){
var ret_value__36985__auto__ = (function (){try{while(true){
var result__36986__auto__ = switch__36983__auto__(state_40433);
if(cljs.core.keyword_identical_QMARK_(result__36986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36986__auto__;
}
break;
}
}catch (e40497){var ex__36987__auto__ = e40497;
var statearr_40498_42433 = state_40433;
(statearr_40498_42433[(2)] = ex__36987__auto__);


if(cljs.core.seq((state_40433[(4)]))){
var statearr_40504_42434 = state_40433;
(statearr_40504_42434[(1)] = cljs.core.first((state_40433[(4)])));

} else {
throw ex__36987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42435 = state_40433;
state_40433 = G__42435;
continue;
} else {
return ret_value__36985__auto__;
}
break;
}
});
cljs$core$async$state_machine__36984__auto__ = function(state_40433){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36984__auto____1.call(this,state_40433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36984__auto____0;
cljs$core$async$state_machine__36984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36984__auto____1;
return cljs$core$async$state_machine__36984__auto__;
})()
})();
var state__37753__auto__ = (function (){var statearr_40525 = f__37752__auto__();
(statearr_40525[(6)] = c__37751__auto___42384);

return statearr_40525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37753__auto__);
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
var G__40563 = arguments.length;
switch (G__40563) {
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
var c__37751__auto___42442 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37752__auto__ = (function (){var switch__36983__auto__ = (function (state_40601){
var state_val_40603 = (state_40601[(1)]);
if((state_val_40603 === (7))){
var inst_40582 = (state_40601[(7)]);
var inst_40582__$1 = (state_40601[(2)]);
var inst_40583 = (inst_40582__$1 == null);
var inst_40584 = cljs.core.not(inst_40583);
var state_40601__$1 = (function (){var statearr_40609 = state_40601;
(statearr_40609[(7)] = inst_40582__$1);

return statearr_40609;
})();
if(inst_40584){
var statearr_40610_42443 = state_40601__$1;
(statearr_40610_42443[(1)] = (8));

} else {
var statearr_40611_42444 = state_40601__$1;
(statearr_40611_42444[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40603 === (1))){
var inst_40573 = (0);
var state_40601__$1 = (function (){var statearr_40615 = state_40601;
(statearr_40615[(8)] = inst_40573);

return statearr_40615;
})();
var statearr_40616_42446 = state_40601__$1;
(statearr_40616_42446[(2)] = null);

(statearr_40616_42446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40603 === (4))){
var state_40601__$1 = state_40601;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40601__$1,(7),ch);
} else {
if((state_val_40603 === (6))){
var inst_40595 = (state_40601[(2)]);
var state_40601__$1 = state_40601;
var statearr_40623_42451 = state_40601__$1;
(statearr_40623_42451[(2)] = inst_40595);

(statearr_40623_42451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40603 === (3))){
var inst_40597 = (state_40601[(2)]);
var inst_40598 = cljs.core.async.close_BANG_(out);
var state_40601__$1 = (function (){var statearr_40625 = state_40601;
(statearr_40625[(9)] = inst_40597);

return statearr_40625;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40601__$1,inst_40598);
} else {
if((state_val_40603 === (2))){
var inst_40573 = (state_40601[(8)]);
var inst_40576 = (inst_40573 < n);
var state_40601__$1 = state_40601;
if(cljs.core.truth_(inst_40576)){
var statearr_40629_42453 = state_40601__$1;
(statearr_40629_42453[(1)] = (4));

} else {
var statearr_40630_42454 = state_40601__$1;
(statearr_40630_42454[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40603 === (11))){
var inst_40573 = (state_40601[(8)]);
var inst_40587 = (state_40601[(2)]);
var inst_40588 = (inst_40573 + (1));
var inst_40573__$1 = inst_40588;
var state_40601__$1 = (function (){var statearr_40634 = state_40601;
(statearr_40634[(10)] = inst_40587);

(statearr_40634[(8)] = inst_40573__$1);

return statearr_40634;
})();
var statearr_40637_42458 = state_40601__$1;
(statearr_40637_42458[(2)] = null);

(statearr_40637_42458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40603 === (9))){
var state_40601__$1 = state_40601;
var statearr_40638_42459 = state_40601__$1;
(statearr_40638_42459[(2)] = null);

(statearr_40638_42459[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40603 === (5))){
var state_40601__$1 = state_40601;
var statearr_40646_42460 = state_40601__$1;
(statearr_40646_42460[(2)] = null);

(statearr_40646_42460[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40603 === (10))){
var inst_40592 = (state_40601[(2)]);
var state_40601__$1 = state_40601;
var statearr_40655_42464 = state_40601__$1;
(statearr_40655_42464[(2)] = inst_40592);

(statearr_40655_42464[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40603 === (8))){
var inst_40582 = (state_40601[(7)]);
var state_40601__$1 = state_40601;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40601__$1,(11),out,inst_40582);
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
var cljs$core$async$state_machine__36984__auto__ = null;
var cljs$core$async$state_machine__36984__auto____0 = (function (){
var statearr_40667 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40667[(0)] = cljs$core$async$state_machine__36984__auto__);

(statearr_40667[(1)] = (1));

return statearr_40667;
});
var cljs$core$async$state_machine__36984__auto____1 = (function (state_40601){
while(true){
var ret_value__36985__auto__ = (function (){try{while(true){
var result__36986__auto__ = switch__36983__auto__(state_40601);
if(cljs.core.keyword_identical_QMARK_(result__36986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36986__auto__;
}
break;
}
}catch (e40673){var ex__36987__auto__ = e40673;
var statearr_40674_42469 = state_40601;
(statearr_40674_42469[(2)] = ex__36987__auto__);


if(cljs.core.seq((state_40601[(4)]))){
var statearr_40676_42471 = state_40601;
(statearr_40676_42471[(1)] = cljs.core.first((state_40601[(4)])));

} else {
throw ex__36987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42474 = state_40601;
state_40601 = G__42474;
continue;
} else {
return ret_value__36985__auto__;
}
break;
}
});
cljs$core$async$state_machine__36984__auto__ = function(state_40601){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36984__auto____1.call(this,state_40601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36984__auto____0;
cljs$core$async$state_machine__36984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36984__auto____1;
return cljs$core$async$state_machine__36984__auto__;
})()
})();
var state__37753__auto__ = (function (){var statearr_40677 = f__37752__auto__();
(statearr_40677[(6)] = c__37751__auto___42442);

return statearr_40677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37753__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40681 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40681 = (function (f,ch,meta40682){
this.f = f;
this.ch = ch;
this.meta40682 = meta40682;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40683,meta40682__$1){
var self__ = this;
var _40683__$1 = this;
return (new cljs.core.async.t_cljs$core$async40681(self__.f,self__.ch,meta40682__$1));
}));

(cljs.core.async.t_cljs$core$async40681.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40683){
var self__ = this;
var _40683__$1 = this;
return self__.meta40682;
}));

(cljs.core.async.t_cljs$core$async40681.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40681.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40681.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40681.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40681.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40687 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40687 = (function (f,ch,meta40682,_,fn1,meta40688){
this.f = f;
this.ch = ch;
this.meta40682 = meta40682;
this._ = _;
this.fn1 = fn1;
this.meta40688 = meta40688;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40689,meta40688__$1){
var self__ = this;
var _40689__$1 = this;
return (new cljs.core.async.t_cljs$core$async40687(self__.f,self__.ch,self__.meta40682,self__._,self__.fn1,meta40688__$1));
}));

(cljs.core.async.t_cljs$core$async40687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40689){
var self__ = this;
var _40689__$1 = this;
return self__.meta40688;
}));

(cljs.core.async.t_cljs$core$async40687.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40687.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async40687.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async40687.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__40678_SHARP_){
var G__40698 = (((p1__40678_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__40678_SHARP_) : self__.f.call(null,p1__40678_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__40698) : f1.call(null,G__40698));
});
}));

(cljs.core.async.t_cljs$core$async40687.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40682","meta40682",-2053066306,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async40681","cljs.core.async/t_cljs$core$async40681",-1390224897,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta40688","meta40688",102347732,null)], null);
}));

(cljs.core.async.t_cljs$core$async40687.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40687.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40687");

(cljs.core.async.t_cljs$core$async40687.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async40687");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40687.
 */
cljs.core.async.__GT_t_cljs$core$async40687 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40687(f__$1,ch__$1,meta40682__$1,___$2,fn1__$1,meta40688){
return (new cljs.core.async.t_cljs$core$async40687(f__$1,ch__$1,meta40682__$1,___$2,fn1__$1,meta40688));
});

}

return (new cljs.core.async.t_cljs$core$async40687(self__.f,self__.ch,self__.meta40682,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__40701 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__40701) : self__.f.call(null,G__40701));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async40681.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40681.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async40681.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40682","meta40682",-2053066306,null)], null);
}));

(cljs.core.async.t_cljs$core$async40681.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40681.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40681");

(cljs.core.async.t_cljs$core$async40681.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async40681");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40681.
 */
cljs.core.async.__GT_t_cljs$core$async40681 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40681(f__$1,ch__$1,meta40682){
return (new cljs.core.async.t_cljs$core$async40681(f__$1,ch__$1,meta40682));
});

}

return (new cljs.core.async.t_cljs$core$async40681(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40704 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40704 = (function (f,ch,meta40705){
this.f = f;
this.ch = ch;
this.meta40705 = meta40705;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40706,meta40705__$1){
var self__ = this;
var _40706__$1 = this;
return (new cljs.core.async.t_cljs$core$async40704(self__.f,self__.ch,meta40705__$1));
}));

(cljs.core.async.t_cljs$core$async40704.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40706){
var self__ = this;
var _40706__$1 = this;
return self__.meta40705;
}));

(cljs.core.async.t_cljs$core$async40704.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40704.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40704.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40704.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async40704.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40704.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async40704.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40705","meta40705",2114494191,null)], null);
}));

(cljs.core.async.t_cljs$core$async40704.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40704.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40704");

(cljs.core.async.t_cljs$core$async40704.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async40704");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40704.
 */
cljs.core.async.__GT_t_cljs$core$async40704 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async40704(f__$1,ch__$1,meta40705){
return (new cljs.core.async.t_cljs$core$async40704(f__$1,ch__$1,meta40705));
});

}

return (new cljs.core.async.t_cljs$core$async40704(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40708 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40708 = (function (p,ch,meta40709){
this.p = p;
this.ch = ch;
this.meta40709 = meta40709;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40710,meta40709__$1){
var self__ = this;
var _40710__$1 = this;
return (new cljs.core.async.t_cljs$core$async40708(self__.p,self__.ch,meta40709__$1));
}));

(cljs.core.async.t_cljs$core$async40708.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40710){
var self__ = this;
var _40710__$1 = this;
return self__.meta40709;
}));

(cljs.core.async.t_cljs$core$async40708.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40708.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40708.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40708.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40708.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async40708.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40708.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async40708.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40709","meta40709",-286529668,null)], null);
}));

(cljs.core.async.t_cljs$core$async40708.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40708.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40708");

(cljs.core.async.t_cljs$core$async40708.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async40708");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40708.
 */
cljs.core.async.__GT_t_cljs$core$async40708 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async40708(p__$1,ch__$1,meta40709){
return (new cljs.core.async.t_cljs$core$async40708(p__$1,ch__$1,meta40709));
});

}

return (new cljs.core.async.t_cljs$core$async40708(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__40720 = arguments.length;
switch (G__40720) {
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
var c__37751__auto___42560 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37752__auto__ = (function (){var switch__36983__auto__ = (function (state_40745){
var state_val_40747 = (state_40745[(1)]);
if((state_val_40747 === (7))){
var inst_40741 = (state_40745[(2)]);
var state_40745__$1 = state_40745;
var statearr_40753_42564 = state_40745__$1;
(statearr_40753_42564[(2)] = inst_40741);

(statearr_40753_42564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40747 === (1))){
var state_40745__$1 = state_40745;
var statearr_40755_42565 = state_40745__$1;
(statearr_40755_42565[(2)] = null);

(statearr_40755_42565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40747 === (4))){
var inst_40727 = (state_40745[(7)]);
var inst_40727__$1 = (state_40745[(2)]);
var inst_40728 = (inst_40727__$1 == null);
var state_40745__$1 = (function (){var statearr_40760 = state_40745;
(statearr_40760[(7)] = inst_40727__$1);

return statearr_40760;
})();
if(cljs.core.truth_(inst_40728)){
var statearr_40761_42570 = state_40745__$1;
(statearr_40761_42570[(1)] = (5));

} else {
var statearr_40762_42571 = state_40745__$1;
(statearr_40762_42571[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40747 === (6))){
var inst_40727 = (state_40745[(7)]);
var inst_40732 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_40727) : p.call(null,inst_40727));
var state_40745__$1 = state_40745;
if(cljs.core.truth_(inst_40732)){
var statearr_40763_42573 = state_40745__$1;
(statearr_40763_42573[(1)] = (8));

} else {
var statearr_40764_42574 = state_40745__$1;
(statearr_40764_42574[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40747 === (3))){
var inst_40743 = (state_40745[(2)]);
var state_40745__$1 = state_40745;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40745__$1,inst_40743);
} else {
if((state_val_40747 === (2))){
var state_40745__$1 = state_40745;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40745__$1,(4),ch);
} else {
if((state_val_40747 === (11))){
var inst_40735 = (state_40745[(2)]);
var state_40745__$1 = state_40745;
var statearr_40765_42576 = state_40745__$1;
(statearr_40765_42576[(2)] = inst_40735);

(statearr_40765_42576[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40747 === (9))){
var state_40745__$1 = state_40745;
var statearr_40767_42577 = state_40745__$1;
(statearr_40767_42577[(2)] = null);

(statearr_40767_42577[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40747 === (5))){
var inst_40730 = cljs.core.async.close_BANG_(out);
var state_40745__$1 = state_40745;
var statearr_40772_42578 = state_40745__$1;
(statearr_40772_42578[(2)] = inst_40730);

(statearr_40772_42578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40747 === (10))){
var inst_40738 = (state_40745[(2)]);
var state_40745__$1 = (function (){var statearr_40774 = state_40745;
(statearr_40774[(8)] = inst_40738);

return statearr_40774;
})();
var statearr_40775_42579 = state_40745__$1;
(statearr_40775_42579[(2)] = null);

(statearr_40775_42579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40747 === (8))){
var inst_40727 = (state_40745[(7)]);
var state_40745__$1 = state_40745;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40745__$1,(11),out,inst_40727);
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
var cljs$core$async$state_machine__36984__auto__ = null;
var cljs$core$async$state_machine__36984__auto____0 = (function (){
var statearr_40779 = [null,null,null,null,null,null,null,null,null];
(statearr_40779[(0)] = cljs$core$async$state_machine__36984__auto__);

(statearr_40779[(1)] = (1));

return statearr_40779;
});
var cljs$core$async$state_machine__36984__auto____1 = (function (state_40745){
while(true){
var ret_value__36985__auto__ = (function (){try{while(true){
var result__36986__auto__ = switch__36983__auto__(state_40745);
if(cljs.core.keyword_identical_QMARK_(result__36986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36986__auto__;
}
break;
}
}catch (e40780){var ex__36987__auto__ = e40780;
var statearr_40781_42590 = state_40745;
(statearr_40781_42590[(2)] = ex__36987__auto__);


if(cljs.core.seq((state_40745[(4)]))){
var statearr_40782_42596 = state_40745;
(statearr_40782_42596[(1)] = cljs.core.first((state_40745[(4)])));

} else {
throw ex__36987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42602 = state_40745;
state_40745 = G__42602;
continue;
} else {
return ret_value__36985__auto__;
}
break;
}
});
cljs$core$async$state_machine__36984__auto__ = function(state_40745){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36984__auto____1.call(this,state_40745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36984__auto____0;
cljs$core$async$state_machine__36984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36984__auto____1;
return cljs$core$async$state_machine__36984__auto__;
})()
})();
var state__37753__auto__ = (function (){var statearr_40783 = f__37752__auto__();
(statearr_40783[(6)] = c__37751__auto___42560);

return statearr_40783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37753__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__40785 = arguments.length;
switch (G__40785) {
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
var c__37751__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37752__auto__ = (function (){var switch__36983__auto__ = (function (state_40863){
var state_val_40864 = (state_40863[(1)]);
if((state_val_40864 === (7))){
var inst_40857 = (state_40863[(2)]);
var state_40863__$1 = state_40863;
var statearr_40882_42622 = state_40863__$1;
(statearr_40882_42622[(2)] = inst_40857);

(statearr_40882_42622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40864 === (20))){
var inst_40826 = (state_40863[(7)]);
var inst_40837 = (state_40863[(2)]);
var inst_40838 = cljs.core.next(inst_40826);
var inst_40808 = inst_40838;
var inst_40809 = null;
var inst_40810 = (0);
var inst_40811 = (0);
var state_40863__$1 = (function (){var statearr_40883 = state_40863;
(statearr_40883[(8)] = inst_40811);

(statearr_40883[(9)] = inst_40810);

(statearr_40883[(10)] = inst_40837);

(statearr_40883[(11)] = inst_40808);

(statearr_40883[(12)] = inst_40809);

return statearr_40883;
})();
var statearr_40884_42625 = state_40863__$1;
(statearr_40884_42625[(2)] = null);

(statearr_40884_42625[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40864 === (1))){
var state_40863__$1 = state_40863;
var statearr_40885_42626 = state_40863__$1;
(statearr_40885_42626[(2)] = null);

(statearr_40885_42626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40864 === (4))){
var inst_40797 = (state_40863[(13)]);
var inst_40797__$1 = (state_40863[(2)]);
var inst_40798 = (inst_40797__$1 == null);
var state_40863__$1 = (function (){var statearr_40886 = state_40863;
(statearr_40886[(13)] = inst_40797__$1);

return statearr_40886;
})();
if(cljs.core.truth_(inst_40798)){
var statearr_40887_42637 = state_40863__$1;
(statearr_40887_42637[(1)] = (5));

} else {
var statearr_40888_42638 = state_40863__$1;
(statearr_40888_42638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40864 === (15))){
var state_40863__$1 = state_40863;
var statearr_40894_42639 = state_40863__$1;
(statearr_40894_42639[(2)] = null);

(statearr_40894_42639[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40864 === (21))){
var state_40863__$1 = state_40863;
var statearr_40895_42646 = state_40863__$1;
(statearr_40895_42646[(2)] = null);

(statearr_40895_42646[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40864 === (13))){
var inst_40811 = (state_40863[(8)]);
var inst_40810 = (state_40863[(9)]);
var inst_40808 = (state_40863[(11)]);
var inst_40809 = (state_40863[(12)]);
var inst_40818 = (state_40863[(2)]);
var inst_40819 = (inst_40811 + (1));
var tmp40891 = inst_40810;
var tmp40892 = inst_40808;
var tmp40893 = inst_40809;
var inst_40808__$1 = tmp40892;
var inst_40809__$1 = tmp40893;
var inst_40810__$1 = tmp40891;
var inst_40811__$1 = inst_40819;
var state_40863__$1 = (function (){var statearr_40908 = state_40863;
(statearr_40908[(8)] = inst_40811__$1);

(statearr_40908[(9)] = inst_40810__$1);

(statearr_40908[(11)] = inst_40808__$1);

(statearr_40908[(12)] = inst_40809__$1);

(statearr_40908[(14)] = inst_40818);

return statearr_40908;
})();
var statearr_40909_42647 = state_40863__$1;
(statearr_40909_42647[(2)] = null);

(statearr_40909_42647[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40864 === (22))){
var state_40863__$1 = state_40863;
var statearr_40912_42648 = state_40863__$1;
(statearr_40912_42648[(2)] = null);

(statearr_40912_42648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40864 === (6))){
var inst_40797 = (state_40863[(13)]);
var inst_40806 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_40797) : f.call(null,inst_40797));
var inst_40807 = cljs.core.seq(inst_40806);
var inst_40808 = inst_40807;
var inst_40809 = null;
var inst_40810 = (0);
var inst_40811 = (0);
var state_40863__$1 = (function (){var statearr_40913 = state_40863;
(statearr_40913[(8)] = inst_40811);

(statearr_40913[(9)] = inst_40810);

(statearr_40913[(11)] = inst_40808);

(statearr_40913[(12)] = inst_40809);

return statearr_40913;
})();
var statearr_40914_42649 = state_40863__$1;
(statearr_40914_42649[(2)] = null);

(statearr_40914_42649[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40864 === (17))){
var inst_40826 = (state_40863[(7)]);
var inst_40830 = cljs.core.chunk_first(inst_40826);
var inst_40831 = cljs.core.chunk_rest(inst_40826);
var inst_40832 = cljs.core.count(inst_40830);
var inst_40808 = inst_40831;
var inst_40809 = inst_40830;
var inst_40810 = inst_40832;
var inst_40811 = (0);
var state_40863__$1 = (function (){var statearr_40915 = state_40863;
(statearr_40915[(8)] = inst_40811);

(statearr_40915[(9)] = inst_40810);

(statearr_40915[(11)] = inst_40808);

(statearr_40915[(12)] = inst_40809);

return statearr_40915;
})();
var statearr_40917_42660 = state_40863__$1;
(statearr_40917_42660[(2)] = null);

(statearr_40917_42660[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40864 === (3))){
var inst_40859 = (state_40863[(2)]);
var state_40863__$1 = state_40863;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40863__$1,inst_40859);
} else {
if((state_val_40864 === (12))){
var inst_40847 = (state_40863[(2)]);
var state_40863__$1 = state_40863;
var statearr_40918_42670 = state_40863__$1;
(statearr_40918_42670[(2)] = inst_40847);

(statearr_40918_42670[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40864 === (2))){
var state_40863__$1 = state_40863;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40863__$1,(4),in$);
} else {
if((state_val_40864 === (23))){
var inst_40855 = (state_40863[(2)]);
var state_40863__$1 = state_40863;
var statearr_40919_42673 = state_40863__$1;
(statearr_40919_42673[(2)] = inst_40855);

(statearr_40919_42673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40864 === (19))){
var inst_40842 = (state_40863[(2)]);
var state_40863__$1 = state_40863;
var statearr_40923_42674 = state_40863__$1;
(statearr_40923_42674[(2)] = inst_40842);

(statearr_40923_42674[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40864 === (11))){
var inst_40826 = (state_40863[(7)]);
var inst_40808 = (state_40863[(11)]);
var inst_40826__$1 = cljs.core.seq(inst_40808);
var state_40863__$1 = (function (){var statearr_40924 = state_40863;
(statearr_40924[(7)] = inst_40826__$1);

return statearr_40924;
})();
if(inst_40826__$1){
var statearr_40925_42679 = state_40863__$1;
(statearr_40925_42679[(1)] = (14));

} else {
var statearr_40926_42680 = state_40863__$1;
(statearr_40926_42680[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40864 === (9))){
var inst_40849 = (state_40863[(2)]);
var inst_40850 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_40863__$1 = (function (){var statearr_40927 = state_40863;
(statearr_40927[(15)] = inst_40849);

return statearr_40927;
})();
if(cljs.core.truth_(inst_40850)){
var statearr_40928_42687 = state_40863__$1;
(statearr_40928_42687[(1)] = (21));

} else {
var statearr_40929_42688 = state_40863__$1;
(statearr_40929_42688[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40864 === (5))){
var inst_40800 = cljs.core.async.close_BANG_(out);
var state_40863__$1 = state_40863;
var statearr_40930_42689 = state_40863__$1;
(statearr_40930_42689[(2)] = inst_40800);

(statearr_40930_42689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40864 === (14))){
var inst_40826 = (state_40863[(7)]);
var inst_40828 = cljs.core.chunked_seq_QMARK_(inst_40826);
var state_40863__$1 = state_40863;
if(inst_40828){
var statearr_40931_42690 = state_40863__$1;
(statearr_40931_42690[(1)] = (17));

} else {
var statearr_40932_42691 = state_40863__$1;
(statearr_40932_42691[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40864 === (16))){
var inst_40845 = (state_40863[(2)]);
var state_40863__$1 = state_40863;
var statearr_40933_42692 = state_40863__$1;
(statearr_40933_42692[(2)] = inst_40845);

(statearr_40933_42692[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40864 === (10))){
var inst_40811 = (state_40863[(8)]);
var inst_40809 = (state_40863[(12)]);
var inst_40816 = cljs.core._nth(inst_40809,inst_40811);
var state_40863__$1 = state_40863;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40863__$1,(13),out,inst_40816);
} else {
if((state_val_40864 === (18))){
var inst_40826 = (state_40863[(7)]);
var inst_40835 = cljs.core.first(inst_40826);
var state_40863__$1 = state_40863;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40863__$1,(20),out,inst_40835);
} else {
if((state_val_40864 === (8))){
var inst_40811 = (state_40863[(8)]);
var inst_40810 = (state_40863[(9)]);
var inst_40813 = (inst_40811 < inst_40810);
var inst_40814 = inst_40813;
var state_40863__$1 = state_40863;
if(cljs.core.truth_(inst_40814)){
var statearr_40934_42705 = state_40863__$1;
(statearr_40934_42705[(1)] = (10));

} else {
var statearr_40935_42707 = state_40863__$1;
(statearr_40935_42707[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__36984__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__36984__auto____0 = (function (){
var statearr_40937 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40937[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__36984__auto__);

(statearr_40937[(1)] = (1));

return statearr_40937;
});
var cljs$core$async$mapcat_STAR__$_state_machine__36984__auto____1 = (function (state_40863){
while(true){
var ret_value__36985__auto__ = (function (){try{while(true){
var result__36986__auto__ = switch__36983__auto__(state_40863);
if(cljs.core.keyword_identical_QMARK_(result__36986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36986__auto__;
}
break;
}
}catch (e40938){var ex__36987__auto__ = e40938;
var statearr_40939_42714 = state_40863;
(statearr_40939_42714[(2)] = ex__36987__auto__);


if(cljs.core.seq((state_40863[(4)]))){
var statearr_40940_42718 = state_40863;
(statearr_40940_42718[(1)] = cljs.core.first((state_40863[(4)])));

} else {
throw ex__36987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42721 = state_40863;
state_40863 = G__42721;
continue;
} else {
return ret_value__36985__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__36984__auto__ = function(state_40863){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__36984__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__36984__auto____1.call(this,state_40863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__36984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__36984__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__36984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__36984__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__36984__auto__;
})()
})();
var state__37753__auto__ = (function (){var statearr_40941 = f__37752__auto__();
(statearr_40941[(6)] = c__37751__auto__);

return statearr_40941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37753__auto__);
}));

return c__37751__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__40947 = arguments.length;
switch (G__40947) {
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
var G__40952 = arguments.length;
switch (G__40952) {
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
var G__40955 = arguments.length;
switch (G__40955) {
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
var c__37751__auto___42770 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37752__auto__ = (function (){var switch__36983__auto__ = (function (state_40984){
var state_val_40985 = (state_40984[(1)]);
if((state_val_40985 === (7))){
var inst_40979 = (state_40984[(2)]);
var state_40984__$1 = state_40984;
var statearr_40996_42780 = state_40984__$1;
(statearr_40996_42780[(2)] = inst_40979);

(statearr_40996_42780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40985 === (1))){
var inst_40956 = null;
var state_40984__$1 = (function (){var statearr_40997 = state_40984;
(statearr_40997[(7)] = inst_40956);

return statearr_40997;
})();
var statearr_40999_42789 = state_40984__$1;
(statearr_40999_42789[(2)] = null);

(statearr_40999_42789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40985 === (4))){
var inst_40959 = (state_40984[(8)]);
var inst_40959__$1 = (state_40984[(2)]);
var inst_40962 = (inst_40959__$1 == null);
var inst_40963 = cljs.core.not(inst_40962);
var state_40984__$1 = (function (){var statearr_41000 = state_40984;
(statearr_41000[(8)] = inst_40959__$1);

return statearr_41000;
})();
if(inst_40963){
var statearr_41001_42797 = state_40984__$1;
(statearr_41001_42797[(1)] = (5));

} else {
var statearr_41002_42801 = state_40984__$1;
(statearr_41002_42801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40985 === (6))){
var state_40984__$1 = state_40984;
var statearr_41005_42804 = state_40984__$1;
(statearr_41005_42804[(2)] = null);

(statearr_41005_42804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40985 === (3))){
var inst_40981 = (state_40984[(2)]);
var inst_40982 = cljs.core.async.close_BANG_(out);
var state_40984__$1 = (function (){var statearr_41006 = state_40984;
(statearr_41006[(9)] = inst_40981);

return statearr_41006;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40984__$1,inst_40982);
} else {
if((state_val_40985 === (2))){
var state_40984__$1 = state_40984;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40984__$1,(4),ch);
} else {
if((state_val_40985 === (11))){
var inst_40959 = (state_40984[(8)]);
var inst_40970 = (state_40984[(2)]);
var inst_40956 = inst_40959;
var state_40984__$1 = (function (){var statearr_41009 = state_40984;
(statearr_41009[(10)] = inst_40970);

(statearr_41009[(7)] = inst_40956);

return statearr_41009;
})();
var statearr_41010_42838 = state_40984__$1;
(statearr_41010_42838[(2)] = null);

(statearr_41010_42838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40985 === (9))){
var inst_40959 = (state_40984[(8)]);
var state_40984__$1 = state_40984;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40984__$1,(11),out,inst_40959);
} else {
if((state_val_40985 === (5))){
var inst_40959 = (state_40984[(8)]);
var inst_40956 = (state_40984[(7)]);
var inst_40965 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_40959,inst_40956);
var state_40984__$1 = state_40984;
if(inst_40965){
var statearr_41015_42841 = state_40984__$1;
(statearr_41015_42841[(1)] = (8));

} else {
var statearr_41016_42843 = state_40984__$1;
(statearr_41016_42843[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40985 === (10))){
var inst_40976 = (state_40984[(2)]);
var state_40984__$1 = state_40984;
var statearr_41017_42850 = state_40984__$1;
(statearr_41017_42850[(2)] = inst_40976);

(statearr_41017_42850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40985 === (8))){
var inst_40956 = (state_40984[(7)]);
var tmp41012 = inst_40956;
var inst_40956__$1 = tmp41012;
var state_40984__$1 = (function (){var statearr_41018 = state_40984;
(statearr_41018[(7)] = inst_40956__$1);

return statearr_41018;
})();
var statearr_41019_42856 = state_40984__$1;
(statearr_41019_42856[(2)] = null);

(statearr_41019_42856[(1)] = (2));


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
var cljs$core$async$state_machine__36984__auto__ = null;
var cljs$core$async$state_machine__36984__auto____0 = (function (){
var statearr_41020 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41020[(0)] = cljs$core$async$state_machine__36984__auto__);

(statearr_41020[(1)] = (1));

return statearr_41020;
});
var cljs$core$async$state_machine__36984__auto____1 = (function (state_40984){
while(true){
var ret_value__36985__auto__ = (function (){try{while(true){
var result__36986__auto__ = switch__36983__auto__(state_40984);
if(cljs.core.keyword_identical_QMARK_(result__36986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36986__auto__;
}
break;
}
}catch (e41021){var ex__36987__auto__ = e41021;
var statearr_41022_42874 = state_40984;
(statearr_41022_42874[(2)] = ex__36987__auto__);


if(cljs.core.seq((state_40984[(4)]))){
var statearr_41023_42879 = state_40984;
(statearr_41023_42879[(1)] = cljs.core.first((state_40984[(4)])));

} else {
throw ex__36987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42880 = state_40984;
state_40984 = G__42880;
continue;
} else {
return ret_value__36985__auto__;
}
break;
}
});
cljs$core$async$state_machine__36984__auto__ = function(state_40984){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36984__auto____1.call(this,state_40984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36984__auto____0;
cljs$core$async$state_machine__36984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36984__auto____1;
return cljs$core$async$state_machine__36984__auto__;
})()
})();
var state__37753__auto__ = (function (){var statearr_41024 = f__37752__auto__();
(statearr_41024[(6)] = c__37751__auto___42770);

return statearr_41024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37753__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__41029 = arguments.length;
switch (G__41029) {
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
var c__37751__auto___42885 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37752__auto__ = (function (){var switch__36983__auto__ = (function (state_41074){
var state_val_41075 = (state_41074[(1)]);
if((state_val_41075 === (7))){
var inst_41070 = (state_41074[(2)]);
var state_41074__$1 = state_41074;
var statearr_41076_42887 = state_41074__$1;
(statearr_41076_42887[(2)] = inst_41070);

(statearr_41076_42887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41075 === (1))){
var inst_41036 = (new Array(n));
var inst_41037 = inst_41036;
var inst_41039 = (0);
var state_41074__$1 = (function (){var statearr_41077 = state_41074;
(statearr_41077[(7)] = inst_41037);

(statearr_41077[(8)] = inst_41039);

return statearr_41077;
})();
var statearr_41078_42895 = state_41074__$1;
(statearr_41078_42895[(2)] = null);

(statearr_41078_42895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41075 === (4))){
var inst_41042 = (state_41074[(9)]);
var inst_41042__$1 = (state_41074[(2)]);
var inst_41043 = (inst_41042__$1 == null);
var inst_41044 = cljs.core.not(inst_41043);
var state_41074__$1 = (function (){var statearr_41079 = state_41074;
(statearr_41079[(9)] = inst_41042__$1);

return statearr_41079;
})();
if(inst_41044){
var statearr_41081_42902 = state_41074__$1;
(statearr_41081_42902[(1)] = (5));

} else {
var statearr_41082_42904 = state_41074__$1;
(statearr_41082_42904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41075 === (15))){
var inst_41064 = (state_41074[(2)]);
var state_41074__$1 = state_41074;
var statearr_41084_42905 = state_41074__$1;
(statearr_41084_42905[(2)] = inst_41064);

(statearr_41084_42905[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41075 === (13))){
var state_41074__$1 = state_41074;
var statearr_41085_42908 = state_41074__$1;
(statearr_41085_42908[(2)] = null);

(statearr_41085_42908[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41075 === (6))){
var inst_41039 = (state_41074[(8)]);
var inst_41060 = (inst_41039 > (0));
var state_41074__$1 = state_41074;
if(cljs.core.truth_(inst_41060)){
var statearr_41086_42916 = state_41074__$1;
(statearr_41086_42916[(1)] = (12));

} else {
var statearr_41087_42918 = state_41074__$1;
(statearr_41087_42918[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41075 === (3))){
var inst_41072 = (state_41074[(2)]);
var state_41074__$1 = state_41074;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41074__$1,inst_41072);
} else {
if((state_val_41075 === (12))){
var inst_41037 = (state_41074[(7)]);
var inst_41062 = cljs.core.vec(inst_41037);
var state_41074__$1 = state_41074;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41074__$1,(15),out,inst_41062);
} else {
if((state_val_41075 === (2))){
var state_41074__$1 = state_41074;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41074__$1,(4),ch);
} else {
if((state_val_41075 === (11))){
var inst_41054 = (state_41074[(2)]);
var inst_41055 = (new Array(n));
var inst_41037 = inst_41055;
var inst_41039 = (0);
var state_41074__$1 = (function (){var statearr_41093 = state_41074;
(statearr_41093[(7)] = inst_41037);

(statearr_41093[(8)] = inst_41039);

(statearr_41093[(10)] = inst_41054);

return statearr_41093;
})();
var statearr_41095_42935 = state_41074__$1;
(statearr_41095_42935[(2)] = null);

(statearr_41095_42935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41075 === (9))){
var inst_41037 = (state_41074[(7)]);
var inst_41052 = cljs.core.vec(inst_41037);
var state_41074__$1 = state_41074;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41074__$1,(11),out,inst_41052);
} else {
if((state_val_41075 === (5))){
var inst_41042 = (state_41074[(9)]);
var inst_41047 = (state_41074[(11)]);
var inst_41037 = (state_41074[(7)]);
var inst_41039 = (state_41074[(8)]);
var inst_41046 = (inst_41037[inst_41039] = inst_41042);
var inst_41047__$1 = (inst_41039 + (1));
var inst_41048 = (inst_41047__$1 < n);
var state_41074__$1 = (function (){var statearr_41104 = state_41074;
(statearr_41104[(12)] = inst_41046);

(statearr_41104[(11)] = inst_41047__$1);

return statearr_41104;
})();
if(cljs.core.truth_(inst_41048)){
var statearr_41111_42948 = state_41074__$1;
(statearr_41111_42948[(1)] = (8));

} else {
var statearr_41116_42953 = state_41074__$1;
(statearr_41116_42953[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41075 === (14))){
var inst_41067 = (state_41074[(2)]);
var inst_41068 = cljs.core.async.close_BANG_(out);
var state_41074__$1 = (function (){var statearr_41118 = state_41074;
(statearr_41118[(13)] = inst_41067);

return statearr_41118;
})();
var statearr_41119_42963 = state_41074__$1;
(statearr_41119_42963[(2)] = inst_41068);

(statearr_41119_42963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41075 === (10))){
var inst_41058 = (state_41074[(2)]);
var state_41074__$1 = state_41074;
var statearr_41120_42973 = state_41074__$1;
(statearr_41120_42973[(2)] = inst_41058);

(statearr_41120_42973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41075 === (8))){
var inst_41047 = (state_41074[(11)]);
var inst_41037 = (state_41074[(7)]);
var tmp41117 = inst_41037;
var inst_41037__$1 = tmp41117;
var inst_41039 = inst_41047;
var state_41074__$1 = (function (){var statearr_41121 = state_41074;
(statearr_41121[(7)] = inst_41037__$1);

(statearr_41121[(8)] = inst_41039);

return statearr_41121;
})();
var statearr_41122_42981 = state_41074__$1;
(statearr_41122_42981[(2)] = null);

(statearr_41122_42981[(1)] = (2));


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
var cljs$core$async$state_machine__36984__auto__ = null;
var cljs$core$async$state_machine__36984__auto____0 = (function (){
var statearr_41126 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41126[(0)] = cljs$core$async$state_machine__36984__auto__);

(statearr_41126[(1)] = (1));

return statearr_41126;
});
var cljs$core$async$state_machine__36984__auto____1 = (function (state_41074){
while(true){
var ret_value__36985__auto__ = (function (){try{while(true){
var result__36986__auto__ = switch__36983__auto__(state_41074);
if(cljs.core.keyword_identical_QMARK_(result__36986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36986__auto__;
}
break;
}
}catch (e41127){var ex__36987__auto__ = e41127;
var statearr_41128_43001 = state_41074;
(statearr_41128_43001[(2)] = ex__36987__auto__);


if(cljs.core.seq((state_41074[(4)]))){
var statearr_41129_43002 = state_41074;
(statearr_41129_43002[(1)] = cljs.core.first((state_41074[(4)])));

} else {
throw ex__36987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43014 = state_41074;
state_41074 = G__43014;
continue;
} else {
return ret_value__36985__auto__;
}
break;
}
});
cljs$core$async$state_machine__36984__auto__ = function(state_41074){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36984__auto____1.call(this,state_41074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36984__auto____0;
cljs$core$async$state_machine__36984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36984__auto____1;
return cljs$core$async$state_machine__36984__auto__;
})()
})();
var state__37753__auto__ = (function (){var statearr_41132 = f__37752__auto__();
(statearr_41132[(6)] = c__37751__auto___42885);

return statearr_41132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37753__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__41136 = arguments.length;
switch (G__41136) {
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
var c__37751__auto___43040 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37752__auto__ = (function (){var switch__36983__auto__ = (function (state_41187){
var state_val_41188 = (state_41187[(1)]);
if((state_val_41188 === (7))){
var inst_41183 = (state_41187[(2)]);
var state_41187__$1 = state_41187;
var statearr_41192_43048 = state_41187__$1;
(statearr_41192_43048[(2)] = inst_41183);

(statearr_41192_43048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41188 === (1))){
var inst_41146 = [];
var inst_41147 = inst_41146;
var inst_41148 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_41187__$1 = (function (){var statearr_41194 = state_41187;
(statearr_41194[(7)] = inst_41148);

(statearr_41194[(8)] = inst_41147);

return statearr_41194;
})();
var statearr_41197_43057 = state_41187__$1;
(statearr_41197_43057[(2)] = null);

(statearr_41197_43057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41188 === (4))){
var inst_41151 = (state_41187[(9)]);
var inst_41151__$1 = (state_41187[(2)]);
var inst_41152 = (inst_41151__$1 == null);
var inst_41153 = cljs.core.not(inst_41152);
var state_41187__$1 = (function (){var statearr_41203 = state_41187;
(statearr_41203[(9)] = inst_41151__$1);

return statearr_41203;
})();
if(inst_41153){
var statearr_41204_43061 = state_41187__$1;
(statearr_41204_43061[(1)] = (5));

} else {
var statearr_41205_43062 = state_41187__$1;
(statearr_41205_43062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41188 === (15))){
var inst_41177 = (state_41187[(2)]);
var state_41187__$1 = state_41187;
var statearr_41207_43064 = state_41187__$1;
(statearr_41207_43064[(2)] = inst_41177);

(statearr_41207_43064[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41188 === (13))){
var state_41187__$1 = state_41187;
var statearr_41208_43066 = state_41187__$1;
(statearr_41208_43066[(2)] = null);

(statearr_41208_43066[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41188 === (6))){
var inst_41147 = (state_41187[(8)]);
var inst_41172 = inst_41147.length;
var inst_41173 = (inst_41172 > (0));
var state_41187__$1 = state_41187;
if(cljs.core.truth_(inst_41173)){
var statearr_41209_43069 = state_41187__$1;
(statearr_41209_43069[(1)] = (12));

} else {
var statearr_41211_43072 = state_41187__$1;
(statearr_41211_43072[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41188 === (3))){
var inst_41185 = (state_41187[(2)]);
var state_41187__$1 = state_41187;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41187__$1,inst_41185);
} else {
if((state_val_41188 === (12))){
var inst_41147 = (state_41187[(8)]);
var inst_41175 = cljs.core.vec(inst_41147);
var state_41187__$1 = state_41187;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41187__$1,(15),out,inst_41175);
} else {
if((state_val_41188 === (2))){
var state_41187__$1 = state_41187;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41187__$1,(4),ch);
} else {
if((state_val_41188 === (11))){
var inst_41155 = (state_41187[(10)]);
var inst_41151 = (state_41187[(9)]);
var inst_41165 = (state_41187[(2)]);
var inst_41166 = [];
var inst_41167 = inst_41166.push(inst_41151);
var inst_41147 = inst_41166;
var inst_41148 = inst_41155;
var state_41187__$1 = (function (){var statearr_41231 = state_41187;
(statearr_41231[(7)] = inst_41148);

(statearr_41231[(8)] = inst_41147);

(statearr_41231[(11)] = inst_41165);

(statearr_41231[(12)] = inst_41167);

return statearr_41231;
})();
var statearr_41239_43079 = state_41187__$1;
(statearr_41239_43079[(2)] = null);

(statearr_41239_43079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41188 === (9))){
var inst_41147 = (state_41187[(8)]);
var inst_41163 = cljs.core.vec(inst_41147);
var state_41187__$1 = state_41187;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41187__$1,(11),out,inst_41163);
} else {
if((state_val_41188 === (5))){
var inst_41155 = (state_41187[(10)]);
var inst_41148 = (state_41187[(7)]);
var inst_41151 = (state_41187[(9)]);
var inst_41155__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_41151) : f.call(null,inst_41151));
var inst_41156 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41155__$1,inst_41148);
var inst_41157 = cljs.core.keyword_identical_QMARK_(inst_41148,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_41158 = ((inst_41156) || (inst_41157));
var state_41187__$1 = (function (){var statearr_41245 = state_41187;
(statearr_41245[(10)] = inst_41155__$1);

return statearr_41245;
})();
if(cljs.core.truth_(inst_41158)){
var statearr_41248_43085 = state_41187__$1;
(statearr_41248_43085[(1)] = (8));

} else {
var statearr_41249_43088 = state_41187__$1;
(statearr_41249_43088[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41188 === (14))){
var inst_41180 = (state_41187[(2)]);
var inst_41181 = cljs.core.async.close_BANG_(out);
var state_41187__$1 = (function (){var statearr_41251 = state_41187;
(statearr_41251[(13)] = inst_41180);

return statearr_41251;
})();
var statearr_41254_43090 = state_41187__$1;
(statearr_41254_43090[(2)] = inst_41181);

(statearr_41254_43090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41188 === (10))){
var inst_41170 = (state_41187[(2)]);
var state_41187__$1 = state_41187;
var statearr_41259_43091 = state_41187__$1;
(statearr_41259_43091[(2)] = inst_41170);

(statearr_41259_43091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41188 === (8))){
var inst_41155 = (state_41187[(10)]);
var inst_41147 = (state_41187[(8)]);
var inst_41151 = (state_41187[(9)]);
var inst_41160 = inst_41147.push(inst_41151);
var tmp41250 = inst_41147;
var inst_41147__$1 = tmp41250;
var inst_41148 = inst_41155;
var state_41187__$1 = (function (){var statearr_41260 = state_41187;
(statearr_41260[(7)] = inst_41148);

(statearr_41260[(8)] = inst_41147__$1);

(statearr_41260[(14)] = inst_41160);

return statearr_41260;
})();
var statearr_41262_43097 = state_41187__$1;
(statearr_41262_43097[(2)] = null);

(statearr_41262_43097[(1)] = (2));


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
var cljs$core$async$state_machine__36984__auto__ = null;
var cljs$core$async$state_machine__36984__auto____0 = (function (){
var statearr_41271 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41271[(0)] = cljs$core$async$state_machine__36984__auto__);

(statearr_41271[(1)] = (1));

return statearr_41271;
});
var cljs$core$async$state_machine__36984__auto____1 = (function (state_41187){
while(true){
var ret_value__36985__auto__ = (function (){try{while(true){
var result__36986__auto__ = switch__36983__auto__(state_41187);
if(cljs.core.keyword_identical_QMARK_(result__36986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36986__auto__;
}
break;
}
}catch (e41274){var ex__36987__auto__ = e41274;
var statearr_41275_43124 = state_41187;
(statearr_41275_43124[(2)] = ex__36987__auto__);


if(cljs.core.seq((state_41187[(4)]))){
var statearr_41277_43135 = state_41187;
(statearr_41277_43135[(1)] = cljs.core.first((state_41187[(4)])));

} else {
throw ex__36987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43146 = state_41187;
state_41187 = G__43146;
continue;
} else {
return ret_value__36985__auto__;
}
break;
}
});
cljs$core$async$state_machine__36984__auto__ = function(state_41187){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36984__auto____1.call(this,state_41187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36984__auto____0;
cljs$core$async$state_machine__36984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36984__auto____1;
return cljs$core$async$state_machine__36984__auto__;
})()
})();
var state__37753__auto__ = (function (){var statearr_41286 = f__37752__auto__();
(statearr_41286[(6)] = c__37751__auto___43040);

return statearr_41286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37753__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
