import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface PROPS {
  game: Game;
}
const GameCard = ({ game }: PROPS) => {
  return (
    <Card borderRadius={10} overflow="hidden" >
      <Image src={game.background_image} />
      <CardBody padding={4}>
        <PlatformIconList
          platforms={game.parent_platforms.map((e) => e.platform)}
        ></PlatformIconList>
        <Heading fontSize="2xl" marginY={1}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
