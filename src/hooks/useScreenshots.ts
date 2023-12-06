import { useQuery } from "@tanstack/react-query";
import { Screenshots } from "../entities/Screenshot";
import APICLIENT from "../services/api-client";

const useScreenshots = (gameId: number) => {
  const apiClient = new APICLIENT<Screenshots>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshots;
