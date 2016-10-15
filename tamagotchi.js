var digitalpal = function(hungry, sleepy, bored, age) {
  this.hungry = hungry || false;
  this.sleepy = sleepy || false;
  this.bored = bored || true;
  this.age = age || 0;
  this.feed = function() {
    if (this.hungry) {
      console.log("That was yummy.");
      this.hungry = false;
      this.sleepy = true;
    } else {
      console.log("No thanks, I'm full!");
    }
  }
  this.sleep = function() {
    if (this.sleepy) {
      console.log("Zzzzzzzzz...");
      this.sleepy = false;
      this.bored = true;
      this.increaseAge();
    } else {
      console.log("No way, I'm not tired!");
    }
  }
  this.play = function() {
    if (this.bored) {
      console.log("Yay, let's play");
      this.bored = false;
      this.hungry = true;
    } else {
      console.log("Not right now. Later?");
    }
  }
  this.increaseAge = function() {
    this.age++;
    console.log("Happy Birthday to me! I am " + this.age + " years old!");
  }
}

var dog = new digitalpal();

dog.outside = false;

dog.bark = function() {
  console.log("Woof woof!");
}

dog.goOutside = function() {
  if (this.outside === false) {
    console.log("Yay, I love the outdoors!");
    this.outside = true;
  } else {
    console.log("We are already outside though...");
  }
}

dog.goInside = function() {
  if (this.outside) {
    console.log("Do we have to? Fine...");
    this.outside = false;
  } else {
    console.log("I'm already inside");
  }
}

var cat = new digitalpal();

cat.houseCondition = 100;

cat.meow = function() {
  console.log("meow");
}

cat.destroyFurniture = function() {
  if (this.houseCondition > 0) {
    this.houseCondition -= 10;
    console.log("Mwahahaha! Take that furniture!");
    this.bored = false;
    this.sleepy = true
  } else {
    console.log("Everything is destroyed");
  }
}

cat.buyNewFurniture = function() {
  this.houseCondition += 50;
  console.log("Are you sure about that?");
}


dog.goOutside();
dog.bark();
dog.goOutside();
dog.goInside();
dog.play();
dog.feed();
dog.sleep();


cat.meow();
cat.destroyFurniture();
cat.buyNewFurniture();
cat.play();
cat.feed();
