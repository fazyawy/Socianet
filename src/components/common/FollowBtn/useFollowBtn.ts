import { useMutation, useQueryClient } from "@tanstack/react-query";

import { FOLLOW_MUTATION_KEY, UNFOLLOW_MUTATION_KEY, USERS_QUERY_KEY } from "@/constants/queryKeys.const";

import followService from "@/services/follow.service";

export const useFollowBtn = (isFollowed: boolean) => {

	const queryClient = useQueryClient()

	if (isFollowed) {
		return useMutation({
			mutationKey: UNFOLLOW_MUTATION_KEY,
			mutationFn: followService.unfollow,
			onSuccess: () => {
				queryClient.invalidateQueries({ queryKey: USERS_QUERY_KEY })
			},
			retry: 2,

		})
	}

	return useMutation({
		mutationKey: FOLLOW_MUTATION_KEY,
		mutationFn: followService.follow,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: USERS_QUERY_KEY })
		},
		retry: 2,

	})
};

