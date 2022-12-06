import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import axios from 'axios';

import { GameDTO } from '../DTOs/GameDTO';

interface GamesContextData {
  games: GameDTO[] | null;
  increaseGameAdsCount: (gameId: GameDTO["id"]) => void;
}

const GamesContext = createContext({} as GamesContextData);

export const useGamesContext = () => useContext(GamesContext);

interface GamesContextProviderProps {
  children: React.ReactNode;
}

export const GamesContextProvider: React.FC<GamesContextProviderProps> = ({
  children,
}) => {
  const [games, setGames] = useState<GameDTO[] | null>(null);

  useEffect(() => {
    axios
      .get<GameDTO[]>("/games")
      .then(response => setGames(response.data))
      .catch(console.log);
  }, []);

  const increaseGameAdsCount: GamesContextData["increaseGameAdsCount"] =
    useCallback(gameId => {
      setGames(currentGames => {
        const updatedGames = currentGames!.map(game => {
          if (game.id === gameId) {
            game._count.ads += 1;
          }

          return game;
        });

        return updatedGames;
      });
    }, []);

  return (
    <GamesContext.Provider value={{ games, increaseGameAdsCount }}>
      {children}
    </GamesContext.Provider>
  );
};
