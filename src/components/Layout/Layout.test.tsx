import { expect, test } from "vitest"
import { screen } from "@testing-library/react";

import { Layout } from "./Layout"

import { renderWithRouter } from "@/tests/helpers/renderWithRouter";

test("render layout", () => {
	renderWithRouter({
		element: <Layout />
	})
	const helloWorldEl = screen.getByText(/hello world/i);
	expect(helloWorldEl).toBeInTheDocument();
})