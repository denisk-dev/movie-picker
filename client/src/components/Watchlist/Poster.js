/**
 * author: Denis Kravchenko
 */
import React from "react";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const Poster = (props) => {
  const classes = useStyles();
  return (
    <Grid item>
      <Link to={`/movie/${props.movieID}?onwatchlist=${props.onWatchList}`}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={props.title}
              width={300}
              image={props.poster}
              title={props.title}
            />
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
};

export default Poster;
