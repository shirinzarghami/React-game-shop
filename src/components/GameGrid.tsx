import { HStack, SimpleGrid, Text } from '@chakra-ui/react';
import useData from '../hooks/useData';
import useGames, { IGame } from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

const GameGrid = () => {
	const { data, error, isLoading } = useGames();
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	return (
		<>
			{isLoading && (
				<SimpleGrid
					spacing={3}
					columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
					padding='1rem'>
					{skeletons.map((skeleton) => (
						<GameCardSkeleton key={skeleton} />
					))}
				</SimpleGrid>
			)}

			{error && <Text>{error}</Text>}
			<SimpleGrid
				spacing={3}
				columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
				padding='1rem'>
				{data.map((data) => (
					<GameCard key={data.id} game={data}></GameCard>
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
