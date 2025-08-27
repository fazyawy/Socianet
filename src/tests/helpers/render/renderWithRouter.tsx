import { render } from "@testing-library/react";

import { createBrowserRouter, RouterProvider } from "react-router";

import { IRenderWithRouter } from "./renderWithRouter.type";
import { createChildRoute } from "./createChildRoute";


export const renderWithRouter = ({ paths = ["/"], element }:IRenderWithRouter) => {
	const router = createBrowserRouter([{
		path: "/",
		element,
		children: createChildRoute({ paths, element })
	}])
	return render(
		<RouterProvider router={router} />
	);
};

