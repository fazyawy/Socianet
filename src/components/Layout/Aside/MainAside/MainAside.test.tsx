import { screen } from "@testing-library/react"

import { renderWithRouter } from "@/tests/helpers/renderWithRouter"

import { MainAside } from "./MainAside"


describe("MAIN ASIDE TESTS", () => {
	test("render", () => {
		renderWithRouter({
			element: <MainAside />,
			paths: ["/", "/messenger", "/news", "/music", "/users", "/friends", "/preloader"]
		})

		const mainAside = screen.getByTestId("main aside");

		expect(mainAside).toBeInTheDocument();
	})
})