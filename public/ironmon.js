/*
  This class represents a character in a video game.

  It contains two default properties:
    - health (which starts at 25)
    - power (which starts at 1)

  It also contains a property passed in as a parameter:
    - name
*/
var Ironmon = function(name, type) {
  this.health = 25;
  this.power = 1;
  this.name = name;
  this.type = type;
}

/*
  This function determines a random *integer* between 1 and 5.
  
  It adds that number to the health of the Ironmon.

  An Ironmon's health cannot go above 25. If healing would 
    make the Ironmon's health go above 25, it becomes 25 instead.
*/
Ironmon.prototype.heal = function() {
  this.health += Math.floor(Math.random() * 5) + 1;
  if (this.health > 25) {
    this.health = 25;
  }
}

/*
  This function adds one to the power of the Ironmon.
*/
Ironmon.prototype.train = function() {
  this.power += 1;
}

/*
  This function returns true if the Ironmon's health is greater than 0.

  Otherwise, it returns false.
*/
Ironmon.prototype.active = function() {
  if (this.health > 0) {
    return true;
  } else {
    return false;
  }
}

/*
  This function accepts another, opponent Ironmon as a parameter.

  It reduces the health of the opponent Ironmon by a random *integer*
    between 1 and whatever this Ironmon's power is.

  This function returns the amount of damage dealt.
*/
Ironmon.prototype.attack = function(opponent) {
  var before = opponent.health;
    if (this.type === "fire" && opponent.type === "grass") {
      opponent.health -= ((Math.floor(Math.random() * opponent.power) + 1) * 2);
      var attack = before - opponent.health;
      return attack;
    }
    if (this.type === "water" && opponent.type === "fire") {
      opponent.health -= ((Math.floor(Math.random() * opponent.power) + 1) * 2);
      var attack = before - opponent.health;
      return attack;
    }
     if (this.type === "grass" && opponent.type === "water") {
      opponent.health -= ((Math.floor(Math.random() * opponent.power) + 1) * 2);
      var attack = before - opponent.health;
      return attack;
    }
    opponent.health -= (Math.floor(Math.random() * opponent.power) + 1);
    var attack = before - opponent.health;
    return attack;
}