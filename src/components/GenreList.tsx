import {
  Image,
  HStack,
  List,
  ListItem,
  Button,
  Heading,
} from "@chakra-ui/react";
import { Genre, useGenres } from "../hooks/useGenres";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  setSlectedGenre: (genre: Genre) => void;
  slectedGenreId: number | undefined;
}
const GenreList = ({ slectedGenreId, setSlectedGenre }: Props) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>Genres</Heading>
      <List>
        {isLoading && arr.map((e) => <GenreListSkeleton key={e} />)}
        {data?.results.map((item) => (
          <ListItem key={item.id} paddingY="5px">
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                src={item.image_background}
                objectFit={"cover"}
              ></Image>
              <Button
                fontWeight={item.id === slectedGenreId ? "bold" : "normal"}
                onClick={() => setSlectedGenre(item)}
                fontSize="large"
                variant={"link"}
              >
                {item.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
