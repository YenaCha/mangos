class Chain{
    constructor (a,b){
        var specifications = {
            bodyA:a,
            pointB:b,
            Stiffness:0.05,
            length:10
        }
      this.chain = Constraint.create(specifications)
      World.add(world,this.chain)
    }

    showChain(){

        if (this.chain.bodyA){
            line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.pointB.x,this.chain.pointB.y)
            }
    }
    disconnectChain(){
        this.chain.bodyA = null
    }
    connectChain(c){
        this.chain.bodyA = c
    }
}