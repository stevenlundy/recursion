// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {

  var charIndex = 0;
  var getVariable = function(){
    while(json[charIndex] === ' '){
      charIndex++;
    }
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
  }
};
