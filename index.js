const express = require('express');
const app = express();

// Root
app.get('/', (req, res) => {
  res.send('My New App!');
});

// Heroes list
app.get('/api/heroes', (req, res) => {
  res.send(['Superman', 'Iron Man', 'Batman', 'Hulk']);
});

// Single param
app.get('/api/heroes/:id', (req, res) => {
  res.send(req.params.id);
});

// --- OLD duplicate route (commented out) ---
// app.get('/api/heroes/:title/:publisher', (req, res) => {
//   res.send(req.params);
// });

// Multi params + query params (working one)
app.get('/api/heroes/:title/:publisher', (req, res) => {
  res.send({
    params: req.params,
    query: req.query
  });
});

// Start server
app.listen(3000, () => console.log('Listening on port 3000'));
