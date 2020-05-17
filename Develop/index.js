const inquirer = require("inquirer");
const fs = require("fs");


function promptUserInput()
{
    inquirer
    .prompt([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "In a few sentences, can you describe your project?",
            name: "Description"
        },
        {
            type: "input",
            message: "How would you install your program?",
            name: "installation"
        },
        {
            type: "input",
            message: "What is your project used for?",
            name: "usage"
        },
        {
            type: "input",
            message: "What licenses are you using with the project?",
            name: "license"
        },
        {
            type: "input",
            message: "How many people are contributing to this project?",
            name: "contributers"
        },
        {
            type: "input",
            message: "What is this project's github url?",
            name: "githubURL"
        },
        {
            type: "input",
            message: "What is your github username? (Please spell it accurately)",
            name: "username"
        },
        {
            type: "input",
            message: "What is your repository name? (Please spell it accurately)",
            name: "repo"
        }
    ]).then(function(response) {
        const data = 
        (`# ${response.title}

${response.Description}
        
Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributers](#Contributers)
* [GitHub](#Github)
        
## Installation
${response.installation}
        
## Usage
${response.usage}

## License
This project is using the following license(s): ${response.license}
        
## Contributers
There are ${response.contributers} people working on this project.
        
## GitHub
[Click here to visit this project's github page](${response.githubURL})

![Build Status](/appveyor/build/${response.username}/${response.repo})`);

        fs.writeFile(`test2.md`, data, function (err) {
            if (err) 
            return console.log(err);
          });
    });
}

promptUserInput();