import {
	Button,
	HStack,
	Image,
	List,
	ListItem,
	Spinner,
	Text,
} from '@chakra-ui/react';
import React from 'react';
import useData from '../hooks/useData';
import useGenres, { IGenre } from '../hooks/useGenres';

interface Probs {
	onSelectGenre: (Genre: IGenre) => void;
	selectedGenre: IGenre | null;
}

const GenraList = ({ onSelectGenre, selectedGenre }: Probs) => {
	const { data, isLoading, error } = useGenres();
	if (isLoading) return <Spinner />;
	if (error) return null;
	return (
		<List>
			{data.map((genre) => (
				<ListItem key={genre.id} paddingY='5px'>
					<HStack>
						<Image
							key={genre.image_background}
							srcSet={genre.image_background}
							boxSize='32px'
							borderRadius='10px'></Image>
						<Button
							fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal'}
							variant='link'
							fontSize='lg'
							onClick={() => onSelectGenre(genre)}>
							{' '}
							{genre.name}
						</Button>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenraList;
