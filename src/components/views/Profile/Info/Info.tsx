import styles from "./Info.module.scss"

import { useInfo } from "./useInfo";

import { FollowBtn } from "@/components/common/FollowBtn/FollowBtn";

import { Preloader } from "@/components/UI/Preloader/Preloader";
import { InfoAvatar } from "./InfoAvatar/InfoAvatar";
import { NameStatus } from "./NameStatus/NameStatus";


export const Info = () => {

	const { photos, description, isProfileLoading, isMyProfile, userId, name_status } = useInfo();

	if (isProfileLoading) return <Preloader />

	return (
		<article className={styles.info}>

			<InfoAvatar src={photos?.large || undefined} isMyProfile={isMyProfile} />

			<NameStatus {...name_status} isMyProfile={isMyProfile} />

			<div className={styles.description}>
				<h4>Description</h4>
				<span>{description} <a href="">{description.length == 250 && "..."}more</a></span>
			</div>

			{!isMyProfile && <FollowBtn userId={Number(userId)} className={styles.button} />}

		</article>
	)
};

