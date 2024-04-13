import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";
import { useGenre } from "../hooks/useGenres";
import UsePlatforms from "../hooks/UsePlatforms";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const { data: platoforms } = UsePlatforms();
  const platform= platoforms?.results.find(ele => ele.id === gameQuery.platformId)
  const { data: genres } = useGenre();
  const genre = genres?.results.find(ele => ele.id === gameQuery.genreId)
  const heading = `${platform?.name|| ""} ${
     genre?.name || ""
  } Games`;
  return (
    <Heading as={"h1"} fontSize={"6xl"} marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
