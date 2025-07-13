import styles from "./AsideEl.module.scss"

import { useAsideEl } from "./useAsideEl";

import { Link, Navigate } from "react-router";

export const AsideEl = ({ el }: { el: string }) => {

	const { isActive, title, isRedirect, to } = useAsideEl(el);

	if(isRedirect) return <Navigate to={"/auth/login"}/>

	return (
		<Link
			to={to}
			key={el}
			className={`${styles.link} ${isActive ? styles.active : ""}`}>{title}</Link>
	)
};

