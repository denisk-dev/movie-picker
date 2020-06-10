/**
 * author: Denis Kravchenko
 */
import React, { useState, useEffect } from "react";
import SearchField from "./SearchField";
import { Grid } from "@material-ui/core";
import MovieResults from "./MovieResults";
import axios from "axios";

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [searchMovieName, setSearchMovieName] = useState("");
  const [movieName, setmovieName] = useState("");

  const handleMovieSearch = () => {
    setmovieName(searchMovieName);
  };

  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?s=${movieName}&apikey=67db3409`)
      .then((res) => {
        setMovies(res.data.Search);
      })
      .catch((err) => console.log(err.message));
  }, [movieName]);

  return (
    <div>
      <SearchField
        handleMovieSearch={handleMovieSearch}
        setSearchMovieName={setSearchMovieName}
        searchMovieName={searchMovieName}
      />
      <Grid container direction="column">
        <Grid item container>
          <Grid item sm={2} />
          <Grid item sm={8}>
            <MovieResults movies={movies} />
          </Grid>
          <Grid item sm={2} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Search;
