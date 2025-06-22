import styles from "./Info.module.scss"
import { useInfo } from "./useInfo";

import { Avatar } from "@/components/common/Avatar/Avatar";
import { FollowBtn } from "@/components/common/FollowBtn/FollowBtn";

import { Preloader } from "@/components/UI/Preloader/Preloader";


export const Info = () => {

	const { photos, fullName, description, isLoading, isMyProfile, userId } = useInfo();

	if (isLoading) return <Preloader />

	return (
		<article className={styles.info}>

			<Avatar
				src={photos?.large || "https://i.pravatar.cc/150?img=5"}
				type={"large"} />

			<div className={styles.name_status}>
				<h1>{fullName}</h1>
				<h3>working</h3>
			</div>

			<div className={styles.description}>
				<h4>Description</h4>
				<span>{description} <a href="">{description.length == 250 && "..."}more</a></span>
			</div>

			{!isMyProfile && <FollowBtn userId={Number(userId)} className={styles.button} />}

		</article>
	)
};

