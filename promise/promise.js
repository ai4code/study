function _Promise(fn) {
    //声明状态
    this.status = 'pending'
    //声明返回数据
    this.msg = ''

    var self = this

    fn(function(data) {
        self.msg = data
        self.status = 'resolve'
    }, function(error){
        self.msg = error
        self.status = 'reject'
    })
}

//定义then函数
_Promise.prototype.then = function() {
    var args = arguments
    var self = this
    //轮询异步
    timer = setInterval (function() {
        if (self.status === 'resolve') {
            args[0](self.msg)
            clearInterval(timer)
        } else if (self.status === 'reject'){
            args[1](self.msg)
            clearInterval(timer)
        }
    })
}