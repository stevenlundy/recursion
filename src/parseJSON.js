// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {

  json = json.trim();
  if (json[0] === '{'){
    // Object

  } else if (json[0] === '['){
    // Array

  } else if (json[0] === '"'){
    // String

  } else if (json[0] === 't'){
    // true

  } else if (json[0] === 'f'){
    // false

  } else if (json[0] === 'n'){
    // null

  } else if (/[0-9-]/.test(json[0])){
    // Number

  }
};
