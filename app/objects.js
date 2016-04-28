exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    // makes this = object
    return fn.call(obj);
  },

  alterObjects : function(constructor, greeting) {
    // sets a greeting method on the protoype of C
    constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
    var arr = [];
    // the object does not directly have bop method
    // as it was added to its prototype from which it inherited
    for (var p in obj) {
      if (obj.hasOwnProperty(p)) {
        arr.push(p + ': ' + obj[p]);
      }
    }
    return arr;
  }
};
