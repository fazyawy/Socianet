import { expect, test } from "vitest"
import { screen, fireEvent } from "@testing-library/react";

import { renderWithRouterAndQueries } from "../helpers/renderWithRouterAndQueries";

import { IRender } from "@/tests/types/render.type";

export const toggleTest = (title: string, { paths = ["/"], element }:IRender, haveElBefore: boolean = false) => {
	return test(`toggle ${title}`, () => {
		renderWithRouterAndQueries({element, paths});

		const btn = screen.getByTestId(`toggle ${title}`);

		!!haveElBefore && fireEvent.click(btn);

		expect(screen.queryByTestId(title)).toBeInTheDocument();
		fireEvent.click(btn);
		expect(screen.queryByTestId(title)).toBeNull();
		fireEvent.click(btn);
		expect(screen.queryByTestId(title)).toBeInTheDocument();

	})
};

