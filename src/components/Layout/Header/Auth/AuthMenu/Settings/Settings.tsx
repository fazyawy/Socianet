import styles from "./Settings.module.scss"

import { Link } from "react-router";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { MdSettings } from "react-icons/md";

export const Settings = ({ isSettings }: { isSettings: boolean }) => {

	if (isSettings) return (
		<Link title="back to profile" to="/" className={styles.settings}>
			<FaRegArrowAltCircleRight size={35} />
		</Link>
	)

	return (
		<Link title="settings" to="settings/profile" className={styles.settings}>
			<MdSettings size={35} />
		</Link>
	)
};

