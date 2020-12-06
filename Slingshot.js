class SlingShot{
    constructor(bodyA, bodyB,pointB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:pointB,
            stiffness: 1.2,
            length: 450
        }
       
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointBx = this.sling.bodyB.position.x+this.sling.pointB.x;
            var pointBy = this.sling.bodyB.position.y+this.sling.pointB.y;
            push();
            strokeWeight(7);
                line(pointA.x , pointA.y, pointBx , pointBy);            
            pop();
        }
    }
    
}