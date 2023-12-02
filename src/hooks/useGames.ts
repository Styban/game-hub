import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { FetchResponse } from "../services/api-client";
import gamesService, { Game } from "../services/gamesService";

const useGames = (gameQuery: GameQuery) => 
useInfiniteQuery<FetchResponse<Game>, Error>({
  queryKey: ["games", gameQuery],
  queryFn: ({ pageParam = 1 }) => gamesService.getAll(
    {
      params: 
      {
        genres: gameQuery.genreId,
        parent_platforms: gameQuery.platformId,
        ordering: gameQuery.sortOrder,
        search: gameQuery.search,
        page: pageParam
      }
    }
  ),
  getNextPageParam: (lastPage, allPages) => {
    return lastPage.next? allPages.length + 1: undefined;
  }
  ,staleTime: 24 * 60 * 60 * 1000
})

// useData<Game>('/games', {params: {genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id, ordering: gameQuery.sortOrder, search: gameQuery.search}}, [gameQuery])

export default useGames;