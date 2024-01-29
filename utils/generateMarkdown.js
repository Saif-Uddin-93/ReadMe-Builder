const licenseDescriptions = require("./licenseDescriptions")

const deployedPage = (data)=> {
  return data.deployed ? `[Link to deployed web page.](${data.deployed})` : ''
}

function generateMarkdown(data) {
  return `# ${data.title||'n/a'}

## Description

${data.description||'n/a'}

${deployedPage(data)}

## User Story

\`\`\`md
${data.userstory||'n/a'}
\`\`\`

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Installation

\`\`\`md
${data.installation||'n/a'}
\`\`\`

## Usage

${data.usage||'n/a'}

## License
### ${data.license||'UNLICENSED'} License
${licenseDescriptions(data)}

## Credits

${data.credits||'n/a'}

## Contributing

${data.contribute || 'n/a'}

## Tests

${data.test||'n/a'}

## Questions
I can be contacted via email on, ${data.email||'n/a'}
GitHub Profile: [@${data.github||'#'}](https://github.com/${data.github||'#'})

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)`;
}

module.exports = generateMarkdown;