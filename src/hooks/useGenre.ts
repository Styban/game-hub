import genres from '../data/genres'
import { useQuery } from '@tanstack/react-query';
import genreService from '../services/genreService';

const useGenre = () => useQuery({
    queryKey: ["genres"],
    queryFn: genreService.getAll,
    staleTime: 60 * 1000,
    initialData: { count: genres.length, results: genres, next: null }
});

export default useGenre; 