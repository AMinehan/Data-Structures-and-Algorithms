/*
  Dijkstra's Algorithm:

*/

function dijkstra(graph, start, end){

}

dijkstra.test = function(){
  let testArr = [[1,1,1000,1000,1000],
                 [1000,1,1,1000,1000],
                 [1000,1000,1,1,1000],
                 [1000,1000,1000,1,1000],
                 [1000,1000,1000,1,1]];

  return expect(equals(()=>dijkstra(testArr, [0, 0], [4, 4]), 9), 'dijkstra\'s algorithm should return the length of a valid path');
}