import { useToggle } from "@/hooks/useToggle";

export const useInfoDescription = (contacts: Record<string, string | null>) => {

	const [isContacts, toggleIsContacts] = useToggle(false);

	const contactsValues = Object.keys(contacts);

	return {
		isContactsBtnShowed: Object.values(contacts).some(el => !!el),
		contactsUpdated: contactsValues.map(el => ({ name: el, link: contacts[el] })),

		isContacts,
		toggleIsContacts,
	}
};

