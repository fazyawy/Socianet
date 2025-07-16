import { useLocation } from "react-router";

import { getIsAuthSelector } from "@/store/selectors/auth.selector";
import { useAuthStore } from "@/store/useAuthStore";

export const useAuth = () => {

	const { pathname } = useLocation();

	const isAuth = useAuthStore(getIsAuthSelector);

	return {
		isAuth,
		isLogin: pathname === "/auth/login"
	}
};

