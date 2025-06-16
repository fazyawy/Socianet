import { useState } from "react";

type TypeToggleReturn = [
	isValue: boolean,
	toggleIsValue: () => void
]

export const useToggle = (defaultValue = false, trueLogic = ():void => {}, falseLogic = trueLogic): TypeToggleReturn => {

	const [isValue, setIsValue] = useState<boolean>(defaultValue);

	const toggleIsValue = () => {
		if(isValue) trueLogic();
		else falseLogic();

		setIsValue(!isValue)
	};

	return [isValue, toggleIsValue]
};

