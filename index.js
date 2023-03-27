// TODO: Include packages needed for this application

const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown");

const fs = require("fs");

const path = require("path");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "Title",
    message: "What is your title?",
  },
  {
    type: "input",
    name: "Description",
    message: "Describe your project",
  },
  {
    type: "input",
    name: "Installation",
    message: "What is the install process?",
  },
  {
    type: "input",
    name: "Usage",
    message: "What is the application used for?",
  },
  {
    type: "list",
    name: "License",
    message: "Choose a license",
    choices: ["MIT", "Apache", "GPL", "GMU", "BSD", "None"],
  },
  {
    type: "input",
    name: "Contributing",
    message: "List the contributers and who can contribute",
  },
  {
    type: "input",
    name: "Tests",
    message: "What is the testing process?",
  },
  {
    type: "input",
    name: "Questions",
    message: "What is your GitHub Username",
  },
  {
    type: "input",
    name: "Email",
    message: "Enter your email address",
  },
];

// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFileSync("./dist/readme.md", data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    console.log(data);
    const generated = generateMarkdown(data);
    console.log(generated);
    writeToFile(generated);
  });
}

// Function call to initialize app
init();
