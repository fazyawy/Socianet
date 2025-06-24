import styles from "./Contact.module.scss";

import { Avatar } from "@/components/common/Avatar/Avatar";
import { MessageTime } from "@/components/UI/MessageTime/MessageTime";

import { IContact } from "./Contact.type";


export const Contact = ({ avatar,
	isOnline,
	name, message_time,
	message_preview,
	unreadBadge,
	isActive }: IContact) => {

	return (
		<article className={`${styles.contact} ${isActive && styles.active}`} data-contact-id="1">

			<Avatar
				className={styles.avatar}
				src={avatar}
				type={"middle"}
				haveOnlineStatus={true}
				isOnline={isOnline}
				onlineStyle={styles.online} />

			<div className={styles.contact_info}>

				<div className={styles.contact_name_time}>
					<h4 className={styles.contact_name}>{name}</h4>
					<MessageTime>{message_time}</MessageTime>
				</div>

				<div className={styles.message_preview_unread}>
					<span className={styles.message_preview}>{message_preview}</span>
					{unreadBadge !== 0 && <span className={styles.unread_badge}>{unreadBadge}</span>}
				</div>

			</div>

		</article>
	)

};

