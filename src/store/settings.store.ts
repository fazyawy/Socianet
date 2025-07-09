import { create } from "zustand";

import { ISettingsStore } from "./types/settings.types";

export const useSettingsStore = create<ISettingsStore>((set) => ({
	isSettings: false,
	setIsSettings: (changedValue) => set(() => ({ isSettings: changedValue }))
}));

