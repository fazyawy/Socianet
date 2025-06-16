import styles from "./ContactsList.module.scss"

import { IContact } from "./Contact/Contact.type";
import { Contact } from "./Contact/Contact";

const contacts_list: IContact[] = [
	{
		id: 1,
		avatar: "https://i.pravatar.cc/150?img=5",
		isOnline: true,
		name: "John Doe",
		message_time: "12:30 PM",
		message_preview: "Hey, how are you doing?",
		unreadBadge: 0,
		isActive: true
	},
	{
		id: 2,
		avatar: "https://i.pravatar.cc/150?img=3",
		isOnline: true,
		name: "Jane Smith",
		message_time: "Yesterday",
		message_preview: "Meeting at 2pm tomorrow",
		unreadBadge: 3,
		isActive: false
	},
	{
		id: 3,
		avatar: "https://i.pravatar.cc/150?img=1",
		isOnline: false,
		name: "Jane Smith",
		message_time: "10.01.2025",
		message_preview: "Meeting at 2pm tomorrow",
		unreadBadge: 4,
		isActive: false
	},
	{
		id: 4,
		avatar: "https://i.pravatar.cc/150?img=2",
		isOnline: false,
		name: "Jane Smith",
		message_time: "Yesterday",
		message_preview: "Meeting at 2pm tomorrow",
		unreadBadge: 1,
		isActive: false
	},
	{
		id: 5,
		avatar: "https://i.pravatar.cc/150?img=4",
		isOnline: true,
		name: "Jane Smith",
		message_time: "Yesterday",
		message_preview: "Meeting at 2pm tomorrow",
		unreadBadge: 0,
		isActive: false
	}
]

export const ContactsList = () => {
	return (
		<div className={styles.contacts_list}>

			{contacts_list.map(el => <Contact key={el.id} {...el}/>)}

		</div>
	)
};

