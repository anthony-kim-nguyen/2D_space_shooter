function stars(x,y){
  
  this.x = x;
  this.y = y;
  
  
  this.bottom = false;
  
  this.show = function(){
    this.r = random( 1,4 );
    fill( random(200) , random(200) , random(200) ,random(100,200));
    circle(this.x,this.y,this.r);
    
  }
  this.move = function(){
    
    this.y += 1;    
    if(this.y >= 600){
      this.gone();      
    }
    
  }
  this.gone = function(){
    this.bottom = true;    
    this.y-=600;
  }
  
  
}