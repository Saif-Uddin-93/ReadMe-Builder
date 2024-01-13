// function to generate markdown for README
const licenseDescription = (data) =>{
  switch (data.license) {
    case 'MIT':
return `Copyright (c) 2024 ${data.github||'n/a'}

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`

    case ''||'The Unlicense':
return `Copyright (C) 2017-2018 ${data.github||'n/a'} <${data.email||'n/a'}>

This file is part of the ${data.title||'n/a'} project.

The ${data.title||'n/a'} project can not be copied and/or distributed without the express
permission of ${data.github||'n/a'} <${data.email||'n/a'}>.`

    default:
      return ''
  } 
}

function generateMarkdown(data) {
  return `# ${data.title||'n/a'}

## Description

${data.description||'n/a'}

[Link to deployed web page.](${data.deployed||'#'})

## User Story

\`\`\`md
${data.userStory||'n/a'}
\`\`\`

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Contact](#contact)


## Installation

${data.installation||'n/a'}

## Usage

${data.usage||'n/a'}

## License
### ${data.license||'UNLICENSED'} License
${licenseDescription(data)}

## Credits

${data.credits||'n/a'}

## Contributing

${data.contributing}

## Tests

${data.tests||'n/a'}

## Questions

${data.questions}

## Contact
I can be contacted via email on, ${data.email||'n/a'}

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)`;
}

module.exports = generateMarkdown;