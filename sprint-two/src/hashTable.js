var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage[i] = this._storage[i] || {};
  this._storage[i][k] = v;
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage[i][k];
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage[i][k] = null;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

//insert: O(n) (insert is constant, hashing algo depends but here is linear)
//retrieve: O(n) (insert is constant, hashing algo depends but here is linear)
//remove: O(n) (insert is constant, hashing algo depends but here is linear)
