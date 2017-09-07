/*
    Hash Tables:


    */

function HashTable(size){
size = size || 8;

  this.data = [];
  for (let i = 0; i < size; i++){
    this.data.push([]);
  }
  this.size = 0;
}

HashTable.prototype.set = function(key, value){
  // FILL ME IN
}

HashTable.prototype.remove = function(key, value){
  // FILL ME IN
}

HashTable.prototype.hash = function(key, size){
  // FILL ME IN
}

HashTable.prototype.get = function(key){
  // FILL ME IN
}


/*  ADVANCED FUNCTIONS  */

HashTable.prototype.resize = function(newSize){

}

/*
HashTable.prototype.hash = function(key, size){

}
*/