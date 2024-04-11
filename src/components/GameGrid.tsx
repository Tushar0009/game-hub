import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import useGame from "../hooks/useGames";

interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({gameQuery} : Props) => {
  const { data, error, isLoading } = useGame(gameQuery);
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error.message}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4}}
        padding={"10px"}
        spacing={5}
      >
        {isLoading &&
          arr.map((ele) => (
            <GameCardContainer key={ele}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.results.map((gameData) => (
          <GameCardContainer key={gameData.id}>
            <GameCard game={gameData}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
