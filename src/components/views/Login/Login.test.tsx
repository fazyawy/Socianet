import { expect, test, describe } from "vitest"
import { screen } from "@testing-library/react";

import { Login } from "./Login";

import { renderWithRouterAndQueries } from "@/tests/helpers/render/renderWithRouterAndQueries";

describe("LAYOUT TESTS", () => {

	test("render", () => {
		renderWithRouterAndQueries({
			element: <Login />
		})
		expect(screen.getByTestId("login form")).toBeInTheDocument();
		expect(screen.getAllByTestId("form input").length).toBe(2);
		// screen.debug();
	})
})