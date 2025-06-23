import { useMutation, useQueryClient } from "@tanstack/react-query";

import { PROFILE_PHOTO_MUTATION_KEY, PROFILE_QUERY_KEY } from "@/constants/queryKeys.const";
import profileService from "@/services/profile.service";
import { ChangeEvent, useState } from "react";

export const useInfoAvatar = (src: string) => {

	const queryClient = useQueryClient();

	const [file, setFile] = useState<File>();

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) {
			return;
		}

		console.log(e.target)
		setFile(e.target.files[0]);
	};

	return {
		handleFileChange,
		image: file ? URL.createObjectURL(file) : src
	}

	// return useMutation({
	// 	mutationKey: [PROFILE_PHOTO_MUTATION_KEY],
	// 	mutationFn: profileService.setProfilePhoto,

	// 	onSuccess: () => {
	// 		queryClient.invalidateQueries(({
	// 			queryKey: PROFILE_QUERY_KEY
	// 		}))
	// 	}
	// })
};

