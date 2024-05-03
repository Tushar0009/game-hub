import { useQuery } from "@tanstack/react-query";
import Screenshots from "../entities/Screenshots";
import apiClient from "../service/api-client";

const UseGameScreenshots = (gameId: number) => {
  const useApiClient = new apiClient<Screenshots>(
    `/games/${gameId}/screenshots`
  );

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: useApiClient.getAll,
  });
};
export default UseGameScreenshots;
