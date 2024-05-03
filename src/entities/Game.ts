import Developers from "./Developers";
import  Genre  from "./Genre";
import  Platform  from "./Platform";
import Publisher from "./Publisher";
import Tags from "./Tags";

export default interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  publishers: Publisher[];
  developers: Developers[];
  tags: Tags[];
  website: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
