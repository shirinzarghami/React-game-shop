import { CanceledError } from 'axios';
import { delay } from 'framer-motion';
import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

export interface IPlatform {
	id: number;
	slug: string;
	name: string;
}
export interface IGame {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: [{ platform: IPlatform }];
	metacritic: number;
}
interface IGameResponse {
	count: number;
	results: IGame[];
}
const useGames = () => {
	const [error, seterror] = useState('');
	const [games, setGames] = useState<IGame[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	let gameList: IGame[] = [];
	useEffect(() => {
		const controller = new AbortController();
		setIsLoading(true);
		apiClient
			.get<IGameResponse>('/games', { signal: controller.signal })
			.then((res) => {
				setGames(res.data.results);
				setIsLoading(false);
			})
			.catch((er) => {
				if (er instanceof CanceledError) {
					return;
				}
				seterror(er.message);
				setIsLoading(false);
			});
		return () => controller.abort();
	}, []);
	return { games, error, isLoading };
};

export default useGames;
