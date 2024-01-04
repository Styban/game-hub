import { create } from "zustand";

interface GameQuery {
  user?: string;
  key?: string;
  genreId?: number;
  platformId?: number;
  search?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSelectedGenre: (selectedGenreId?: number) => void;
  setLoggedUser: (setLoggedUser?: string) => void;
  setLoggedUserPassword: (setLoggedUserPassword?: string) => void;
  setSelectedPlatform: (selectedPlatformId?: number) => void;
  setSearchInput: (searchText: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSelectedGenre: (GenreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId: GenreId } })),
  setLoggedUser: (User) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, user: User } })),
  setLoggedUserPassword: (Password) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, key: Password } })),
  setSelectedPlatform: (PlatformId) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, platformId: PlatformId },
    })),
  setSearchInput: (searchInput) =>
    set(() => ({ gameQuery: { search: searchInput } })),
}));

export default useGameQueryStore;
