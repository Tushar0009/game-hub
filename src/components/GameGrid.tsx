import { SimpleGrid, Text } from "@chakra-ui/react";
import { useGame } from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGame();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding={'10px'} spacing={10}>
        {games.map((e) => (
          <GameCard game={e}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
