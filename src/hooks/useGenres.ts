import genres from '../data/genres'
import { useQuery } from '@tanstack/react-query';
import genreService from '../services/genreService';

const useGenres = () => useQuery({
    queryKey: ["genres"],
    queryFn: genreService.getAll,
    staleTime: 60 * 1000,
    initialData: genres
});

export default useGenres; 