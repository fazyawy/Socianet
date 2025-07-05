import { STATUS_MUTATION_KEY, MY_STATUS_QUERY_KEY } from "@/constants/queryKeys.const";
import { useInput } from "@/hooks/useInput";
import profileService from "@/services/profile.service";
import { useMyProfileStore } from "@/store/useMyProfileStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useShallow } from "zustand/shallow";
import { IStatusInput } from "./statusInput.type";

export const useStatusInput = ({ toggleStatusInput }: IStatusInput) => {

	const queryClient = useQueryClient()

	const [status, setStatus] = useMyProfileStore(useShallow(state => [state.status, state.setStatus]))

	const { mutate } = useMutation({
		mutationKey: [STATUS_MUTATION_KEY],
		mutationFn: profileService.setProfileStatus,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [MY_STATUS_QUERY_KEY]
			});
			toggleStatusInput();
		}
	})

	useEffect(() => {
		// if (status !== null || status !== status) mutate(status)
	}, [status])

	const setStatusOnBlur = (value: string) => {
		setStatus(value);
		if (!value) toggleStatusInput();
	}
	return useInput("", setStatusOnBlur)
};

