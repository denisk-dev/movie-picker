/**
 * author: Denis Kravchenko
 */
import React from "react";
import {
  IconButton,
  Button,
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MovieIcon from "@material-ui/icons/Movie";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";
import GolfCourseIcon from "@material-ui/icons/GolfCourse";

const useStyles = makeStyles({
  navbar: { backgroundColor: "rgb(40,40,40)" },
});

const Navbar = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <IconButton color="inherit" edge="start" arial-label="home" href="/">
            <MovieIcon />
          </IconButton>
          <IconButton color="inherit" href="/search">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit" href="/spin">
            <GolfCourseIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Movie Picker
          </Typography>
          <Button href="/watchlist" color="inherit">
            Watchlist
          </Button>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
