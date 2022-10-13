import * as React from "react";

import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import { CardHeader, IconButton, Typography } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import {
  getSearchMovie,
  loadPoularMoviesAsync,
} from "../../redux/redurces/popularFurniture/popularMoviesThunks";
import { BoxItem, CardItem, Container, ContainerItem } from "./styles";
import RatingMovies from "../RatingMovies";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import toast from "../Modal/toast";

export default function CardMediaMovies() {
  const dispatch = useDispatch();
  const [contPage, setContPage] = React.useState<number>(1);

  const { isLoading, movies, errorMessage } = useSelector(
    (state: any) => state.movies
  );

  React.useEffect(() => {
    loadPoularMoviesAsync(dispatch, contPage);
  }, [loadPoularMoviesAsync, contPage]);

  const styles = {
    media: {
      height: 0,
      paddingTop: "46.25%", // 16:9,
    },
  };
  return (
    <Container>
      <h1>Filmes Populares</h1>
      <BoxItem>
        {movies?.page > 1 && (
          <IconButton
            onClick={() => {
              setContPage(movies?.page - 1);
            }}
            color="primary"
            aria-label="delete"
          >
            <ArrowBackIosNewIcon />
          </IconButton>
        )}
        {movies?.results.map((el: any) => (
          <ContainerItem key={el.id}>
            <CardItem key={el.id}>
              <CardHeader
                title={el.title}
                titleTypographyProps={{ fontSize: "21px" }}
              />
              <CardActions>
                <RatingMovies voteAverag={el.vote_average} />
              </CardActions>
              <CardMedia
                style={styles.media}
                image={`https://image.tmdb.org/t/p/w500/${el.backdrop_path}`}
                title="Background image"
              />
              <div
                style={{
                  justifyContent: "space-between",
                  flexDirection: "column",
                  display: "flex",
                }}
              >
                <CardContent>
                  <Typography style={{ whiteSpace: "normal" }}>
                    {" "}
                    {el.overview}
                  </Typography>
                </CardContent>
              </div>
            </CardItem>
          </ContainerItem>
        ))}
        <IconButton
          onClick={() => {
            setContPage(movies?.page + 1);
          }}
          color="primary"
          aria-label="delete"
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </BoxItem>
    </Container>
  );
}
