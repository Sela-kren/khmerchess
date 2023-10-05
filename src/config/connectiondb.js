const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Chhit@085',
  database: 'data'
});

module.exports = connection;