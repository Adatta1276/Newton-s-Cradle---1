/* DEBUG NOTES

.noticed that when isstatic is false for bobs, the ropes and bobs go up */

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var BO1,BO2,BO3,BO4,BO5,R1;
var rope1,rope2,rope3,rope4,rope5;
var R2;

/* function preload()
{
	
} */

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	R1 = new Roof(400,900,720,30);
	R2 = new Roof(400,70,720,30);
	BO1 = new Bob(260,700,70);
	BO2 = new Bob(330,600,70);
	BO3 = new Bob(400,600,70);
	BO4 = new Bob(470,600,70);
	BO5 = new Bob(540,600,70);

	rope1 = new Rope(BO1.body,R1.body,-140,-325);
	rope2 = new Rope(BO2.body,R1.body,-70,-325);
	rope3 = new Rope(BO3.body,R1.body,0,-325);
	rope4 = new Rope(BO4.body,R1.body,70,-325);
	rope5 = new Rope(BO5.body,R1.body,140,-325);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(200);
  
  
  /*console.log(rope1.x);
  console.log(rope1.y);*/
  mouseDragged();
  drawSprites();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display(); 
  R1.display();
  R2.display()
  BO1.display();
  BO2.display();
  BO3.display();
  BO4.display();
  BO5.display();
  

 
}


function mouseDragged() {
	Matter.Body.setPosition(BO1.body,{x:mouseX,y:mouseY});
  }


