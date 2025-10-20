import { useState } from "react";

import { useToggle } from "@/hooks/useToggle";

import { contactsArrType, IContacts } from "@/shared/types/profile.type";

export const useInfoDescription = (contacts: IContacts | null) => {

	const [contactsTemplate] = useState<IContacts>(contacts || {
			github: null,
			vk: null,
			facebook: null,
			instagram: null,
			twitter: null,
			website: null,
			youtube: null,
			mainLink: null,
		})

	const [isContacts, toggleIsContacts] = useToggle(false);

	const contactsKeys = Object.keys(contactsTemplate) as contactsArrType;

	return {
		isContactsBtnShowed: Object.values(contactsTemplate).some(el => !!el),
		contactsUpdated: contactsKeys.map(el => ({ name: el, link: contactsTemplate[el] })),

		isContacts,
		toggleIsContacts,
	}
};

