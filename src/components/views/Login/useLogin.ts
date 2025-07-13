import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useId } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { AUTH_QUERY_KEY, LOGIN_MUTATION_KEY } from "@/constants/queryKeys.const";

import authService from "@/services/auth.service";

import { ILogin } from "@/shared/types/login.type";

import { useAuthStore } from "@/store/useAuthStore";
import { useMyProfileStore } from "@/store/useMyProfileStore";
import { getIsAuthSelector } from "@/store/selectors/auth.selector";

export const useLogin = () => {
	const rememberMeId = useId();

	const queryClient = useQueryClient();

	const isAuth = useAuthStore(getIsAuthSelector)
	const setMyId = useMyProfileStore(state => state.setMyId)

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<ILogin>();

	const { data, mutate, isPending } = useMutation({
		mutationKey: LOGIN_MUTATION_KEY,
		mutationFn: authService.login,

		onSuccess: ({data}) => {
			queryClient.invalidateQueries({
				queryKey: [AUTH_QUERY_KEY]
			})

			setMyId(data?.data.userId)
		}
	})

	console.log(data)

	const onSubmit: SubmitHandler<ILogin> = (data) => {
		console.log(data)
		mutate(data);
		reset()
	};

	return {
		onSubmit: handleSubmit(onSubmit),
		register,
		isPending,
		errors,
		rememberMeId,

		isAuth
	}
};

