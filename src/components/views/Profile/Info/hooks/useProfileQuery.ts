import { PROFILE_QUERY_KEY } from "@/constants/queryKeys.const";
import profileService from "@/services/profile.service";
import { useQuery } from "@tanstack/react-query";

export const useProfileQuery = (userId: number, isMyProfile: boolean) => {
	return useQuery({
		queryKey: [PROFILE_QUERY_KEY, userId],
		queryFn: profileService.getProfile(userId),
		select: ({ data }) => data,
		enabled: !isMyProfile
	})
};

