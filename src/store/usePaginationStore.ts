import { create } from "zustand";
import { IPaginationStore } from "./store.type";

export const usePaginationStore = create<IPaginationStore>((set) => ({
	currentPage: 1,
	setCurrentPage: (changedValue: number) => set(() => ({ currentPage: changedValue }))
}));

