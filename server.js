'use strict';

const express = require('express');
const images = require('./src/images.json');
const app = express();

app.get('/images', ({ query }, res) => {
  const i = query.limit ? images.slice(0, parseInt(query.limit)) : images;
  return res.status(200).json(i);
});

app.get(/^\/(car-images|avatars)\//, (req, res) => {
  // If no extension, just serve the webp file
  res.status(200).sendFile(`public/${req.url}.webp`, { root: __dirname });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is available on ${PORT}.`));
