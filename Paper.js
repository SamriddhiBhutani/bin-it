class Paper {
    constructor (x,y,radius) {
        var option = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.4,
            density: 1
        }
        this.body = Bodies.circle(x,y,radius,option);
        this.radius = radius;
        World.add(world,this.body);
    }
    display () {
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill ("orange");
        circle(pos.x,pos.y,this.radius);
    }
}