import usersService from "@/services/users.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FOLLOW_MUTATION_KEY, UNFOLLOW_MUTATION_KEY, USERS_QUERY_KEY } from "@/constants/queryKeys.const";

export const useFollowBtn = (isFollowed: boolean) => {

	const queryClient = useQueryClient()

	if(isFollowed) {
		return useMutation({
		mutationKey: UNFOLLOW_MUTATION_KEY,
		mutationFn: usersService.unfollow,
		onSuccess: () => {
			queryClient.invalidateQueries({queryKey: USERS_QUERY_KEY})
		},
		retry: 2,

	})
	}
	else {
		return useMutation({
		mutationKey: FOLLOW_MUTATION_KEY,
		mutationFn: usersService.follow,
		onSuccess: () => {
			queryClient.invalidateQueries({queryKey: USERS_QUERY_KEY})
		},
		retry: 2,

	})
	}
};

