import { combineReducers } from "redux";
import moviesReducer from "./popularFurniture/popularMoviesReducer";

const rootReducer = () =>
  combineReducers({
    movies: moviesReducer,
  });

export default rootReducer;
