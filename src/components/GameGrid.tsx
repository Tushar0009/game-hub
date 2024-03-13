import { SimpleGrid, Text } from "@chakra-ui/react";
import { useGame } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGame();
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding={'10px'} spacing={10}>
        {isLoading && arr.map(ele => <GameCardSkeleton />)}
        {games.map((e) => (
          <GameCard game={e}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
