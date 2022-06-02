var man, zombie, arrow, snake, spider, stone, people;
function preload() {
  backgroundImage = loadImage("./assets/bg.jpg");
  man1Image = loadImage("./assets/manrunning1.png");
  man2Image = loadImage("./assets/manrunning2.png");
  man3Image = loadImage("./assets/manrunning3.png");
  man4Image = loadImage("./assets/manrunning4.png");
  man5Image = loadImage("./assets/manrunning5.png");
  man6Image = loadImage("./assets/manrunning6.png");
  man7Image = loadImage("./assets/manrunning7.png");
  man8Image = loadImage("./assets/manrunning8.png");
  man_running = loadAnimation("./assets/manrunning1.png", "./assets/manrunning2.png", "./assets/manrunning3.png", "./assets/manrunning4.png", "./assets/manrunning5.png", "./assets/manrunning6.png", "./assets/manrunning7.png", "./assets/manrunning8.png")
  
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  man = createSprite(50, 350, 20, 50)

  man.addAnimation("running", man_running);
}

function draw() {
  background(backgroundImage);

  drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
