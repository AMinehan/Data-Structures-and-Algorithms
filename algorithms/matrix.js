/*
  matrix traversal:

  For this exercise, we're going to write a function that generates a matrix of size
  n x n.  We're going to assume there's a robot in the top left of the matrix and it
  wants to go to the bottom right.  We're going to calculate how many different
  unique paths it could take to get there.

  The robot can go up, down, left and right, but it can only visit each index of the
  matrix one time.  Once it visits 0,0, it can never go to 0,0 again, otherwise the
  result of the function would always be infinity for values of n greater than 1.

  Note: this algorithm is going to have an exponential big-O value, so don't try
  to run it for values greater than 6.

*/

function generateBoard(n){
  let result = [];
  for (let i = 0; i < n; i++){
    result.push([]);
    for (let j = 0; j < n; j++){
      result[i].push(0);
    }
  }
}
 /*

  For a value of 5:

  [[0,0,0,0,0],
   [0,0,0,0,0],
   [0,0,0,0,0],
   [0,0,0,0,0],
   [0,0,0,0,0]]

 */

function paths(n){
  let board = generateBoard(n)

  //FILL ME IN
}

paths.test = function(){
  return expect(equals(()=>paths(5), 8512), 'Pathing algorithm should return total number of paths');
}