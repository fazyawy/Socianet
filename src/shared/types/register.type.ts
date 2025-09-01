import { BaseSyntheticEvent } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export type RegisterType = UseFormRegisterReturn | {
		value: string,
		onChange: (e: BaseSyntheticEvent) => void,
		onBlur?: () => void,
	}