/*
    Binary Trees and Binary Search Trees:


*/

const BinaryTreeLeaf = function(value){
  this.value = value;
  this.left = undefined;
  this.right = undefined;
}

const BinarySearchTree = function(){
  this.root = undefined;
}

BinarySearchTree.prototype.add = function(value){
  //FILL ME IN
}

BinarySearchTree.prototype.search = function(value){
  //FILL ME IN
}




//Testing functions
BinarySearchTree.prototype.test = function(){
  var results = ['Binary Search Tree:'];
  this.add(1);
  this.add(2);
  results.push(expect(equals(this.root.right, 2), 'should add new values to the tree'));
  results.push(expect(equals(this.search(2), 2), 'should search the tree for values'));
}