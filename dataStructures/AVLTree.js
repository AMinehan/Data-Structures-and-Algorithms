/*
    AVL Tree:




*/

const AVLTree = function(){
  this.root = undefined;
}

const AVLTreeNode = function(value, parent){
  this.depth = undefined;
  this.value = value;
  this.parent = parent;
  this.left = undefined;
  this.right = undefined;
}

AVLTree.prototype.insert = function(value){
  //FILL ME IN
}

AVLTree.prototype.remove = function(value){
  //FILL ME IN
}

AVLTree.prototype.rotateLeft = function(node){
  //FILL ME IN
}

AVLTree.prototype.rotateRight = function(node){
  //FILL ME IN
}

AVLTree.prototype.findLargestSmallest = function(node){
  //FILL ME IN
}