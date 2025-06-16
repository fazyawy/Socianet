import styles from "./Layout.module.scss"

import { Outlet } from "react-router";

import { Header } from "./Header/Header";
import { Aside } from "./Aside/Aside";
import { Footer } from "./Footer/Footer";

import { useLayout } from "./useLayout";

export const Layout = () => {
	const {haveAside, toggleAside, isLoading} = useLayout();

	return (
		<div className={`${styles.layout} ${haveAside ? "" : styles.not_aside}`}>
			<Header haveAside={haveAside} toggleAside={toggleAside} />
			{ haveAside && <Aside /> }
			{!isLoading && <Outlet />}
			{isLoading && "Loading..."}
			{/* <Footer /> */}
		</div>
	)
};

