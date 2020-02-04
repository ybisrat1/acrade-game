// Enemies our player must avoid

//score keeper
let points= 0;
//DOM elemenent to store the score
let pnt= document.getElementById("point");
let divs= document.getElementById("div");

// Variables applied to each of our instances go here,
// we've provided one for you to get started


// The image/sprite for our enemies, this uses
// a helper we've provided to easily load images
//this.sprite = 'images/enemy-bug.png';
var  Enemy= function(x,y) {
  this.sprite = 'https://raw.githubusercontent.com/udacity/frontend-nanodegree-arcade-game/master/images/enemy-bug.png';
  this.x=x;
  this.y=y;
  this.speed = (100 + Math.floor(Math.random()*100));
}



// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x+(this.speed * dt); //use a random numbe for speed to apply to each object

//once the bug is off screen it is reposition back to the beginging
    if( this.x >= 500 ){
          this.x= -50;
        }

//if a collsion occrurs the player is rest back to startingn reposition
// and your points is reset to 0
    if( player.x >= this.x && player.x <=this.x + 50
      && player.y< this.y + 80 && player.y>this.y){
        player.x= 200;
        player.y= 400;
        points= 0;
        pnt.value=points;
      }
    };


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
//instantiate enemies
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
  this.sprite = 'images/char-princess-girl.png';
  this.x= 200;
  this.y= 400;
};


//changes the position of the player based on user input
Playerc.prototype.update = function(dt) {
};

//creates the image of the player on the board
Playerc.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

//allows player to move left/right/up/down within the boaders of the game
Playerc.prototype.handleInput = function(allowedKeys) {

// allows user to move in any direction assuming it is within the canvas
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
// if the user reaches the water that go back to their orginal postion
//and points is incremented by 1
if (this.y<0){
  this.x= 200;
  this.y= 400;
  points++;
  pnt.value=points;
}
  if (points>= 5){
    let modal= document.getElementById('modal');
    let award = document.createElement('p');
    award.textContent= "congradulations!!! you reached 5 points"

    award.style.cssText=('background-color: white');
    modal.style.cssText=('display: block');
    modal.appendChild(award);
    points=0;

  }



};
//instantiate the player object
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
