
class packageBodyCreate {
  constructor(x, y, width, height) {
   
    var options = {
      
      'restitution': 0.8,
      'isStatic' : true

    }

    this.body = Bodies.rectangle(this.x, this.y, 5, 5, options);
	  this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    
    World.add(world, this.body);

  }
  display() {
    
    var pos = this.body.position;
    
    push();
    translate(helicopterSprite.x, helicopterSprite.y);

    rectMode(CENTER);

    fill(255);
    rect(pos.x, pos.y, this.width, this.height);
    pop();
  }
};
