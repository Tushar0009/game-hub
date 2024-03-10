import { useEffect, useState } from "react";
import apiClient from "../service/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}
const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setErrors] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setErrors(err.message));
  }, []);
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((e) => (
          <li key={e.id}>{e.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
