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

const getItem = function(cityName, itemName, callback) {
  var sqlString = 'SELECT i.name, i.image_url, is_recyclable FROM cities c JOIN items i '
  + 'JOIN recyclable r ON r.city_id = c.id AND r.item_id = i.id '
  + 'WHERE c.name = ? AND i.name = ?';
  var params = [cityName, itemName];
  connection.query(sqlString, params, callback);
};

module.exports = {
  getItem
};
