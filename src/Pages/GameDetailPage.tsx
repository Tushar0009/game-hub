import { useParams } from "react-router-dom";
import UseGame from "../hooks/UseGame";
import { Button, Heading, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";
import ExpandableTest from "../components/ExpandableTest";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = UseGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableTest>{game.description_raw}</ExpandableTest>
    </>
  );
};

export default GameDetailPage;
