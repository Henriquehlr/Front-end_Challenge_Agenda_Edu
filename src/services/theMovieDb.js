import apiClient from "../http-client";

class MoviesService {
  getAllMovies = () =>
    apiClient().get(
      `movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-pIT`
    );
}

export default MoviesService;
