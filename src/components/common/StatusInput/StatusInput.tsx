import { IStatusInput } from "./statusInput.type";
import { useStatusInput } from "./useStatusInput";

export const StatusInput = ({className, toggleStatusInput}: IStatusInput) => {

	const input = useStatusInput(toggleStatusInput);

	return (
		<input title="Set the status" type="text" className={className} {...input} />
		// <FormInput title="Set the status" type="text" className={className} register={...input} />

	)
};

