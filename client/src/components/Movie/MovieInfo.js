/**
 * author: Denis Kravchenko
 */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import {
  fetchAddMovie,
  fetchDeleteMovie,
} from "../../redux/movies/moviesActions";
import { Button } from "@material-ui/core";

const MovieInfo = ({ match, location }) => {
  const [movieInfo, setMovieInfo] = useState({});
  const [onWatchList, setOnWatchList] = useState(
    new URLSearchParams(location.search).get("onwatchlist")
  );

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        `http://www.omdbapi.com/?i=${match.params.id}&plot=full&apikey=67db3409`
      )
      .then((res) => {
        setMovieInfo(res.data);
      })
      .catch((err) => console.log(err.message));
  }, [match.params.id]);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5}>
          <div>
            <Grid
              container
              spacing={2}
              justify="center"
              alignItems="center"
              direction="column"
            >
              <Grid item>
                <img src={movieInfo.Poster} alt="poster" />
              </Grid>
              <Grid item>
                {onWatchList ? (
                  <Button
                    onClick={() => {
                      setOnWatchList(!onWatchList);
                      dispatch(
                        fetchDeleteMovie({
                          movieName: movieInfo.Title,
                          moviePoster: movieInfo.Poster,
                          movieImdbID: movieInfo.imdbID,
                          onWatchList: true,
                        })
                      );
                    }}
                  >
                    Remove from Watchlist
                  </Button>
                ) : (
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={() => {
                      setOnWatchList(!onWatchList);
                      dispatch(
                        fetchAddMovie({
                          movieName: movieInfo.Title,
                          moviePoster: movieInfo.Poster,
                          movieImdbID: movieInfo.imdbID,
                          onWatchList: true,
                        })
                      );
                    }}
                  >
                    Add to Watchlist
                  </Button>
                )}
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <h1>{movieInfo.Title}</h1>
            <p>{movieInfo.Plot}</p>
            <p>{movieInfo.Genre}</p>
            <p>
              <b>Rated:</b> {movieInfo.Rated}
            </p>
            <p>
              <b>Year:</b> {movieInfo.Year}
            </p>
            <p>Writer: {movieInfo.Writer}</p>
            <p>
              <b>IMDB:</b> {movieInfo.imdbRating}/10 <b>Total Votes:</b>{" "}
              {movieInfo.imdbVotes}
            </p>
            <p>
              {movieInfo.Ratings && movieInfo.Ratings[1]
                ? movieInfo.Ratings[1].Source
                : ""}{" "}
              {movieInfo.Ratings && movieInfo.Ratings[1]
                ? movieInfo.Ratings[1].Value
                : ""}
            </p>
            <p>
              {movieInfo.Ratings && movieInfo.Ratings[2]
                ? movieInfo.Ratings[2].Source
                : ""}{" "}
              {movieInfo.Ratings && movieInfo.Ratings[2]
                ? movieInfo.Ratings[2].Value
                : ""}
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default MovieInfo;
