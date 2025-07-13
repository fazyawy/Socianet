import styles from "./ChangeAvatar.module.scss"

import { IChangeAvatar } from "./ChangeAvatar.type";
import { useChangeAvatar } from "./useChangeAvatar";

import { FaPen } from "react-icons/fa";

import { Avatar } from "@/components/common/Avatar/Avatar";

export const ChangeAvatar = ({ src, isMyProfile, className }: IChangeAvatar) => {

	const { handleFileChange, image } = useChangeAvatar(src);

	if (!isMyProfile && isMyProfile !== undefined) return <Avatar src={image} type={"large"} className={styles.avatar} />;

	return (
		<div className={`${styles.info_avatar} ${className}`} title="Change avatar">
			<input type="file" className={styles.info_setAvatar} onChange={handleFileChange} accept="image/*" multiple={false} />

			<Avatar
				src={image}
				type={"large"} className={styles.avatar} />

			<FaPen className={styles.pen} />
		</div>
	)
};

