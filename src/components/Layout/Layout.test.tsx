import { expect, test, describe } from "vitest"
import { fireEvent, screen } from "@testing-library/react";

import { Layout } from "./Layout"

import { renderWithRouterAndQueries } from "@/tests/helpers/renderWithRouterAndQueries";

import { toggleTest } from "@/tests/common/toggleTest";
import { loginHookTest } from "@/tests/common/loginHookTest";


describe("LAYOUT TESTS", () => {

	const renderSetup = (paths?: string[]) => {
		renderWithRouterAndQueries({
			element: <Layout />,
			paths
		});
	}

	test("render", () => {
		renderSetup();
		expect(screen.getByTestId("layout-container")).toBeInTheDocument();
		expect(screen.getByTestId("header")).toBeInTheDocument();
		// screen.debug();
	})

	toggleTest("aside", {
		element: <Layout />,
		paths: ["/", "/messenger", "/news", "/music", "/users", "/friends", "/preloader", "/settings/profile", "/settings/custom"]
	})

	loginHookTest();

	// test("switch asides", async() => {
	// 	renderWithRouterAndQueries({
	// 		element: <Layout />,
	// 		paths: ["/", "/settings/profile"]
	// 	});

	// 	expect(screen.getByTestId("login button")).toBeInTheDocument();

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

	test("check login btn", () => {
		renderSetup(["/", "/auth/login", "/users"]);

		expect(screen.getByTestId("login button")).toBeInTheDocument();

		fireEvent.click(screen.getByTestId("login button"));

		expect(screen.queryByTestId("login button")).toBeNull();

		fireEvent.click(screen.getByTestId("main-link-Users"));

		expect(screen.getByTestId("login button")).toBeInTheDocument();
	})

})