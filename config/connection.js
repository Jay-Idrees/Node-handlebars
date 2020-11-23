// Setting up mysql dependency
const mysql = require("mysql");


// Setting up connection config
let connection;
// Check if we have Jaws DB URL
if (process.env.le) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    connection = mysql.createConnection({
        host: "localhost",
        // Your port; if not 3306
        port: 3306,
        // Your username
        user: "root",
        // Your password
        password: "bootcamp",
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