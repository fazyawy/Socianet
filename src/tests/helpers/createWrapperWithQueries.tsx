import { ReactNode } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const createWrapperWithQueries = () => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				retry: false,
			},
		},
	});
	return ({children}: {children: ReactNode}) => (
		<QueryClientProvider client={queryClient}>
			{children}
		</QueryClientProvider>
	);
};

