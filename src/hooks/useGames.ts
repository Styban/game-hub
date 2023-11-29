import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { FetchResponse } from "../services/api-client";
import gamesService, { Game } from "../services/gamesService";

const useGames = (gameQuery: GameQuery) => 
useQuery<FetchResponse<Game>, Error>({
  queryKey: ["games", gameQuery],
  queryFn: () => gamesService.getAll(
    {
      params: 
      {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.search
      }
    }
  ),
 
  staleTime: 60 * 1000
})

// useData<Game>('/games', {params: {genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id, ordering: gameQuery.sortOrder, search: gameQuery.search}}, [gameQuery])

export default useGames;