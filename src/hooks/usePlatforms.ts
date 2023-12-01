import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import platformsService from "../services/platformsService";
import ms from "ms";

const usePlatfroms = () => useQuery({
    queryKey: ["platforms"],
    queryFn: platformsService.getAll,
    staleTime: ms("1d"),
    initialData: platforms
});

export default usePlatfroms;