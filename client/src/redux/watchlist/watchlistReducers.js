/**
 * author: Denis Kravchenko
 */
import {
  FETCH_WATCHLIST_REQUEST,
  FETCH_WATCHLIST_SUCCESS,
  FETCH_WATCHLIST_FAILURE,
} from "./watchlistTypes";

const initialState = {
  error: "",
  loading: false,
  watchlist: [],
};

//Reducer for watchlist
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WATCHLIST_REQUEST:
      return { ...state, loading: true };
    case FETCH_WATCHLIST_SUCCESS:
      return { error: "", loading: false, watchlist: action.payload };
    case FETCH_WATCHLIST_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
