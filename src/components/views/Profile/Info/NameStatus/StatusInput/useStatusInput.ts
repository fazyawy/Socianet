import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useShallow } from "zustand/shallow";

import { STATUS_MUTATION_KEY, MY_STATUS_QUERY_KEY } from "@/constants/queryKeys.const";
import { useInput } from "@/hooks/useInput";
import profileService from "@/services/profile.service";
import { useMyProfileStore } from "@/store/useMyProfileStore";
import { IStatusInput } from "./statusInput.type";

export const useStatusInput = ({ toggleStatusInput }: IStatusInput) => {

	const queryClient = useQueryClient()

	const [currentStatus, setCurrentStatus, status] = useMyProfileStore(useShallow(state => [state.currentStatus, state.setCurrentStatus, state.status]));

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
		if (currentStatus !== null && currentStatus !== status) {
			mutate(currentStatus)
			console.log(currentStatus)
		}
	}, [currentStatus])

	const setStatusOnClick = (value: string) => {
		setCurrentStatus(value);
		if (!value) toggleStatusInput();
	}
	return useInput("", setStatusOnClick)
};

