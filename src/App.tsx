import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import GameGrid from './components/GameGrid'
import GenraList from './components/GenraList';
import NavBar from './components/NavBar';

function App() {
	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}>
			<Show above='md'>
				<GridItem area='aside'>
					<GenraList></GenraList>
				</GridItem>
			</Show>
			<GridItem area='main'>
				<GameGrid />
			</GridItem>
			<GridItem area='nav'>
				<NavBar />
			</GridItem>
		</Grid>
	);
}

export default App
