import Platforms from "../data/Platforms";
interface Platform{
    id: number,
    name: string,
    slug: string;
}
const UsePlatforms = () => ({data : Platforms, isLoading : false , error : false});
export default UsePlatforms;