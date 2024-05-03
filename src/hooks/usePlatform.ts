import UsePlatforms from "./UsePlatforms";
import  Platform  from "../entities/Platform";

const usePlatofrm = (id?: number) => {
  const { data: platoforms } = UsePlatforms();
  return platoforms?.results.find((ele: Platform) => ele.id === id);
};
export default usePlatofrm;
