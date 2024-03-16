import { Image, HStack,  List, ListItem, Button } from "@chakra-ui/react"
import { Genre, useGenre } from "../hooks/useGenres"
import GenreListSkeleton from "./GenreListSkeleton";

interface Props{
    setSlectedGenre: (genre: Genre | null) => void,
    slectedGenre: Genre | null;
}
const GenreList = ( {slectedGenre , setSlectedGenre} : Props) => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10 , 11, 12];
    const { data, isLoading, error } = useGenre();
    if (error) return null;
  return (
      <List>
          {isLoading && arr.map(e => <GenreListSkeleton key={e}/>)}
          {data.map(item => 
              <ListItem key={item.id} paddingY='5px' >
                  <HStack>
                      <Image boxSize={'32px'} borderRadius={8} src={item.image_background}></Image>
                      <Button fontWeight={item.id === slectedGenre?.id ? 'bold' : 'normal'} onClick={()=> setSlectedGenre(item)} fontSize='large' variant={'link'} >{item.name}</Button>
                  </HStack>
              </ListItem>
        )}
     </List>
  )
}

export default GenreList