import styles from "./MainAside.module.scss"

import { useState } from "react";

import { MainAsideEl } from "./MainAsideEl/MainAsideEl";

export const MainAside = () => {
	const [pages] = useState<string[]>(["/", "/messenger", "/news", "/music", "/users", "/friends", "/preloader"]);

	return (
		<nav data-testid="main aside" className={styles.main_aside}>

			{pages.map(el => <MainAsideEl key={el} el={el} />)}
		</nav>
	)
};

