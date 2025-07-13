import styles from "./Aside.module.scss"

import { AsideEl } from "./AsideEl/AsideEl";

export const Aside = () => {

	const pages: string[] = ["/", "/messenger", "/news", "/music", "/users", "/friends", "/preloader"]

	return (
		<aside className={styles.aside}>
			<nav>

				{pages.map(el => <AsideEl key={el} el={el}/>)}
			</nav>
		</aside>
	)
};

