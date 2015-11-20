var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target, node){

  var result = false;
  node = node || this;

  var childNodes = node.children;

  for (var i=0; i<childNodes.length; i++) {
    if (childNodes[i].value === target) {
      result = true;
    }
    if (childNodes[i].children.length && !result) {
      result = childNodes[i].contains(target, childNodes[i]);
    }
  }

  return result;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
