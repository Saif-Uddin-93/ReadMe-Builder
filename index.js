const fs = require('fs/promises');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const licenses = [
  'Apache license 2.0',
  'BSD 2-clause "Simplified" license',
  'BSD 4-clause "Original" or "Old" license',
  "GNU General Public License v3.0",
  "MIT",
  "The Unlicense",
]

// array of questions for user
const promptUser = ()=> {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'github',
      message: "What is your GitHub username?",
    },
    {
      type: 'input',
      name: 'email',
      message: "What is your email address?",
    },
    {
      type: 'input',
      name: 'title',
      message: "What is your project's name?",
    },
    {
      type: 'input',
      name: 'description',
      message: "Please write a short description of your project:",
    },
    {
      type: 'input',
      name: 'userstory',
      message: "Please write a short description of the user story:",
    },
    {
      type: 'input',
      name: 'deployed',
      message: "What is the link to your deployed application?",
    },
    {
      type: 'list',
      name: 'license',
      message: "What type of license should your project have?",
      choices: licenses,
    },
    {
      type: 'input',
      name: 'installation',
      message: "What command should be run to install dependencies?",
    },
    {
      type: 'input',
      name: 'test',
      message: "What command should be run to run tests?",
    },
    {
      type: 'input',
      name: 'usage',
      message: "What does the user need to know about using the repo?",
    },
    {
      type: 'input',
      name: 'credits',
      message: "List your collaborators, if any, with links to their GitHub profiles.\nIf you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section:",
    },
    {
      type: 'input',
      name: 'contribute',
      message: "What does the user need to know about contributing to the repo?",
    },
  ]);
}


//const writeFileAsync = util.promisify(fs.writeFile);

// function to initialize program
const init = async () => {
  try {
    const answers = await promptUser();

    const md = generateMarkdown(answers);

    await fs.writeFile('generated readme.md', md);

    console.log('Successfully wrote to readme.md');
  } catch (err) {
    console.log(err);
  }
};

init();