// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description of your project:'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Write the installation instructions for your project:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Write the usage information for your project:'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'List the contributors:'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Write the tests instructions for your project:'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your Email:',
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err;
        }
        console.log('The README file was successfully created!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {

        const readMeContent = `

#${answers.title}

# Project Description: #
${answers.description}

# Installation: #
${answers.install}
            
# Usage: #
${answers.usage}

# Contributions: #
${answers.contributors}

# Tests: #
${answers.test}

# Questions: #
For the source code, head over to my github page here: 
https://github.com/${answers.github}

For any additional questions or advice, you can reach my email at:
${answers.email}
        `;

        writeToFile('README.md', readMeContent);
    });
}

// Function call to initialize app
init();
