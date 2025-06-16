import styles from "./Profile.module.scss"

import { useLocation } from "react-router";

import { Info } from "./Info/Info";
import { Publications } from "./Publications/Publications";

import { IInfo } from "./Info/Info.type";
import { useMyAvatarStore } from "@/store/useMyAvatarStore";

export const Profile = () => {
	const { pathname } = useLocation();

	const id = pathname.slice(1);

	const myAvatar = useMyAvatarStore(state => state.myAvatar);

	const stranger: IInfo = {
		id: Number(id),
		name: `name ${id}`,
		src: "https://i.pravatar.cc/150?img=5"
	}

	const defaultUser: IInfo = {
	name: "Fazyawy",
	src: myAvatar,
	id: 2
}

	const data = !!Number(id) ? stranger : defaultUser


	return (
		<main>
			<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Feskipaper.com%2Fimages%2Ffree-background-7.jpg" alt="" className={styles.poster} />

			<Info {...data}/>

			<Publications />

		</main>
	)
};

