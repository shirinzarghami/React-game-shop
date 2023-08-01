import axios from 'axios';
import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { Text } from '@chakra-ui/react'

interface IGame {
    id:number;
    name: string;
}
interface IGameResponse {
    count:number;
    results:IGame[];

}

const GameGrid = () => {
    const [error, seterror]= useState('');
    const [games, setGames] = useState<IGame[]>([]);
    let gameList:IGame[] =[]
    useEffect(()=>{
        apiClient.get<IGameResponse>('/games').then(
    
             res =>{ setGames(res.data.results)}
        ).catch(er =>{seterror(er.message)})
    })
  return (
      <>
      {error && <Text>{error}</Text> }
    <ul>
        {games.map(game=><li key={game.id}> {game.name}</li>)}
    </ul>
      
      </>
    
  )
}

export default GameGrid
