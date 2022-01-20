var w;

function setup() {
  createCanvas(640, 360);
  // Make a Walker object
  w = new Walker();
  
  //Create a new slider:  https://p5js.org/reference/#/p5/createSlider
  slider01 = createSlider(0, 255, 100);  //colour
  slider01.position(10, 10);
  slider01.style('width', '120px');
  slider02 = createSlider(0, 255, 100);  //speed
  slider02.position(10, 30);
  slider02.style('width', '120px');
  slider03 = createSlider(0, 255, 100);  //size
  slider03.position(10, 50);
  slider03.style('width', '120px');
  
  //Create a new button:  https://p5js.org/reference/#/p5/createButton
  button01 = createButton('Reset Positon');
  button01.position(width - 120, 20);
}

function draw() {
  background(51);
  // Update and display object
  w.update();
  w.display();
}

function Walker() {

  // Start Walker in center
  this.pos = createVector(width / 2, height / 2);

  this.update = function() {
    // Move Walker randomly
    let directionX = slider02.value() / 10;
    let directionY = slider02.value() / 10;
    var vel = createVector(random(-1 * directionX, directionX), random(-1* directionY, directionY));
    this.pos.add(vel);
    
    button01.mousePressed(ResetPos);
  }

  this.display = function() {
    // Draw Walker as circle
    //https://p5js.org/reference/#/p5/color
    
    let slideHue = slider01.value();
    colorMode(HSB);
    let slideColour = color(slideHue, 50, 250);
    fill(slideColour);
    
    ellipse(this.pos.x, this.pos.y, slider03.value(), slider03.value());
  }
  
  this.debug = function() {
     //debug
    print(mouseX, " AND ", mouseY);
  }
  
  
  function ResetPos() {
    Walker.pos = createVector(width / 2, height / 2);
  }
}
