import { screen } from "@testing-library/react"

import { renderWithRouterAndQueries } from "@/tests/helpers/render/renderWithRouterAndQueries"

import { SettingsAside } from "./SettingsAside"


describe("SETTINGS ASIDE TESTS", () => {
	test("render", () => {
		renderWithRouterAndQueries({
			element: <SettingsAside />,
			paths: ["/settings/profile", "/settings/custom"]
		})

		const asideChilds = screen.getAllByTestId("settings aside's child");

		expect(asideChilds.length).toBe(3);
	})
})