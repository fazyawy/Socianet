import styles from "./Actions.module.scss"

import { FaPhone, FaVideo } from "react-icons/fa";
import { FaEllipsisVertical } from "react-icons/fa6";

export const Actions = () => {
	return (
		<div className={styles.actions}>
			<button title="Voice call">
				<FaPhone />
			</button>
			<button title="Video call">
				<FaVideo />
			</button>
			<button title="Menu">
				<FaEllipsisVertical />
			</button>
		</div>
	)
};

