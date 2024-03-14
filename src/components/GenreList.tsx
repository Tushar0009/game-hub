import { Image, HStack,  List, ListItem,Text } from "@chakra-ui/react"
import { useGenre } from "../hooks/useGenres"

const GenreList = () => {
    const {data} = useGenre()
  return (
      <List>
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