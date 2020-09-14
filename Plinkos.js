class Plinkos {
    constructor(x, y, radius) {
        var options= {
            isStatic:true,
        }

        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(this.x, this.y, this.radius/2, options);
        World.add(world, this.body);

    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill(100);
        ellipse(0, 0, this.radius, this.radius)
        pop();
    }
}