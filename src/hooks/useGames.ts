import useData from './useData';
import { IGenre } from './useGenres';

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

const useGames = (selectedGenre: IGenre | null) => {
	return useData<IGame>('/games', { params: { generes: selectedGenre?.id } }, [
		selectedGenre?.id,
	]);
};

export default useGames;
