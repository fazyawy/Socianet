import { ReactNode } from "react";

import { render } from "@testing-library/react";

import { createBrowserRouter, RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface IRenderWithRouterAndQueries {
	path?: string,
	element: ReactNode
}

export const renderWithRouterAndQueries = ({ path = "/", element }:IRenderWithRouterAndQueries) => {
	const queryClient = new QueryClient();

	const router = createBrowserRouter([
		{
			path,
			element
		}
	])
	return render(
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
};

