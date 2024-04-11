import { useQuery } from "@tanstack/react-query";
import Platforms from "../data/Platforms";
import apiClient , {FetchResponse} from "../service/api-client";
interface Platform{
    id: number,
    name: string,
    slug: string;
}
const UsePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () => apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents').then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24hr
    initialData: {count : Platforms.length , results:Platforms}
});
export default UsePlatforms;