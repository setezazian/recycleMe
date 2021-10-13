const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

connection.connect(error => {
  if (error) {
    console.log(error);
  } else {
    console.log('connected to MySQL');
  }
});

// const getAllTransactions = function(callback) {
//   var sqlString = 'SELECT transactions.id, transactions.date, transactions.description, transactions.amount, categories.name FROM transactions LEFT JOIN categories ON transactions.category_id = categories.id';
//   connection.query(sqlString, callback);
// };

// const getAllCategories = function(callback) {
//   var sqlString = 'SELECT * FROM categories';
//   connection.query(sqlString, callback);
// };

module.exports = {
  // getAllTransactions,
  // getAllCategories
};
