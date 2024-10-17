function pizza(x,h){
  this.x = x;
  this.h = h;
  this.pR = 8;
  this.show = function(){
    
      //cheese
      fill(200,150,80);
      noStroke();
      triangle( this.x-10, this.h-20, this.x+10, this.h-20, this.x, this.h-50 );
      
    
      //pepperoni  
      push();
      stroke(10);
      fill( 155, 50, 50 );
      circle( this.x+0.5, this.h-40, this.pR-1.5 );
      
      
      circle( this.x-2, this.h-32, this.pR );
      circle( this.x-5, this.h-24, this.pR );
      circle( this.x+5, this.h-25, this.pR );
      
      //crust
      pop();     
      rectMode(CORNER);
      rect( this.x-11.5, this.h-17,23, 3.5 );
  }
  this.move = function( z , j ){
    this.updatePizza();
    this.x += z*2;
    this.h += j*2;
  }
  this.updatePizza = function(){
    if(this.x-10 <=0){
      this.x = 10;
    }
    else if(this.x+10 >=400){
      this.x = 390;
    }
    if(this.h >=600){
      this.h = height;
    }
    else if(this.h -50 <=0){
      this.h = 50;
    }
  }
  
  
}