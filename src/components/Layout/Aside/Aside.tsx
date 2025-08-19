import { useState } from "react";
import styles from "./Aside.module.scss"

import { AsideEl } from "./AsideEl/AsideEl";

export const Aside = () => {
	const [pages] = useState<string[]>(["/", "/messenger", "/news", "/music", "/users", "/friends", "/preloader"]);

	return (
		<aside className={styles.aside} data-testid="aside">
			<nav>

				{pages.map(el => <AsideEl key={el} el={el} />)}
			</nav>
		</aside>
	)
};

