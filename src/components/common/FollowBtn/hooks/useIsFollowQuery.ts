import { useQuery } from "@tanstack/react-query";

import { CHECK_IS_FOLLOW_QUERY_KEY } from "@/constants/queryKeys.const";
import followService from "@/services/follow.service";

import { getIsAuthSelector } from "@/store/selectors/auth.selector";
import { useAuthStore } from "@/store/useAuthStore";

export const useIsFollowQuery = (haveIsFollowed: boolean, id: number) => {

	const isAuth = useAuthStore(getIsAuthSelector)

	return useQuery({
			queryKey: [CHECK_IS_FOLLOW_QUERY_KEY, id],
			queryFn: followService.getIsFollow(id),

			select: ({ data }) => data,
			enabled: !haveIsFollowed && isAuth === true,
			retry: 2
		})
};

