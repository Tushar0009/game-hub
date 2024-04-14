import {  useQuery  } from "@tanstack/react-query";
import apiClient from "../service/api-client";

export interface Genre{
    id: number,
    name: string,
    image_background:string
}
const useApiClient = new apiClient<Genre>("/genres");
export const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn:useApiClient.getAll,
    staleTime : 24 * 60 * 60 * 1000 , //24hr
})