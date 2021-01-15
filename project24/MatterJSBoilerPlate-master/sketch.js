
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1=new Box(300,630,20,100);
	box2=new Box(500,630,20,100);
	box3=new Box(400,660,200,20);
ground = new Ground(400,700,800,20);
ball = new Paper(100,680,40);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('lightgreen');
  box3.display();
 // box2.display();
// box1.display();
 ground.display();
 ball.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:0.1,y:-0.2});
	}
}

