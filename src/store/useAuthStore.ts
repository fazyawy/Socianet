import { create } from "zustand";
import { IAuthStore } from "./store.type";

export const useAuthStore = create<IAuthStore>((set) => ({
	isAuth: false,
	setIsAuth: (changedValue) => set(() => ({ isAuth: changedValue }))
}));

