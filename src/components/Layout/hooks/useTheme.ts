import { useSettingsStore } from "@/store/settings.store"
import { useEffect } from "react";

export const useTheme = (): boolean => {
	const { isDarkTheme, setIsDarkTheme, primaryColor, setPrimaryColor } = useSettingsStore(state => state);

	const theme = localStorage?.getItem("theme");
	const primary = localStorage?.getItem("primary");

	useEffect(() => {
		setIsDarkTheme(theme === "dark");
		if(primary) setPrimaryColor(primary);
	}, [])

	useEffect(() => {
		document.documentElement.style.setProperty("--primary", primaryColor)
	}, [primaryColor])

	return isDarkTheme || false;

};

