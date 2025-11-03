import { useStatusQuery } from "./hooks/useStatusQuery";

import { useToggle } from "@/hooks/useToggle";

export const useNameStatus = (userId: number, isMyProfile: boolean) => {

	const { data: status, isLoading: isStatusLoading } = useStatusQuery(userId, isMyProfile)

	const [ haveStatusInput, toggleHaveStatusInput, setHaveStatusInput ] = useToggle(!isMyProfile);

	return {
		isStatusLoading,
		status,
		haveStatusInput: isMyProfile ? haveStatusInput : false,

		toggleHaveStatusInput: isMyProfile ? () => toggleHaveStatusInput : () => {},
		setHaveStatusInput
	};
};

