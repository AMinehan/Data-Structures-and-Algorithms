/*
  Bubble Sort:

  Bubble sort is the first sorting algorithm most people learn, mainly due to
  its simplicity.  Starting from the front of an array, it takes each element
  and compares it one at a time with each element that was sorted before it.

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

  This is a worst-case scenario for bubble sort, since each element has to be
  compared against each element that came before it.

  In practice, bubblesort should never be used by anyone, but it's easy to learn.
*/

function bublleSort(arr){

}