import { toast } from "react-toastify";
import apiClient from "../../../../http-client";
import actions from "./popularMoviesAction";

export const loadPoularMoviesAsync = (dispatch: any, page: number) => {
  dispatch(actions.popularMoviesStart());

  apiClient()
    .get(
      `movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR&page=${page}`
    )
    .then((response: any) => {
      dispatch(actions.popularMoviesSucess(response.data));
    })
    .catch((error: string) => dispatch(actions.popularMoviesError(error)));
};

export const getSearchMovie = async (
  dispatch: any,
  contentId: string | null
) => {
  if (contentId) {
    dispatch(actions.popularMoviesStart());

    apiClient()
      .get(
        `search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR&query=${contentId}`
      )
      .then((response: any) => {
        dispatch(actions.popularMoviesSucess(response.data));
      })
      .catch((error: string) => dispatch(actions.popularMoviesError(error)));
  } else {
    loadPoularMoviesAsync(dispatch, 1);
  }
};
