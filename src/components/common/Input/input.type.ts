import { HTMLInputTypeAttribute } from "react";

import { RegisterType } from "@/shared/types/register.type";

export interface IInput {
	register?: RegisterType

	inputMode?: "search" | "email" | "tel" | "text" | "url" | "none" | "numeric" | "decimal"
	id?: string
	placeholder?: string
	title: string,
	type?: HTMLInputTypeAttribute,
	className?: string
}