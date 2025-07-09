import { MY_PROFILE_QUERY_KEY } from "@/constants/queryKeys.const";
import profileService from "@/services/profile.service";
import { useQuery } from "@tanstack/react-query";

export const useMyProfile = (myId: number, isAuthChecked: boolean) => {
	return useQuery({
		queryKey: MY_PROFILE_QUERY_KEY,
		queryFn: profileService.getProfile(myId),

		select: ({ data }) => data,
		retry: 2,

		enabled: isAuthChecked,
	})
};

