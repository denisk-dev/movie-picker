/**
 * author: Denis Kravchenko
 */
import { ADD_MOVIE, DELETE_MOVIE } from "./moviesTypes";
import axios from "axios";

//action to add a movie
export const addMovie = (status) => {
  return {
    type: ADD_MOVIE,
    payload: status,
  };
};

//action to delete a movie
export const deleteMovie = (status) => {
  return {
    type: DELETE_MOVIE,
    payload: status,
  };
};

export const fetchAddMovie = (movie) => {
  return (dispatch) => {
    axios
      .post("http://localhost:4000/api/movies", movie)
      .then((res) => dispatch(addMovie(res.data)))
      .catch((error) => dispatch(addMovie(error.message)));
  };
};

export const fetchDeleteMovie = (movie) => {
  return (dispatch) => {
    axios
      .delete("http://localhost:4000/api/movies", { data: movie })
      .then((res) => dispatch(deleteMovie(res.data)))
      .catch((error) => dispatch(deleteMovie(error.message)));
  };
};
