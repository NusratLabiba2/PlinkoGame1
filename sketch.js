const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground, div1, div2, div3, div4, div5, div6, div7;

var plinkos = [];
var particles = [];

for (j = 40; j <= width; j = j + 50) {
  plinkos.push(new Plinkos(j, 75, 10))
}
for (j = 15; j <= width - 10; j = j + 50) {
  plinkos.push(new Plinkos(j, 175, 10))
}
for (j = 40; j = width; j = j + 50) {
  plinkos.push(new Plinkos(j, 275, 10))
}
for (j = 15; j = width-10; j = j + 50) {
  plinkos.push(new Plinkos(j, 375, 10))
}
for (j = 40; j = width; j = j + 50) {
  plinkos.push(new Plinkos(j, 475, 10))
}

if (World.frameCount % 90 === 0) {
  particles.push(new Particle(random(width/2-10, width/2+10), 10, 10))
}


function setup() {
  createCanvas(480, 800);
  engine = Engine.create();
    world = engine.world;

    ground = new Ground(240, 800, 500, 10);
    div1 = new Divisions(2, 650, 3, 300);
    div2 = new Divisions(80, 650, 3, 300);
    div3 = new Divisions(160, 650, 3, 300);
    div4 = new Divisions(240, 650, 3, 300);
    div5 = new Divisions(320, 650, 3, 300);
    div6 = new Divisions(400, 650, 3, 300);
    div7 = new Divisions(478, 650, 3, 300);

    for (var j = 0; j < plinkos.length; j++) {
      plinkos[j].display();
    }
    for (var k = 0; k < particles; k++) {
      particles[k].display();
    }
}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
}