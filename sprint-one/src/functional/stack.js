var Stack = function(){
  var someInstance = {};
  var count = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    storage[count] = value;
    count++;    
  };

  someInstance.pop = function(){
    var result;
    if (count > 0) {
      count--;
    }
    result = storage[count];
    delete storage[count];
    return result;
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
