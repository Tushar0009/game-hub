import UseGameScreenshots from "../hooks/UseScreenshorts";
import { Image, SimpleGrid } from "@chakra-ui/react";

interface Props {
  gameId: number;
}
const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = UseGameScreenshots(gameId);
  if (isLoading) return null;
  if (error) return null;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((e) => (
        <Image key={e.id} src={e.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
