import { SimpleGrid, Text, Link, Tag } from "@chakra-ui/react";
import DefinitionItem from "./DefinitionItem";
import Game from "../entities/Game";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}
const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2}>
      <DefinitionItem heading="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>

      <DefinitionItem heading="Genres">
        {game.genres.map((e) => (
          <Text key={e.id}>{e.name}</Text>
        ))}
      </DefinitionItem>

      <DefinitionItem heading="Metascore">
        <CriticScore score={game.metacritic} />
      </DefinitionItem>

      <DefinitionItem heading="Publishers">
        {game?.publishers.map((e) => (
          <Text key={e.id}>{e.name}</Text>
        ))}
      </DefinitionItem>

      <DefinitionItem heading="Publishers">
        {game?.developers.map((e) => (
          <Text key={e.id}>{e.name}</Text>
        ))}
      </DefinitionItem>

      <DefinitionItem heading="Website">
        <Link href={game.website} isExternal>
          {game.website}
        </Link>
      </DefinitionItem>

      <DefinitionItem heading="Tags">
        {game.tags.map((e) => (
          <Tag key={e.id} m={1}>
            {e.name}
          </Tag>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
