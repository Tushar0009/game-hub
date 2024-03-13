import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface PROPS {
  game: Game;
}
const GameCard = ({ game }: PROPS) => {
  return (
    <Card borderRadius={10} overflow="hidden" >
      <Image src={game.background_image} />
      <CardBody padding={4}>
        <HStack justify={"space-between"}>
        <PlatformIconList
          platforms={game.parent_platforms.map((e) => e.platform)}
          ></PlatformIconList>
          <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
        <Heading fontSize="2xl" marginY={1}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
