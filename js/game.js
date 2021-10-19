class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            background1=createSprite(500,0,1000,600);
            background1.addImage(background_image);
            background1.velocityY=1.5;
            background1.scale=2.5
            background1.y=background1.height/2;
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",shinchan_run);
    player1.scale=0.7
    
    player2 = createSprite(800,500);
    player2.addImage("player2", doraemon_run);
    player2.scale=0.4
    players=[player1,player2];

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 //image(background_image, 0, 0, 1000, 800);
                 if(background1.y>500){
                     background1.y=background1.height/2
                 }
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
                       
                     if(index === player.index){
                         
                         fill("black");
                         textSize(25);
                         text(allPlayers[plr].name ,x-25,y+25);

                         
                     }
                        if(allPlayers.player1.score>30||allPlayers.player2.score>30){
                            background1.velocityY=+3
                        }
                    
                         textSize(25);
                         fill("white");
                         text("Player 1 :" +allPlayers.player1.score,50,50);
                        text("Player 2 :" + allPlayers.player2.score, 50, 100);

                        
                 
                 }
                
                
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
            
                 if (frameCount % 60 === 0) {
                     doracake = createSprite(random(100, 1000), 0, 100, 100);
                     doracake.velocityY = 6;
                     doracake.addImage(doraemon_doracake);
                     doracake.scale = 0.3;
                     doracakeGroup.add(doracake);
                     
                 }
                 
                  if (player.index !== null) {
                      for (var i = 0; i < doracakeGroup.length; i++) {
                          if (doracakeGroup.get(i).isTouching(players)) {
                            doracakeGroup.get(i).destroy();
                              player.score =player.score+3;
                              player.update();
                              
                          }
                          
                      }
                  }
                
               
         
         
        
         

    }

    end(){
       console.log("Game Ended");
       doracakeGroup.destroyEach()
       doracakeGroup.setVelocityYEach(0)
       for(var plr in allPlayers){
           if(allPlayers.player1.score>allPlayers.player2.score){
            textSize(20)
            text("shinchan wins",200,150)
           }
           else{
            textSize(20)
            text("dora wins",200,150)
           }
       }
    }
}