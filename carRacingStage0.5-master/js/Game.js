class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
 
  play(){
    form.hide();
    text("gameStart",120,100);
    Player.getPlayerInfo();
    if(allPlayer!==undefined){
      var displayPosition = 130;
      for(var plr in allPlayer){
        if(plr==="player"+player.index){
          fill("red");
        }
        else{
        fill("black")} 
      displayPosition+=20;
        text(allPlayer[plr].name+":"+allPlayer[plr].distance,120,displayPosition)
        }
    }
  }

}
