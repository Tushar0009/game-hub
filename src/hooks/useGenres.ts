import { useQuery } from "@tanstack/react-query";
import apiClient from "../service/api-client";
import { Genre } from "../entities/Genre";

const useApiClient = new apiClient<Genre>("/genres");
export const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: useApiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24hr
  });
