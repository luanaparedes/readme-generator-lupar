// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateMarkdown.js")
// TODO: Create an array of questions for user input
const questions = [

        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a description for your project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Explain how to install your app.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Explain how to install your app.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Explain how someone would use your app.',
        },
        {
            type: "list",
            name: "license",
            message: "Chose the appropriate license for your project: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: 'input',
            name: 'collaboration',
            message: 'Are there any collaborators on your project? If so, list their names and collaborations',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Does your project have any tests?',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Where would someone find answers to any questions about your project (emails, link',
        },
];

// TODO: Create a function to write README file
function writeFile(data) {
    fs.writeFileSync('./output/README.md', generateReadme(data))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then (answers => {
        writeFile(answers)
    })
}

// Function call to initialize app
init();
