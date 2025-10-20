import styles from "./InfoDescription.module.scss"

import { useInfoDescription } from "./useInfoDescription";

import { MdOutlineKeyboardArrowUp } from "react-icons/md";

import { IContacts } from "@/shared/types/profile.type";
import { ContactEl } from "./ContactsEl/ContactEl";

interface IInfoDescription {
	description: string
	contacts: IContacts | null
}

export const InfoDesription = ({ description, contacts }: IInfoDescription) => {

	const { contactsUpdated, isContactsBtnShowed, isContacts, toggleIsContacts } = useInfoDescription(contacts)

	return (
		<article className={styles.info_description} data-testid={"info-description"}>

			<h4>Description</h4>

			<div className={styles.description_content}>

				<span>{description} {description.length == 250 && "..."}

					{isContactsBtnShowed && (
						isContacts ?
							<button onClick={toggleIsContacts} className={styles.open_contacts} data-testid={"toggle-contacts"}>
								<MdOutlineKeyboardArrowUp size={15} className={styles.close_contacts} />
							</button> :
							<button onClick={toggleIsContacts} className={styles.open_contacts} data-testid={"toggle-contacts"}>more</button>
					)}

				</span>

				{isContactsBtnShowed && isContacts &&
					<ul className={styles.contacts} data-testid={"contacts"}>
						{contactsUpdated.map(el => <ContactEl key={el.name} {...el} />)}
					</ul>}

			</div>

		</article>
	)
};

