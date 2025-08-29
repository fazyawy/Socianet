import { expect, test, describe } from "vitest"
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

	test("input", () => {
		renderWithRouterAndQueries({
			element: <Login />
		})

		const inputList = screen.getAllByTestId("input");

		expect(inputList[0]).toContainHTML("");
		expect(inputList[1]).toContainHTML("");

		// userEvent.type(inputList[0], "123123");
		// userEvent.type(inputList[1], "123123");

		// expect(inputList[0]).toContainHTML("123123");
		// expect(inputList[1]).toContainHTML("123123");
	})
})