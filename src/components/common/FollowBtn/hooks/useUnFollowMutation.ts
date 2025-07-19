import { useMutation, useQueryClient } from "@tanstack/react-query";

import { CHECK_IS_FOLLOW_QUERY_KEY, UNFOLLOW_MUTATION_KEY, USERS_QUERY_KEY } from "@/constants/queryKeys.const";
import followService from "@/services/follow.service";

import { usePaginationStore } from "@/store/usePaginationStore";
import { getCurrentPageSelector } from "@/store/selectors/currentPage.selector";

export const useUnFollowMutation = (haveIsFollowed: boolean, id: number) => {

	const queryClient = useQueryClient();

	const currentPage = usePaginationStore(getCurrentPageSelector)

	return useMutation({
		mutationKey: [UNFOLLOW_MUTATION_KEY, id],
		mutationFn: followService.unfollow,
		onSuccess: () => {
			if (haveIsFollowed) {
				queryClient.invalidateQueries({
					queryKey: [USERS_QUERY_KEY, { page: currentPage }]
				});
			}
			else {
				queryClient.invalidateQueries({
					queryKey: [CHECK_IS_FOLLOW_QUERY_KEY, id]
				});
			}
		},
		retry: 2,

	})
};

