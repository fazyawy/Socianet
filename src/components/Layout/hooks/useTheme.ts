import { useSettingsStore } from "@/store/settings.store"
import { useEffect } from "react";

export const useTheme = (): boolean => {
	const { isDarkTheme, setIsDarkTheme } = useSettingsStore(state => state)

	const theme = localStorage?.getItem("theme");

	useEffect(() => {
		setIsDarkTheme(theme === "dark");
	}, [])

	return isDarkTheme || false;

};

