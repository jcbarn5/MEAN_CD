function Ninja(name) {
  this.name = name;
  this.health = 100;
  var speed = 3;
  var strength = 3;

  this.sayName = function functionName() {
    console.log("My ninja name is " + this.name + "!");
  };

  this.showStats = function functionName() {
    console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
  };

  //"Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"
  this.drinkShake = function functionName() {
    this.health += 10;
    return this;
  };

}

var steve = new Ninja("Steve")
steve.sayName();
steve.showStats();
steve.drinkShake().drinkShake();
steve.showStats();
