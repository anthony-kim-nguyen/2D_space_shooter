function angryItalians(x,y,r){
  this.x = x;
  this.y = y;
  this.r = r;
  var z =1;
  var speed = 1;
  
  this.hits = 0;
  this.toDelete = false;
  
  this.show = function(){
    fill ( 230 , 100 , 0 , 100 );
    noStroke();
    circle( this.x, this.y, this.r );
    //eyes
    fill(200,0,0);
    triangle( this.x-(r/2.5), this.y-(r/7), this.x-(r/20), this.y+(r/20), this.x-(r/3), this.y )
  
    triangle( this.x+(r/2.5), this.y-(r/7), this.x+(r/20), this.y+(r/20), this.x+(r/3), this.y )
    //mustache
    //leftside
    fill(255,155);
    beginShape();  
    vertex(this.x-(r/2),this.y+(r/4));
    vertex(this.x-(r/3),this.y+(r/10)); 
    //middle
    vertex(this.x,this.y+(r/4));
    //rightside
    vertex(this.x+(r/3),this.y+(r/10));
    vertex(this.x+(r/2),this.y+(r/4));
    //bottom 3 points
    vertex(this.x+(r/3),this.y+(r/6));
    vertex(this.x,this.y+(r/4));
    vertex(this.x-(r/3),this.y+(r/6));
    endShape();
    fill(180);
    rectMode(CENTER);
    rect(this.x,this.y-r/1.6,r/1.6,r/1.9,3);
    
    
  };
  
  
  
  
  this.move = function(){
    var a = 1 + ( score.wave * 0.25);
    this.x += z*a; 
    
    if (this.x >= 400 ){
      
      z = -speed;
      this.y += r*2;
      
    }
    else if (this.x <= 0){
      
      z = speed ;
      this.y += r*2;
      
      
    }
    else if (this.y >= 575){
      
      this.y = 700;
      this.x = 200;
      z = 0;
      score.gameOver(true);
    }
  };
  this.countHits = function(){
    this.hits += 1;    
    console.log("somebody toucha my spaghett!")
  };
  this.deleto = function(){
    this.toDelete = true;
  }
}