// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {

  json = json.trim();
  if (json[0] === '{'){
    // Object
    if (_.last(json[0]) === '}'){

    } else {
      throw new Error('Invalid Object');
    }
  } else if (json[0] === '['){
    // Array
    if (_.last(json[0]) === ']'){

    } else {
      throw new Error('Invalid Array');
    }
  } else if (json[0] === '"'){
    // String
    if (_.last(json[0]) === '"'){

    } else {
      throw new Error('Invalid String');
    }
  } else if (json[0] === 't'){
    // true
    if (json === 'true'){
      return true;
    } else {
      throw new Error('Invalid keyword');
    }
  } else if (json[0] === 'f'){
    // false
    if (json === 'false'){
      return false;
    } else {
      throw new Error('Invalid keyword');
    }
  } else if (json[0] === 'n'){
    // null
    if (json === 'null'){
      return null;
    } else {
      throw new Error('Invalid keyword');
    }
  } else if (/[0-9-]/.test(json[0])){
    // Number

  }
};
