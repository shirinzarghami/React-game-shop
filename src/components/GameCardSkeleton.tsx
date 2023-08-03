import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';
import React from 'react';

const GameCardSkeleton = () => {
	return (
		<Card width='300px' borderEndRadius='1rem' overflow='hidden'>
			<Skeleton height='200px'></Skeleton>
			<CardBody>
				<SkeletonText />
			</CardBody>
		</Card>
	);
};

export default GameCardSkeleton;
