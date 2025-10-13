import styles from "./Publications.module.scss"

import { usePublications } from "./usePublications";

import { Post } from "./Post/Post";

import { Preloader } from "@/components/UI/Preloader/Preloader";

export const Publications = () => {
	const { data, isLoading } = usePublications();

	return (
		<section className={styles.publications}>
			<h2>Posts</h2>
			<br />
			{isLoading ? <Preloader />
				: data ? data.map(el => <Post key={el.id} {...el}/>)
					: "error"}
		</section>
	)
};



