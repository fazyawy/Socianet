export const getPrimaryColor = (): string => {
	return localStorage?.getItem("primary") || "";
};

