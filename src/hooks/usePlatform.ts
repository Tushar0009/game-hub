import UsePlatforms from "./UsePlatforms";

const usePlatofrm = (id?: number) => {
    const { data: platoforms } = UsePlatforms();
    const platform = platoforms?.results.find(ele => ele.id === id);
    return platform;
}
export default usePlatofrm;