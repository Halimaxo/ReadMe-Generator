// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![GitHub License](https://img.shields.io/badge/license-${license}-pink.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return ``;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    ${license}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

  * [Installation](#installation)

  * [Usage](#usage)

  * [Contributors](#contributors)

  * [Tests](#tests)

  * [Questions](#questions)

  ${renderLicenseBadge(data.License)}

  ## Description
  ${data.Description}

  ${data.Repo}
  
  ${data.Deployed}

  ## Installation
  ${data.Installation}

  ## Usage
  ${data.Usage}

  ${renderLicenseSection(data.License)} 

  ## Contributors
  ${data.Contributors}

  ## Tests 
  ${data.Tests}

  ## Questions 
  For further questions reach out to me using my GitHub Profile or email: 
  ${data.Questions}
  ${data.Email}
`;
}

module.exports = generateMarkdown;
