import { BaseSyntheticEvent, useState } from "react";

export const useInput = <T>(initialValue: T, isFile?: boolean) => {

	const [value, setValue] = useState<T>(initialValue);

	const onChange = (e: BaseSyntheticEvent) => {
		setValue(e.target.value);
	}

	const onUpload = () => setValue;
	console.log(value)

	const adds = isFile ? {onUpload} : {onChange}

	return {
		value,
		...adds,
	}
};

