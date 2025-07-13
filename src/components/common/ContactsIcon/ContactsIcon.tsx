import { FaDog, FaFacebook, FaGithub, FaHeart, FaInstagram, FaRobot, FaTwitter, FaVk, FaYoutube } from "react-icons/fa";

interface IContactsIcon {
	iconName: string | null
}

export const ContactsIcon = ({ iconName }: IContactsIcon) => {

	switch (iconName) {
		case "github": {
			return <FaGithub />;
		}
		case "vk": {
			return <FaVk />;
		}
		case "facebook": {
			return <FaFacebook />;
		}
		case "instagram": {
			return <FaInstagram />;
		}
		case "twitter": {
			return <FaTwitter />;
		}
		case "website": {
			return <FaRobot />;
		}
		case "youtube": {
			return <FaYoutube />;
		}
		case "mainLink": {
			return <FaHeart />;
		}
		default: {
			return <FaDog />;
		}
	}
};