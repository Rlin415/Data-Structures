var BinarySearchTree = function(value){
  var obj = {
    value: value,
    left: null,
    right: null
  };
  _.extend(obj, binaryMethods);
  return obj;
};

var binaryMethods = {
  insert: function(value) {
    var node = this;
    var current = value > node.value ? 'right' : 'left';

    while(node[current]) {
      node = node[current];
      if (node.value > value) {
        current = 'left';
      } else {
        current = 'right';
      }
    }
    node[current] = BinarySearchTree(value);
  },
  contains: function(target) {
    var node = this;
    var current = target > node.value ? 'right' : 'left';
    var result = (target === node.value);

    while (node[current]) {
      node = node[current];
      result = (target === node.value);
      current = target > node.value ? 'right' : 'left';
    }
    return result;
  },
  depthFirstLog: function() {

  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
