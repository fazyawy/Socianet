import { IInput } from "@/shared/types/input.type";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface IStatusInput extends IInput {
	register?: UseFormRegisterReturn
	toggleStatusInput?: () => void,
	errors?: FieldError
}