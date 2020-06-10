/**
 * author: Denis Kravchenko
 */
import React from "react";
import { Grid } from "@material-ui/core";
import Movie from "./Movie";

const MovieResults = (props) => {
  return (
    <Grid container spacing={2}>
      {props.movies
        ? props.movies.map((movie) => {
            return (
              <Movie
                name={movie.Title}
                picture={movie.Poster}
                imdbId={movie.imdbID}
                key={movie.imdbID}
              />
            );
          })
        : ""}
    </Grid>
  );
};

export default MovieResults;
