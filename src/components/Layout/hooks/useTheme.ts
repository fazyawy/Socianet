import { useSettingsStore } from "@/store/settings.store"
import { useEffect } from "react";
import { useShallow } from "zustand/shallow";

export const useTheme = (): boolean => {
	const [isDarkTheme, primaryColor] = useSettingsStore(useShallow(state => [state.isDarkTheme, state.primaryColor]));

	useEffect(() => {
		document.documentElement.style.setProperty("--primary", primaryColor)
	}, [primaryColor])

	return isDarkTheme || false;

};

