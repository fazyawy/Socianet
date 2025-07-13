import { create } from "zustand";

import { IAuthStore } from "./types/auth.types";

export const useAuthStore = create<IAuthStore>((set) => ({
	isAuth: null,
	setIsAuth: (changedValue) => set(() => ({ isAuth: changedValue }))
}));

