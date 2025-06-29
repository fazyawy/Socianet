import { Link } from "react-router";
import styles from "./SettingsAside.module.scss"

export const SettingsAside = () => {
	return (
		<aside className={styles.settings_aside}>
			<Link to={"/settings/profile"} className={styles.active}>Profile</Link>
			<Link to={"/settings/profile"}>Profile</Link>
			<Link to={"/settings/profile"}>Profile</Link>
			<Link to={"/settings/profile"}>Profile</Link>
			<Link to={"/settings/profile"}>Profile</Link>
		</aside>
	)
};

