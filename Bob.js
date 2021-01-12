class Bob {
    constructor(x,y,r) {

        var op = {
            'isStatic':false,
            'restitution' : 1,
            'friction' : 0,
            'density' : 0.8
    
                
                
        }

        this.x = x;
        this.y = y;
        this.r = r;

        this.body = Bodies.circle(this.x,this.y,this.r/2,op);

        World.add(world, this.body);

    }



    display() {
        var PPOS = this.body.position;


        push();
        translate(PPOS.x,PPOS.y);
        rectMode(CENTER);
        ellipseMode(CENTER);
        strokeWeight(3);
        fill(rgb(255,0,255));
        ellipse(0,0,this.r,this.r);
        pop();


    }
};