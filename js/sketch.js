function setup() {
  createCanvas(windowWidth, windowWidth);

  background(180, 60, 220);

  print(windowWidth);
  //tells us the window width

  rectMode(CENTER);
  //change rect x, y coordinates to center
}

function draw() {
  // put drawing code here
  fill(120);
  //affects everything after it
  stroke(40, 200, 100);
  strokeWeight(10);
  //affects stroke weight
  ellipse(300, 500, 50, 50);
  point(mouseX, mouseY);
  rect(800, 300, 200, 300);
  //x, y, width, height
  noFill();
  triangle(1200, 50, 1300, 600, 950, 400);

  print(mouseX);
}
