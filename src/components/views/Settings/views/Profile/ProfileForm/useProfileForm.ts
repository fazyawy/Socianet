import { IProfileForm } from "../profile.type";

import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useMyProfileStore } from "@/store/useMyProfileStore";

import { PROFILE_MUTATION_KEY, MY_PROFILE_QUERY_KEY } from "@/constants/queryKeys.const";
import profileService from "@/services/profile.service";
import { useShallow } from "zustand/shallow";

export const useProfileForm = () => {

	const queryClient = useQueryClient();

	const [profile, status, setStatus] = useMyProfileStore(useShallow(state => [state.myProfile, state.status, state.setStatus]));

	const {photos, ...myProfile} = profile;

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

	const onSubmit: SubmitHandler<IProfileForm> = ({status, ...data}) => {
		const fullData = {...myProfile, ...data}

		mutate(fullData)
		setStatus(status)
		reset()
	};

	return {
		onSubmit: handleSubmit(onSubmit),
		register,
		errors,
		myProfile,
		src: photos.large,
		status
	}
};

