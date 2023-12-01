import genres from '../data/genres'
import { useQuery } from '@tanstack/react-query';
import genreService from '../services/genreService';
import ms from 'ms';

const useGenres = () => useQuery({
    queryKey: ["genres"],
    queryFn: genreService.getAll,
    staleTime: ms("1d"),
    initialData: genres
});

export default useGenres; 