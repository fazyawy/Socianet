import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";

export interface IFormInput {
	type?: string,
	title: string,
	label?: string,
	placeholder?: string,
	// register: UseFormRegister<Record<string, string>>,
	register: FieldValues,
	errors?: FieldError
}