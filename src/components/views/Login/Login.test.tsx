import { expect, test, describe } from "vitest"
import { screen } from "@testing-library/react";

import { Login } from "./Login";

import { renderWithRouterAndQueries } from "@/tests/helpers/render/renderWithRouterAndQueries";

describe("LOGIN TESTS", () => {

	const renderSetup = () => renderWithRouterAndQueries({
		element: <Login />,
		paths: ["/", "/messenger", "/news", "/music", "/users", "/friends", "/preloader", "/settings/profile", "/settings/custom"]
	})

	test("render", () => {
		renderSetup();
		expect(screen.getByTestId("login form")).toBeInTheDocument();
		expect(screen.getAllByTestId("form input").length).toBe(2);
		// screen.debug();
	})
})