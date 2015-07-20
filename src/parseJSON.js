// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  var charIndex = 0;
  var getVariable = function(){
    skipWhiteSpace();
    if(json[charIndex] === '{'){
      return getObject();
    } else if(json[charIndex] === '['){
      return getArray();
    } else if(json[charIndex] === '"'){
      return getString();
    } else if(json.slice(charIndex, charIndex+4) === 'true'){
      charIndex += 4;
      return true;
    } else if(json.slice(charIndex, charIndex+5) === 'false'){
      charIndex += 5;
      return false;
    } else if(json.slice(charIndex, charIndex+4) === 'null'){
      charIndex += 4;
      return null;
    } else if (/[0-9-]/.test(json[charIndex])){
      return getNumber();
    }
  };
  var getString = function(){
    charIndex++; // Skip over open quote
    var string = '';
    while(json[charIndex] !== '"'){
      if(charIndex > json.length){
        throw new SyntaxError('Invalid String: ' + string);
      }
      if(json[charIndex] === '\\'){
        string += json[charIndex];
        charIndex++;
      }
      string += json[charIndex];
      charIndex++;
    }
    charIndex++; // Skip over end quote
    return string;
  };
  var getNumber = function(){
    var number = '';
    while(/[0-9-+eE\.]/.test(json[charIndex]) && charIndex < json.length){
      number += json[charIndex];
      charIndex++;
    }
    if(isNaN(Number(number))){
      throw new SyntaxError('Invalid Number: ' + number);
    } else {
      return Number(number);
    }
  };
  var getArray = function(){
    charIndex++; // Skip over opening [
    var array = [];
    while(json[charIndex] !== ']'){
      array.push(getVariable());
      skipWhiteSpace();
      if(json[charIndex] === ','){
        charIndex++;
      } else if (charIndex >= json.length || json[charIndex] !== ']'){
        throw new SyntaxError('Invalid Array');
      }
    }
    charIndex++; // Skip over closing ]
    return array;
  };
  var skipWhiteSpace = function(){
    var whiteSpace = [' ', '\t', '\n', '\r'];
      while(whiteSpace.indexOf(json[charIndex]) !== -1){
        charIndex++;
      }
  };
  var getObject = function(){
    charIndex++; // Skip over opening {
    var object = {};
    while(json[charIndex] !== '}'){
      skipWhiteSpace();
      var prop = getString();
      skipWhiteSpace();
      if(json[charIndex] !== ':'){
        throw new SyntaxError('Invalid Object in '+json);
      }
      charIndex++;
      object[prop] = getVariable();
      skipWhiteSpace();
      if(json[charIndex] === ','){
        charIndex++;
      } else if (charIndex >= json.length || json[charIndex] !== '}'){
        throw new SyntaxError('Invalid Object');
      }
    }
    charIndex++; // Skip over closing }
    return object;
  };
  return getVariable();
};
