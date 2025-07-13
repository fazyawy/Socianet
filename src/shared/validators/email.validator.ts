import { minLengthValidator } from "./minLength.validator";
import { requiredValidator } from "./required.validator";

export const emailValidator = (minLengthValue: number) => ({
	...requiredValidator,
	...minLengthValidator(minLengthValue),
	pattern: {
		value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
		message: "invalid email address"
	}
})