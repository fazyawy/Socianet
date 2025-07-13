import styles from "./SettingsAside.module.scss"

import { Link } from "react-router";
import { useSettingsAside } from "./useSettingsAside";

export const SettingsAside = () => {

	const { mutate } = useSettingsAside()

	return (
		<aside className={styles.settings_aside}>
			<Link to={"/settings/profile"} className={styles.active}>Account</Link>
			<Link to={"/settings/custom"}>Custom</Link>
			<Link to={"/settings/profile"}>Profile</Link>
			<Link to={"/settings/profile"}>Profile</Link>
			<a className={styles.logout} onClick={() => mutate()}>Logout</a>
		</aside>
	)
};

