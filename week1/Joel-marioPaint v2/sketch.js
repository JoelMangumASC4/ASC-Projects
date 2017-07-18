


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(153);
  fill('red');
  rect(50, 50, 55, 55);
  fill('yellow');
  rect(50, 150, 55, 55);
  fill('black');
  rect(50, 250, 55, 55);

  // button = createButton('click me');
  //button.position(19, 19);
  //button.mousePressed(changeBG);
}
/*function changeBG() {
  var color = [random(255),random(255),random(255)];
 // background(val);
 return color;
}*/

function roll(n) {
  return Math.floor(Math.random() * n);
}




var blah = [255, 204, 0];

function mouseDragged() {
  fill(blah);
  console.log(blah);
  ellipse(mouseX, mouseY, roll(50), roll(50));
  // prevent default
  return false;
}

function mousePressed() {
  //if(mouseX>49 && mouseX<105, mouseY> && mouseY)
}

/*
function mousePressed() {
  console.log('the mouseis at x:' + mouseX + ' y:' + mouseY);
}

function setup() {
  createCanvas(600, 600);
  background(190);
  fill("red");
  rect(93, 91, 20, 20);
  fill("green");
  triangle(197, 107, 207, 87, 217, 107);
  fill("blue");
  ellipse(303, 102, 30, 30)

};
function mouseClicked() {
  if (mousX > (92))
    return false;
}*/
