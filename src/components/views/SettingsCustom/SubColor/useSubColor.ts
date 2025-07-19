import { BaseSyntheticEvent } from "react";
import { useShallow } from "zustand/shallow";

import { useSettingsStore } from "@/store/settings.store";


export const useSubColor = () => {
	const [value, setValue] = useSettingsStore(useShallow(state => [state.primaryColor, state.setPrimaryColor]));

	const onChange = (e: BaseSyntheticEvent) => {
		setValue(e.target.value);
	}

	const onFocusOut = () => {
		localStorage.setItem("primary", value);
	}

	return {
		value,
		onChange,

		onFocusOut
	}
};

