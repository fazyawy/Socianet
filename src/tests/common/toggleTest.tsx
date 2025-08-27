import { ReactNode } from "react";
import { expect, test } from "vitest"
import { screen, fireEvent } from "@testing-library/react";


import { renderWithRouterAndQueries } from "../helpers/render/renderWithRouterAndQueries";

export const toggleTest = (title: string, component: ReactNode, haveElBefore?: boolean) => {
	return test(`toggle ${title}`, () => {
		renderWithRouterAndQueries({
			element: component
		})
		const btn = screen.getByTestId(`toggle ${title}`);

		!!haveElBefore && fireEvent.click(btn);

		expect(screen.queryByTestId(title)).toBeInTheDocument();
		fireEvent.click(btn);
		expect(screen.queryByTestId(title)).toBeNull();
		fireEvent.click(btn);
		expect(screen.queryByTestId(title)).toBeInTheDocument();

	})
};

