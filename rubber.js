class rubber {
    ellipse(x, y, width, height,detail);


};
var options
restitution=0.3,
density=5,
friction =1;


display()
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


