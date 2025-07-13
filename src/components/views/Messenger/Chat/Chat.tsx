import styles from "./Chat.module.scss"
import { Header } from "./Header/Header";
import { History } from "./History/History";
import { MessageInput } from "./MessageInput/MessageInput";

export const Chat = () => {
	return (
		<section className={styles.chat}>
			{/* <!-- Conversation Header --> */}
			<Header />

			{/* <!-- Message History --> */}
			<History />

			{/* <!-- Message Input Panel --> */}
			<MessageInput />
		</section>
	)
};

