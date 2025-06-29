import { IProfile } from "@/shared/types/profile.type";
import styles from "./InfoDescription.module.scss"
import { useInfoDescription } from "./useInfoDescription";
import { ContactsIcon } from "@/components/common/ContactsIcon/ContactsIcon";

interface IInfoDescription extends Pick<IProfile, "contacts"> {
	description: string
}

export const InfoDesription = ({ description, contacts }: IInfoDescription) => {

	const contactsUpdated = useInfoDescription(contacts)

	return (
		<article className={styles.info_description}>

			<h4>Description</h4>

			<div className={styles.description_content}>
				<span>{description} <button className={styles.open_contacts}>{description.length == 250 && "..."}more</button></span>

				<ul className={styles.contacts}>
					{contactsUpdated.map(el => (!!el.link && <li key={el.name}><a href={el.link}><ContactsIcon iconName={el.name} /></a></li>))}
				</ul>

			</div>

		</article>
	)
};

