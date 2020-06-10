/**
 * author: Denis Kravchenko
 */
import { ADD_MOVIE, DELETE_MOVIE } from "./moviesTypes";

const initialState = {
  success: false,
  error: "",
};

//reducer for adding a new movie or deleting one
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return { ...state, success: action.payload };
    case DELETE_MOVIE:
      return { ...state, success: action.payload };
    default:
      return state;
  }
};

export default reducer;
