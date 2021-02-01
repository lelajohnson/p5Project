let ellipseX = 0;
let ellipseY = 0;
let claire;

function setup() {
  createCanvas(windowWidth, windowWidth);

  background(180, 60, 220);

  //tells us the window width

  function preload(){
      claire = loadImage("images/claire.jpg");

  }

  imageMode(CENTER);

  rectMode(CENTER);
  //change rect x, y coordinates to center

  ellipseX = random(ellipseX, windowWidth);
  ellipseY = random(ellipseY, windowHeight);

  print(ellipseX);
}

function draw() {
  // put drawing code here
  fill(120);
  //affects everything after it
  stroke(random(40), random(200), random(100));
  strokeWeight(10);
  //affects stroke weight
  ellipse(ellipseX, ellipseY, 50, 50);
  point(mouseX, mouseY);
  rect(800, 300, 200, 300);
  //x, y, width, height
  noFill();
  triangle(1200, 50, 1300, 600, 950, 400);

  print(mouseX);
  strokeWeight(10);
  line(30, 200, 800, 600);

  image(claire, windowWidth/2, windowHeight/2);
}
