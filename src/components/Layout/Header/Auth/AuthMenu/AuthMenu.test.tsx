import { expect, test, describe } from "vitest"
import { screen, fireEvent } from "@testing-library/react";

import { AuthMenu } from "./AuthMenu";

import { toggleTest } from "@/tests/common/toggleTest";

import { renderWithRouter } from "@/tests/helpers/renderWithRouter";

describe("AUTH MENU", () => {

	const renderSetup = (paths?: string[]) => {
		renderWithRouter({
			element: <AuthMenu />,
			paths
		});
	}

	test("render", () => {
		renderSetup();

		expect(screen.getByTestId("toggle auth menu")).toBeInTheDocument();
		expect(screen.getByTestId("avatar container")).toBeInTheDocument();
		expect(screen.getByTestId("avatar")).toBeInTheDocument();
	})

	toggleTest("auth menu", {
		element: <AuthMenu />
	}, true)

	test("toggle auth menu fast", () => {
		renderSetup();

		const toggleBtn = screen.getByTestId("toggle auth menu");

		expect(screen.queryByTestId("auth menu")).toBeNull();
		fireEvent.click(toggleBtn);
		expect(screen.queryByTestId("auth menu")).toBeInTheDocument();
		fireEvent.click(toggleBtn);
		expect(screen.queryByTestId("auth menu")).toBeNull();
	})

	test("settings buttons", () => {
		renderSetup(["/", "settings/profile"]);

		fireEvent.click(screen.getByTestId("toggle auth menu"));

		expect(screen.queryByTestId("go back")).toBeNull();
		expect(screen.queryByTestId("go to settings")).toBeInTheDocument();
		fireEvent.click(screen.getByTestId("auth menu"));
		expect(screen.queryByTestId("go to settings")).toBeNull();
		expect(screen.queryByTestId("go back")).toBeInTheDocument();
		fireEvent.click(screen.getByTestId("auth menu"));
		expect(screen.queryByTestId("go back")).toBeNull();
		expect(screen.queryByTestId("go to settings")).toBeInTheDocument();
	})
})