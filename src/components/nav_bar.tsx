import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo_final.png'
import ColorModeSwitch from './colorModeSwitch'

const NavBar = () => {
  return (
      <HStack justifyContent={'space-between'} padding={'10px'}>
          <Image boxSize='60px' src={logo}></Image>
          <ColorModeSwitch></ColorModeSwitch>
      </HStack>
  )
}

export default NavBar;