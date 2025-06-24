import { BaseSyntheticEvent } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { PROFILE_PHOTO_MUTATION_KEY, PROFILE_QUERY_KEY } from "@/constants/queryKeys.const";
import profileService from "@/services/profile.service";

export const useInfoAvatar = (src?: string) => {

	const queryClient = useQueryClient();

	const { mutate } = useMutation({
		mutationKey: [PROFILE_PHOTO_MUTATION_KEY],
		mutationFn: profileService.setProfilePhoto,

		onSuccess: () => {
			queryClient.invalidateQueries(({
				queryKey: PROFILE_QUERY_KEY
			}))
		}
	})

	const handleFileChange = ({ target }: BaseSyntheticEvent) => {
		if (target.files) {
			mutate(target.files[0])
		}
	};

	return {
		handleFileChange,
		image: src
	}
};

