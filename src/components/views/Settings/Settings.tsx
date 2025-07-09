import styles from "./Settings.module.scss"

import { Outlet } from "react-router";

import { SettingsAside } from "./SettingsAside/SettingsAside";

export const Settings = () => {
	return (
		<main className={styles.settings}>
			<SettingsAside />
			<Outlet />
		</main>
	)
};

