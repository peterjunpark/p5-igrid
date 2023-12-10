let cols;
let rows;
let size = [];
let spacing = 20;
let scale = 0.01;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  cols = width / spacing;
  rows = height / spacing;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background('steelblue');
  fill('lime');

  for (let i = 0; i < cols; i++) {
    size[i] = [];
    for (let j = 0; j < rows; j++) {
      size[i][j] =
        dist(mouseX, mouseY, spacing / 2 + i * spacing, spacing / 2 + j * spacing) * scale;
    }
  }

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      rect(spacing / 2 + i * spacing, spacing / 2 + j * spacing, size[i][j], size[i][j]);
    }
  }
}
