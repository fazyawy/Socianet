import { STATUS_QUERY_KEY } from "@/constants/queryKeys.const";
import profileService from "@/services/profile.service";
import { useMyProfileStore } from "@/store/useMyProfileStore";
import { useQuery } from "@tanstack/react-query";

export const useStatusQuery = (userId: number, isMyProfile: boolean) => {

	const myStatus = useMyProfileStore(state => state.status);

	const {data, isLoading, isSuccess} = useQuery({
			queryKey: [STATUS_QUERY_KEY],
			queryFn: profileService.getStatus(userId),
			select: ({ data }) => data,

			enabled: !isMyProfile
		})

	return {
		data: isSuccess && !isMyProfile ? data : myStatus,
		isLoading,
	}
};

