const express = require('express');
const app = express();

app.use(express.json()); // middleware to parse JSON

const movies = [
  { id: 1, title: "Superman" },
  { id: 2, title: "Batman" },
  { id: 3, title: "Iron Man" }
];

// add a movie
app.post('/api/movies', (req, res) => {
  const movie = {
    id: movies.length + 1,
    title: req.body.title
  };
  movies.push(movie);
  res.send(movie);
});

app.listen(5000, () => console.log('Listening on port 5000...'));
