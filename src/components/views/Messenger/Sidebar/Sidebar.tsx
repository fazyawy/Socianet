import styles from "./Sidebar.module.scss"

// import { Profile } from "./Profile/Profile";
import { Search } from "./Search/Search";
import { ContactsList } from "./ContactsList/ContactsList";

export const Sidebar = () => {
	return (
		<aside className={styles.sidebar}>
			{/* <Profile /> */}
			<Search />
			<ContactsList />
		</aside>
	)
};

