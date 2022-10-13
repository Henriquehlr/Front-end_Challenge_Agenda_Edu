import { Stack } from "@mui/material";
import Rating from "@mui/material/Rating";

interface RatingMoviesProps {
  voteAverag?: any;
}

export default function RatingMovies({ voteAverag }: RatingMoviesProps) {
  const value = voteAverag / 2;
  return (
    <>
      <Stack spacing={1}>
        <Rating
          name="half-rating"
          defaultValue={value}
          precision={0.5}
          readOnly
        />
      </Stack>
    </>
  );
}
