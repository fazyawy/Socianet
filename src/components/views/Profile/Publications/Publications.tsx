import styles from "./Publications.module.scss"

import { usePublications } from "./usePublications";

import { Post } from "./Post/Post";

export const Publications = () => {
	const { data, isLoading } = usePublications()

	return (
		<section className={styles.publications}>
			<h2>Posts</h2>
			<br />
			{isLoading ? "Loading..."
				: data ? data.map(el => <Post key={el.id} {...el}/>)
					: "error"}
		</section>
	)
};



