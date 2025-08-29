import { useMutation, useQueryClient } from "@tanstack/react-query";

import { AUTH_QUERY_KEY, LOGOUT_MUTATION_KEY } from "@/constants/queryKeys.const";
import authService from "@/services/auth.service";

export const useSettingsAside = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationKey: LOGOUT_MUTATION_KEY,
		mutationFn: authService.logout,

		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [AUTH_QUERY_KEY]
			})
		}
	})
};

