import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import React from 'react';
import { IGame } from '../hooks/useGames';
import CriticScore from './CriticScore';
import PlatformIconList from './PlatformIconList';
interface Props {
	game: IGame;
}
const GameCard = ({ game }: Props) => {
	return (
		<Card borderEndRadius='1rem' overflow='hidden'>
			<Image src={game.background_image}></Image>
			<CardBody>
				<Heading fontSize='2xl'>{game.name}</Heading>
				<HStack
					justifyContent='space-between'
					fontSize='xl'
					borderRadius='1rem'>
					<PlatformIconList
						platforms={game.parent_platforms.map((obj) => obj.platform)}
					/>
					<CriticScore score={game.metacritic} />
				</HStack>
			</CardBody>
		</Card>
	);
};

export default GameCard;
