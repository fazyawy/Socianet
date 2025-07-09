import { useQuery } from "@tanstack/react-query";

import { MY_STATUS_QUERY_KEY } from "@/constants/queryKeys.const";
import profileService from "@/services/profile.service";

export const useMyStatus = (myId: number, isAuthChecked: boolean) => {
	return useQuery({
			queryKey: [MY_STATUS_QUERY_KEY],
			queryFn: profileService.getStatus(myId),

			select: ({ data }) => data,
			retry: 2,

			enabled: isAuthChecked,
		})
};

