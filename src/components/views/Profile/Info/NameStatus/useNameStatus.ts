import { useQuery } from "@tanstack/react-query";

import { STATUS_QUERY_KEY } from "@/constants/queryKeys.const";
import profileService from "@/services/profile.service";

import { useToggle } from "@/hooks/useToggle";
import { useMyProfileStore } from "@/store/useMyProfileStore";

export const useNameStatus = (userId: number, isMyProfile: boolean) => {

	const myStatus = useMyProfileStore(state => state.status)

	const { data: status, isLoading: isStatusLoading, isSuccess } = useQuery({
		queryKey: [STATUS_QUERY_KEY],
		queryFn: profileService.getStatus(userId),
		select: ({ data }) => data,

		enabled: !isMyProfile
	})

	const [ haveStatusInput, toggleStatusInput ] = useToggle(true);

	// console.log(status)

	return {
		isStatusLoading,
		status: isMyProfile ? myStatus : status,
		// haveStatusInput: isMyProfile && !!status && haveStatusInput,
		haveStatusInput: true,
		toggleStatusInput,
	};
};

