import styles from "./Theme.module.scss"

import { useTheme } from "./useTheme";

import { FaMoon, FaSun } from "react-icons/fa";

export const Theme = () => {

	const { isDarkTheme, onSetDarkThemeClick, onSetLightThemeClick } = useTheme();

	return (
		<section className={styles.theme}>
			<h2>Theme</h2>
			<span className={styles.description}>Choose the theme of the interface for better visibility</span>

			<div className={styles.theme_setter}>
				<button title="Set white theme" name={"theme"} onClick={onSetLightThemeClick} className={`${styles.theme_btn} ${!isDarkTheme ? styles.active : ""}`}>
					<FaSun color="#eeff00" size={50} />
				</button>

				<button title="Set dark theme" name={"theme"} onClick={onSetDarkThemeClick} className={`${styles.theme_btn} ${isDarkTheme ? styles.active : ""}`}>
					<FaMoon color="var(--white-secondary)" size={50} />
				</button>
			</div>

		</section>
	)
};

