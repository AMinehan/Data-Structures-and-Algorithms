/*
  Merge Sort:

  Merge sort is a way of sorting that takes two sorted arrays and compares
  them against each other to join them into one sorted array.  Let's say we
  have these two arrays:

  [1, 3, 5, 7]
  [2, 4, 6, 8]

  ...but we only want to have one array.  We can do this by comparing the first
  value of each array against each other.  1 is lower than 2, so we push 1 to
  a results array, and advance our progress in the first array to the next element:

  [1]

  [1, 3, 5, 7]
      ^
  [2, 4, 6, 8]
   ^

  We then compare 2 against 3, push the lower value to the results array, and
  advance our progress in that array:

  [1, 2]

  [1, 3, 5, 7]
     ^
  [2, 4, 6, 8]
     ^

  We keep doing this until we've searched through all values of both arrays and
  the results array is a sorted array containing both original arrays.

  This is an easy way of combining two arrays, but how can we use this to sort a
  single, unsorted array?

  [5, 4, 2, 3, 1, 6, 7, 8]

  First, we break the array in half, so we have two arrays to compare to each other:

  [5, 4, 2, 3]
  [1, 6, 7, 8]

  This is a really great start.  The arrays aren't sorted, though, so we'll have to sort
  them by calling the sorting function we just made on them.  The first array gets
  broken in half again:

  [5, 4]
  [2, 3]

  Unforunately, they're still not sorted.  So, we call our sorting function on them yet again:

  [5]
  [4]

  There!  All sorted.  Now they can be merged together with our mergesort function:

  [4, 5]

  The second array, [2, 3], happens to be sorted, but we're not going to check that it is
  so instead we'll break it apart:

  [2]
  [3]

  and merge it back together:

  [2, 3]

  ...and merge it with our other sorted array:

  [2, 3, 4, 5]

  We have now sorted the first half of the original array.  The process repeats for the second
  half and we get:

  [2, 3, 4, 5]
  [1, 6, 7, 8]

  And now we can finally compare them to each other to get our final, sorted array:

  [1, 2, 3, 4, 5, 6, 7, 8]

*/

function mergeSort(arr){

}


mergeSort.test = function(){
  let testArr = [];
  for (let i = 200; i > 0; i--){
    testArr.push(i)
  }
  return expect(equals(()=>mergeSort(testArr), testArr.reverse()), 'mergeSort should sort mergingly');
}