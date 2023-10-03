const axios = require("axios");
const data1 = { position: 'some_position', rank: 'some_rank', name: 'some_name', color: 'some_color' };
const winColor1 = 'REd'; // Replace with your actual winner color

// Make a POST request to the server
axios.post('http://localhost:3000/api/save', {
  move: JSON.stringify(data1),
  winner: winColor1
})
  .then(response => {
    console.log('Response from server:', response.data);
    // Handle the response data here
  })
  .catch(error => {
    console.error('Error:', error);
    // Handle errors here
  });