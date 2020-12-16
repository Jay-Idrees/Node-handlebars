
const orm = require("../config/orm.js");

const Burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller
module.exports = Burger;






// const orm = require("../config/orm.js");


// const Burger = {
//     selectAll: function(cb) {
//         // Assigning arguments to the select all function in the ORM, passing the table name 'burger' from the burger_db. Note the use of OOP. I have created a burger object and then stored objects named according to their call back functions
//         // THis is basically readymade code for excuting general functions  with specific arguemtns to run MYSQL query
//         // For instance SelectAll: function(table_name, cb), here table_name is 'burgers' and function(result) is call back
//       orm.selectAll("burgers", function(result) {
//         cb(result);
//       });
//     },
//     // Similar as above
//     insertOne: function(cols, vals, cb) {
//       orm.insertOne("burgers", cols, vals, function(result) {
//           // Note that the result here will contain an object burgers with column name (e-g burger_name, id, devoured) and their values (name of the burger, id value and true/false for devoured)
//         cb(result);
//       });
//     },
//     // Similar as above
//     updateOne: function(objColVals, condition, cb) {
//       orm.updateOne("burgers", objColVals, condition, function(result) {
//         cb(result);
//       });
//     }
//   };
  
//   // Export the database functions for the controller
//   module.exports = Burger;
  