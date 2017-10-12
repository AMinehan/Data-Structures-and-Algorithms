//test everything on page load, concatinate everything into results array
let versionIndex = 3;
window.onload = function(){
  console.log('loading tests');
  let objectsToTest = [NewArray, LinkedList, BinarySearchTree, HashTable, PriorityQueue, AVLTree];
  let algorithmsToTest = [insertionSort, binarySearch, BFS, dijkstra, paths, mergeSort, quickSort, inOrderDFS, preOrderDFS, postOrderDFS]
  let results = [];
  let testObject, testResult;
  let algorithmResults = [[0, ' out of ' + algorithmsToTest.length + ' algorthm tests passed!']];

  cube.style.transform = 'rotateX(-30deg) rotateY(-30deg)'

  for (let i = 0; i < objectsToTest.length; i++){
    try {
      testObject = new objectsToTest[i];
      results = results.concat(reduceTests(testObject.test()));
    }
    catch(e) {
      console.log(objectsToTest[i], i, 'broken tests: ' + e);
    }
  }

  for (let i = 0; i < algorithmsToTest.length; i++){

    testResult = algorithmsToTest[i].test();

    if (testResult !== 'passed') {
      algorithmResults.push(testResult);
    } else {
      algorithmResults[0] += 1;
    }
  }

  algorithmResults[0] = algorithmResults[0].join('');
  console.log(algorithmResults);

  results = results.concat(algorithmResults);

  display(results);
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
  catch (e) {
    return false;
  }
}

/*
  Takes the results of the tests and turns it into a flattened array of strings that can be displayed
*/

function reduceTests (arr) {
  let result = [arr[0], 0];
  console.log(arr)
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] !== 'passed') {
      result.push(arr[i]);
    }
    else {
      result[1] += 1;
    }
  }
  result[1] = ( '' + result[1] + ' out of ' + (arr.length - 1 || 0) + ' tests passed!');

  return result;
}

function display(arr){
  let linesPerFace = Math.ceil(arr.length / 6);
  let faces = cube.children;
  let newLine;

  console.log(arr)

  for (let i = 0; i < 6; i++){
    for (let j = i * linesPerFace; j < (i * linesPerFace) + linesPerFace; j++){
      if (arr[j] !== undefined) {
        newLine = document.createElement('div');
        newLine.innerText = arr[j];
        faces[i].appendChild(newLine)
        // faces[i].innerHTML += '<div style="transform: translate(20px, 20px)">' + arr[j] + '</div>';
      }
    }
  }
}