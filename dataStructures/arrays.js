/*
    Arrays:

  Arrays are one of the basic data structures to understand.  Interestingly, JavaScript originally shipped
  without them, so now there's a mix of Arrays and array-like objects, like HTMLCollection and the arguments
  object, which contain incrementally numbered properties and a length property.  The crucial difference between
  them is that array-like objects do not inherit functions from the Array prototype, so trying to call forEach
  on the arguments object will throw an error, since forEach will be undefined.

  For this exercise, we will be re-creating some functions from the Array prototype to better understand how
  they work.

*/

const NewArray = function(){
  this.length = 0;
}

/*
  Push takes values and adds them to the end of an array.
*/

NewArray.prototype.push = function(...values){
  //FILL ME IN
}

/*
  Pop removes the value at the end of an array and returns it.
*/

NewArray.prototype.pop = function(){
  //FILL ME IN
}

/*
  Unshift adds a value to the front of an array.  What happens when there's a value already there?  Note
  how much work the computer has to do as the size of the array increases.

  Advanced: use the spread operator (unshift = function(...values){}) to allow the function to take more than one value
*/

NewArray.prototype.unshift = function(values){
  //FILL ME IN
}

/*
  Shift removes the value at the front of an array and returns it.  This is just as much work as unshift!
*/

NewArray.prototype.shift = function(){
  //FILL ME IN
}

/*
  slice takes an inclusive start index and an exclusive end index and returns a new array containing the elements contained
  within that range.  This is also useful for copying an array.
*/

NewArray.prototype.slice = function(start, end){
  //FILL ME IN
}

/*
  Splice takes a start index, a number of items to remove, and a number of optional values to replace them with.  It then
  modifies the array in-place and returns the elements that have been removed.  For instance, if you called:

  let foo = [1, 2, 3, 4, 5];
  foo.splice(1, 2, 6, 7, 8);

  the array would be [1, 6, 7, 8, 4, 5], and it would return [2, 3].

  If you think this one is hard, save it for later!
*/

NewArray.prototype.splice = function(index, count, ...values){
  //FILL ME IN
}



NewArray.prototype.test = function(){
  let results = ['Arrays: '];
  return results;
}