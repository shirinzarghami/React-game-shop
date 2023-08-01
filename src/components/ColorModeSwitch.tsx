import { HStack, Switch, useColorMode } from '@chakra-ui/react'

export default function ColorModeSwitch() {
    const {toggleColorMode, colorMode} = useColorMode();
  return (
  <HStack>
      <Switch isChecked={colorMode==="dark"} onChange={toggleColorMode} colorScheme="green"/>

  </HStack>
  )
}
