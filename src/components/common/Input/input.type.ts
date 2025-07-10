import { UseFormRegisterReturn } from "react-hook-form";
import { BaseSyntheticEvent, HTMLInputTypeAttribute } from "react";

type onChangeType = (e: BaseSyntheticEvent) => void;

export interface IInput {
	register: UseFormRegisterReturn | {
		onChange: onChangeType,
		value: string
	}

	inputMode?: "search" | "email" | "tel" | "text" | "url" | "none" | "numeric" | "decimal"
	id?: string
	placeholder?: string
	title: string,
	type?: HTMLInputTypeAttribute,
	className?: string
}