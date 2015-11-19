var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
  this.current = 0;
};

Queue.prototype.size = function() {
  return this.count;
};

Queue.prototype.enqueue = function(item) {
  this.storage[this.count + this.current] = item;
  this.count++;
};

Queue.prototype.dequeue = function() {
  var result = this.storage[this.current];
  if (this.count > 0) {
    this.count--;
  }
  delete this.storage[this.current];
  this.current++;
  return result;
};
