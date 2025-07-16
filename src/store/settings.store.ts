import { create } from "zustand";

import { ISettingsStore } from "./types/settings.types";

export const useSettingsStore = create<ISettingsStore>((set) => ({
	isDarkTheme: true,
	setIsDarkTheme: (changedValue) => set(() => ({ isDarkTheme: changedValue })),

	primaryColor: "",
	setPrimaryColor: (changedValue) => set(() => ({ primaryColor: changedValue }))
}));

