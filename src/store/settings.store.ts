import { create } from "zustand";

import { ISettingsStore } from "./types/settings.types";

import { getIsDarkTheme } from "@/utils/localStorage/getIsDarkTheme";
import { getPrimaryColor } from "@/utils/localStorage/getPrimaryColor";

export const useSettingsStore = create<ISettingsStore>((set) => ({
	isDarkTheme: getIsDarkTheme(),
	setIsDarkTheme: (changedValue) => set(() => ({ isDarkTheme: changedValue })),

	primaryColor: getPrimaryColor(),
	setPrimaryColor: (changedValue) => set(() => ({ primaryColor: changedValue }))
}));

