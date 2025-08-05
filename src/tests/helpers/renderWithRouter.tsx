import { ReactNode } from "react";

import { render } from "@testing-library/react";

import { createBrowserRouter, RouterProvider } from "react-router";

interface IRenderWithRouter {
	path?: string,
	element: ReactNode
}

export const renderWithRouter = ({ path = "/", element }:IRenderWithRouter) => {
	const router = createBrowserRouter([
		{
			path,
			element
		}
	])
	return render(
		<RouterProvider router={router} />
	);
};

