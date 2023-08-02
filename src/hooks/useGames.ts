import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
interface IGame {
  id: number;
  name: string;
}
interface IGameResponse {
  count: number;
  results: IGame[];
}
const useGames = () => {
  const [error, seterror] = useState("");
  const [games, setGames] = useState<IGame[]>([]);
  let gameList: IGame[] = [];
  useEffect(() => {
    apiClient
      .get<IGameResponse>("/games")
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((er) => {
        seterror(er.message);
      });
  });
  return { games, error };
};

export default useGames;
