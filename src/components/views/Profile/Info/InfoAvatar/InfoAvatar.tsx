import styles from "./InfoAvatar.module.scss"

import { IInfoAvatar } from "./InfoAvatar.type";
import { useInfoAvatar } from "./useInfoAvatar";

import { FaPen } from "react-icons/fa";

import { Avatar } from "@/components/common/Avatar/Avatar";

export const InfoAvatar = ({ src, isMyProfile }: IInfoAvatar) => {

	const { handleFileChange, image } = useInfoAvatar(src);

	if (!isMyProfile) return <Avatar src={image} type={"large"} className={styles.avatar} />;

	return (
		<div className={styles.info_avatar} title="Change avatar">
			<input type="file" className={styles.info_setAvatar} onChange={handleFileChange} accept="image/*" multiple={false} />

			<Avatar
				src={image}
				type={"large"} className={styles.avatar} />

			<FaPen className={styles.pen} />
		</div>
	)
};

