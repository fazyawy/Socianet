import { Auth } from "./Auth/Auth";
import styles from "./Header.module.scss"

import { LuHeart } from "react-icons/lu";

interface IHeader {
	toggleAside: () => void,
	haveAside: boolean
}

export const Header = ({ toggleAside, haveAside }: IHeader) => {

	return (
		<header className={styles.header}>

			<button onClick={toggleAside} className={haveAside ? styles.rotate : styles.rotate_half}>
				<LuHeart size={70} className={styles.logo} />
			</button>

			<Auth />

		</header>
	)
};

