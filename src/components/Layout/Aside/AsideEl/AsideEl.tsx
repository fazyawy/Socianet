import styles from "./AsideEl.module.scss"

import { Link, Navigate, useLocation } from "react-router";

import { capitalizeFirstLetter } from "@/utils/string/capitalizeFirstLetter";
import { useAuthStore } from "@/store/useAuthStore";
import { getIsAuthSelector } from "@/store/selectors/auth.selector";

export const AsideEl = ({ el }: { el: string }) => {

	const isAuth = useAuthStore(getIsAuthSelector)

	const { pathname } = useLocation();

	const title = capitalizeFirstLetter(el.slice(1));
	const isProfilePage = title === "";
	const isActive = pathname === el || !!Number(pathname.slice(1)) && isProfilePage

	if(isAuth === false && (pathname === "/" || pathname === "/messenger" || pathname === "/friends")) {
		return <Navigate to={"/auth/login"}/>
	}

	return (
		<Link
			to={el}
			key={el}
			className={`${styles.link} ${isActive ? styles.active : ""}`}>{isProfilePage ? "Profile" : title}</Link>
	)
};

