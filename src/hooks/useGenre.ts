import  Genre  from "../entities/Genre";
import { useGenres } from "./useGenres";


const useGenre = (id?: number) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((ele: Genre) => ele.id === id);
  return genre;
};
export default useGenre;
