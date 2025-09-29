import { useQuery } from "@tanstack/react-query";

import { CHECK_IS_FOLLOW_QUERY_KEY } from "@/constants/queryKeys.const";
import followService from "@/services/follow.service";

export const useIsFollowQuery = (isEnabled: boolean, id: number) => {

	return useQuery({
			queryKey: [CHECK_IS_FOLLOW_QUERY_KEY, id],
			queryFn: followService.getIsFollow(id),

			select: ({ data }) => data,
			enabled: isEnabled,
			retry: 2
		})
};

