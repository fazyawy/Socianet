import styles from "./MainAsideEl.module.scss"

import { useMainAsideEl } from "./useMainAsideEl";

import { Link, Navigate } from "react-router";

export const MainAsideEl = ({ el }: { el: string }) => {

	const { isActive, title, isRedirect, to } = useMainAsideEl(el);

	if(isRedirect) return <Navigate to={"/auth/login"}/>

	return (
		<Link
			to={to}
			key={el}
			className={`${styles.link} ${isActive ? styles.active : ""}`}
			data-testid={`main-link-${title}`}>{title}</Link>
	)
};

