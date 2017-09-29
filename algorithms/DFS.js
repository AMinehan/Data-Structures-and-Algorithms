/*
  Depth-First Search:

  Depth-first search is a way of traversing trees and (to a lesser
  degree) graphs that prioritizes reaching the end of a path before
  exploring all different paths.

  There are three ways of doing this: in-order, pre-order, and post-order.
  All that refers to is the order in which nodes are visited:

  Pre-order visits the root node before its children.  It can be used for
  copying a tree.

  In-order visits the left child, the root node, and then the right child,
  and so can only be used in binary trees.  If used on a binary search tree,
  this results in a sorted array.

  Post-order visits all children before the root node.  It can be used for
  deleting a tree.

  In this exercise, we want to write a function that traverses a tree
  and returns an array of the results of calling a function on each of
  its nodes.  We'll be using the tree constructor we built in
  binarySearchTree.js for the tests.

*/

function inOrderDFS(node, func){

}

function preOrderDFS(node, func){

}

function postOrderDFS(node, func){

}

inOrderDFS.test = function(){
  let tree = new BinarySearchTree();
  tree.add(4);
  tree.add(2);
  tree.add(3);
  tree.add(5);
  tree.add(1);

  let testFunc = function(leaf){
    return leaf.value;
  }
  /*
        4
       / \
      2   5
     / \
    1   3

  */

  return expect(equals(()=>inOrderDFS(test, testFunc), [1, 2, 3, 4, 5]), 'inOrderDFS should traverse a tree in-order');
}

preOrderDFS.test = function(){
    let tree = new BinarySearchTree();
  tree.add(4);
  tree.add(2);
  tree.add(3);
  tree.add(5);
  tree.add(1);

  let testFunc = function(leaf){
    return leaf.value;
  }
  /*
        4
       / \
      2   5
     / \
    1   3

  */

  return expect(equals(()=>preOrderDFS(tree, testFunc), [4, 2, 1, 3, 5]), 'preOrderDFS should traverse a tree in pre-order');
}

postOrderDFS.test = function(){
  let tree = new BinarySearchTree();
  tree.add(4);
  tree.add(2);
  tree.add(3);
  tree.add(5);
  tree.add(1);

  let testFunc = function(leaf){
    return leaf.value;
  }
  /*
        4
       / \
      2   5
     / \
    1   3

  */
  return expect(equals(()=>postOrderDFS(tree, testFunc), [1, 3, 2, 5, 4]), 'postOrderDFS should traverse a tree in post-order');
}