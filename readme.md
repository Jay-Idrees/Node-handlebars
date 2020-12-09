# Full Stack Burger SQL

## About the Project
This project is a full-stack application that utilizes MySQL to store a list of burgers input by a user. The user also has the option of devouring the burger which then moves the burger to the devoured list of burgers. This app utilizes Node Express.JS for server requests in conjuction with MYSQL for backend. The Front-End is handled by using Node Hadlebar to dynamically update the list of burgers typed by the user. 

[Link to the deployed Burger SQL app on Heroku](https://fullstack-node-sql-burger.herokuapp.com/) <br />
[Watch a video demonstrating the app functionality]()<br />

## Contact Programmer for questions

Jay J. Idrees, MD, MPH<br />
Full-Stack Software Engineer<br />
[JAY-IDREES](https://github.com/Jay-Idrees) ![Github](http://img.shields.io/badge/github-black?style=flat&logo=github)<br />
jidrees@live.com



## Contents

- [User Story](#user-story)
- [Technologies used](#technologies-used)
- [Key files in the repository](#key-files-in-the-repository)
- [Packages used](#packages-used)
- [Applied Programming Skills](#applied-programming-skills)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [License](#license)
- [Credits and Copyright](#credits-and-copyright)


## User Story

As the owner of a fast-foot resturant I would like to know the popular choices of burgers among the local residents. I am looking for an app that can allow a visitor to recommend a a burger type. This information is stored in a database. 



## Technologies used

![Javascript](https://img.shields.io/badge/JavaScript-black?style=for-the-badge&logo=JavaScript)

![JQUERY](https://img.shields.io/badge/jquery-purple?style=for-the-badge&logo=jquery)

![CSS](https://img.shields.io/badge/css-darkgreen?style=for-the-badge&logo=css3)

![HTML](https://img.shields.io/badge/HTML-informational?style=for-the-badge&logo=html5)

![NPM](http://img.shields.io/badge/npm-yellow?style=for-the-badge&logo=NPM)

![Node](https://img.shields.io/badge/Node-green?style=for-the-badge&logo=Node.js)

![EXPRESS.js](http://img.shields.io/badge/express-JS-yellow?style=for-the-badge&logo=experts-exchange)

![SQL](https://img.shields.io/badge/MYSQL-darkblue?style=for-the-badge&logo=sqlite)

![Heroku](http://img.shields.io/badge/Heroku-purple?style=for-the-badge&logo=heroku)




## Packages used

Express <br />
MySQL <br />
Express-handlebar <br />


## Applied Programming Skills

By completing this project I was able to master application of the following programming skills: 

- Setting up MYSQL connection

- Setting up Express.JS server

- Using Object Relational Mapping (ORM) in generating the query string for performing MySQL queries

- Performing CRUD (Create, Read, Update and Delete) function using the ORM

- Using controller as intermeiary between ORM and Models and using Express Routers to create api routes for adding a new burger to list and updating the 'devour' property of the burger

- Using JQUERY to capture the burger name text string typed by the user and trigering post methods with the AJAX request to send data to appropriate api

- Using node handlebars to dynamically update the burger list 

- Using the #if and #each attributes in Node.JS handlebars to specify the outputs on the HTML page

- Using the packages Express.JS, Express-handlebars and MYSQL

- Using MySQL work bench to run queries for creating database, tables, variables

- Using the seeds to pre-populate the MYSQL tables

- Deployment of the app on Heroku

- Using Node.JS to generate a high quality readme file



## Key files in the repository

orm.js
burgers_controller.js
burger.js in the model
server.js
.handlebars files in the view folder



## Installation

For installation of the dependencies, please run the following command in the terminal

```
npm install
```

## Usage

To start the application, please type the following command in the terminal

```
node server.js
```


## Testing

For running the tests on application, please run the following commad

```
npm test
```


## License 

![License badge](https://img.shields.io/badge/license-MIT-blue.svg)


## Credits and Copyright 
Copytight 2020- Present. Jay Idrees


