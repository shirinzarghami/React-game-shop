import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import { IGame } from '../hooks/useGames';
interface Props {
	game: IGame;
}
const GameCard = ({ game }: Props) => {
	return (
		<Card borderEndRadius='1rem' overflow='hidden'>
			<Image src={game.background_image}></Image>
			<CardBody>
				<Heading fontSize='2xl'>{game.name}</Heading>
			</CardBody>
		</Card>
	);
};

export default GameCard;
