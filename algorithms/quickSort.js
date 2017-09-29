/*
  Quick Sort:

  Quick sort is a sorting algorithm that takes an element from an unsorted array
  and compares it against every other element.  Elements less than the compared
  value are shifted to the left side of the array while greater elements are
  shifted to the right.  At the end, we know the final index of the compared element
  and we're left with two unsorted arrays.

  Fortunately, we just wrote a sorting function, so we call it on each of those two
  arrays, and it keeps going until the entire original array is sorted.  For instance:

  [5, 4, 9, 8, 2, 3, 1, 6, 7]

  We skip over the first element of the array and start comparing against it.

  5

  [5, 4, 9, 8, 2, 3, 1, 6, 7]
      ^                    ^
  4 is less than 5, so it belongs on the left:

  [5, 4, 9, 8, 2, 3, 1, 6, 7]
         ^                 ^
  9 is greater than 5, so we count from the end of the array until we find a value less
  than 5, and swap them:

  [5, 4, 9, 8, 2, 3, 1, 6, 7]
         ^           ^
  [5, 4, 1, 8, 2, 3, 9, 6, 7]
         ^        ^

  8 is greater than 5, so we search from the right for a low number again:

  [5, 4, 1, 8, 2, 3, 9, 6, 7]
            ^     ^
  [5, 4, 1, 3, 2, 8, 9, 6, 7]
            ^  ^
  The two pointers meet each other at 2, so 2 and 5 are swapped:

  [2, 4, 1, 3, 5, 8, 9, 6, 7]
               ^
  5 is in its final position, and we can call quicksort again on the subarrays to the
  left and to the right of it:

  [2, 4, 1, 3, 5, 8, 9, 6, 7]
      ^     ^
  [2, 1, 4, 3, 5, 8, 9, 6, 7]
      ^
  [1, 2, 4, 3, 5, 8, 9, 6, 7]

  The final position for 2 is found, resulting in two more subarrays that need to be sorted:

  [1, 2, 4, 3, 5, 8, 9, 6, 7]
   ^
  The subarray to the left of 2 has a length of 1, so is already sorted

  [1, 2, 4, 3, 5, 8, 9, 6, 7]
            ^
  There's only one element in the subarray to the right of 2, and it's less than the
  number we're comparing aginst, so they get swapped, leaving the second half of the original
  array:

  [1, 2, 3, 4, 5, 8, 9, 6, 7]
                     ^     ^
  [1, 2, 3, 4, 5, 8, 7, 6, 9]
                        ^
  [1, 2, 3, 4, 5, 6, 7, 8, 9]

  Coincidentally, the array is sorted after the first iteration, but the recursive calls
  to the subarrays to the left and right of 8 will have to check to make sure of that.
  [9] has a length of one, and so is sorted. [6, 7] compares 6 against 7 and finds it is
  already sorted.
*/

function quickSort(arr){

}

quickSort.test = function(){
  let testArr = []
  for (let i = 200; i > 0; i--){
    testArr.push(i)
  }
  return expect(equals(()=>quickSort(testArr), testArr.reverse()), 'quickSort should sort quickly');
}