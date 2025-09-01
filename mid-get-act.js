const express = require('express');
const app = express();
const port = 4000;

const movies = [
  { id: 1, title: 'Superman' },
  { id: 2, title: 'Thor' },
  { id: 3, title: 'Iron Man' }, 
  { id: 4, title: 'Hulk', publisher: 'Marvel' }
];

// get all movies
app.get('/api/movies', (req, res) => {
  res.send(movies);
});

// get movie by id
app.get('/api/movies/:id', (req, res) => {
  const movie = movies.find(h => h.id === parseInt(req.params.id));
  if (!movie) return res.status(404).send('The movie with the given ID was not found.');
  res.send(movie);
});

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
