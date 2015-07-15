// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if(Array.isArray(obj)) {
    return '[' + obj.map(stringifyJSON).join(',') + ']';
  } else if(typeof obj === 'object') {
    if( obj === null){
      return 'null';
    }
    var propKeyPairs = [];
    for(var prop in obj) {
      var str = stringifyJSON(obj[prop]);
      if(typeof str !== 'undefined') {
        propKeyPairs.push('"'+prop+'":'+str);
      }
    }
    return '{' + propKeyPairs.join(',') + '}';
  } else if(typeof obj === 'function' || typeof obj === 'undefined') {
    return undefined;
  } else if(typeof obj === 'string'){
    return '"'+obj+'"';
  } else {
    return obj.toString();
  }
};
