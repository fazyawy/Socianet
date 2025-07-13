import { IStatusInput } from "./statusInput.type";

import { useInput } from "@/hooks/useInput";
import { useChangeStatus } from "@/hooks/useChangeStatus";

export const useStatusInput = ({ setHaveStatusInput }: IStatusInput) => {

	const { mutate, isPending } = useChangeStatus();

	const setStatusOnClick = (value: string) => {
		mutate(value);
		setHaveStatusInput(false)
		if (!value) setHaveStatusInput(true);
	}
	return {
		input: useInput("", setStatusOnClick),
		isPending
	}
};

