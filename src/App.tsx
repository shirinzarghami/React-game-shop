import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import GameGrid from './components/GameGrid'
import NavBar from './components/NavBar'

function App() {
  return (
   <Grid templateAreas={{
    base:`"nav" "main"` ,
    lg:`"nav nav" "aside main"`}}>
      <Show above="md">
        <GridItem area='aside' >aside</GridItem>
      </Show>
     <GridItem area='main' ><GameGrid/></GridItem>
     <GridItem area='nav' >
       <NavBar />
     </GridItem>
   </Grid>
  )
}

export default App
