const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	var bob1_options={
		restitution:0.0,
		isStatic:false			
	}

	bob1 = Bodies.circle(300,500,10,bob1_options);
    World.add(world,bob1);

	var bob2_options={
		restitution:0.0,
		isStatic:false			
	}

	bob2 = Bodies.circle(350,500,10,bob2_options);
    World.add(world,bob2);

	var bob3_options={
		restitution:0.0,
		isStatic:false			
	}

	bob3 = Bodies.circle(400,500,10,bob3_options);
    World.add(world,bob3);

	var bob4_options={
		restitution:0.0,
		isStatic:false			
	}

	bob4 = Bodies.circle(450,500,10,bob4_options);
    World.add(world,bob4);

	var bob5_options={
		restitution:0.0,
		isStatic:false			
	}

	bob5 = Bodies.circle(500,500,10,bob5_options);
    World.add(world,bob5);
	
	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	rope1 = Matter.Constraint.create({
		pointA:{x:300,y:100},
		bodyB:bob1,
		pointB:{x:0,y:0},
		length:400,
		stiffness:1
	  });

	World.add(world,rope1);

	rope2 = Matter.Constraint.create({
	  pointA:{x:350,y:100},
	  bodyB:bob2,
	  pointB:{x:0,y:0},
	  length:400,
	  stiffness:1
	});

    World.add(world,rope2);

  rope3 = Matter.Constraint.create({
	pointA:{x:400,y:100},
	bodyB:bob3,
	pointB:{x:0,y:0},
	length:400,
	stiffness:1
  });

  World.add(world,rope3);

  rope4 = Matter.Constraint.create({
	pointA:{x:450,y:100},
	bodyB:bob4,
	pointB:{x:0,y:0},
	length:400,
	stiffness:1
  });

  World.add(world,rope4);

rope5 = Matter.Constraint.create({
  pointA:{x:500,y:100},
  bodyB:bob5,
  pointB:{x:0,y:0},
  length:400,
  stiffness:1
});

World.add(world,rope5);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);
  
  ellipse(bob1.position.x,bob1.position.y,50,50);
  ellipse(bob2.position.x,bob2.position.y,50,50);
  ellipse(bob3.position.x,bob3.position.y,50,50);
  ellipse(bob4.position.x,bob4.position.y,50,50);
  ellipse(bob5.position.x,bob5.position.y,50,50);

  line(rope1.pointA.x,rope1.pointA.y,bob1.position.x,bob1.position.y);
  line(rope2.pointA.x,rope2.pointA.y,bob2.position.x,bob2.position.y);
  line(rope3.pointA.x,rope3.pointA.y,bob3.position.x,bob3.position.y);
  line(rope4.pointA.x,rope4.pointA.y,bob4.position.x,bob4.position.y);
  line(rope5.pointA.x,rope5.pointA.y,bob5.position.x,bob5.position.y);
}

	function keyPressed(){
  		if(keyCode==UP_ARROW){
      		Matter.Body.applyForce(bob1,{x:0,y:0},{x:-0.01,y:0});
		}
	}
