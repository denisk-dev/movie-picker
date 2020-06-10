/**
 * author: Denis Kravchenko
 */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { Button } from "@material-ui/core";
import Spinner from "./Spinner";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const Spin = () => {
  const [spin, setSpin] = useState(false);
  const [showMovie, setShowMovie] = useState(false);
  const [randomMovie, setRandomMovie] = useState({});
  const [randomId, setRandomId] = useState(0);

  const classes = useStyles();

  const handleClick = () => {
    const min = 1;
    const max = 600000;
    const randomId = Math.round(min + Math.random() * (max - min));

    setRandomId(randomId);

    setShowMovie(false);

    setSpin(!spin);

    setTimeout(() => {
      setSpin(spin);
      setShowMovie(!showMovie);
    }, 3000);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${randomId}/external_ids?api_key=17fbb4910f134abd8c8817c29a0b8368`
      )
      .then((res) => {
        if (res.data) {
          axios
            .get(
              `http://www.omdbapi.com/?i=${res.data.imdb_id}&plot=full&apikey=67db3409`
            )
            .then((res) => {
              setRandomMovie(res.data);
            })
            .catch((err) => console.log(err.message));
        }
      })
      .catch((err) => console.log(err.message));
  }, [randomId]);

  return (
    <div style={{ marginTop: 200 }}>
      {spin ? (
        <Spinner />
      ) : (
        <Button
          size="large"
          color="primary"
          variant="contained"
          onClick={handleClick}
        >
          Get Random Movie
        </Button>
      )}
      {showMovie ? (
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 40 }}
        >
          <Link to={`/movie/${randomMovie.imdbID}`}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={randomMovie.Title}
                  width={300}
                  image={randomMovie.Poster}
                  title={randomMovie.Title}
                />
              </CardActionArea>
            </Card>
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Spin;
