import { create } from "zustand";

import { ISettingsStore } from "./types/settings.types";

export const useSettingsStore = create<ISettingsStore>((set) => ({
	// isDarkTheme: getIsDarkTheme(),
	isDarkTheme: false,
	setIsDarkTheme: (changedValue) => set(() => ({ isDarkTheme: changedValue })),

	// primaryColor: getPrimaryColor(),
	primaryColor: "#000",
	setPrimaryColor: (changedValue) => set(() => ({ primaryColor: changedValue }))
}));

