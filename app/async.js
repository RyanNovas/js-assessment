exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
    async: function(value) {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          if (true) {
            resolve(value);
          } else
            resolve('false');
        }, 1000);
      });
    },


    manipulateRemoteData: function(url) {
        var req = new XMLHttpRequest();
        var reqJSON, names, arr;
        req.open('GET', url);
        arr = [];
        return new Promise(function(resolve, reject) {
            req.onload = function() {
                // make sure request is valid
                if (req.status === 200) {
                    reqJSON = JSON.parse(req.response);
                    names = reqJSON.people.map(function(person) {
                        return person.name;
                    });
                    resolve(names.sort());

                } else {
                    // otherwise show what went wrong
                    reject(Error(req.statusText));
                }
            };
            req.send();
        });
    }
};
