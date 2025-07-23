import { BaseSyntheticEvent, useState } from "react";

export const useInput = (initialValue: string = "", fn?: (value: string) => void) => {

	const [value, setValue] = useState<string>(initialValue);

	const onChange = (e: BaseSyntheticEvent) => {
		setValue(e.target.value);
	}

	const onClick = () => {
		if (!fn) return;

		console.log(value);
		fn(value);
		setValue("");
	}

	return {
		value,
		onChange,
		onClick,
	}
};

