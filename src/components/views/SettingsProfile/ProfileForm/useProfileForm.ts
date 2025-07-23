import { useProfileMutation } from "./hooks/useProfileMutation";

import { IProfileForm } from "./profileForm.type";
import { getProfileFormSelector } from "./profileForm.selector";

import { SubmitHandler, useForm } from "react-hook-form";

import { useMyProfileStore } from "@/store/useMyProfileStore";

import { useChangeStatus } from "@/hooks/useChangeStatus";

export const useProfileForm = () => {

	const { mutate: mutateStatus } = useChangeStatus();

	const [{ photos, ...myProfile }, status] = useMyProfileStore(getProfileFormSelector());

	const { mutate: mutateProfile } = useProfileMutation();

	const { register, formState: { errors }, handleSubmit, reset } = useForm<IProfileForm>();

	const onSubmit: SubmitHandler<IProfileForm> = ({ status, ...data }) => {
		mutateProfile({ ...myProfile, ...data })

		mutateStatus(status)
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

