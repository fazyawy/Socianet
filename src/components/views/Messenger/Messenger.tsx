import { Chat } from "./Chat/Chat";
import styles from "./Messenger.module.scss"
import { Sidebar } from "./Sidebar/Sidebar";

export const Messenger = () => {
	return (
		<main className={styles.main}>
			<Sidebar />
			<Chat />
		</main>
	)
};

