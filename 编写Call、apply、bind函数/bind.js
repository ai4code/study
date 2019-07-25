/**
 * 1.在函数原型中添加MyBind方法
 */

 Function.prototype.MyBind = function(context) {
    if (typeof this !== 'function') {
        throw new TypeError('not function!');
    }
    let _this = this
    let arg = [...arguments].slice(1);
    return function F() {
        // 处理函数使用new的情况
        if (this instanceof F) {
          return new _this(...arg, ...arguments)
        } else {
          return _this.apply(context, arg.concat(...arguments))
        }
    }
} 