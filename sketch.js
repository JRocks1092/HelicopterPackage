var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground;
var isMoving = false;
var isFalling = false;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

	helicopterIMG = loadImage("helicopter.png");
	packageIMG = loadImage("package.png");

}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite = createSprite(400, 200, 10, 10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale = 0.2

	helicopterSprite = createSprite(400, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale = 0.6;

	groundSprite = createSprite(400, 700 - 35, this.width, 10);
	groundSprite.shapeColor = color(255);


	engine = Engine.create();
	world = engine.world;

	packageBody = new packageBodyCreate(400, 200, 5, 5);
	//Matter.Body.setStatic(packageBody.body, true);

	//Create a Ground
	ground = Bodies.rectangle(400, 650, 800, 10, { isStatic: true });
	World.add(world, ground);

	boxPosition = 400 - 100
	boxY = 610;


	boxleftSprite = createSprite(boxPosition, boxY, 20, 100);
	boxleftSprite.shapeColor = color(255, 0, 0);

	boxLeftBody = Bodies.rectangle(boxPosition + 20, boxY, 20, 100, { isStatic: true });
	World.add(world, boxLeftBody);

	boxBase = createSprite(boxPosition + 100, boxY + 40, 200, 20);
	boxBase.shapeColor = color(255, 0, 0);

	boxBottomBody = Bodies.rectangle(boxPosition + 100, boxY + 45 - 20, 200, 20, { isStatic: true });
	World.add(world, boxBottomBody);

	boxleftSprite = createSprite(boxPosition + 200, boxY, 20, 100);
	boxleftSprite.shapeColor = color(255, 0, 0);

	boxRightBody = Bodies.rectangle(boxPosition + 200 - 20, boxY, 20, 100, { isStatic: true });
	World.add(world, boxRightBody);


	Engine.run(engine);

}


function draw() {

	background(0);

	Engine.update(engine);

	packageSprite.x = packageBody.body.position.x;
	packageSprite.y = packageBody.body.position.y;

	boxDrop();
	controlHeli();

	console.log(packageBody.body.position.y);

	drawSprites();

}

function controlHeli() {

	if (!isFalling) {

		if (keyDown("right")) {

			helicopterSprite.x = helicopterSprite.x + 10;
			packageBody.body.position.x = packageBody.body.position.x + 10;
			//Matter.Body.translate(packageBody, pos);
			isMoving = true;

		}

		else if (keyDown("left")) {

			helicopterSprite.x = helicopterSprite.x - 10;
			packageBody.body.position.x = packageBody.body.position.x - 10;
			isMoving = true;

		}

		else {

			isMoving = false;

		}

		if (!isMoving) {

			//Matter.Body.setVelocity(packageBody.body, 0);

		}

	}

	//*/
}

function boxDrop() {

	if (keyDown("down")) {

		isFalling = true;

	}

	if (isFalling) {

		Matter.Body.setStatic(packageBody.body, false);

	}

}
