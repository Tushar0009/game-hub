import {  useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient , {FetchResponse} from "../service/api-client";

export interface Platform{
    id: number,
    slug :string,
    name: string,
}
export interface Game {
    id: number;
    name: string;
    background_image: string
    parent_platforms: { platform: Platform }[];
    metacritic: number; 
  }
const useGame = (gameQuery: GameQuery) => useQuery<FetchResponse<Game> , Error>({
  queryKey: ['games', gameQuery],
  queryFn: () => apiClient.get<FetchResponse<Game>>('/games', {
    params:
    {
      genres: gameQuery.genre?.id,
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText
    }
  }).then(res => res.data),
});
export default useGame;