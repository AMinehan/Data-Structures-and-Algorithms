/*
  Dijkstra's Algorithm:

  Dijkstra's algorithm is a pathfinding algorithm that prioritizes paths based on
  the cost or value of each path.  It can be used to find the shortest way to each
  node in a graph, but here we'll be using it to look for the shortest path from
  the top left to the bottom right of a matrix.

  Each number in the matrix represents the cost of traveling to that particular index
  from any directly adjacent index, up, down, left, or right.

  As we've seen from our matrix pathing algorithm, as the size of a matrix increases,
  the total number of possible paths increases exponentially.  We need to have some
  kind of priority system for ignoring the extra paths.

  Dijkstra prioritizes lower costs for visiting a node.  If a node has neighbors that cost
  1, 2, 3, 4, and 5 to visit, it will visit each node in that order.

  As Dijkstra's algorithm traverses a graph, it keeps track of the nodes it has visited
  and how long it took to reach each one.  If it finds a new path to the same node later
  on that has a lower cost than the previous path, it updates that position with the
  new path.

  For this exercise, we'll be designing a function that takes a matrix of values and finds
  the path to the bottom right with the lowest cost.  It will then return that path as an
  array of touples containing the x and y index of each point along the path.

*/

function dijkstra(graph, start, end){

}

dijkstra.test = function(){
  let testArr = [[1,1,1000,1000,1000],
                 [1000,1,1,1000,1000],
                 [1000,1000,1,1,1000],
                 [1000,1000,1000,1,1000],
                 [1000,1000,1000,1,1]];

  return expect(equals(()=>dijkstra(testArr, [0, 0], [4, 4]), [[0,0],[0,1],[1,1],[1,2],[2,2],[2,3],[3,3],[4,3],[4,4]]), 'dijkstra\'s algorithm should return a valid path');
}