import styles from "./MessageMenu.module.scss"
import { IMessageMenu } from "./MessageMenu.type";

import { FaEllipsisVertical } from "react-icons/fa6"

import { Menu } from "./Menu/Menu";

export const MessageMenu = ({ isReceived, isShow, toggleIsShow }: IMessageMenu) => {
	return (
		<>
			<button
				className={styles.message_menu_btn}
				onClick={toggleIsShow}>
				<FaEllipsisVertical />
			</button>

			{isShow && <Menu isReceived={isReceived}/>}
		</>
	)
};

