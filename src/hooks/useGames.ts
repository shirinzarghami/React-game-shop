import useData from './useData';

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

const useGames = () => {
	return useData<IGame>('/games');
};

export default useGames;
