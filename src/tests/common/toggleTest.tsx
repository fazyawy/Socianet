import { ReactNode } from "react";
import { expect, test } from "vitest"
import { screen, fireEvent } from "@testing-library/react";


import { renderWithRouterAndQueries } from "../helpers/renderWithRouterAndQueries";

export const toggleTest = (title: string, component: ReactNode) => {
	return test(`toggle ${title}`, () => {
		renderWithRouterAndQueries({
			element: component
		})
		const btn = screen.getByTestId(`toggle ${title}`);

		expect(screen.queryByTestId(title)).toBeInTheDocument();
		fireEvent.click(btn);
		expect(screen.queryByTestId(title)).toBeNull();
		fireEvent.click(btn);
		expect(screen.queryByTestId(title)).toBeInTheDocument();

	})
};

