import { Onlinestatus } from "../Onlinestatus/Onlinestatus";
import styles from "./Avatar.module.scss"

interface IAvatar {
	src: string,
	type: "large" | "bigger" | "big" | "middle" | "small" | "smaller",
	haveOnlineStatus?: boolean,
	isOnline?: boolean,
	onlineStyle?: string
}

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

