import styles from "./Search.module.scss"

import { useSearch } from "./useSearch";

import { FaSearch, FaTimes } from "react-icons/fa";

import { Input } from "@/components/common/Input/Input";
import { ISearch } from "./search.type";

export const Search = ({ isFriendsPage, isSearch = true, toggleIsSearch }: ISearch) => {

	const { input, title, onClearClick } = useSearch(isFriendsPage);

	return (
		<div className={styles.search}>
			{isSearch ?
				<Input register={input} title={"Find user"} className={styles.search_input} /> :
				<h1
					className={styles.title}
					title={title}>
					{title} <FaSearch onClick={toggleIsSearch} title={`Find ${title}`}/>
				</h1>}
			{!!input.value && <FaTimes title="clear search value" onClick={onClearClick} />}
		</div>
	)
};

