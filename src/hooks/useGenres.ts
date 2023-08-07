import { CanceledError } from 'axios';
import { delay } from 'framer-motion';
import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

export interface IPlatform {
	id: number;
	slug: string;
	name: string;
}
export interface IGenre {
	id: number;
	name: string;
}

interface IGenreResponse {
	count: number;
	results: IGenre[];
}
const useGenres = () => {
	const [error, seterror] = useState('');
	const [genres, setGenres] = useState<IGenre[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	let gameList: IGenre[] = [];
	useEffect(() => {
		const controller = new AbortController();
		setIsLoading(true);
		apiClient
			.get<IGenreResponse>('/genres', { signal: controller.signal })
			.then((res) => {
				setGenres(res.data.results);
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
	return { genres, error, isLoading };
};

export default useGenres;
