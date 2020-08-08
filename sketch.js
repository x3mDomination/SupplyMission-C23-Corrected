var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var Box1, Box2,Box3,redBox1,redBox2,redBox3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	/*
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	*/

	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Box1 = new redBox(width/2,650,200,20);
	Box2 = new redBox(490,612.5,20,100);
	Box3 = new redBox(310,612.5,20,100);

	//problem was that the circle radius in matter.js was too small
	packageBody = Bodies.circle(width/2 , 200 , 25 , {restitution:0, isStatic:true});
	World.add(world, packageBody);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  //packageSprite.x= packageBody.position.x 
  //packageSprite.y= packageBody.position.y 
 
  Box1.display();
  Box2.display();
  Box3.display();

  var posi = packageBody.position;
  imageMode(CENTER);
  image(packageIMG,posi.x,posi.y,50,50);

  drawSprites();

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false);
  }
}



