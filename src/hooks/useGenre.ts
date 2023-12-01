import genres from '../data/genres'
import { useQuery } from '@tanstack/react-query';
import genreService, { Genre } from '../services/genreService';
import APICLIENT from '../services/api-client';

const useGenre = () => useQuery({
    queryKey: ["genres"],
    queryFn: genreService.getAll,
    staleTime: 60 * 1000,
    initialData: { count: genres.length, results: genres, next: null }
});

export default useGenre; 