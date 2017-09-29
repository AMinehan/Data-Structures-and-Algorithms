/*
  Depth-First Search:



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
  return expect(equals(()=>postOrderDFS(tree, testFunc), [5, 3, 1, 2, 4]), 'postOrderDFS should traverse a tree in post-order');
}