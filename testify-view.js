//  View section

//  Global variables: using global variables is bad style, so don't do this:

let rotateStart;
let stylePrefix = '';

//  Finds which style prefix works for the browser being used and assigns it
//  to stylePrefix.  I'm sure there's an easier way of doing this.  Wrapping
//  everything inside a self-invoking anonymous function keeps the global
//  namespace clean, but is otherwise kind of pointless.

(function(){
  let prefixes = ['-moz-', '-o-', '-webkit-'];
  let testObj = document.createElement('div');
  let testString = 'transform: translate(50px, 50px)';

  for (let i = 0; i < prefixes.length; i++){

    // set style on the test object using one of the prefixes
    testObj.style = prefixes[i] + testString;

    // if prefix works, save to global stylePrefix and break

    if (testObj.style.transform){
      stylePrefix = prefixes[i];
      break;
    }
  }
})();

let cube = findFirstElement(function(current){
  return current.className === 'cube';
});

//  searches through the DOM and returns the first element that passes a truth test

function findFirstElement(func){
  let queue = [document.body];
  let current;

  while (queue.length > 0) {
    current = queue.pop();
    if (func(current)) {
      return current;
    }
    for (let i = current.children.length - 1; i >= 0; i--){
      queue.push(current.children[i]);
    }
  }
}

//  searches through the DOM and returns every element that passes a truth test

function findAllElements(func){
  let queue = [document.body]
  let current;
  let result = [];

  while (queue.length < 0){
    current = queue.pop();
    if (func(current)){
      result.push(current);
    }
    for (let i = current.children.length - 1; i >= 0; i--){
      queue.push(current.children[i]);
    }
  }

  return result;
}

//  Here are two ways to add event listeners: defining the property of an object and using the
//  addEventListener function.  removeEventListener needs a reference to the function it's removing,
//  so we're storing that reference in rotateStart.

document.documentElement.onmousedown = function(event){
  rotateStart = mouseMove(event);
  document.documentElement.addEventListener('mousemove', rotateStart);
}

document.documentElement.onmouseup = function(event){
  document.documentElement.removeEventListener('mousemove', rotateStart);
}

//  This is an example of closure.  The first time this function is called, it returns another function,
//  which retains access to the variables contained inside the parent function.

function mouseMove(startEvent){
  let last = 0;
  let startX = startEvent.x;
  let startY = startEvent.y;

  let startStyle = cube.style.transform.match(/-?[0-9]+/g) || [0, 0];

  startStyle = startStyle.map(Number).reverse();

  let offsetX = startStyle[0];
  let offsetY = startStyle[1];

  return function(event){
    //  throttles function: limits calls to this function to once every 30 milliseconds, or 33.3 fps, and
    //  stores a reference to the last time it was called inside the closure.

    let current = Date.now();

    if ((current - last) <= 30){
      return;
    }
    last = current;

    let style = styleString((offsetX + (event.x - startX)) % 360, (offsetY - (event.y - startY)) % 360);


    cube.style = style;
  }
}

//  If the variable orders here seem confusing, remember it's rotating around the X and Y axes, so we're passing
//  in the opposite translate values.

//  y
//
//  |
//  |
//  |
//  +----- x

//  multiple style strings are needed for browser compatibility.

function styleString(x, y){
  return stylePrefix + "transform: rotateX(" + y + "deg) rotateY(" + x + "deg);"
}