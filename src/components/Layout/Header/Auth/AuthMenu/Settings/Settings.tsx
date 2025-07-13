import styles from "./Settings.module.scss"

import { Link } from "react-router";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { MdSettings } from "react-icons/md";

export const Settings = ({ isSettings, isOpenMenu }: { isSettings: boolean, isOpenMenu: boolean }) => {


	const className = `${styles.settings} ${isOpenMenu ? styles.active : ""}`

	if (isSettings) return (
		<Link title="back to profile" to="/" className={className}>
			<FaRegArrowAltCircleRight size={35} />
		</Link>
	)

	return (
		<Link title="settings" to="settings/profile" className={className}>
			<MdSettings size={35} />
		</Link>
	)
};

