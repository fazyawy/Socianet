import styles from "./AuthMenu.module.scss"
import { useAuthMenu } from "./useAuthMenu";

import { Avatar } from "@/components/common/Avatar/Avatar";

import { GiExitDoor } from "react-icons/gi";

export const AuthMenu = () => {

	const {
		isOpenMenu,
		toggleIsOpenMenu,

		myAvatar,

		mutate
	} = useAuthMenu();

	return (
		<>
			<button
				title="Menu"
				onClick={toggleIsOpenMenu}
				className={`${styles.auth_menu} ${isOpenMenu ? styles.openedMenu : ""}`}>
				<Avatar
					src={myAvatar}
					type={"big"}
					haveOnlineStatus={true}
					isOnline={true}
					onlineStyle={styles.online} />
			</button>

			<button title="Logout" className={styles.logout} onClick={mutate}>
				<GiExitDoor size={35} />
			</button>
		</>
	)
};

