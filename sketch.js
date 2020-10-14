
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function setup() {
	var canvas = createCanvas(800, 400);
    engine = Engine.create();
	world = engine.world;

	ground = new Ground(400, 365, 800,10);

    recta1 = new Recta(600,355,200,20);
	recta1.shapeColor = "white";
	
	recta2 = new Recta(500,215,20,300);
	recta2.shapeColor = "white";

    recta3 = new Recta(700,215,20,300);
	recta3.shapeColor = "white";

	paperObject = new Paper(100,350,20);

	keyPressed();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  Engine.update(engine);
  ground.display();
  recta1.display();
  recta2.display();
  recta3.display();
  paperObject.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85}); 
	 }
   }
   
   



