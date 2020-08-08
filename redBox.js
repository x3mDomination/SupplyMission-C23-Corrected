class redBox {
    constructor(x,y,w,h) {
        var options = {
            isStatic:true
        }

        this.body = Bodies.rectangle(x,y,w,h,options);
        //this.x = x;
        //this.y = y;
        this.width = w;
        this.height = h;

        World.add(world, this.body);

    }

    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill(255,0,0);
        noStroke();
        rect(pos.x,pos.y,this.width,this.height);
    }
}