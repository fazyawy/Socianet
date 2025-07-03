import styles from "./InputContainer.module.scss";

import { FaSmile } from "react-icons/fa";

export const InputContainer = ({...input}) => {
	return (
		<div className={styles.input_container}>
			<input
				type="text"
				className={styles.input_field}
				placeholder="Type a message"
				{...input} />
			<button className={styles.emoji_btn} title="Emoji">
				<FaSmile />
			</button>
		</div>
	)
};

