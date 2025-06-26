import { FaGithub, FaVk, FaFacebook, FaInstagram, FaTwitter, FaRobot, FaYoutube, FaHeart, FaDog } from 'react-icons/fa';
import { ReactElement } from "react";
import { IconType } from 'react-icons';

export const useInfoDescription = (contacts: Record<string, string | null>) => {

	const contactsValues = Object.entries(contacts);

	return contactsValues.map(el => {

		let icon: ReactElement<IconType>;

		switch (el[0]) {
			case "github": {
				icon = <FaGithub />
				break;
			}
			case "vk": {
				icon = <FaVk />
				break;
			}
			case "facebook": {
				icon = <FaFacebook />
				break;
			}
			case "instagram": {
				icon = <FaInstagram />
				break;
			}
			case "twitter": {
				icon = <FaTwitter />
				break;
			}
			case "website": {
				icon = <FaRobot />
				break;
			}
			case "youtube": {
				icon = <FaYoutube />
				break;
			}
			case "mainLink": {
				icon = <FaHeart />
				break;
			}
			default: {
				icon = <FaDog />
			}
		}

		return {
			name: el[0],
			link: el[1],
			icon
		}
	});
};

