import { BaseSyntheticEvent, HTMLInputTypeAttribute, useState } from "react";

import { useInput } from "@/hooks/useInput";

import { RegisterType } from "@/shared/types/register.type";

export const useInputComp = (register?: RegisterType, type: HTMLInputTypeAttribute = "text") => {

	const [ isActive, setIsActive ] = useState<boolean>(false);

	const onChange = (e:BaseSyntheticEvent) => {
		setIsActive(prev => !prev)
		console.log(e.target.checked);
	}

	const checkboxInput = {
		onChange,
		checked: isActive
	}

	const input = useInput();

	return !!register ? register : type === "checkbox" ? checkboxInput : input
};

