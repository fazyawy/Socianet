import { expect, test, describe } from "vitest"
import { screen } from "@testing-library/react";

import { renderWithRouterAndQueries } from "@/tests/helpers/renderWithRouterAndQueries";

import { InfoDesription } from "./InfoDesription";
import { toggleTest } from "@/tests/common/toggleTest";
import { IContacts } from "@/shared/types/profile.type";


describe("INFO DESCRIPTION TESTS", () => {

	const defaultContacts: IContacts = {
			github: "https://github.com/fazyawy",
			vk: null,
			facebook: null,
			instagram: null,
			twitter: null,
			website: null,
			youtube: null,
			mainLink: null,
		}

	const renderSetup = (haveContacts?: boolean, paths?: string[]) => {

		renderWithRouterAndQueries({
			element: <InfoDesription description="..." contacts={haveContacts ? defaultContacts : null} />,
			paths
		});
	}

	toggleTest("contacts", {
		element: <InfoDesription description="..." contacts={defaultContacts} />
	}, true)

	test("have toggle contacts", () => {
		renderSetup(true);
		expect(screen.getByTestId("toggle-contacts")).toBeInTheDocument();
	})

	test("have not toggle contacts", () => {
		renderSetup();
		expect(screen.queryByTestId("toggle-contacts")).toBeNull();
	})

})