//Specifying Express and express-handlebars as dependencies 
const express = require("express");
const exphbs = require("express-handlebars");

// Setting up the Express Server for JSON parsing of data
const app = express();
const PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Setting up JSON parse/stringigy handeling of the data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setting up handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// Starting the server
app.listen(PORT, function() {
    console.log("The server is now running at http://localhost:" + PORT);
});