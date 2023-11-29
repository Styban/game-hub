import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import { FetchResponse } from "../services/api-client";
import platformsService, { Platform } from "../services/platformsService";

const usePlatfroms = () => useQuery<FetchResponse<Platform>>({
    queryKey: ["platforms"],
    queryFn: platformsService.getAll,
    staleTime: 60 * 1000,
    initialData: {count: platforms.length, results: platforms}
});

export default usePlatfroms;