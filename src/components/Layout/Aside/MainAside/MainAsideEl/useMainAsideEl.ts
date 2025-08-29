import { getIsAuthSelector } from "@/store/selectors/auth.selector";
import { useAuthStore } from "@/store/useAuthStore";
import { capitalizeFirstLetter } from "@/utils/string/capitalizeFirstLetter";
import { useLocation } from "react-router";

export const useMainAsideEl = (el: string) => {

	const isAuth = useAuthStore(getIsAuthSelector)

	const { pathname } = useLocation();

	const isNumber = !!Number(pathname.slice(1));

	const title = capitalizeFirstLetter(el.slice(1));
	const isProfilePage = title === "";
	const isActive = pathname === el || (isNumber && isProfilePage)

	return {
		isActive,
		title: isProfilePage ? "Profile" : title,
		isRedirect: isAuth === false && (pathname === "/" || pathname === "/messenger" || pathname === "/friends" || isNumber || pathname.slice(0, 9) === "/settings"),
		to: title === "Settings" ? "/settings/profile" : el
	}
};

