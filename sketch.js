var bg;
var snowImg;

function preload(){
  bg=loadImage("snow1.png");
  snowImg=loadImage("snow4.png");
}

function setup() {
  createCanvas(1200,600);
}

function draw() {
  background(bg);

  snowFall();

  drawSprites();
}

function snowFall(){
  if(frameCount % 30 === 0){
  var s
    s = createSprite(400, 200, 50, 50);
    s.addImage("snow",snowImg)
    s.y = 0;
    s.x = random(10,1180);
    s.scale = 0.1;
    

    s.velocityY = 3;

  }

}































