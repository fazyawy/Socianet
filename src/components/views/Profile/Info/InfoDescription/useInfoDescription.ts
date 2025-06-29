export const useInfoDescription = (contacts: Record<string, string | null>) => {

	const contactsValues = Object.keys(contacts);

	return contactsValues.map(el => {

		return {
			name: el,
			link: contacts[el]
		}
	});
};

