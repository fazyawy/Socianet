import { useQuery } from "@tanstack/react-query";

import { AUTH_QUERY_KEY } from "@/constants/queryKeys.const";
import authService from "@/services/auth.service";

export const useIsAuth = () => {
	return useQuery({
		queryKey: [AUTH_QUERY_KEY],
		queryFn: authService.getAuth,

		select: ({ data }) => data,
		retry: 2,
	})
};

