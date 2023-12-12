import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  search?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSelectedGenre: (selectedGenreId: number) => void;
  setSelectedPlatform: (selectedPlatformId?: number) => void;
  setSearchInput: (searchText: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSelectedGenre: (GenreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId: GenreId } })),
  setSelectedPlatform: (PlatformId) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, platformId: PlatformId },
    })),
  setSearchInput: (searchInput) =>
    set(() => ({ gameQuery: { search: searchInput } })),
}));

export default useGameQueryStore;
