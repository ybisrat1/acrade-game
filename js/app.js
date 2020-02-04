// Enemies our player must avoid

let points= 0;
pnt= document.getElementById("point");
var  Enemy= function(x,y) {
  this.sprite = 'https://raw.githubusercontent.com/udacity/frontend-nanodegree-arcade-game/master/images/enemy-bug.png';
  this.x=x;
  this.y=y;
  //this.height = 65;
  //this.width = 75;
  this.speed = (100 + Math.floor(Math.random()*100));
}

    // Variables applied to each of our instances go here,
    // we've provided one for you to get started


    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    //this.sprite = 'images/enemy-bug.png';



// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x+(this.speed * dt);

    if( this.x >= 500 ){
          this.x= -100;
        }


    if( player.x >= this.x && player.x <=this.x + 50
      && player.y< this.y + 80 && player.y>this.y){
        player.x= 200;
        player.y= 400;
        points= 0;
        pnt.value=points;
      }
    };
//200> 150 && 200<250

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

const enemy1 = new Enemy(0, 60);
const enemy2 = new Enemy(0, 140);
const enemy3 = new Enemy(0, 220);
const enemy4 = new Enemy(-400, 60);
const enemy5 = new Enemy(-500, 140);
const enemy6 = new Enemy(-300, 60);

var allEnemies = [enemy1, enemy2, enemy3, ,enemy4, enemy6, enemy5];

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

//player class that defines the player

var Playerc= function() {
  this.sprite = 'https://raw.githubusercontent.com/udacity/frontend-nanodegree-arcade-game/master/images/char-boy.png';
  this.x= 200;
  this.y= 400;
  //this.height = 65;
  //this.width = 75;
}


//changes the position of the player based on user input
Playerc.prototype.update = function(dt) {
};

//creates the image of the player on the board
Playerc.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

//allows player to move left/right/up/down within the boaders of the game
Playerc.prototype.handleInput = function(allowedKeys) {


if (allowedKeys =='left' && this.x > 99){
  this.x-=100
}
if (allowedKeys =='right' && this.x< 400){
  this.x+=100
}
if (allowedKeys =='up' && this.y > 0){
  this.y-=83
}
if (allowedKeys =='down' && this.y< 400){
  this.y+=83
}

if (this.y<0){
  this.x= 200;
  this.y= 400;
  points++;
  //points= pnt.value;

  //pnt= document.getElementById("points");
  pnt.value=points;

  //pnt= document.getElementById("Points");

}

};

var player = new Playerc();

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
