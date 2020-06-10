/**
 * author: Denis Kravchenko
 */
import axios from "axios";
import {
  FETCH_WATCHLIST_REQUEST,
  FETCH_WATCHLIST_SUCCESS,
  FETCH_WATCHLIST_FAILURE,
} from "./watchlistTypes";

//action to send request
export const fetchWatchlistRequest = () => {
  return {
    type: FETCH_WATCHLIST_REQUEST,
  };
};

//action if request is successful
export const fetchWatchlistSuccess = (watchlist) => {
  return {
    type: FETCH_WATCHLIST_SUCCESS,
    payload: watchlist,
  };
};

//action if request is not successful
export const fetchWatchlistFailure = (error) => {
  return {
    type: FETCH_WATCHLIST_FAILURE,
    payload: error,
  };
};

export const fetchWatchlist = () => {
  return (dispatch) => {
    dispatch(fetchWatchlistRequest());
    axios
      .get("http://localhost:4000/api/movies")
      .then((res) => dispatch(fetchWatchlistSuccess(res.data)))
      .catch((error) => dispatch(fetchWatchlistFailure(error.message)));
  };
};
