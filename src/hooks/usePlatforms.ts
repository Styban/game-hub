import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import { FetchResponse } from "./useData";
import apiClient from "../services/api-client";

export interface Platform{
    id: number;
    name: string;
    slug: string;
}

// const usePlatfroms = () => useData<Platform>('/platforms/lists/parents');
// const usePlatfroms = () => ({data: platforms, error: false});
const usePlatfroms = () => useQuery<FetchResponse<Platform>>({
    queryKey: ["platforms"],
    queryFn: () => apiClient.get("/platforms/lists/parents").then(res => res.data),
    staleTime: 60 * 1000,
    initialData: {count: platforms.length, results: platforms}
});

export default usePlatfroms;