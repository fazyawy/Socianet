import { UseFormRegisterReturn } from "react-hook-form";
import { BaseSyntheticEvent, HTMLInputTypeAttribute } from "react";

export interface IInput {
	register: UseFormRegisterReturn | {
		onChange: (e: BaseSyntheticEvent) => void,
		onBlur?: () => void,
		value: string
	}

	inputMode?: "search" | "email" | "tel" | "text" | "url" | "none" | "numeric" | "decimal"
	id?: string
	placeholder?: string
	title: string,
	type?: HTMLInputTypeAttribute,
	className?: string
}