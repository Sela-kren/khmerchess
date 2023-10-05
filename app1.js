require('dotenv').config();
const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors'); // Enable CORS for cross-origin requests

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
// const pool = mysql.createPool({
//   host: 'sql12.freesqldatabase.com',
//   user: 'sql12650962',
//   password: 'FL63TIEAY6',
//   database: 'sql12650962',
//   //   waitForConnections: true,
//   //   connectionLimit: 10,
//   //   queueLimit: 0
// });

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: 'Chhit@085',
//   database: 'data',
// });

const pool = mysql.createConnection({
  host: 'localhost',
  // post: '3306',
  user: 'root',
  password: 'Chhit@085',
  database: 'data',
});

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS chessdata (
      id INT AUTO_INCREMENT PRIMARY KEY,
      move JSON,
      winner VARCHAR(255)
  );
  `;

  // Execute the query to create the table when your server starts
  pool.query(createTableQuery, (error, results) => {
    if (error) {
      console.error('Error creating table: ' + error.stack);
    } else {
      console.log('Table "chessdata" created successfully');
    }
  });

app.get('/', (req, res)=>{
  res.json("api connected!!");
})

app.get('/api/data', (req, res) => {
  // res.json("hello");
  // Query data from the database
  pool.query('SELECT * FROM chessdata', (error, results) => {
    if (error) {
      console.error('Error fetching data from the database: ' + error.stack);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results); // Send the fetched data as JSON response
    }
  });
});

app.post('/api/save', (req, res) => {
  // Insert a new piece into the database
  let body = req.body;

  let sqlSave = "INSERT INTO chessdata (move, winner) VALUES (?,?)";
  pool.query(sqlSave, [body.move, body.winner], (error, rows) => {
    if (error) {
      res.json({
        error: true,
        message: error
      })
    } else {
      res.json({
        message: "Data inserted!",
        data: rows
      })
    }
  })
});

// app.post('/api/pieces', (req, res) => {
//   // Insert a new piece into the database
//   const { id, name } = req.body;
//   pool.query('INSERT INTO users(id, name) VALUES (?, ?)', [id, name], (error, results, fields) => {
//     if (error) {
//       console.error('Error executing query: ' + error.stack);
//       res.status(500).json({ error: 'Internal Server Error' });
//     } else {
//       res.json({ message: 'Piece added successfully!' });
//     }
//   });
// });


// var sqlInsert = "INSERT INTO customers ( firstname, lastname, gender, dob, tel, email, is_active) VALUES (?,?,?,?,?,?,?)"

// db.query(sqlInsert,[body.firstname, body.lastname, body.gender, body.dob, body.tel, body.email, body.is_active],(error,rows)

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
