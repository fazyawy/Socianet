import { useState } from "react";

type ToggleReturnType = [
	isValue: boolean,
	toggleIsValue: () => void
]

export const useToggle = (defaultValue = false): ToggleReturnType => {

	const [isValue, setIsValue] = useState<boolean>(defaultValue);

	const toggleIsValue = () => {
		setIsValue(prev => !prev)
	};

	return [isValue, toggleIsValue]
};

