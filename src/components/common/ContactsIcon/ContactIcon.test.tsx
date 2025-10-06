import { render, screen } from "@testing-library/react";

import { ContactsIcon } from "./ContactsIcon";
import { IconNameType } from "./ContactIcon.type";

describe("CONTACT ICONS TEST", () => {

	const renderSetup = (iconName: IconNameType) => {
		render(<ContactsIcon iconName={iconName}/>)
	}

	"github"
"vk"
"facebook"
"instagram"
"twitter"
"website"
"youtube"
"mainLink"

	test("github icon test", () => {
		renderSetup("github");

		expect(screen.getByTestId("github-icon")).toBeInTheDocument();
	})

	test("vk icon test", () => {
		renderSetup("vk");

		expect(screen.getByTestId("vk-icon")).toBeInTheDocument();
	})

	test("facebook icon test", () => {
		renderSetup("facebook");

		expect(screen.getByTestId("facebook-icon")).toBeInTheDocument();
	})

	test("instagram icon test", () => {
		renderSetup("instagram");

		expect(screen.getByTestId("instagram-icon")).toBeInTheDocument();
	})

	test("twitter icon test", () => {
		renderSetup("twitter");

		expect(screen.getByTestId("twitter-icon")).toBeInTheDocument();
	})

	test("website icon test", () => {
		renderSetup("website");

		expect(screen.getByTestId("website-icon")).toBeInTheDocument();
	})

	test("youtube icon test", () => {
		renderSetup("youtube");

		expect(screen.getByTestId("youtube-icon")).toBeInTheDocument();
	})

	test("github icon test", () => {
		renderSetup("github");

		expect(screen.getByTestId("github-icon")).toBeInTheDocument();
	})

	test("mainLink icon test", () => {
		renderSetup("mainLink");

		expect(screen.getByTestId("mainLink-icon")).toBeInTheDocument();
	})

	test("null icon test", () => {
		renderSetup(null);

		expect(screen.getByTestId("default-icon")).toBeInTheDocument();
	})

})