/**
 * 1.在函数原型中添加MyCall方法
 */

 Function.prototype.MyCall = function(context) {
    //判断当前是否函数调用
    if (typeof this !== 'function') {
        throw new TypeError('not funciton');
    } 
    context = context || window;
    context.fn = this;
    let args = [...arguments].slice(1); 
    let result = context.fn(...args); 
    delete context.fn;
    return result; 
 }