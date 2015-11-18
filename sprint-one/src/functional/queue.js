var Queue = function(){
  var someInstance = {};
  var count = 0;
  var current = 0;
  
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[current + count] = value;
    count++;
  };

  someInstance.dequeue = function(){
    var result = storage[current];
    if (count > 0) {
      count--;
    }
    delete storage[current];
    current++;
    return result;
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};