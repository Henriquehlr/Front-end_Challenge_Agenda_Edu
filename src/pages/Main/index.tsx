import React, { useEffect } from "react";
import { Container } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { loadPoularMoviesAsync } from "../redux/redurces/popularFurniture/popularMoviesThunks";

const Home = (): JSX.Element => {
  const dispatch = useDispatch();
  const { isLoading, movies, errorMessage } = useSelector(
    (state: any) => state.movies
  );

  useEffect(() => {
    loadPoularMoviesAsync(dispatch);
  }, [loadPoularMoviesAsync]);

  return (
    <>
      <Container>
        <h1>sdadasds </h1>
      </Container>
    </>
  );
};

export default Home;
