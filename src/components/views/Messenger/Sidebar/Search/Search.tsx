import { FaSearch, FaTimes } from "react-icons/fa";
import styles from "./Search.module.scss"
import { useInput } from "@/hooks/useInput";

export const Search = () => {

	const {...input} = useInput<string>("");

	return (
		<div className={styles.search}>
			<FaSearch className={styles.icon} />
			<input type="text" placeholder="Search or start new chat" {...input}/>
			<button className={styles.clear} title="Clear search value">
				<FaTimes className={styles.icon}/>
			</button>
		</div>
	)
};

