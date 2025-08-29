import { render } from "@testing-library/react";

import { RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { IRender } from "@/tests/types/render.type";

import { createRouter } from "./utils/createRouter";

export const renderWithRouterAndQueries = ({ paths = ["/"], element }:IRender) => {
	const queryClient = new QueryClient();

	const router = createRouter({paths, element});

	return render(
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
};

