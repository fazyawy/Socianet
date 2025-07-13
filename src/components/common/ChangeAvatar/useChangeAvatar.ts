import { BaseSyntheticEvent } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { PROFILE_PHOTO_MUTATION_KEY, PROFILE_QUERY_KEY } from "@/constants/queryKeys.const";
import profileService from "@/services/profile.service";
import { useMyProfileStore } from "@/store/useMyProfileStore";

export const useChangeAvatar = (src: string | null | undefined) => {

	const queryClient = useQueryClient();

	const {photos} = useMyProfileStore(state => state.myProfile)

	const { mutate } = useMutation({
		mutationKey: [PROFILE_PHOTO_MUTATION_KEY],
		mutationFn: profileService.setProfilePhoto,

		onSuccess: () => {
			queryClient.invalidateQueries(({
				queryKey: [PROFILE_QUERY_KEY]
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
		image: !!src ? src : photos.large || ""
	}
};

