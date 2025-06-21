import styles from "./Info.module.scss"
import { useInfo } from "./useInfo";

import { Avatar } from "@/components/common/Avatar/Avatar";
import { FollowBtn } from "@/components/common/FollowBtn/FollowBtn";

import { Preloader } from "@/components/UI/Preloader/Preloader";


export const Info = ({ id }: { id: number | string }) => {

	const { photos, fullName, description, isLoading, isMyProfile, isFollowed } = useInfo(id);

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

			{!isMyProfile && <FollowBtn isFollowed={isFollowed} userId={Number(id)} className={styles.button} />}

		</article>
	)
};

