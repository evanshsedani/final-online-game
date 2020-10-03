class Game {
  constructor(){

  }

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

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    play1 = createSprite(350, 200)
    play2 = createSprite(400, 200)
    play3 = createSprite(300, 200)
    play4 = createSprite(200, 200)
    play1.addImage(car1)
    play2.addImage(car2)
    play3.addImage(car3)
    play4.addImage(car4)
    cars = [play1, play2, play3, play4] 
    playerGroup.add(play1);
    playerGroup.add(play2);
    playerGroup.add(play3);
    playerGroup.add(play4);
  }

  play(){ form.hide(); Player.getPlayerInfo();
     //player.getCarsAtEnd();
      if(allPlayers !== undefined)
      { background(rgb(198,135,103));
       image(map, 0,-displayHeight*4,displayWidth, displayHeight*2);
      //var display_position = 100;
      //index of the array
       var index = 0;
     //x and y position of the cars 
     var x = 175 ;
      var y;
     for(var plr in allPlayers){ 
       //add 1 to the index for every loop 
       index = index + 1 ;
    x = allPlayers[plr].side;
    //use data form the database to display the cars in y direction 
    y = displayHeight - allPlayers[plr].distance;
      cars[index-1].x = x; cars[index-1].y = y;
      
      if (index === player.index){ stroke(10);
          // fill("red"); // ellipse(x,y,60,60);
      cars[index - 1].shapeColor = "red";
        camera.position.x = displayWidth/2;
      camera.position.y = cars[index-1].y;
      if(keyIsDown(UP_ARROW)){
    cars[index-1].rotation = 0
      }
      if(keyIsDown(DOWN_ARROW)){
        cars[index-1].rotation = 180
          }
          if(keyIsDown(RIGHT_ARROW)){
            cars[index-1].rotation = 90
              }
              if(keyIsDown(LEFT_ARROW)){
                cars[index-1].rotation = -90
                  }
      if(cars[index-1].isTouching(playerGroup)){
        console.log(hi)
      }
      } //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position) 
        } } 
      if(keyIsDown(UP_ARROW) && player.index !== null)
      { player.distance +=10 
        player.update();

      } 
      if(keyIsDown(DOWN_ARROW) && player.index !== null)
      { player.distance -=10 
        
        player.update();
      
      } 
      if(keyIsDown(RIGHT_ARROW) && player.index !== null)
      { player.side +=10 
        player.update();
      } 
      if(keyIsDown(LEFT_ARROW) && player.index !== null)
      { player.side -=10 
        player.update();
      } 
          
          if(player.distance > 3860)
          { gameState = 2;
            player.rank +=1 
            Player.updateCarsAtEnd(player.rank) }
          drawSprites(); } 
          end (){}
         

}
