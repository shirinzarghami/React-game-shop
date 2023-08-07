import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
interface Probs {
	children: ReactNode;
}

const GameCardContainer = ({ children }: Probs) => {
	return (
		<Box borderEndRadius='1rem' overflow='hidden' h='100%' w='100%'>
			{children}
		</Box>
	);
};

export default GameCardContainer;
