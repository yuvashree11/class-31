class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimg = loadImage("sprites/smoke.png");
    this.trajectory = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    var pos = [this.body.position.x,this.body.position.y];
      this.trajectory.push(pos);
      if(this.body.velocity.x > 10 && this.body.position.x > 200){

        for(var i = 0;i<this.trajectory.length;i++){
        image(this.smokeimg,this.trajectory[i][0],this.trajectory[i][1]);
      }
    }
    super.display();
  }
}
