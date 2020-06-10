/**
 * author: Denis Kravchenko
 */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import MoviesList from "./MoviesList";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    justifyContent: "center",
  },
});

const Home = () => {
  const [popularMovie, setPopularMovies] = useState([]);
  const [weeklyTrending, setWeeklyTrending] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=17fbb4910f134abd8c8817c29a0b8368&language=en-US&page=1&region=US`
      )
      .then((res) => {
        setPopularMovies(res.data.results);
      })
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=17fbb4910f134abd8c8817c29a0b8368`
      )
      .then((res) => {
        setWeeklyTrending(res.data.results);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      <Grid container spacing={2} className={classes.root}>
        {popularMovie
          ? popularMovie.map((movie) => {
              return <MoviesList key={movie.id} movie={movie} />;
            })
          : ""}
      </Grid>

      <h1>Trending Movies</h1>
      <Grid container spacing={2} className={classes.root}>
        {weeklyTrending
          ? weeklyTrending.map((movie) => {
              return <MoviesList key={movie.id} movie={movie} />;
            })
          : ""}
      </Grid>
    </div>
  );
};

export default Home;
