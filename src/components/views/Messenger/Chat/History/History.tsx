import styles from "./History.module.scss"
import { Message } from "./Message/Message";

import { IMessage } from "./Message/Message.type";
import { Typing } from "./Typing/Typing";

const arr = [3, 4, 5, 6, 7, 8]

const messages: IMessage[] = [
	{
		id: 0,
		isReceived: true,
		text: "Hey there! How are you doing?",
		isChecked: true
	},
	{
		id: 1,
		isReceived: false,
		text: "I'm doing great! Just finished that project we talked about.",
		isChecked: true
	},
	{
		id: 2,
		isReceived: true,
		text: "That's awesome! Can you share the details?",
		isChecked: true
	},
	...arr.map(el => ({
		id: el,
		isReceived: true,
		text: "That's awesome! Can you share the details?",
		isChecked: true
	}))
]

const isTyping: boolean = true;

export const History = () => {
	return (
		<div className={styles.history_container}>
			<div className={styles.history}>

				<div className={styles.date_separator}>
					<span>Today</span>
				</div>

				{messages.map(el => <Message key={el.id} {...el} />)}

				{isTyping && <Typing />}

			</div>
		</div>
	)
};

