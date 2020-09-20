class Chain {
    constructor (body1,point2){
      var options =  {
        bodyA: body1,
        pointB : point2,
        length : 10,
        stiffness: 0.04
      } 
      this.chain=Constraint.create(options)
      World.add(world,this.chain)
      
    }

    display(){
        if (this.chain.bodyA){
          var point1 =this.chain.bodyA.position
          var point2 = this.chain.pointB
          strokeWeight(3)
         line(point1.x,point1.y,point2.x,point2.y) 
        }  
    }
    




    fly(){
      this.chain.bodyA=null
      console.log(1)
    }


}

