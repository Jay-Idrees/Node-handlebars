
// Object relational mapping

// Requiring dependencies
const connection=require("./connection");


// Add question marks for completing the query
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
}



// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
}




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
        // This code will print ? the number of times there are observations in the column/variable of the table
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
    
        console.log(queryString);
    // Note that adding vals here is important because the vals will be the new vales inserted - in this case the burger choices by the user
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









// Exporting orm
module.exports = orm;


