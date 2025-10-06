import { FaDog, FaFacebook, FaGithub, FaHeart, FaInstagram, FaRobot, FaTwitter, FaVk, FaYoutube } from "react-icons/fa";
import { IContactsIcon } from "./ContactIcon.type";

export const ContactsIcon = ({ iconName }: IContactsIcon) => {

	switch (iconName) {
		case "github": {
			return <FaGithub data-testid={"github-icon"} />;
		}
		case "vk": {
			return <FaVk data-testid={"vk-icon"} />;
		}
		case "facebook": {
			return <FaFacebook data-testid={"facebook-icon"} />;
		}
		case "instagram": {
			return <FaInstagram data-testid={"instagram-icon"} />;
		}
		case "twitter": {
			return <FaTwitter data-testid={"twitter-icon"} />;
		}
		case "website": {
			return <FaRobot data-testid={"website-icon"} />;
		}
		case "youtube": {
			return <FaYoutube data-testid={"youtube-icon"} />;
		}
		case "mainLink": {
			return <FaHeart data-testid={"mainLink-icon"} />;
		}
		default: {
			return <FaDog data-testid={"default-icon"} />;
		}
	}
};