import { FaPen } from "react-icons/fa";
import styles from "./InfoAvatar.module.scss"

import { Avatar } from "@/components/common/Avatar/Avatar";
import { useInfoAvatar } from "./useInfoAvatar";

interface IInfoAvatar {
	src: string
}

export const InfoAvatar = ({ src }: IInfoAvatar) => {

	const {handleFileChange, image} = useInfoAvatar(src);

	return (
		<div className={styles.info_avatar} title="Change avatar">
			<input type="file" className={styles.info_setAvatar} onChange={handleFileChange} accept="image/*" multiple={false}/>

			<Avatar
				src={image}
				type={"large"} className={styles.avatar} />

			<FaPen className={styles.pen} />
		</div>
	)
};

