import { useEffect } from "react";

import { useSettingsStore } from "@/store/settings.store"

import { getIsDarkTheme } from "@/utils/localStorage/getIsDarkTheme";
import { getPrimaryColor } from "@/utils/localStorage/getPrimaryColor";

export const useTheme = (): boolean => {
	const {isDarkTheme, primaryColor, setIsDarkTheme, setPrimaryColor} = useSettingsStore(state => state);

	useEffect(() => {
		setIsDarkTheme(getIsDarkTheme());
		setPrimaryColor(getPrimaryColor());
	}, [])

	useEffect(() => {
		document.documentElement.style.setProperty("--primary", primaryColor)
	}, [primaryColor])

	return isDarkTheme || false;

};

