/**
 * author: Denis Kravchenko
 */

const express = require("express");

//importing the Router
const routes = express.Router();

//importing the Movies model
const Movies = require("../models/movies.model");

//Get request to get all the movies
routes.get("/movies", (req, res) => {
  Movies.find()
    .then((movies) => res.json(movies))
    .catch((err) => res.status(400).json(err));
});

//Post request to add the new movie
routes.post("/movies", (req, res) => {
  const movieName = req.body.movieName;
  const moviePoster = req.body.moviePoster;
  const movieImdbID = req.body.movieImdbID;
  const onWatchList = req.body.onWatchList;

  const newMovie = new Movies({
    movieName,
    moviePoster,
    movieImdbID,
    onWatchList,
  });

  Movies.findOne({
    movieName: movieName,
    movieImdbID: movieImdbID,
  })
    .then((movie) => {
      if (movie) {
        res.json("Movie Exists");
      } else {
        newMovie
          .save()
          .then(() => res.json("Movie added successfully"))
          .catch((err) => res.status(400).json(err));
      }
    })
    .catch((err) => console.log(err));
});

//Delete request to remove the movie
routes.delete("/movies", (req, res) => {
  Movies.deleteOne({
    movieName: req.body.movieName,
    moviePoster: req.body.moviePoster,
    movieImdbID: req.body.movieImdbID,
    onWatchList: req.body.onWatchList,
  })
    .then(() => res.json("Term removed successfully"))
    .catch((err) => res.status(400).json(err));
});

module.exports = routes;
