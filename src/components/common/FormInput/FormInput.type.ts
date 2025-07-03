import { HTMLInputTypeAttribute } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface IFormInput {
	type?: HTMLInputTypeAttribute | "textarea",
	title: string,
	label?: string,
	placeholder?: string,
	register: UseFormRegisterReturn | {
		value: string,
		onChange: () => void,
		onBlur?: () => void,
	},
	errors?: FieldError,

	className?: string
}