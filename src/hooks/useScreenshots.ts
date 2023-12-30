import { useQuery } from "@tanstack/react-query";
import Screenshots from "../entities/Screenshot";
import PHPAPICLIENT from "../api/apiClient";

const useScreenshots = (gameId: number) => {
  const apiClient = new PHPAPICLIENT<Screenshots>("/get_screenshots.php");

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: () =>
      apiClient.getAll({
        params: {
          gameId: gameId,
        },
      }),
  });
};

export default useScreenshots;
