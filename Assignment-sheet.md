## Ironmon Constructors

### Description

This is the first day of a multiple-day assignment that we're going to use to help us learn about object-oriented JavaScript. Scaffolding complex code in this manner allows us to build a better understanding of a professional-style iterative developement process.

### Objectives

After completing this assignment, you should feel confident using:

* Object-oriented JavaScript, including
    * Constructors
    * Properties
    * Prototype methods
    * Unit tests

### Details

We're going to write code to represent a battle between two video game characters.

### Normal Mode

Make all of the normal mode tests pass. 

The `Ironmon` constructor needs to create properties on each instance.

* `health`: Should default to 25.
* `power`: Should default to 1.
* `name`: Passed in as a parameter to the constructor.

You'll need to implement the following methods on the `Ironmon` class:

* `Ironmon.prototype.active`: Returns true if the instance's health is greater than 0. Otherwise returns false.

* `Ironmon.prototype.train`: Increases the instance's power by 1.

* `Ironmon.prototype.heal`: Adds a random number between 1 and 5 to the instance's health.

* `Ironmon.prototype.attack`: Takes in another instance of an Ironmon as an opponent. Reduces the opponent's health by a random number between 1 and this instance's power. Returns that amount of damage done.

The `Game` constructor needs to create properties on each instance.

* `left`: An instance of the Ironmon class. The name should be passed in as a parameter to the Game constructor.
* `right`: Another instance of the Ironmon class. The name should be passed in as a parameter to the Game constructor.
* `turn`: Should default to true.

You'll need to implement the following method on the `Game` class:

* `Game.prototype.takeTurn`: For now, if this instance's `turn` property is true, it becomes false. Otherwise it becomes true.

### Hard Mode

Normal mode, and also implement the following feature:

Modify the Ironmon constructor to accept a second parameter, and make it accessible as a property called `type` on the instance.

Also modify the code in the `Ironmon.prototype.attack` method. If...

* the `type` of this Ironmon is `"water"` and the opponent's `type` is `"fire"`, or
* the `type` of this Ironmon is `"fire"` and the opponent's `type` is `"grass"`, or
* the `type` of this Ironmon is `"grass"` and the opponent's `type` is `"water"`

then double the amount of damage that would be dealt by the attack.

**Note:** If you want to complete hard mode for future versions of this assignment, you'll need to complete hard mode for this assignment first.