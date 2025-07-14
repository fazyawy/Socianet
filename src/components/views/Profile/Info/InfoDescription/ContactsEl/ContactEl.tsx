import styles from "./ContactEl.module.scss"

import { IContactEl } from "./contactEl.type";

import { ContactsIcon } from "@/components/common/ContactsIcon/ContactsIcon";

export const ContactEl = ({ link, name }: IContactEl) => {
	return (
		<>
			{!!link && <li key={name} className={styles.contact}>
				<a href={link} className={styles.button}>
					<ContactsIcon iconName={name} />
				</a>
			</li>}
		</>
	)
};

