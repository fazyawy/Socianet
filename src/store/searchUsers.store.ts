import { create } from "zustand";

import { ISearchUsersStore } from "./types/searchUsers.types";

export const useSearchUsersStore = create<ISearchUsersStore>((set) => ({
	searchValue: "",
	setSearchValue: (changedValue) => set(() => ({ searchValue: changedValue }))
}));

