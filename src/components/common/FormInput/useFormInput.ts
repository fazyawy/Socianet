import { useInput } from "@/hooks/useInput";
import { useId } from "react";
import { RegisterType } from "./FormInput.type";

export const useFormInput = (register?: RegisterType) => {
	const inputId = useId();

	const input = useInput();

	return {
		inputId,
		input: !!register ? register : input
	}
};

