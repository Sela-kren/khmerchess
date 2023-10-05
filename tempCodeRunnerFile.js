app.get('/api/data', (req, res) => {
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