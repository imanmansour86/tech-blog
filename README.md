![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

![lang](https://img.shields.io/github/languages/top/imanmansour86/tech-blog)
![repo size](https://img.shields.io/github/repo-size/imanmansour86/tech-blog)
![last commit](https://img.shields.io/github/last-commit/imanmansour86/tech-blog)

# Tech-blog

## Deployed Link

- [Demo Link]()

## Description

This app is a CMS-style blog site, where users can publish their blog posts and comment on other people's posts as well. The app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, npm bcrypt package to hash passwords and the express-session npm package for authentication.

## Table of Contents

## Installation

- Go to the app's [repo](https://github.com/imanmansour86/tech-blog) in github and clone the app
- Open the app in VS code, navigate to .env file, change the DB_USER and DB_PW based on current user configurations
- From terminal: navigate to app's directoty and run:

  ```md
  $ npm install
  ```

- From terminal: navigate to db folder in the app's directoty and run:

  ```md
  $ mysql -uroot - p
  ```

- Run the schema file:

  ```md
  source schema.sql
  ```

- From terminal: navigate to the app's directoty and run:

  ```md
  $ npm run seed
  ```

- To invoke the app from terminal, run:

  ```md
  $ node server.js
  ```

## Usage

![Tag]()

## Features

## Tests

## Built With

- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Expressjs](https://expressjs.com/)
- [Express-handlebars](https://www.npmjs.com/package/express-handlebars)
- [Express-session](https://www.npmjs.com/package/express-session)
- [Connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)
- [Sequelize](https://sequelize.org/)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [bcrypt](https://www.npmjs.com/package/bcrypt)

## Resources Used

- [W3schools](https://www.w3schools.com)
- [stackoverflow](https://stackoverflow.com)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS)

## Author

Iman Mansour

- [Portfolio](https://imanmansour86.github.io/new-portfolio/)
- [Github](https://github.com/imanmansour86)
- [LinkedIn](https://www.linkedin.com/in/iman-mansour-51391515/)
- [Email](mailto:imanmansour86@gmail.com)

## License

This project is licensed under the MIT License
