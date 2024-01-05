import { useQuery } from "@tanstack/react-query";
import PHPAPICLIENT from "../api/apiClient";
import GameAdmin from "../entities/GameAdmin";

const apiClient = new PHPAPICLIENT<GameAdmin>("/make_transact.php");

const useDownload = (userId: number, gameId: number) =>
  useQuery({
    queryKey: ["purchase"],
    queryFn: () =>
      apiClient.post({
        params: {
          userId: userId,
          gameId: gameId,
        },
      }),
  });

export default useDownload;
