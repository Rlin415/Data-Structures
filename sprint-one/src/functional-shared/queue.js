var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {
    storage: {},
    count: 0,
    current: 0
  };
  
  _.extend(obj, queueMethods);
  return obj;
};

var queueMethods = {
  size: function() {
    return this.count;
  },
  enqueue: function(value) {
    this.storage[this.count + this.current] = value;
    this.count++;
  },
  dequeue: function() {
    var result = this.storage[this.current];
    delete this.storage[this.current];
    if (this.count > 0) {
      this.count--;
    }
    this.current++;
    return result;
  }
};


