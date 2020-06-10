/**
 * author: Denis Kravchenko
 */
import React from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  form: {
    marginTop: "5vh",
    marginBottom: "10vh",
  },
});

const SearchField = (props) => {
  const classes = useStyles();

  return (
    <div>
      <form className={classes.form}>
        <Grid container spacing={2} justify="center" alignItems="center">
          <Grid item>
            <TextField
              id="outlined-basic"
              label="Movie"
              variant="outlined"
              value={props.searchMovieName}
              onChange={(e) => props.setSearchMovieName(e.target.value)}
            />
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={() => props.handleMovieSearch()}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default SearchField;
