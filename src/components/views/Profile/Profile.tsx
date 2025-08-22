import styles from "./Profile.module.scss"

import { Info } from "./Info/Info";
import { Publications } from "./Publications/Publications";

export const Profile = () => {

	return (
		<main data-testid="main">
			<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Feskipaper.com%2Fimages%2Ffree-background-7.jpg" alt="" className={styles.poster} />

			<Info />

			<Publications />
		</main>
	)
};

