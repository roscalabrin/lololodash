var _ = require("lodash")

var worker = function (collection) {
  var result = {
    hot: [],
    warm: []
  };

  function checkIfWarm(temp) {
    return temp > 19;
  }

  _.forEach(collection, function(town, name) {
    if (_.every(town, checkIfWarm)) {
      result.hot.push(name);
    } else if (._some(town, checkIfWarm)) {
      result.warm.push(name);
    }
  });
  
  return result;
};

module.exports = worker;
