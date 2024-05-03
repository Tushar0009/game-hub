import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import Game from "../entities/Game";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCropedImageUrl from "../service/image-url";
import { Link } from "react-router-dom";

interface PROPS {
  game: Game;
}
const GameCard = ({ game }: PROPS) => {
  return (
    <Card>
      <Image src={getCropedImageUrl(game.background_image)} />
      <CardBody padding={4}>
        <HStack justify={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((e) => e.platform)}
          ></PlatformIconList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize="2xl" marginY={2}>
          <Link to={"/games/" + game.slug}>{game.name}</Link>
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
