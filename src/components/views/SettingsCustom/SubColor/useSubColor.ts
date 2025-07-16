import { BaseSyntheticEvent, useState } from "react";
import { useShallow } from "zustand/shallow";

import { useSettingsStore } from "@/store/settings.store";


export const useSubColor = () => {
	const [value, setValue] = useSettingsStore(useShallow(state => [state.primaryColor, state.setPrimaryColor]));

	const [ isChanged, setIsChanged ] = useState<boolean>(false);

	const onChange = (e: BaseSyntheticEvent) => {
		setValue(e.target.value)
		setIsChanged(true);
	}

	const onSaveClick = () => {
		localStorage.setItem("primary", value);
		setIsChanged(false);
	}

	return {
		value,
		onChange,

		onSaveClick,
		isChanged
	}
};

