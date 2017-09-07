let rotateStart;

let cube = findFirstElement(function(current){
  return current.className === 'cube';
});

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

document.documentElement.onmousedown = function(event){
  rotateStart = mouseMove(event);
  document.documentElement.addEventListener('mousemove', rotateStart);
}

document.documentElement.onmouseup = function(event){
  console.log(cube.style.transform)
  document.documentElement.removeEventListener('mousemove', rotateStart);
}

function mouseMove(startEvent){
  let last = 0;
  let startX = startEvent.x;
  let startY = startEvent.y;

  let startStyle = cube.style.transform.match(/-?[0-9]+/g) || [0, 0];


  startStyle = startStyle.map(Number).reverse();


  console.log(startStyle);

  let offsetX = startStyle[0];
  let offsetY = startStyle[1];

  return function(event){
    console.log('mousemove')
    let current = Date.now();
    if ((current - last) <= 30){
      return;
    }
    last = current;
    let styles = styleStrings((offsetX + (event.x - startX)) % 360, (offsetY - (event.y - startY)) % 360);
    cube.style = styles[0];
  }
}

function styleStrings(x, y){
  return ["-webkit-transform: rotateX(" + y + "deg) rotateY(" + x + "deg);",
          "-moz-transform: rotateX(" + y + "deg) rotateY(" + x + "deg) translateZ(-600px);",
          "-o-transform: rotateX(" + y + "deg) rotateY(" + x + "deg) translateZ(-600px);",
          "transform: rotateX(" + y + "deg) rotateY(" + x + "deg) translateZ(-600px);"];
}

function test(object, func, result){
  return JSON.stringify(func(object)) === JSON.stringify(result);
}