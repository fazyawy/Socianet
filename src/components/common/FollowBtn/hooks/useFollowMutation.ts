import { useMutation, useQueryClient } from "@tanstack/react-query";

import { CHECK_IS_FOLLOW_QUERY_KEY, FOLLOW_MUTATION_KEY, USERS_QUERY_KEY } from "@/constants/queryKeys.const";
import followService from "@/services/follow.service";

import { usePaginationStore } from "@/store/usePaginationStore";
import { getCurrentPageSelector } from "@/store/selectors/currentPage.selector";

export const useFollowMutation = (haveIsFollowed: boolean, id: number) => {

	const queryClient = useQueryClient();

	const currentPage = usePaginationStore(getCurrentPageSelector);

	return useMutation({
		mutationKey: [FOLLOW_MUTATION_KEY, id],
		mutationFn: followService.follow,
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

