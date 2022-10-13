import actionTypes from "./popularMoviesActionTypes";
import initialStates from "./popularMoviesState";

const popularMoviesReducer = (
  state = initialStates,
  { type, payload }: any
) => {
  switch (type) {
    case actionTypes.POPULAR_MOVIES_START:
      return {
        ...state,
        isloading: true,
        movies: null,
        errorMessage: null,
      };
    case actionTypes.POPULAR_MOVIES_SUCESS:
      return {
        ...state,
        isloading: false,
        movies: payload,
      };
    case actionTypes.POPULAR_MOVIES_ERROR:
      return {
        ...state,
        isloading: false,
        errorMessage: payload,
      };
    default:
      return state;
  }
};

export default popularMoviesReducer;
