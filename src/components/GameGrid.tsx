import { SimpleGrid, Text } from "@chakra-ui/react";
import { useGame } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";

interface Props{
  selectedGenre: Genre | null;
}
const GameGrid = ({selectedGenre} : Props) => {
  const { data, error, isLoading } = useGame(selectedGenre);
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
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
        {data.map((gameData) => (
          <GameCardContainer key={gameData.id}>
            <GameCard game={gameData}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
