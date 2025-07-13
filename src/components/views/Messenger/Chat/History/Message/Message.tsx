import styles from "./Message.module.scss"

import { IMessage } from "./Message.type";
import { useMessage } from "./useMessage";

import { Avatar } from "@/components/common/Avatar/Avatar";
import { MessageTime } from "@/components/UI/MessageTime/MessageTime";

import { FaCheckDouble } from "react-icons/fa6";

import { MessageMenu } from "./MessageMenu/MessageMenu";

export const Message = ({ isReceived, text, isChecked }: IMessage) => {

	const { isShow, toggleIsShow } = useMessage();

	return (
		<div className={`${styles.message} ${isReceived ? styles.received : styles.sent}`}>

			{isReceived && <Avatar
				src="https://i.pravatar.cc/150?img=5"
				type={"smaller"} />}

			<div className={styles.content}>

				<h5 className={styles.text}>{text}</h5>

				<div className={styles.meta}>
					<MessageTime>12:30 PM</MessageTime>
					{isChecked && <span className={styles.read_receipt}><FaCheckDouble /></span>}
				</div>

			</div>

			<div
				className={`${styles.message_menu} ${isShow ? styles.show_menu : ""}`}
				title="Message Menu">
				<MessageMenu
					isReceived={isReceived}
					isShow={isShow}
					toggleIsShow={toggleIsShow}/>
			</div>

		</div>
	)
};

