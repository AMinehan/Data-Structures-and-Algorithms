/*
  Breadth-First Search:

*/

function BFS(tree, func){

}

BFS.test = function(){
  let tree = new BinarySearchTree();
  tree.add(4);
  tree.add(2);
  tree.add(3);
  tree.add(5);
  tree.add(1);

/*
      4
     / \
    2   5
   / \
  1   3

*/

  return expect(equals(()=>BFS(tree, function(node){return node.value}), [4, 2, 5, 1, 3]), 'Breadth-first search should traverse breadth first');
}