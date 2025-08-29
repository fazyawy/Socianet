import { useLocation } from "react-router";

export const useAside = () => {
	const { pathname } = useLocation();

	return {
		isSettings: pathname.slice(0, 9) === "/settings",
	}
};

