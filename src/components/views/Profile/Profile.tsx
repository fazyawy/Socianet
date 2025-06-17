import styles from "./Profile.module.scss"

import { useLocation } from "react-router";

import { Info } from "./Info/Info";
import { Publications } from "./Publications/Publications";

export const Profile = () => {
	const { pathname } = useLocation();

	const id = pathname.slice(1);

	return (
		<main>
			<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Feskipaper.com%2Fimages%2Ffree-background-7.jpg" alt="" className={styles.poster} />

			<Info id={id}/>

			<Publications />

		</main>
	)
};

