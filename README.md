![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

![lang](https://img.shields.io/github/languages/top/imanmansour86/tech-blog)
![repo size](https://img.shields.io/github/repo-size/imanmansour86/tech-blog)
![last commit](https://img.shields.io/github/last-commit/imanmansour86/tech-blog)

# Tech-blog

## Deployed Link

- [Deployed](https://quiet-mesa-73726.herokuapp.com/dashboard)

## Description

This app is a CMS-style blog site, where users can publish their blog posts and comment on other people's posts as well. The app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, npm bcrypt package to hash passwords and the express-session npm package for authentication.

## Table of Contents

- [Tech-blog](#tech-blog)
  - [Deployed Link](#deployed-link)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Features](#features)
  - [Demo Link](#demo-link)
  - [Built With](#built-with)
  - [Resources Used](#resources-used)
  - [Author](#author)
  - [License](#license)

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

- Homepage

![Homepage](/images/homepage.png)

- Login

![Login](/images/login.png)

- Dashboard

![Dashboard](/images/dashboard.png)

- Update/delete blog

![Update-delete](/images/update.png)

## Features

When the page first loads, user is presented with the homepage, which includes existing blog posts and navigation links for the homepage and the dashboard. After click on the dashboad, the user is prompted to either sign up or sign in. When the user signs in or signs up, he can view the dashbooard and click on blog posts in the homepage. The homepage shows all blog posts that are written, showing the title and creation date. The user can click on any blog post in the homepage and he is presented with the blog title, contents, blog creator’s username and date created, as well as an option to leave a comment. The dashboard presents the user with any blog posts he has already created and the option to add a new blog post. User can also delete and modify blogs posts from the dashboard. The user has the option to logout by clicking on the button in the navigation. If the user is idle on the page for more than a set time, then the session ends and he is automatically signed out of the site

## Demo Link

- [Demo Link](https://watch.screencastify.com/v/kjrArC1r7m6RZ7GdfiC9)

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
