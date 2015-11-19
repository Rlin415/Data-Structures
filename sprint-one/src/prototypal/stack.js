var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.count = 0;
  obj.storage = {};
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
    var result;
    if (this.count > 0) {
      this.count--;
    }
    result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }
};
