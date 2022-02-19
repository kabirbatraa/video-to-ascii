

let cat;
// let video;
// let asciiDiv;

const density = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,\"^`'.              ";

function preload() {
  cat = loadImage("cat.jpeg");
  cat = createCapture(VIDEO);
  cat.size(100,100);
}

function setup() {
  createCanvas(1000, 1000);
  noStroke();
  ellipseMode(CORNER);
  // textMode(CORNER);
  cat.hide();

  // asciiDiv = createDiv();
  // noCanvas();
  // frameRate(1);
}

function draw() {
  background(0);
  // image(cat, 0, 0, width, height);
  cat.loadPixels();

  let w = width / cat.width;
  let h = height / cat.height;

  // let outString = "";

  for (let j = 0; j < cat.height; j += 1) {
    for (let i = cat.width; i >= 0; i -= 1) {
      const pixelIndex = 4 * (i + j * cat.width);
      const r = cat.pixels[pixelIndex];
      const g = cat.pixels[pixelIndex+1];
      const b = cat.pixels[pixelIndex+2];
      let c = color(r, g, b);
      // let bright = brightness(c);
      let bright = (r + g + b) / 3;
      let densityIndex = floor(map(bright, 0, 255, density.length-1, 0));
      fill(255);
      text(density.charAt(densityIndex), (cat.width - i - 1) * w, j * h);
      // fill(c);
      // rect((cat.width - i - 1) * w, j * h, 10, 10);

      // if (density.charAt(densityIndex) == " ") {
      //   outString += "&nbsp;"
      // }
      // else {
      //   outString += density.charAt(densityIndex);
      // }
    }
    // outString += "<br/>";
    // outString += "<br/>";
  }
  // asciiDiv.html(outString);

  // text("hi", width/2, height/2);
}
