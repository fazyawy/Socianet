import styles from "./Aside.module.scss"
import { MainAside } from "./MainAside/MainAside";
import { SettingsAside } from "./SettingsAside/SettingsAside";
import { useAside } from "./useAside";

export const Aside = () => {
	const { isSettings } = useAside();

	return (
		<aside className={styles.aside} data-testid="aside">
			{isSettings ? <SettingsAside /> : <MainAside />}
		</aside>
	)
};

