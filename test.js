fetch('http://localhost:3000/api/data')
  .then(response => {
    // Check if the response status is ok (200-299)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the JSON response
    return response.json();
  })
  .then(data => {
    // Handle the data fetched from the API
    console.log('Data received:', data);
    console.log(data.id);
    console.log(data.move);
    // console.log(data.move.position);
    // You can process the data here
  })
  .catch(error => {
    // Handle errors, such as network issues or invalid JSON response
    console.error('Error:', error);
  });