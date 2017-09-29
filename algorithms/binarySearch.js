/*
  Binary Search:

  Binary search is a simple and efficient way of finding a value in a sorted
  array.  It works by comparing the target value with the value in the middle
  index of the array: if it's equal to the target, it returns the middle index.
  If it's less than the target, it searches again on the right half of the array.
  Otherwise, it searches again on the left half.

  This way, each time it makes a comparison, it halves the size of the array it
  has to search.  Let's assume we have an array:

  [1, 2, 3, 4, 5, 6, 7, 8, 9]

  and we want to find the value 6.  We start at the middle index, 5, and find that
  it's less than the value we want.  We can then disregard everything up to and
  including 5:

  [6, 7, 8, 9]

  The new middle value is 7, and 6 is less than 7, so we perform the search on the
  left part of the array:

  [6]

  The middle value is now our target, and so we return the target.

*/

function binarySearch(arr, target){
  //FILL ME IN
}

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