/**
 * author: Denis Kravchenko
 */
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Schema using movie name, poster, IMDB ID and watchlist status
const movie_info = new Schema({
  movieName: {
    type: String,
    required: true,
  },
  moviePoster: {
    type: String,
  },
  movieImdbID: {
    type: String,
  },
  onWatchList: {
    type: Boolean,
  },
});

const Movies = mongoose.model("Movies", movie_info);

module.exports = Movies;
