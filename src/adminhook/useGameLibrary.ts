import { useQuery } from "@tanstack/react-query";
import useGameQueryStore from "../store";
import GameAdmin from "../entities/GameAdmin";
import PHPAPICLIENT from "../api/apiClient";

const apiClient = new PHPAPICLIENT<GameAdmin>("get_library_games.php");

const useGameLibrary = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useQuery({
    queryKey: ["library", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          userId: gameQuery.userId,
          genres: gameQuery.genreId,
          platforms: gameQuery.platformId,
          search: gameQuery.search,
        },
      }),
    staleTime: 3000,
  });
};

export default useGameLibrary;
