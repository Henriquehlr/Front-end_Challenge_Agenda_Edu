import actionTypes from "./popularMoviesActionTypes";

const popularMoviesStart = () => ({
  type: actionTypes.POPULAR_MOVIES_START,
});

const popularMoviesSucess = (movies: any) => ({
  type: actionTypes.POPULAR_MOVIES_SUCESS,
  payload: movies,
});

const popularMoviesError = (errorMessage: any) => ({
  type: actionTypes.POPULAR_MOVIES_ERROR,
  payload: errorMessage,
});

export default {
  popularMoviesStart,
  popularMoviesSucess,
  popularMoviesError,
};
