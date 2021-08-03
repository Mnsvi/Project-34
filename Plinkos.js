class Plinkos{  
    constructor(x, y, radius){
        var options = {
            isStatic : true,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }

        // giving nicknames
        this.radius = 10;
        this.body = Bodies.circle(x, y, this.radius, options);

        // adding to the world 
	    World.add(world, this.body);
   }

display(){
    fill("green");
    ellipseMode(RADIUS);
    ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
   }
}