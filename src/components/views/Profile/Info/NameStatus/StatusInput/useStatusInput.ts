import { IStatusInput } from "./statusInput.type";

import { useInput } from "@/hooks/useInput";
import { useChangeStatus } from "@/hooks/useChangeStatus";
import { useMyProfileStore } from "@/store/useMyProfileStore";

export const useStatusInput = ({ setHaveStatusInput }: IStatusInput) => {

	const { mutate, isPending } = useChangeStatus();

	const myStatus = useMyProfileStore(state => state.status);

	const input = useInput(myStatus || "");

	const onSaveStatusClick = () => {
		mutate(input.value);
		setHaveStatusInput(false);
		if (!input.value) setHaveStatusInput(true);
	}

	return {
		input,
		onSaveStatusClick,
		isPending
	}
};

