/*
  Insertion Sort:

  Insertion sort is one of the first sorting algorithms most people learn,
  mainly due to its simplicity.  It builds a sorted array from the beginning of
  the array by inserting items one at a time.

  For instance, let's sort the array [4, 3, 2, 1], lowest to highest.  The first
  index is already considered to be sorted, so it compares the second element
  to the first, finds it out of place, and swaps them:

  [3, 4, 2, 1]

  It then moves on to the third element and compares it with 4.  2 is lower than 4,
  so they're swapped:

  [3, 2, 4, 1]

  2 is also smaller than 3, so they're swapped too:

  [2, 3, 4, 1]

  It does the same thing a final time for 1:

  [2, 3, 1, 4]
  [2, 1, 3, 4]
  [1, 2, 3, 4]

  This is a worst-case scenario for insertion sort, since each element has to be
  compared against each element that came before it.

  In practice, insertionsort should rarely, if ever, be used, but it's easy to learn.
*/

function insertionSort(arr){

}

insertionSort.test = function(){
  let testArr = [8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8];
  return expect(equals(()=>insertionSort(testArr), testArr.reverse()), 'insertionSort should sort by insertion');
}