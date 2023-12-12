import { create } from "zustand";

interface UserQuery {
  user?: string;
  password?: string;
}

interface GameQueryStore {
  userQuery: UserQuery;
  setUser: (selectedGenreId: string) => void;
  setPassword: (selectedPlatformId?: string) => void;
}

const useUserQueryStore = create<GameQueryStore>((set) => ({
  userQuery: {},
  setUser: (User) =>
    set((store) => ({ userQuery: { ...store.userQuery, user: User } })),
  setPassword: (Password) =>
    set((store) => ({ userQuery: { ...store.userQuery, password: Password } })),
}));

export default useUserQueryStore;
