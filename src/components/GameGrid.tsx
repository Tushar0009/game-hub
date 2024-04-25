import { HStack, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import useGame from "../hooks/useGames";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";


const GameGrid = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  const { data, error, isLoading, fetchNextPage, hasNextPage, isFetching } = useGame();
  const fetchNext = () => fetchNextPage();
  return (
    <>
      {error && <Text>{error.message}</Text>}
      <InfiniteScroll
        dataLength={data?.pages.length == undefined ? 0 : data?.pages.length}
        hasMore={!hasNextPage}
        next={fetchNext}
        loader={
          <HStack justifyContent={"center"} m={5}>
              <Spinner thickness="4px" size={"lg"}/>
          </HStack>
        }
      >
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
        {data?.pages.map((page, index) => 
          <React.Fragment key={index}>
            {page?.results.map(game =>
              <GameCardContainer key={game.id}>
              <GameCard game={game}></GameCard>
          </GameCardContainer>
             )}
          </React.Fragment>
        )}
      </SimpleGrid>
      </InfiniteScroll>
      </>
  );
};

export default GameGrid;
