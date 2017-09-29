/*
  Linked Lists:

  If an array is a stack, a linked list is a queue. A linked list offers a constant-
  time method to remove and replace the first element of the queue and a constant-time
  way to add an element to the end of the queue.

  It does this by making each element point to the element behind it in the queue.
  When an element is removed, the head is reassigned to the next element.

  For instance, let's add some values to a linked list:

  add(5)
  add(4)
  add(3)
  add(2)
  add(1)

                                       head        tail
                                         v           v
  Our linked list would have an order of 5, 4, 3, 2, 1.  Pretty straightforward, so let's
  add and remove some values:

  remove()
  add(0)
  remove()
  add(7)

                                     head       tail
                                      v           v
  The linked list now has an order of 3, 2, 1, 0, 7.

  Doubly-linked lists simply make each element point to the element in front of it as well.
  They're not terribly useful, but that may be useful to know for an interview.

*/

const LinkedList = function() {
  this.head = undefined;
  this.tail = undefined;
}

const LinkedListNode = function(value){
  this.value = value;
  this.next = undefined;
}

LinkedList.prototype.addToTail = function(value){
  // FILL ME IN
}

LinkedList.prototype.removeHead = function(){
  // FILL ME IN
}



LinkedList.prototype.test = function(){
  let results = ['Linked Lists: '];

  this.addToTail(1);
  results.push(expect(equals(()=>this.head.value, 1), 'LinkedList should properly enqueue'));
  this.addToTail(2);
  this.addToTail(3);
  results.push(expect(equals(()=>this.removeHead(), 1), 'LinkedList should properly dequeue'));
  this.removeHead()
  results.push(expect(equals(()=>this.head.value, 3), 'LinkedList should maintain first-in-first-out order'));
  this.addToTail(4);
  results.push(expect(equals(()=>this.head.value, 3), 'LinkedList should end with a head value of 3'));
  results.push(expect(equals(()=>this.tail.value, 4), 'LinkedList should end with a tail value of 4'));
  return results;
}