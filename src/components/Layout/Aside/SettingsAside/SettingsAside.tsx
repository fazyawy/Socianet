import styles from "./SettingsAside.module.scss"

import { Link } from "react-router";
import { useSettingsAside } from "./useSettingsAside";

export const SettingsAside = () => {

	const { mutate } = useSettingsAside()

	return (
		<nav className={styles.settings_aside} data-testid="settings aside">
			<Link to={"/settings/profile"} className={styles.active} data-testid={"settings aside's child"}>Account</Link>
			<Link to={"/settings/custom"} data-testid={"settings aside's child"}>Custom</Link>
			<a className={styles.logout} onClick={() => mutate()} data-testid={"settings aside's child"}>Logout</a>
		</nav>
	)
};

