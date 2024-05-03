import { useQuery } from "@tanstack/react-query"
import apiClient from "../service/api-client"
import Trailer from "../entities/Trailer"

const UseTrailer = (gameId: number) => {
    const useApiClient = new apiClient<Trailer>(`/games/${gameId}/movies`);
    return useQuery({
        queryKey: ['trailers', gameId],
        queryFn: useApiClient.getAll,
    });
}
export default UseTrailer;