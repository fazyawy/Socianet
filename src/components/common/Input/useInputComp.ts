import { useInput } from "@/hooks/useInput";

import { RegisterType } from "@/shared/types/register.type";

export const useInputComp = (register?: RegisterType) => {

	const input = useInput();

	return !!register ? register : input
};

