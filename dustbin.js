class Dustbin{
    constructor(x,y){
        var options = {
            isStatic:true,
        }
        this.x = x;
        this.y = y;
        this.w = 200;
        this.h = 100;
        this.thickness = 20;
        this.angle = 0.3;

        this.bottomBody= Bodies.rectangle(this.x,this.y,this.w,this.thickness,options);
        
        this.leftBody= Bodies.rectangle(this.x-this.w/2, this.y-this.h/2, this.thickness,this.h,options);
        Matter.Body.setAngle(this.leftBody,this.angle);

        this.rightBody= Bodies.rectangle(this.x+this.w/2, this.y-this.h/2, this.thickness,this.h,options);
        Matter.Body.setAngle(this.rightBody,-1*this.angle);

        World.add(world,this.bottomBody);
        World.add(world,this.leftBody);
        World.add(world,this.rightBody);

    }
    display(){
        var posBottom = this.bottomBody.position;
        var posLeft = this.leftBody.position;
        var posRight = this.rightBody.position;

        push();
        translate(posLeft.x,posLeft.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        stroke(255)
        fill(255,255,255);
        //rotate(this.angle);
        rect(0,0,this.thickness,this.h);
        pop();

        push();
        translate(posRight.x,posRight.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255,255,255);
        stroke(255)
        //rotate(-1*this.angle);
        rect(0,0,this.thickness,this.h);
        pop();

        push();
        translate(posBottom.x,posBottom.y);
        rectMode(CENTER);
        strokeWeight(4);
        angleMode(RADIANS)
        fill(255,255,255);
        stroke(255)
        rect(0,0,this.w,this.thickness);
        pop();
    }
}