import styles from "./FollowBtn.module.scss";
import { IFollowBtn } from "./Follow.type";

import { useFollowBtn } from "./useFollowBtn";

export const FollowBtn = ({ isFollowed, userId }: IFollowBtn) => {

	const { mutate, isPending } = useFollowBtn(isFollowed)

	return (
		<div className={styles.btn}>
			<button onClick={() => mutate(userId)} className={isFollowed ? styles.active : ""} disabled={isPending}>
				{isFollowed && "un"}follow
			</button>
		</div>
	)
};

