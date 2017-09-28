/*
  Binary Search:

  Binary search is a simple and efficient way of finding a value in a sorted
  array.

*/

function binarySearch(arr, target){

}

//  This is probably the first time I've actually assigned a property to an existing function

binarySearch.test = function(){
  let testArr = [];
  for (let i = 0; i < 400; i++){
    testArr.push(i);
  }
  if (binarySearch(600)){
    return 'binarySearch should not return false positives'
  }
  return expect(equals(()=>binarySearch(testArr, 300), 300), 'binarySearch should search for values in an array')
}