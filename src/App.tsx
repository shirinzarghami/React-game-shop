import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import { useState } from 'react';
import GameGrid from './components/GameGrid';
import GenraList from './components/GenraList';
import NavBar from './components/NavBar';
import { IGenre } from './hooks/useGenres';

function App() {
	const [selectedGenre, setSelectedGenre] = useState<IGenre | null>(null);
	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}
			templateColumns={{
				base: '1fr', // it means to get all of the space
				lg: '200px 1fr',
			}}>
			<Show above='lg'>
				<GridItem area='aside' paddingX='5px'>
					<GenraList
						selectedGenre={selectedGenre}
						onSelectGenre={(genre) => setSelectedGenre(genre)}></GenraList>
				</GridItem>
			</Show>
			<GridItem area='main'>
				<GameGrid selectedGenre={selectedGenre} />
			</GridItem>
			<GridItem area='nav'>
				<NavBar />
			</GridItem>
		</Grid>
	);
}

export default App
