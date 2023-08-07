import useData from './useData';

export interface IPlatform {
	id: number;
	slug: string;
	name: string;
}
export interface IGenre {
	id: number;
	name: string;
	image_background: string;
}

interface IGenreResponse {
	count: number;
	results: IGenre[];
}
const useGenres = () => {
	return useData<IGenre>('/genres');
};

export default useGenres;
