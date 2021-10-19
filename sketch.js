var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var doracake;
var doracakeGroup;
var background1;
var player1score =0;
var player2score =0;

function preload(){
    shinchan_run=loadImage("shinchan_zindabad_0.2.png")
    shinchan_dance=loadImage("lol.png")
    doraemon_run=loadImage("doraemon_baghi3.png")
    doraemon_doracake=loadImage("modak.png")
    background_image=loadImage("track.jpeg")
    game_thumbnail=loadImage("thumbnail.jpeg")
     restart_restart=loadImage("restart2.png")
    doracakeGroup =  new Group()
}

function setup(){

createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
   background(game_thumbnail);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   for(var plr in allPlayers){
   if(allPlayers.player1.score>=60||allPlayers.player2.score>=60){
    gameState=2
   
}
   }
   if (gameState === 2) {
    game.update(2)
     game.end();
   }
}
