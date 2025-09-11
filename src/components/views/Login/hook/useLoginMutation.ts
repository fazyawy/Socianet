import { useMutation, useQueryClient } from "@tanstack/react-query";

import { AUTH_QUERY_KEY, LOGIN_MUTATION_KEY } from "@/constants/queryKeys.const";

import authService from "@/services/auth.service";

import { useMyProfileStore } from "@/store/useMyProfileStore";

export const useLoginMutation = () => {
	const setMyId = useMyProfileStore(state => state.setMyId);

	const queryClient = useQueryClient();

	return useMutation({
			mutationKey: LOGIN_MUTATION_KEY,
			mutationFn: authService.login,

			onSuccess: ({data}) => {
				queryClient.invalidateQueries({
					queryKey: [AUTH_QUERY_KEY]
				})

				setMyId(data?.data.userId)
			},

			onError: () => {
				console.log("error")
			}
		})
};

