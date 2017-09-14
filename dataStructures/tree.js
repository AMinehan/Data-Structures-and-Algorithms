/*
    Trees:


*/

const Tree = function(){
  this.root = undefined
}

const Leaf = function(value){
  this.value = value;
  this.children = [];
}

Tree.prototype.search = function(value){
  //FILL ME IN
}

Tree.prototype.add = function(value){
  //FILL ME IN
}

Tree.prototype.test = function(){
  let results = ['Trees: '];
  return results;
}