
// Setting up dependencies
const express = require("express");
const router = express.Router();

// Import the model (burger.js) to use its database functions.
const Burger = require("../models/burger.js");

// Routes- 
//This will get all the burgers using the selectall burger controller, package the burger into 'hbs object' and then send it to the handle bars
router.get("/", function(req, res) {
  Burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

