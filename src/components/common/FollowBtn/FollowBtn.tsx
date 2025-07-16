import styles from "./FollowBtn.module.scss";

import { IFollowBtn } from "./Follow.type";
import { useFollowBtn } from "./useFollowBtn";

export const FollowBtn = ({ isFollowed, userId, className }: IFollowBtn) => {

	const { mutate, isPending, isFollowBtn } = useFollowBtn(isFollowed, userId);

	return (
		<div className={`${styles.button_container} ${className}`}>
			<button onClick={() => mutate(userId)} className={`${styles.button} ${isFollowBtn ? styles.active : ""}`} disabled={isPending}>
				{isFollowBtn && "un"}follow
			</button>
		</div>
	)
};

