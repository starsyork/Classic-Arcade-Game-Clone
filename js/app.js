// Enemies our player must avoid
var Enemy = function(x, y, speed, dr) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.dr = dr;
    // this.speed = speed
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    if (this.dr == 1) {
        this.sprite = 'images/enemy-bug.png';
    } else {
        this.sprite = 'images/enemy-bug2.png';
    }
    
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.dr == 1) {
        this.x += this.speed * dt;
        if (this.x > 606) {
            this.x = -50;
        };
    } else {
        this.x -= this.speed * dt;
        if (this.x < -100) {
            this.x = 650;
        };
    };
    
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-horn-girl.png';
}

Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    // this.x * dt;
    // this.y * dt;
    this.collision();
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(direction) {
    if (direction == 'left') {
        if (this.x < 100) return;
        this.x -= 100;
    }

    if (direction == 'right') {
        if (this.x > 450) return;
        this.x += 100;
    }

    if (direction == 'up') {
        if (this.y < 100) return;
        this.y -= 85;
    }

    if (direction == 'down') {
        if (this.y > 600) return;
        this.y += 85;
    }
};

Player.prototype.collision = function() {
    for (var i = 0; i < allEnemies.length; i++) {
        if (allEnemies[i].x + 50 > this.x && allEnemies[i].x - 50 < this.x && allEnemies[i].y == this.y) {
            console.log(allEnemies[i].x, allEnemies[i].y);
            this.resetGame();
        }
    }
};

Player.prototype.resetGame = function() {
    this.x = 100;
    this.y = 640;
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [new Enemy(200, 130, 120, 1),
                  new Enemy(100, 215, 50, -1),
                  new Enemy(200, 300, 150, 1),
                  new Enemy(300, 385, 210, -1),
                  new Enemy(0, 470, 60, -1),
                  new Enemy(150, 555, 180, 1)];

var player = new Player(100,640);


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



// **************************************************************************************

var Stars = function(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/Star.png';
};

Stars.prototype.update = function(dt) {
    // this.x * dt;
    // this.y * dt;
};

Stars.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var stars = [new Stars(300, 300)]
    
