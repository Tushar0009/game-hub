import { useParams } from "react-router-dom";
import UseGame from "../hooks/UseGame";
import {  GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import ExpandableTest from "../components/ExpandableTest";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = UseGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        <GridItem>
          <Heading>{game.name}</Heading>

          <ExpandableTest>{game.description_raw}</ExpandableTest>

          <GameAttributes game={game}></GameAttributes>
        </GridItem>

        <GridItem>
          <GameTrailer gameId={game.id} />

          <GameScreenshots gameId={game.id} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default GameDetailPage;
