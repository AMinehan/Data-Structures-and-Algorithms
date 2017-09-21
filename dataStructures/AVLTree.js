/*
    AVL Tree:

  The AVL tree is a self-balancing binary search tree.  As it adds elements,
  it keeps track of how deep the branches of the tree go, and if the difference
  between the depths of the two branches of any given node exceeds 1, it
  rotates the nodes to balance them out.

  For instance, if you start by adding 5, 4, and 3, it'll be unbalanced and look
  like this:

      5
     /
    4
   /
  3

  To balance it, after the 3 is added, the depth calculation will backtrack to
  the 5 node, determine that it has a left depth of 2 and a right depth of 0,
  and rotate the tree so that 4 is the new root node and 5 is an element beneath it:

     4
    / \
   3   5

  There are a lot of edge cases to consider here.  To make it easier, for this
  exercise, each node keeps track of its parent node.  In practice, this would be
  a waste of space.

  To remove elements, it finds the node to remove, swaps it with the largest
  smallest child node beneath it, deletes it from the tree, and returns it.

*/

const AVLTree = function(){
  this.root = undefined;
}

const AVLTreeLeaf = function(value, parent){
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

AVLTreeLeaf.prototype.rotateLeft = function(node, parent){
  //FILL ME IN
}

AVLTreeLeaf.prototype.rotateRight = function(node, parent){
  //FILL ME IN
}

AVLTreeLeaf.prototype.findLargestSmallest = function(node){
  //FILL ME IN
}

AVLTree.prototype.test = function(){
  let results = ['AVL Tree: '];

  this.insert(1);

  results.push(expect(equals(()=>this.root.value, 1), 'AVLTree should be able to add a new value'));

  this.insert(2);

  results.push(expect(equals(()=>this.root.right.value, 2), 'AVLTree should be able to add multiple values'));

  this.insert(3);

  results.push(expect(equals(()=>this.root.value, 2), 'AVLTree should rotateLeft when unbalanced on the right'));

  this.insert(4);

  results.push(expect(equals(()=>this.remove(3), 3), 'AVLTree should be able to remove elements'));
  results.push(expect(equals(()=>this.root.right.value, 4), 'AVLTree should be able to replace removed elements'));

  this.insert(0);
  this.insert(-1);

  results.push(expect(equals(()=>this.root.left.value, 0), 'AVLTree should rotateRight when unbalanced on the left'));

  this.insert(-2);
  this.remove(0);

  results.push(expect(equals(()=>this.root.left.value, -1), 'AVLTree should be able to find the largest smallest value when removing values'));

  return results;
}