import styles from "./Info.module.scss"

import { useInfo } from "./useInfo";

import { Preloader } from "@/components/UI/Preloader/Preloader";
import { FollowBtn } from "@/components/common/FollowBtn/FollowBtn";
import { ChangeAvatar } from "@/components/common/ChangeAvatar/ChangeAvatar";

import { NameStatus } from "./NameStatus/NameStatus";
import { InfoDesription } from "./InfoDescription/InfoDesription";


export const Info = () => {

	const { photo, info_description, isProfileLoading, isMyProfile, userId, name } = useInfo();

	if (isProfileLoading) return <Preloader />

	return (
		<div className={styles.info}>

			<ChangeAvatar src={photo} isMyProfile={isMyProfile} />

			<NameStatus name={name} userId={userId} isMyProfile={isMyProfile} />

			<InfoDesription {...info_description}/>

			{!isMyProfile && <FollowBtn userId={userId} className={styles.button} />}

		</div>
	)
};

