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

	toggleTest("aside", {
		element: <Layout />,
		paths: ["/", "/messenger", "/news", "/music", "/users", "/friends", "/preloader", "/settings/profile", "/settings/custom"]
	})

	// test("switch asides", () => {
	// 	renderWithRouter({
	// 		element: <Layout />,
	// 		paths: ["/", "/settings/profile"]
	// 	});

	// 	fireEvent.click(screen.getByTestId("toggle auth menu"));

	// 	expect(screen.queryByTestId("main aside")).toBeInTheDocument();
	// 	expect(screen.queryByTestId("settings aside")).toBeNull();

	// 	fireEvent.click(screen.getByTestId("auth menu"));

	// 	expect(screen.queryByTestId("main aside")).toBeNull();
	// 	expect(screen.queryByTestId("settings aside")).toBeInTheDocument();

	// 	fireEvent.click(screen.getByTestId("auth menu"));

	// 	expect(screen.queryByTestId("main aside")).toBeInTheDocument();
	// 	expect(screen.queryByTestId("settings aside")).toBeNull();
	// })
})