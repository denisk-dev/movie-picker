/**
 * author: Denis Kravchenko
 */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWatchlist } from "../../redux/watchlist/watchlistActions";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Poster from "./Poster";

const useStyles = makeStyles({
  root: {
    justifyContent: "center",
  },
});

const Watchlist = () => {
  const classes = useStyles();
  const watchlist = useSelector((state) => state.reducerWatchlist.watchlist);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWatchlist());
  }, [dispatch]);

  return (
    <div>
      <h1>Watchlist</h1>
      <Grid container spacing={3} className={classes.root}>
        {watchlist
          ? watchlist.map((movie) => {
              return (
                <Poster
                  key={movie.movieImdbID}
                  poster={movie.moviePoster}
                  movieID={movie.movieImdbID}
                  onWatchList={movie.onWatchList}
                  title={movie.movieName}
                />
              );
            })
          : ""}
      </Grid>
    </div>
  );
};

export default Watchlist;
