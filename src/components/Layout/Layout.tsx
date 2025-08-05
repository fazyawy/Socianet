import styles from "./Layout.module.scss"

import { useLayout } from "./useLayout";

import { Outlet } from "react-router";

import { Header } from "./Header/Header";
import { Aside } from "./Aside/Aside";
import { SettingsAside } from "./SettingsAside/SettingsAside";
// import { Footer } from "./Footer/Footer";

import { Preloader } from "@/components/UI/Preloader/Preloader";

export const Layout = () => {
	const { haveAside, toggleAside, isLoading, isSuccess, isSettings, isDarkTheme } = useLayout();

	return (
		<div className={`${styles.layout} ${haveAside ? "" : styles.not_aside}`} data-color-theme={isDarkTheme ? "dark" : "light"}>
			<h1>Hello world</h1>
			<Header haveAside={haveAside} toggleAside={toggleAside} />
			{haveAside && isSettings ? <SettingsAside /> : <Aside />}
			{isLoading && <Preloader />}
			{isSuccess && <Outlet />}
			{/* <Footer /> */}
		</div>
	)
};

