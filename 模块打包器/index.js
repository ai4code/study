const modules = {
    0: {
      module(require, exports) { 
        const { sum } = require('./sum.js') 
        console.log(sum(2, 3))               
      },
      mapping: {'./sum.js': 1 } 
    },
    1: {
      module(require, exports) {
        function sum(...args) { 
          return args.reduce((v1, v2) => v1 + v2)
        }
        exports.sum = sum
      },
      mapping: {}
    }
  }
  
  function exec(id) { 
    const { module, mapping } = modules[id]   
    let  exports =  {}
    module(path => exec(mapping[path]), exports)  
    return exports
  }

  exec(0)