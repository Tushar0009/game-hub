import { useQuery } from "@tanstack/react-query";
import Platforms from "../data/Platforms";
import apiClient from "../service/api-client";
export interface Platform{
    id: number,
    name: string,
    slug: string;
}
const useApiClient = new apiClient<Platform>("/platforms/lists/parents");
const UsePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: useApiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24hr
    // initialData: {count : Platforms.length , results:Platforms}
});
export default UsePlatforms;