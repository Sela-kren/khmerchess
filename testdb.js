const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Chhit@085',
  database: 'data'
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as ID ' + connection.threadId);

  // Create the 'users' table if it doesn't exist
  connection.query(
    `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL
    )
  `,
    (err) => {
      if (err) throw err;

      // Check if the 'users' table is empty
      connection.query('SELECT COUNT(*) AS count FROM users', (err, results) => {
        if (err) throw err;

        const rowCount = results[0].count;

        // If the table is empty, insert one data into it
        if (rowCount === 0) {
          connection.query(
            'INSERT INTO users (name) VALUES (?)',
            ['John Doe'], // Replace this with the data you want to insert
            (err) => {
              if (err) throw err;
              console.log('One data inserted into the users table.');
            }
          );
        } else {
          console.log('Users table already contains data.');
        }

        // Close the connection
        connection.end((err) => {
          if (err) {
            console.error('Error closing the connection: ' + err.stack);
          }
          console.log('Connection closed.');
        });
      });
    }
  );
});
