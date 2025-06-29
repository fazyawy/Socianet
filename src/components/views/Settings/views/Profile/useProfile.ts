import { useMyProfileStore } from "@/store/useMyProfileStore";

import { SubmitHandler, useForm } from "react-hook-form";

import { IProfileForm } from "./profile.type";
import { useMutation } from "@tanstack/react-query";
import { PROFILE_MUTATION_KEY } from "@/constants/queryKeys.const";
import profileService from "@/services/profile.service";

export const useProfile = () => {

	// set selectors and put all data to mutate

	const myProfile = useMyProfileStore(state => state.myProfile);

	const { mutate } = useMutation({
		mutationKey: [PROFILE_MUTATION_KEY],
		mutationFn: profileService.setProfile
	})

	const { register, formState: { errors }, handleSubmit, reset } = useForm<IProfileForm>();

	const onSubmit: SubmitHandler<IProfileForm> = (data) => {
		mutate(data)
		console.log(data);
		reset()
	};

	console.log(myProfile)

	return {
		myProfile,
		onSubmit: handleSubmit(onSubmit),
		register, errors
	}
};

