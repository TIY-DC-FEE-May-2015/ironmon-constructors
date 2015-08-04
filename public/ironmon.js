/*
  This class represents a character in a video game.

  It contains two default properties:
    - health (which starts at 25)
    - power (which starts at 1)

  It also contains a property passed in as a parameter:
    - name
*/
var Ironmon = function(name, type) {
  this.name = name
  this.type = type
  this.health = 25
  this.power = 1
}

/*
  This function determines a random *integer* between 1 and 5.
  
  It adds that number to the health of the Ironmon.

  An Ironmon's health cannot go above 25. If healing would 
    make the Ironmon's health go above 25, it becomes 25 instead.
*/
Ironmon.prototype.heal = function() {
  healAmount = Math.floor(Math.random()*5+1)

  if ((this.health + healAmount) > 25) {
    this.health = 25
  } else {
    this.health += healAmount
  }


}

/*
  This function adds one to the power of the Ironmon.
*/
Ironmon.prototype.train = function() {
  this.power += 1
}

/*
  This function returns true if the Ironmon's health is greater than 0.

  Otherwise, it returns false.
*/
Ironmon.prototype.active = function() {
  if (this.health > 0) {
    return true
  } else {
    return false
  }
}

/*
  This function accepts another, opponent Ironmon as a parameter.

  It reduces the health of the opponent Ironmon by a random *integer*
    between 1 and whatever this Ironmon's power is.

  This function returns the amount of damage dealt.
*/
Ironmon.prototype.attack = function(opponent) {
  

  damage = Math.floor(Math.random()*this.power + 1)

  if ((this.type === "water" && opponent.type === "fire") || (this.type === "fire" && opponent.type === "grass") || (this.type === "grass" && opponent.type === "water")) {
    damage = damage * 1.3
  }

  opponent.health -= damage

  return damage

}