/*
    Heaps (priority queues, or minheaps/maxheaps):

  Heaps keep the highest or lowest value in an array in a set position in an
  array for ease of access.  The first element in the array is typically undefined,
  because math.  Consider the following array, labeled by index:

  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  It could also be represented as a tree:

        1
      /   \
    2       3
   / \     / \
  4   5   6   7
 / \  |
8  9 10

  Each element of the array at index i has two childen at index i * 2 and (i * 2) + 1.
  Similarly, each element of the array at index i has a parent at index Math.floor(i / 2).

  Keeping the highest valued element at the front of the array depends on two functions:
  upsert and bubbledown.  When we add a new element to the array, upsert check to see if its
  parent has a lower value, and if so, it swaps the two elements and calls itself on the
  parent index, until either the new value is at the front of the array or the parent index
  is a higher value.

  For instance, take the following array:

  [undefined, 5, 4, 3, 2, 1]

  We would like to add 6 to it, so the array becomes:

  [undefined, 5, 4, 3, 2, 1, 6]

  Upsert checks to see if the parent of index 6 is a lower value, which it is, and the array becomes:

  [undefined, 5, 4, 6, 2, 1, 3]

  Upsert is then called again on index 3, which finds its parent is a lower value.  The array
  is now sorted:

  [undefined, 6, 4, 5, 2, 1, 3]

  Bubbledown is used when an element from the array is removed.  When the remove function is
  used, it makes a reference to the element at index 1 and replaces it with the element at
  the end of the array.  Bubbledown is then called on index 1, which then checks to see if
  either of its two children have a higher value.  If so, it swaps the parent index with the
  highest-valued child index.  For instance, let's call remove on the previous array:

  [undefined, 6, 4, 5, 2, 1, 3]

  The first element is stored and replaced:

  [undefined, 3, 4, 5, 2, 1]

  Bubbledown then finds a higher-valued child node:

  [undefined, 5, 4, 3, 2, 1]

  And the array is now sorted again.  Let's call remove until every element is gone:

  [undefined, 1, 4, 3, 2]  -> 5
  [undefined, 4, 1, 3, 2]
  [undefined, 4, 2, 3, 1]
  [undefined, 1, 2, 3]     -> 4
  [undefined, 3, 2, 1]
  [undefined, 1, 2]        -> 3
  [undefined, 2, 1]
  [undefined, 1]           -> 2
  [undefined]              -> 1

*/

const PriorityQueue = function(){
  this.values = [undefined];
}

PriorityQueue.prototype.add = function(value){
  //FILL ME IN
}

PriorityQueue.prototype.remove = function(){
  //FILL ME IN
}

PriorityQueue.prototype.bubbleDown = function(value){
  //FILL ME IN
}

PriorityQueue.prototype.upsert = function(value){
  //FILL ME IN
}

PriorityQueue.prototype.test = function(){
  let results = ['Priority Queue: '];
  return results;
}