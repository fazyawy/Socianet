import { expect, test, describe } from "vitest"
import { screen } from "@testing-library/react";

import { Layout } from "./Layout"

import { renderWithRouterAndQueries } from "@/tests/helpers/renderWithRouterAndQueries";
import { toggleTest } from "@/tests/common/toggleTest";

describe("LAYOUT TESTS", () => {

	test("render", () => {
		renderWithRouterAndQueries({
			element: <Layout />
		})
		expect(screen.getByTestId("layout-container")).toBeInTheDocument();
		expect(screen.getByTestId("header")).toBeInTheDocument();
		// screen.debug();
	})

	toggleTest("aside", <Layout />)
})