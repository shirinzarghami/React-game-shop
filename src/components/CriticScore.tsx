import { Badge } from '@chakra-ui/react';
import React from 'react';

interface Probs {
	score: number;
}

const CriticScore = ({ score }: Probs) => {
	const color = score > 90 ? 'green' : score < 84 ? 'red' : '';
	return <Badge colorScheme={color}>{score}</Badge>;
};

export default CriticScore;
