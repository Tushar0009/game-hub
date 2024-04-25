import UsePlatforms, { Platform } from "./UsePlatforms";

const usePlatofrm = (id?: number) => {
    const { data: platoforms } = UsePlatforms();
    return platoforms?.results.find((ele : Platform) => ele.id === id);
    
}
export default usePlatofrm;