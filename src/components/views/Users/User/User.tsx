import styles from "./User.module.scss"

import { IUser } from "./User.type";
import { useUser } from "./useUser";

import { Link } from "react-router";

import { Avatar } from "@/components/common/Avatar/Avatar";
import { FollowBtn } from "@/components/common/FollowBtn/FollowBtn";

export const User = ({ name, photos, followed, id }: IUser) => {

	const haveFollowBtn = useUser(id);

	return (
		<article className={styles.user}>
			<Link to={`/${id}`} title={name}>
				<Avatar src={photos.small} type={"bigger"} className={styles.avatar} />
				<h2>{`${name.split("").slice(0,15).join("")}${name.length > 15 ? "..." : ""}`}</h2>
			</Link>
			{haveFollowBtn && <FollowBtn isFollowed={followed} userId={id}/>}
		</article>
	)
};

