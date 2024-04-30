import { useQuery } from "@tanstack/react-query";
import apiClient from "../service/api-client";
import { Platform_Data } from "../data/Platform_Data";

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
    initialData: Platform_Data,
});
export default UsePlatforms;