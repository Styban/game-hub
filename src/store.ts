import {create} from "zustand"

interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder?: string;
    search?: string;
  }

interface GameQueryStore{
  gameQuery: GameQuery;
  setSelectedGenre: (selectedGenreId: number) => void;
  setSelectedPlatform: (selectedPlatformId?: number) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchInput: (searchText: string) => void;
}

const useGameQueryStore = create<GameQueryStore>(set => ({
    gameQuery: {},
    setSelectedGenre: (GenreId) => set(store => ({gameQuery: {...store.gameQuery, genreId: GenreId}})),
    setSelectedPlatform: (PlatformId) => set(store => ({gameQuery: {...store.gameQuery, platformId: PlatformId}})),
    setSortOrder: (sortOrder) => set(store => ({gameQuery: {...store.gameQuery, sortOrder: sortOrder}})),
    setSearchInput: (searchInput) => set(() => ({gameQuery: {search: searchInput}}))
}))

export default useGameQueryStore;