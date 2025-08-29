import styles from "./Layout.module.scss"

import { useLayout } from "./useLayout";

import { Outlet } from "react-router";

import { Header } from "./Header/Header";
import { Aside } from "./Aside/Aside";
// import { Footer } from "./Footer/Footer";

import { Preloader } from "@/components/UI/Preloader/Preloader";

export const Layout = () => {
	const { aside: { haveAside, toggleAside }, isLoading, isSuccess, isDarkTheme } = useLayout();

	return (
		<div
			className={`${styles.layout} ${haveAside ? "" : styles.not_aside}`}
			data-color-theme={isDarkTheme ? "dark" : "light"}
			data-testid="layout-container">
			<Header haveAside={haveAside} toggleAside={toggleAside} />
			{haveAside && <Aside />}
			{isLoading && <Preloader />}
			{isSuccess && !isLoading && <Outlet />}
			{/* <Footer /> */}
		</div>
	)
};

