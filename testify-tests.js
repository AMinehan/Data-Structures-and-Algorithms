//test everything on page load, concatinate everything into results array

window.onload = function(){
  console.log('loading tests');
  let objectsToTest = [NewArray, Tree, BinarySearchTree, HashTable, PriorityQueue, AVLTree];
  let results = [];
  let testObject, linesPerFace;
  let cubeFaces = [];
  let currentLine = 0;

  for (let i = 0; i < objectsToTest.length; i++){
    try {
      testObject = new objectsToTest[i];
      results = results.concat(reduceTests(testObject.test()));
    }
    catch(e) {
      console.log('broken tests: ' + e);
    }
  }

  for (var i = 0; i < cube.children.length; i++){
    cubeFaces.push(cube.children[i]);
  }

  linesPerFace = Math.ceil(results / cubeFaces);

  for (var i = 0; i < cubeFaces.length; i += 1){

  }

}

/*
  truthy is going to be the result of calling the equals function below
*/

function expect (truthy, desc) {
  return truthy ? 'passed' : desc;
}

/*
  comparison function: takes a callback function and uses try-catch for error handling
*/

function equals (func, argTwo) {
  try {
    return JSON.stringify(func()) === JSON.stringify(argTwo)
  }
  catch(e){
    return false;
  }
}

/*
  Takes the results of the tests and turns it into an array of strings that can be displayed
*/

function reduceTests (arr) {
  let result = [arr[0], 0];
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] !== 'passed') {
      result.push(arr[i]);
    }
    else {
      result[1] += 1;
    }
  }
  result[1] = ( '' + result[1] + ' out of ' + arr.length + ' tests passed!');

  return result;
}