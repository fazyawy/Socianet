import { expect, test } from "vitest"
import { screen } from "@testing-library/react";

import { Layout } from "./Layout"

import { renderWithRouterAndQueries } from "@/tests/helpers/renderWithRouterAndQueries";

test("render layout", () => {
	renderWithRouterAndQueries({
		element: <Layout />
	})
	const helloWorldEl = screen.getByText(/profile/i);
	expect(helloWorldEl).toBeInTheDocument();
})