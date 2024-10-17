function Bullet(x, y) {
  this.x = x;
  this.y = y;
  this.r = 3;
  var speed = 3;
  var toDelete = false;
  
  
  this.show = function() {
    noStroke();
    fill( 200, 60, 60 );
    circle( this.x, this.y, this.r   *2   );
    
  };

  this.move = function() {
    this.y = this.y - speed;
    
    if ( this.y <= 0){
      this.deleto();    
    }
  };
  this.hit = function(angryItalian){
    let d = dist( this.x, this.y, angryItalian.x, angryItalian.y)
    if ( d <   angryItalian.r ){      
      
      return true;
    }else {
      return false;
    }
  };
  this.deleto = function(){
    this.toDelete = true;
    
  };
}