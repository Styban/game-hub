import { useQuery } from "@tanstack/react-query";
import PHPAPICLIENT from "../api/apiClient";
import Platform from "../entities/Platform";

const apiClient = new PHPAPICLIENT<Platform>("/get_game_platform.php");

const useGamesPlatform = (gameId: number) => {
  return useQuery({
    queryKey: ["games", gameId],
    queryFn: () =>
      apiClient.getAll({
        params: {
          gameId: gameId,
        },
      }),
    staleTime: 24 * 60 * 60 * 1000,
  });
};

// useData<Game>('/games', {params: {genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id, ordering: gameQuery.sortOrder, search: gameQuery.search}}, [gameQuery])

export default useGamesPlatform;
