import { IProfileForm } from "../profile.type";

import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useMyProfileStore } from "@/store/useMyProfileStore";

import { PROFILE_MUTATION_KEY, PROFILE_QUERY_KEY } from "@/constants/queryKeys.const";
import profileService from "@/services/profile.service";

export const useProfileForm = () => {

	const queryClient = useQueryClient();

	const {photos, ...myProfile} = useMyProfileStore(state => state.myProfile);

	const { mutate } = useMutation({
		mutationKey: [PROFILE_MUTATION_KEY],
		mutationFn: profileService.setProfile,

		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: PROFILE_QUERY_KEY
			})
		}
	})

	const { register, formState: { errors }, handleSubmit, reset } = useForm<IProfileForm>();

	const onSubmit: SubmitHandler<IProfileForm> = ({status, ...data}) => {
		const fullData = {...myProfile, ...data}

		mutate(fullData)
		reset()
	};

	return {
		onSubmit: handleSubmit(onSubmit),
		register,
		errors,
		myProfile,
		src: photos.large
	}
};

