import { CanceledError } from 'axios';
import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

interface IFetchData<T> {
	count: number;
	results: T[];
}
const useData = <T>(url: string) => {
	const [error, seterror] = useState('');
	const [data, setData] = useState<T[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		const controller = new AbortController();
		setIsLoading(true);
		apiClient
			.get<IFetchData<T>>(url, { signal: controller.signal })
			.then((res) => {
				setData(res.data.results);
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
	return { data, error, isLoading };
};

export default useData;
