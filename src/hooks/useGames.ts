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
}
interface IGameResponse {
	count: number;
	results: IGame[];
}
const useGames = () => {
	const [error, seterror] = useState('');
	const [games, setGames] = useState<IGame[]>([]);
	let gameList: IGame[] = [];
	useEffect(() => {
		const controller = new AbortController();
		apiClient
			.get<IGameResponse>('/games', { signal: controller.signal })
			.then((res) => {
				setGames(res.data.results);
			})
			.catch((er) => {
				if (er instanceof CanceledError) {
					return;
				}
				seterror(er.message);
			});
		return () => controller.abort();
	}, []);
	return { games, error };
};

export default useGames;
