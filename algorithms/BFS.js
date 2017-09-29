/*
  Breadth-First Search:

  Sometimes it's more efficient to search through close nodes before searching
  deep nodes.  In this case, we perform a breadth-first search.  We visit a root
  node, then each of its direct children, then its children's children, etc.,
  until either we find what we want or the entire tree or graph is traversed.

  To accomplish this, we can use a queue of nodes we need to visit: a linked
  list might be helpful here.

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