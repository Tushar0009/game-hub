import { Image, HStack,  List, ListItem,Text, Spinner } from "@chakra-ui/react"
import { useGenre } from "../hooks/useGenres"
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10 , 11, 12];
    const { data, isLoading, error } = useGenre();
    if (error) return null;
  return (
      <List>
          {isLoading && arr.map(e => <GenreListSkeleton/>)}
          {data.map(item => 
              <ListItem value={item.id} paddingY='5px' >
                  <HStack>
                      <Image boxSize={'32px'} borderRadius={8} src={item.image_background}></Image>
                      <Text fontSize='large'>{item.name}</Text>
                  </HStack>
              </ListItem>
        )}
     </List>
  )
}

export default GenreList