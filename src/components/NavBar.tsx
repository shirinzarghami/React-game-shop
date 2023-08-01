import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'

export default function NavBar() {
  return (
    <HStack  justifyContent='space-between' paddingRight='2rem'>
      <Image src={logo}  boxSize="4rem"></Image>
      <ColorModeSwitch/>
    </HStack>
  )
}
