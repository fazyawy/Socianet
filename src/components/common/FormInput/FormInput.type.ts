import { BaseSyntheticEvent } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface IFormInput {
	type?: "text" | "password" | "email" | "textarea",
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