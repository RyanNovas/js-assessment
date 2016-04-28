exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    // sets the context to this, i.e. the function, and the arguments to
    // the array of arguments
    return fn.apply(this, arr);
  },

  speak : function(fn, obj) {
    // fn is taking no additional arguments, so it is sufficient to just change
    // the value of this to obj
    return fn.call(obj);
  },

  functionFunction : function(str) {
    // will return a function that takes an argument of a string
    return function(str2) {
      // will return the value of the argument passed to the initial function
      // plus the value of the following string
      return str + ', ' + str2;
    };
  },

  makeClosures : function(arr, fn) {
    // define a function
    var squaresList = arr.map(function(i) {
      return function() {
        return fn(i);
      };
    });
    // can return the function, because it is within the same scope
    return squaresList;
  },

  partial : function(fn, str1, str2) {
    // returns a function that takes a string argument
    return function(str3) {
      // applies the first two args of the parent function, along with the third
      return fn(str1, str2, str3);
    };
  },

  useArguments : function() {
    // uses the Array reduce method to add up arguments
    return Array.prototype.reduce.call(arguments, ((p,n) => p+n));
  },

  callIt : function(fn) {
    // removes fn from arguments and returns array
    var args = Array.prototype.splice.call(arguments, (0,1));
    // returns the results of calling the function with the array as args
    return fn.apply(this, args);
  },


  partialUsingArguments : function(fn) {
    // removes fn from any other aruments passed
    var args = Array.prototype.splice.call(arguments, (0,1));
    return function() {
      // concats old args with new ones
      var cumulativeArgs = args.concat(Array.prototype.slice.call(arguments));
      // passes cumulative args to final function
      return fn.apply(this, cumulativeArgs);
    };
  },

  curryIt : function(fn) {

  }
};
