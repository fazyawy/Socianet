import { useQuery } from "@tanstack/react-query";

import { PROFILE_QUERY_KEY } from "@/constants/queryKeys.const";
import profileService from "@/services/profile.service";

import { useMyProfileStore } from "@/store/useMyProfileStore";

export const useProfileQuery = (userId: number, isMyProfile: boolean) => {
	const myProfile = useMyProfileStore(state => state.myProfile)

	const { data: profile, isLoading, isSuccess } = useQuery({
		queryKey: [PROFILE_QUERY_KEY, userId],
		queryFn: profileService.getProfile(userId),
		select: ({ data }) => data,
		enabled: !isMyProfile
	})

	return {
		data: isSuccess && !isMyProfile ? { ...profile } : { ...myProfile },
		isLoading
	}
};

