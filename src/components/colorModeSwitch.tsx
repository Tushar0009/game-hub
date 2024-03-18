import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'


const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
      <HStack>
          <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} colorScheme='green'></Switch>
          <Text whiteSpace={'nowrap'}>{colorMode == 'dark' ? 'Dark Mode' : 'Light Mode'}</Text>
    </HStack>
  )
}

export default ColorModeSwitch;