// defining constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

// defining variables
var engine, world;
var ground, plinkos, divisions, particles;
var plinkos = [];
var divisions = [];
var particles = [];
var divisionsHeight = 300;

function setup() {

  // creating canvas 
  createCanvas(480, 800);
  
  // creating engine and adding it to world
	engine = Engine.create();
	world = engine.world;

  // creating bodies
  // ground
  ground = new Ground(10, 795, 940, 10);

  // plinkos
  for(var j = 40; j <= width; j = j+50)
  {
    plinkos.push(new Plinkos(j , 75));
  }
  for(var j = 15; j <= width-10; j = j+50)
  {
    plinkos.push(new Plinkos(j ,175));
  }
  for(var j = 40; j <= width; j = j+50)
  {
    plinkos.push(new Plinkos(j , 275));
  }
  for(var j = 15; j <= width-10; j = j+50)
  {
    plinkos.push(new Plinkos(j ,375));
  }  

  // divisions
  for(var k = 0; k <= width; k = k + 82){
    divisions.push(new Divisions(k, height-divisionsHeight/2, 10, divisionsHeight));
  }
}

function draw() {

  // rect
  rectMode(CENTER);

  // giving background color
  background("black");  

  // displaying sprites
  drawSprites();
  
  // updating engine
  Engine.update(engine) 

  // particles
  if(frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
  }

  // displaying objects 
  // ground
  ground.display();

  // plinkos
  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
 }

 // divisions
 for(var k = 0; k < divisions.length; k++){
  divisions[k].display();
 }
 
 // particles
 for(var i = 0; i < particles.length; i++){
  particles[i].display();
 }
} 