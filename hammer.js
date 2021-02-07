class hammer {
    constructor(x,y,height,width)
}
    this.body = Bodies.rectangle(x, y, 20, height, options);
    this.width = 20;
    this.height = height;
    World.add(world, this.body);


var options = {
        
    friction=1.0,
    density =2,
    restitution=0.5
}

   

display ()
{
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
      image(this.image,0,0,this.width,this.height)
      pop();
      
}

