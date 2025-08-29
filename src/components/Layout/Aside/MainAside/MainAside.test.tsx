import { screen } from "@testing-library/react"

import { renderWithRouter } from "@/tests/helpers/render/renderWithRouter"

import { MainAside } from "./MainAside"


describe("MAIN ASIDE TESTS", () => {
	test("render", () => {
		renderWithRouter({
			element: <MainAside />,
			paths: ["/", "/messenger", "/news", "/music", "/users", "/friends", "/preloader"]
		})

		const asideChilds = screen.getAllByTestId("main aside's child");

		expect(asideChilds.length).toBe(7);
	})
})