function setup() {
  createCanvas(400, 400);
  background('white');
  nSlider = createSlider(0, 20, 7);
  nSlider.position(20, 20);
  jSlider = createSlider(0, 20, 3);
  jSlider.position(20, 50);
}

function draw() {
  background('white');
  text('Number of Points '+nSlider.value(), 190, 20)
  text('Connecting Delta '+ jSlider.value(), 190, 50)
  makeNDotsAndDrawLines(nSlider.value(), jSlider.value());
}

function makeNDotsAndDrawLines(n, j) {
  var l = [];
  var degree = 2*PI / n;
  for (var i = 1; i <= n; i++) {
    var a = i * degree;
    var r = 100;
    var x = r * cos(a) + width / 2;
    var y = r * sin(a) + height / 2;
    l.push([x,y]);
    fill('black');
    noStroke();
    ellipse(x, y, 4, 4);
  }
  for (var i = 0; i<n; i++){
    stroke(4);
    line(l[i][0], l[i][1], l[(i+j)%n][0], l[(i+j)%n][1]);
  }
}
