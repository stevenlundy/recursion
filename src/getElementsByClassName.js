// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var elements = [];
  var findElements = function(element){
    if(_.contains(element.classList, className)){
      elements.push(element);
    }
    _.each(element.childNodes, findElements);
  }
  findElements(document.body);
  return elements;
};
