import { useQuery } from "@tanstack/react-query";

import { STATUS_QUERY_KEY } from "@/constants/queryKeys.const";
import profileService from "@/services/profile.service";

import { useToggle } from "@/hooks/useToggle";

export const useNameStatus = (userId: number, isMyProfile: boolean) => {

	const { data: status, isLoading: isStatusLoading, isSuccess } = useQuery({
		queryKey: [STATUS_QUERY_KEY],
		queryFn: profileService.getStatus(userId),
		select: ({ data }) => data,
	})

	const [ haveStatusInput, toggleStatusInput ] = useToggle(isSuccess && !status && isMyProfile);

	return {
		isStatusLoading,
		status,
		haveStatusInput,
		toggleStatusInput
	};
};

