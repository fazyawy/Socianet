import { Avatar } from "@/components/UI/Avatar/Avatar";
import styles from "./Profile.module.scss";

import { FaMoon } from "react-icons/fa";
import { FaEllipsisVertical } from "react-icons/fa6";

export const Profile = () => {
	return (
		<div className={styles.profile}>
			<Avatar
			src="https://i.pravatar.cc/150?img=6"
			type={"small"}
			haveOnlineStatus={true}
			isOnline={true}/>

			<div className={styles.profile_actions}>
				<button title="Toggle theme">
					<FaMoon />
				</button>

				<button title="Menu">
					<FaEllipsisVertical />
				</button>
			</div>

		</div>
	)
};

