import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { STATUS_QUERY_KEY } from "@/constants/queryKeys.const";
import profileService from "@/services/profile.service";

import { useMyProfileStore } from "@/store/useMyProfileStore";

export const useNameStatus = (userId: number, isMyProfile: boolean) => {

	const myStatus = useMyProfileStore(state => state.status)

	const { data: status, isLoading: isStatusLoading } = useQuery({
		queryKey: [STATUS_QUERY_KEY],
		queryFn: profileService.getStatus(userId),
		select: ({ data }) => data,

		enabled: !isMyProfile
	})

	const [ haveStatusInput, setHaveStatusInput ] = useState(!myStatus && !isMyProfile);

	return {
		isStatusLoading,
		status: isMyProfile ? myStatus : status,
		haveStatusInput: isMyProfile ? haveStatusInput : false,

		toggleHaveStatusInput: isMyProfile ? () => setHaveStatusInput(!haveStatusInput) : () => {},
		setHaveStatusInput
	};
};

