class Bubble {
  
  constructor() { 
    var allInstances = [];
    
    var radius = random(10,100);
    this.x = random(0, width);
    this.y = random(0, height);
    this.width = radius;
    this.height = radius;
    this.color = "white";
    this.velocityX = random(-2, +2);
    this.velocityY= random(-2, +2);
    
    this.display = function() {
      stroke("pink");
      fill(this.color);
      ellipse(this.x, this.y, this.width, this.height);
    }
    
    this.move = function() {
      this.x = this.x + this.velocityX;
      this.y = this.y + this.velocityY;
    }
      
  }
}