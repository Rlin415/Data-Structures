var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var prevTail = list.tail;
    list.tail = Node(value);
    if (!list.head) {
      list.head = list.tail;
    }
    if (prevTail) {
      prevTail.next = list.tail;
    }
  };

  list.removeHead = function(){
    var prevHead = list.head.value;
    list.head = list.head.next;
    return prevHead;
  };

  list.contains = function(target){
    var current = list.head;
    while (current) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

 //addToTail: O(1);
 //removeHead: O(1);
 //contains: O(n);
