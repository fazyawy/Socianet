import { create } from "zustand";

import { IPaginationStore } from "./types/pagination.types";

export const usePaginationStore = create<IPaginationStore>((set) => ({
	currentPage: 1,
	maxShowedUsers: 6,
	upperShowedUsers: 6,

	setCurrentPage: (changedValue: number) => set(() => ({ currentPage: changedValue })),
	upMaxShowedUsers: () => set((state) => ({...state, maxShowedUsers: state.maxShowedUsers + state.upperShowedUsers})),
	setMaxShowedUsers: (changedValue) => set(() => ({ maxShowedUsers: changedValue, upperShowedUsers: changedValue }))
}));

