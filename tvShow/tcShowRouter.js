const express = require('express');
const TvShow = require('./TvShow');
const tcShowRouter = express.Router();
const tvShows = [new TvShow(1, 'Mr.Robot', 'Drama'), new TvShow(2, 'Black Mirror', 'Drama')];

tcShowRouter.get('/tvShow', (req, res) => {
  res.json(tvShows);
});

module.exports = tcShowRouter;