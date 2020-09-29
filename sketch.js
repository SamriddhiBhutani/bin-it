const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, rect1, rect2, rect3, paper;

function setup() {
	createCanvas(1300, 500);
	engine = Engine.create();
	world = engine.world;
  ground = new Ground(650,480,1300,20);
  rect1 = new Dustbin(850,405,20,130);
  rect2 = new Dustbin(995,460,270,20);
  rect3 = new Dustbin(1140,405,20,130);
  paper = new Paper(100,460,50);
	Engine.run(engine);
  }


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  rect1.display();
  rect2.display();
  rect3.display();
  paper.display();
  keyPressed();
  }

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paper.body,paper.body.position,{x:85, y:-85})

  }
}