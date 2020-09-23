const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
gameState =  "serve"

var engine, world;
var mango1, mango2, bg,stone,tree,boy,bgIMG,tree;
var launcher;
function preload() {
    bgImg = loadImage("bg.png");
    boy = loadImage("Plucking mangoes/boy.png");
	tree = loadImage("Plucking mangoes/tree.png");

}

function setup(){
    var canvas = createCanvas(1200,400);
    

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    mango1 = new Mango(900,150,8);
	mango2 = new Mango(950,120,10);
	mango3 = new Mango(1000,100,7);
	mango4 = new Mango(950,60,9);
    mango5 = new Mango(1050,60,6);
    
    boy = new Boy(200,340,30,40);
     tree = new Tree(900,200,60,80);
    stone = new Stone(200,50);
    launcher = new Launcher(stone.body,{x:140, y:300});
}

function draw(){
    background(0, 174, 255);
    Engine.update(engine);
    mango1.display();
    mango2.display();
    ground.display();
    mango3.display();
    mango4.display();
    mango5.display();
    stone.display();
    tree.display();
    boy.display();
    launcher.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
    gameState = "fly"
}

function keyPressed(){
    if(keyDown="space"){
       launcher.attach(boy.body);
    }
}
function detectCollision(stone ,mango ){
    mangoBodyPosition=mango.body.position
    stoneBodyPosition=stone.body.position
   
   var distance=dist(stoneBodyPosition.x,stoneBodyPosition.ys,mangoBodyPosition.x,mangoBodyPosition.y)
   
   if (distance<=mango.r,stone.r){
   Matter.Body.setStatic(mangoBody,false);
   }
   }