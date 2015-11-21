var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(i);
  var exists = false;

  if (!arr) {
    arr = [];
    this._storage.set(i, arr);
  }

  for (var i=0; i<arr.length; i++) {
    if (arr[i][0] === k) {
      arr[i][1] = v;
      exists = true;
      break;
    }
  }

  if (!exists) {
    arr.push([k,v]);

    this._count++;

    if (this._count > this._limit * 0.75) {
      this.resize(this._limit * 2);
    }
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var output = null;
  var temp;

  temp = this._storage.get(i);

  _.each(temp, function(value) {
    if (value[0] === k) {
      output = value[1];
    }
  });

  return output;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(i);

  for (var i=0; i<arr.length; i++) {
    if (arr[i][0] === k) {

      arr.splice(k);

      this._count--;

      if (this._count < this._limit * 0.25) {
        this.resize(this._limit / 2);
      }
      break;
    }
  }
};

HashTable.prototype.resize = function(newLimit) {

  var currentStorage = this._storage;
  var table = this;

  this._storage = LimitedArray(newLimit);
  this._limit = newLimit;
  this._count = 0;

  currentStorage.each(function(item) {
    if (item) {
      _.each(item, function(arr) {
        table.insert(arr[0], arr[1]);
      });
    }
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

//insert: O(n) (insert is linear, hashing algo depends but here is linear)
//retrieve: O(n) (insert is linear, hashing algo depends but here is linear)
//remove: O(n) (insert is linear, hashing algo depends but here is linear)
//resize: O(n^2)
