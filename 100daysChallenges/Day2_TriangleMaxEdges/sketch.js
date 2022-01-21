let Edge01, Edge02;
function setup() {
  createCanvas(400, 400);
  w = new Walker();

  length01 = createSlider(1, 64, 1); //colour
  length01.position(width - 150, 15);
  length01.style("width", "120px");
  length02 = createSlider(1, 64, 1); //speed
  length02.position(width - 150, 45);
  length02.style("width", "120px");
}

function draw() {
  w.update();
  w.display();
}

function Walker() {
  // Start Walker in center
  this.display = function () {};

  this.update = function () {
    //https://edabit.com/challenge/nhXofMMyrowMyr9Nv
    let Edge01 = length01.value();
    let Edge02 = length02.value();
    let MaxEdge = Edge01 + Edge02 - 1;
    print(
      "Edge 1: " +
        Edge01 +
        "    Edge 2: " +
        Edge02 +
        "    MaximumEdge: " +
        MaxEdge
    );

    //https://p5js.org/reference/#/p5/beginShape
    beginShape();
    background(220);
    vertex(30 + Edge01, 75);
    vertex(40 + Edge02, 20 + Edge02);
    vertex(50, 75);
    vertex(30 + Edge01, 75) + Edge01;
    endShape();
  };
}
