function rpgChar(name, profession, gender, age, strength, hitpoints) {
  this.name = name;
  this.profession = profession;
  this.gender = gender;
  this.age = age;
  this.strength = strength;
  this.hitpoints = hitpoints;
  this.printStats = function() {
    for (i in this) {
      console.log(i + ": " + this[i]);
    }
  };
  this.attack = function(character2) {
    character2.hitpoints -= this.strength;
  };
}

var isAlive = function(character) {
  if (character.hitpoints > 0) {
    console.log("He is alive");
  } else {
    console.log("He is dead.");
  }
}

var mario = new rpgChar("Mario", "Plumber", "Male", 35, 55, 75);
var bowser = new rpgChar("Bowser", "Bad Guy", "Male", 750, 100, 125);

mario.printStats();
bowser.printStats();

isAlive(mario);
isAlive(bowser);

mario.attack(bowser);
console.log(bowser.hitpoints);

mario.attack(bowser);
console.log(bowser.hitpoints);
