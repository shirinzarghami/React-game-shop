import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import { IGame } from '../hooks/useGames';
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
				<PlatformIconList
					platforms={game.parent_platforms.map((obj) => obj.platform)}
				/>
			</CardBody>
		</Card>
	);
};

export default GameCard;
