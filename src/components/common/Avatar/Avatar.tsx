import styles from "./Avatar.module.scss"

import { Onlinestatus } from "@/components/UI/Onlinestatus/Onlinestatus";
import { IAvatar } from "./Avatar.type";


export const Avatar = ({ src, type, haveOnlineStatus, isOnline, onlineStyle }: IAvatar) => {

	const sizes = {
		large: "10rem",
		bigger: "7.5rem",
		big: "5rem",
		middle: "3.5rem",
		small: "2.5rem",
		smaller: "2.25rem"
	}

	return (
		<div className={styles.avatar} style={{"width": sizes[type], "height": sizes[type]}}>
			<img src={src} alt="Contact" />
			{haveOnlineStatus && isOnline && <Onlinestatus className={onlineStyle} />}
		</div>
	)
};

