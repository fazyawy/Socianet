import styles from "./Info.module.scss"
import { useInfo } from "./useInfo";

import { FollowBtn } from "@/components/common/FollowBtn/FollowBtn";

import { Preloader } from "@/components/UI/Preloader/Preloader";
import { InfoAvatar } from "./InfoAvatar/InfoAvatar";


export const Info = () => {

	const { photos, fullName, description, isProfileLoading, isMyProfile, userId, status, isStatusLoading } = useInfo();

	if (isProfileLoading) return <Preloader />

	return (
		<article className={styles.info}>

			<InfoAvatar
				src={photos?.large || "https://i.pravatar.cc/150?img=5"}/>

			<div className={styles.name_status}>
				<h1>{fullName}</h1>
				<h3>{isStatusLoading ? <Preloader /> : status}</h3>
			</div>

			<div className={styles.description}>
				<h4>Description</h4>
				<span>{description} <a href="">{description.length == 250 && "..."}more</a></span>
			</div>

			{!isMyProfile && <FollowBtn userId={Number(userId)} className={styles.button} />}

		</article>
	)
};

