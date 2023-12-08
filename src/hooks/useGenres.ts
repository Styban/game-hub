import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import Genre from "../entities/Genre";
import PHPAPICLIENT from "../api/apiClient";

const apiClient = new PHPAPICLIENT<Genre>("/get_genre.php");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
  });

export default useGenres;
