import styles from "./User.module.scss"

import { Avatar } from "@/components/UI/Avatar/Avatar";
import { Link } from "react-router";
import { IUser } from "./User.type";
import { FollowBtn } from "@/components/common/FollowBtn/FollowBtn";
import { useAuthStore } from "@/store/useAuthStore";
import { useMyProfileStore } from "@/store/useMyProfileStore";

export const User = ({ name, photos, followed, id }: IUser) => {

	const isAuth = useAuthStore(state => state.isAuth)
	const myId = useMyProfileStore(state => state.myId)

	return (
		<article className={styles.user}>
			<Link to={`/${id}`} title={name}>
				<Avatar src={!!photos.small ? photos.small : "https://i.pravatar.cc/150?img=5"} type={"bigger"} />
				<h2>{`${name.slice(0,15)}${name.length > 15 ? "..." : ""}`}</h2>
			</Link>
			{isAuth && myId !== id && <FollowBtn isFollowed={followed} userId={id}/>}
		</article>
	)
};

