import { IProfileForm } from "./profileForm.type";

import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useMyProfileStore } from "@/store/useMyProfileStore";

import { PROFILE_MUTATION_KEY, MY_PROFILE_QUERY_KEY } from "@/constants/queryKeys.const";
import profileService from "@/services/profile.service";
import { getProfileFormSelector } from "./profileForm.selector";

export const useProfileForm = () => {

	const queryClient = useQueryClient();

	const [{ photos, ...myProfile }, status, setCurrentStatus] = useMyProfileStore(getProfileFormSelector());

	const { mutate } = useMutation({
		mutationKey: [PROFILE_MUTATION_KEY],
		mutationFn: profileService.setProfile,

		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: MY_PROFILE_QUERY_KEY
			})
		}
	})

	const { register, formState: { errors }, handleSubmit, reset } = useForm<IProfileForm>();

	const onSubmit: SubmitHandler<IProfileForm> = ({ status, ...data }) => {
		const fullData = { ...myProfile, ...data }

		mutate(fullData)
		if (!!status) setCurrentStatus(status)
		reset()
	};

	return {
		onSubmit: handleSubmit(onSubmit),
		register,
		errors,
		myProfile,
		status: status || ""
	}
};

