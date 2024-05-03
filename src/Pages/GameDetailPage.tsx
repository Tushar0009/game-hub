import { useParams } from "react-router-dom";
import UseGame from "../hooks/UseGame";
import { Heading, Spinner} from "@chakra-ui/react";
import ExpandableTest from "../components/ExpandableTest";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = UseGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>

      <ExpandableTest>{game.description_raw}</ExpandableTest>

      <GameAttributes game={game}></GameAttributes>

      <GameTrailer gameId={game.id}/>
    </>
  );
};

export default GameDetailPage;
