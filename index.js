const fs = require('fs');
const util = require('util');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const licenses = [
  "MIT",
  'Academic Free License v3.0',
  'Apache license 2.0',
  'Artistic license 2.0',
  'Boost Software License 1.0',
  'BSD 2-clause "Simplified" license',
  'BSD 3-clause "New" or "Revised" license',
  "BSD 3-clause Clear license",
  'BSD 4-clause "Original" or "Old" license',
  "BSD Zero-Clause license",
  "Creative Commons license family",
  "Creative Commons Zero v1.0 Universal",
  "Creative Commons Attribution 4.0",
  "Creative Commons Attribution ShareAlike 4.0",
  "Do What The F*ck You Want To Public License",
  "Educational Community License v2.0",
  "Eclipse Public License 1.0",
  "Eclipse Public License 2.0",
  "European Union Public License 1.1",
  "GNU Affero General Public License v3.0",
  "GNU General Public License family",
  "GNU General Public License v2.0",
  "GNU General Public License v3.0",
  "GNU Lesser General Public License family",
  "GNU Lesser General Public License v2.1",
  "GNU Lesser General Public License v3.0",
  "ISC",
  "LaTeX Project Public License v1.3c",
  "Microsoft Public License",
  "MIT",
  "Mozilla Public License 2.0",
  "Open Software License 3.0",
  "PostgreSQL License",
  "SIL Open Font License 1.1",
  "University of Illinois/NCSA Open Source License",
  "The Unlicense",
  "zLib",
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
      name: 'dependencies',
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


const writeFileAsync = util.promisify(fs.writeFile);

// function to initialize program
const init = async () => {
  try {
    const answers = await promptUser();

    const md = generateMarkdown(answers);

    await writeFileAsync('generated readme.md', md);

    console.log('Successfully wrote to readme.md');
  } catch (err) {
    console.log(err);
  }
};

init();