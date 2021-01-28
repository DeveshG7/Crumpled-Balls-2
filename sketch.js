
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,box1, ground;

function preload() {

}

function setup() {
	createCanvas(1200, 450);

	engine = Engine.create();
	world = engine.world;

	paper= new Paper(100,375,70)	
	
    box1 = new Box(1010,415);
	
	ground = new Ground(600,430,1200,20);
   
	Matter.Engine.run(engine)
}


function draw(){
  background(255);
  Engine.update(engine);

  paper.display();
  box1.display();
  ground.display();


}


function keyPressed() {

if (keyCode === UP_ARROW){

	Matter.Body.applyForce(paper.body,paper.body.position,{x: 135, y:-135});

}
}
