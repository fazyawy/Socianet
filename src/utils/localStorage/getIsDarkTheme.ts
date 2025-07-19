export const getIsDarkTheme = ():boolean => {

	const theme = localStorage?.getItem("theme");

	if(theme === "dark") return true;

	return false
};

