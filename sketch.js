function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  background('black');
  nSlider = createSlider(0, 10, 7);
  nSlider.position(20, 20);
  jSlider = createSlider(0, 10, 3);
  jSlider.position(20, 50);
}

function draw() {

  text('Number of Points', 190, 20)
  text('Connecting Delta', 190, 50)
  makeNDots(nSlider.value(), jSlider.value());
}

function makeNDots(n, j) {
  var l = []
  var degree = 360 / n;
  for (var i = 1; i <= 100; i++) {
    var a = i * degree;
    var r = 100;
    var x = r * cos(a) + width / 2;
    var y = r * sin(a) + height / 2;
    l.push([x, y])
    fill(0, 255, 255);
    noStroke();
    ellipse(x, y, 4, 4);

  }
  console.log(l)

  line(0, 0, width, height)

  for (var i = 1; i <= n; i++) {
    fill(0, 255, 255);
    stroke(100);
    line(l[i][0], l[i][1], l[i + j][0], l[i + j][1]);

  }
  l = []
}
