import { BaseSyntheticEvent, useState } from "react";

export const useInput = (initialValue: string = "") => {

	const [value, setValue] = useState<string>(initialValue);

	const onChange = (e: BaseSyntheticEvent) => {
		setValue(e.target.value);
	}

	return {
		value,
		onChange,
	}
};

