import styles from "./Header.module.scss"

import { Actions } from "./Actions/Actions";
import { Avatar } from "@/components/UI/Avatar/Avatar";

export const Header = () => {
	return (
		<div className={styles.header}>

			<div className={styles.contact_info}>

				<Avatar
				src="https://i.pravatar.cc/150?img=5"
				type={"middle"}
				haveOnlineStatus={true}
				isOnline={true}/>

				<div className={styles.contact_details}>
					<span className={styles.contact_name}>John Doe</span>

					<span className={styles.contact_status}>online</span>
				</div>
			</div>

			<Actions />
		</div>
	)
};

