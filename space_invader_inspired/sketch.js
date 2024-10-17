var pizza;
var angryItalian = [];
var bullets = [] ;
var star =[];
var score;
var dmg2kill = 1;



function setup() {
  frameRate(60);
  //canvas
  createCanvas(400, 600);
  //make a da pizza
  pizza = new pizza(200,height);
  //SCOREEEEE
  score = new scoreBoard(290,250,100,200);
  //make italians
  for ( var i = 0; i < 8; i++){
    angryItalian[i] = new angryItalians( i*50 +25, 50, 45 );
  }
  //stars
  
  for(let i = 0; i < 300; i++){    
      star[i] = new stars( random(5,395), random(5,595)  )     
  }
  //random(20,30) * x, random(90,110) * y 
}

function draw() {
  background(10);
  
  
  
  for (var i = 0; i < star.length;i++){   
    star[i].show();
    star[i].move();
  }
  pizza.show();
  score.show();
  
  for( var i = 0; i < bullets.length; i++){  
    bullets[i].show();
    bullets[i].move();
    for ( var j = 0; j < angryItalian.length; j++){
      if ( bullets[i].hit(angryItalian[j])){        
        bullets[i].deleto();
        angryItalian[j].countHits();
            
        if(angryItalian[j].hits == dmg2kill){
          angryItalian[j].deleto();
          score.update();
        }
      }
    }  
  }
  for(var i = 0; i < angryItalian.length; i++){       
    angryItalian[i].show();
    angryItalian[i].move();
  }
  for(var i = bullets.length -1; i >= 0; i--){
    if (bullets[i].toDelete ){
      
      bullets.splice(i,1);      
      
    }
  }
  for(var i = angryItalian.length -1; i >= 0; i--){
    if (angryItalian[i].toDelete){                  
      angryItalian.splice(i,1); 
      
      console.log("MAMA MIA!")
    }
  }
  
  //respawn WAVES
  if(angryItalian.length == 0 ){
    score.waves();
    for ( var i = 0; i < 9; i++){
      angryItalian[i] = new angryItalians(i*40+40,45,35);
    }
  }
  
     
  // PIZZA MOVEMENT
  if (keyIsDown ( LEFT_ARROW) ){
      pizza.move(-1,0);
       
  }
  if (keyIsDown ( RIGHT_ARROW) ){
      pizza.move(1,0);
       
  }
  if (keyIsDown ( UP_ARROW) ){
      pizza.move(0,-1);
       
  }
  if (keyIsDown ( DOWN_ARROW) ){
      pizza.move(0,1);
       
  }
  
  if (score.over == true){
    score.end();
  }
  
}


function keyPressed(){
  if(keyCode === ENTER){
    
  }
  //shoot
  if (keyIsDown  (32)) {
      var bullet = new Bullet(pizza.x, pizza.h-40);
      bullets.push(bullet);
      
  } 
}