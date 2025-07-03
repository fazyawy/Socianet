import { STATUS_MUTATION_KEY, STATUS_QUERY_KEY } from "@/constants/queryKeys.const";
import { useInput } from "@/hooks/useInput";
import profileService from "@/services/profile.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useStatusInput = (toggleStatusInput: () => void) => {

	const queryClient = useQueryClient()

	const { mutate } = useMutation({
		mutationKey: [STATUS_MUTATION_KEY],
		mutationFn: profileService.setProfileStatus,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [STATUS_QUERY_KEY]
			});
			toggleStatusInput();
		}
	})

	const setStatus = (value: string) => {
		mutate(value);
		if(!value) toggleStatusInput();
	}
	return useInput("", setStatus)
};

