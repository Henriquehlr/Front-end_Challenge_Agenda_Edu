import { Container } from "./styles";
import CardMediaMovies from "../components/CardMediaMovies";
import SearchAppBar from "../components/AppBar";

const Home = (): JSX.Element => {
  return (
    <>
      <SearchAppBar />
      <Container>
        <CardMediaMovies />
      </Container>
    </>
  );
};

export default Home;
