const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,rope,boxes=[];

var gameState = "onSling";
var score = 0;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,40);
    plank = new Ground (100,50,250,10)
    ball= new Ball (200,100,50)
    rope = new SlingShot(ball.body,plank.body,{x:100,y:0});
    for(var i=0; i<7 ; i++){
       var box=new Box(300,100,70,70);
       boxes.push (box);
       box=new Box(400,100,70,70);
       boxes.push (box);
       box=new Box(500,100,70,70);
       boxes.push (box);
    }
    
}

function draw(){
    background(255);
   
    Engine.update(engine);
    ball.display();
    //strokeWeight(4);
    plank.display();
    rope.display();    
for (var i=0;i<boxes.length; i++){
    boxes[i].display();
}
if(keyIsDown(LEFT_ARROW)){
    plank.body.position.x-=10
}
if(keyIsDown(RIGHT_ARROW)){
    plank.body.position.x+=10
}
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    }
//}


function mouseReleased(){
    //slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
     //  slingshot.attach(bird.body);
     Matter.Body.applyForce(ball.body,ball.body.position,{x:50,y:-50})
    }
}
