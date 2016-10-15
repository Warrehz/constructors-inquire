var Programmer = function(name, title, age, faveLanguage) {
    this.name = name,
    this.title = title,
    this.age = age,
    this.faveLanguage = faveLanguage,
    this.printInfo = function() {
      console.log("name: " + this.name);
      console.log("age: " + this.age);
      console.log("faveLanguage: " + this.faveLanguage);
  }
}


var mical = new Programmer("Mical", "SEO", 29, "Python");

mical.printInfo();
