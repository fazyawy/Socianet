import { FieldError } from "react-hook-form";

import { IInput } from "../Input/input.type";

export interface IFormInput extends Omit<IInput, "id"> {
	type?: "text" | "password" | "email" | "textarea",
	errors?: FieldError,

	label?: string,
}