import genres from '../data/genres'
import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';
import { FetchResponse } from './useData';

export interface Genre{
    id: number;
    name: string;
    image_background: string;
}

const getAll = () => ({data: genres, isLoading: false, error: null});

const useGenre = () => useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient
        .get<FetchResponse<Genre>>("/genres")
        .then(res => res.data),
    staleTime: 60 * 1000,
    initialData: {count: genres.length, results: genres}
});

export default useGenre; 