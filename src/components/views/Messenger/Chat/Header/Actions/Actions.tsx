import styles from "./Actions.module.scss"

import { FaPhone, FaVideo } from "react-icons/fa";
import { FaEllipsisVertical } from "react-icons/fa6";

export const Actions = () => {
	return (
		<div className={styles.actions}>
			<button className="call-button" title="Voice call">
				<FaPhone />
			</button>
			<button className="video-button" title="Video call">
				<FaVideo />
			</button>
			<button className="menu-button" title="Menu">
				<FaEllipsisVertical />
			</button>
		</div>
	)
};

