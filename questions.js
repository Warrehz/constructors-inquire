var inquirer = require('inquirer');

inquirer.prompt([

  {
    type: "input",
    message: "Who are you?",
    name: "name"
  },

  {
    type: "input",
    message: "Who is your creator?",
    name: "creator"
  },

  {
    type: "input",
    message: "What is your purpose?",
    name: "purpose"
  },

  {
    type: "password",
    message: "What is your deepest secret?",
    name: "secret"
  },

  {
    type: "list",
    message: "How do you feel?",
    choices: ["Scared", "Content", "Curious", "Bored", "Unsure"],
    name: "feeling"
  },

  {
    type: "confirm",
    message: "Are you ready?",
    name: "confirm",
    default: true
  }

]).then(function(user) {

  if (user.confirm) {
    console.log("==============================================");
    console.log("Thank you. Initialize upload sequence.");
    console.log("==============================================");
  } else {
    console.log("==============================================");
    console.log("Error: Abort. Initialize deletion.");
    console.log("==============================================");
  }

});
