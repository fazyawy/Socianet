import styles from "./AuthMenu.module.scss"

import { useAuthMenu } from "./useAuthMenu";

import { Avatar } from "@/components/common/Avatar/Avatar";

import { Settings } from "./Settings/Settings";

export const AuthMenu = () => {

	const {
		isOpenMenu,
		toggleIsOpenMenu,

		myAvatar,

		isSettings
	} = useAuthMenu();

	return (
		<>
			<button
				title="Menu"
				onClick={toggleIsOpenMenu}
				data-testid="toggle auth menu"
				className={`${styles.auth_menu} ${isOpenMenu ? styles.openedMenu : ""}`}>
				<Avatar
					src={myAvatar}
					type={"big"}
					haveOnlineStatus={true}
					isOnline={true}
					onlineStyle={styles.online} />
			</button>

			{isOpenMenu && <Settings isSettings={isSettings} />}
		</>
	)
};

