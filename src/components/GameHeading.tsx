import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";
import usePlatofrm from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const platform = usePlatofrm(gameQuery.platformId);
  const genre = useGenre(gameQuery.genreId);
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
