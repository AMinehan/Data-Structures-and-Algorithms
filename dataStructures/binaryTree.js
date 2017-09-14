/*
    Binary Search Trees:

    Let's say we have a sorted array and we're looking for a value in it.  We
    could try a binary search: we start at the middle value and compare it with
    our target value:

    [1, 2, 3, 4, 5, 6, 7, 8, 9].search(6)

    Since the target value, 6, is greater than the middle value, 5, we know that
    the target is in a greater index.  Fortunately, we're building a binary search
    function, so we can call it on the second half of the array:

    [6, 7, 8, 9].search(6)

    The target value, 6, is smaller than the middle value, 7.  We call our search
    function on the values to the left of the middle:

    [6].search(6)

    The middle value here ends up being the target value, so we've managed to search
    through an array of length 9 in three steps.

    Another way of representing this is in a binary tree.  In a binary tree, each
    leaf has two children: a right node and a left node.  Every value in the
    left branch is going to be less than the value of the leaf and every value in
    the right branch is going to be greater than the value of the leaf.  The
    original array above could look like this:

          5
        /   \
       2     7
      / \   / \
     1   4 6   9
        /     /
       3     8

    In a binary search tree, you start at the root node, 5.  The target value, 6,
    is greater, so you call the binary search function on the right child, 7,
    and again on the left child, 6.

    For this tree, we will take values one at a time and add them to the tree in
    a manner similar to the search function.  For instance:

    tree.add(1);
    tree.add(2);
    tree.add(3);

    should look like this:

    1
     \
      2
       \
        3

    Add a 0, and it looks like this:

      1
     / \
    0   2
         \
          3

    For now, don't worry about keeping it balanced.  AVL trees come later.

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

/* advanced functions */

/*
  Rebalancing a binary tree:

  When your tree is grossly imbalanced, sometimes it helps to rebalance it.

  One way of rebalancing might involve an in-order traversal: a recursive fuction that
  gets called on the left node, then the parent node, then the right node.  For instance:

  function inOrderTraversal (tree) {
    let result = [];
    function traverse(node){
      if (!node){
        return;
      }
      traverse(node.left);
      result.push(node.value);
      traverse(node.right);
    }
    traverse(tree.root)
    return result
  }

  In this way, we can take our binary tree and turn it into a sorted array.

  How, then, can we take a sorted array and turn it into a perfectly balanced binary
  search tree?
*/

BinarySearchTree.prototype.rebalance = function(){
  //FILL ME IN
}


//Testing functions
BinarySearchTree.prototype.test = function(){
  let results = ['Binary Search Tree:'];
  this.add(1);
  this.add(2);
  results.push(expect(equals(function(){return this.root.right.value}, 2), 'should add new values to the tree'));
  results.push(expect(equals(this.search(2), 2), 'should search the tree for values'));
}