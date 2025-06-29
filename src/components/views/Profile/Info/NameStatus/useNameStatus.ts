import { STATUS_MUTATION_KEY, STATUS_QUERY_KEY } from "@/constants/queryKeys.const";
import { useInput } from "@/hooks/useInput";
import { useToggle } from "@/hooks/useToggle";
import profileService from "@/services/profile.service";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useNameStatus = (userId: number, isMyProfile: boolean) => {

	const { data: status, isLoading: isStatusLoading, refetch: statusRefetch, isSuccess } = useQuery({
		queryKey: [STATUS_QUERY_KEY],
		queryFn: profileService.getStatus(userId),
		select: ({ data }) => data,
	})

	const [ haveStatusInput, toggleStatusInput ] = useToggle(isSuccess && !status && isMyProfile);

	const { mutate } = useMutation({
		mutationKey: [STATUS_MUTATION_KEY],
		mutationFn: profileService.setProfileStatus,
		onSuccess: () => {
			statusRefetch();
			toggleStatusInput();
		}
	})

	const setStatus = (value: string) => {
		mutate(value);
		if(!value) toggleStatusInput();
	}

	return {
		input: useInput("", setStatus),
		isStatusLoading,
		status,
		haveStatusInput,
		toggleStatusInput
	};
};

