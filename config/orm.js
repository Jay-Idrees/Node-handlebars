// Object relational mapping

// Requiring dependencies
const connection=require("./connection");

const orm={
//Select all object to query  all columns from a specified table
// Using table name in query to invoke its contents and a callback function in the body of the function selectALL to capture the result object
    selectAll: function(table_name, cb) {
        var queryString = "SELECT * FROM " + table_name + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            // call back function
            cb(result);
        });
    },
    
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
    
        queryString += " (";
        // This code wwill paste the name of the columns 
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        //
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
    
        console.log(queryString);
    
        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
        
            cb(result);
        });
    },
// Adding the updateOne function
    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;
    
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
        
            cb(result);
        });
    }  










}; //br close orm