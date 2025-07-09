import { useMutation, useQueryClient } from "@tanstack/react-query";

import { MY_PROFILE_QUERY_KEY, PROFILE_MUTATION_KEY } from "@/constants/queryKeys.const";
import profileService from "@/services/profile.service";

export const useProfileMutation = () => {

	const queryClient = useQueryClient();

	return useMutation({
			mutationKey: [PROFILE_MUTATION_KEY],
			mutationFn: profileService.setProfile,

			onSuccess: () => {
				queryClient.invalidateQueries({
					queryKey: MY_PROFILE_QUERY_KEY
				})
			}
		})
};

