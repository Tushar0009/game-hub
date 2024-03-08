import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.png'

const NavBar = () => {
  return (
      <HStack>
          <Image boxSize='60px' src={logo}></Image>
      </HStack>
  )
}

export default NavBar;