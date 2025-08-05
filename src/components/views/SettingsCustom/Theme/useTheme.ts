import { useSettingsStore } from "@/store/settings.store";

export const useTheme = () => {
	const { isDarkTheme, setIsDarkTheme } = useSettingsStore(state => state)

	const onSetDarkThemeClick = () => {
		setIsDarkTheme(true);
		localStorage?.setItem('theme', "dark");
	}

	const onSetLightThemeClick = () => {
		setIsDarkTheme(false);
		localStorage?.setItem('theme', "light");
	}

	return {
		isDarkTheme,
		onSetDarkThemeClick,
		onSetLightThemeClick
	}
};

