// Setting up mysql dependency
const mysql = require("mysql");


// Setting up connection config
let connection;
// Check if connection with Heroku JAWSDB database is feasable
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
//If not then connect with the MYSQL database at local host
else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        // MYSQL username
        user: "root",
        password: "bootcamp",
        //database name as per schema
        database: "burgers_db"
    });
}

// Connecting to the db
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected to MYSQL database as id " + connection.threadId);
});

// Exporting the connection
module.exports = connection;