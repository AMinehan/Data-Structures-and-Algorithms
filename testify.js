let rotateStart;

let cube = findFirstElement(function(current){
  return current.className === 'cube';
});

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

document.documentElement.onmousedown = function(event){
  let rotateStart = mouseMove(event.x, event.y);
  document.documentElement.addEventListener('mousemove', rotateStart);
}

document.documentElement.onmouseup = function(event){
  document.documentElement.removeEventListener('mousemove', rotateStart);
}

function mousemove(startX, startY){
  let last = 0;
  return function(event){
    let current = Date.now();
    if (current - last <= 30){
      return;
    }
    last = current;

  }
}

function styleStrings(x, y){
  return ["-webkit-transform: rotateX(" + x + "deg) rotateY(" + y + "deg);",
          "-moz-transform: rotateX(" + x + "deg) rotateY(" + y + "deg);",
          "-o-transform: rotateX(" + x + "deg) rotateY(" + y + "deg);",
          "transform: rotateX(" + x + "deg) rotateY(" + y + "deg);"];
}