import styles from "./SettingsCustom.module.scss"
import { SubColor } from "./SubColor/SubColor";

import { Theme } from "./Theme/Theme";

export const SettingsCustom = () => {
	return (
		<main className={styles.settings}>
			<h1>Custom this web app</h1>

			<Theme />
			<SubColor />
		</main>
	)
};

