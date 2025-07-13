import { MY_STATUS_QUERY_KEY, STATUS_MUTATION_KEY } from "@/constants/queryKeys.const";
import profileService from "@/services/profile.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useChangeStatus = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationKey: [STATUS_MUTATION_KEY],
		mutationFn: profileService.setProfileStatus,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [MY_STATUS_QUERY_KEY]
			});
			// toggleStatusInput();
		}
	})
};

