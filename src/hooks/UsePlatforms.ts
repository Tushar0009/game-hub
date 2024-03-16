import useData from "./useData";

interface Platform{
    id: number,
    name: string,
    slug: string;
}
const UsePlatforms = () => useData<Platform>("/platforms/lists/parents")
export default UsePlatforms;