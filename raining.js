var dogs = {
  raining: true,
  noise: "woof!",
  makeNoise: function() {
    if(dogs.raining) {
      console.log(dogs.noise);
    } else {
      console.log("nothing.");
    }
  }
}

var cats = {
  raining: false,
  noise: "meow!",
  makeNoise: function() {
    if(cats.rainning) {
      console.log(cats.noise);
    } else {
      console.log("nothing");
    }
  }
}

dogs.makeNoise();
cats.makeNoise();

var massHysteria = function(a, b) {
  if((a.makeNoise === true) && (b.makeNoise === true)) {
    console.log("DOGS AND CATS ARE LIVING TOGETHER! MASS HYSTERIA!");
  } else {
    console.log("All is calm.");
  }
}

massHysteria(dogs, cats);
