import styles from "./Menu.module.scss"

import { IMessage } from "../../Message.type";

import { FaCopy, FaPen, FaReply, FaTrash } from "react-icons/fa";

export const Menu = ({ isReceived }: Pick<IMessage, "isReceived">) => {
	return (
		<div className={styles.menu}>
			<button className={styles.menu_item}>
				<FaReply className={styles.i} /> Reply</button>

			{!isReceived && <button className={styles.menu_item}>
				<FaPen className={styles.i} /> Edit</button>}

			<button className={styles.menu_item}>
				<FaCopy className={styles.i} /> Copy</button>
			<button className={styles.menu_item}>
				<FaTrash className={styles.i} /> Delete</button>
		</div>
	)
};

