import { useQuery } from "@tanstack/react-query";
import PHPAPICLIENT from "../api/apiClient";
import GameAdmin from "../entities/GameAdmin";

const apiClient = new PHPAPICLIENT<GameAdmin>("/get_game.php");

const useGameAdmin = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () =>
      apiClient.get(slug, {
        params: {
          slug: slug,
        },
      }),
  });

export default useGameAdmin;
