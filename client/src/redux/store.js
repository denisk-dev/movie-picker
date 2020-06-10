/**
 * author: Denis Kravchenko
 */
import { createStore, applyMiddleware } from "redux";
import reducerMovie from "./movies/moviesReducers";
import reducerWatchlist from "./watchlist/watchlistReducers";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

//combining the reducers
const reducers = combineReducers({
  reducerMovie,
  reducerWatchlist,
});

//creating store
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
