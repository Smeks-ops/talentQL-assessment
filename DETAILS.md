# How Does This Work
## A brief explanation of how the age-calculator works

I built the age-calculator using a NESTJS framework with typescript.

[Link to Live App](https://octopus-app-eqgz8.ondigitalocean.app/api/v1/docs/)

## Features


- It collects your dob in a timestamp format (example shown in the swagger documentation) and calculates your current age.
## Tech

The approach I used in my codebase was to collect your date of birth, check if it was valid, extract the year, month and day from it, subtract the dob year from the current year (age),   subtract the dob month from the current month and if the result is less than zero, or the result is equals to zero and the current day is less than the day in the dob, I subtract one from your age.
### Technologies Used


- [Nestjs](https://docs.nestjs.com/) - a framework for building efficient, scalable Node.js server-side applications


- [Express](https://expressjs.com/) - fast node.js network app framework 


- [Typescript](https://www.typescriptlang.org/) - TypeScript is a strongly typed programming language that builds on JavaScript.


- [DigitalOcean](https://www.digitalocean.com/) - For deployment.


- Nestjs Throttler Module: to limit number of requests per second to 3.

## Installation

The app requires [Node.js](https://nodejs.org/) v10+ to run.

Clone the repository on github with git clone https://github.com/Smeks-ops/talentQL-assessment.git

Install the dependencies and devDependencies and start the server.

```sh
cd talentQL-assessment
npm i
npm run start:dev
```

If done correctly, the app shpuld be running on localhost 3000 or the PORT you specified in your environment variables.

To view the documentation, open http://localhost:{{PORT}}/api/v1/docs/ in your browser.
