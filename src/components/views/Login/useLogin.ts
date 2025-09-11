import { useId } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { ILogin } from "@/shared/types/login.type";

import { useAuthStore } from "@/store/useAuthStore";
import { getIsAuthSelector } from "@/store/selectors/auth.selector";
import { useLoginMutation } from "./hook/useLoginMutation";

export const useLogin = () => {
	const rememberMeId = useId();

	const isAuth = useAuthStore(getIsAuthSelector);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<ILogin>();

	const { data, mutate, isPending } = useLoginMutation();

	console.log(data);

	const onSubmit: SubmitHandler<ILogin> = (data) => {
		console.log(data);
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

