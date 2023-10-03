const express = require('express');
const mysql = require('mysql2');
const cors = require('cors'); // Enable CORS for cross-origin requests

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Chhit@085',
  database: 'data',
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
});

app.get('/api/pieces', (req, res) => {
  // Fetch pieces from the database
  pool.query('SELECT * FROM users', (error, results, fields) => {
    if (error) {
      console.error('Error executing query: ' + error.stack);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

app.post('/api/pieces', (req, res) => {
  // Insert a new piece into the database
  const { id, name } = req.body;
  pool.query('INSERT INTO users(id, name) VALUES (?, ?)', [id, name], (error, results, fields) => {
    if (error) {
      console.error('Error executing query: ' + error.stack);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ message: 'Piece added successfully!' });
    }
  });
});


// var sqlInsert = "INSERT INTO customers ( firstname, lastname, gender, dob, tel, email, is_active) VALUES (?,?,?,?,?,?,?)"

// db.query(sqlInsert,[body.firstname, body.lastname, body.gender, body.dob, body.tel, body.email, body.is_active],(error,rows)

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
