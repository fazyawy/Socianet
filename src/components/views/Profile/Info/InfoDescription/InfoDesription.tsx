import styles from "./InfoDescription.module.scss"

import { useInfoDescription } from "./useInfoDescription";

import { MdOutlineKeyboardArrowUp } from "react-icons/md";

import { IProfile } from "@/shared/types/profile.type";
import { ContactEl } from "./ContactsEl/ContactEl";

interface IInfoDescription extends Pick<IProfile, "contacts"> {
	description: string
}

export const InfoDesription = ({ description, contacts }: IInfoDescription) => {

	const { contactsUpdated, isContactsBtnShowed, isContacts, toggleIsContacts } = useInfoDescription(contacts)

	return (
		<article className={styles.info_description}>

			<h4>Description</h4>

			<div className={styles.description_content}>
				<span>{description} {description.length == 250 && "..."}
					{isContactsBtnShowed && !isContacts && <button onClick={toggleIsContacts} className={styles.open_contacts}>more</button>}
					{isContactsBtnShowed && isContacts && <button onClick={toggleIsContacts} className={styles.open_contacts}><MdOutlineKeyboardArrowUp size={15} className={styles.close_contacts} /></button>}
				</span>

				{isContacts &&
					<ul className={styles.contacts}>
						{contactsUpdated.map(el => <ContactEl key={el.name} {...el} />)}
					</ul>}

			</div>

		</article>
	)
};

