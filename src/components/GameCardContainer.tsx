import { Box  } from '@chakra-ui/react'
import { ReactNode } from 'react'
// import { CPseudoBox } from '@chakra-ui/vue'

interface Props{
    children: ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
  return (
    <Box  _hover={{
      transform: "scale(1.03)",
      transition: "transform .15s"
    }} borderRadius={10} overflow="hidden" >{ children}</Box>
  )
}

export default GameCardContainer