import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { CHECK_IS_FOLLOW_QUERY_KEY, FOLLOW_MUTATION_KEY, UNFOLLOW_MUTATION_KEY, USERS_QUERY_KEY } from "@/constants/queryKeys.const";

import followService from "@/services/follow.service";
import { usePaginationStore } from "@/store/usePaginationStore";
import { useAuthStore } from "@/store/useAuthStore";
import { getIsAuthSelector } from "@/store/selectors/auth.selector";

export const useFollowBtn = (isFollowed: boolean | undefined, id: number) => {

	const isAuth = useAuthStore(getIsAuthSelector)

	const { data: isFollow, refetch } = useQuery({
		queryKey: [CHECK_IS_FOLLOW_QUERY_KEY, id],
		queryFn: followService.getIsFollow(id as number),

		select: ({ data }) => data,
		enabled: isFollowed === undefined && isAuth === true,
		retry: 2
	})

	console.log(isFollow);

	const queryClient = useQueryClient();

	const currentPage = usePaginationStore(state => state.currentPage);

	const isFollowBtn = isFollow || isFollowed;

	if (isFollowBtn) {
		return {
			...useMutation({
				mutationKey: UNFOLLOW_MUTATION_KEY,
				mutationFn: followService.unfollow,
				onSuccess: () => {
					if (isFollowed === undefined) refetch();
					else queryClient.invalidateQueries({
						queryKey: [USERS_QUERY_KEY, { page: currentPage }]
					});
				},
				retry: 2,

			}),
			isFollowBtn
		}
	}
	return {
		...useMutation({
			mutationKey: FOLLOW_MUTATION_KEY,
			mutationFn: followService.follow,
			onSuccess: () => {
				if (isFollowed === undefined) refetch();
				else queryClient.invalidateQueries({
					queryKey: [USERS_QUERY_KEY, { page: currentPage }]
				});
			},
			retry: 2,

		}),
		isFollowBtn
	}
};

