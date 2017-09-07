// View section

let rotateStart;

let cube = findFirstElement(function(current){
  return current.className === 'cube';
});

//

cube.style.transform = "transform: rotateX(0deg) rotateY(0deg);";

//searches through the DOM and returns the first element that passes a truth test

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

//searches through the DOM and returns every element that passes a truth test

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
    let current = Date.now();

    // throttle function: limits calls to this function to once every 30 milliseconds, or 33.3 fps
    if ((current - last) <= 30){
      return;
    }
    last = current;

    let styles = styleStrings((offsetX + (event.x - startX)) % 360, (offsetY - (event.y - startY)) % 360);

    styles.forEach(function(c){
      cube.style = c;
    });
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

function styleStrings(x, y){
  return ["-webkit-transform: rotateX(" + y + "deg) rotateY(" + x + "deg);",
          "-moz-transform: rotateX(" + y + "deg) rotateY(" + x + "deg);",
          "-o-transform: rotateX(" + y + "deg) rotateY(" + x + "deg);",
          "transform: rotateX(" + y + "deg) rotateY(" + x + "deg);"];
}