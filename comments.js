// Create web server
// Create route to handle comments
// Create route to handle comments with id

// Import express
const express = require('express');
// Create express app
const app = express();
// Import comments data
const comments = require('./data/comments');

// Route to handle comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Route to handle comments with id
app.get('/comments/:id', (req, res) => {
  const id = Number(req.params.id);
  const comment = comments.find((comment) => comment.id === id);
  res.json(comment);
});

// Start server
app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});
