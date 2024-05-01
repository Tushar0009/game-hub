import apiClient from "../service/api-client";
import { Game } from "../entities/Game";
import { useQuery } from "@tanstack/react-query";

const useApiClient = new apiClient<Game>("/games");
const UseGame = (slug: string) =>
  useQuery({
    queryKey: ["game", slug],
    queryFn: () => useApiClient.get(slug),
  });

export default UseGame;
