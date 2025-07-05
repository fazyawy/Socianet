import { BaseSyntheticEvent, HTMLInputTypeAttribute } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface IFormInput {
	type?: HTMLInputTypeAttribute | "textarea",
	title: string,
	register: UseFormRegisterReturn | {
		value: string,
		onChange: (e: BaseSyntheticEvent) => void,
		onBlur?: () => void,
	},
	errors?: FieldError,

	label?: string,
	placeholder?: string,
	className?: string,
}