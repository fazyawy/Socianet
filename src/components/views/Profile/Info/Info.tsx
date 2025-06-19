import { FollowBtn } from "@/components/common/FollowBtn/FollowBtn";
import styles from "./Info.module.scss"

import { Avatar } from "@/components/common/Avatar/Avatar";
import { useMyProfileStore } from "@/store/useMyProfileStore";
import { useQuery } from "@tanstack/react-query";
import profileService from "@/services/profile.service";
import { Preloader } from "@/components/UI/Preloader/Preloader";


export const Info = ({ id }: { id: number | string }) => {

	const { myId, myProfile } = useMyProfileStore(state => state)

	id = id === "" ? myId : Number(id);

	const isMyProfile = id !== myId;

	const { data, isLoading } = useQuery({
		queryKey: ['show profile'],
		queryFn: profileService.getProfile(id),
		select: ({ data }) => data,
		enabled: isMyProfile
	})

	console.log(data)

	const { photos, fullName, aboutMe } = data ? { ...data } : { ...myProfile }

	if(isLoading) return <Preloader />

	return (
		<article className={styles.info}>

			<Avatar
				src={photos.large || "https://i.pravatar.cc/150?img=5"}
				type={"large"} />

			<div className={styles.name_status}>
				<h1>{fullName}</h1>
				<h3>working</h3>
			</div>

			<div className={styles.description}>
				<h4>Description</h4>
				<span>{(aboutMe || `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolor laborum sapiente deleniti autem optio ab. Dolor, omnis eum. Accusamus voluptates saepe quis asperiores commodi perspiciatis aperiam veniam distinctio natus?
					Saepe ullam minima, assumenda quibusdam quam excepturi similique. Sapiente sed tempora laborum dignissimos fugit, blanditiis ullam quasi, adipisci sunt qui incidunt quaerat vero aperiam! Labore velit excepturi vero sint provident.`).slice(0, 250)} <a href="">...more</a></span>
			</div>

			{isMyProfile && <FollowBtn isFollowed={false} userId={id} />}

		</article>
	)
};

