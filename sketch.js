const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var backgroundImg;
var snow = []

function preload(){
  backgroundImg=loadImage("snow2.jpg");
}


function setup() {
  createCanvas(800,500);
  engine=Engine.create();
  world= engine.world;
  Engine.run(engine);
  
  /*backgrounds = createSprite(400, 200, 50, 50);
  backgrounds.addImage(backgroundImg);
  backgrounds.scale = 0.6;

  snow1= new Snow(20, -10);
  snow1.scale = 0.1;*/
}

function draw() {
  background(backgroundImg); 
  Engine.update(engine)
  
  if(frameCount % 40 === 0){
    snow.push(new Snow())
  }

  for(var j = 0; j < snow.length; j++){
    snow[j].display();
  }

  drawSprites();
}