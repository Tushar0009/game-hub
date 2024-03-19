import { GameQuery } from "../App";
import { Platform } from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading as={"h1"} fontSize={"6xl"} marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
