class Divisions {
    constructor(x, y, width, height){
        var options = {
            isStatic : true
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.div = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.div)
    }

    display() {
        var pos = this.div.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.width, this.height);
    }
}