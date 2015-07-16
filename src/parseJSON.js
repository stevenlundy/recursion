// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {

  json = json.trim();
  if (json[0] === '{'){
    // Object
    if (_.last(json[0]) === '}'){

    } else {
      throw 'Invalid Object';
    }
  } else if (json[0] === '['){
    // Array
    if (_.last(json[0]) === ']'){

    } else {
      throw 'Invalid Array';
    }
  } else if (json[0] === '"'){
    // String
    if (_.last(json[0]) === '"'){

    } else {
      throw 'Invalid String';
    }
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
