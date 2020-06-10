/**
 * author: Denis Kravchenko
 */
import React from "react";
import { useHistory } from "react-router";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const MoviesList = (props) => {
  let history = useHistory();

  const getMovieIMDBId = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${props.movie.id}/external_ids?api_key=17fbb4910f134abd8c8817c29a0b8368`
      )
      .then((res) => {
        history.push(`/movie/${res.data.imdb_id}`);
      })
      .catch((err) => console.log(err.message));
  };

  const imageURL =
    "https://image.tmdb.org/t/p/original" + props.movie.poster_path;

  const classes = useStyles();

  return (
    <Grid item>
      <Card className={classes.root} onClick={getMovieIMDBId}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={props.movie.original_title}
            width={300}
            image={imageURL}
            title={props.movie.original_title}
          />
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default MoviesList;
