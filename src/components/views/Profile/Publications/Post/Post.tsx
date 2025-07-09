import styles from "./Post.module.scss"

import { IPublications } from "@/services/types/publications.type";

import { capitalizeFirstLetter } from "@/utils/string/capitalizeFirstLetter";

export const Post = ({id, title, body}:IPublications) => {
	return (
		<article className={styles.post}>
			<h3>{id}. {capitalizeFirstLetter(title)}</h3>
			<span>{capitalizeFirstLetter(body)}</span>
		</article>
	)
};
