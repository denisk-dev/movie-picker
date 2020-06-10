/**
 * author: Denis Kravchenko
 */
import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 450,
    cursor: "pointer",
  },
  media: {
    height: 540,
  },
});

const Movie = (props) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={4}>
      <Link to={`/movie/${props.imdbId}`}>
        <Card variant="outlined" className={classes.root}>
          <CardContent>
            <CardMedia
              component="img"
              className={classes.media}
              image={props.picture}
              title={props.name}
            />
            <Typography color="textSecondary" gutterBottom>
              {props.name}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
};

export default Movie;
