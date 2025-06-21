import { capitalizeFirstLetter } from "@/utils/string/capitalizeFirstLetter";

import styles from "./Publications.module.scss"
import { usePublications } from "./usePublications";
import { IPost } from "./Publications.type";

export const Publications = () => {
	const { data, isLoading } = usePublications()

	// console.log(data);

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

export const Post = ({id, title, body}:IPost) => {
	return (
		<article className={styles.post}>
			<h3>{id}. {capitalizeFirstLetter(title)}</h3>
			<span>{capitalizeFirstLetter(body)}</span>
		</article>
	)
};



