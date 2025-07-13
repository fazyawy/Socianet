import { useSettingsStore } from "@/store/settings.store";

export const useTheme = () => {
	const getIsDarkTheme = ():boolean => {
		const theme = localStorage?.getItem("theme")

		if(theme === "dark") return true;

		return false;
	}

	// const [isDarkTheme, setIsDarkTheme] = useState<boolean>(getIsDarkTheme());

	const { isDarkTheme, setIsDarkTheme } = useSettingsStore(state => state)

	const onSetDarkThemeClick = () => {
		setIsDarkTheme(true);
		localStorage?.setItem('theme', "dark");
	}

	const onSetLightThemeClick = () => {
		setIsDarkTheme(false);
		localStorage?.setItem('theme', "");
	}

	console.log(getIsDarkTheme())

	return {
		isDarkTheme,
		onSetDarkThemeClick,
		onSetLightThemeClick
	}
};

