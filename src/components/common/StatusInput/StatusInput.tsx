import { IStatusInput } from "./statusInput.type";
import { useStatusInput } from "./useStatusInput";

import { FormInput } from "../FormInput/FormInput";


export const StatusInput = ({ className, toggleStatusInput, isClear, label, register, errors }: IStatusInput) => {

	const input = useStatusInput(toggleStatusInput, register);

	return (
		<FormInput
			title="Set new status"
			label={label}
			type="text"
			className={className}
			register={input}
			isClear={isClear}
			errors={errors}/>
	)
};

