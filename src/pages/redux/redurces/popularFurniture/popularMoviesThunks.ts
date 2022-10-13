import apiClient from "../../../../http-client";
import actions from "./popularMoviesAction";

export const loadPoularMoviesAsync = (dispatch: any) => {
  dispatch(actions.popularMoviesStart());
  apiClient()
    .get(
      `movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-pIT`
    )
    .then((response: any) => dispatch(actions.popularMoviesSucess(response)))
    .catch((error: string) => dispatch(actions.popularMoviesError(error)));
};
