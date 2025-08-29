import { render } from "@testing-library/react";

import { RouterProvider } from "react-router";

import { IRender } from "@/tests/types/render.type";

import { createRouter } from "./utils/createRouter";


export const renderWithRouter = ({ paths = ["/"], element }:IRender) => {
	const router = createRouter({paths, element});

	return render(
		<RouterProvider router={router} />
	);
};

