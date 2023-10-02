const mysql = require('mysql2');

const connection = require("./config/connectiondb");
// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as ID ' + connection.threadId);
  
  // Read data from the 'users' table
  connection.query('SELECT * FROM users', (err, results, fields) => {
    if (err) throw err;
    
    // Log the retrieved data
    console.log('Retrieved data from users table:');
    console.log(results);
    
    // Close the connection
    connection.end((err) => {
      if (err) {
        console.error('Error closing the connection: ' + err.stack);
      }
      console.log('Connection closed.');
    });
  });
});