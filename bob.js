class Bob{
	constructor(x,y,r){
		var options = {
			'restitution': 1,
			'friction': 0,
			'density': 0.8
        }

		this.body = Matter.Bodies.circle(x, y, r/2, options);
        this.x = x;
		this.y = y;
		this.r = r;

		World.add(world, this.body);
	}

	display(){
		var pos = this.body.position;
        
		push()
		translate(pos.x, pos.y);
		ellipseMode(CENTER);
        fill(251, 0, 255);
        strokeWeight(2);
        stroke("black");
		ellipse(0, 0, this.r, this.r);
		pop()
	}
}