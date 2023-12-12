import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import Platform from "../entities/Platform";
import PHPAPICLIENT from "../api/apiClient";

const apiClient = new PHPAPICLIENT<Platform>("/get_platforms.php");

const usePlatfroms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platforms,
  });

export default usePlatfroms;
