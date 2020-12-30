
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Render=Matter.Render;

function preload()
{
	gg=loadImage("jungle.jpg")
	g=loadImage("tree.png")
	hi=loadImage("boy.png")
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//boy=new Boy(200,200,10,10)
	
	//tree=new Tree(1000,300,600, 600);

	tree=createSprite(1000,290,100,100);
	tree.addImage(g);
	tree.scale=0.5;


	mango1=new Mango(1100,130,20);
	mango2=new Mango(1110,180,20);
	mango3=new Mango(1060,160,25);
	mango4=new Mango(1200,270,20);
	mango5=new Mango(1200,160,20);
	mango6=new Mango(995,250,20);
	mango7=new Mango(950,170,20);
	mango8=new Mango(840,290,20);
	mango9=new Mango(970,110,20);
	mango10=new Mango(940,250,20);
	mango11=new Mango(850,200,20);
	mango12=new Mango(1060,50,20);
	mango13=new Mango(1090,250,20);
	mango14=new Mango(1240,230,20);
	mango15=new Mango(750,250,20);

	rock=new Stone(240,400,25);

	slingshot = new launcher(rock.body,{x:240, y:425});

	boy=createSprite(300,500,10,10);
	boy.addImage(hi);
	boy.scale=0.12;


	ground=new Ground(width/2,600,width,30)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(gg);

  drawSprites();

  //tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();
  mango15.display();

  slingshot.display();

  rock.display();

  detectollision(rock,mango1);
  detectollision(rock,mango2);
  detectollision(rock,mango3);
  detectollision(rock,mango4);
  detectollision(rock,mango5);
  detectollision(rock,mango6);
  detectollision(rock,mango7);
  detectollision(rock,mango8);
  detectollision(rock,mango9);
  detectollision(rock,mango10);
  detectollision(rock,mango11);
  detectollision(rock,mango12);
  detectollision(rock,mango13);
  detectollision(rock,mango14);
  detectollision(rock,mango15);

}


function mouseDragged(){
    Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode===32){

	    Matter.Body.setPosition(rock.body, {x:240, y:425})
        slingshot.attach(rock.body);
    }
}

function detectollision(lrock,lmango){

MangoBodyPosition = lmango.body.position
rockBodyPosition = lrock.body.position

var distance = dist(rockBodyPosition.x,rockBodyPosition.y,MangoBodyPosition.x,MangoBodyPosition.y)
if(distance<=lmango.r+lrock.r){

	Matter.Body.setStatic(lmango.body,false);

}

}