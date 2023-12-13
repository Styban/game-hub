import { useQuery } from "@tanstack/react-query";
import useGameQueryStore from "../store";
import GameAdmin from "../entities/GameAdmin";
import PHPAPICLIENT from "../api/apiClient";

const apiClient = new PHPAPICLIENT<GameAdmin>("/get_games.php");

const useGamesAdmin = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
        },
      }),
    staleTime: 60 * 1000,
  });
};

// useData<Game>('/games', {params: {genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id, ordering: gameQuery.sortOrder, search: gameQuery.search}}, [gameQuery])

export default useGamesAdmin;
