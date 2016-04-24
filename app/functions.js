exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function(str2) {
      return str + ', ' + str2;
    };
  },

  makeClosures : function(arr, fn) {
    var func = function(num) {
      return function() {
        return fn(num);
      };
    };
    var squaresList = arr.map(function(i) {
      return func(i);
    });
    return squaresList;
  },

  partial : function(fn, str1, str2) {
    return function(st3) {
      return fn(str1, str2, st3)
      ;
    };
  },

  useArguments : function() {
    return Array.prototype.reduce.call(arguments, ((p,v) => p + v));
  },

  callIt : function(fn) {
    var args = Array.prototype.splice.call(arguments, (0,1));
    return fn.apply(this, args);
  },

  partialUsingArguments : function(fn) {
    var args;
    args = Array.prototype.splice.call(arguments, (0,1));
    return function() {
      var extraArgs = args.concat(Array.prototype.slice.call(arguments));
      return fn.apply(this, extraArgs);
    };
  },

  curryIt : function(fn) {
    return function() {
      fn;
    };
  }
};
