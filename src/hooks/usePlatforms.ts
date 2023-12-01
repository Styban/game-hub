import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import platformsService from "../services/platformsService";

const usePlatfroms = () => useQuery({
    queryKey: ["platforms"],
    queryFn: platformsService.getAll,
    staleTime: 60 * 1000,
    initialData: platforms
});

export default usePlatfroms;