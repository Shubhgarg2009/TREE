class Launcher{
    constructor(bodyA, pointB){
        var options1 = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.002,
            length: 10
        }
        this.launcher = Constraint.create(options1);
        World.add(world, this.launcher);
    }
    fly(){
        this.launcher.bodyA = null;
    }
    attach(){
        this.launcher.bodyA = rock.body;   
    }
    display(){
        if(this.launcher.bodyA != null){
        var pointA = this.launcher.bodyA.position;
        var pointB = this.launcher.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}