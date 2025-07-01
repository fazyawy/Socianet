import { useMyProfileStore } from "@/store/useMyProfileStore";

import { SubmitHandler, useForm } from "react-hook-form";

import { IProfileForm } from "./profile.type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PROFILE_MUTATION_KEY, PROFILE_QUERY_KEY } from "@/constants/queryKeys.const";
import profileService from "@/services/profile.service";
import { useNavigate } from "react-router";

export const useProfile = () => {

	const queryClient = useQueryClient();

	const navigate = useNavigate();
// f5 mistake

	const {photos, ...myProfile} = useMyProfileStore(state => state.myProfile);

	const { register, formState: { errors }, handleSubmit, reset } = useForm<IProfileForm>({
		defaultValues: myProfile
	});

	const { mutate, data } = useMutation({
		mutationKey: [PROFILE_MUTATION_KEY],
		mutationFn: profileService.setProfile,

		onSuccess: (data) => {
			queryClient.invalidateQueries({
				queryKey: PROFILE_QUERY_KEY
			})

			navigate("/");
		}
	})

	const onSubmit: SubmitHandler<IProfileForm> = (data) => {
		const fullData = {...myProfile, ...data}

		mutate(fullData)
		console.log(fullData);
		reset()
	};

	console.log(data)

	return {
		onSubmit: handleSubmit(onSubmit),
		register,
		errors
	}
};

