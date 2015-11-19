var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {
    storage: {},
    count: 0
  };

  _.extend(obj, stackMethods);
  return obj;
};

var stackMethods = {
  size: function() {
    return this.count;
  },
  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  pop: function() {
    var result = this.storage[this.count-1];
    delete this.storage[this.count-1];
    if (this.count > 0) {
      this.count--;
    }
    return result;
  },
};


