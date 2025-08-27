import styles from "./Avatar.module.scss"

import defaultImage from "@/assets/images/user.png"

import { Onlinestatus } from "@/components/UI/Onlinestatus/Onlinestatus";
import { IAvatar } from "./Avatar.type";


export const Avatar = ({ className, src, type, haveOnlineStatus, isOnline, onlineStyle }: IAvatar) => {

	const sizes = {
		large: "10rem",
		bigger: "7.5rem",
		big: "5rem",
		middle: "3.5rem",
		small: "2.5rem",
		smaller: "2.25rem"
	}

	return (
		<div
			className={`${styles.avatar} ${className}`}
			style={{"width": sizes[type], "height": sizes[type]}}
			data-testid="avatar container">
			<img src={src || defaultImage} alt="Avatar" data-testid="avatar"/>
			{haveOnlineStatus && isOnline && <Onlinestatus className={onlineStyle} />}
		</div>
	)
};

