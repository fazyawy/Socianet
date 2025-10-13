import { FieldError } from "react-hook-form";

import { IInput } from "../Input/input.type";
import { RegisterType } from "@/shared/types/register.type";

export interface IInputDataInFormInput extends Omit<Omit<IInput, "id">, "className"> {
	type?: "text" | "password" | "email" | "textarea",
	label?: string,
	placeholder?: string
}

export interface IFormInput {
	inputData: IInputDataInFormInput,
	errors?: FieldError,
	className?: string,
	testid?: string,
	register?: RegisterType
}