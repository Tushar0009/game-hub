import { Heading } from "@chakra-ui/react";
import usePlatofrm from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../service/store";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatofrm(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as={"h1"} fontSize={"6xl"} marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
