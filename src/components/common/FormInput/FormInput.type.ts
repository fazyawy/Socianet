import { FieldError, FieldValues } from "react-hook-form";

export interface IFormInput {
	type?: string,
	title: string,
	label?: string,
	placeholder?: string,
	register: FieldValues,
	errors?: FieldError
}