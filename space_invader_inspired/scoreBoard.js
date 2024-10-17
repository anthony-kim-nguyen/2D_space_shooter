function scoreBoard(x,y,w,h){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.kills = 0;
  this.wave = 0;
  var over = false;
  
  this.show = function(){
    push();
    strokeWeight(1);
    stroke( 150, 50, 150 );
    noFill();
    //outline
    rect( this.x, this.y, this.w, this.h );
    //kills && wave text
    let s = '\n KILLS :      ' + this.kills+ '\n\n WAVES :     '+ this.wave;
    textSize(13);    
    strokeWeight(1);
    //pos for kills && waves
    text( s, this.x+5, this.y+10, this.w, this.h );
    
    
    rect(this.x+(this.w/2)-10,this.y+100,20,20,5);
    
    //rectangle for spacebar
    rect(this.x+10,this.y+160,80,20,5);
    textSize(10);
    //spacebar
    text('SPACE BAR',this.x+21,this.y+165,80,20);
    //shoot text above
    let shoot = 'SHOOT';
    textSize(10);
    text(shoot,this.x+30,this.y+148,80,20);
  }
  this.update = function(){
    this.kills += 1;
  }
  this.waves = function(){
    this.wave += 1;
  }
  this.gameOver = function( x ){
    this.over = x;    
  }
  this.end = function(){
    let s = 'GAME OVER\n     BETCH';
    rectMode(CENTER);
    textSize(50);    
    strokeWeight(0.9);
    stroke( 150, 0, 50 );
    noFill();
    text( s, 250, 300, 400, 200 );
    console.log("NEEDS MORE PASTA WATER")
  }
}