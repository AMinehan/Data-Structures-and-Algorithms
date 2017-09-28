/*
  Breadth-First Search:

*/

function BFS(tree, func){

}

BFS.test = function(){
  let tree = {value: 1, left: {value: 2, left: undefined, right: {value: 3, left: undefined, right: undefined}}, right: {value: 4, left: undefined, right: undefined}};
  return expect(equals(BFS(tree, function(node){return node.value}), [1, 2, 4, 3]), 'Breadth-first search should traverse breadth first');
}