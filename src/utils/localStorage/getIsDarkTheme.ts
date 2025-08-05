export const getIsDarkTheme = (): boolean => {

	const theme: string | null = localStorage?.getItem("theme");

	if (!!theme) {
		if (theme === "dark") return true;
	}
	else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		return true
	}
	return false
};

