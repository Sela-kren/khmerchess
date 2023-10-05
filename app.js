require('dotenv').config();
const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

const pool = mysql.createConnection({
    host: 'localhost',
    port: 3306, // Corrected from 'post' to 'port'
    user: 'root',
    password: 'Chhit@085',
    database: 'data',
});




app.get('/', (req, res) => {
    res.json("api connected!!");
});

app.get('/api/data', (req, res) => {
    pool.query('SELECT * FROM chessdata', (error, results) => {
        if (error) {
            console.error('Error fetching data from the database: ' + error.stack);
            res.json(error);
        } else {
            res.json(results);
        }
    });
});

app.post('/api/save', (req, res) => {
    let body = req.body;
    let sqlSave = "INSERT INTO chessdata (move, winner) VALUES (?,?)";

    const createTableQuery = `
  CREATE TABLE IF NOT EXISTS chessdata (
      id INT AUTO_INCREMENT PRIMARY KEY,
      move JSON,
      winner VARCHAR(255)
  );
`;
    pool.query(createTableQuery, (error, results) => {
        if (error) {
            console.error('Error creating table: ' + error.stack);
        } else {
            console.log('Table "chessdata" created successfully');
        }
    });
    pool.query(sqlSave, [JSON.stringify(body.move), body.winner], (error, rows) => {
        if (error) {
            res.json({
                error: true,
                message: error
            });
        } else {
            res.json({
                message: "Data inserted!",
                data: rows
            });
        }
    });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
