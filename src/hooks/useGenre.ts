import genres from '../data/genres'
import { useQuery } from '@tanstack/react-query';
import APICLIENT from '../services/api-client';
import genreService, { Genre } from '../services/genreService';

const useGenre = () => useQuery({
    queryKey: ["genres"],
    queryFn: genreService.getAll,
    staleTime: 60 * 1000,
    initialData: {count: genres.length, results: genres}
});

export default useGenre; 