const express = require('express');
const app = express();

// Define a route for the homepage
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Set the port number
const PORT =  3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Servwesr is running on http://localhost:${PORT}`);
});