/*
    Hash Tables:

  Hash tables are everywhere.  Arrays and objects in JavaScript are actually hash
  tables.  The goal of a hash table is to offer near-constant-time access to key: value pairs.

  They work by storing key: value pairs in a bucket of a predetermined size.  For
  instance, a bucket of size 8 would look like this:

  [[],
   [],
   [],
   [],
   [],
   [],
   [],
   []]

  To store a key-value pair in this bucket, it takes the key, hashes it, and runs
  the modulo operator on the result.  Let's say we'd like to store the pair
  'hello': 'world'.  Hashing 'hello' with this function returns the value 127086708.
  127086708 % 8 is 4, so we access the bucket at index 4 and store the touple
  ['hello', 'world'] in it, so now our bucket looks like this:

  [[],
   [],
   [],
   [],
   [['hello', 'world']],
   [],
   [],
   []]

  A hashing collision occurs when two keys hash to the same index.  In that case,
  both values are stored in the same index and the computer has to iterate through
  all values to find the correct one.  Such an access is linear-time, so ideally,
  a hash table should always be at least 75% empty.  When a collision occurs, the
  bucket looks like this:

  [[],
   [],
   [],
   [],
   [['hello', 'world'], ['hi', 'nonworld']],
   [],
   [],
   []]

*/

function HashTable(size){
size = size || 8;

  this.data = [];
  for (let i = 0; i < size; i++){
    this.data.push([]);
  }
  this.size = 0;
}

// This is a hashing function.  It takes a key and returns a large, pseudorandom number.

function hashify (key){
  let result = 0;
  for (let i = 0; i < key.length; key++){
    result = (result << 5) + result + key.charCodeAt(i);
    result = result & result;
  }
  return result;
}

HashTable.prototype.set = function(key, value){
  // FILL ME IN
}

HashTable.prototype.remove = function(key, value){
  // FILL ME IN
}

HashTable.prototype.get = function(key){
  // FILL ME IN
}


/*  Advanced functions  */

/*
  Resize: when a hash table is less than 25% full or over 75% full, it should double/half
  the size of the bucket to save memory or accomodate more key: value pairs
*/
HashTable.prototype.resize = function(newSize){
  //FILL ME IN LATER
}

/*
  Try making your own hashing function!  Don't look at Java's standard hashing function
  for inspiration.

  It should sample every character in the key and offer a decent spread between indexes
  for different keys.
*/
HashTable.prototype.hash = function(key, size){
  //FILL ME IN LATER
}

HashTable.prototype.test = function(){
  let results = ['Hash Tables: ']
  return results;
}