import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp'

export default function NavBar() {
  return (
    <HStack>
      <Image src={logo}  boxSize="4rem"></Image>
      <text>Navbar</text>
    </HStack>
  )
}
