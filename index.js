const inquirer = require("inquirer");
const fs = require("fs");
const generateSVG = require("./lib/generateSVG")

//An array of questions using inquirer package
const questions = [
  {
    type: "input",
    name: "logo_text_input",
    message: "Please enter up to three characters for your logo: ",
  },
  {
    type: "input",
    name: "logo_color_input",
    message:
      "Please enter text color (either color keyword or a hexadecimal number): ",
  },
  {
    type: "list",
    name: "shape_input",
    message: "Please select shape for your logo: ",
    choices: ["Triangle", "Circle", "Square"],
  },
  {
    type: "input",
    name: "shape_color_input",
    message:
      "Please enter shape color (either color keyword or a hexadecimal number): ",
  },

];

//function to create and write into README
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Generated logo.svg")
  );
}

//function to initialize the app
function init() {
  console.log("Initializing...");

  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    // writeToFile("./logo.svg", generateSVG(answers));
  });
}

//function call to initialize app
init();
