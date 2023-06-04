const inquirer = require("inquirer");
const fs = require("fs");
const generateSVG = require("./lib/generateSVG")

//function to check if logo text is at least 1 character long and no more than 3 characters
const validateLogoLength = (text) => {
  if (text.length<=3 && text.length>0) {
    return true;
  }
  return "Logo needs to be at least 1 character and can maximum be 3 characters long. Try again.";
}

//function to check if user entered color
const checkColor = (color) => {
  if (color !== "") {
    return true;
  }
  return "Please enter color.";
};

//An array of questions using inquirer package
const questions = [
  {
    type: "input",
    name: "logo_text_input",
    message: "Please enter up to three characters for your logo: ",
    validate: validateLogoLength,
  },
  {
    type: "input",
    name: "logo_color_input",
    message:
      "Please enter text color (either color keyword or a hexadecimal number): ",
    validate: checkColor,
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
    validate: checkColor,
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
    writeToFile("./logo.svg", generateSVG(answers));
  });
}

//function call to initialize app
init();
